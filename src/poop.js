

export default class Poop {
  constructor(ctx, pos){
    this.pos = pos;
  }

  draw(ctx, width, height, pos0, pos1, width2, height2){
    // console.log(this);
    const poopSprite = new Image();
    poopSprite.src = "src/images/poop.png";
    ctx.drawImage(poopSprite, 0, 0, width, height, 
        pos0, pos1, width2, height2);
      

}

//code below was in rex class draw poop
        // const poopSprite = new Image();
        // poopSprite.src = "src/images/poop.png";
        // ctx.drawImage(poopSprite, 0, 0, that.width, that.height, 
        //     that.pos[0], that.pos[1], that.width, that.height);

}