const apiKey = 'ff2acf459277546564b4e7aba1956c9f';

export const fetchWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  const data = await response.json();

  return { data };
};
