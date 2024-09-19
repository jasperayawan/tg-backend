const express = require("express")

const app = express();

app.get('/', async (req, res) => {
    res.send("hello world")
})

const port = 8801;

app.listen(port, () => {
    console.log("xiao yan!")
})