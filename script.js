const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

const addingFunc = () => {
  const task = input.value.trim();
  if(task == "") return; 

  const li = document.createElement("li");
  const deleteButton = document.createElement("button");

  li.textContent = task;
  deleteButton.textContent = "X";

  list.appendChild(li);
  li.appendChild(deleteButton);

  li.addEventListener("click", () => {
    li.classList.toggle('done');
  })

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  })

  input.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addingFunc();
});
