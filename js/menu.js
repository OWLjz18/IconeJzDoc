'use strict';

const iconoMenu = document.querySelector('.header__icono');
const nav = document.querySelector('.nav');

iconoMenu.addEventListener('click', () => {
  
  nav.classList.toggle('nav--abierto');
  
  iconoMenu.classList.toggle('header__icono--cambiado');
  
  if (iconoMenu.classList.contains('header__icono--cambiado')) {
    
    iconoMenu.setAttribute('change-iconejz', 'jz-x');
    
  } else {
    
    iconoMenu.removeAttribute('change-iconejz');
    
  }
  
});