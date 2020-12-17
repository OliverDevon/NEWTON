
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;

var roof;

var ch1,ch2,ch3,ch4,ch5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(280,500 ,30);
	bob2 = new Bob(340,500 ,30);
	bob3 = new Bob(400,500 ,30);
	bob4 = new Bob(460,500 ,30);
	bob5 = new Bob(520,500 ,30);

	roof = new Roof();
	
	Engine.run(engine);
    ch1 = new Chain(bob1.body,roof.body,-120);
    ch2= new Chain(bob2.body,roof.body,-60);
    ch3 = new Chain(bob3.body,roof.body,0);
    ch4 = new Chain(bob4.body,roof.body,60);
    ch5 = new Chain(bob5.body,roof.body,120);
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  ch1.display();
  ch2.display();
  ch3.display();
  ch4.display();  
  ch5.display();
}
function keyPressed(){
  if(keyCode == 32){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:100});
  }
}


