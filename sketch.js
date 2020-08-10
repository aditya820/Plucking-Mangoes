
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var stone;
var tree;
var kid;
var sun;
var cloud;
var basket;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function preload() {
   boy_img = loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1600, 700);

    engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,690,1600,20);
	tree = new Tree(1200,400,600,600);
	
	stone = new Stone(420,550,75,75);

	mango1 = new Mango(1025,350,75,75,50,);
	mango2 = new Mango(1425,325,75,75,50);
	mango3 = new Mango(1225,320,75,75,50);
	mango4 = new Mango(1250,175,75,75,50);
	mango5 = new Mango(1075,275,75,75,50);
	mango6 = new Mango(1325,275,75,75,50);
	mango7 = new Mango(1175,225,50,50,50);
	mango8 = new Mango(1100,175,50,50,50);
	mango9 = new Mango(975,300,50,50,50);
	mango10 = new Mango(1125,350,50,50,50);
	mango11 =  new Mango(1300,350,50,50,50);
	mango12 = new Mango(1400,250,50,50,50);

	slingshot = new SlingShot(stone.body,{x : 420, y : 520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  kid = image(boy_img, 375, 450, 250, 300);

  ground.display();
  tree.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  slingshot.display(); 

  /*detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);*/

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body, {x : 420, y : 550});
	  slingshot.attach(stone.body);
	}
}

/*function detectCollision(lstone,lmango){
	var mangoBodyPosition = lmango.body.positon;
	var stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	
	if(distance<=lmango.r + lstone.r){
      Matter.Body.setStatic(lmango.body,false);
	}
}*/


