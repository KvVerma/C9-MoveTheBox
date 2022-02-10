var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(40, 40, 10, 10);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 3;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 3;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y -= 2;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 2;
  }



 drawSprites();
}




