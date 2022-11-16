/*************************************************************
* Developer   :   Sanjay Sakthivel (IT19158228), Kavindi Gimshani (IT19150826), Kasuni Navodya (IT19144986), Keshawa Ekanayake (IT19150758)
* Purpose     :   Main Backend JS File
* CreatedDate :   02nd November 2022
*************************************************************/
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const path = require('path');
const fs = require('fs');

var { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa');

dotenv.config();
//Creating an app from express
const app = express();

//Getting the output as a JSON from the app
//app.use(express.json()); -- Commented on addition of bodyparser
app.use(bodyparser.json());
app.use(cors());

//Token Verification
const UserRoutes = require('./routes/User');
const MessageRoutes = require('./routes/Message');
const FileRoutes = require('./routes/File');

app.use("/user", UserRoutes);
app.use("/message", MessageRoutes);
app.use("/file", FileRoutes);

const verifyToken = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,           
        rateLimit: true,          
        jwksRequestsPerMinute: 5,           
        jwksUri: 'https://dev-qnou8xkfjg4shami.us.auth0.com/.well-known/jwks.json'
    }), 
    audience: 'Unique identifier',     
    issuer: 'https://dev-qnou8xkfjg4shami.us.auth0.com/',     
    algorithms: ['RS256'] 
}).unless({ path: ['/']}); 

app.use(verifyToken);
//END

app.get('/', async(req,res) => {
    res.send('Welcome to the Secure Messaging Application!!');
})

//Handle errors
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).send(message);
});

app.use((req, res, next) => {
    const error = new Error('Not Found!');
    error.status = 404;
    next(error);
});

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

//Connection to mongoose
mongoose.connect(MONGODB_URI || '&w=majority' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, (error) => {
    if(error) {
        console.log('Error in connection');
    }
})

//Check if connection is successful
mongoose.connection.once('open', () => {
    console.log('Database Synched!!');
})

//Running on the server
// app.listen(PORT,() => {
//     console.log(`Server is started and running on ${PORT}`);
// });

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    },
    app
)

sslServer.listen(PORT,() => {console.log(`Server is started and running on ${PORT}`);});

module.exports = app;