//bird sound and wave sounds
var waves = document.getElementById("sound-waves");
waves.volume = 0.1;

bird = new Audio("sound/bird.mp3");
bird.volume = 0.2;
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
document.getElementById("flying2").style.bottom = 100 * (scrollAmount - 7) + "vh";
}

// events
document.onscroll = function(){
	"use strict";
   document.body.onscroll =  scrollEffects;

//koncept header effekt
//if(scrollAmount>1.7){
//	document.getElementById("historien").style.letterSpacing = 4+"px";
//}
	
if(scrollAmount>16.6){
	document.getElementById("lastwords").style.transform = "scale("+1.4+")";
	document.getElementById("lastwords").style.opacity = 1;
}
if(scrollAmount>13.7){
	document.getElementById("leftanimation").style.marginLeft = 42+"px";
	document.getElementById("leftanimation").style.opacity = 1;
}
	if(scrollAmount>14.7){
	document.getElementById("rightanimation").style.marginRight = 42+"px";
	document.getElementById("rightanimation").style.opacity = 1;
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
