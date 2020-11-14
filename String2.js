class Chain2{
    constructor(bodyA, bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.3,
            length:200
        }

        this.chain=Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(4);
        stroke("white")
        line(pointA.x-50, pointA.y, pointB.x-50, pointB.y);
    }
}