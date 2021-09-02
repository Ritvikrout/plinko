const Body = Matter.Body
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Render = Matter.Render

var dividers = []
var plinkos = []
var particle = []
var dividerHeight = 300
var canvasWidth = 800
var canvasHeight = 800
var world, engine;
var ground;

function setup() {
  
  engine = Engine.create();
  world = engine.world;

  createCanvas(canvasWidth, canvasHeight);
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(canvasWidth/2, 795, canvasWidth, 10, options)
  World.add(world, ground)

  
   

   
    for (var i = 0; i <= canvasWidth; i = i + 80) {

        dividers.push(new Divider(i, canvasHeight - dividerHeight/2 , 10, dividerHeight))
    }

    for (var j = 0; j <= canvasWidth; j = j + 40) {
      plinkos.push(new Plinko(j, 60))
    }

    for (var j = 20; j <= canvasWidth; j = j + 40) {
      plinkos.push(new Plinko(j, 120))
    }

    for (var j = 0; j <= canvasWidth; j = j + 40) {
      plinkos.push(new Plinko(j, 180))
    }

    for (var j = 20; j <= canvasWidth; j = j + 40) {
      plinkos.push(new Plinko(j, 240))
    }

}

function draw() {
  background(0,0,0);
  Engine.update(engine)  
if (frameCount % 60 === 0) {

    particle.push(new Particle(random(300, 500)))
  }

  rectMode(CENTER)

  rect(canvasWidth/2, 795, canvasWidth, 10)

  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  for (var k = 0; k < dividers.length; k++) {
    dividers[k].display();
  }

  for (var m = 0; m < particle.length; m++) {
    particle[m].display();
  }
}