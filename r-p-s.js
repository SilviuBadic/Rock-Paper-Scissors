let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses:0,
  ties: 0
  };

/* 
if (!score) {
  score = {
    wins: 0,
    losses:0,
    ties: 0
  };
}
*/
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerChoice='';
      
    if (randomNumber > 0 && randomNumber < 1/3  ) {
      computerChoice = 'rock';
      document.querySelector('.a3').innerHTML =
      `<img src="../Pictures/rock.jpg" class="small_result"> Computer`;
    
    }
    else if ( randomNumber >= 1/3 && randomNumber < 2/3){
      computerChoice = 'paper';
      document.querySelector('.a3').innerHTML = `<img src="../Pictures/paper.jpg" class="small_result"> Computer`;
      }
  
    else{
      computerChoice = 'scissors';
      document.querySelector('.a3').innerHTML = `<img src="../Pictures/scissors.jpg" class="small_result"> Computer`;
    
    }
    
    return computerChoice;
}
  let isAutoPlaying = false;
  let intervalId;
  function autoPlay(){
    if (!isAutoPlaying){
      intervalId = setInterval(function(){
        const playerM = pickComputerMove(); 
        gameResult(playerM);
      }, 1500);
      isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }

}

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
       gameResult('rock');
    }
    else if (event.key === 'p'){
      gameResult('paper');
    }
    else if (event.key === 's'){
      gameResult('scissors');
    }
  });

  function gameResult(playerMove){
    const computerChoice = pickComputerMove();
    let result ='';

    if (playerMove === 'scissors'){

      if (computerChoice === 'rock'){
        result = 'I lost!';
      }
      else if (computerChoice === 'paper'){
        result = 'I won!';
      }
      else{
        result = 'It\'s a tie!';
      }
      }
    else if (playerMove === 'rock'){

      if (computerChoice === 'rock'){
        result = 'It\'s a tie!';
      }
      else if (computerChoice === 'paper'){
        result = 'I lost!';
      }
      else{
        result = 'I won!';
      }
    }

    else if (playerMove === 'paper'){
      if (computerChoice === 'rock'){
        result = 'I won!';
      }
      else if (computerChoice === 'paper'){
        result = 'It\'s a tie!';
      }
      else{
        result = 'I lost!';
      }
    }

    if (result === 'I lost!'){
    score.losses += 1;
    }
    else if (result === 'I won!'){
      score.wins += 1;
    }
    else if (result === 'It\'s a tie!'){
      score.ties += 1;
    }

   localStorage.setItem('score', JSON.stringify(score));

   updateScoreElement();

      document.querySelector('.js-winner')
    .innerHTML = `${result}`


      document.querySelector('.js-moves')
    .innerHTML = `I chose ${playerMove} and the computer chose ${computerChoice}. That means ${result}`
  }

   function updateScoreElement(){
    document.querySelector('.js-score').
    innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
   }
   updateScoreElement();
   
  function miniScore(){
    let playerMove;

      document.querySelector('.a2').innerHTML =
      `Me <img src="../Pictures/rock.jpg" class="small_result">`
  }

  function miniScore2(){
    let playerMove;

      document.querySelector('.a2').innerHTML =
      `Me <img src="../Pictures/paper.jpg" class="small_result">`
  }

  function miniScore3(){
    let playerMove;

      document.querySelector('.a2').innerHTML =
      `Me <img src="../Pictures/scissors.jpg" class="small_result">`
  }
