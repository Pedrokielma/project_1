class Bullet {
  constructor(game) {
    this.game = game;
    this.height = 10;
    this.width = 2;
    this.x = this.game.player.x + 100;
    this.y = 650;
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

  moveBullet() {
    this.y -= 6;
  }

  drawBullet() {
    this.game.ctx.fillStyle = "black";

    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
   

  }
}
