import alertMensaje from './../js/alertMensaje/alertMensaje.js';

const contenedor = document.querySelector('.contenedor');
const iconosEjemplosDescargar = document.querySelectorAll('.ejemploDescargar__icono');

iconosEjemplosDescargar.forEach(iconoEjemplo => iconoEjemplo.addEventListener('click', () => {
  
  const ejemploInput = iconoEjemplo.nextElementSibling;
  const texto = iconoEjemplo.previousElementSibling.innerText;
  ejemploInput.value = texto.replace('$ ', '');
  
  ejemploInput.focus();
  document.execCommand('selectAll');
  document.execCommand('copy');
  ejemploInput.blur();
  
  const alertMensajeColor = '#FFBE29';
  
  alertMensaje({
    contenedor: contenedor,
    mensaje: `<jz-str c="${alertMensajeColor}" s="30px" b="2px"></jz-str>
              <span class="alertMensaje__texto">Copiado Exitosamente</span>
              <jz-str c="${alertMensajeColor}" s="30px" b="2px"></jz-str>`,
    color: alertMensajeColor,
    duracion: 1.25
  });
 
}));