class Chain{
    constructor(body1,body2 ,xOffSet){
        var option={
          bodyA: body1,
          bodyB: body2,
          stiffness: 1,
          length:  200,
          pointB: {x:xOffSet ,y:0}
        } 
        this.xOffSet= xOffSet
        this.chain= Constraint.create(option)
        World.add(world, this.chain);
    }
    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        strokeWeight(10);
        stroke("red");
        line(pointA.x,pointA.y ,pointB.x+this.xOffSet,pointB.y);
    }
}