class MyElement extends HTMLElement {
  constructor() {
    super();
    const myAttribute = this.getAttribute('my-attribute');
    console.log(myAttribute); // prints the value of the 'my-attribute' attribute
    this.innerHTML = 'Hello, world!';
  }

  connectedCallback() {
    console.log('MyElement was inserted into the document');
  }

  static get observedAttributes() {
    return ['my-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
  }
}

export default MyElement;
