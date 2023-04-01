/**
 * @module components/js-example
 * @requires module:models/CodeExample
 */
import CodeElement from '../../models/CodeExample.model.js';

/** 
 * Contains all functionalities of the element.
 * @extends CodeExample
 */
const JSExample = class extends CodeElement {
  constructor () {
    super();
  }

  /**
   * Sets the content of the example.
   * @param {String} text - The content of the example.
   */
  setText (text) {
    this.textContent = text.trim();
  }
  
  /**
   * Highlight the example content and return its respective HTML.
   * @param {String} text - The content of the example.
   * @returns {String}
   */
  _syntaxHighlighting (text) {
    const regexps = [
      {
        name: 'keyword',
        regexp: /(?<keyword>(?<!('|`))(const|let|if|switch|case|>|<|!|=|;)(?!('|`)))/g,
      },
      {
        name: 'function',
        regexp: /(?<function>\w+(?=\((.+)?\)))/g,
      },
      {
        name: 'reserved',
        regexp: /(?<reserved>(document|console))/g,
      },
      {
        name: 'string',
        regexp: /(?<string>('|`).+('|`))/g,
      },
      {
        name: 'comment',
        regexp: /(?<comment>\/\/(\s+)?.+)/g,
      }
    ];

    let newText = text;

    regexps.forEach(({name, regexp}) => {
      const span = `<span part="js-example__${name}">$<${name}></span>`;

      newText = newText.replace(regexp, span);
    });

    return newText;
  }

  /** 
   * Renders the element.
   */
  async _render () {
    const text = await this._getText();
    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');

    preElement.setAttribute('part', 'js-example__pre');
    codeElement.setAttribute('part', 'js-example__code');

    const exampleWithHighlighting = this._syntaxHighlighting(text);
    codeElement.innerHTML = exampleWithHighlighting;

    preElement.append(codeElement)
    this.root.append(preElement);
  }
  
  /** 
   * It is executed when connecting the element to the document.
   */
  connectedCallback () {
    this._render();

    super.connectedCallback();
  }

  /** 
   * Gets the content of the example.
   * @returns {Promise<String>}
   */
  async _getText () {
    return new Promise((res) => {
      setTimeout(() => res(this.textContent.trim()), 50);
    });
  }
};

customElements.define('js-example', JSExample);
