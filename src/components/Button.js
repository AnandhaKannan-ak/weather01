import React from "react";
import "../App.css";

const Button = ({ onCityClick }) => {
  return (
    <div className="cities">
      <button className="newyork-btn" onClick={() => onCityClick("New York")}>
        New York
      </button>
      <button className="london-btn" onClick={() => onCityClick("London")}>
        London
      </button>
      <button className="tokyo-btn" onClick={() => onCityClick("Tokyo")}>
        Tokyo
      </button>
    </div>
  );
};

export default Button;
