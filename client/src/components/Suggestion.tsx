
import React from "react";
import { Col } from "react-bootstrap";
import kish from "./pics/kish.png";
import yazd from "./pics/yazd.png";
import shiraz from "./pics/shiraz.png";
import ramsar from "./pics/ramsar.png";
import tehran from "./pics/tehran.png";
import kavir from "./pics/kavir.png";

const images = [shiraz, yazd, kish, ramsar, kavir, tehran];

const Suggestions: React.FC = () => {
  return (
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
      {images.map((src, index) => (
        <Col key={index} md={4}>
          <img className="img-style" src={src} alt={`suggestion-${index}`} />
        </Col>
      ))}
    </div>
  );
};

export default Suggestions;
