var keyUp
var keyLeft
var keyRight
var vx
var vy

document.onkeydown = function (e) {
    document.test.eingabe.value = e.which
    if (e.which == 87)
        keyUp = true;
    if (e.which == 65)
        keyLeft = true;
    if (e.which == 68)
        keyRight = true;

    document.test.up.value = keyUp
    document.test.left.value = keyLeft
    document.test.right.value = keyRight
}

document.onkeyup = function (e) {
    document.test.eingabe.value = e.which
    if (e.which == 87)
        keyUp = false;
    if (e.which == 65)
        keyLeft = false;
    if (e.which == 68)
        keyRight = false;

    document.test.up.value = keyUp
    document.test.left.value = keyLeft
    document.test.right.value = keyRight
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