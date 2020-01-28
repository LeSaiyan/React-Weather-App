import React, { Component } from 'react';

import "./style.scss";

import Details from './details'

export default class BottomSection extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        const { windSpeed, humidity, cloudcover, pressure } = this.props
        return <div className="bottom-container">
             <Details  
                windSpeed={windSpeed} 
                humidity={humidity}
                cloudcover={cloudcover}
                pressure={pressure}
            />
        </div>
    }
}