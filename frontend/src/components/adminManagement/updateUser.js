import React, { Component } from 'react'
import user from '../../assets/images/user.jpg';

export default class updateUser extends Component {
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
                            <li><a a href="/viewProfiles" style={{ color: "white" }} >Profiles</a></li>
                            <li><a href="/viewUsers" style={{ color: "white" }}>Users</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>UPDATE USER</h1>
                        <div class="container border rounded" style={{ width: '500px', backgroundColor: "#97c5de" }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={user} alt="First slide" /><br />
                                            <span style={{ color: "black" }}>User Name<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="username"
                                                id="username"
                                                required /><br />
                                            <span style={{ color: "black" }}>Email Address<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <input
                                                class="form-control"
                                                type="email"
                                                name="userEmail"
                                                id="userEmail"
                                                required /><br />
                                            <span style={{ color: "black" }}>Profile<span style={{ color: "red", fontSize: "24px" }}>*</span></span><br />
                                            <select name="profileType" id="profileType" class="form-select" aria-label="Default select example" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb", width: "100%", height: "40px" }}>
                                                <option selected value="pro" disabled>Select Profile</option>
                                                <option value="Worker">Worker</option>
                                                <option value="Manager">Manager</option>
                                                <option value="SysAdmin">System Admin</option>
                                            </select><br />
                                        </div><br />
                                        <button type="submit" style={{ width: '100%' }} className="btn btn-dark" id="updateBtn">UPDATE</button>
                                        <br /><br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
