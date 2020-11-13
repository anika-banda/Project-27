
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject3,bobObject4,bobObject5;
var bobObject1body,roofObjbody;
var bobDiameter;
var rope1Obj;
var roofObj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObj = new roof(300,200,500,40);
	bobObject1 = new bob(200,450,40);
	bobObject2 = new bob(200,230,40);
	bobObject3 = new bob(200,240,40);
	bobObject4 = new bob(200,230,40);
	bobObject5 = new bob(200,230,40);
	rope1Obj = new rope(bobObject1.body,roofObj.body,-bobDiameter*2,0)



function draw() {
  rectMode(CENTER);
  background(0);


  roofObj.display();
  rope1Obj.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
  drawSprites();
 
}


}
