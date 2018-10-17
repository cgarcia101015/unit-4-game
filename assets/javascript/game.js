//Variables
var wins = 0;

var losses = 0;

var compNumber = 0;

var userScore = 0;



var min = 19;
var max = 120;
var targetNumber = Math.floor(Math.random() * (max - min)) + min;

console.log(targetNumber);


$("compNumber").text(targetNumber);
