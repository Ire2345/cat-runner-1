
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	cat1= new Cat(400,200,30,30)
	ground1 = new Ground(600,400,1200,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
cat1.display();
ground1.display();


  drawSprites();
 
}




















