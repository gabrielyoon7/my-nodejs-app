import Store from "./Store.js";

const print = () => {
  const store = Store.getInstance();
  console.log(store.getValue());
}
export default print;

