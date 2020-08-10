class Ground{
    constructor(x,y,width,height){
      var ground_options ={
        isStatic :true
      }
      this.body = Bodies.rectangle(x,y,width,height,ground_options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }

    display(){
      rectMode(CENTER);
      var ground_pos = this.body.position;
      fill("lightgreen");
      rect(ground_pos.x, ground_pos.y, this.width, this.height);
    }
}