import React from "react";
import "./App.css";
import Nav from "./Nav";
import "../styles/ContactUs.css";
import image2 from "../images/Shweta.jpeg";

function Shweta() {
  return (
    <div>
      <div className="body">
        <header>
          <h2> Shweta Mandavgane </h2>
          <h3>Contact: +1 425-624-5425</h3>
          <h3>Email: mandavgane.s@husky.neu.edu</h3>
          <img className="image" src={image2} alt="Shweta" />
        </header>
      </div>
    </div>
  );
}

export default Shweta;
