"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
// import FlightsData from './Data';
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
app.post("/api/conectflights", (0, cors_1.default)(), (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const availableFlights = (0, db_1.findFlight)(from, to);
    return res.status(200).json({
        message: `${availableFlights.length} flights available`,
        flights: availableFlights,
    });
});
app.post("/api/flights", (0, cors_1.default)(), (req, res) => {
    try {
        const from = req.body.from;
        const to = req.body.to;
        const date = req.body.date;
        if (from && to && date) {
            const availableFlights = (0, db_1.getDirectFlightsByLocationDate)(from, to, date);
            if (availableFlights.length === 0) {
                return res.status(404).json({
                    error: `No direct flights found from ${from} to ${to} departing on ${date}`,
                });
            }
            return res.status(200).json({
                message: `${availableFlights.length} flights available`,
                flights: availableFlights,
            });
        }
        else if (from && to) {
            const availableFlightsByLocation = (0, db_1.getDirectFlightsByLocation)(from, to);
            if (availableFlightsByLocation.length === 0) {
                return res.status(404).json({
                    error: `No direct flights found from ${from} to ${to}`,
                });
            }
            return res.status(200).json({
                message: `${availableFlightsByLocation.length} flights available`,
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
                error: "Bad Request: Please provide 'from' and 'to' or 'day' in the request body",
            });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.default = app;
