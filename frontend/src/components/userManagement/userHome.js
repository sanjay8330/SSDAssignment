/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   USER HOME PAGE 
 */

import React, { Component } from 'react'
import msg from '../../assets/images/message.jpg';
import '../../assets/css/userHome.css';
import Header from '../header';
import Axios from 'axios';
import firebase from '../../Firebase/firebase.js';

const initialStates = {
    "userdetails": [],
    "isManager": false,
    "message": '',
    "date": '',
    "errorMsg": '',
    "previousMsgs": [],
    "filename": '',
    "downloadURL": '',
    "previousFiles": []
}
export default class addNotePage extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
        this.onFileUpload = this.onFileUpload.bind(this);
        this.state = initialStates;
    }

    /**
    * DESCRIPTION       -       The function written to get user by ID.
    * METHOD CALLS      -       setState()
    * API CALL          -       GET USER BY ID
    */
    componentDidMount() {
        let user = [];

        Axios.get(`https://localhost:3001/user/getUserById/${this.props.match.params.id}`)
            .then((result) => {
                user = result.data.data;
                this.getPreviousMsg(user._id);

                //Show the file upload sections - IF MANAGER LOGGED IN
                if (user.userRole == 'Manager') {
                    this.setState({ isManager: true });
                    this.getPreviousFiles(user._id);

                    document.getElementById("uploadFileSection").style.display = "block";
                    document.getElementById("fileUploadTbSection").style.display = "block";
                }

                this.setState({ userdetails: user });

            }).catch((error) => {
                console.log('Error Occurred! : ', error);
            });

        //Get the current Date and time   
        this.setState({ date: this.formatDate() });
    }

    /**
    * DESCRIPTION       -       The function written to get message by userID.
    * METHOD CALLS      -       setState()
    * API CALL          -       GET MESSAGE BY USER ID
    */
    getPreviousMsg(userid) {
        let messages = [];

        Axios.get(`https://localhost:3001/message/getMsgByUserId/${userid}`)
            .then((result) => {
                messages = result.data.data;

                if (messages.length > 0) {
                    this.setState({ previousMsgs: messages });
                    document.getElementById("noMessageTag").style.display = "none";
                } else {
                    document.getElementById("noMessageTag").style.display = "block";
                }
            }).catch((error) => {
                console.log('Error Occurred! : ', error);
            });
    }

    /**
    * DESCRIPTION       -       The function written to get files by userID.
    * METHOD CALLS      -       setState()
    * API CALL          -       GET FILE BY USER ID
    */
    getPreviousFiles(userid) {
        let files = [];

        Axios.get(`https://localhost:3001/file/getFileByUserId/${userid}`)
            .then((result) => {
                files = result.data.data;

                if (files.length > 0) {
                    this.setState({ previousFiles: files });
                    document.getElementById("noFilesTag").style.display = "none";
                } else {
                    document.getElementById("noFilesTag").style.display = "block";
                }
            }).catch((error) => {
                console.log('Error Occurred! : ', error);
            });
    }

    onChange(e) {
        document.getElementById("errorMsg").style.display = "none";

        this.setState({ [e.target.name]: e.target.value });
    }

    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    formatDate(date = new Date()) {
        return [
            date.getFullYear(),
            this.padTo2Digits(date.getMonth() + 1),
            this.padTo2Digits(date.getDate()),
        ].join('-');
    }

    handleSubmitBtn(e) {
        e.preventDefault();

        var date = new Date();
        let time = date.toLocaleTimeString();

        if (this.state.message.length > 0) {
            let message = {
                "user": this.state.userdetails._id,
                "message": this.state.message,
                "sentDate": this.state.date,
                "sentTime": time
            }

            console.log('Post Message : ', message);
            this.postMessage(message);

            //Handle Manager logics
            if (this.state.downloadURL.length > 0 && this.state.isManager == true) {
                let file = {
                    "user": this.state.userdetails._id,
                    "fileName": this.state.filename,
                    "fileDownloadURL": this.state.downloadURL,
                    "uploadedDate": this.state.date,
                    "uploadedTime": time
                }
                console.log('Post File : ', file);
                this.postFile(file);
            }

        } else {
            this.setState({ errorMsg: '*Message is required' });
            document.getElementById("errorMsg").style.display = "block";
        }
    }

    /**
    * DESCRIPTION       -       The function written to save the message details.
    * API CALL          -       SAVE MESSAGE DETAILS
    */
    postMessage(message) {
        Axios.post('https://localhost:3001/message/addMessage', message)
            .then((result) => {
                console.log('Message added successfully!');
                alert('Message added successfully!');
                window.location.reload();
            }).catch((error) => {
                console.log('Error occurred! Please contact system administrator');
            })
    }

    /**
    * DESCRIPTION       -       The function written to save the file details.
    * API CALL          -       SAVE FILE DETAILS
    */
    postFile(file) {
        Axios.post('https://localhost:3001/file/addFile', file)
            .then((result) => {
                console.log('File saved successfully!');
                alert('File saved successfully!');
                window.location.reload();
            }).catch((error) => {
                console.log('Error occurred! Please contact system administrator');
            })
    }

    //File Upload Function
    async onFileUpload(e) {
        document.getElementById("sendBtn").disabled = true;
        const file = e.target.files[0];

        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);

        await fileRef.put(file).then(() => {
        }).catch(error => {
            alert(error.message);
        });

        const downloadURL = await fileRef.getDownloadURL();
        this.setState({ downloadURL: downloadURL });
        alert('File Uploaded Successfully!!', file.name);
        this.setState({ filename: file.name });

        document.getElementById("sendBtn").disabled = false;

    }

    render() {
        return (
            <div>
                <Header />
                <div class="wrapper">
                    <main>
                        <div class="container border rounded" style={{ width: '500px', backgroundColor: "#97c5de" }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={msg} alt="First slide" /><br />
                                            <span style={{ color: "black" }}>Date/Time<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                            <input
                                                className="form-control"
                                                type="date"
                                                name="date"
                                                id="date"
                                                value={this.state.date}
                                                disabled
                                                required
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} /><br />
                                            <span style={{ color: "black" }}>Message<span style={{ color: "red", fontSize: "24px" }}>*</span>&emsp;</span>&emsp; &emsp;<font color="red" style={{ fontSize: '14px' }}></font>
                                            <textarea
                                                className="form-control"
                                                rows="6"
                                                name="message"
                                                id="message"
                                                placeholder="Enter Message here.."
                                                onChange={this.onChange}
                                                required
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                            </textarea>
                                            <div id="errorMsg" style={{ display: "none" }}><p style={{ color: "red" }}>{this.state.errorMsg}</p></div>
                                            <br />
                                            <div id="uploadFileSection" style={{ display: "none" }}>
                                                <span style={{ color: "black" }}>Upload File<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    id="file"
                                                    name="file"
                                                    onChange={this.onFileUpload}
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}
                                                />
                                            </div>
                                            <br />
                                        </div>
                                        <button type="submit" style={{ width: '100%' }} className="btn btn-dark" id="sendBtn" onClick={this.handleSubmitBtn}>SEND&emsp;<i class="fas fa-paper-plane" aria-hidden="true"></i></button>
                                        <br /><br />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br /><hr /><br />
                        <div class="row">
                            <div class="column">
                                <table class="table" id="casti_male">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">MESSAGE</th>
                                            <th scope="col">SEND DATE</th>
                                            <th scope="col">SEND TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.previousMsgs.length > 0 && this.state.previousMsgs.map((item, index) =>
                                            <tr>
                                                <td>{item.message}</td>
                                                <td>{item.sentDate}</td>
                                                <td>{item.sentTime}</td>
                                            </tr>
                                        )}
                                        <br />
                                        <div class="alert alert-danger" role="alert" style={{ width: "156%", display: "none", fontFamily: "serif" }} id="noMessageTag">
                                            <center><h3>No previous messages to display</h3></center>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                            <div class="column">
                                <table class="table" id="fileUploadTbSection" style={{ display: "none" }}>
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col" style={{ width: '62%' }}>FILE</th>
                                            <th scope="col">UPLOAD DATE</th>
                                            <th scope="col">UPLOAD TIME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.previousFiles.length > 0 && this.state.previousFiles.map((item, index) =>
                                            <tr>
                                                <td>{item.fileName}</td>
                                                <td>{item.uploadedDate}</td>
                                                <td>{item.uploadedTime}</td>
                                            </tr>
                                        )}
                                        {/* <tr>
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
                                        </tr> */}
                                        <br />
                                        <div class="alert alert-danger" role="alert" style={{ width: "160%", display: "none", fontFamily: "serif" }} id="noFilesTag">
                                            <center><h3>No previous files to display</h3></center>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}





