function rect(x, y, w, h) {
    return { x: x, y: y, w: w, h: h }
}

function printout(s) {
    console.log(s);
    //document.test.eingabe3.value = vx

}
// truev wenn kollision
function isColliding(p, b) {
    var ret = false;
    if ((r1.x + r1.w) > r2.x)
        test1 = true;
    else
        test1 = false;
    if ((r1.y + r1.h) > r2.y)
        test2 = true;
    else
        test2 = false;
    if ((r2.x + r2.w) > r1.x)
        test3 = true;
    else
        test3 = false;
    if ((r2.y + r2.h) > r1.y)
        test4 = true;
    else
        test4 = false;

    printout("overlaps: " + test1 + ", " + test2 + ", " + test3 + ", " + test4);
    ret = test1 && test2 && test3 && test4
    return ret;
}
function overlapTest(a, b) {
  return 	a.x < b.x + b.w && 
			a.x + a.w > b.x &&
			a.y < b.y + b.h && 
			a.y + a.h > b.y
}
//onStart ();
var r1 = new rect(0, 0, 10, 10);
var r2 = new rect(100, 100, 10, 10);
var r3 = new rect(5, 5, 10, 10);
//printout(isColliding(r1, r2));
//printout(isColliding(r1, r3));

printout(isColliding(new rect(0, 0, 10, 10), new rect(20, 20, 10, 10)));
printout(isColliding(new rect(0, 0, 10, 10), new rect(5, 5, 10, 10)));
printout(overlapTest(new rect(0, 0, 10, 10), new rect(20, 20, 10, 10)));
printout(overlapTest(new rect(0, 0, 10, 10), new rect(5, 5, 10, 10)));
