const game = () => {
  let pScore = 0;
  let cScore = 0;
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fade-out");
      matchScreen.classList.add("fade-in");
    });
  };
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
 const hands =document.querySelectorAll('.hands img');
 hands.forEach(hand=>{
     hand.addEventListener('animationend',function(){
         this.style.animation='';
     })
 })
    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer random choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //player choice
        const playerChoice = this.classList.value;

      
        setTimeout(() => {
            pHand.src=`./assets/${playerChoice}.png`;
            cHand.src=`./assets/${computerChoice}.png`;
            compareHandes(playerChoice,computerChoice)
        },2000);
        pHand.style.animation='shakePlayer 2s ease';
         cHand.style.animation='shakeComputer 2s ease'
     
      });
    });
  };
  const updateScore=()=>{
      const playerScore=document.querySelector('.player-score p');
      const computerScore=document.querySelector('.computer-score p');
      playerScore.textContent=pScore;
      computerScore.textContent=cScore;
  }
  const compareHandes=(player,computer)=>{
      const winner=document.querySelector('.winner');

  
        if (computer===player){
          winner.textContent="It's a tie !"
          return;
        }
        if(player==='rock'){
            if(computer==='paper'){
                winner.textContent="computer wins !";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="player wins !";
                pScore++;
                updateScore();
                return;
            }
        }
        if(player==='paper'){
            if(computer==='rock'){
                winner.textContent="player wins !";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="computer wins !";
                cScore++;
                updateScore();
                return;
            }
        }
        if(player==='scissors'){
            if(computer==='rock'){
                winner.textContent="computer wins !";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent="player wins !";
                pScore++;
                updateScore();
                return;
            }
        }
  
  }
  //calling the inner functions
  startGame();
  playMatch();
};
// starting the game
game();
