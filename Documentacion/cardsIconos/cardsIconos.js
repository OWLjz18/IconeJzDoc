import { listaIconejz } from '../listaIconejz.js';
import insertExample from '../Insertadores/insertadores.js';
import alertMensaje from './../../js/alertMensaje/alertMensaje.js';

const contenedor = document.querySelector('.contenedor');
const seccionIconos = document.querySelector('#seccionIconos');

// Creamos las tarjetas de cada icono que se encuentra en 'listaIconejz.js'
listaIconejz.forEach( (icono, index) =>  {
  
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  
  const titulo = document.createElement('h2');
  titulo.setAttribute('class', 'card__titulo');
  titulo.innerHTML = icono.nombre;
  
  const iconoCopiar = document.createElement('jz-copy');
  iconoCopiar.setAttribute('class', 'card__iconoCopiar');
  iconoCopiar.setAttribute('id', `card__iconoCopiar--${icono.codigo}`);
  iconoCopiar.setAttribute('s', '40px');
  
  const contenido = document.createElement('div');
  contenido.setAttribute('class', 'card__contenido');
  
  const subtitulo = document.createElement('h3');
  subtitulo.setAttribute('class', 'card__subtitulo');
  subtitulo.innerHTML = 'Código:';
  
  const codigo = document.createElement('div');
  codigo.setAttribute('class', 'card__codigo');
  
  const ejemplo = document.createElement('div');
  ejemplo.setAttribute('class', 'card__ejemplo');
  ejemplo.setAttribute('id', `card__ejemplo--${icono.codigo}`);
  
  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('readonly', 'true')
  input.setAttribute('class', 'card__input');
  input.setAttribute('id', `card__input--${icono.codigo}`);
  
  const subtitulo2 = subtitulo.cloneNode();
  subtitulo2.innerHTML = 'Resultado:';
  
  codigo.append(ejemplo, input);
  contenido.append(subtitulo, codigo, subtitulo2, document.createElement(icono.codigo));
  card.append(titulo, iconoCopiar, contenido);
  seccionIconos.appendChild(card);
  
  insertExample.html({
    elemento: ejemplo,
    etiqueta: icono.codigo
  });
  
  input.value = ejemplo.innerText;

  // Interactividad

  iconoCopiar.addEventListener('click', () => {
    
    input.focus();
    
    document.execCommand('selectAll');
    document.execCommand('copy');
    
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