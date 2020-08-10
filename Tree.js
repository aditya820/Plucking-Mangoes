class Tree{
    constructor(x,y,width,height){
      this.image = loadImage("Sprites/tree.png");
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}