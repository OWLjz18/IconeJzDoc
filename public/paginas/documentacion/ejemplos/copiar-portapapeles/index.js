import alertPersonalizado from './../../../../js/alert-personalizado/index.js';

const contenedor = document.querySelector('.contenedor');
const iconosCopiar = document.querySelectorAll('.ejemplo__iconoCopy');

iconosCopiar.forEach( iconoCopy => {
  
  iconoCopy.addEventListener('click', () => {
    
    const inputEjemplo = iconoCopy.nextElementSibling;
    
    let contenidoEjemplo = iconoCopy.previousElementSibling.innerText;
    
    inputEjemplo.value = contenidoEjemplo;
    
    if (inputEjemplo.classList.contains('ejemplo__input--js')) {
      
      inputEjemplo.value = contenidoEjemplo
        .replace(/\|/g, '')
        .replace(/\/\/\s+\[\d\]/g, '');
      
    } 
    
    inputEjemplo.focus();
    
    document.execCommand('selectAll');
    document.execCommand('copy');
    
    inputEjemplo.value = '';
    inputEjemplo.blur();
    
    alertPersonalizado();
    
  });
  
});