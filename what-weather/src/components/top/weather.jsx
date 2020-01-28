import React, { Component } from 'react';


export default class Weather extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const { temperature, iconURL, cityname, weatherDescription } = this.props;

        return <div className="weather-container">
            <div className="header">
                {cityname}
            </div>
            <div className="inner-container">
                <div className="image"><img src={iconURL} alt=""/></div>
                <div className="current-weather"> {temperature}° </div>
            </div>
            <div className="footer">
                {weatherDescription}
            </div>
        </div>
    }
}