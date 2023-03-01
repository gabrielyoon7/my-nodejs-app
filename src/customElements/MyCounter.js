class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  connectedCallback() {
    this.updateContent();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  updateContent() {
    this.textContent = `Count: ${this.state.count}`;
  }

  handleClick() {
    this.state.count++;
    this.updateContent();
  }
}
export default MyCounter;
