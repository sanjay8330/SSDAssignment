import React, { Component } from 'react'
import msg from '../../assets/images/message.jpg';
import '../../assets/css/userHome.css';
import Header from '../header';

export default class addNotePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div class="wrapper">
                    <main>
                        <div class="container border rounded" style={{ width: '500px', marginLeft: "50px", backgroundColor: "#97c5de" }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={msg} alt="First slide" /><br />
                                            <span style={{ color: "black" }}>Date/Time<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                            <input
                                                className="form-control"
                                                type="datetime-local"
                                                name="dateTime"
                                                id="dateTime"
                                                required
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} /><br />
                                            <span style={{ color: "black" }}>Message<span style={{ color: "red", fontSize: "24px" }}>*</span></span>&emsp; &emsp;<font color="red" style={{ fontSize: '14px' }}></font>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                name="message"
                                                id="message"
                                                placeholder="Enter Message here.."
                                                required
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                            </textarea><br />
                                            <span style={{ color: "black" }}>Upload File<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="file"
                                                name="file"
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}
                                            /><br />
                                        </div>
                                        <button type="submit" style={{ width: '100%' }} className="btn btn-dark" id="sendBtn">SEND&emsp;<i class="fas fa-paper-plane" aria-hidden="true"></i></button>
                                        <br /><br />
                                    </form>
                                </div>
                            </div>
                        </div><br />
                        <table class="table border shadow" id="casti_male" style={{ width: "52%", marginLeft: "630px", marginTop: "-51%" }}>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">MESSAGE</th>
                                    <th scope="col">SEND DATE</th>
                                    <th scope="col">SEND TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><textarea disabled rows="3" cols="45" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>Message Send Successfully</textarea></td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                                <tr>
                                    <td><textarea disabled rows="3" cols="45" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>Message Send Successfully</textarea></td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                                <tr>
                                    <td><textarea disabled rows="3" cols="45" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>Message Send Successfully</textarea></td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <table class="table border shadow" id="casti_male" style={{ width: "52%", marginLeft: "630px", marginTop: "-1%" }}>
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">FILE</th>
                                    <th scope="col">UPLOAD DATE</th>
                                    <th scope="col">UPLOAD TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>work.txt</td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                                <tr>
                                    <td>work.txt</td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                                <tr>
                                    <td>work.txt</td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                                <tr>
                                    <td>work.txt</td>
                                    <td>2022.10.20</td>
                                    <td>10:00 AM</td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br />
                    </main>
                </div>
            </div>
        )
    }
}





