

export default class Poop {
  constructor(ctx, pos){
    this.pos = pos;
  }

  draw(ctx){
    // console.log(this);
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 20, 10);
    ctx.fillStyle = "brown";
    ctx.stroke();
}



}