import React,{useState, useEffect} from 'react';
import WeatherWidget from './WeatherWidget';
import axios from 'axios';

function App() {
  const APPID = "cf26c214acc212cad68cceb64b68aa47"
  const [data, setData] = useState(null)
  const [name, setName] = useState("Isaiah")
  const [city, setCity] = useState("Seattle")
  const [query, setQuery] = useState("Seattle")
  const [loading, setLoading] = useState(false)
  
  const updateName = (e) => {
    setName(e.target.value)
  }

  const updateCity = (e) => {
    setCity(e.target.value)
  }

  const getCity = (e) => {
    e.preventDefault()
    setQuery(city)
  }

  useEffect(() => {
    const getWeatherData = () => {
      setLoading(true)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APPID}`
      axios.get(url).then(response => {
        setLoading(false)
        const json = response.data.main.temp;
        setData(json)
      })
    };
    getWeatherData()
  }, [query])

  if (loading) return "Loading..."
  return (
    <div>
      <form id="form1" onSubmit={getCity}>
        <input className="form-input-name" placeholder = {name} onChange={updateName}></input>
        <input className="form-input-city" placeholder = {city} onChange={updateCity}></input>
        <button className="form-button" type="submit">Submit</button>
      </form>
      
      <WeatherWidget data={data} name={name} city={city}></WeatherWidget>
    </div>
  );
}

export default App;
