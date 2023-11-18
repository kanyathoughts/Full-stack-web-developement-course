// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("Button got clicked");
// }

//We can directly give ananymous functions inside the event listeners like below
// document.querySelector("button").addEventListener("click", function () {
//     alert("Button got clicked");
// });

//Detecting button press
var allDrums = document.getElementsByClassName("drum");
for(let i = 0; i < allDrums.length; i++) {
    //In side the addEventListener method first parameter specifying what event it should listen to and 
    //second parameter specifying that what it should do.
    allDrums[i].addEventListener("click", () => {
        //this keyword will return the element which got the event listener.
        var buttonInnerHTML = this.allDrums[i].innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press
document.addEventListener("keydown", function(event) {
//    console.log(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        default:
            console.log(key);
        break;
    }
}

function buttonAnimation (eventKey){
    var activeButton = document.querySelector("." + eventKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

