console.log('import 성공!');
const template = document.getElementById('template');
const container = document.getElementById('list');

function addItem() {
  let count = 0;
  return () => {
    const newComponent = template.content.cloneNode(true);
    newComponent.querySelector('.component').id = `item${count++}`;
    newComponent.querySelector('.text').innerText = `아이템 ${count}`;
    container.appendChild(newComponent);
  }
}

function deleteItem(button) {
  container.removeChild(button.parentNode);
}

const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addItem());

// 이벤트 버블링으로 리스너 수를 줄임
container.addEventListener('click', event => {
  // 클릭 이벤트가 버튼일 때에만 삭제 요청
  if (event.target.classList.contains('delete-button')) {
    deleteItem(event.target);
  }
});
