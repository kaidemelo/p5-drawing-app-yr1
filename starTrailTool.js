function StarTrailTool() {
  this.name = "starTrailTool";
  this.icon = "assets/starTrail.jpg";

  function star(x, y, radiusA, radiusB, nPoints) {
    var angle = TWO_PI / nPoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sX = x + cos(a) * radiusB;
      var sY = y + sin(a) * radiusB;
      vertex(sX, sY);
      sX = x + cos(a + halfAngle) * radiusA;
      sY = y + sin(a + halfAngle) * radiusA;
      vertex(sX, sY);
    }
    endShape();
  }
  this.draw = function () {
    noStroke();
    if (mouseIsPressed) {
      star(mouseX + 10, mouseY + 10, 5, 11.6, 5);
    }
  };
}
