import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "../App.css";
const Header = ({ onSearch, onToggleUnit, unit }) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "437804075051b404028f9f103419ffa3"; // Replace with your OpenWeatherMap key

  const fetchSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]);
    onSearch(selectedCity);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && city.trim() !== "") {
      onSearch(city);
      setSuggestions([]);
    }
  };

  return (
    <div className="header">
      <h2 className="title"> Weather App</h2>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Enter the city"
          onChange={(e) => {
            setCity(e.target.value);
            fetchSuggestions(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Suggestions suggestions={suggestions} onSelect={handleSelect} />
      </div>
      <p className="para">°C</p>
      <label className="switch">
        <input
          type="checkbox"
          onChange={onToggleUnit}
          checked={unit === "imperial"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Header;
