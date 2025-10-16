import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [currentCity, setCurrentCity] = useState(null);
  const apiKey = "437804075051b404028f9f103419ffa3";

  const fetchWeatherData = useCallback(
    async (city) => {
      if (!city) return;
      setCurrentCity(city);
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      setWeather(weatherData);

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      setForecast(forecastData.list || []);
    },
    [unit]
  );
  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };
  useEffect(() => {
    if (currentCity) {
      fetchWeatherData(currentCity);
    }
  }, [currentCity, fetchWeatherData]);
  return (
    <div>
      <Header
        onSearch={fetchWeatherData}
        onToggleUnit={handleUnitToggle}
        unit={unit}
      />
      <Button onCityClick={fetchWeatherData} />
      <WeatherDetails weather={weather} unit={unit} />
      <Forecast forecast={forecast} unit={unit} />
    </div>
  );
}

export default App;
