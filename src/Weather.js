import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);


  function displayForecast(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      highest: response.data.main.temp_max,
      lowest: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

   function handleCitySearch(event) {
     setCity(event.target.value);
   }

   

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            autoComplete="off"
            autofocus="on"
            className="text-box"
            onChange={handleCitySearch}
          />
          <input type="submit" value="Search" className="btn btn-light" /> 
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {

    search();
    return "Loading";

  }
  }


 
  
