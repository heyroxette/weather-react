import React from "react"; 
import axios from "axios";

export default function Weather (props) {

  function displayForecast(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }

  
    let apiKey = "e0346efbac786e6f2f5f0a80627da715";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${units}&appid=${apiKey}`;
    axios.get(url).then(displayForecast);
  

  return <p>What is the Weather today? </p>;
}