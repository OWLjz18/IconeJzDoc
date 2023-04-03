/** 
 * @module models/CodeExample
 * @requires module:js/custom-alert
 */
import customAlert from '../js/custom-alert.js';

/**
 * It contains the "basic" functions of an example, how it could be to copy the text to the clipboard.
 */
const CodeExample = class extends HTMLElement {
  /**
   * Enables the shadow DOM.
   */
  constructor () {
    super();
    
    this.root = this.attachShadow({ mode: 'open' });
  }

  /** 
   * Copies the content of the example to the clipboard.
   */
  _copyToClipboard () {
    this.addEventListener('dblclick', async () => {
      const exampleText = await this._getText();
      navigator.clipboard.writeText(exampleText);

      customAlert();
    });
  }
  
  /**
   * Exports the "parts" of the example itself.
   */
  _exportparts () {
    const elementsWithParts = Array.from(this.root.querySelectorAll('[part]'));
    const setOfParts = new Set(elementsWithParts.map(element => element.getAttribute('part')));
    const parts = [...setOfParts];
    
    this.setAttribute('exportparts', parts.toString());
  }
  
  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._copyToClipboard();
    
    if (this.hasAttribute('exportparts')) {
      this._exportparts();
    } 
  }
  
  /**
   * Observe the attributes that the icon could have.
   * @method
   * @returns {String[]}
   */
  static get observedAttributes () {
    return ['exportparts'];
  }
  
  /**
   * Gets the content of the example (its text). 
   * @returns {Promise<String>}
   */
  async _getText () {
    return new Promise((res) => {
      setTimeout(() => res(this.shadowRoot.textContent.trim()), 50);
    });
  }
};

export default CodeExample;
