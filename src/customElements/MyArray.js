class MyArray extends HTMLElement {
  constructor() {
    super();
    this.state = { items: [] };
  }

  connectedCallback() {
    this.updateContent();
  }

  updateContent() {
    this.innerHTML = `
      <ul>
        ${this.state.items.map((item) => `<li>${item}</li>`).join('')}
      </ul>
      <button id="add-btn">Add Item</button>
      <button id="remove-btn">Remove Item</button>
    `;
    this.querySelector('#add-btn').addEventListener('click', this.handleAddClick.bind(this));
    this.querySelector('#remove-btn').addEventListener('click', this.handleRemoveClick.bind(this));
  }

  handleAddClick() {
    this.state.items.push(`Item ${this.state.items.length + 1}`);
    this.updateContent();
  }

  handleRemoveClick() {
    this.state.items.pop();
    this.updateContent();
  }
}
export default MyArray;
