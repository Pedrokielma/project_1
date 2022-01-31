class Controls {
    constructor(game) {
      this.game = game;
      this.player = this.game.player;
    }
  
    move() {
      window.addEventListener("keydown", (e) => {
        switch (e.code) {
          case "ArrowRight":
            if (this.player.x < 475) {
              console.log(this.player.x)
              this.player.x += 25;
              console.log("move")
            } else {
              console.log("not")
            }
            break;
          case "ArrowLeft":
            if (this.player.x > 25) {
              this.player.x -= 25;
            }
            break;
        }
      });
    }
  }