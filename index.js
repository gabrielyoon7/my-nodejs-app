console.log('실행');

// class MyElement extends HTMLElement {
//   constructor() {
//     super();
//     this.innerHTML = 'Hello, world!';
//   }
//   connectedCallback() {
//     console.log('MyElement was inserted into the document');
//   }

//   static get observedAttributes() {
//     return ['my-attribute'];
//   }

//   attributeChangedCallback(name, oldValue, newValue) {
//     console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
//   }
// }
// customElements.define('my-element', MyElement);


class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('my-element', MyElement);