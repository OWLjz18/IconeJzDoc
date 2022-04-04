'use strict';

const iconoPlay = document.querySelector('.ejemplo__iconoPlay');

iconoPlay.addEventListener('click', () => { 

  iconoPlay.classList.toggle('reproduciendo');
  
  if (iconoPlay.classList.contains('reproduciendo')) { 
    
    iconoPlay.setAttribute('change-iconejz', 'jz-pause');
    
  } else {
    
    iconoPlay.removeAttribute('change-iconejz');
    
  }
  
});