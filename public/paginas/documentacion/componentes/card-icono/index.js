import alertPersonalizado from './../../../../js/alert-personalizado/index.js';

const cardIcono = class extends HTMLElement {
  
  constructor () {
    super();
    
    this._titulo = this.getAttribute('titulo') ?? 'Sin titulo';
    this._iconoTag = this.getAttribute('tag-icono') ?? 'div';
  }
  
  _render () {
    
    // New
    this.innerHTML = `
    <h2 class="card__titulo">${this._titulo}</h2>
    
    <jz-copy class="card__iconoCopiar"></jz-copy>
    
    <div class="card__contenido">
      <h3 class="card__subtitulo">Código:</h3>
      
      <div class="card__codigo">
        <div class="card__ejemplo">
          <div class="contentElement">&lt;<span class="etiqueta">${this._iconoTag}</span>&gt;<span class="textElement"></span>&lt;/<span class="etiqueta">${this._iconoTag}</span>&gt;</div>
          </div>
        <input class="card__input" type="text" value="<${this._iconoTag}></${this._iconoTag}>" readonly>
      </div>
      
      
      <h3 class="card__subtitulo">Icono:</h3>
      
      <${this._iconoTag} class="card__iconoResultado"></${this._iconoTag}>
    </div>
    `;
    
  }
  
  _copiarAlPortapapeles () {
    
    const iconoCopiar = this.querySelector('.card__iconoCopiar');
    const input = this.querySelector('.card__input');
    
    iconoCopiar.addEventListener('click', () => {
      
      input.focus();
      
      document.execCommand('selectAll');
      document.execCommand('copy');
      
      input.blur();
      
      alertPersonalizado();
      
    });
    
  }
  
  connectedCallback () {
    
    this._render();
    
    this._copiarAlPortapapeles();
    
  }
  
  static get observedAttributes () {
    return ['titulo', 'tag-icono'];
  }
  
  attributeChangedCallback (name, oldValue, newValue) {}
  
};

customElements.define('card-icono', cardIcono);