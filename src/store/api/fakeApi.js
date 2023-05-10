function fakeApi(endpoint, options) {
  const delay = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "/items":
          const items = JSON.parse(localStorage.getItem("items") || "[]");
          resolve(items);
          break;
        case "/addItem":
          const newItem = options.item;
          const itemsToAdd = JSON.parse(localStorage.getItem("items") || "[]");
          itemsToAdd.push(newItem);
          localStorage.setItem("items", JSON.stringify(itemsToAdd));
          resolve(newItem);
          break;
        default:
          reject(new Error(`Invalid endpoint: ${endpoint}`));
          break;
      }
    }, delay);
  });
}

export default fakeApi;
