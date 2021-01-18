const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
 var b0x
var box
var equake
var myengine,myworld;
var ball;
function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;
b0x=new bibi(420,30,50,60)
box=new bibi(400,50,50,40)
  equake=new quake(400,400,800,50)

}

function draw() {
  background(0); 
  Engine.update(myengine)
b0x.display()
box.display()
equake.display()
  
  
}