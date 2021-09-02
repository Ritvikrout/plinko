class Plinko {
    constructor(x, y) {
    this.r = 20
    var options = {
        isStatic : true
    }

    this.body = Bodies.circle(x, y, this.r/2, options);
    World.add(world, this.body)

    }

    display() {
        var circlePos = this.body.position
        ellipse(circlePos.x, circlePos.y, this.r)  

    }
}