const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

const addingFunc = () => {
  const task = input.value.trim();
  if(task == "") return; 

  const li = document.createElement("li");

  li.textContent = task;

  list.appendChild(li);
  input.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addingFunc();
});
