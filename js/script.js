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
// let allCells = document.querySelectorAll('body > div.cells > button.cellBtn');
let seconds = document.getElementById("countdown").textContent;
let cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
let randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];

class React {
  constructor(name, score, highscore){
    this.name = name;
    this.score = score;
    this.highscore = highscore;
  }
  addScore(){
    this.score++;
    this.updateStatsOnDom();
  }
  updateStatsOnDom(){
    const container = document.querySelector('.scores');
    container.innerHTML = `
    <div class='player1-score'>
      <span>${this.score}</span>
    </div>
    <div class='player2-score'>
      <span>${this.score}</span>
    </div>
    `
  }
}
const player1 = new React('player1', 0, 0);
const player2 = new React('player2', 0, 0);
console.log(player1.score)







/*FUNCTIONS*/
const toggleClass = (node, className) => {
  node.classList.toggle(className)
}
/*^^^toggles the modal class 'open'*/
const addClicksP1 = () => player1.addScore();
const addClicksP2 = () => player2.addScore();

const randomCellOg = function randomCellOg(){
  let cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
  randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];
  randomCell.style.backgroundColor = 'rgb(255, 182, 193)';
  randomCell.addEventListener('click', (e) =>{
    randomCellOg();
  });
}

const randomCellBg = function randomCellBg() {
    let cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
    if (randomCell != undefined){ randomCell.removeEventListener('click', randomCellBg) }
    randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];
    randomCell.style.backgroundColor = 'rgb(144, 200, 252)';
    randomCell.addEventListener('click', (e) =>{
      randomCellBg();
      randomCellOg();
    });
}
/*^^^chnages background of random cell*/
const countClick = function countClick(){
  let cellArray = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
  let randomCell = cellArray[Math.floor(Math.random() * cellArray.length)];
  document.querySelector('body > div.cells').addEventListener('click', function addCounter(event) {
    let element = event.currentTarget;
    element.clicks = (element.clicks || 0) + 1;
    console.log(element.clicks)
  });
}

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
  document.querySelector('body > div.scores > div.player1-score').style.visibility = 'visible';
  document.querySelector('body > div.scores > div.player2-score').style.visibility = 'visible';
  document.querySelector('body > div.cells').style.visibility = 'visible';
  document.querySelector('body > div#countdown').style.visibility = 'visible';
  toggleClass(modal, 'open')
});
startBtn.addEventListener('click', (e) =>{
  // countdown(e);

  toggleClass(randomCell, 'openBtn');

  randomCellBg();
});
// randomCell.addEventListener('click', (e)=>{
//   toggleClass(randomCell, 'openBtn');
//
// });
 cell1.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell2.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell3.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell4.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell5.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell6.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell7.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell8.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });
 cell9.addEventListener('click', (e) =>{
   toggleClass(randomCell, 'openBtn');
   randomCellBg();
 });


countClick();
