/**
 * @module components/html-example
 * @requires module:models/CodeExample
 */
import CodeExample from '../../models/CodeExample.model.js';

/** 
 * Contains all functionalities of the element.
 * @extends CodeExample
 */
const HTMLExample = class extends CodeExample {
  constructor () {
    super();
  }
  
  /**
   * Reads all the attributes of the element and assigns it in variables.
   */
  _readAttributes () {
    this._tag = this.getAttribute('tag');
    this._attributes = this.getAttribute('attributes');
    this._valueAttributes = this.getAttribute('value-attributes');

    (this._attributes) 
      ? this._attributes = [...this._attributes.split(' - ')]
      : this._attributes = '';

    (this._valueAttributes) 
      ? this._valueAttributes = [...this._valueAttributes.split(' - ')]
      : this._valueAttributes = '';
  }
  
  /** 
   * Renders the element.
   */
  _render () {
    this._readAttributes();
    
    const contentHTML = document.createElement('div');
    contentHTML.setAttribute('part', 'html-example__content');
    
    let htmlAttributes = '';
    
    if (this._attributes) {
      for (let i = 0 ; i < this._attributes.length ; i++) {
        if (this._valueAttributes[i] === '_') {
          htmlAttributes += ` <span part="html-example__attribute">${this._attributes[i]}</span>`;
          continue;
        }

        htmlAttributes += ` <span part="html-example__attribute">${this._attributes[i]}</span><span part="html-example__tag">=</span><span part="html-example__value-attribute">"${this._valueAttributes[i]}"</span>`;
      }
    }
    
    if (['img', 'meta', 'link', 'input'].includes(this._tag)) {
      contentHTML.innerHTML = `&lt;<span part="html-example__tag">${this._tag}</span>${htmlAttributes}/&gt;`
      
      this.root.append(contentHTML);
      return;
    }

    contentHTML.innerHTML = `&lt;<span part="html-example__tag">${this._tag}</span>${htmlAttributes}&gt;<span part="html-example__text"></span>&lt;/<span part="html-example__tag">${this._tag}</span>&gt;`;
    this.root.append(contentHTML);
  }
  
  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();

    super.connectedCallback();
  }
  
  /**
   * Observe the attributes that the icon could have.
   * @method
   * @returns {String[]}
   */
  static get observedAttributes () {
    return ['tag', 'attributes', 'value-attributes', 'exportparts'];
  }
};

customElements.define('html-example', HTMLExample);
