// Random number generation for first player
var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
//Image set based on random number for first player
var image1Element = document.querySelector(".img1");
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
image1Element.setAttribute("src", randomImageSource);

/*if(randomNumber1 === 1) {
    image1Element.setAttribute("src", "images/dice1.png")
} else if(randomNumber1 === 2) {
    image1Element.setAttribute("src", "images/dice2.png")
} else if(randomNumber1 === 3) {
    image1Element.setAttribute("src", "images/dice3.png")
} else if(randomNumber1 === 4) {
    image1Element.setAttribute("src", "images/dice4.png")
} else if(randomNumber1 === 5) {
    image1Element.setAttribute("src", "images/dice5.png")
} else if(randomNumber1 === 6) {
    image1Element.setAttribute("src", "images/dice6.png")
}*/

// Random number generation for second player
var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
//Image set based on random number for second player
var image2Element = document.querySelector(".img2");
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png
image2Element.setAttribute("src", randomImageSource2);

/*if(randomNumber2 === 1) {
    image2Element.setAttribute("src", "images/dice1.png")
} else if(randomNumber2 === 2) {
    image2Element.setAttribute("src", "images/dice2.png")
} else if(randomNumber2 === 3) {
    image2Element.setAttribute("src", "images/dice3.png")
} else if(randomNumber2 === 4) {
    image2Element.setAttribute("src", "images/dice4.png")
} else if(randomNumber2 === 5) {
    image2Element.setAttribute("src", "images/dice5.png")
} else if(randomNumber2 === 6) {
    image2Element.setAttribute("src", "images/dice6.png")
}*/

//Final logic based on random number generation
var h1Element = document.querySelector("h1");
if(randomNumber1 > randomNumber2) {
    h1Element.innerHTML = "⛳ Player 1 Wins!"
} else if(randomNumber2 > randomNumber1) {
    h1Element.innerHTML = "player 2 Wins! ⛳";
} else if(randomNumber1 === randomNumber2) {
    h1Element.innerHTML = "Draw!";
}