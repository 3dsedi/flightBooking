import express from "express";
import { Request, Response, Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllFlights, getDirectFlightsByLocation, getDepartureFlightsByDay,
    getDirectFlightsByLocationDate , findFlight } from "./db";

// import FlightsData from './Data';

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


app.post("/api/conectflights", cors(), (req: Request, res: Response) => {
    const from = req.body.from as string;
    const to = req.body.to as string;

    const availableFlights = findFlight(from, to);
    return res.status(200).json({
        message: `${availableFlights.length} flights available`,
        flights: availableFlights,
      });

})

app.post("/api/flights", cors(), (req: Request, res: Response) => {
    try {
        const from = req.body.from as string;
        const to = req.body.to as string;
        const date = req.body.date as string;
      
        if (from && to && date) {
          const availableFlights = getDirectFlightsByLocationDate(from, to, date);
      
          if (availableFlights.length === 0) {
            return res.status(404).json({
              error: `No direct flights found from ${from} to ${to} departing on ${date}`,
            });
          }
      
          return res.status(200).json({
            message: `${availableFlights.length} flights available`,
            flights: availableFlights,
          });
        } else if (from && to) {
          const availableFlightsByLocation = getDirectFlightsByLocation(from, to);
      
          if (availableFlightsByLocation.length === 0) {
            return res.status(404).json({
              error: `No direct flights found from ${from} to ${to}`,
            });
          }
      
          return res.status(200).json({
            message: `${availableFlightsByLocation.length} flights available`,
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
            error: "Bad Request: Please provide 'from' and 'to' or 'day' in the request body",
          });
        }
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
      
      });

  




  

export default app;
