/** @module components/internal-seeker */

/** 
 * Contains all functionalities of the element.
 * @extends HTMLElement
 */
const InternalSeeker = class extends HTMLElement {
  /**
   * Enables the shadow DOM.
   */
  constructor () {
    super();
    
    this.root = this.attachShadow({ mode: 'open' });
  }
  
  /** 
   * Renders the element.
   */
  _render () {
    const placeholder = this.getAttribute('placeholder');
    this.input = document.createElement('input');
    this.input.setAttribute('placeholder', placeholder);
    this.input.setAttribute('type', 'search');
    this.input.setAttribute('part', 'internal-seeker__input');

    this.root.append(this.input);
  }
  
  /**
   * Filter the results that should be displayed and hide the rest.
   */
  _filterResults () {
    const notFoundMessageElement = document.querySelector('.not-found-message');
    const iconCards = [...document.querySelectorAll('icon-card')];
    const iconNames = iconCards.map((iconCard) => iconCard.getAttribute('icon-name'));
    const inputValue = this._getInputValue().toLowerCase();

    (!iconNames.find(iconName => iconName.includes(inputValue)))
      ? notFoundMessageElement.hidden = false
      : notFoundMessageElement.hidden = true;

    for (let iconCard of iconCards) {
      const iconName = iconCard.getAttribute('icon-name');

      (iconName.includes(inputValue))
        ? iconCard.hidden = false
        : iconCard.hidden = true;
    }
  }

  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();

    this.addEventListener('keyup', () => this._filterResults());
  }
  
  /**
   * Observe the attributes that the icon could have.
   * @method
   * @returns {String[]}
   */
  static get observedAttributes () {
    return ['placeholder'];
  }

  /**
   * Gets the content of the input.
   * @return {String}
   */
  _getInputValue () {
    const inputValue = this.input.value.trim();

    return inputValue;
  }
};

customElements.define('internal-seeker', InternalSeeker);
