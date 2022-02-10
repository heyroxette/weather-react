import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
return (
  <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <h2>
      <FormattedDate date={props.data.date} />
    </h2>
    <h3>{props.data.description}</h3>

    <h4>
      <span> {Math.round(props.data.temperature)} </span>
      <span> °C </span> 
      <span>

        <WeatherIcon code={props.data.icon} />

      </span>
    </h4>

    <h5 className="mt-2">
      <div className="row">
        <div className="col-6">
          <ul>
            <li> Highest: {Math.round(props.data.highest)}° </li>
            <li> Lowest: {Math.round(props.data.lowest)}° </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li> Windspeed: {Math.round(props.data.wind)} km/h </li>
            <li> Humidity: {props.data.humidity}% </li>
          </ul>
        </div>
      </div>
    </h5>
  </div>
);
} 