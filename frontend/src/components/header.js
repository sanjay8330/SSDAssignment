import React, { Component } from 'react';
import '../assets/css/style.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

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
                            <a href="/login" class="hdr-btn link-reset" data-header-view="true" data-signup-modal="" style={{ color: "white"}}>
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
        )
    }

}

export default Header;