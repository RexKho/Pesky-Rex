export default class Poop {
  constructor(ctx, pos){
    this.ctx = ctx;
    this.x = pos[0];
    this.y = pos[1];
    this.width = 50;
    this.height = 50;
    this.poopSprite = new Image();
    this.poopSprite.src = "src/images/poop.png";
  }
  
  draw(){
    this.ctx.drawImage(this.poopSprite, this.x-28, this.y, this.width, this.height);
  }
  
}

