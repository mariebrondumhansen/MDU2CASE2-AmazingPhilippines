//bird sound and wave sounds
var waves = document.getElementById("sound-waves");
waves.volume = 0.1;

bird = new Audio("sound/bird.mp3");
window.setInterval(function () {
    bird.play();
}, Math.random()+4 * 5000);



// scroll
var yWindow = window.innerHeight;
var yScroll = window.scrollY;
var scrollAmount;
function scrollEffects(){
	"use strict";
yScroll = window.scrollY;
scrollAmount = yScroll / yWindow;
console.log(scrollAmount);
	
// fly through text box	
document.getElementById("flying1").style.bottom = 100 * (scrollAmount - 1) + "vh";
}

// events
document.onscroll = function(){
	"use strict";
   document.body.onscroll =  scrollEffects;

//koncept header effekt
if(scrollAmount>0.7){
	document.getElementById("koncept").style.letterSpacing = 4+"px";
}

};


// show hide id
function hide(id){
	document.getElementById(id).style.display = "none";
}
function display(id,display){
	document.getElementById(id).style.display = display;
}

// round info boxes
document.getElementById("leftround").onclick = function(){
	openRoundInfoBox("leftround");
	closeRoundInfoBox("rightround");
	hide("kbh");
	hide("lbs");
	display("lbh","inline");
	display("kbs","inline");
};
document.getElementById("rightround").onclick = function(){
	openRoundInfoBox("rightround");
	closeRoundInfoBox("leftround");
	hide("lbh");
	hide("kbs");
	display("kbh","inline");
	display("lbs","inline");
};
function openRoundInfoBox(id){
	document.getElementById(id).style.borderBottomRightRadius = "5%";	
	document.getElementById(id).style.borderBottomLeftRadius = "5%";
	document.getElementById(id).style.borderTopLeftRadius = "5%";
	document.getElementById(id).style.borderTopRightRadius = "5%";
	document.getElementById(id).style.height = "55vh";
	document.getElementById(id).style.width = "55%";
	document.getElementById(id).style.width = "55%";
}
function closeRoundInfoBox(id){
	document.getElementById(id).style.borderBottomRightRadius = "100%";
	document.getElementById(id).style.borderBottomLeftRadius = "100%";
	document.getElementById(id).style.borderTopLeftRadius = "100%";
	document.getElementById(id).style.borderTopRightRadius = "100%";
	document.getElementById(id).style.width = "250px";
	document.getElementById(id).style.height = "250px";
}
