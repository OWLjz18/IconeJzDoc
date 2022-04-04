/**
 * Genera un ejemplo de CSS con resaltado de sintaxis.
 * @param {Object} obj - Es el objeto anónimo que la función se encarga de desestructurar.
 * @param {HTMLElement} obj.elemento - Es el elemento al que se le agregará el ejemplo creado por esta función.
 * @param {String} obj.selector - Es el selector de CSS.
 * @param {{}} obj.propiedades - Es un objeto que contendrá las propiedades que se agregarán al ejemplo, en formato de 'propiedad/valor'.
*/
export default function({elemento, selector, propiedades}) {
  
  if (elemento !== undefined) {
    
    const contentRegla = document.createElement('div');
    contentRegla.setAttribute('class', 'contentRegla');
    
    let totalPropiedades = '';
    
    for (let propiedad of Object.keys(propiedades)) {
      
      totalPropiedades += `<div class="propiedadCSS"> ${'&nbsp;'.repeat(2)} <span class="nombrePropiedad">${propiedad}</span>: <span class="valorPropiedad">${propiedades[propiedad]}</span>;</div>`;
      
    }
    
    contentRegla.innerHTML = `
    <div class="contentRegla-content">
      <span class="nombreSelector">${selector}</span> {
        ${totalPropiedades}
      }
    </div>`;
    
    elemento.appendChild(contentRegla);
    
  }
  
};