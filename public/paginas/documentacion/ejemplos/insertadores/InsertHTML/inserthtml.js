/**
 * Genera un ejemplo de HTML con resaltado de sintaxis sin que este sea interpretado.
 * @param {Object} obj - Este es el objeto anonimo que la función se encarga de desestructurar.
 * @param {HTMLElement} obj.elemento - Es el elemento al que se le agregará el ejemplo creado por esta función.
 * @param {String} obj.etiqueta - Etiqueta que conformará el elemento de ejemplo.
 * @param {{}} [obj.atributos] - Es una lista en forma de objeto de los atributos que tendrá el elemento de ejemplo, en forma de 'atributo/valor', en caso de que un atributo no vaya a tener valor (como puede ser el caso de 'async' o 'defer'), a este se le debe asignar un valor vacío así => ''.
 * @param {String} [obj.texto] - Es el texto que contendrá el elemento.
*/
export default function({elemento, etiqueta, atributos, texto = ''}) {
  
  if (elemento !== undefined) {
    
    const contentElement = document.createElement('div');
    contentElement.setAttribute('class', 'contentElement');
    
    let totalAtributos = '';
    
    if (atributos !== undefined) {
      for (let att of Object.keys(atributos)){
        
        if (atributos[att] !== '') {
          
          totalAtributos += ` <span class="colorAtributo">${att}</span><span class="etiqueta">=</span><span class="valorAtributo">"${atributos[att]}"</span>`;
          
        } else {
          
          totalAtributos += ` <span class="colorAtributo">${att}</span>`;
          
        }
        
      }
    }
    
    switch (etiqueta) {
      
      case 'img':
      case 'meta':
      case 'link':
      case 'input':
        contentElement.innerHTML = `&lt;<span class="etiqueta">${etiqueta}</span>${totalAtributos}/&gt;`
        
        elemento.appendChild(contentElement);
        break;      
        
      default: 
        contentElement.innerHTML = `&lt;<span class="etiqueta">${etiqueta}</span>${totalAtributos}&gt;<span class="textElement">${texto}</span>&lt;/<span class="etiqueta">${etiqueta}</span>&gt;`;
        
        elemento.appendChild(contentElement);
        break;
    }
    
  }
  
};