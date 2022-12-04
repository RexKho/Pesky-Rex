export default class MovingObject {
    constructor(hash){
        this.pos = hash.pos;
        this.vel = hash.vel;
        this.color = hash.color;
        

    }


    draw(ctx){
        // console.log(this);
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], 20, 10);
        
        ctx.fillStyle = this.color;
        ctx.stroke();
    }

    direction(arr, ctx){
        this.vel[0] += arr[0];
        this.vel[1] += arr[1];
        this.move(ctx);
        this.vel[0] = 0;
        this.vel[1] = 0;
    }

    move(ctx){
        
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }

}