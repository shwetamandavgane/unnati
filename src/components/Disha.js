import React from "react";
import "./App.css";
import Nav from "./Nav";
import "../styles/ContactUs.css";
import image1 from "../images/Disha.jpeg";

function Disha() {
  return (
    <div>
      <div className="body">
        <header>
          <h2> Disha Saraiya </h2>
          <h3>Contact: +1 331-701-1608</h3>
          <h3>Email: saraiya.di@husky.neu.edu</h3>

          <img className="image" src={image1} alt="Disha" />
        </header>
      </div>
    </div>
  );
}

export default Disha;
