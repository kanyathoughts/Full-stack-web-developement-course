const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}))

app.listen("3000", function() {
    console.log("server listening to port 3000");
});

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, response) {
    const cityName = req.body.cityName;
    const appID = "5c32e7980e16016b0126fa90f5b0a58b";
    const units = req.body.metric;
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + appID + "&units=" + units + "&q=" + cityName;
    console.log("url: " + url);
    https.get(url, (res) => {
        console.log(res.statusCode);
        //here from the response we want to get data so it should be data as first parameter
        //In the call back function we can mention any name which we want
       res.on("data", function(res_data) {
        const weatherData = JSON.parse(res_data);
        console.log(weatherData);
        //This main.temp, we can copy the path of particular item from the json using the json viewer pro extension in the chrome
        console.log("temerature: " + weatherData.main.temp);
        console.log(weatherData.weather[0].description);
        const icon = weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        //we can give response.send method only once so that's why we are writing all the contents and sending the response back to the user
        response.write("<p>The weather is currently " + weatherData.weather[0].description + " </p>");
        response.write("<h1>The current temperature in " + cityName + " is " + weatherData.main.temp + " degress celcius</h1>");
        response.write("<img src=" + imageURL + ">")
        response.send();
       })
    })
   //res.send(req.body.cityName);
})





