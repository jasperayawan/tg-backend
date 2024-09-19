const express = require("express")
const fs = require("fs");
const https = require("https");

const app = express();

const options = {
    key: fs.readFileSync("private.key"),
    cert: fs.readFileSync("certificate.crt"),
};

app.get('/', async (req, res) => {
    res.send("hello world")
})

const port = 443;


const server = https.createServer(options, app);
server.listen(port, () => console.log('Server running on port 443'));


// app.listen(port, () => {
//     console.log("xiao yan!")
// })