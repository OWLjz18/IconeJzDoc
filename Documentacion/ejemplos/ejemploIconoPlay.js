'use strict';

const iconPlay = document.querySelector('.ejemplo__iconoPlay');

iconPlay.addEventListener('click', () => { 

  iconPlay.classList.toggle('reproduciendo');

  if (iconPlay.classList.contains('reproduciendo')) { 
    
    iconPlay.setAttribute('change-iconejz', 'jz-pause');
    
  } else {
    
    iconPlay.removeAttribute('change-iconejz');
    
  }

});