"use strict";


function player(){
	this.health=100;
	this.gold;
}
function zombie(){
};



var user = new player();

var heroArray = [];

 heroArray.push({"name": "The Squad", "attackOne": "bottle smash", "attackTwo":"glass eggs", "attackThree":"alien probe","storySegment":"This is the story segment for our team of heroes, The Squad."});
 heroArray.push({"name": "Paul the Alien", "attackOne": "jump kick", "attackTwo":"phaser blast", "attackThree":"throat punch","storySegment":"This is the story segment for Paul the Alien."});
 heroArray.push({"name": "Billy the Man", "attackOne": "jump kick", "attackTwo":"pistol shot", "attackThree":"throat punch","storySegment":"This is the story segment for Billy the Man."});
 heroArray.push({"name": "Crouching Hippo", "attackOne": "jump kick", "attackTwo":"throwing star", "attackThree":"throat punch","storySegment":"This is the story segment for ninja lenger master, Crouching Hippo."});

function startNewHero(heroIndex){

	user = heroIndex[heroIndex];
	heroIndex.splice(0, heroIndex);
}




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
	
	};

// 	if(outputResult===1){

// 	document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " wins!  Player health: " + user.health;

// 	}
// 	else if (outputResult===2) {

//     document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " loses!  Player health: " + user.health;
//     user.health -= 10;
	
// =======
	// var zombieDamage=(Math.round(Math.random()*10));
	if(outputResult===1){
		return ()=>{
			this.gold+=15;
	document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " wins!  Player health: " + user.health;
		}
	}
	else if (outputResult===2) {
		return ()=>{
			if(that.health<=zombieDamage){
				return gameOver();
			}
			else{
				this.health-=zombieDamage;
    document.getElementById("textbox").innerHTML = "The zombie attacked with a " + compInputAsString + ", your " + inputAsString + " loses!  Player health: " + user.health;
			}
		};
	}
	else{
		return calculateBattleResult(playerInput)
	}
};




function gameOver(){

};




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
    };




    function introNext(){
      removeElement("start");
      addElement("buttonCenter", "button", "introNext", "chooseCharacter();", "NEXT");
      document.getElementById("textbox").innerHTML = "This is the first part of the background story.";
    };




    function chooseCharacter(){
      removeElement("introNext");
      addElement("buttonLeft", "button", "startAlien", "startAlien();", "ALIEN");
      addElement("buttonCenter", "button", "startCowboy", "startCowboy();", "COWBOY");
      addElement("buttonRight", "button", "startNinja", "startNinja();", "NINJA");
      document.getElementById("textbox").innerHTML = "This is the second part of the background story. Now choose your player.";
    };




    function addBatBtns(passedElementTag){
      removeElement(passedElementTag);
      addElement("buttonLeft", "button", "fire", "fire();", "FIRE");
      addElement("buttonCenter", "button", "punch", "punch();", "PUNCH");
      addElement("buttonRight", "button", "kick", "kick();", "KICK");
    };






    function startAlien(){
      removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";
    };



    function startNinja(){
      removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";

    }



    function startCowboy(){
     removeElement("startAlien");
      removeElement("startCowboy");
      removeElement("startNinja");
      addElement("buttonCenter", "button", "startBattleOne", "addBatBtns('startBattleOne');", "NEXT");
      document.getElementById("textbox").innerHTML = "This is segment one of the player story.";

    }




	//player input is 1,2, or 3
	//player:1=Jump Kick,2=Fire,3=Throat Punch
	//zombie:1=Bite,2=Scratch,3=Pounce

	function kick() {
        var x=calculateBattleResult.call(user,1)
		x()
    }

    function fire() {
        var battleWithNinja=calculateBattleResult.bind(user);
		var x=battleWithNinja(2)
		x()
    }

	 function punch() {
	        // document.getElementById("textbox").innerHTML = "THROAT PUNCH!!!";
			let attackType=[3]
			var x=calculateBattleResult.apply(user,attackType)
			x()
	    }
