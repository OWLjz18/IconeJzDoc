'use strict';

const ejemploIconejz = document.querySelector('.ejemploIconejz__contenedor');

ejemploIconejz.innerHTML = `
<div class="ejemploIconejz__carpeta">
  <jz-a-d class="ejemploIconejz__iconoFlecha"></jz-a-d>
  <div class="jz-folder"></div>
  <p class="ejemploIconejz__texto">IconeJz</p>  
</div>

<div class="ejemploIconejz__carpeta ejemploIconejz__carpeta--2">
  <jz-a-d class="ejemploIconejz__iconoFlecha"></jz-a-d>
  <div class="jz-folder"></div>
  <p class="ejemploIconejz__texto">src</p>
</div>

<div class="ejemploIconejz__contenido--2">
  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <jz-css class="ejemploIconejz__iconoArchivo" c="#0015FF"></jz-css>
      <p class="ejemploIconejz__texto">iconejz.css</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>
 
  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <jz-js class="ejemploIconejz__iconoArchivo" c="#E6FF00"></jz-js>
      <p class="ejemploIconejz__texto">iconejz.js</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>

  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <jz-txt class="ejemploIconejz__iconoArchivo" c="#808080"></jz-txt>
      <p class="ejemploIconejz__texto">iconejz.txt</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>
</div>

<div class="ejemploIconejz__contenido">
  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <jz-md class="ejemploIconejz__iconoArchivo" c="#808080"></jz-md>
      <p class="ejemploIconejz__texto">LICENSE.md</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>
  
  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <jz-md class="ejemploIconejz__iconoArchivo" c="#808080"></jz-md>
      <p class="ejemploIconejz__texto">README.md</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>
  
  <div class="ejemploIconejz__archivo">
    <div class="ejemploIconejz__archivo--contenedor">
      <div class="jz-json ejemploIconejz__iconoArchivo"></div>
      <p class="ejemploIconejz__texto">package.json</p>
    </div>
    
    <jz-tvp class="ejemploIconejz__iconoTVP"></jz-tvp>
  </div>
</div>
`;

const carpeta = document.querySelector('.ejemploIconejz__carpeta');
carpeta.addEventListener('click', () => {
 
  carpeta.classList.toggle('ejemploIconejz__carpeta--contenidoTransparente');
  
  setTimeout(() => carpeta.classList.toggle('ejemploIconejz__carpeta--cerrada'), 360);
  
});

const carpeta2 = document.querySelector('.ejemploIconejz__carpeta--2');
carpeta2.addEventListener('click', () => {
  
  carpeta2.classList.toggle('ejemploIconejz__carpeta2--contenidoTransparente'),   
  
  setTimeout(() => carpeta.classList.toggle('ejemploIconejz__carpeta2--cerrada'), 360);
  
});