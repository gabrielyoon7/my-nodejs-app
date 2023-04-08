class MyElement extends HTMLElement {
  state = { value: 'init value' };

  constructor() {
    super();
    this.render();
  }

  setState(newObejct) {
    this.state = newObejct;
  }

  render() {
    this.innerHTML = `현재 상태는? : ${this.state.value}`;
  }
}

export default MyElement;
