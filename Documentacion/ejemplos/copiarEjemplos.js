import alertMensaje from './../../js/alertMensaje/alertMensaje.js';

const contenedor = document.querySelector('.contenedor');
const arrEjemplosIconos = document.querySelectorAll('.ejemplo__iconoCopy');

arrEjemplosIconos.forEach( iconoCopy => {
  
  iconoCopy.addEventListener('click', () => {
    
    const ejemploInput = iconoCopy.nextElementSibling;
    
    const ejemploContenido = iconoCopy.previousElementSibling.innerText;
    
    if (ejemploInput.classList.contains('ejemplo__input-js')) {
      
      const ejemploContenido2 = ejemploContenido.replace(/\|/g, '');
      const ejemploContenido3 = ejemploContenido2.replace(/\/\/\s+\[\d\]/g, '');
      
      ejemploInput.value = ejemploContenido3;
      
    } else {
      
      ejemploInput.value = ejemploContenido;
      
    }
    
    ejemploInput.focus();
    
    document.execCommand('selectAll');
    document.execCommand('copy');
    
    ejemploInput.value = '';
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
    
  });
  
});