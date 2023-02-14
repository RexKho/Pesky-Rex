<img width="640" alt="Screen Shot 2022-12-08 at 10 26 49 AM" src="https://user-images.githubusercontent.com/98872331/206536305-e61a7498-967a-4da4-b31b-6eff2c8c8608.png">

In this game you will play as Rex, the neighborhood pesky dog. You find enjoyment in excrementing in as much lawns as possible without getting caught. Your arch nemeis Spot is the HOA president and has decided to deply drones to catch you. Use your W A S D key to move Rex around the map. Press the space bar to start pooping once you find a good spot.  Run away from the drones who are out looking for you. 

# Functionality & MVPS
With this Pesky Rex simulator, users will be able to:
- Start, pause, and play again!
- Use the move and poop action
- Avoid the buzzing drones
- Drones will get faster each run
- Click the instructions and about Modal for more instructions

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/98872331/218621715-813e5acc-8cfe-49dd-a247-0e6b2e0fa53a.gif)

# Technologies, Libraries, APIS
This project utilizes the below:
- Canvas API to render the game board
- Webpack 
- NPM 

## Significant Code

### Hit Box Calculation 
```javascript
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
```
