/**
 * Crea un mensaje de alerta y lo añade al contenedor que se le indique.
 * @param {Object} obj - Objeto anonimo que la función desestructura.
 * @param {HTMLElement} obj.contenedor - Este será el contenedor al que se le agrege el mensaje de alerta.
 * @param {String} obj.mensaje - Este será el mensaje que tendrá la alerta.
 * @param {String} [obj.color] - Este será el color del mensaje que tendrá la alerta.
 * @param {Number} obj.duracion - Este es el tiempo que durará la alerta expresado en segundos.
 * @param {String} obj.duracionTransicion - Este sería el tiempo que de la transicion que tiene la alerta para aparecer y desaparecer.
*/
export default function({contenedor, mensaje: contenidoMensaje, color, duracion, duracionTransicion = 0.5}) {
  
  const mensaje = document.createElement('p');
  mensaje.setAttribute('class', 'alertMensaje');
  mensaje.innerHTML = contenidoMensaje;
  
  if (color !== undefined) {
    mensaje.style.setProperty('--colorMensaje', color);
  }
  
  contenedor.appendChild(mensaje);
  
  setTimeout( () => mensaje.classList.add('on'));
  setTimeout( () => {
    
    mensaje.classList.remove('on');
    mensaje.classList.add('off');
    
    return new Promise((res, rej) => setTimeout( () => res(), duracionTransicion * 1000))
      .then( () => {
        mensaje.classList.remove('off');
        contenedor.removeChild(mensaje);
        })
      .catch(err => console.warn(err));
      
  }, duracion * 1000);
 
};