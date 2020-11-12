class GGround {
    constructor(x,y,width,height){
      
      this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.width=width;
      this.height=height;

      World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push();   
        fill("yellow")
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        translate(pos.x,pos.y);
        pop();

    }
}