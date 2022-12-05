import Poop from "./poop";
import Rex from "./rex";

export default class Game {
    constructor(canvas, ctx) {
        this.background = new Image();
        this.background.src="src/images/background.png";
        this.keys = [];
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.rex = new Rex(canvas, ctx);
        this.pooped = new Set([]);
    }
    
    gamestart(){
        this.animate();
    }
    
    addPoop(){
        let poop = new Poop(this.ctx, this.rex.pos);
        this.pooped.add(poop);
        console.log(this.pooped);
        // console.log(this.poopLocations)
    }
    
    animate(){
        this.ctx.clearRect(0,0,800,500);
        // this.background.onload = () => {
            //     this.ctx.drawImage(this.background, 0, 0, 800, 500)
            // };
            this.ctx.drawImage(this.background, 0, 0, 800, 500);
            this.rex.draw();
            for (let poop of this.pooped) {
                poop.draw()
            }
            
            // setTimeout(()=> {
                requestAnimationFrame(this.animate.bind(this));
                // },144);
    }
}
        // import MovingObject from "./moving_object";
        
        // import Rex from "./rex";
        
        
        // const background = new Image();
        // background.src="src/images/background.png";
        
        // export default class Game {
        //     constructor(canvas) {
        //         this.keys = [];
        //         this.canvas = canvas;
        //         this.width = canvas.width;
        //         this.height = canvas.height;
               
        //         this.rex = new Rex(canvas);
        
        //         this.poopedLocations = [];
        //     }
            
        //     gamestart(ctx){
                
        //         let that = this;
        //         // window.addEventListener("keydown", function(e){
        //         //     that.keys[e.key] = true;
        //         //     console.log(e.key);
        //         // })
        
        //         // window.addEventListener("keyup", function(e){
        //         //     that.keys[e.key] = false;
        //         //     // console.log(that.keys);
        //         // })
               
        //         // this.rex.draw(ctx);
        //         ctx.drawImage(background, 0, 0, 800, 500);
        //         this.animate(ctx);
        //         // maybe sounds will go here too;
                
        //     }
        
        //     // movePLayer(){
        //     //     if (this.keys[]) {
        //     //         this.rex.direction([0,-10], conn);
        //     //     }
        //     // }
        
        //     poopLocations(ctx){
        //         let conn = ctx;
        //         let that = this;
        //         this.poopedLocations.forEach( function(ele) {
        //             that.rex.drawPreviousPoop(conn, ele);
        //         })
        //         // if (that.rex.pooped.length > 0) {
        //         //     for(let i =0; i < that.rex.pooped.length; i++){
        //         //         const poopSprite = new Image();
        //         //         poopSprite.src = "src/images/poop.png";
        //         //         conn.drawImage(poopSprite, 0, 0, that.width, that.height, 
        //         //             that.pos[0], that.pos[1], that.width, that.height);
                            
        //         //     }
        //         // }
        //     }
        
        //     animate(ctx){
                
        //         let that = this;
        //         ctx.clearRect(0,0,800,600);
        //         ctx.drawImage(background, 0, 0, 800, 500);
        //         this.poopLocations(ctx);
        //         this.rex.draw(ctx);
                
        //         that.bindKeys(ctx);
        //         // this.movePLayer();
        //         // console.log(this.rex);
                
               
                
        //         setTimeout(()=> {
        //             requestAnimationFrame(this.animate.bind(this, ctx));
        
        //         },144);
               
        //     }
        
        //     bindKeys(ctx){
        //         let conn = ctx;
        //         let that = this;
        //         // key('w', function(){console.log(that.rex.poopLocations)});
        //         key('w', function(){that.rex.direction([0,-1], conn)});
        //         key('s', function(){that.rex.direction([0,1], conn)});
        //         key('a', function(){that.rex.direction([-1,0], conn)});
        //         key('d', function(){that.rex.direction([1,0], conn)});
        //         key('space', function(){
        //             that.rex.drawPoop(conn);
        //             let newarr = new Array();
        //             newarr.push(that.rex.pos[0]);
        //             newarr.push(that.rex.pos[1]);
        //             that.poopedLocations.push(newarr);
        //             console.log(that.poopedLocations);
        //         });
        //     }
        
        
        
         
        
        // }
