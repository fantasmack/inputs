/*$(document).ready(function(){
	//console.log("Estoy listo");
	$("#myButton").on("click", function(){
		alert("Me dieron click con jquery");
	})
});

$("#myButton").css("wrap");


*Este evento, se dispara cuando se termino de cargar la página

$(window).on("load", function(){
	console.log("Ya me cargue");
});*/


// $(document).ready(function(){
//     $("#myButton").on("click",function(){
// 	    $("#wrap").css({
// 	    	"background-color": "#000000",
// 	    	"whidth": 500,
// 	    	"height": 800
// 	    });
//     });
// });

$(document).ready(function(){
   	$("#ancho").on("keyup", function(){
    		var ancho = $("#ancho").val();
    		$("#wrap").css("width", ancho);
    		
 	
	}); 
	$("#alto").on("keyup",function(){
    		var alto = $("#alto").val();
    		$("#wrap").css("height", alto);
    		
	}); 

	$("#color").on("keyup",function(){
    		var color = $("#color").val();
    		$("#wrap").css("color", color);
    		
	}); 
});



