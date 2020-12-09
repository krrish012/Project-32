const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, backgroundImg;
var score=0;
var bg = "bg.png";

function preload(){
  getTime();
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  

  //set1 for first stand
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  block17 = new Block(637,180,30,40);
  block18 = new Block(667,180,30,40);
  block19 = new Block(697,180,30,40);
  block20 = new Block(727,180,30,40);
  block21 = new Block(757,180,30,40);
 
  //level two
  block22 = new Block(667,150,30,40);
  block23 = new Block(697,150,30,40);
  block24 = new Block(727,150,30,40);
  
  //top
  block25 = new Block(697,120,30,40);

  
  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  if(backgroundImg)
    background(backgroundImg);
 
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  //p1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    //console.log(responseJSON);
    var dt = responseJSON.datetime;
    var hr = dt.slice(11,13);
    //console.log(hr);

    if(hr>=06 && hr<= 19) {
        bg = "bg.png";
    } else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}