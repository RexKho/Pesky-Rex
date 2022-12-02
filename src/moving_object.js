export default class MovingObject {
    constructor(hash){
        this.pos = hash.pos;
        this.vel = hash.vel;
        this.color = hash.color;

    }


    draw(ctx){
        ctx.beginPath();
        ctx.rect(this.pos[0], this.pos[1], 10, 10);
        ctx.fillStyle = this.color;
        ctx.stroke();
    }

    direction(arr){
        this.vel[0] += arr[0];
        this.vel[1] += arr[1];
        
    }

    move(ctx){
        
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.draw(ctx);
    }

}