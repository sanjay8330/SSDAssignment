//import React, { Component } from 'react'
import React, { useState, useEffect } from 'react';
import Header from './header';
import abc from '../assets/images/abc.png';
import '../assets/css/home.css';
import '../assets/css/style.css';
import { useAuth0 } from '@auth0/auth0-react';
import Axios from 'axios';

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
    const { loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [label, setLabel] = useState("Login");

    useEffect(() => {
        if (isAuthenticated) {
            console.log('User authenticated!');
            document.getElementById("getStartedBtn").disabled = false;
            setLabel("Logout");
        } else {
            console.log('User not authenticated!');
            document.getElementById("getStartedBtn").disabled = true;
            setLabel("Login");
        }
    });

    async function handlebtn() {
        if (isAuthenticated) {
            try {
                const token = await getAccessTokenSilently();

                const response = await Axios.get(`http://localhost:3001/user/getUserByEmailID/${user.email}`, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                    .then((result) => {
                        console.log('User exists',);
                        if (result.data.data.length == 1) {
                            const userID = result.data.data[0]._id;
                            updateUserToken(userID, token);
                        } else {
                            addUserToDB(token);
                        }
                    }).catch((error) => {
                        console.log('Error occurred! Please contact system administrator');
                    });
            } catch (error) {
                console.log('Error occurred! Please contact system administrator');
            }

        } else {
            document.getElementById("getStartedBtn").disabled = true;
        }
    }

    function updateUserToken(userid, newToken) {
        let updUserObj = {
            "newToken": newToken
        }
        Axios.put(`http://localhost:3001/user/updateUserToken/${userid}`, updUserObj)
            .then((result) => {
                console.log('Token Updated successfully!');
                window.location = `/userHome/${userid}`;
            }).catch(error => {
                console.log('Error in Update!');
            })
    }

    function addUserToDB(token) {
        let userDetails = {
            username: user.name,
            userEmail: user.email,
            userRole: 'Worker',
            jwtToken: token
        }
        Axios.post('http://localhost:3001/user/addUser', userDetails)
            .then((result) => {
                console.log('User details added successfully!');
                window.location = '/userHome';
            }).catch((error) => {
                console.log('Error occurred! Please contact system administrator');
            })
    }

    function handleAuthBtn() {
        let linkLabel = document.getElementById(label).id;
        if (linkLabel == "Login") {
            loginWithRedirect();
        } else if (linkLabel == "Logout") {
            logout();
        }
    }

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
                            <a id={label} onClick={handleAuthBtn} class="hdr-btn link-reset" data-header-view="true" data-signup-modal="" style={{ color: "white" }}>
                                <b style={{ fontSize: "15px" }}>{label}</b>
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
                <div class="centered2"><b><p style={{ fontSize: "60px", color: "#bd3011", fontFamily: "trirong" }}>Saving Massages & Files</p></b>
                    <center><button id="getStartedBtn" class="btn btn-dark" onClick={handlebtn} style = {{width: "25%", backgroundColor: "#320342"}}> Get started </button></center>
                </div>
            </div>
        </div>
    )
}
export default HomePage;





