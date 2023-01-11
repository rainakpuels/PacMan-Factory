  var direction = 0;
  // This array holds all the pacmen
  const pacMen = [];
  function setToRandom(scale) {
      return {
          x: Math.random() * scale,
          y: Math.random() * scale
      }
  }
  // Factory to make a PacMan  at a random position with random velocity
  function makePac() {
      // returns an object with values scaled {x: 33, y: 21}
      let velocity = setToRandom(10);
      let position = setToRandom(200);
      // Add image to div id = game
      let game = document.getElementById('game');
      let newimg = document.createElement('img');
      newimg.style.position = 'absolute';
      newimg.src = "./images/PacMan1.png";
      newimg.width = 100;
      // set position 
      newimg.style.left = position.x;
      newimg.style.top = position.y;
       // add new Child image to game
      game.appendChild(newimg);
      // retuns new PacMan with randon position and velocity 
      return {
          position,
          velocity,
          newimg
      }
  }
  //loop over pacmen array and move each one and move image in DOM
  function update() {
      pacMen.forEach((item) => {
          checkCollisions(item)
          item.position.x += item.velocity.x;
          item.position.y += item.velocity.y;
          item.newimg.style.left = item.position.x;
          item.newimg.style.top = item.position.y;
      })
      setTimeout(update, 20);
  }
  // detect collision with all walls and make PacMan bounce
  function checkCollisions(item) {
      if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
          item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
      if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
          item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
  }
  //add a new PacMan
  function makeOne() {
      pacMen.push(makePac());
  }
  if (typeof module !== 'undefined') {
    module.exports = { checkCollisions, update, pacMen };
  };
