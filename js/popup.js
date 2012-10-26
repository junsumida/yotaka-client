/*global $,chrome */
$(document).ready(function(){
	$("#record").click(function(){
		chrome.tabs.executeScript(null, {file: "./js/jquery.js"}, function(){
      chrome.tabs.executeScript(null, {file: "http://yotaka.sjun.me/socket.io/socket.io.js"}, function(){
        
        chrome.tabs.executeScript(null, {file: "content_script.js"});
      });
		});
	});
});
