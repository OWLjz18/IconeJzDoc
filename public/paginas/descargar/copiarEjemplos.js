import alertPersonalizado from './../../js/alert-personalizado/index.js';

const iconosEjemplosDescargar = document.querySelectorAll('.ejemploDescargar__icono');

iconosEjemplosDescargar.forEach(iconoEjemplo => iconoEjemplo.addEventListener('click', () => {
  
  const inputEjemplo = iconoEjemplo.nextElementSibling;
  const contenidoEjemplo = iconoEjemplo.previousElementSibling.innerText;
  inputEjemplo.value = contenidoEjemplo.replace('$ ', '');
  
  inputEjemplo.focus();
  document.execCommand('selectAll');
  document.execCommand('copy');
  inputEjemplo.blur();
  
  alertPersonalizado();
 
}));