/* eslint-disable import/extensions */
import MyButton from './src/customElements/MyButton.js';
import MyElement from './src/customElements/MyElement.js';

console.log('실행');

customElements.define('my-element', MyElement);

// https://itnext.io/adding-state-to-custom-html-elements-639961c7c529
customElements.define('my-button', MyButton);
