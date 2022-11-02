/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228)
* Purpose     :   Message Model on Database
* CreatedDate :   02nd November 2022
*************************************************************/
const mongoose = require('mongoose');

/*************************************************************
* Schema Name   :   Messages
* Attributes    :   user, message, sentDate, sentTime
* Primary Key   :   _id (MongoDB provided)
* Foreign Key   :   user (UserId)
*************************************************************/
const MessageSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,//Make false in case of error
        ref: 'Users'
    },
    message: { 
        type: String,
        required: true,
        trim: true 
    },
    sentDate: { 
        type: String,
        required: true,
        trim: true 
    },
    sentTime: { 
        type: String,
        required: true,
        trim: true 
    }
});

const Message = mongoose.model("Messages", MessageSchema);
module.exports = Message;