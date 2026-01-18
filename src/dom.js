//dom.js
import { deleteMemoById } from "./storage.js";

const container = document.getElementById("memo-container");

export function updateDisplay(memos) {
  container.innerHTML = "";

  memos.forEach((memoData) => {
    const memoCard = document.createElement("p");

    const memoTitle = document.createElement("p");
    memoTitle.textContent = memoData.title;

    const memoDescription = document.createElement("p");
    memoDescription.textContent = memoData.description;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      console.log("Clicked delete on memo ID " + memoData.id);
      deleteMemoById(memoData.id);
    });

    const label = document.createElement("label");
    label.textContent = "Done";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = memoData.completed;
    checkbox.addEventListener("change", () => {
      memoData.toggleCompleted(); // <-- THIS IS THE KEY
      console.log(memoData.completed);
    });

    label.prepend(checkbox);

    memoCard.append(memoTitle, memoDescription, deleteBtn, label);
    memoCard.classList.add("memo-card");

    container.append(memoCard);
  });
}
