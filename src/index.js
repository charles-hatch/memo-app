// index.js
import "./styles.css";

// src/index.js
import { createMemo } from "./memo.js";
import { getMemos, storeMemo, deleteMemoById } from "./storage.js";
import { updateDisplay } from "./dom.js";

// create

const memo1 = createMemo("Buy milk", "Done.");
storeMemo(memo1);
//basic flow

const memo2 = createMemo("Buy milk", "Not done");
storeMemo(memo2);

console.log(getMemos());
memo1.toggleCompleted();
console.log(memo1.completed); // true
memo1.setTitle("Test");
console.log(memo1);
// TOGGLE AND TITLE SET TEST CODE

const memoState = getMemos(); //return current array
updateDisplay(memoState);
console.log(memoState);

const newMemoBtn = document.getElementById("new-memo-btn");
newMemoBtn.addEventListener("click", () => {
  const title = prompt("Memo title:");
  if (!title) return;
  const description = prompt("Memo description:");
  const memo0 = createMemo(title, description);
  storeMemo(memo0);
  updateDisplay(memoState);
  console.log("Current memos = " + memoState);
});

//add memo btn

//to do list
// figure out the checkbox
//

//pipeline
// Build minimal DOM rendering (list memos, toggle, delete)

// Wire DOM events through index.js only

// Add project support (projects contain memo lists)

// Refactor storage to support multiple lists

// Add persistence (localStorage)

// Clean up module boundaries and naming

// Add basic styling and UX improvements

// Final review and small refactors

// import odinImage from "./img/odin.png";
// const image = document.createElement("img");
// image.src = odinImage;
// document.body.appendChild(image);
