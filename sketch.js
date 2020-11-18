const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground


var particle = []
var plinko = []
var division = []
var divisionHeight = 300

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, 795, width, 10)

  // for loop for division 
  for(var k= 0; k <= width; k = k + 80 ){
    division.push(new Divivsion(k, height-divisionHeight/2, 10, divisionHeight))
  }
 
  // for loop for 1st line of plinko
  for(var j= 40; j<= width; j=j+50 ){
    plinko.push(new Plinko(j, 75))
  }
  // for loop for 2nd line of plinko
  for(var j= 15; j<= width - 10; j=j+50 ){
    plinko.push(new Plinko(j, 175))
  }
  // for loop for 3rd line of plinko
  for(var j= 45; j<= width; j=j+50 ){
    plinko.push(new Plinko(j, 275))
  }
  // for loop for 4th line of plinko
  for(var j= 15; j<= width - 10; j=j+50 ){
    plinko.push(new Plinko(j, 375))
  }

}



function draw() {
  background(0); 
  Engine.update(engine) 
  ground.display()
  if(frameCount% 60 === 0){
    particle.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  for(var k = 0; k < division.length; k++){
    division[k].display();
  }
  for(var j= 0; j < plinko.length; j++ ){
    plinko[j].display()
  }

  
  for(var p= 0; p < particle.length; p++){
    particle[p].display()
  }
  drawSprites();
}