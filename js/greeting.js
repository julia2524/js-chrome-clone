const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function printGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  printGreeting(userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

if (localStorage.getItem(USERNAME_KEY) === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  printGreeting(savedUserName);
}
