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
                            <li><a href="/viewProfiles" style={{ color: "white" }} class="active">Profiles</a></li>
                            <li><a href="/viewUsers" style={{ color: "white" }} >Users</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>PROFILES</h1>

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
                                        <th scope="col">PROFILE</th>
                                        <th scope="col" colspan="2">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;PERMISSIONS</th>
                                        <th scope="col">ACTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>Worker</b></span></td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="workerMsg" d />
                                            <label class="custom-control-label" for="workerMsg">Add Message</label>
                                        </div>
                                        </td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="workerFile" />
                                            <label class="custom-control-label" for="workerFile">Add File</label>
                                        </div>
                                        </td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                            </li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>Manager</b></span></td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="mngMsg" d />
                                            <label class="custom-control-label" for="mngMsg">Add Message</label>
                                        </div>
                                        </td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="mngFile" />
                                            <label class="custom-control-label" for="mngFile">Add File</label>
                                        </div>
                                        </td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                            </li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>System Admin</b></span></td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="admMsg" d />
                                            <label class="custom-control-label" for="admMsg">Add Message</label>
                                        </div>
                                        </td>
                                        <td><div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="admFile" />
                                            <label class="custom-control-label" for="admFile">Add File</label>
                                        </div>
                                        </td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'green' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit">UPDATE &nbsp; <i class="fas fa-edit"></i></button>
                                            </li>
                                        </td>
                                    </tr>
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
