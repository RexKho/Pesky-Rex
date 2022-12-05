import MovingObject from "./moving_object";
import Poop from "./poop";
import Rex from "./rex";


const background = new Image();
background.src="src/images/background.png";

export default class Game {
    constructor(canvas) {
        this.keys = [];
        this.canvas = canvas;
        this.width = canvas.width;
        this.height = canvas.height;
       
        this.rex = new Rex(canvas);
    }
    
    gamestart(ctx){
        
        let that = this;
        window.addEventListener("keydown", function(e){
            that.keys[e.key] = true;
            console.log(e.key);
        })

        window.addEventListener("keyup", function(e){
            that.keys[e.key] = false;
            // console.log(that.keys);
        })
       
        // this.rex.draw(ctx);
        ctx.drawImage(background, 0, 0, 800, 500);
        this.animate(ctx);
        // maybe sounds will go here too;
        
    }

    // movePLayer(){
    //     if (this.keys[]) {
    //         this.rex.direction([0,-10], conn);
    //     }
    // }

    animate(ctx){
        
        let that = this;
        ctx.clearRect(0,0,800,600);
        ctx.drawImage(background, 0, 0, 800, 500);
        this.rex.draw(ctx);
        that.bindKeys(ctx);
        // this.movePLayer();
        // console.log(this.rex);
        
       
        
        setTimeout(()=> {
            requestAnimationFrame(this.animate.bind(this, ctx));

        },144);
       
    }

    bindKeys(ctx){
        let conn = ctx;
        let that = this;
        key('w', function(){console.log('hi')});
        key('w', function(){that.rex.direction([0,-.1], conn)});
        key('s', function(){that.rex.direction([0,.1], conn)});
        key('a', function(){that.rex.direction([-.1,0], conn)});
        key('d', function(){that.rex.direction([.1,0], conn)});
    }



 

}

