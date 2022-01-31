import React from "react"; 
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather (props) {
  let weatherData = {
    city: "Toronto",
    date: "Monday, 10:30",
    description: "Cloudy",
    forecast: "10",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    highTemperature: "23",
    lowTemperature: "14",
    windspeed: "2",
  };

  function displayForecast(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }

  
    let apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);
  

  return (
    <div className="Weather">
      <input
        type="text"
        placeholder="Enter City..."
        autoComplete="off"
        autofocus="on"
        className="text-box"
      />
      <input type="submit" value="Search" className="btn btn-light" />
      <input type="submit" value="📍" className="btn btn-light" />
      <input type="submit" value="°F" className="btn btn-light" />

      <h1>{weatherData.city}</h1>
      <h2>{weatherData.date}</h2>
      <h3>{weatherData.description}</h3>

      <h4>
        {weatherData.forecast} °C{" "}
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
        H: {weatherData.highTemperature} L: {weatherData.lowTemperature}
        <div className="windspeed">Windspeed: {weatherData.windspeed}</div>
      </h5>
    </div>
  );
}