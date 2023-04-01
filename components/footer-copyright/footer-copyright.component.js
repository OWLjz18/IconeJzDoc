/** @module components/footer-copyright */

/** 
 * Contains all functionalities of the element.
 * @extends HTMLElement
 */
const FooterCopyright = class extends HTMLElement {
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
    const footer = document.createElement('footer');
    footer.setAttribute('part', 'footer-copyright');

    const authorLink = document.createElement('a');
    authorLink.setAttribute('part', 'footer-copyright__link');
    authorLink.href = 'https://github.com/OWLjz18';
    authorLink.innerText = 'OWLjz18';

    const copyright = document.createElement('p');
    copyright.setAttribute('part', 'footer-copyright__text');
    copyright.append('© ', authorLink, ' All right reserved (2022-2023).');

    footer.append(copyright);
    this.root.append(footer);
  }
  

  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();
  }
};

customElements.define('footer-copyright', FooterCopyright);
