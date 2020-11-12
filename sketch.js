const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bin1,bin2,bin3;
var ob1;
var ground;
function setup() {
	createCanvas(1500, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bin2 = new Bin(960,510,20,160);
	bin1 = new Bin(1240,510,20,160);
	bin3= new Bin(1100,60,300,20);
	ob1=new Ppaper(200,400,40);
	ground=new GGround(width/2,620,width,20);
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  
  bin1.display();
  bin2.display();
  bin3.display();
  ob1.display();
  ground.display();
  drawSprites();
 
}



