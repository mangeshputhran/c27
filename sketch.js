
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	roof=new Roof(800,700/4,1600/7,20)
	bob1=new BOB(760,700/4+500,15)
	bob2=new BOB(800,700/4+500,15)
	bob3=new BOB(840,700/4+500,15)
	bob4=new BOB(840,700/4+500,15)
	bob5=new BOB(880,700/4+500,15)
rope1=new Rope(bob1.body,roof.body,-60,0)
rope2=new Rope(bob2.body,roof.body,-30,0)
rope3=new Rope(bob3.body,roof.body,0,0)
rope4=new Rope (bob4.body,roof.body,30,0)
rope5=new Rope(bob5.body,roof.body,60,0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
rope1.display()
bob2.display();
rope2.display();
bob3.display();
rope3.display();
bob4.display();
rope4.display()
bob5.display()
rope5.display();

drawSprites();
 
}



