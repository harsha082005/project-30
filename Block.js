class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        if(this.body.speed<3){
           push();
           translate(this.body.position.x, this.body.position.y);
           rotate(angle);
           rectMode(CENTER);
           rect(0, 0, this.width, this.height);
           pop();
          }  else{
            push();
            World.remove(world,this.body);
            pop();
          }
      }
}
