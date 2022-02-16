import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span> {Math.round(props.celsius)} </span>
      <span> °C </span>
    </span>
  );
}