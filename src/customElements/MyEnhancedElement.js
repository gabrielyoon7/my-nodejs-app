class MyEnhancedElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `dd`
  }

  connectedCallback() {
    console.log('MyEnhancedElement connected to the document');
  }

  disconnectedCallback() {
    console.log('MyEnhancedElement disconnected from the document');
  }

  adoptedCallback() {
    console.log('MyEnhancedElement adopted into a new document');
  }
}
export default MyEnhancedElement;