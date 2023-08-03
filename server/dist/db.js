"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveSeat = exports.findOneWayFlightByLocationDate = exports.findOneWayFlight = exports.oneWayDirectFlightsByLocationDate = exports.getDepartureFlightsByDay = exports.oneWayDirectFlightsByLocation = exports.getAllFlights = void 0;
const Data_1 = __importDefault(require("./Data"));
const db = Data_1.default;
// get all flights
function getAllFlights() {
    return db;
}
exports.getAllFlights = getAllFlights;
// get direct flights with location
function oneWayDirectFlightsByLocation(from, to) {
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
exports.oneWayDirectFlightsByLocation = oneWayDirectFlightsByLocation;
// get direct flights with date
function getDepartureFlightsByDay(date) {
    try {
        const departures = [];
        for (const flight of db) {
            const itineraries = flight.itineraries.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date && itinerary.availableSeats > 0);
            if (itineraries.length > 0) {
                const departure = {
                    route_id: flight.route_id,
                    departureDestination: flight.departureDestination,
                    arrivalDestination: flight.arrivalDestination,
                    itineraries: itineraries,
                };
                departures.push(departure);
            }
        }
        return departures;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while fetching flights on ${date}`);
    }
}
exports.getDepartureFlightsByDay = getDepartureFlightsByDay;
// get direct flights with location and date
function oneWayDirectFlightsByLocationDate(from, to, date) {
    try {
        const directFlights = oneWayDirectFlightsByLocation(from, to);
        const departures = directFlights.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date && itinerary.availableSeats > 0);
        return departures;
    }
    catch (error) {
        console.error(error);
        throw new Error(`Error occurred while fetching flights`);
    }
}
exports.oneWayDirectFlightsByLocationDate = oneWayDirectFlightsByLocationDate;
// get direct and conection flights by location
function findOneWayFlight(from, to) {
    const directFlights = oneWayDirectFlightsByLocation(from, to);
    if (directFlights.length > 0) {
        return directFlights;
    }
    const flightsToArrivalDestination = db.filter((flightRoute) => flightRoute.arrivalDestination === to);
    if (flightsToArrivalDestination.length === 0) {
        throw new Error(`No flights from ${from} to ${to}`);
    }
    const departureOptions = flightsToArrivalDestination.map((flightRoute) => flightRoute.departureDestination);
    const connectionFlights = [];
    for (const departure of departureOptions) {
        const flights = db.filter((flightRoute) => flightRoute.departureDestination === from &&
            flightRoute.arrivalDestination === departure);
        if (flights.length > 0) {
            connectionFlights.push(...flights);
        }
    }
    if (connectionFlights.length === 0) {
        throw new Error(`No flights from ${from} to ${to}`);
    }
    return {
        connectionFlights,
        flightsToArrivalDestination,
    };
}
exports.findOneWayFlight = findOneWayFlight;
// get direct and conection flights by location and date
function findOneWayFlightByLocationDate(from, to, date) {
    const directFlights = oneWayDirectFlightsByLocationDate(from, to, date);
    if (directFlights.length > 0) {
        return directFlights;
    }
    // finde flights to end point
    const flightsToArrival = db.filter((flightRoute) => flightRoute.arrivalDestination === to);
    if (flightsToArrival.length === 0) {
        throw new Error(`No flights from ${from} to ${to}`);
    }
    const departures = [];
    for (const flight of flightsToArrival) {
        const itineraries = flight.itineraries.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date && itinerary.availableSeats > 0);
        if (itineraries.length > 0) {
            const departure = {
                route_id: flight.route_id,
                departureDestination: flight.departureDestination,
                arrivalDestination: flight.arrivalDestination,
                itineraries: itineraries,
            };
            departures.push(departure);
        }
    }
    const flightsToArrivalDestination = departures;
    const departureOptions = flightsToArrivalDestination.map((flightRoute) => flightRoute.departureDestination);
    // finde flights from departure to conection locations
    const connectionFlights = [];
    for (const departure of departureOptions) {
        const flights = db.filter((flightRoute) => flightRoute.departureDestination === from &&
            flightRoute.arrivalDestination === departure);
        if (flights.length > 0) {
            connectionFlights.push(...flights);
        }
    }
    if (connectionFlights.length === 0) {
        throw new Error(`No flights from ${from} to ${to}`);
    }
    console.log(connectionFlights);
    const conectionnDepartures = [];
    for (const flight of connectionFlights) {
        const itineraries = flight.itineraries.filter((itinerary) => itinerary.departureAt.slice(0, 10) === date && itinerary.availableSeats > 0);
        if (itineraries.length > 0) {
            const departure = {
                route_id: flight.route_id,
                departureDestination: flight.departureDestination,
                arrivalDestination: flight.arrivalDestination,
                itineraries: itineraries,
            };
            conectionnDepartures.push(departure);
        }
    }
    const flightsToConectonDestination = conectionnDepartures;
    console.log(flightsToConectonDestination);
    return {
        flightsToConectonDestination,
        flightsToArrivalDestination,
    };
}
exports.findOneWayFlightByLocationDate = findOneWayFlightByLocationDate;
// reserve flight by flight_id
function reserveSeat(flightId) {
    const flight = db.find((flightRoute) => {
        return flightRoute.itineraries.some((itinerary) => itinerary.flight_id === flightId);
    });
    if (!flight) {
        throw new Error(`Flight with ID ${flightId} not found.`);
    }
    const itinerary = flight.itineraries.find((itinerary) => itinerary.flight_id === flightId);
    if (!itinerary) {
        throw new Error(`Itinerary with ID ${flightId} not found in flight ${flight.route_id}.`);
    }
    if (itinerary.availableSeats === 0) {
        throw new Error(`No available seats for flight ${flightId}.`);
    }
    itinerary.availableSeats--;
    return itinerary;
}
exports.reserveSeat = reserveSeat;
