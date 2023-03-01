/* eslint-disable import/extensions */
import MyElement from './src/customElements/MyElement.js';

console.log('실행');

customElements.define('my-element', MyElement);
