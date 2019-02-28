import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Background extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount()
    {
        fetch('https://randomuser.me/api/?results=500')
            .then(results => {
                return results.json();
            }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <a href={pic.picture.medium} download="test"><img src={pic.picture.medium}/></a>

                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("state", this.state.pictures);
        })
    }

    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        )
    }};