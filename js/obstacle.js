class Obstacle {
  constructor(game) {
    // Math.random() * (max - min) + min;
    // Math.floor(Math.random() * max);
    this.game = game;
    this.height = 30;
    this.width = 40;
    this.x = Math.floor(Math.random() * 450);
    this.y = 0;
    this.speed = Math.floor(Math.random() * 3 + 1);
    this.ufoImg = new Image ()
  }
  

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  
  checkCollision(bullet) {
    return !(
      this.bottom() < bullet.top() ||
      this.top() > bullet.bottom() ||
      this.right() < bullet.left() ||
      this.left() > bullet.right()
    );
  }

  drawObstacle() {
    // this.game.ctx.fillStyle = "black";

    // this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ufoImg.src = "./images/ets.png";

    this.game.ctx.drawImage(this.ufoImg, this.x, this.y, this.width, this.height);
 
}
 
  move() {
    this.y += this.speed;
  }
  loosingPoinst(i) {
    if (this.y > 700) {
      this.game.life -= 1;
      this.game.obstacles.splice(i, 1);
      console.log(this.game.life);
    } else if (this.game.life == 0) {
      this.game.gameOver();
      console.log("game Over");
    }
  }
}
