
class Game {
    constructor() {
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.car = null;
      this.obstacles = [];
      this.background = new Image();
      this.frames = 0;
      this.x = 0;
      this.y = 0;
      this.canvasWidth = 500;
      this.canvasHeight = 700;
      this.intervalId = null;
    }
  }
  const game = new Game()

  class Player {
    costructor(){
      this.xHeight = 50;
      this.yWidth = 20;
      this.width = 230;
      this.height = 650;
      this.img = new Image();
      this.canvas;
    }
    draw(){
      game.ctx.fillStyle = 'black';
      game.ctx.fillRect(230, 650, 20, 50);
    }
    
  }
  

  const player1 = new Player;


player1.draw()

  