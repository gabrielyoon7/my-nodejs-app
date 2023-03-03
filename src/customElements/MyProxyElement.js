class MyProxyElement extends HTMLElement {
  constructor() {
    super();
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy
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
  connectedCallback() {
    console.log('하이');
  }
  disconnectedCallback() {
    console.log('바이');
  }

  render() {
    this.innerHTML = `Hello, world! ${this.state.value}`;
  }
}

export default MyProxyElement;
