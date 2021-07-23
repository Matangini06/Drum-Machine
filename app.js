var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonInnerHTML=this.innerHTML;

		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

document.addEventListener("keypress", function(event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key){
	switch(key){
		case "w":
		    var =new Audio("https://www.chosic.com/download-audio/?t=24452");
		    tom1.play();
		    break;

		case "a":
		    =new Audio("https://www.chosic.com/download-audio/?t=24814");
		    tom1.play();
		    break;


		case "s":
		    var=new Audio("https://www.chosic.com/download-audio/?t=25453");
		    tom1.play();
		    break;

		case "d":
		    var =new Audio("https://www.chosic.com/download-audio/?t=24284");
		    tom1.play();
		    break;

		case "j":
		    var=new Audio("https://www.chosic.com/download-audio/?t=25545");
		    tom1.play();
		    break;

		case "k":
		    var =new Audio("https://www.chosic.com/download-audio/?t=25117");
		    tom1.play();
		    break;

		case "l":
		    var =new Audio("https://www.chosic.com/download-audio/?t=24290");
		    tom1.play();
		    break;

		default:console.log(key);
	}
}

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("."+currentKey);
	  activeButton.classList.add("pressed");
	  setTimeout(function(){
	  	activeButton.classList.remove("pressed");
	  },100);
}