import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import { fetchWeather } from './utils/fetch';
import Swal from 'sweetalert2';

const App = () => {
  const [city, setCity] = useState('Bandar Lampung');
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    city: '',
    icon: '',
    description: '',
    temp: '',
    humidity: '',
    wind: '',
  });

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  const getWeather = async (city) => {
    setLoading(true);
    try {
      const { data } = await fetchWeather(city);

      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      setWeather({
        city: name,
        icon,
        description,
        temp,
        humidity,
        wind: speed,
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      return Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="card">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        <WeatherCard {...weather} />
      </div>
    </div>
  );
};

export default App;
