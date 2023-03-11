import express from "express";
import { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllFlights, oneWayDirectFlightsByLocation, getDepartureFlightsByDay,
    oneWayDirectFlightsByLocationDate , findOneWayFlight, reserveSeat, findOneWayFlightByLocationDate } from "./db";

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/api/flights", cors(), (req: Request, res: Response) => {
  const allFlights = getAllFlights();
  return res.status(200).json({ Flights: allFlights });
});


app.post("/api/flights", cors(), (req: Request, res: Response) => {
  try {
    const from = req.body.from as string;
    const to = req.body.to as string;
    const date = req.body.date as string;
    const directFlight = req.body.directFlight as boolean;
    
    if (from && to && date) {
      const availableFlights = directFlight ? 
        oneWayDirectFlightsByLocationDate(from, to, date) :
        findOneWayFlightByLocationDate(from, to, date);

      if ( Object.keys(availableFlights).length === 0 ) {
        return res.status(404).json({
          error: `No flights found from ${from} to ${to} departing on ${date}`,
        });
      }
      console.log(availableFlights)
      return res.status(200).json({
        message: `${Object.keys(availableFlights).length} flights available`,
        availableFlights,
      });
    } else if (from && to) {
      const availableFlightsByLocation = directFlight ? 
        oneWayDirectFlightsByLocation(from, to) :
        findOneWayFlight(from, to);
      
      if (Object.keys(availableFlightsByLocation).length === 0) {
        return res.status(404).json({
          error: `No flights found from ${from} to ${to}`,
        });
      }
      
      return res.status(200).json({
        message: `${Object.keys(availableFlightsByLocation).length} flights available`,
        flights: availableFlightsByLocation,
      });

    } else if (date) {
      const departureTimes = getDepartureFlightsByDay(date);
      
      if (departureTimes.length === 0) {
        return res.status(404).json({
          error: `No flights found departing on ${date}`,
        });
      }
      
      return res.status(200).json({
        message: `${departureTimes.length} flights departing on ${date}`,
        departures: departureTimes,
      });
    } else {
      return res.status(400).json({
        error: "Bad Request: Please provide 'from' and 'to' or 'date' in the request body",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});



app.post("/api/reserve", cors(), (req: Request, res: Response) => {
  const flightId = req.body.flightId as string;

  try {
    const itinerary = reserveSeat(flightId);
    return res.status(200).json({
      message: `Seat reserved successfully for flight ${flightId}.`,
      itinerary
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error:`No available seats for flight ${flightId}.`});
  }
})

export default app;
