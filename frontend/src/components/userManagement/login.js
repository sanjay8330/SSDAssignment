import React, { Component } from 'react'
import Header from '../header';
import '../../assets/css/login.css';
import loginImg from '../../assets/images/login.png';
import Axios from 'axios';
import { sha256 } from 'crypto-hash';

const initialStates = {
    "email": '',
    "password": '',
    "user": [],
    "errorMsg": ''
}
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleAdminLogin = this.handleAdminLogin.bind(this);
        this.navigatetoAdminHomePage = this.navigatetoAdminHomePage.bind(this);
        this.state = initialStates;
    }

    navigatetoAdminHomePage(adminId) {
        window.location = `/adminHome/${adminId}`;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleAdminLogin(e) {
        e.preventDefault();

        let userdetails = [];

        let hashEnteredPassword = await sha256(this.state.password);
        console.log('hashed PW : ', hashEnteredPassword);

        //Admin Password logics
        Axios.get(`http://localhost:3001/user/getUserByEmailID/${this.state.email}`)
            .then((result) => {
                userdetails = result.data.data;

                if (userdetails.length == 1) {

                    //Handle the hash passwprd matching
                    if (hashEnteredPassword == userdetails[0].userPassword) {
                        this.navigatetoAdminHomePage(userdetails[0]._id);
                    } else {
                        this.setState({ errorMsg: '*User name or password is incorrect' });
                        document.getElementById("errorMsg").style.display = "block";
                    }
                } else {
                    this.setState({ errorMsg: '*User not found' });
                    document.getElementById("errorMsg").style.display = "block";
                }

            }).catch(error => {
                console.log('Error in Data Retrieve!');
            });
    }

    render() {
        return (
            <div>
                <Header />
                <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="user_card">
                            <div class="d-flex justify-content-center">
                                <div class="brand_logo_container">
                                    <img src={loginImg} class="brand_logo" alt="Logo" />
                                </div>
                            </div>
                            <div class="d-flex justify-content-center form_container">
                                <form>
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input
                                            type="text"
                                            name="email"
                                            onChange={this.onChange}
                                            required
                                            class="form-control input_user"
                                            placeholder="Email Address" />
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={this.onChange}
                                            required
                                            class="form-control input_pass"
                                            placeholder="password" />
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                class="custom-control-input"
                                                id="customControlInline" />
                                            <label class="custom-control-label" for="customControlInline" style={{ color: "white" }}>Remember me</label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center mt-3 login_container">
                                        <button
                                            onClick={this.handleAdminLogin}
                                            type="button"
                                            name="button"
                                            class="btn login_btn">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div id="errorMsg" style={{ display: "none" }}><p style={{ color: "red" }}>{this.state.errorMsg}</p></div>

                            {/* <div class="mt-4">
                                <div class="d-flex justify-content-center links" style={{ color: "white" }}>
                                    Don't have an account? <a href="#" class="ml-2" style={{ color: "#108ecd" }}>Sign Up</a>
                                </div>
                                <div class="d-flex justify-content-center links">
                                    <a href="#" style={{ color: "#108ecd" }}>Forgot your password?</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}