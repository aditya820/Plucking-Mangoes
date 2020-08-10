class SlingShot{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.004,
            length: 10
        }

        this.pointB = PointB
        this.bodyA = bodyA;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
      this.chain.bodyA = null;
    }

    attach(){
        this.chain.bodyA = this.bodyA;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        var rope = line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}