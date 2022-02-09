import React, { useState } from "react";
import axios from "axios";


import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [message, setMessage] = useState(false);

  function displayForecast(response) {
    
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  function citySearch(event) {
    event.preventDefault();
    let apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form onSubmit={citySearch}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoComplete="off"
          autofocus="on"
          className="text-box"
          onChange={handleCity}
        />
        <input type="submit" value="Search" className="btn btn-light" />
       
      </form>

      <div className="forecast">
        <h1>{city}Toronto</h1>
        <h2>Monday, 12:00</h2>
        <h3>{description}</h3>

        <h4>
          <span> {Math.round(temperature)} </span>
          <span> °C </span>
          <span>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={description}
            />
          </span>
        </h4>

        <h5 className="mt-2">
          <div className="row">
            <div className="col-6">
              <ul>
                <li> Highest: 10° </li>
                <li> Lowest: 5° </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li> Windspeed: {Math.round(wind)} </li>
                <li> Humidity: {humidity} </li>
              </ul>
            </div>
          </div>
        </h5>
      </div>
    </div>
  );
}
