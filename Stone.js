class Stone{
    constructor(x,y,width,height){
    var stone_options ={
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 1.2
    };

    this.body = Bodies.rectangle(x,y,width,height,stone_options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Sprites/stone.png");

    World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        var stone_pos = this.body.position;
        image(this.image, stone_pos.x, stone_pos.y, this.width, this.height);
    }
}