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
    // console.log(this.pos)
    this.ctx.drawImage(this.poopSprite, this.x, this.y, this.width, this.height);
  }
  
}

// export default class Poop {
//   constructor(ctx, pos){
//     this.pos = pos;
//   }

//   draw(ctx, width, height, pos0, pos1, width2, height2){
//     // console.log(this);
//     const poopSprite = new Image();
//     poopSprite.src = "src/images/poop.png";
//     ctx.drawImage(poopSprite, 0, 0, width, height, 
//         pos0, pos1, width2, height2);
      

// }

// //code below was in rex class draw poop
//         // const poopSprite = new Image();
//         // poopSprite.src = "src/images/poop.png";
//         // ctx.drawImage(poopSprite, 0, 0, that.width, that.height, 
//         //     that.pos[0], that.pos[1], that.width, that.height);

// }