var cw = 800;
var ch = 600;

var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

cvs.width = 800;
cvs.height = 600;

var image = new Image();
var clippingRegion = {x: 400, y: 200, r:50};
image.src = 'img/img.jpg';
image.onload = function () {

	initCanvas();
}

function initCanvas() {

	draw(image);
}

function setClippingRegion(clippingRegion) {

	ctx.beginPath();
	ctx.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2, false);
	ctx.clip();
}

function draw(image) {

	ctx.clearRect(0, 0, cvs.width, cvs.height);

	ctx.save();
	setClippingRegion(clippingRegion);
	ctx.drawImage(image, 0, 0);
	ctx.restore();
}
