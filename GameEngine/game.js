function rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

//var r = new rect(100,20,10,10)
var rects = [
    new rect(0, 0, 400, 20),
    new rect(0, 0, 20, 300),
    new rect(0, 280, 400, 20),
    new rect(380, 0, 20, 300),
    new rect(20, 100, 80, 20),
    new rect(100, 120, 20, 20),
    new rect(120, 140, 20, 20),
    new rect(140, 160, 80, 20),
    new rect(260, 160, 120, 20)
]

function player(rx, ry, rw, rh, vx, vy) {
    this.r = new rect(rx, ry, rw, rh);
    this.x = vx;
    this.y = vy;

}

var p = new player(60, 60, 20, 20, 0, 0);

var keyUp
var keyLeft
var keyRight
var vx
var vy

document.onkeydown = function (e) {
  //  document.test.eingabe.value = e.which
    if (e.which == 87)
        keyUp = true;
    if (e.which == 65)
        keyLeft = true;
    if (e.which == 68)
        keyRight = true;

}

document.onkeyup = function (e) {
//    document.test.eingabe.value = e.which
    if (e.which == 87)
        keyUp = false;
    if (e.which == 65)
        keyLeft = false;
    if (e.which == 68)
        keyRight = false;

}

function speedX() {
    vx = 0

    if (keyLeft == true)
        vx = -1
    if (keyRight == true)
        vx = 1
}

function speedY() {
    vy = 0

    if (keyUp == true)
        vy = 1
}

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
	printout('onUpdate');
    document.test.eingabe1.value = p.r.x
    document.test.eingabe2.value = vx
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
}

function movePlayer () {
    //printout('movePlayer');
    p.r.x += vx;
}

function checkColl () {
	//printout('checkColl');
}

// Update View
function updateView () {
	//printout('updateView');
	
	drawLevel ();
	drawEnemy ()
}
//
function drawLevel () {
    //printout('drawLevel');
    var c = document.getElementById('screen').getContext('2d')
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
    //console.log(s);
    document.test.eingabe3.value = vx

}

onStart ();