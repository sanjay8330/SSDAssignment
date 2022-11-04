/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228)
* Purpose     :   User Model on Database
* CreatedDate :   02nd November 2022
*************************************************************/
const mongoose = require('mongoose');

/*************************************************************
* Schema Name   :   Users
* Attributes    :   username, email, password, contact, role
* Primary Key   :   _id (MongoDB provided)
* Foreign Key   :   None
*************************************************************/
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: { 
        type: String,
        required: true,
        trim: true
    },
    userRole: {
        type: String,
        required: true,
        trim: true
    },
    jwtToken: {
        type: String,
        required: false
    }
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;