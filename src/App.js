import './App.css';
import { useState } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ResultField from './components/ResultField/ResultField';
import Map from "./components/Map/Map"

function App() {

  // default state from challenge design
  const initialState = {
    ip: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: '-5:00',
    isp: 'SpaceX Starlink',
    lat: 40.6782,
    lng: -73.9442, 
  }

  const [queryResponse, setQueryResponse] = useState(initialState)

  const fetchApi = async (query) => {
    const baseUrl = "https://geo.ipify.org/api/v2/country,city"
    const response = await fetch(`${baseUrl}?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${query}`)
    const data = await response.json()

    // save api json response into state
    setQueryResponse(prevState => {
      const {ip, isp, location} = data;
      const {city, country, postalCode, timezone, lat, lng} = location;
      return {
        ...prevState, 
        ip, 
        location: `${city}, ${country} ${postalCode === "" ? "" : postalCode}`, 
        timezone,
        isp, 
        lat,
        lng,
      }
    })
  }

  return (
    <div>
      <div className='overlay'>
        <h1 className='title'>IP Address Tracker</h1>  
        <Searchbar fetchApi={fetchApi}/>
        <ResultField data={queryResponse} />
      </div>
      <div className='pattern-bg'></div>
      <Map lat={queryResponse.lat} lng={queryResponse.lng}/>
    </div>
  );
}

export default App;
