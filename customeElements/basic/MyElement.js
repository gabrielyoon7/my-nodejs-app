class MyElement extends HTMLElement {
  constructor() {
    super();
    this.myAttribute = this.getAttribute('my-attribute');
    this.render();
  }
  connectedCallback() {
    console.log('하이');
  }
  disconnectedCallback() {
    console.log('바이');
  }

  render() {
    this.innerHTML = `Hello, world! ${this.myAttribute}`;
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

export default MyElement;
