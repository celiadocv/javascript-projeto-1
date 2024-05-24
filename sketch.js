function setup() {
  createCanvas(1820, 1820);
  background("violet");
}

function draw() {
  if(mouseIsPressed){
      fill("purple");
      circle(mouseX,mouseY,10,10)
  }
}
