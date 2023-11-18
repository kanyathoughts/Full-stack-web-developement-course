//import express from "express";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//Our app should use this body parser
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(request, response) {
    //__dirname will return the whole path of this directory
    console.log(__dirname);
    //We can send file as response for the get request from browser
    response.sendFile(__dirname + "/index.html");
});

//We are passing the data as request and getting the calculated thing as reponse from the server.
app.post("/", function(request, response) {
    //This num1 and num2 are the names from html file
    //<input type="text" name="num1" placeholder="first number">
    var number1 = Number(request.body.num1);
    var number2 = Number(request.body.num2);
    var result = number1 + number2;
    response.send("Result of " + number1 + " + " + number2 + " is: " + result);
    
})
app.listen("3000", function() {
    console.log("server listening to port 3000");
});

app.get("/bmicalculator", function(request, response) {
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response) {
    var weight = request.body.weight;
    var height = request.body.height;
    var result = weight * height;
    response.send("your BMI is: " + result);
});