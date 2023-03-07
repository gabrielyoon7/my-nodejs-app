import { obj } from "../objects/obj.js";

class ObjButton1 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  render() {
    this.innerHTML = `Count: ${obj.num}`;
  }

  handleClick() {
    obj.increase();
    this.render();
  }
}
export default ObjButton1;
