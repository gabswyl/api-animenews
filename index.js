const express = require('express')
const app = express();

app.get("/home", function(req, res) {
    res.send("hello world")
})

app.listen(3000)