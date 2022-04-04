/**
 * Crea un mensaje de alerta y lo añade al contenedor que se le indique.
*/
export default function() {
  
  const contenedor = document.querySelector('.contenedor');
  
  const mensaje = document.createElement('p');
  mensaje.setAttribute('class', 'alertMensaje');
  
  const colorMensaje = '#FFBE29';
  mensaje.style.setProperty('--color-mensaje', colorMensaje);
  
  mensaje.innerHTML = `
    <jz-str c="${colorMensaje}" s="30px" b="2px"></jz-str>
    <span class="alertMensaje__texto">Copiado Exitosamente</span>
    <jz-str c="${colorMensaje}" s="30px" b="2px"></jz-str>
  `;
  
  contenedor.appendChild(mensaje);
  
  setTimeout(() => mensaje.classList.add('on'));
  setTimeout(() => {
    
    mensaje.classList.remove('on');
    mensaje.classList.add('off');
    
    return new Promise((res, rej) => setTimeout(() => res(), 1250))
      .then(() => {
        mensaje.classList.remove('off');
        contenedor.removeChild(mensaje);
      })
      .catch(err => console.warn(err));
   
  }, 1250);
 
};