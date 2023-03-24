export default class MyCustomEvenetElement extends HTMLElement {
  connectedCallback() {
    this.addEventListener('myCustomEvent', (event) => {
      console.log(`myCustomEvent : ${event.detail.key}`);
    });
    this.innerHTML = `--MyCustomEvenetElement--`;
  }
}
