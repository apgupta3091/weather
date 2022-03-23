
import './App.scss';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({})
  let hi = "hi"
  
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=40.71&lon=-74.00&exclude=hourly,minutely,currently&appid=8e69cb5b2085f8b636a1c05b630e8493`

  
  useEffect(() => {
    axios.get(url).then(res => {
      setData(data.res)
      console.log(data.res)
      console.log('hi')
    })
  },[hi])


  return (
    <div className="App">
      <div className="weather-container">
        <div className="weather-item">
          <h2>Wed</h2>
          <div className="min-max-container">
            <p>30</p>
            <p>40</p>
          </div>
        </div>
        <div className="weather-item">
          <h2>Wed</h2>
          <div className="min-max-container">
            <p>30</p>
            <p>40</p>
          </div>
        </div>
        <div className="weather-item">
          <h2>Wed</h2>
          <div className="min-max-container">
            <p>30</p>
            <p>40</p>
          </div>
        </div>
        <div className="weather-item">
          <h2>Wed</h2>
          <div className="min-max-container">
            <p>30</p>
            <p>40</p>
          </div>
        </div>
        <div className="weather-item">
          <h2>Wed</h2>
          <div className="min-max-container">
            <p>30</p>
            <p>40</p>
          </div>
        </div>
        
         
       
      </div>
    </div>
  );
}

export default App;
