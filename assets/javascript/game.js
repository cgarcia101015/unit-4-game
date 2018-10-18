//Variables
var wins = 0;

var losses = 0;

var compNumber = 0;

var userScore = 0;


//Creates random number between 19-120 for targetNumber
var min = 19;
var max = 120;
var targetNumber = Math.floor(Math.random() * (max - min)) + min;

console.log(targetNumber);


$("#compNumber").text(targetNumber);

//Creates 4 random numbers between 1-12 to assign to images

var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   
function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
}
myFunction();

console.log(points);

//Creates 4 different imagesCrystals using loop and gives them a value
for (var i = 0; i < 4; i++) {
   console.log(points[i]);
   //
   var imageCrystal = $("<img>");
   imageCrystal.addClass("crystal-image");

   imageCrystal.attr("src", "images/" + [i] + ".png");

   imageCrystal.attr("data-crystalvalue", points[i]);

   $("#crystals").append(imageCrystal);

};










