import React from "react";

const WeatherDetails = ({ weather, unit }) => {
  if (!weather) return null;
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";
  console.log(weather);

  return (
    <div className="container">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <h1>
        {Math.round(weather.main.temp)}
        {temperatureUnit}
      </h1>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="icon"
      />
      <div className="details">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>
          Wind: {weather.wind.speed} {windUnit}
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
