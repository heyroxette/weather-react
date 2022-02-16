import React, {useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }


if (unit === `celsius`){
  return (
    <span className="WeatherTemperature">
      
      <span> {Math.round(props.celsius)} </span>
      <span> °C </span>
      <span className="unit">
        {" "}
        <a href="/" onClick={showFahrenheit}>
          °F{" "}
        </a>
      </span>
    </span>
  );
  } else {
    
    return (
      <span className="WeatherTemperature">
        <span> {Math.round(fahrenheit())} </span>
        <span> °F </span>
        <span className="unit">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
        </span>
      </span>
    );
  }
}