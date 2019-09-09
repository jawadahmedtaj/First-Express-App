const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Hi there!");
})

//process.env.PORT, process.env.IP
app.listen(3000, function () {
    console.log("Listening on port 3000");
})