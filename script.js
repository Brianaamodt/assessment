
var line = 0;
$(document).ready(function(){
	$("#generator").on("click", function(){
		line++;
		$(".container").append("<div id='l"+ line +"'><span>Line #" + line + "</span><button id='color'>Change Color</button><button id='remove'>Remove</button></div>");
		$(".container").on("click", "#color", function(){
			$(this).siblings('span').toggleClass('green');
		});
		$(".container").on("click", "#remove", function(){
			$(this).parent().remove();
		});
	});
});