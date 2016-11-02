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




var jake = new player();


function calculateBattleResult(playerInput){
	//player input is 1,2, or 3
	//player:1=Jump Kick,2=Shoot,3=Throat Punch
	//zombie:1=Bite,2=Scratch,3=Pounce
	//returns a true if the player wins returns false when the enemy wins
	let computerInput=(Math.round(Math.random()*3));
	let outputResult=(3+playerInput-computerInput)%3;
	let zombieDamage=(Math.round(Math.random()*10));

	if(outputResult===1){
		document.getElementById("textbox").innerHTML = "You win!";
		// return function(){
		// 	this.gold+=15;
			
		// }
	}
	else if (outputResult===2) {

				document.getElementById("textbox").innerHTML = "You lose!";
		// return function(){

		// 	if(this.health<=zombieDamage){
		// 		return gameOver();
		// 	}
		// 	else{
		// 		this.health-=zombieDamage;
		
		// 	}
		// };
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


    function startNinjaStory(){

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


    function startCowboyStory(){

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
        calculateBattleResult(1)
        // calculateBattleResult.call(jake,1)
    }

   
    function fire() {
        // document.getElementById("textbox").innerHTML = "FIRE WEAPON!!!";
        var battleWithNinja=calculateBattleResult.bind(jake);
		battleWithNinja(2)
    }

	 function punch() {
	        document.getElementById("textbox").innerHTML = "THROAT PUNCH!!!";    
			let playerInputArrayThatIsLiterallyOneObject=[3]
			calculateBattleResult.apply(jake,playerInputArrayThatIsLiterallyOneObject)
	    }





/********************************************************************************************************/

