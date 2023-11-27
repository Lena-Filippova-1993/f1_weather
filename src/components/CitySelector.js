import React from 'react';

const CitySelector = ({ selectedCity, handleCityChange, cityList }) => {
  return (
    <div className="nav">
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">Выбор города...</option>
        {cityList.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
