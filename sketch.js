var car,wall;
var speed,weight;

var deformation;


function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
  deformation = 0.5*weight*speed*speed/22500;

  car=createSprite(50,200,50,50);
  car.velocityX = speed/8;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor = 0;

  console.log(deformation);
}

function draw() {
  background(255, 145, 99);  

  if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2 && car.y-wall.y<wall.height/2+car.height/2 && wall.y-car.y<wall.height/2+car.height/2)
  {
    car.velocityX = 0;
    if(deformation<100) car.shapeColor = rgb(0,255,0);
    if(deformation>100&&deformation<180) car.shapeColor = rgb(230,230,0);
    if(deformation>180) car.shapeColor = rgb(255,0,0);
    }
  else car.shapeColor = 0;
  drawSprites();
}