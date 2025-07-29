const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

const addingFunc = () => {
  const task = input.value.trim();
  if (task == "") return;

  const li = document.createElement("li");
  li.classList.add("task-item");

  const content = document.createElement("div");
  content.classList.add("task-content");

  const tickIcon = document.createElement("img");
  tickIcon.src = "img/dry-clean.png";
  tickIcon.className = "tickIcon";

  const taskText = document.createElement("span");
  taskText.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<img src="img/close.png" alt="Delete" class="deleteIcon" />`;

  content.appendChild(tickIcon);
  content.appendChild(taskText);

  li.appendChild(content);
  li.appendChild(deleteButton);
  list.appendChild(li);

   li.addEventListener("click", () => {
    li.classList.toggle("done");

    tickIcon.src = li.classList.contains("done") ? "img/checked.png" : "img/dry-clean.png";
  });

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });

  input.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addingFunc();
});
