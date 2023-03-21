import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Nav, Button } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bg from "./background.png";
import kish from "./kish.png";
import yazd from "./yazd.png";
import shiraz from "./shiraz.png";
import ramsar from "./ramsar.png";
import tehran from "./tehran.png";
import kavir from "./kavir.png";
import {
  FaTrain,
  FaPlane,
  FaHotel,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  BsFillTrainFreightFrontFill,
  BsFillTrainFrontFill,
} from "react-icons/bs";

interface SearchFormProps {
    onSearch: (enteredData:{from: string, to: string, date: string, directFlight: boolean} ) => void;
  }


const Home: React.FC<SearchFormProps> = ({onSearch}) => {
    const navigate = useNavigate();
  const [flightSelected, setFlightSelected] = useState(true);

  const departureRef = useRef<HTMLSelectElement>(null);
  const arrivalRef = useRef<HTMLSelectElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const isDirectRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredData = {
    from: departureRef.current?.value || '',
    to: arrivalRef.current?.value || '',
    date: dateRef.current?.value || '',
    directFlight: isDirectRef.current?.checked || false,
    }
    onSearch(enteredData);
    navigate(`/search-results`);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "120vh",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "auto", paddingTop: "30px" }}>
          <h2
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            {flightSelected && <h3>Book your Flight</h3>}
          </h2>
          <Card
            style={{
              maxWidth: "600px",
              margin: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <Card.Body>
              {flightSelected && (
                <div>
                  <h3
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Choose Your Flight
                  </h3>
                  <div className="form-group">
                    <label htmlFor="departure" className="form-label">
                      <FaPlaneDeparture /> Departure
                    </label>
                    <select
                      className="form-select custom-select"
                      id="departure"
                      ref={departureRef}
                    >
                      <option>Oslo</option>
                      <option>Amsterdam</option>
                      <option>Stockholm</option>
                      <option>Tehran</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="arrival" className="form-label">
                      <FaPlaneArrival /> Arrival
                    </label>
                    <select className="form-select custom-select" id="arrival" ref={arrivalRef}>
                      <option>Oslo</option>
                      <option>Amsterdam</option>
                      <option>Stockholm</option>
                      <option>Tehran</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      <FaCalendarAlt /> Date
                    </label>
                    <input type="date" className="form-control" id="date" ref={dateRef} />
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="direct-flight"
                      ref={isDirectRef}
                    />
                    <label className="form-check-label" htmlFor="direct-flight">
                      Direct Flight
                    </label>
                  </div>
                  <Button className="search_home" variant="primary" onClick={handleSearch}>
                Search
              </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <h3
          style={{
            color: "#4885ff",
            fontSize: "40px",
            textAlign: "left",
            marginBottom: "10px",
            fontWeight: "bold"
          }}
        >
          FLIGHTIO Suggestions
        </h3>
        <div className="col-md-4">
          <img className="img-style" src={shiraz} alt="shiraz" />
        </div>
        <div className="col-md-4">
          <img className="img-style" src={yazd} alt="yazd" />
        </div>
        <div className="col-md-4">
          <img className="img-style" src={kish} alt="kish" />
        </div>
        <div className="col-md-4">
          <img className="img-style" src={ramsar} alt="ramsar" />
        </div>
        <div className="col-md-4">
          <img className="img-style" src={kavir} alt="kavir" />
        </div>
        <div className="col-md-4">
          <img className="img-style" src={tehran} alt="tehran" />
        </div>
      </div>
    </div>
  );
};

export default Home;
