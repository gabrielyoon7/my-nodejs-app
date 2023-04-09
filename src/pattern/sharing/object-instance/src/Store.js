export default class Store {

  static #instance;
  #value = 0;

  static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  getValue() {
    return this.#value;
  }

  setValue(newValue) {
    this.#value = newValue;
  }
}
