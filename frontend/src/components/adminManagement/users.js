/**
 * SCOPE    -   ADMIN MANAGEMENT
 * PAGE     -  USERS PAGE 
 */

import React, { Component } from 'react'
import Axios from 'axios';

const initialStates = {
    "users": [],
    "searchUser": '',
    "adminID": ''
}

export default class users extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.navigatetoUpdateUsers = this.navigatetoUpdateUsers.bind(this);
        this.navigateToAdminHome = this.navigateToAdminHome.bind(this);
        this.navigateToViewUsers = this.navigateToViewUsers.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchUser: e.target.value });
    }

    /**
    * DESCRIPTION       -       The function written to get all the user details.
    * METHOD CALLS      -       setState()
    * API CALL          -       GET ALL USER DETAILS
    */
    componentDidMount(e) {
        Axios.get('https://localhost:3001/user/getAllUsers')
            .then(response => {
                this.setState({ users: response.data.data });
            }).catch(error => {
                alert(error.message);
            });

        let adminId = this.props.match.params.id;
        this.setState({ adminID: adminId });
    }

    /**
     * DESCRIPTION      -       The function to navigate to theupdate user page
     */
    navigatetoUpdateUsers(e, userId) {
        window.location = `/updateUser/${userId}/${this.state.adminID}`;
    }

    /**
     * DESCRIPTION      -       The function to navigate to the admin home page
     */
    navigateToAdminHome() {
        window.location = `/viewProfiles/${this.state.adminID}`;
    }

    /**
     * DESCRIPTION      -       The function to navigate to the view users page
     */
    navigateToViewUsers() {
        window.location = `/viewUsers/${this.state.adminID}`;
    }

    render() {
        return (
            <div>
                <div class="wrapper">
                    <nav>
                        <header><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; DASHBOARD
                        </header><hr style={{ color: "white" }} />
                        <ul><br />
                            <p style={{ color: "white" }}>&nbsp;&nbsp;User Management</p>
                            <li><a onClick={this.navigateToAdminHome} style={{ color: "white" }} >Profiles</a></li>
                            <li><a onClick={this.navigateToViewUsers} style={{ color: "white" }} class="active">Users</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>USERS</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by Email Address"
                                    name="searchUser"
                                    onChange={this.onChange}
                                    id="searchUser"
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br /><br />

                        <center>
                            <table class="table border shadow" id="casti_male" style={{ width: "90%" }}>
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">USER NAME</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">PROFILE</th>
                                        <th scope="col">ACTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.users.length > 0 && this.state.users.filter((values) => {
                                        if (this.state.searchUser == "") {
                                            return values;
                                        } else if (values.userEmail.toLowerCase().includes(this.state.searchUser.toLowerCase())) {
                                            return values;
                                        }
                                    }).map((item, index) =>
                                        <tr>
                                            <td>{item.username}</td>
                                            <td>{item.userEmail}</td>
                                            <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>{item.userRole}</b></span></td>
                                            <td>
                                                <li class="list-inline-item">
                                                    <button onClick={e => this.navigatetoUpdateUsers(e, item._id)} class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                                </li>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table></center>
                    </main>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        )
    }
}
