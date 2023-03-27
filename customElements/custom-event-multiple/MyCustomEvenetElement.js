export default class MyCustomEvenetElement extends HTMLElement {
  player = {
    id: 0,
    name: 'Apple',
    age: 10,
  };
  constructor() {
    super();
    this.render();
  }
  connectedCallback() {
    this.addEventListener('playerEvent', (event) => {
      console.log(event.detail);
      this.player = event.detail;
      this.render();
    });
  }
  render() {
    this.innerHTML = `
    <div>${this.player.id} / ${this.player.name} / ${this.player.age}</div>
    <hr/>
    `;
  }
}
