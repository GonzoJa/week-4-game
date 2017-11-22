//make var for wins, losses, and user score.
var wins = 0;
var losses = 0;
var gameScore ;
var userScore = 0;
var crystalOne ;
var crystaltwo ;
var crystalThree ;
var crystalFour ;
var crystalArray = [1,2,3,4];
var crystalValue ;


//function to generate a random number 
function generateGameScore() {
	gameScore = Math.floor((Math.random() * 25) + 1);
}

//Nested function to get random value for the crystal.
function setCrystalValue() {
	function getrandomAndSplice(){
		var randomIndex = Math.floor(Math.random() * crystalArray.length);
		var value = crystalArray[randomIndex];
		crystalArray.splice(randomIndex,1);
		return value;
	}
	//Set each crystal equal to:
	crystalOne = getrandomAndSplice();
	crystalTwo = getrandomAndSplice();
	crystalThree = getrandomAndSplice();
	crystalFour = getrandomAndSplice();
}


function displayScore() {
	$("#userScore").text(userScore);
	$("#gameScore").text(gameScore);
}
function startGame() {
	generateGameScore();
	displayScore();
	setCrystalValue();

}


function userPlay(crystalValue) {
	userScore = userScore + crystalValue;
	if (userScore > gameScore) {
		losses++;
		$("#losses").html(+ losses);
		alert("Looser!");
		
	}
	else if(userScore === gameScore){
		wins++;
		$("#wins").html(+ wins);
		alert("Winner!");
		
	}
	else{
		displayScore();
	}
}


// function userPlay(crystalValue) {
// 	userScore = userScore + crystalValue;
// 	if (userScore === gameScore) {
// 		alert("winner!");
// 		wins++;
// 		$("#wins").html("<h3>" + wins + "</h3>");
// 	}
// 	else if(userScore >gameScore){
// 		alert("Looser!");
// 		looses++;
// 		$("#losses").html("<h3>" + losses + "</h3>");
// 	}
// 	else{
// 		displayScore();
// 	}
// }

//call the function userPlay

$(document).ready(function(){
	$("#firstImage").click(function(){
		userPlay(crystalOne);
	});
	$("#secondImage").click(function(){
		userPlay(crystalTwo);
	});
	$("#thirdImage").click(function(){
		userPlay(crystalThree);
	});$("#fourthImage").click(function(){
		userPlay(crystalFour);
	});
});

	//update wins and losses.
	// function updateScore(){
	// if(userScore === gameScore){
	// 	wins++;
	// 	$("wins").text(wins);
	// }
	// else{
	// 	losses++;
	// }
	// }

startGame();




//set each crystal with an on click function that updates the score of the game.
//create a var for the score of the game.
//make a function to reset the score of the game.

