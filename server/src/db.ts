import FlightsData from "./Data";
import { Itinerary, FlightRoute } from "./models/Flight";
import moment, { Moment } from "moment";
import { Departure } from "./models/Departures";

const db = FlightsData;

export function getAllFlights() {
  return db;
}

export function getDirectFlightsByLocation(from: string, to: string) {
  try {
    const allFlights = db;

    const filteredRoute = allFlights.filter((flightRoute) => {
      const { departureDestination, arrivalDestination } = flightRoute;
      const route = departureDestination === from && arrivalDestination === to;
      return route;
    });

    const itineraries = filteredRoute.map((route) => route.itineraries).flat();
    const availbleFlights = itineraries.filter(
      (flight) => flight.availableSeats > 0
    );

    return availbleFlights;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error occurred while fetching direct flights from ${from} to ${to}`
    );
  }
}

export function getDepartureFlightsByDay(date: string) {
    try {
        const flights = db.map((flight) => flight.itineraries).flat();
      
        const departures = flights.filter(
          (itinerary) => itinerary.departureAt.slice(0, 10) === date
        );
      
        return departures;

    }  catch (error) {
        console.error(error);
        throw new Error(
          `Error occurred while fetching flights on ${date}`
        );
      }
}

export function getDirectFlightsByLocationDate(from: string, to: string , date:string) {
    try {
        const filteredRoute = db.filter((flightRoute) => {
            const { departureDestination, arrivalDestination } = flightRoute;
            const route = departureDestination === from && arrivalDestination === to;
            return route;
          });
          const itineraries = filteredRoute.map((route) => route.itineraries).flat();
          const availbleFlights = itineraries.filter(
            (flight) => flight.availableSeats > 0
          );
          const departures = availbleFlights.filter(
            (itinerary) => itinerary.departureAt.slice(0, 10) === date
          );
          return departures

    } catch (error) {
        console.error(error);
        throw new Error(
          `Error occurred while fetching flights `
        );
      }

}

export function findFlight(from: string, to: string) {
    try {
      
      const directFlights = getDirectFlightsByLocation(from, to);
      if (directFlights.length > 0) {
        return directFlights;
      }
  
      const filteredRoute = db.filter((flightRoute) => flightRoute.arrivalDestination === to)
      if (filteredRoute.length > 0) {
      }
        return filteredRoute;
 
    } catch (error) {
      console.error(error);
      throw new Error(`Error occurred while searching for flights from ${from} to ${to}`);
    }
  }
  