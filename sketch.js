var movingRect, fixedRect;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(800,200,100,50); 
  movingRect = createSprite(400, 200, 50, 25);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
}

function draw() {
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(mrect.x - rect.x);

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
    { 
      movingRect.shapeColor = "red"; 
      fixedRect.shapeColor = "red";
    } 
   else 
    {
      movingRect.shapeColor = "green"; 
      fixedRect.shapeColor = "green"; 
    }
  background(255,255,255);  
  drawSprites();
}