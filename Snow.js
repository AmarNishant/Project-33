class Snow {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.x = x;
        this.y = y;
        this.image = loadImage('snow4.webp');
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.postion;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }
}