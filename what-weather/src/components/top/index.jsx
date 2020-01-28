import React, { Component } from 'react';

import "./style.scss";
import Weather from './weather';


export default class TopSection extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return <div className="top-container">
            <div className="title">What Weather ?</div>
            <Weather { ...this.props } />
            <button className="btn btn-select-location"> Select Location </button>
        </div>
    }
}