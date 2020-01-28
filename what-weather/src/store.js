import React, { Component } from 'react';



export default class Store extends React {
    constructor(props) {
        super(props);

        //Principal state de l'application
        this.state = {
            appName: "What Weather ?"
        }
    }

    render() {
        return React.Children.map(this.props.childrren, (child) => {
            return React.cloneElement(child, { ...this.state })
        })
    }
}