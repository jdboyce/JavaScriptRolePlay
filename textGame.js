"use strict";
// function character(startingHealth){
// 	this.health=startingHealth;
// }
function player(){
	this.health=100;
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
	let zombieDamage=(Math.round(Math.random()*10));
	if(outputResult===1){
		return function(){
			this.gold+=15;
		}
	}
	else if (outputResult===2) {
		return function(){

			if(this.health<=zombieDamage){
				return gameOver();
			}
			else{
				this.health-=zombieDamage;
			}
		}
	}
	else{
		return calculateBattleResult(playerInput)
	}
}

function gameOver(){

}



function startAlienStory(){
	//somewhere in the story
	let playerInput;
	calculateBattleResult.call(/*whatever the user's name is*/,playerInput)
}
function startCowboyStory(){
	let playerInput;
	let playerInputArrayThatIsLiterallyOneObject=[playerInput]
	calculateBattleResult.apply(/*whatever the user's name is*/,playerInputArrayThatIsLiterallyOneObject)
}
function startNinjaStory(){
	let playerInput;
	var battleWithNinja=calculateBattleResult.bind(/*this person's name*/);
	battleWithNinja(playerInput)
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
