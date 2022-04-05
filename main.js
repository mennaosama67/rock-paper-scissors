const game=()=>{
    let pScore=0;
    let cScore=0;
    const startGame=()=>{
        const playBtn=document.querySelector('.intro button');
        const introScreen=document.querySelector(".intro");
        const matchScreen=document.querySelector('.match');
        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fade-out');
            matchScreen.classList.add('fade-in');
        })
    }
    //calling the inner functions
  startGame();
}
// starting the game
game();