// api.js
export const API_KEY = 'f042cd39966c294062f39ea81b9973a3';
export const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${API_BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchForecastData = async (city) => {
  const response = await fetch(`${API_BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await response.json();
  return data;
};
