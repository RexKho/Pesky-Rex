export default class Rex {
    constructor(canvas, ctx){
        this.pos = [25,470];
      
        this.width = 32;
        this.height = 32;
   
        this.canvas = canvas;
        this.ctx = ctx;
        this.dogSprite = new Image();
        this.dogSprite.src = "src/images/dogwalking.png";
        }
    
                
        draw(){
            this.ctx.drawImage(this.dogSprite, 0, 0, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
        }
                    
        move(arr){
            this.pos[0] += arr[0];
            if (this.pos[0] < 0){
                this.pos[0] = 0;
            }
            if (this.pos[0] > 780){
                this.pos[0] = 760;
            }

            this.pos[1] += arr[1];
            if (this.pos[1] < 0){
                this.pos[1] = 0;
            }
            if (this.pos[1] > 480){
                this.pos[1] = 460;
            }
                        
        }
}
                  