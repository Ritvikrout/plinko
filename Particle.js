class Particle {
    constructor (x) {
        this.r = 20;
        var options = {
            "restitution" : 0.3,
            "friction" : 0.9,
            "density" : 1.0
        }
     this.body = Bodies.circle(x, -20, this.r/2, options);
     World.add(world, this.body)
    }

    display () {
        var pos = this.body.position
        var rand1 = Math.round(random(10, 255))
        var rand2 = Math.round(random(10, 255))
        var rand3 = Math.round(random(10, 255))
    push();
    fill(rand1, rand2, rand3)
    translate(pos.x, pos.y)
    ellipse(0, 0, this.r)
    pop();
    }
}