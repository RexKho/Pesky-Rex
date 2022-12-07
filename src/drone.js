export default class Drone { 
    constructor(canvas, ctx, pos){
        this.pos = pos;
        this.width = 64;
        this.height = 64;
        this.canvas = canvas;
        this.ctx = ctx;
        this.droneSprite = new Image();
        this.droneSprite.src = "src/images/dronev2.png";
    }

    draw(){
        this.ctx.drawImage(this.droneSprite, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    }

    move(){
        this.pos[0] += this.randomNum();
        this.pos[1] += this.randomNum();
        if (this.pos[0] > 800) {
            this.pos[0] = 800;
        }
        if (this.pos[0] < 0) {
            this.pos[0] = 0;
        }
        if (this.pos[1] > 500) {
            this.pos[1] = 500;
        }
        if (this.pos[1] < 0) {
            this.pos[1] = 0;
        }
    


    }

    randomNum() {
        return Math.ceil(Math.random() * 4) * (Math.round(Math.random()) ? 1 : -1);
      }
    

}