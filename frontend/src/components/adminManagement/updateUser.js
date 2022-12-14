/**
 * SCOPE    -   ADMIN MANAGEMENT
 * PAGE     -   UPDATE USER ROLE PAGE 
 */

import React, { Component } from 'react'
import user from '../../assets/images/user.jpg';
import Axios from 'axios';

const initialStates = {
    "users": [],
    "username": '',
    "userEmail": '',
    "userRole": '',
    "adminID": ''
}

export default class updateUser extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.navigateToAdminHome = this.navigateToAdminHome.bind(this);
        this.navigateToViewUsers = this.navigateToViewUsers.bind(this);
        this.state = initialStates;
    }

    /**
    * DESCRIPTION       -       The function written to get the user by ID.
    * METHOD CALLS      -       setState()
    * API CALL          -       GET USER DETAILS BY ID
    */
    componentDidMount() {
        Axios.get(`https://localhost:3001/user/getUserById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ users: response.data.data });
                this.setState({ username: this.state.users.username });
                this.setState({ userEmail: this.state.users.userEmail });
                this.setState({ userRole: this.state.users.userRole });
            }).catch(error => {
                console.log(error.message);
            });

        let adminId = this.props.match.params.adminId;
        this.setState({ adminID: adminId });
    }

    onChange(e) {
        e.persist();
        this.setState({ [e.target.name]: e.target.value });
    }

    /**
    * DESCRIPTION       -       The function written to update the user role details.
    * METHOD CALLS      -       setState()
    * API CALL          -       UPDATE USER ROLE DETAILS
    */
    onSubmit(e) {
        e.preventDefault();

        let updateUser = {
            "username": this.state.username,
            "userEmail": this.state.userEmail,
            "userRole": this.state.userRole,
        }
        Axios.put(`https://localhost:3001/user/updateUserRole/${this.props.match.params.id}`, updateUser)
            .then(response => {
                alert('User Profile Details Updated Successfully');
                window.location = `/viewUsers/${this.state.adminID}`;
            }).catch(error => {
                alert(error.message);
            })
    }

    /**
     * DESCRIPTION      -       The function to navigate to the admin home page
     */
    navigateToAdminHome(){
        window.location = `/viewProfiles/${this.state.adminID}`;
    }

    /**
     * DESCRIPTION      -       The function to navigate to the view users page
     */
    navigateToViewUsers(){
        console.log('Button CLicked!');
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
                            <li><a onClick={this.navigateToViewUsers} style={{ color: "white" }}>Users</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>UPDATE USER</h1>
                        <div class="container border rounded" style={{ width: '500px', backgroundColor: "#97c5de" }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form onSubmit={this.onSubmit}><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={user} alt="First slide" /><br />

                                            <span style={{ color: "black" }}>User Name<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="username"
                                                defaultValue={this.state.username}
                                                onChange={this.onChange}
                                                disabled
                                                required />
                                            <br />

                                            <span style={{ color: "black" }}>Email Address<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="userEmail"
                                                defaultValue={this.state.userEmail}
                                                onChange={this.onChange}
                                                disabled
                                                required />
                                            <br />

                                            <span style={{ color: "black" }}>Profile<span style={{ color: "red", fontSize: "24px" }}>*</span></span><br />
                                            <select name="userRole" onChange={this.onChange} value={this.state.userRole} class="form-select" aria-label="Default select example" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb", width: "100%", height: "40px" }}>
                                                <option value="Worker">Worker</option>
                                                <option value="Manager">Manager</option>
                                                <option value="System Admin">System Admin</option>
                                            </select>
                                            <br />

                                        </div><br />
                                        <button type="submit" style={{ width: '100%' }} className="btn btn-dark" id="submitBtn">UPDATE</button>
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
