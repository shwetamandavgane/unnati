import React from "react";
import "./App.css";
import Nav from "../components/Nav";

function LandingPage() {
  return (
    <div>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div className="body">
        <header>
          <h2 className="head"> Mission Statement </h2>
          <p className="para">
            ‘Unnati’ (/oon -NAH -tee/) is a word of Sanskrit origin that means a
            lot of things: progress, elevation, rising, lifting up, or simply
            ‘ascending’. Unnati signifies our mission for this group, as we
            strive to help students progress constantly in their journey, so
            that they can reach their dreams with lesser obstacles in each path.
            Here at Unnati we can help you with a lot of things - adjusting to a
            new culture outside your home, turning culture-shocks from weird to
            a fun, new experiences, answering the questions you may find too
            ‘silly’ to ask someone else, making new friends, celebrating
            festivals, and so much more. Think of anything that a friend would
            do for you, and you can be rest assured Unnati will be that friend!
          </p>
          <h2 className="head">Why we started Unnati </h2>
          <p className="para">
            When we arrived here as students, we realized that there were SO
            many things we needed help with, as newbies. Homesickness, cultural
            shock, renting apartments, finding roommates, making new friends,
            academic difficulties, course selection, and much more. It was an
            absolute mess! We, (being the very noble people we are) decided that
            nobody else needs to go through what we have - and so Unnati was
            formed.
          </p>
        </header>
      </div>
    </div>
  );
}

export default LandingPage;
