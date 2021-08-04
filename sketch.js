function preload(){
  backgroundImg = loadImage("snow2.jpg");
  snowImg = loadImage("snow4.webp");
  backgroundImg1 = loadImage("snow3.jpg");
  childrenImg = loadImage("children.jpg");
}



function setup() {
  createCanvas(1350,650);
  
 
}

function draw() {
  background(backgroundImg); 
  spawnSnow();
  if(keyCode === DOWN_ARROW){
    background(backgroundImg1);
   
  }
  if(keyCode === RIGHT_ARROW){
    background(backgroundImg);
  }
  if(keyCode === LEFT_ARROW){
    children.hide
  }
 
  
  drawSprites();
}
function spawnSnow() {
  //write code here to spawn the clouds
  
    if (frameCount % 40 === 0) {
    var snow = createSprite(600,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(100,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(200,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(300,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(400,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(500,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(700,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(800,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(900,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(1000,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(1200,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(1100,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
  if (frameCount % 40 === 0) {
    var snow = createSprite(1300,120,40,10);
    snow.y = Math.round(random(80,120));
    snow.addImage(snowImg);
    snow.scale = 0.1;
    snow.velocityY= 4;
  }
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    children = createSprite(500,480,20,40);
    children.addImage(childrenImg);
    children.scale = 0.7;
  }
}

