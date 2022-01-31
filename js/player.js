
class Player {
    constructor(game) {
      this.game = game;
      this.height = 50;
      this.width = 20;
      this.x = 230;
      this.y = 650;
      this.img = new Image();
    }

    goRight() {
      this.width += 25;
    }

    goLeft() {
      this.width -= 25;
    }
  
    draw() {
      
      this.game.ctx.fillStyle = "black";
      
      this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }