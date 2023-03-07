// export class FlightRoute {
//   constructor(
//     public route_id: string,
//     public departureDestination: string,
//     public arrivalDestination: string,
//     public itineraries: {
//       flight_id: string;
//       departureAt: string;
//       arrivalAt: string;
//       availableSeats: number;
//       prices: {
//         currency: string;
//         adult: number;
//         child: number;
//       };
//     }[]
//   ) {}
// }


export interface Itinerary {
  flight_id: string;
  departureAt: string;
  arrivalAt: string;
  availableSeats: number;
  prices: {
    currency: string;
    adult: number;
    child: number;
  };
}

export interface FlightRoute {
  route_id: string;
  departureDestination: string;
  arrivalDestination: string;
  itineraries: Itinerary[];
}

// export type Departure = {
//   year: number;
//   month: number;
//   day: number;
// }