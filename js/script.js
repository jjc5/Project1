/*cached DOM nodes*/
const body = document.querySelector('body');
const modal = document.querySelector('body > div.modal');
const playBtn = document.querySelector('body > div.modal > button.play-button');
const startBtn = document.querySelector('body > div.controls > button.start-button');
const stopBtn = document.querySelector('body > div.controls > button.stop-button');
const cell1 = document.querySelector('body > div.cells > button.cell1');
const cell2 = document.querySelector('body > div.cells > button.cell2');
const cell3 = document.querySelector('body > div.cells > button.cell3');
const cell4 = document.querySelector('body > div.cells > button.cell4');
const cell5 = document.querySelector('body > div.cells > button.cell5');
const cell6 = document.querySelector('body > div.cells > button.cell6');
const cell7 = document.querySelector('body > div.cells > button.cell7');
const cell8 = document.querySelector('body > div.cells > button.cell8');
const cell9 = document.querySelector('body > div.cells > button.cell9');
let allCells = document.querySelectorAll('body > div.cells > button.cellBtn');
let seconds = document.getElementById("countdown").textContent;
let cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
let randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];
console.log(allCells)
const style = getComputedStyle(cell1);
const cell1Background = style.backgroundColor;
const player1Score = [];
const player2Score = [];







/*FUNCTIONS*/
const toggleClass = (node, className) => {
  node.classList.toggle(className)
}
/*^^^toggles the modal class 'open'*/

function randomCellBg(e){
    randomCell.style.backgroundColor = 'rgb(144, 200, 252)';
}

/*^^^chnages background of random cell*/


let countdown = function countdown(e){
  e.preventDefault();
  const interval = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds < 0) {
      clearInterval(interval);
      document.getElementById('countdown').innerHTML = '5';
    }
  }, 1000);
}
/*basic countdown^^^*/

/* Event Listeners */
playBtn.addEventListener('click', (e) =>{
  document.querySelector('body > div.controls > button.stop-button').style.visibility = 'visible';
  document.querySelector('body > div.controls > button.start-button').style.visibility = 'visible';
  document.querySelector('body > h1.player1-score').style.visibility = 'visible';
  document.querySelector('body > h1.player2-score').style.visibility = 'visible';
  document.querySelector('body > div.cells').style.visibility = 'visible';
  document.querySelector('body > div#countdown').style.visibility = 'visible';
  toggleClass(modal, 'open')
});
startBtn.addEventListener('click', (e)=>{
  countdown(e);
  randomCellBg(e);
});

cell1.addEventListener('click', (e) =>{
  if(cell1Background === 'rgb(255, 182, 193)'){
     randomCellBg(e);
  }
});

console.log(cell1Background)
console.log('hello')
/*call functions*/
// resetCountdown();
