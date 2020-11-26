class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        this.image=loadImage('dustbingreen.png');       
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        
        
       
       
        imageMode(CENTER);
        fill("green")
        image(this.image,0,0,this.width,this.height);
        pop();
        
        
    }
};