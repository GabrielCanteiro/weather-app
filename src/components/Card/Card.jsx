import React, { useState } from 'react';
import Local from '../Local/Local';
import './Card.css';

const Card = () => {
  const [weather, setWeather] = useState({
    main: '',
    weather: [{ description: ''}],
  });

  const background = weather.code === 'ERR_BAD_REQUEST' ? 'not_found' : ''

  const icon = weather.main && `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` 

  console.log(weather)

  return (
    <div className={`container gif ${background}`}>
      <Local setWeather={setWeather}/>
      <div>
        {weather.main &&(
          <div className='content_container'>
            <h1 id='temp'>{weather.main.temp.toFixed(0)}º</h1>
            <div id='weather_description'>
              <h1>{weather.weather[0].description}</h1>
              <img src={icon} alt="" />
            </div>
            <div className="place">
              <p>{weather.name},{weather.sys.country}</p>
            </div>
            <div className="footer">
              <div className="item">
                <h4>{weather.main.humidity}%</h4>
                <p>Humidity</p>
              </div>
              <span>|</span>
              <div className="item">
                <h4>{weather.clouds.all}%</h4>
                <p>Clouds</p>
              </div>
              <span>|</span>
              <div className="item">
                <h4>{weather.wind.speed.toFixed(0)} Km/h</h4>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
