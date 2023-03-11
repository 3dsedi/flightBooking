"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type"],
}));
app.get("/api/flights", (0, cors_1.default)(), (req, res) => {
    const allFlights = (0, db_1.getAllFlights)();
    return res.status(200).json({ Flights: allFlights });
});
app.post("/api/flights", (0, cors_1.default)(), (req, res) => {
    try {
        const from = req.body.from;
        const to = req.body.to;
        const date = req.body.date;
        const directFlight = req.body.directFlight;
        if (from && to && date) {
            const availableFlights = directFlight ?
                (0, db_1.oneWayDirectFlightsByLocationDate)(from, to, date) :
                (0, db_1.findOneWayFlightByLocationDate)(from, to, date);
            if (Object.keys(availableFlights).length === 0) {
                return res.status(404).json({
                    error: `No flights found from ${from} to ${to} departing on ${date}`,
                });
            }
            console.log(availableFlights);
            return res.status(200).json({
                message: `${Object.keys(availableFlights).length} flights available`,
                availableFlights,
            });
        }
        else if (from && to) {
            const availableFlightsByLocation = directFlight ?
                (0, db_1.oneWayDirectFlightsByLocation)(from, to) :
                (0, db_1.findOneWayFlight)(from, to);
            if (Object.keys(availableFlightsByLocation).length === 0) {
                return res.status(404).json({
                    error: `No flights found from ${from} to ${to}`,
                });
            }
            return res.status(200).json({
                message: `${Object.keys(availableFlightsByLocation).length} flights available`,
                flights: availableFlightsByLocation,
            });
        }
        else if (date) {
            const departureTimes = (0, db_1.getDepartureFlightsByDay)(date);
            if (departureTimes.length === 0) {
                return res.status(404).json({
                    error: `No flights found departing on ${date}`,
                });
            }
            return res.status(200).json({
                message: `${departureTimes.length} flights departing on ${date}`,
                departures: departureTimes,
            });
        }
        else {
            return res.status(400).json({
                error: "Bad Request: Please provide 'from' and 'to' or 'date' in the request body",
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
app.post("/api/reserve", (0, cors_1.default)(), (req, res) => {
    const flightId = req.body.flightId;
    try {
        const itinerary = (0, db_1.reserveSeat)(flightId);
        return res.status(200).json({
            message: `Seat reserved successfully for flight ${flightId}.`,
            itinerary
        });
    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ error: `No available seats for flight ${flightId}.` });
    }
});
exports.default = app;
