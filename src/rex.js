import Poop from "./poop";

export default class Rex {
    constructor(ctx){
        this.pos = [25,470];
        this.vel = [0,0];
        // this.x = this.pos[0],
        // this.y = this.pos[1],
        this.width = 32;
        this.height = 32;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 10;
        this.moving = false;

        this.ctx = ctx;
        // this.pooped = new Set([]);

        // let dogImg = {
        //     x: this.pos[0],
        //     y: this.pos[1],
        //     width: 32,
        //     height: 32,
        //     frameX: 0,
        //     frameY: 0,
        //     speed: 9,
        //     moving: false
        // }

        // const dogSprite = new Image();
        // dogSprite.src = "src/images/dogwalking.png";

    }

    // drawSprite(ctx, sX, sY, sW, sH, dX, dY, dW, dH){
    //     const dogSprite = new Image();
    //     dogSprite.src = "src/images/dogwalking.png";
    //     ctx.drawImage(dogSprite, sX, sY, sW, sH, dX, dY, dW, dH);
    // }

    drawPoop(ctx){
        let that = this;
        let poop = new Poop(ctx, that.pos);
        // this.pooped.add(that.pos);
        // console.log(this.pooped);
        
        poop.draw(ctx, that.width, that.height, that.pos[0], that.pos[1], that.width, that.height);
    }

    drawPreviousPoop(ctx, loc){
        let that = this;
        let poop = new Poop(ctx, that.pos);
        poop.draw(ctx, that.width, that.height, loc[0], loc[1], that.width, that.height);
    }

    draw(ctx){
        // console.log(this);
        // ctx.beginPath();
        // ctx.rect(this.pos[0], this.pos[1], 20, 10);
        
        // ctx.fillStyle = this.color;
        // ctx.stroke();
        let that = this;
        
        const dogSprite = new Image();
        dogSprite.src = "src/images/dogwalking.png";
        ctx.drawImage(dogSprite, 0, 0, that.width, that.height, 
            that.pos[0], that.pos[1], that.width, that.height);
            // console.log(that.pooped[1])
           
    }

    direction(arr, ctx){
        this.vel[0] += arr[0];
        this.vel[1] += arr[1];
        // console.log(this.pos);
        this.move(ctx);
        this.vel[0] = 0;
        this.vel[1] = 0;
        // console.log(this.vel);
    }

    move(ctx){
        
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }
}