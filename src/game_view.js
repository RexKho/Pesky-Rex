import Game from "./game";

function GameView(canvas) {
    this.game = new Game(canvas);
    this.ctx = canvas.getContext('2d');
}