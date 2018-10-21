//Variables
var wins;
var losses;
var userScore;
var targetNumber;
var min = 19;
var max = 120;



function init(gameIsStarting) {
  if (gameIsStarting) {
    wins = 0;
    losses = 0;  
  }

  userScore = 0;
  //Creates random number between 19-120 for targetNumber
  targetNumber = Math.floor(Math.random() * (max - min)) + min;
}

init(true);



$("#compNumber").text(targetNumber);

//Creates 4 random numbers between 1-12 to assign to images

var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   
function myFunction() {
    points.sort(function(a, b){return 0.5 - Math.random()});
}
myFunction();

console.log(points);

//Creates 4 different imagesCrystals using loop and gives them a value
function imgCrystals () {
   for (var i = 0; i < 4; i++) {
   console.log(points[i]);
   //
   var imageCrystal = $("<img>");
   imageCrystal.addClass("crystal-image");

   imageCrystal.attr("src", "images/" + [i] + ".png");

   imageCrystal.attr("data-crystalvalue", points[i]);

   $("#crystals").append(imageCrystal);

    };
};

imgCrystals();


//click events for each image
$(".crystal-image").on("click", function() {
var crystalvalue = ($(this).attr("data-crystalvalue"));
crystalvalue = parseInt(crystalvalue);

//Adds crystalValue to userScore
//Every click adds to userScore
userScore += crystalvalue;
$("#userScore").text(userScore);

if (targetNumber === userScore) {
    wins++;

    $("#wins").text(wins);

    init(false);
    myFunction();

    

    $("#compNumber").text(targetNumber);
    // console.log(newTarget);
    // var resetScore = 0;
    // $("#userScore").text(resetScore);
    
} else if (userScore >= targetNumber) {
    losses++;
    $("#losses").text(losses);
    init(false);
    myFunction();
    console.log(points);
  
    
}
//make sure goal score is alway positive
//need to reset values of userScore and targetNumber
});