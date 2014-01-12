function rect(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

//var r	= new rect(100,20,10,10)
var rects = [
	new rect(0, 0, 400, 20),
	new rect(0, 0, 20, 300),
	new rect(0, 280, 400, 20),
	new rect(380, 0, 20, 300),
	new rect(20, 100, 80, 20),
	new rect(100, 120, 20, 20),
	new rect(120, 140, 20, 20),
	new rect(140, 160, 80, 20),
	new rect(260, 180, 20, 20),
	new rect(280, 200, 20, 20),
	new rect(300, 220, 20, 20)
]

function player(rx, ry, rw, rh, vx, vy) {
	this.r = new rect(rx, ry, rw, rh);
	this.x = vx;
	this.y = vy;
	this.isOnFloor=false;
}

var p = new player(60, 60, 20, 20, 0, 0);

var keyUp=false
var keyLeft = false
var keyRight = false

document.onkeydown = function (e) {
	document.test.eingabe1.value = e.which
	if (e.which == 87)
		keyUp = true;
	if (e.which == 65)
		keyLeft = true;
	if (e.which == 68)
		keyRight = true;
}

document.onkeyup = function (e) {
	document.test.eingabe1.value = e.which
	if (e.which == 87)
		keyUp = false;
	if (e.which == 65)
		keyLeft = false;
	if (e.which == 68)
		keyRight = false;
}

function speedX() {
	p.x = 0
	if (keyLeft == true)
		p.x = -3
	if (keyRight ==	true)
		p.x = 3
}

function speedY() {
	p.y = false
	if (keyUp == true)
		p.y = true
	
}

// Return an object that supports at most "copies" simultaneous playbacks
function createSound(path, copies) {
	var elems = [], index = 0
	for (var i = 0; i < 16; i++) elems.push(new Audio(path))
	return {
		play: function () {
			if (window.chrome) elems[index].load()
			elems[index].play()
			index = (index + 1) % copies
		}
	}
}

// Want to be able to play at most 3 different copies of 'jump.wav' at once
var jumpSound = createSound('hop.mp3', 3)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// First Function
function onStart() {
	printout('onStart');
	vx = 0
	vy = 0
	loadRes();
	buildLevel();
	startLoop();
}

function startLoop () {
	//printout('startLoop');
	// Set up the game loop
	window.onload = function () {
		setInterval(function () {
			onUpdate()
		}, 1000 / 60)
	}
}

function loadRes () {
	//printout('loadRes');
}

function buildLevel () {
	//printout('buildLevel');
}

// General Update
function onUpdate () {
//	printout('onUpdate');
	updateGame();
	updateView ();
}

// Update Game
function updateGame () {
	//printout('updateGame');
	
	checkKey ();
	movePlayer ();
	checkColl ();
}
//
function checkKey () {
	//printout('checkKey');
	speedX();
	//speedY();
}
// Returns true iff a and b overlap
function overlapTest(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x &&
		 a.y < b.y + b.h && a.y + a.h > b.y
}

function movePlayer() {
	//printout('movePlayer');
	p.y += 1;
	var expectedY = p.r.y + p.y
	document.test.eingabe2.value = expectedY
	// Move rectangle along x axis
	for (var i = 0; i < rects.length; i++) {
		var c = { x: p.r.x + p.x, y: p.r.y, w: p.r.w, h: p.r.h }
		if (overlapTest(c, rects[i])) {
			if (p.x < 0) p.x = rects[i].x + rects[i].w - p.r.x
			else if (p.x > 0) p.x = rects[i].x - p.r.x - p.r.w
		}
	}
	p.r.x += p.x;
	// Move rectangle along y axis
	for (var i = 0; i < rects.length; i++) {
		var c = { x: p.r.x, y: p.r.y + p.y, w: p.r.w, h: p.r.h }
		if (overlapTest(c, rects[i])) {
			if (p.y < 0) p.y = rects[i].y + rects[i].h - p.r.y
			else if (p.y > 0) p.y = rects[i].y - p.r.y - p.r.h
		}
	}
	p.r.y += p.y
	p.isOnFloor = (expectedY > p.r.y)
	if (expectedY != p.r.y)		p.y = 0
	if (p.isOnFloor && keyUp) {
		p.y += -13;
		jumpSound.play()
	}
	document.test.eingabe2.value = expectedY 
	document.test.eingabe3.value = p.r.y
	document.test.eingabe4.value = p.isOnFloor
	//console.log(vx);
}

function checkColl () {
	//printout('checkColl');
}

// Update View
function updateView() {
	//printout('updateView');
	drawLevel ();
	drawEnemy ()
}
//
function drawLevel () {
	//printout('drawLevel');
	var c = document.getElementById('screen').getContext('2d')
	// Draw background
	c.fillStyle = '#EEE'
	c.fillRect(0, 0, c.canvas.width, c.canvas.height)
	// Draw levels
	c.fillStyle = '#BBB'
	for (var i = 0; i < rects.length; i++) {
		var r = rects[i]
		c.fillRect(r.x, r.y, r.w, r.h)
	}
	//draw player
	c.fillStyle = '#C00'
	c.fillRect(p.r.x, p.r.y, p.r.w, p.r.h)
}

function drawEnemy () {
	//printout('drawEnemy');
}
function printout(s)
{
	console.log(s);
	//console.log("console.log");
	//document.test.eingabe3.value = vx

}
onStart();
//updateView();
//onUpdate();
