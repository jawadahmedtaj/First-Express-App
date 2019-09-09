const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("Hi there!");
})


app.get("/bye", function (req, res) {
    res.send("Bye!");
})

app.get("/dog", function (req, res) {
    console.log("Someone made a request to /dog");
    res.send("Meow!");
})

app.get("/r/:subredditName", function (req, res) {
    res.send("Welcome to the subreddit");
})

app.get("*", function (req, res) {
    res.send("You are a star!!!");
})

//process.env.PORT, process.env.IP
app.listen(3000, function () {
    console.log("Listening on port 3000");
})