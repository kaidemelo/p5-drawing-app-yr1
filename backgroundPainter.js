function BackgroundPainter() {
  this.icon = "assets/backgroundPainter.jpg";
  this.name = "backgroundPainter";

  this.draw = function () {
    noStroke();
    if (mouseIsPressed) {
      ellipse(mouseX, mouseY, width * 3, height * 3);
    }
  };
}
