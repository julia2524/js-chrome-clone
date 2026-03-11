const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}
function deleteTodo(event) {
  const selectLi = event.target.parentElement;
  event.target.parentElement.remove();
  todos = todos.filter((todo) => selectLi.id !== String(todo.id));
  saveTodos();
}

function printTodo(event) {
  event.preventDefault();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const newTodo = todoInput.value;
  todoInput.value = "";

  span.innerText = newTodo;

  const todosObject = {
    id: Date.now(),
    text: newTodo,
  };
  li.id = todosObject.id;
  todos.push(todosObject);
  saveTodos();
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(button);
  todoList.appendChild(li);

  button.addEventListener("click", deleteTodo);
}

todoForm.addEventListener("submit", printTodo);

if (localStorage.getItem(TODOS)) {
  console.log();
  todos = JSON.parse(localStorage.getItem(TODOS));
  todos.forEach((element) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = element.text;

    li.id = element.id;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(button);
    todoList.appendChild(li);

    button.addEventListener("click", deleteTodo);
  });
}
