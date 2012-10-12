/*global $ */
console.log("external execution!");
var html = document.getElementsByTagName("html");
console.log(typeof html);
console.log(html[0]);
console.log(html[0].toString());
console.log(html[0].innerHTML);
console.log(typeof $);
$(document).mousemove(function(e){
	window.mouseX = e.pageX;
	window.mosueY = e.pageY;
	console.log(e.pageX);
});
/*
function showMouseOffset(){
	console.log("X:"+window.mouseX+" Y:"+window.mouseY);
	setTimeout(showMouseOffset, 1000);
}

showMouseOffset();
*/
