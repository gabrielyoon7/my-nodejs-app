/* eslint-disable import/extensions */
import MyButton from './src/customElements/MyButton.js';
import MyElement from './src/customElements/MyElement.js';
import ObjButton1 from './src/customElements/ObjButton1.js';
import ObjButton2 from './src/customElements/ObjButton2.js';
import MyCustomElement from './src/customElements/ObserverProxyPattern.js';
import MyEnhancedElement from './src/customElements/MyEnhancedElement.js';

console.log('실행');

customElements.define('my-element', MyElement);

// https://itnext.io/adding-state-to-custom-html-elements-639961c7c529
customElements.define('my-button', MyButton);

customElements.define('obj-button1', ObjButton1);
customElements.define('obj-button2', ObjButton2);


customElements.define('my-enhanced-element', MyEnhancedElement);
