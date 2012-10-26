/*global $, io */
var startTime = (new Date()).getTime();
console.log(startTime);
var uid = 0;

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
function showMouseOffset(){
  console.log(html[0].innerHTML);
	setTimeout(showMouseOffset, 200);
}

showMouseOffset();

var socket = io.connect('http://yotaka.sjun.me/');
socket.on('news', function (data) {
   console.log(data);
   socket.emit('hoge', { msg: 'mogemoge' });
});
