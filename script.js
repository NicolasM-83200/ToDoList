const form = document.querySelector("form");

// Storage part
const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};
const getTodos = () => {
  window.localStorage.todoList
    ? (list.innerHTML = window.localStorage.todoList)
    : (list.innerHTML = `<li>Cliquez sur un Todo pour le supprimer</li>`);
};

window.addEventListener("load", getTodos());
getTodos();

// Add element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${todo.value}</li>`;
  todo.value = "";
  storeList();
});

// Remove element
list.addEventListener("click", (e) => {
  e.target.classList.contains("checked")
    ? e.target.remove()
    : e.target.classList.add("checked");
  storeList();
});
