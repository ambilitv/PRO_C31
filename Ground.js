/*class Ground{
    constructor(){
        var qualities={
            isStatic: true,
        }
        this.body = Bodies.rectangle(width/2, 795, width, 10, qualities)
        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        fill("green")
        rect(this.body.position.x, this.body.position.y, width, 10)
    }
}*/
class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
