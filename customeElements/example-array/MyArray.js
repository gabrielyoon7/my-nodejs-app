class MyArray extends HTMLElement {
  constructor() {
    super();
    this.state = { items: [] };
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul>
        ${this.state.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <button id="add-btn">아이템 추가</button>
      <button id="remove-btn">마지막 아이템 제거</button>
    `;
    this.addEvents();
  }

  addEvents() {
    this.querySelector('#add-btn').addEventListener('click', this.handleAddClick.bind(this));
    this.querySelector('#remove-btn').addEventListener('click', this.handleRemoveClick.bind(this));
  }

  handleAddClick() {
    this.state.items.push(`아이템 : ${this.state.items.length + 1}`);
    this.render();
  }

  handleRemoveClick() {
    this.state.items.pop();
    this.render();
  }
}
export default MyArray;
