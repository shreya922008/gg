var button
var question 
var playing

function preload(){
  bg1=loadImage("code 1.jpg")
  bg2=loadImage("code 2.jpg")
  bg3=loadImage("code.jpg")
  bg4=loadImage("code3.jpg")
  bg5=loadImage("code4.jpg")
  bg6=loadImage("hh 1.jpg")
  bg7=loadImage("tt.jpg")
}

function setup() {
//background(bg4)
  createCanvas(800,400);
  question=new Question()
}

function draw() {

  background(bg4);  
  question.display()
  playing.play()
//button.display()
  drawSprites();
}