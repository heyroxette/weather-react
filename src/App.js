import React from "react";
import "./App.css";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <Weather defaultCity="Toronto" />
            </div>
          </div>
          <footer>
            <p>
              This app was coded by{" "}
              <a
                href="https://roxette-garcia.netlify.app/"
                target="blank"
                rel="noopener noreferrer"
              >
                Roxette Garcia
              </a>{" "}
              and is
              <a
                href="https://github.com/heyroxette/weather-react"
                target="blank"
                rel="noopener noreferrer"
              >
                {" "}
                open source code on Github
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
