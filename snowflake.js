class Snow{
    constructor(x,y){
        var options = {
            'restitution' : 2,
            'friction' : 7.9,
        }
    this.image= loadImage("snow4.webp");
    this.body = Bodies.circle(x,y,40,40,20,options);

    this.radius = 45;
    this.lifetime=190;
    World.add (world,this.body);
    }
    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
        }
        }
 
        display(){
        push();
 var pos = this.body.position;


     imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop();
    }
} 