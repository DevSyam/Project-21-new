var bullet, wall, thickness;
var speed, weight;
var deformation;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 30, 15);
  
  thickness = random(50,83);
  wall = createSprite(1200,200,thickness,height/2);
  
  speed = random(223,321);
  bullet.velocityX = speed;
  
  weight = random(30,52);
  deformation = 0;
}

function draw() {
  background(0); 
  
  if (wall.x - bullet.x <= wall.width/2 + bullet.width/2) {
    bullet.x = 1159
    deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness);
    if (deformation < 10) {
      wall.shapeColor = "green";
    }
    
    if (deformation > 10){
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}
