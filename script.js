
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;
  

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)


  }

  function bonk(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));

   function facts() { 
    var r_text = new Array ();
    r_text[0] = "Moles use tunnels to travel";
    r_text[1] = "Moles spend most of their lives alone and underground in their tunnels";
    r_text[2] = "Moles spend their time digging tunnels and hunting for food";
    r_text[3] = "Moles come in a range of colors";
    r_text[4] = "Moles aren’t blind, but they are colorblind and see very poorly";
    var rand = Math.floor(r_text.length * Math.random());
    document.querySelector('#facts').textContent = r_text[rand]; 
}



  
  




  

