export default class MyCustomEvenetElement extends HTMLElement {
  state = 'initial value';
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {
    this.addEventListener('myCustomEvent', (event) => {
      console.log(`myCustomEvent : ${event.detail.key}`);
      this.state = event.detail.key;
      this.render();
    });
  }
  render() {
    this.innerHTML = `-${this.state}-`;
  }
}
