import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });


  function displayForecast(response) {
    console.log(response.data);
    setWeatherData({  
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      highest: response.data.main.temp_max,
      lowest: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });

  }
  
  if (weatherData.ready) {

    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            autoComplete="off"
            autofocus="on"
            className="text-box"
          />
          <input type="submit" value="Search" className="btn btn-light" />
        </form>

        <div className="forecast">
          <h1>{weatherData.city}</h1>
          <h2>
            <FormattedDate date={weatherData.date}/>
            </h2>
          <h3>{weatherData.description}</h3>

          <h4>
            <span> {Math.round(weatherData.temperature)} </span>
            <span> °C </span>
            <span>
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </span>
          </h4>

          <h5 className="mt-2">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li> Highest: {Math.round(weatherData.highest)}° </li>
                  <li> Lowest: {Math.round(weatherData.lowest)}° </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li> Windspeed: {Math.round(weatherData.wind)} </li>
                  <li> Humidity: {weatherData.humidity}% </li>
                </ul>
              </div>
            </div>
          </h5>
        </div>
      </div>
    ); 
  } else {
    const apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);

    return "Loading";
  }
  }


 
  
