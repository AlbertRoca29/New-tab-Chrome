
window.onload = function() {
	document.getElementById("button").onclick=saludar;
    changeBackground();
}

function saludar(){
	var Img = document.getElementById("hImg");
	if (Img.style.display=="none"){
		Img.style.display="inline";
		DayOfTheWeek();
	}
	else{
		Img.style.display="none";
	}
}

function DayOfTheWeek(){
	var Now = new Date();
	var Circle = document.getElementById("circle");
	var wend = document.getElementById("weekend");

	Circle.style.display='none';
	wend.style.display='none';

	var CurrentDay = Now.getDay();

	if (CurrentDay%6!=0) {
		Circle.style.display='inline';
		Circle.style.marginLeft=98*(CurrentDay-1)+"px";
	}
	else{
		wend.style.display='inline';

	}
}


function changeBackground(){
	document.body.style.backgroundImage= "linear-gradient(rgba(0, 0, 0, 0.18),rgba(0, 0, 0, 0.18)) , url(img/fons"+Math.round(Math.random()*7)+".jpg)";
}


var it=0;
// setInterval(function() {
	// color = "rgba("+Math.floor(Math.random() * 180)+","+Math.floor(Math.random() * 180)+","+Math.floor(Math.random() * 180)+","+0.25+")";
	// document.getElementById( 'ALL' ).style.backgroundColor = color;
// }, 1000);


