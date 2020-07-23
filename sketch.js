var helicopterIMG, helicopterSprite, packageSprite,packageIMG,bottomSprite,lsideSprite,rsideSprite;
var packageBody,ground, bottom, lside, rside;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite=createSprite(400,650,200,18)
	bottomSprite.shapeColor=color("red")

	lsideSprite=createSprite(500,610,18,100)
	lsideSprite.shapeColor=color("red")

	rsideSprite=createSprite(300,610,18,100)
	rsideSprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);

	bottom= Bodies.rectangle(400,650,200,18,{isStatic:true})
	console.log(width)
	World.add(world,bottom)

	lside= Bodies.rectangle(500,610,18,100,{isStatic:true})
	World.add(world,lside)	

	rside= Bodies.rectangle(300,610,18,100,{isStatic:true})
	World.add(world,rside)	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
	packageBody.restitution=0.8
  }
}



