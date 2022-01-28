let video;
function setup() {
  createCanvas(windowWidth, windowHeight,);

    capture = createCapture(VIDEO);
    capture.size(windowWidth, windowHeight)

}



function draw() {
  image(capture, 0,0, windowWidth, windowHeight)
  tint((frameCount*10)%255,mouseY,0, 20)
}
