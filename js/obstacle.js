class Obstacle {
  constructor(game) {
    // Math.random() * (max - min) + min;
    // Math.floor(Math.random() * max);
    this.game = game;
    this.height = 20;
    this.width = 20;
    this.x = Math.floor(Math.random() * 450);
    this.y = 0;
    this.speed = Math.floor(Math.random() * 5 + 1);
  }
  drawObstacle() {
    this.game.ctx.fillStyle = "black";

    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.y += this.speed;
  }
  loosingPoinst() {
    if (this.y == 700) {
      this.game.life -= 1;
      console.log(this.game.life)
    } else if (this.game.life == 0) {
        this.game.gameOver()
        console.log("game Over")
    }
  }
 
}
