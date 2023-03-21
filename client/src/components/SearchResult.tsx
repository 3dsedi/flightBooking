import React from 'react'
import { FetchData } from '../interfaces/FlightInterFace';
import Card from 'react-bootstrap/Card';

// interface Props {
//   searchResult: FetchData[]
// }

function SearchResult({searchResult}: {searchResult: FetchData}) {
  console.log(searchResult)
  return (
       <div className="container">
       <h2>{searchResult.message}</h2>
       <div className="row">
        {searchResult.flights.map((flight) => (
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{flight.flight_id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{flight.arrivalAt}</h6>
                <p className="card-text">{flight.departureAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult