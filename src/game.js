// import { keyFor } from "core-js/fn/symbol";
import MovingObject from "./moving_object";

export default class Game {
    constructor(canvas) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.rex =new MovingObject({pos: [25,470], vel: [10,0], color: "red"});
    }
   
    gamestart(ctx){
      
        this.animate(ctx);
        // this.rex.draw(ctx);
        // maybe sounds will go here too;
        
    }

    animate(ctx){
        
        ctx.clearRect(0,0,800,600);
        const background = new Image();
        background.src="src/images/background.png";
        let that = this;
        let animate = function(){
            ctx.drawImage(background, 0, 0, 800, 500);
            that.rex.draw(ctx);
        
        }
        requestAnimationFrame(animate);
    }

 

}

