"use strict";
// function character(startingHealth){
// 	this.health=startingHealth;
// }
function player(){
	this.startingHealth=100;
	this.armor=20;
	this.gold;
}
function zombie(){
}
//player.prototype=new character(100)


function calculateBattleResult(playerInput){
	//player input is 1,2, or 3
	//player:1=Jump Kick,2=Shoot,3=Throat Punch
	//zombie:1=Bite,2=Scratch,3=Pounce
	//returns a true if the player wins returns false when the enemy wins
	let computerInput=(Math.round(Math.random()*3));
	let outputResult=(3+playerInput-computerInput)%3;
	if(outputResult===1){
		return playerWins()
	}
	else if (outputResult===2) {
		return playerLoses()
	}
	else{
		return calculateBattleResult(playerInput)
	}
}
function playerWins(){
	player.gold+=15;
}
function playerLoses(){
	let healthToLose=(Math.round(Math.random()*10));
	if(player.health<=healthToLose){
		return gameOver();
	}
	else{
		player.health-=healthToLose;
	}
}
function gameOver(){

}



function startAlienStory(){

}
function startCowboyStory(){

}
function startNinjaStory(){

}
function initGame(){
	var user= new player.assign;
	switch(pickedPlayer){
		case "A":
			startAlienStory();
			break;
		case "B":
			startCowboyStory();
			break;
		case "C":
			startNinjaStory();
			break;
	}
}
initGame();
