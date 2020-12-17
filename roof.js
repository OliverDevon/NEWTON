class Roof{
    constructor(){
        this.body= Bodies.rectangle(400,100 ,300,20, {isStatic:true});
    World.add(world, this.body);
    }
display(){
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y ,300,20);
}
}