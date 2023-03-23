import React from "react";
import { FetchData } from "../interfaces/FlightInterFace";
import Card from "react-bootstrap/Card";
import Bg from "./background.png";
import "./SearchResult.css";
import { FaPlane } from "react-icons/fa";

function SearchResult({ searchResult }: { searchResult: FetchData }) {
  console.log(searchResult);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "20vh",
          width: "100%",
          marginTop: "0px",
        }}
      >
        <h2 className="search_title">
          <FaPlane /> {searchResult.message}
        </h2>
      </div>
      <div className="row bg-gray">
  {searchResult.flights.map((flight) => (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{flight.flight_id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {flight.arrivalAt}
          </h6>
          <p className="card-text">{flight.departureAt}</p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default SearchResult;
