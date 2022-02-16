import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

  function handleResponse(response) {
  console.log(response.data);
  }

  let apiKey = "e0346efbac786e6f2f5f0a80627da715";
  let longitute = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day mb-2">Thu</div>
          <WeatherIcon code="01d" size={48} />
          <div className="WeatherForecast-temperature mt-2">
            <span className="WeatherForecast-temperature-max">19°</span> {" "}
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

