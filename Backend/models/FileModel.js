/*************************************************************
* Developer   :   Keshawa Ekanayake (IT19150758)
* Purpose     :   File Model on Database
* CreatedDate :   02nd November 2022
*************************************************************/
const mongoose = require('mongoose');

/*************************************************************
* Schema Name   :   Files
* Attributes    :   user, fileDownloadURL, uploadedTime, uploadedDate
* Primary Key   :   _id (MongoDB provided)
* Foreign Key   :   user (UserId)
*************************************************************/
const FileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,//Make false in case of error
        ref: 'Users'
    },
    fileName: { 
        type: String,
        required: true,
        trim: true 
    },
    fileDownloadURL: { 
        type: String,
        required: true,
        trim: true 
    },
    uploadedDate: { 
        type: String,
        required: true,
        trim: true 
    },
    uploadedTime: { 
        type: String,
        required: true,
        trim: true 
    }
});

const Files = mongoose.model("Files", FileSchema);
module.exports = Files;