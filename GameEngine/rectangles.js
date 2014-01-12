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

var p = new player(60, 60, 20, 20,0,0);

function draw() {
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
/*
// Set up the game loop
window.onload = function () {
    setInterval(function () {
        //draw()
    }, 1000 / 60)
}
*/
console.log("huhu")