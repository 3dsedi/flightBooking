import React from "react";
import { FetchData } from "../interfaces/FlightInterFace";
import Card from "react-bootstrap/Card";
import Bg from "./pics/background.png";
import "./SearchResult.css";
import { FaPlane } from "react-icons/fa";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
}

function SearchResult({ searchResult }: { searchResult: FetchData }) {
  const numResults = searchResult.flights.length;
  const backgroundHeight = numResults > 0 ? `${80 + numResults * 10}vh` : "100vh";

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: backgroundHeight,
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            height: "100%",
            display: "flex",
            paddingTop: "50px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            {searchResult.message}
          </h2>
          <div className="row bg-gray">
            {searchResult.flights.map((flight) => (
              <div className="col-sm-12" key={flight.flight_id}>
                <div
                  className="card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)", // Set alpha value here (less than 1)
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <h5 className="card-title" style={{ marginBottom: "10px" }}>
                      Flight number: {flight.flight_id}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ marginBottom: "5px" }}>
                      Departure at: {formatDate(flight.departureAt)}
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ marginBottom: "5px" }}>
                      Arrival at: {formatDate(flight.arrivalAt)}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
  
                  }


export default SearchResult;
