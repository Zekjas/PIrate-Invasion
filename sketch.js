const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls = [];
//var r = [1, 3, 5]
//console.log(r[0]);
//r.push(10)
//console.log(r);
//r.pop;
//console.log(r);


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonBall = new CannonBall(cannon.x, cannon.y);
//crear un objeto para la bala de cañón
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  cannonBall.display();





}

function keyPressed() {
  if (keyCode == DOWN_ARROW){
    var cannonBall = new cannonBall(cannon.x, cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, index){
  ball.display()
  ball.animate()
  if (balls.body.position.x >= width ||) {
  //Si era esto?
  }
}




function keyReleased() {
 //utilizar  keydown para llamar a la función shoot
 
}
