class Pendulum2 {  
    constructor(x, y, radius){
        var options = {
            restitution:0.8,
            density:1.0,
            isStatic : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill(255, 0, 255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x-50, this.body.position.y, this.radius, this.radius);
   }
}
