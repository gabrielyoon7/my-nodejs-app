/* eslint-disable import/extensions */
import MyButton from './src/customElements/MyButton.js';
import MyElement from './src/customElements/MyElement.js';
import MyCounter from './src/customElements/MyCounter.js';
import MyArray from './src/customElements/MyArray.js';
import MyProxyElement from './src/customElements/MyProxyElement.js';

console.log('실행');

customElements.define('my-element', MyElement);

// https://itnext.io/adding-state-to-custom-html-elements-639961c7c529
customElements.define('my-button', MyButton);

customElements.define('my-counter', MyCounter);
customElements.define('my-array', MyArray);

class Light extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    this.innerHTML = `Hello, world! ${this.myAttribute}`;
  }
  connectedCallback() {
    console.log('하이');
  }
  disconnectedCallback() {
    console.log('바이');
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name}가 ${oldValue}에서 ${newValue}으로 바뀌었군요!`);
    this.myAttribute = newValue;
    this.render();
  }
}

customElements.define('light-1', Light);


customElements.define('my-proxy', MyProxyElement);
