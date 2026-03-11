const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");
const TODOS = "todos";
let todos = [];

function saveTodo() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}
function deleteTodo(event) {
  const selectLi = event.target.parentElement;
  event.target.parentElement.remove();
  todos = todos.filter((todo) => selectLi.id !== String(todo.id));
  saveTodo();
}
function handleTodoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";

  const todosObject = { id: Date.now(), text: newTodo };
  todos.push(todosObject);
  saveTodo();
  printTodo(todosObject);
}

function printTodo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo.text;
  li.id = todo.id;
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener("click", deleteTodo);
}
todoForm.addEventListener("submit", handleTodoSubmit);

if (localStorage.getItem(TODOS)) {
  todos = JSON.parse(localStorage.getItem(TODOS));
  todos.forEach((element) => {
    printTodo(element);
  });
}
