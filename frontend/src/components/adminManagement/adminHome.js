import React, { Component } from 'react'
import '../../assets/css/admin.css';

export default class adminHome extends Component {
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
                            <li><a href="/profiles" style={{ color: "white" }} class="active">Profiles</a></li>
                            <li><a href="/users" style={{ color: "white" }} >Users</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>ADMIN DASHBOARD</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by Email Address"
                                    name="searchNote"
                                    id="searchNote"
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
                                    <th scope="col">ROLE</th>
                                    <th scope="col">ACTION</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kasuni Navodya</td>
                                    <td>kasu98@gmail.com</td>
                                    <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>Worker</b></span></td>
                                    <td>
                                        <li class="list-inline-item">
                                            <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                        </li>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kavindi Gimshani</td>
                                    <td>kavi99@gmail.com</td>
                                    <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>Manager</b></span></td>
                                    <td>
                                        <li class="list-inline-item">
                                            <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                        </li>
                                    </td>
                                </tr>
                            </tbody>
                        </table></center>
                    </main>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        )
    }
}
