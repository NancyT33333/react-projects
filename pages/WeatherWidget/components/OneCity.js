
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import runtimeEnv from '@mars/heroku-js-runtime-env';

function OneCity (props) {
  const env = runtimeEnv();
  const APIKEY = env.REACT_APP_APIKEY; 
  const APIURL = "https://cors-anywhere.herokuapp.com/openweathermap.org/data/2.5/weather";
  // for local cors proxy:   const APIURL = "http://localhost:8010/proxy/data/2.5/weather"; 
  const cityName = props.data;

  const [weather, setWeather] = useState({
    temp : "(скоро будет)",
    humidity : "(скоро будет)",
});
  useEffect (
    function () {              
        axios.get(APIURL, { 
          params: {
            'q' : cityName, 
            'appid' : APIKEY
            }
          })
        .then((response) => {
          setWeather({
            temp: response.data.main.temp,
            humidity: response.data.main.humidity
          });
          
        }).catch((err) => {
          props.onNotFound();
          props.onDelete(cityName);
          
          })
      
      }, [cityName]);
      
    return (<div className="smallDiv"> <style jsx global> {`
    .smallDiv {
    
      width: 250px;
      height: 250px;
      margin: 30px;
      padding: 20px;
      position: relative;
      display: inline-block;
      box-shadow: 9px 10px 16px -12px rgba(0,0,0,0.75);
      background-color: #33414E;
  }
  
  .smallDiv::after {
      position: absolute;
      content: ' ';
      width: 50px;
     
      display: block;
      height: 50px;
      right: 10px;
      bottom: 10px;
      background: center / contain no-repeat url("/cloud.png");
      z-index: 100;
  }
  
  .delSpan {
      cursor: pointer;
      position: absolute;
      display: inline-block;
      width: 30px;
      height: 30px;
      overflow: hidden;
      color: rgba(0,0,0,0);
      top: 10px;
      right: 10px;
  
  }
  .delSpan::before, .delSpan::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      
      margin-top: -1px;
      background: #000;
    }
    .delSpan::before {
       transform: rotate(45deg);
    }
    .delSpan::after {
       transform: rotate(-45deg);
    }
    `}</style>
            <p>Город: {props.data}</p>
            <p>Температура: {weather.temp} C</p>
            <p>Влажность: {weather.humidity}</p>
            <span className="delSpan" onClick={() => props.onDelete(cityName)}>X</span>
          </div>);
}

export default OneCity;