// Group Members: Daniel Mallia and Darren Zhang


// Declarations 
let part2ParanoidDiv = document.querySelector("#Part2ParanoidDiv");


// Part 1 Code
var part1Button1Clicked = false;
var part1Button2Clicked = false;
var part1ArguButton = document.querySelectorAll(".arguButton");
var part1ArguText = document.querySelector("#arguText")

console.log(part1ArguButton)
part1ArguButton[0].addEventListener("click", ()=>{
    part1Button1Clicked = true;
    if(part1Button1Clicked && part1Button2Clicked)
        part1ArguText.innerText = "No, I'm right!";
    else if(!part1Button2Clicked)
        part1ArguText.innerText = "I'm right";
})

part1ArguButton[1].addEventListener("click", ()=>{
    part1Button2Clicked = true;
    if(part1Button1Clicked && part1Button2Clicked)
        part1ArguText.innerText = "No, I'm right!";
    else if(!part1Button1Clicked)
        part1ArguText.innerText = "I'm right";

// Part 2 Code
part2ParanoidDiv.addEventListener("mouseenter", function(event) { 
    alert("Hey, I told you not to hover over me!");
})