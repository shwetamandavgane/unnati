import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "../components/Nav";
import LandingPage from "../components/LandingPage";
import ContactUs from "../components/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/components/contactus">
          <ContactUs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
