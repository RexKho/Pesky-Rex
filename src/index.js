import Game from "./game";
// import MovingObject from "./moving_object";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

let game = new Game(canvas, ctx);

const startDiv = document.getElementById("start");
startDiv.addEventListener('click', function(){
    game.gamestart();
    
})

const endDiv = document.getElementById("endLost");
endDiv.addEventListener('click', function(){
    game.gamestart();
    
})
const endDiv2 = document.getElementById("endWon");
endDiv2.addEventListener('click', function(){
    game.gamestart();
    
})

function keyDown(e) {
    e.preventDefault();
    if (e.key === 'w') {
        game.rex.move([0,-10]);
    }
    if (e.key === 'a') {
        game.rex.move([-10,0]);
    }
    if (e.key === 's') {
        game.rex.move([0, 10]);
    }
    if (e.key === 'd') {
        game.rex.move([10,0]);
    }
    if (e.keyCode === 32) {
        game.addPoop();
    }
}


document.addEventListener("keydown", keyDown);


// import Game from "./game";
// // import MovingObject from "./moving_object";

// const canvas = document.getElementById("canvas1");
// const ctx = canvas.getContext('2d');



// let game = new Game(canvas);
// game.gamestart(ctx);




// setInterval(() => start.rex.move(ctx), 100);