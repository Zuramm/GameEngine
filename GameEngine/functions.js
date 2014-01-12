// First Function
function onStart () {
	printout('onStart');
	
	startLoop ();
	loadRes ();
	buildLevel ()
}
//
function startLoop () {
	printout('startLoop');
}

function loadRes () {
	printout('loadRes');
}

function buildLevel () {
	printout('buildLevel');
}

// General Update
function onUpdate () {
	printout('onUpdate');
	
	updateGame ();
	updateView ();
}

// Update Game
function updateGame () {
	printout('updateGame');
	
	checkKey ();
	movePlayer ();
	checkColl ();
}
//
function checkKey () {
	printout('checkKey');
}

function movePlayer () {
	printout('movePlayer');
}

function checkColl () {
	printout('checkColl');
}

// Update View
function updateView () {
	printout('updateView');
	
	drawLevel ();
	drawPlayer ();
	drawEnemy ()
}
//
function drawLevel () {
	printout('drawLevel');
}

function drawPlayer () {
	printout('drawPlayer');
}

function drawEnemy () {
	printout('drawEnemy');
}

function printout(s)
{
	document.write(s);
	document.write('</br>');
}

printout ("Out");