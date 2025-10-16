import React from "react";

const Forecast = ({ forecast, unit }) => {
  if (!forecast || forecast.length === 0) return null;
  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  return (
    <div className="forecastcontainer">
      <h3>Next Hours</h3>
      <div className="row">
        {forecast.slice(0, 7).map((hour, index) => (
          <div className="cards" key={index}>
            <p>{new Date(hour.dt * 300).getHours()}:00</p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt="icon"
            />
            <p>
              {Math.round(hour.main.temp)}
              {temperatureUnit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
