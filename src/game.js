import Drone from "./drone";
import Poop from "./poop";
import Rex from "./rex";

export default class Game {
    constructor(canvas, ctx) {
        this.background = new Image();
        this.background.src="src/images/background.png";
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.rex = new Rex(canvas, ctx);
        this.pooped = new Set([]);
        this.winYet = false;
        this.drone1 = new Drone(canvas, ctx, [735,85]);
        this.drone2 = new Drone(canvas, ctx, [450,270]);
        this.drone3 = new Drone(canvas, ctx, [300,55]);
        this.drone4 = new Drone(canvas, ctx, [711,320]);
        this.paused = false;
    
    }

    togglePause(){
        if(!this.paused){
            this.paused = true;
        } else if (this.paused){
            this.paused = false;
        }
    }

    

    dist(obj1, obj2) {
        return Math.sqrt((obj1.pos[0] - obj2.pos[0])**2 + (obj1.pos[1] - obj2.pos[1])**2);
    }

    collided(obj1, obj2){
        if(((obj1.width + obj2.width)/2) > this.dist(obj1, obj2)){
            return true;
        }
        if(((obj1.height + obj2.height)/2) > this.dist(obj1, obj2)){
            return true;
        }
        return false;
    }

    reset(canvas,ctx){
        this.rex = new Rex(canvas, ctx);
        this.pooped = new Set([]);
        this.drone1 = new Drone(canvas, ctx, [735,85]);
        this.drone2 = new Drone(canvas, ctx, [450,270]);
        this.drone3 = new Drone(canvas, ctx, [300,55]);
        this.drone4 = new Drone(canvas, ctx, [711,320]);
        this.winYet = false;
    }
    
    gamestart(){
        this.reset(this.canvas, this.ctx);
        this.paused = false;
        let startDiv = document.getElementById("start");
        let gameCanvas = document.getElementById("canvas1");
        let endLost = document.getElementById("endLost");
        let endWon = document.getElementById("endWon");
        startDiv.style.display = "none";
        gameCanvas.style.display = "block";
        endLost.style.display = "none";
        endWon.style.display = "none";
        this.animate();
    }

    endgame() {
        
        let startDiv = document.getElementById("start");
        let gameCanvas = document.getElementById("canvas1");
        let endLost = document.getElementById("endLost");
        let endWon = document.getElementById("endWon");
        startDiv.style.display = "none";
        gameCanvas.style.display = "none";

        if(this.winYet === false){
            endLost.style.display = "block";
            endWon.style.display = "none";
        } else {
            endWon.style.display = "block";
            endLost.style.display = "none";
        }
        this.paused = true;
        this.winYet = false;
    }


    
    addPoop(){
        let poop = new Poop(this.ctx, this.rex.pos);
        this.pooped.add(poop);
    }

    gamechecker(){
        let count = [false, false, false, false, false, false];
        this.pooped.forEach(ele => {
            if (ele.x >= 114 && ele.x <= 261){
                if (ele.y >= 225 && ele.y <= 415){
                    count[0] = true;
                }
            }
            if (ele.x >= 266 && ele.x <= 604){
                if (ele.y >= 225 && ele.y <= 415){
                    count[1] = true;
                }
            }
            if (ele.x >= 607 && ele.x <= 798){
                if (ele.y >= 225 && ele.y <= 415){
                    count[2] = true;
                }
            }
            if (ele.x >= 113 && ele.x <= 365){
                if (ele.y >= 3 && ele.y <= 154){
                    count[3] = true;
                }
            }
            if (ele.x >= 368 && ele.x <= 634){
                if (ele.y >= 0 && ele.y <= 154){
                    count[4] = true;
                }
            }
            if (ele.x >= 636 && ele.x <= 799){
                if (ele.y >= 0 && ele.y <= 154){
                    count[5] = true;
                }
            }
        })

        
        let that = this;
        if (count.every(ele => ele === true)){
            that.winYet = true;
        }
        
        
    }

    movedrones(){
        this.drone1.draw();
        this.drone1.move();
        this.drone2.draw();
        this.drone2.move();
        this.drone3.draw();
        this.drone3.move();
        this.drone4.draw();
        this.drone4.move();
    }

    rexCollideWithDrones(){
        if (this.collided(this.rex, this.drone1)){
            return true;
        }
        if (this.collided(this.rex, this.drone2)){
            return true;
        }
        if (this.collided(this.rex, this.drone3)){
            return true;
        }
        if (this.collided(this.rex, this.drone4)){
            return true;
        }
        return false;
    }
    
    animate(){
        if (!this.paused){
            this.ctx.clearRect(0,0,800,500);
            this.ctx.drawImage(this.background, 0, 0, 800, 500);
            this.rex.draw();
            this.gamechecker();
            this.movedrones();

            for (let poop of this.pooped) {
                poop.draw()
            }

            if(this.winYet === true){
                this.endgame();
            }
          
            if(this.rexCollideWithDrones() === true){
                this.endgame();
            }
        }
        requestAnimationFrame(this.animate.bind(this));
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
