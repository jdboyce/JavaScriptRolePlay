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




var user = new player();


function calculateBattleResult(playerInput){
	//player input is 1,2, or 3
	//player:1=Jump Kick,2=Shoot,3=Throat Punch
	//zombie:1=Bite,2=Scratch,3=Pounce
	//returns a true if the player wins returns false when the enemy wins



	let computerInput=(Math.round(Math.random()*3));
	if (computerInput != 1 && computerInput != 2 && computerInput != 3)
	{
		computerInput = 1;
	}
	let outputResult=(3+playerInput-computerInput)%3;
	let zombieDamage=(Math.round(Math.random()*10));
	var inputAsString = "";
	var compInputAsString = "";

	switch(computerInput){
		case 1: compInputAsString = "bite"; break;
		case 2: compInputAsString = "scratch"; break;
		case 3: compInputAsString = "pounce"; break;
		default: compInputAsString = "unknown";
	
	}

	switch(playerInput){
		case 1: inputAsString = "jump kick"; break;
		case 2: inputAsString = "weapon fire"; break;
		case 3: inputAsString = "throat punch"; break;
		default: inputAsString = "unknown";
	
	}

	if(outputResult===1){

	document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " wins!  Player health: " + user.health;

	}
	else if (outputResult===2) {

    document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " loses!  Player health: " + user.health;
    user.health -= 10;
	
	}
	else{
		return calculateBattleResult(playerInput)
	}
}

function gameOver(){

}



// function startAlienStory(){
// 	//somewhere in the story
// 	let playerInput;
// 	calculateBattleResult.call(/*whatever the user's name is*/,playerInput)
// }
// function startCowboyStory(){
// 	let playerInput;
// 	let playerInputArrayThatIsLiterallyOneObject=[playerInput]
// 	calculateBattleResult.apply(/*whatever the user's name is*/,playerInputArrayThatIsLiterallyOneObject)
// }
// function startNinjaStory(){
// 	let playerInput;
// 	var battleWithNinja=calculateBattleResult.bind(/*this person's name*/);
// 	battleWithNinja(playerInput)
// }

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




    function removeElement(elementId)
    {
        var element = document.getElementById(elementId);
        element.parentNode.removeChild(element);
    }

    function addElement(parentId, elementTag, elementId, func, innerHTML) {

        var p = document.getElementById(parentId);
        var newElement = document.createElement(elementTag);
        newElement.setAttribute('id', elementId);
        newElement.setAttribute('onclick', func);
        newElement.innerHTML = innerHTML;
        p.appendChild(newElement);
    }






    function introNext(){
      removeElement("start");
      addElement("buttonCenter", "button", "introNext", "chooseCharacter();", "NEXT");
      document.getElementById("textbox").innerHTML = "This is the first part of the background story.";
    }




    function chooseCharacter(){
      removeElement("introNext");
      addElement("buttonLeft", "button", "startAlien", "startAlien();", "ALIEN");
      addElement("buttonCenter", "button", "startCowboy", "startCowboy();", "COWBOY");
      addElement("buttonRight", "button", "startNinja", "startNinja();", "NINJA");
      document.getElementById("textbox").innerHTML = "This is the second part of the background story. Now choose your player.";
    }


  

    function  addBatBtns(passedElementTag){
      removeElement(passedElementTag);
      addElement("buttonLeft", "button", "fire", "fire();", "FIRE");
      addElement("buttonCenter", "button", "punch", "punch();", "PUNCH");
      addElement("buttonRight", "button", "kick", "kick();", "KICK");
    }






// Alien
/********************************************************************************************************/


    function startAlien(){
      removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";
    };


    function alienSegmentOne(){
    };

    function alienSegmentOne(){

    };

    function alienBattle(){

    };


/********************************************************************************************************/






// Ninja
/********************************************************************************************************/


    function startNinja(){
      removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";

    }

    function ninjaSegmentOne(){

    }

    function ninjaSegmentOne(){

    }

    function ninjaBattle(){

    }


/********************************************************************************************************/






// Cowboy
/********************************************************************************************************/


    function startCowboy(){
     removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";

    }

    function cowboySegmentOne(){

    }

    function cowboySegmentOne(){

    }

    function cowboyBattle(){

    }


/********************************************************************************************************/





// Shared

/********************************************************************************************************/


    function startBossLevel(){

    }


	//player input is 1,2, or 3
	//player:1=Jump Kick,2=Fire,3=Throat Punch
	//zombie:1=Bite,2=Scratch,3=Pounce
	function kick() {
        // document.getElementById("textbox").innerHTML = "JUMP KICK!!!";
        // calculateBattleResult(1)
        calculateBattleResult.call(user,1)
    }

   
    function fire() {
        // document.getElementById("textbox").innerHTML = "FIRE WEAPON!!!";
        var battleWithNinja=calculateBattleResult.bind(user);
		battleWithNinja(2)
    }

	 function punch() {
	        // document.getElementById("textbox").innerHTML = "THROAT PUNCH!!!";    
			let inputArray=[3]
			calculateBattleResult.apply(user,inputArray)
	    }





/********************************************************************************************************/

