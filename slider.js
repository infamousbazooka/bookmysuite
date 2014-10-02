function slider(){
	document.getElementById('slides').src="rest/1.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update1 = window.setInterval(slider2,5000);
}
function slider1(){
	window.clearInterval(update10);
	document.getElementById('slides').src="rest/1.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update1 = window.setInterval(slider2,5000);
}
function slider2(){
	window.clearInterval(update1);
	document.getElementById('slides').src="rest/2.jpg";
	document.getElementById('slidetag').src="rest/7.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update2 = window.setInterval(slider3,5000);
}
function slider3(){
	window.clearInterval(update2);
	document.getElementById('slides').src="rest/3.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update3 = window.setInterval(slider4,5000);
}
function slider4(){
	window.clearInterval(update3);
	document.getElementById('slides').src="rest/4.jpg";
	document.getElementById('slidetag').src="rest/7.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update4 = window.setInterval(slider5,5000);
}
function slider5(){
	window.clearInterval(update4);
	document.getElementById('slides').src="rest/5.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update5 = window.setInterval(slider6,5000);
}
function slider6(){
	window.clearInterval(update5);
	document.getElementById('slides').src="rest/6.jpg";
	document.getElementById('slidetag').src="rest/7.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update6 = window.setInterval(slider7,5000);
}
function slider7(){
	window.clearInterval(update6);
	document.getElementById('slides').src="rest/7.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update7 = window.setInterval(slider8,5000);
}
function slider8(){
	window.clearInterval(update7);
	document.getElementById('slides').src="rest/8.jpg";
	document.getElementById('slidetag').src="rest/7.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update8 = window.setInterval(slider9,5000);
}
function slider9(){
	window.clearInterval(update8);
	document.getElementById('slides').src="rest/9.jpg";
	document.getElementById('slidetag').src="rest/1.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update9 = window.setInterval(slider10,5000);
}
function slider10(){
	window.clearInterval(update9);
	document.getElementById('slides').src="rest/10.jpg";
	document.getElementById('slidetag').src="rest/7.png";
	document.getElementById('slidelink').href="hotoffers.html";
	update10 = window.setInterval(slider1,5000);
}
window.onload=window.slider;