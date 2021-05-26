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


/*Functions*/
const toggleClass = (node, className) => {
  node.classList.toggle(className)
}

/* Event Listeners */
playBtn.addEventListener('click', (e) =>{
  // document.querySelector('div.cells').style.display = 'grid';
  toggleClass(modal, 'open')
})
