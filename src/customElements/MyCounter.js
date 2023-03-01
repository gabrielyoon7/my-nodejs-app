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
    this.innerHTML = `Count: ${this.state.count}`;
  }

  handleClick() {
    this.state.count++;
    this.render();
  }
}
export default MyCounter;
