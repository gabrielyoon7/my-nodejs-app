import Store from "./Store.js";

const increase = () => {
  const store = Store.getInstance();
  const value = store.getValue();
  store.setValue(value + 1);
}
export default increase;

