import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import './sass/app.scss';


import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';

import axios from 'axios';
const WEATHER_KEY = "2553dd9cf14944bf20dd801c414aca20";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityname: "Saint-cheron",
      isLoading: true,
    }
  }

  updateWeather() {
    const { cityname } = this.state;
    const URL = `http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${cityname}`
    axios.get(URL).then((res) => {
      return res.data;
    }).then((data) => {
      console.log(data.current.cloudcover);
      
      this.setState({
        isLoading: false,
        temperature: data.current.temperature, 
        iconURL: data.current.weather_icons, 
        cityname: data.location.name, 
        weatherDescription: data.current.weather_descriptions,
        windSpeed: data.current.wind_speed,
        humidity: data.current.humidity,
        cloudcover: data.current.cloudcover,
        pressure: data.current.pressure
      })
    })
    .catch((err) => {
      console.log("Cannot fetch Weather Data");
      
    });
  }
  componentDidMount() {
    const { eventEmitter } = this.props;

    this.updateWeather();

    eventEmitter.on("updateWeather", (data) => {
      this.setState({cityname: data}, () =>       
      this.updateWeather());
    })
  }

  render() {

    const { isLoading, temperature, iconURL, cityname, weatherDescription, windSpeed, humidity, cloudcover, pressure } = this.state;

    return <div className="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading && (
        <div className="top-section">
          <TopSection 
            temperature={temperature} 
            iconURL={iconURL} 
            cityname={cityname} 
            weatherDescription={weatherDescription}
            eventEmitter={this.props.eventEmitter}/>
        </div>
        )}
        <div className="bottom-section">
          <BottomSection 
            windSpeed={windSpeed}  
            humidity={humidity}
            cloudcover={cloudcover}
            pressure={pressure}
            />
        </div>
      </div>
    </div>;
  }
}

