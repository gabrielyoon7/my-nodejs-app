const Store = {
  value: 0,
  getValue() {
    return this.value;
  },
  setValue(newValue) {
    this.value = newValue;
  }
}
export default Store;
