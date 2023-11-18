// const fs = require("fs"); //incorporating file system module into our project
// fs.copyFileSync("File1.txt", "File2.txt"); //copy the File1 source to File2 destination
//To refelct the changes we need to run this code inside CLI by typing node index.js

// const sh = require("marveljs");
// console.log(sh.Groot);

const superVillain = require("supervillains");
console.log("superVillain: " + superVillain.random());
// var arr = superVillain.all;
// console.log(arr);

const superHero = require("superheroes");
console.log("superHero: " + superHero.random());
