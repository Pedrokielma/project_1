class Player {
  constructor(game) {
    this.game = game;
    this.height = 150;
    this.width = 150;
    this.x = 230;
    this.y = 550;
    this.playerImg = new Image();
  }

  goRight() {
    this.width += 25;
  }

  goLeft() {
    this.width -= 25;
  }

  draw() {
    
    this.playerImg.src = "./images/uncleSam.png";

    this.game.ctx.drawImage(this.playerImg, this.x, this.y, this.width, this.height);
  }
}
