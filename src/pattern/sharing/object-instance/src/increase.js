import Store from "./Store.js";

const increase = () => {
  Store.setValue(Store.getValue() + 1);
}
export default increase;

