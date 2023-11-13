const express = require('express');
const app = express();
const cors = require('cors');
//const controller = require('./controller/controller');
const sendApiRequest = require('./manager/sendApiRequest');
require('dotenv').config();

const port = process.env.SERVER_HOST_PORT;
let  totalRequest = 0; 
const interval = 2000; // in miliseconds

app.use(cors());
//should run forever to keep the database active
app.get("/", (req, res) => sendApiRequest(res));

// run the API request every 5 minutes

setInterval(() => {
    totalRequest += 1;
    app.get("/", (req, res) => { sendApiRequest(res) });
    console.log("request send");
}, interval);


app.listen(port, () => {
    console.log(`SERVER LISTENING ON PORT ${port}`);
})
