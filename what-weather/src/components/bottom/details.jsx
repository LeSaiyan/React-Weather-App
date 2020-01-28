import React, { Component } from 'react';



export default class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { windSpeed, humidity, cloudcover, pressure } = this.props;
        return <div className="details-container">
            <div className="details"> 
                <div className="num-details">
                    {windSpeed} 
                </div>
                <div>
                    Wind-speed
                </div>
            </div>
            <div className="details"> 
                <div className="num-details">
                        {humidity} 
                </div>
                <label>
                    Humidity
                </label>
            </div>
            <div className="details"> 
                <div className="num-details">
                        {cloudcover} 
                </div>
                <label>
                    Cloud Cover
                </label>
            </div>
            <div className="details"> 
                <div className="num-details">
                        {pressure} 
                </div>
                <label>
                    Pressure
                </label>
            </div>
        </div>
    }
}