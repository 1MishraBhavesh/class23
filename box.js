class Box{
   constructor(x,y,width,height){
    var options ={
        'restitution':0.8,   // bounciness
        'friction':0.3,     // opposing force to applied force
        'density':0.1       // thickness of the solid (close packing of atoms)
    } 
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width=width;
    this.height=height;   
    World.add(world,this.body);
   }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();//capture the new setting
        translate(pos.x, pos.y);//translate the entire game
        rotate(angle); //rotate it
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();//capture the old setting
    }

};