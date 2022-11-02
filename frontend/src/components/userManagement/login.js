import React, { Component } from 'react'
import Header from '../header';
import '../../assets/css/login.css';
import loginImg from '../../assets/images/login.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    navigatetoUserHomePage(e) {
        window.location = `/userHome`;
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
                                            name=""
                                            class="form-control input_user"
                                            placeholder="username" />
                                    </div>
                                    <div class="input-group mb-2">
                                        <div class="input-group-append">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                        <input
                                            type="password"
                                            name=""
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
                                            onClick={this.navigatetoUserHomePage}
                                            type="button"
                                            name="button"
                                            class="btn login_btn">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div class="mt-4">
                                <div class="d-flex justify-content-center links" style={{ color: "white" }}>
                                    Don't have an account? <a href="#" class="ml-2" style={{ color: "#108ecd" }}>Sign Up</a>
                                </div>
                                <div class="d-flex justify-content-center links">
                                    <a href="#" style={{ color: "#108ecd" }}>Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}