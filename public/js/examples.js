'use strict';

const examples = [...document.querySelectorAll('.js-example')];

examples[0].setText(`
const icon = document.querySelector('.icon');

console.log(icon.contentName); // menu
console.log(icon.getAttribute('is')); // menu

icon.changeContentFor('x');
console.log(icon.contentName); // x
console.log(icon.getAttribute('is')); // menu
`);

examples[1].setText(`
const checkIcon = document.querySelector('.check');

checkIcon.addEventListener('click', () => {
  checkIcon.changeContentFor('x');
  console.log(icon.getAttribute('is')); // check
});
`);

examples[2].setText(`
const checkIconUndo = document.querySelector('.check-undo');

checkIconUndo.addEventListener('click', () => {
  checkIconUndo.changeContentFor('x');
});

checkIconUndo.addEventListener('dblclick', () => {
  checkIconUndo.undoContentChange();
});
`);

examples[3].setText(`
const playIcon = document.querySelector('.music');

playIcon.addEventListener('click', () => {
  playIcon.toggleContent('pause');
});
`);
