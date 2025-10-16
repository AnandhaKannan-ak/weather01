import React from "react";

const Suggestions = ({ suggestions, onSelect }) => {
  if (!suggestions.length) return null;

  return (
    <ul className="drop">
      {suggestions.map((city, index) => (
        <li className="item" key={index} onClick={() => onSelect(city.name)}>
          {city.name}, {city.country}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
