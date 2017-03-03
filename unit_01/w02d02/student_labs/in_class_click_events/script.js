window.onload = function() {


var firstButton = document.getElementById('firstButton');
var secondButton = document.getElementById('secondButton');
var thirdButton = document.getElementById('thirdButton');


firstButton.addEventListener('click', function() {
	alert('You have clicked button one!');
	});


secondButton.addEventListener('click', function() {
	var paragraph = document.createElement("P");                      
	var info = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
	paragraph.appendChild(info);                                         
	document.getElementById("Information").appendChild(paragraph);

});

thirdButton.addEventListener('click', function() {
	var divsBaby = document.getElementById("Information");
	while (divsBaby.hasChildNodes()) {
		divsBaby.removeChild(divsBaby.firstChild);
	}

});


}