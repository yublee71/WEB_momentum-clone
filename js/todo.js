const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY);
let toDos = [];

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(showToDo);
}

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  event.target.parentElement.remove();
  toDos = toDos.filter(
    (item) => item.id !== parseInt(event.target.parentElement.id)
  );
  saveTodos();
}

function showToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function onToDoSubmit(event) {
  event.preventDefault();
  const newToDoObj = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDos.push(newToDoObj);
  showToDo(newToDoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", onToDoSubmit);
