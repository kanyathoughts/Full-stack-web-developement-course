// var buttons = document.querySelectorAll("button");
// for(let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         // document.querySelector("h1").style.color = "red";
//         // console.log(buttons[i]);
//         buttonAnimation();
//     });
// }

// // function buttonAnimation () {
// //     var activeButton = document.querySelector("button");
// //     activeButton.classList.add("pressed");
// //     setTimeout(function () {
// //         activeButton.classList.remove("pressed")
// //     }, 1000);
// // }

// function buttonAnimation () {
//     var activeButton = document.querySelector("h1");
//     activeButton.classList.add("pressed");
//     setTimeout(function () {
//         activeButton.classList.remove("pressed")
//     }, 1000);
// }

//This will wait until document will load and then process next actions
// $(document).ready(function () {
//     $("h1").css("color", "red");
// })
// $("h1").css("color", "red"); //To set the values in jquery
// console.log($("h1").css("color")); //To get the values in jquery
// document.querySelector("h1").innerHTML = "kanya"; //To set the values in java script
// console.log(document.querySelector("h1").innerHTML); //To get the values in java script
$("h1").addClass("big-title margin");  //It is same like below js
//document.querySelector("h1").classList.remove("big-title");
//To add multiple classes we can simply add space between classes
//java script is for behavioral purpose and css is for appearance purpose and html is for content purpose
//$("h1").removeClass("big-title"); To remove class

console.log($("h1").hasClass("margin")); //will return boolean true/false 

$("button").text("Don't click me"); //To set the innerText
$("h1").html("<em>stop</em>"); //To set the innerHTML

console.log($("a").attr("href")); //To get attribute value
$("a").attr("href", "https://www.yahoo.com"); //To set attribute value

//Adding click event listener using jquery
$("button").click(function() {
    $("h1").css("color", "green");
})

//Adding keypress event listener using jquery
$(document).keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key);
})

//We can use on method and can mention any kind of event listener
$("h1").on("mouseover", function() {
    $("h1").css("color", "pink");
})

//Adding and removing elements using jquery on the fly
//Adding elements
$("h1").before("<button>kanya</button>"); //before the h1 tag
$("h1").after("<button>kanya</button>"); //after the h1 tag
$("h1").prepend("<button>kanya</button>"); //before the h1 content
$("h1").append("<button>kanya</button>"); //after the h1 content
//removing elements
//$("h1").remove(); //To remove all h1 elemets in the dom

//Animations in jquery
$("button").on("click", function() {
    // $("h1").fadeToggle(); 
})

// $("h1").fadeIn();
// $("h1").fadeOut();
// $("h1").fadeToggle();

// $("h1").hide();
// $("h1").show();
// $("h1").toggle();

// $("h1").slideUP();
// $("h1").slideDown();
// $("h1").slideToggle();

$("button").on("click", function() {
    $("h1").animate({opacity: 0.5}); //Inside the animation only numeric values are allowed
})
