console.log('import 성공!');

import fakeApi from "./api/fakeApi.js";

async function getData() {
  try {
    const items = await fakeApi('/items');
    console.log(items);
  } catch (error) {
    console.error(error);
  }
}

async function addData(item) {
  try {
    const newItem = await fakeApi('/addItem', { item });
    console.log(newItem);
  } catch (error) {
    console.error(error);
  }
}

getData();

addData({ id: 1, url: '123' });
addData({ id: 2, url: '456' });
