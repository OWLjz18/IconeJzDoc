'use strict';

const ejemploJS = document.querySelector('.ejemplo-JS1');

const ejemploContenido = document.createElement('div');
ejemploContenido.setAttribute('class', 'contentCode');

ejemploContenido.innerHTML = 
`<span class="const_let">const</span> iconPlay <span class="const_let">=</span> <span class="objeto">document</span>.<span class="metodo">querySelector</span>(<span class="string">'.iconPlay'</span>);  <span class="comentario">// [1]</span>

iconPlay.<span class="metodo">addEventListener</span>(<span class="string">'click'</span>, () <span class="const_let">=></span> { 

  iconPlay.classList.<span class="metodo">toggle</span>(<span class="string">'reproduciendo'</span>);  <span class="comentario">// [2]</span>

  <span class="const_let">if</span> (iconPlay.classList.<span class="metodo">contains</span>(<span class="string">'reproduciendo'</span>)) {  <span class="comentario">// [3]</span>
  <span class="identacion">|</span>  
  <span class="identacion">|</span>  iconPlay.<span class="metodo">setAttribute</span>(<span class="string">'change-iconejz'</span>, <span class="string">'jz-pause'</span>);
  <span class="identacion">|</span>  
  } <span class="const_let">else</span> {
  <span class="identacion">|</span>  
  <span class="identacion">|</span>  iconPlay.<span class="metodo">removeAttribute</span>(<span class="string">'change-iconejz'</span>);
  <span class="identacion">|</span>  
  }

});`;

ejemploJS.appendChild(ejemploContenido);