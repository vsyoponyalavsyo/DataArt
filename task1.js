let ar = [];
let N = 15;

function setup() {
  createCanvas(400, 400);
  noStroke();
  colorMode(RGB, 255);
  background("white");

  let millisecond = millis();
  text('Milliseconds \nrunning: \n' + millisecond, 20, 40)
  fill(247, 73, 25)

  for (let i = 0; i < N; i = i + 1) {
    ar.push(2*PI*random());
  }
}



function draw() {
  let c = color(166, 247, 25)
  fill(c)
  rect(210,0,width/2,height)
  fill(247, 73, 25)
  rect(125,215,216,130)
  let x, y;
  let value = saturation(c)


  for (let i = 0; i < N; i = i + 1) {
    fill(value);
    x = 265 + frameCount*sin(ar[i]);
    y = 250 + frameCount*cos(ar[i]);
    square(x, y, 35);


  }
}
