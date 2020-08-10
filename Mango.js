class Mango{
    constructor(x,y,imageWidth,imageHeight,diameter){
        var mango_options = {
            isStatic : true,
            restitution : 0,
            friction : 1
        }

        this.body = Bodies.circle(x,y,diameter,mango_options);
        this.radius = diameter/2;
        this.width = imageWidth;
        this.height = imageHeight;
        this.image = loadImage("Sprites/mango.png");

        World.add(world, this.body);
    }

    display(){
        imageMode(CENTER);
        var mango_pos = this.body.position;
        var mango = image(this.image, mango_pos.x, mango_pos.y, this.width, this.height);
    }
}