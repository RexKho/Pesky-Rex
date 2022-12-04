import MovingObject from "./moving_object";
import Poop from "./poop";
import Rex from "./rex";


const background = new Image();
background.src="src/images/background.png";

export default class Game {
    constructor(canvas) {
        
        this.width = canvas.width;
        this.height = canvas.height;
       
        this.rex = new Rex(canvas);
    }
    
    gamestart(ctx){
        console.log(this.rex);
    
        // this.rex.draw(ctx);
        ctx.drawImage(background, 0, 0, 800, 500);
        this.animate(ctx);
        // maybe sounds will go here too;
        
    }

    animate(ctx){
        
        let that = this;
        ctx.clearRect(0,0,800,600);
        ctx.drawImage(background, 0, 0, 800, 500);
        this.rex.draw(ctx);
        that.bindKeys(ctx);
        // console.log(this.rex);
        
       
        // that.rex.draw(ctx);
        setTimeout(()=> {
            requestAnimationFrame(this.animate.bind(this, ctx));

        }, 2007);
       
    }

    bindKeys(ctx){
        let conn = ctx;
        let that = this;
        key('w', function(){console.log('hi')});
        key('w', function(){that.rex.direction([0,-10], conn)});
        key('s', function(){that.rex.direction([0,10], conn)});
        key('a', function(){that.rex.direction([-10,0], conn)});
        key('d', function(){that.rex.direction([10,0], conn)});
    }

 

}

