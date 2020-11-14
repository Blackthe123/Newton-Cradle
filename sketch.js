
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var holder, p1, chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	holder = new Holder(600, 150, 1200, 20);
	p1 = new Pendulum(800, 250, 20, 20);
	p2 = new Pendulum2(600, 250, 20, 20);
	chain= new Chain(p1.body, holder.body);
	chain2 = new Chain2(p2.body, holder.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  holder.display();
  p1.display();
  chain.display();
  p2.display();
  chain2.display();

  drawSprites();
 
}



