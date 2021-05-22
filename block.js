class Block{
    constructor(x, y, width, height) {
        var options = 
        {
          restitution : 0.8,
          friction : 0
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png");
        World.add(world, this.body);
        this.Visiblity = 255;

      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        //if(this.body.speed < 3)
        //{
          //this.body.display();
        //}
        //else {
          //World.remove(world, this.body)
       // }
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        this.Visiblity = this.Visiblity - 5;
        tint(255, this.Visibility)
        image(this.image,pos.x, pos.y,);
        imageMode(CENTER);
        
        pop();
      }
}
