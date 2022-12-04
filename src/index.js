import Game from "./game";
// import MovingObject from "./moving_object";

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');

let game = new Game(canvas);
game.gamestart(ctx);




// setInterval(() => start.rex.move(ctx), 100);


