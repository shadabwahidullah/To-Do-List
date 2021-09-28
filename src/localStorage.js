const list = JSON.parse(localStorage.getItem('list')) || [];
const insert = document.getElementById('insert');
const listItems = document.querySelector('.list-items');
function ToDo(descreption, completed, index) {
  this.descreption = descreption;
  this.completed = completed;
  this.index = index;
}

function addToDo() {
  const newAdd = new ToDo();
  newAdd.descreption = document.getElementById('insert').value;
  list.push(newAdd);
  localStorage.setItem('list', JSON.stringify(list));
}

function pushContent() {
  listItems.innerHTML = '';
  insert.value = '';
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
    const listItem = document.createElement('li');
    const check = document.createElement('div');
    check.className = 'check';
    const input = document.createElement('input');
    input.type = 'checkbox';
    const descreption = document.createElement('span');
    descreption.className = 'descreption';
    descreption.innerHTML = list[i].descreption;
    const icon1 = document.createElement('i');
    icon1.className = 'fas fa-ellipsis-v';
    const icon2 = document.createElement('i');
    icon2.className = 'fa fa-trash';
    check.appendChild(input);
    check.appendChild(descreption);
    listItem.appendChild(check);
    listItem.appendChild(icon1);
    listItem.appendChild(icon2);
    listItems.appendChild(listItem);
  }
  localStorage.setItem('list', JSON.stringify(list));
}

document.querySelector('.insert').addEventListener('submit', (e) => {
  e.preventDefault();
  addToDo();
  pushContent();
});
