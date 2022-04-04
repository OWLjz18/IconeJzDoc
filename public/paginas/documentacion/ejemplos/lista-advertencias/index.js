import listaIconejz from './listaIconejz.js';

const iconosSinTransparencia = listaIconejz.filter(icono => icono.sinTransparencia);

const listaIconosSinTransparencia = document.querySelector('.section__lista--advertencias');

for (let icono of iconosSinTransparencia) {
  
  const li = document.createElement('li');
  li.setAttribute('class', 'section__li');
  
  li.innerHTML = `${icono.nombre}  =>  <span class="italic bold">"${icono.codigo}"</span>.`;
  
  listaIconosSinTransparencia.appendChild(li);
  
};