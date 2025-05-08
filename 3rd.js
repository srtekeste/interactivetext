var poetry = ["create", "connect", "communicate", "discover", "share"];

var index = 0;

var font; 

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#edebeb');
  let fixedTextSize = 48;
  textSize(fixedTextSize);
  textFont("prestige-elite-std");

  let staticText = "Offering personalized opportunities to ";
  let dynamicWord = poetry[index];

  let fullSentence = staticText + dynamicWord;
  let sentenceWidth = textWidth(fullSentence);
  let centerX = (width - sentenceWidth) / 2;
  let y = height / 3 - 30;

  fill(0);
  text(staticText, centerX, y);

  fill('#af8ec2');
  let staticWidth = textWidth(staticText);
  text(dynamicWord, centerX + staticWidth, y);
}
 
function keyPressed() {
  index = index + 1;

  if (index == poetry.length) {
    index = 0;
  }
}