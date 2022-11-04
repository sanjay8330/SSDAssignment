import React, { Component } from 'react'
import Header from './header';
import abc from '../assets/images/abc.png';
import '../assets/css/home.css';
import '../assets/css/style.css';
import { useAuth0 } from '@auth0/auth0-react';

// export default class homePage extends Component {

//     // render() {
//     //     return (
//     //         <div>
//     //             <Header />
//     //             <div>
//     //                 <img class="d-block w-100" src={abc} alt="First slide" style={{ opacity: "0.7" }} />
//     //                 <div class="centered"><p style={{ fontSize: "200px", color: "#eb3110", fontFamily: "audiowide" }}>ABC</p></div>
//     //                 <br /><br /><br />
//     //                 <div class="centered2"><b><p style={{ fontSize: "60px", color: "#bd3011", fontFamily: "trirong" }}>Saving Massages & Files</p></b></div>
//     //             </div>
//     //         </div>
//     //     )
//     // }
// }

function HomePage() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <div>
            <div class="clone-airbnb">
                <div id="header" class="airbnb-header airbnb-business-header hide-print">
                    <header class="small-business-header show-sm" aria-hidden="true" role="banner">
                        <div class="header-flyout-app">
                        </div>
                    </header>
                    <div class="hide-sm regular-header regular-business-header clearfix">
                        <div class="comp comp--border-none comp--background-transparent pull-left">
                            <a class="link-reset belo-container" href="/">
                                <i class="icon icon-white icon-airbnb"></i><span class="word-business" style={{ color: "white", fontSize: "20px" }}>ABC</span>
                            </a>
                        </div>
                        <div class="comp pull-right show-logout">
                            <a onClick={loginWithRedirect} class="hdr-btn link-reset" data-header-view="true" data-signup-modal="" style={{ color: "white" }}>
                                <b style={{ fontSize: "15px" }}>Login</b>
                            </a>
                        </div>
                        <div class="comp pull-right show-logout">
                            <a href="/" class="hdr-btn link-reset" data-header-view="true" data-signup-modal="" style={{ color: "white" }}>
                                <b style={{ fontSize: "15px" }}>Home</b>
                            </a>
                        </div>
                        <div class="search-bar-container pull-right">
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img class="d-block w-100" src={abc} alt="First slide" style={{ opacity: "0.7" }} />
                <div class="centered"><p style={{ fontSize: "200px", color: "#eb3110", fontFamily: "audiowide" }}>ABC</p></div>
                <br /><br /><br />
                <div class="centered2"><b><p style={{ fontSize: "60px", color: "#bd3011", fontFamily: "trirong" }}>Saving Massages & Files</p></b></div>
            </div>
        </div>
    )
}
export default HomePage;





