// This below line has to be added since import is being used in java script files.
//"type": "module"
import express from "express";

//Instead of import we can give below code to incorporate express module to our project.
//const express = require("express");
const app = express();

//This is get request from the browser to the server and we are using the 
//call back function to get the response form the server/
// forward slash represents the home route which is the localhost:3000 in our case
app.get("/", function(request, response) {
    // console.log(request);
    // response.send("Hello");
    response.send("<h1>Hello Kanya</h1>");
})

//Here we are accessing the contact route which is localhost:3000/contact and want to get information from the server
app.get("/contact", function(req, res) {
    res.send("contact me at: kanyakumari950@gmail.com");
})

//Here we are accessing the about route which is localhost:3000/about and want to get information from the server
app.get("/about", function(req, res) {
    res.send("about my self: My name is kanyakumari and \n I'm a software enginner");
})

//Here we are accessing the hobbies route which is localhost:3000/about and want to get information from the server
app.get("/hobbies", function(req, res) {
    res.send("<ul><li>instagram reels</li><br><li>Watching movies</li><br><li>Chitchat with frineds</li></ul>");
})

app.listen("3000", function() {
    console.log("Server started on port 3000");
});
