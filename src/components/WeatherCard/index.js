import React from 'react';
import './index.css';

const WeatherCard = (props) => {
  return (
    <div className="weather">
      <h2 className="city">{props.city}</h2>
      <h1 className="temp">{props.temp}°C</h1>
      <div className="flex">
        <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} alt="weather" className="icon" />
        <div className="description">{props.description}</div>
      </div>
      <p className="humidity">Humidity: {props.humidity}%</p>
      <p className="wind">Wind speed: {props.wind} km/h</p>
    </div>
  );
};

export default WeatherCard;
