const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;

var ice=[];
var g=100;

function preload(){
  bg=loadImage("snow3.jpg");
 
  
}

function setup() {
  createCanvas(1400,900);

  engine=Engine.create();
  world= engine.world;

 if(frameCount % 10 === 0){
  for(var i=0; i<g; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }

}

function draw() {
background(bg)
Engine.update(engine);

for(var i = 0;i < g; i++){
  ice[i].display();
  ice[i].changePosition();
  }    

  drawSprites();
}