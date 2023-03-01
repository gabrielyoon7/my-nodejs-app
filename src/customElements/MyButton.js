class MyButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' }); // 접근 가능성 여부를 판단
    shadowRoot.innerHTML = '<button>My Button</button>';
  }
}
export default MyButton;
