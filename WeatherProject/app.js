const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log("Running on port 3000");
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  //res.send("Server is up and running");
})

app.post("/", function(req, res) {
  const query = req.body.cityName;
  const apiKey = "b2582082aa446ee0f8f622958b3dc22a";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid="+ apiKey+ "&units=" + unit;
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const iconTag = weatherData.weather[0].icon;
      console.log(iconTag);
      const iconUrl = "http://openweathermap.org/img/wn/" + iconTag + "@2x.png";
      console.log(iconUrl);
      res.write("<h1>The weather in " + query + " is: " + temp + "</h1>");
      res.write("<h2>The weather is like: " + weatherDescription + "</h2>");
      res.write("<img src=" + iconUrl +">");
      res.send();
    })
    })
})
