/** 
 * @module components/icon-card
 * @requires module:components/html-example
 */
import './../html-example/html-example.component.js';

/** 
 * Contains all functionalities of the element.
 * @extends HTMLElement
 */
const IconCard = class extends HTMLElement {
  /**
   * Enables the shadow DOM.
   */
  constructor () {
    super();
    
    this.root = this.attachShadow({ mode: 'open' });
  }

  /**
   * Format the received text.
   * @param {String} string - The text to format.
   *
   * @example 
   * input => 'hello-world'
   * output => 'Hello World'
   *
   * @returns {String}
   */
  _capitalize (string) {
    const stringParts = string.split('-');
    const stringPartsFormatted = stringParts.map((stringPart) => stringPart[0].toUpperCase() + stringPart.slice(1));
    const stringFormatted = stringPartsFormatted.join(' ');

    return stringFormatted;
  }
  
  /**
   * Renders the content of the card.
   */
  _render () {
    const iconName = this.getAttribute('icon-name');
    const specialNames = ['x', 'sms', 'html', 'css'];
    const iconTitle = (specialNames.includes(iconName))
      ? iconName.toUpperCase()
      : this._capitalize(iconName);

    const title = document.createElement('h2');
    title.setAttribute('part', 'card__title');
    title.innerText = iconTitle;

    const icon = document.createElement('icone-jz');
    icon.setAttribute('part', 'card__icon');
    icon.setAttribute('is', iconName);

    const htmlExample = document.createElement('html-example');
    htmlExample.setAttribute('part', 'card__example');
    htmlExample.setAttribute('tag', 'icone-jz');
    htmlExample.setAttribute('attributes', 'is');
    htmlExample.setAttribute('value-attributes', iconName);
    htmlExample.setAttribute('exportparts', '');

    this.root.append(title, icon, htmlExample);
  }
  
  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();
  }
  
  /**
   * Observe the attributes that the icon could have.
   * @method
   * @returns {String[]}
   */
  static get observedAttributes () {
    return ['icon-name'];
  }
};

customElements.define('icon-card', IconCard);
