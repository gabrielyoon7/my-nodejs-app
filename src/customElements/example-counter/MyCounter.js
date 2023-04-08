class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  render() {
    this.innerHTML = `<div>Count: ${this.state.count} (클릭하세요.)</div>`;
  }

  handleClick() {
    this.state.count++;
    this.render();
  }
}
export default MyCounter;
