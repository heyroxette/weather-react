import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  

  function displayForecast(response) {
   setWeatherData ({
     city: response.data.name,
     date: "Monday, 10:30",
     description: response.data.weather[0].description,
     temperature: response.data.main.temp,
     highest: response.data.main.temp_max,
     lowest: response.data.main.temp_min,
     windspeed:(response.data.wind.speed),
   });
  }

  function citySearch(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    
    let apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);
  }

  
  
if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={citySearch}>
        <input
          type="search"
          placeholder="Enter City..."
          autoComplete="off"
          autofocus="on"
          className="text-box"
          onChange={handleCity}
        />
        <input type="submit" value="Search" className="btn btn-light" />
        <input type="submit" value="📍" className="btn btn-light" />
        <input type="submit" value="°F" className="btn btn-light" />
      </form>

      <h1>{props.data.city}</h1>
      <h2>{weatherData.date}</h2>
      <h3>{weatherData.description}</h3>

      <h4>
        {Math.round(weatherData.temperature)} °C{" "}
        <span className="weather-image">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size="60"
            animate="true"
          />
        </span>
      </h4>

      <h5>
        High: {Math.round(weatherData.highest)} Low:{" "}
        {Math.round(weatherData.lowest)}
        <div className="windspeed">Windspeed: {weatherData.windspeed}</div>
      </h5>
    </div>
  );
}
}
