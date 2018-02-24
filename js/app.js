var button = document.getElementById("myButton");
//Guia de sintaxis

// object.addEventListenner("eventName", function(){

// });

button.addEventListener("click", function(){
	//alert("click");
	document.body.style.backgroundColor = "red";
});

var valores = [25, 11, 195, 73, 84, 69];
var min = Math.min.apply (null, valores);
console.log(min);