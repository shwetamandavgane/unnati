import React from "react";
import "./App.css";
import Nav from "./Nav";
import "../styles/ContactUs.css";
import Disha from "../components/Disha";
import Shweta from "../components/Shweta";

function ContactUs() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div className="body">
        <header>
          <h2 className="head"> Contact Us </h2>
          <div className="rowC">
            <Disha />
            <Shweta />
          </div>
        </header>
      </div>
    </div>
  );
}

export default ContactUs;
