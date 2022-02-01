class Controls {
  constructor(game, bullet) {
    this.game = game;
    this.player = this.game.player;
  }

  move() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          if (this.player.x < 475) {
            this.player.x += 25;
          }
          break;
        case "ArrowLeft":
          if (this.player.x > 25) {
            this.player.x -= 25;
          }
          break;
        case 'Space':
          this.game.createBullet();
          break;
      }
    });
  }
}
