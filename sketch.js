
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(300,50,400,20)
	b1 = new Ball(100,400)
	b2 = new Ball(200,400)
	b3 = new Ball(300,400)
	b4 = new Ball(400,400)
	b5 = new Ball(500,400)
	chain1 = new Chain(b1.body, {x:100, y:60})
	chain2 = new Chain(b2.body, {x:200, y:60})
	chain3 = new Chain(b3.body, {x:300, y:60})
	chain4 = new Chain(b4.body, {x:400, y:60})
	chain5 = new Chain(b5.body, {x:500, y:60})
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(220);
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

 chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();

}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(b1.body, b1.body.position, {x:-50, y:-50})
}

}

