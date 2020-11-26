
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Ball(250,610,50,50);
	
	ground = new Ground(600,height,12000,20);

	//box=createSprite(1000,625,10,120);
	//box.shapeColor="white";

	//box2=createSprite(1200,625,10,120);
	//box2.shapeColor="white";

	//box3=createSprite(1100,680,190,10);
	//box3.shapeColor="white";

	box3=new Dustbin(1100,630,100,120);
	

	
	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  paper.display();
  //box.display();
  //box2.display();
  box3.display();
  ground.display();
  
  
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:500});
	}
}


