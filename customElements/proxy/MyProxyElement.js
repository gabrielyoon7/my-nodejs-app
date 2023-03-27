class MyProxyElement extends HTMLElement {
  constructor() {
    super();
    this.state = new Proxy({ value: 'init value' }, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        console.log('나 바뀜!')
        this.render();
        return true;
      },
    });
    this.render();
  }

  render() {
    this.innerHTML = `현재 상태는? : ${this.state.value}`;
  }
}

export default MyProxyElement;
