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

    const computerOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer random choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //player choice
        const playerChoice = this.classList.value;

        pHand.src=`./assets/${playerChoice}.png`;
        cHand.src=`./assets/${computerChoice}.png`;
        compareHandes(playerChoice,computerChoice)
      });
    });
  };
  const compareHandes=(player,computer)=>{
      const winner=document.querySelector('.winner');

  
        if (computer===player){
          winner.textContent="It's a tie !"
          return;
        }
        if(player==='rock'){
            if(computer==='paper'){
                winner.textContent="computer wins !";
                cScore+=1;
                return;
            }else{
                winner.textContent="player wins !";
                pScore+=1;
                return;
            }
        }
        if(player==='paper'){
            if(computer==='rock'){
                winner.textContent="player wins !";
                pScore+=1;
                return;
            }else{
                winner.textContent="computer wins !";
                cScore+=1;
                return;
            }
        }
        if(player==='scissors'){
            if(computer==='rock'){
                winner.textContent="computer wins !";
                cScore+=1;
                return;
            }else{
                winner.textContent="player wins !";
                pScore+=1;
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
