import React, { Component } from 'react'
import Header from './header';
import abc from '../assets/images/abc.png';
import '../assets/css/home.css';

export default class homePage extends Component {

    render() {
        return (
            <div>
                <Header />
                <div>
                    <img class="d-block w-100" src={abc} alt="First slide" style={{ opacity: "0.7" }} />
                    <div class="centered"><p style={{ fontSize: "200px", color: "#eb3110", fontFamily: "audiowide" }}>ABC</p></div>
                    <br /><br /><br />
                    <div class="centered2"><b><p style={{ fontSize: "60px", color: "#bd3011", fontFamily: "trirong" }}>Saving Massages & Files</p></b></div>
                </div>
            </div>
        )
    }
}





