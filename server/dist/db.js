"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFlight = exports.getDirectFlightsByLocationDate = exports.getDepartureFlightsByDay = exports.getDirectFlightsByLocation = exports.getAllFlights = void 0;
const Data_1 = __importDefault(require("./Data"));
const db = Data_1.default;
function getAllFlights() {
    return db;
}
exports.getAllFlights = getAllFlights;
function getDirectFlightsByLocation(from, to) {
    try {
        const allFlights = db;
        const filteredRoute = allFlights.filter((flightRoute) => {
            const { departureDestination, arrivalDestination } = flightRoute;
            const route = departureDestination === from && arrivalDestination === to;
            return route;
        });
        const itineraries = filteredRoute.map((route) => route.itineraries).flat();
        const availbleFlights = itineraries.filter((flight) => flight.availableSeats > 0);
        return availbleFlights;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while fetching direct flights from ${from} to ${to}`);
    }
}
exports.getDirectFlightsByLocation = getDirectFlightsByLocation;
function getDepartureFlightsByDay(date) {
    try {
        const flights = db.map((flight) => flight.itineraries).flat();
        const departures = flights.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date);
        return departures;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while fetching flights on ${date}`);
    }
}
exports.getDepartureFlightsByDay = getDepartureFlightsByDay;
function getDirectFlightsByLocationDate(from, to, date) {
    try {
        const filteredRoute = db.filter((flightRoute) => {
            const { departureDestination, arrivalDestination } = flightRoute;
            const route = departureDestination === from && arrivalDestination === to;
            return route;
        });
        const itineraries = filteredRoute.map((route) => route.itineraries).flat();
        const availbleFlights = itineraries.filter((flight) => flight.availableSeats > 0);
        const departures = availbleFlights.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date);
        return departures;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while fetching flights `);
    }
}
exports.getDirectFlightsByLocationDate = getDirectFlightsByLocationDate;
function findFlight(from, to) {
    try {
        const directFlights = getDirectFlightsByLocation(from, to);
        if (directFlights.length > 0) {
            return directFlights;
        }
        const filteredRoute = db.filter((flightRoute) => flightRoute.arrivalDestination === to);
        if (filteredRoute.length > 0) {
        }
        return filteredRoute;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while searching for flights from ${from} to ${to}`);
    }
}
exports.findFlight = findFlight;
