const express = require("express")

const app = express();

app.get('/', async (req, res) => {
    res.send("hello world")
})

const port = 80;

app.get('/.well-known/pki-validation/803006C38152673D4A5F183673A5A2DD.txt', (req, res) => {
    res.sendFile('/root/tg-backend/803006C38152673D4A5F183673A5A2DD.txt')
})

app.listen(port, () => {
    console.log("xiao yan!")
})