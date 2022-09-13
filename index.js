//variable declarations

let result = document.getElementById('result');
var ratedValue; //this will hold the any rated number clicked
let submit_btn = document.getElementById('submit-btn');
let card = document.getElementById('cards');
let card_thank_you = document.getElementById('card-thank-you');
let numbOne = document.getElementById('numbOne');
let numbTwo = document.getElementById('numbTwo');
let numbThree = document.getElementById('numbThree');
let numbFour = document.getElementById('numbFour');
let numbFive = document.getElementById('numbFive');


//NOTE: I didn't use click event listener for this
//I added the onClick function on directly on the HTML div - check index.html page to find them


//each function below ensures whenever a rating number is selected
//the background color changes and returns the figure chosen to the ratedValue variable;

function ratedOne(){
    numbOne.style.backgroundColor = "hsl(217, 12%, 63%)";
    numbTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFive.style.backgroundColor = "hsl(213, 18%, 24%)";
    ratedValue = document.getElementById('numbOne').innerHTML;
    console.log(ratedValue);
    submit_btn.style.cursor = "pointer";
    submit_btn.style.pointerEvents = "all";
    submit_btn.style.opacity = "100%";
    
}

function ratedTwo(){
    numbTwo.style.backgroundColor = "hsl(217, 12%, 63%)";
    numbOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFive.style.backgroundColor = "hsl(213, 18%, 24%)";
    ratedValue = document.getElementById('numbTwo').innerHTML;
    console.log(ratedValue);
    submit_btn.style.cursor = "pointer";
    submit_btn.style.pointerEvents = "all";
    submit_btn.style.opacity = "100%";
    
}

function ratedThree(){
    numbThree.style.backgroundColor = "hsl(217, 12%, 63%)";
    numbTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFive.style.backgroundColor = "hsl(213, 18%, 24%)";
    ratedValue = document.getElementById('numbThree').innerHTML;
    console.log(ratedValue);
    submit_btn.style.cursor = "pointer";
    submit_btn.style.pointerEvents = "all";
    submit_btn.style.opacity = "100%";
    
}

function ratedFour(){
    numbFour.style.backgroundColor = "hsl(217, 12%, 63%)";
    numbTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFive.style.backgroundColor = "hsl(213, 18%, 24%)";
    ratedValue = document.getElementById('numbFour').innerHTML;
    console.log(ratedValue);
    submit_btn.style.cursor = "pointer";
    submit_btn.style.pointerEvents = "all";
    submit_btn.style.opacity = "100%";
    
}

function ratedFive(){
    numbFive.style.backgroundColor = "hsl(217, 12%, 63%)";
    numbTwo.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbThree.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbFour.style.backgroundColor = "hsl(213, 18%, 24%)";
    numbOne.style.backgroundColor = "hsl(213, 18%, 24%)";
    ratedValue = document.getElementById('numbFive').innerHTML;
    console.log(ratedValue);
    submit_btn.style.cursor = "pointer";
    submit_btn.style.pointerEvents = "all";
    submit_btn.style.opacity = "100%";
    
}


//this function ensures when the submit button is clicked
//the first ratings card disappears and the thank you card is shown
//with the value rated
function ratings(){
    result.innerHTML = ratedValue;
    card.style.display = "none";
    card_thank_you.style.display = "flex";
}