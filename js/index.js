window.onload = () => {
    document.getElementById('start').onclick = () => {
      startGame();
    };
  
    function startGame() {
      const game = new Game();
      game.start();
    }
  };