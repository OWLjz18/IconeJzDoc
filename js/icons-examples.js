'use strict';

const checkIcon = document.querySelector('.check-example');
const checkIconUndo = document.querySelector('.check-undo-example');
const playIcon = document.querySelector('.play-example');

checkIcon.addEventListener('click', () => {
  checkIcon.changeContentFor('x');
});

checkIconUndo.addEventListener('click', () => {
  checkIconUndo.changeContentFor('x');
});

checkIconUndo.addEventListener('dblclick', () => {
  checkIconUndo.undoContentChange();
});

playIcon.addEventListener('click', () => {
  playIcon.toggleContent('pause');
});
