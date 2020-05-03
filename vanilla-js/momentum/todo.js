const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'todos';
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  // const cleanToDos = toDos.filter(function (toDo) {
  //   return toDo.id !== li.id;
  // });
  // toDos = cleanToDos;
  for (i = 0; i < toDos.length; i++) {
    if (toDos[i].id == li.id) {
      toDos.splice(i, 1);
      break;
    }
  }
  saveToDos();
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = toDos.length;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newID;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: li.id
  };
  toDos.push(toDoObj);
}



function loadToDos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos) {
    const parsedToDos = JSON.parse(loadedTodos);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
    saveToDos();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
  saveToDos();
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();