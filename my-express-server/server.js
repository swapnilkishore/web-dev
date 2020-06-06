const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req, res) {
  res.send("Nope!!");
})

app.get("/about", function(req, res) {
  res.send("<h1>I am a computer sciene graduate student</h1> <h2>I live in Buffalo</h2>");
})

app.get("/hobbies", function(req, res) {
  res.send("Football, music");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
