// index.js
import "./styles.css";
import { createMemo } from "./memo.js";
import {
  getMemos,
  storeMemo,
  deleteMemoById,
  storeList,
  getLists,
  setCurrentList,
  getCurrentList,
} from "./storage.js";
import { addList } from "./lists.js";

const defaultList = addList("Default");
storeList(defaultList);
setCurrentList(defaultList);
//sets our default list for page setup

//TEST CODE BELOW
const secondList = addList("List 2!");
storeList(secondList);
//creates a second list for testing, list 2
const memo1 = createMemo(
  "Buy milk",
  "Done but I need to remember for next week..",
);
storeMemo(memo1);

const memo2 = createMemo(
  "Buy milk",
  "Not done, I love Milk so much. Dont forget!",
);
storeMemo(memo2);
console.log(getMemos());
memo1.toggleCompleted();
console.log(memo1.completed); // true
memo1.setTitle("Homework");
console.log(memo1);
// TOGGLE AND TITLE SET TEST CODE

console.log("Current list memos:", getCurrentList().memos);
console.log("Current list: ", getCurrentList().title);
console.log("Default list memos:", defaultList.memos);
console.log("List 2 list memos:", secondList.memos);

//BUTTONS
const newMemoBtn = document.getElementById("new-memo-btn");
newMemoBtn.addEventListener("click", () => {
  const title = prompt("Memo title:");
  if (!title) return;
  const description = prompt("Memo description:");
  const memo = createMemo(title, description);
  storeMemo(memo);
  console.log("Current memos = " + getCurrentList().memos);
  console.log("Current list: ", getCurrentList().title);
  console.log("Default list memos:", defaultList.memos);
  console.log("List 2 list memos:", secondList.memos);
});

const newListBtn = document.getElementById("new-list-btn");
newListBtn.addEventListener("click", () => {
  const title = prompt("New List title:");
  if (!title) return;
  const newList = addList(title);
  storeList(newList);
  console.log("New list added " + newList);
  console.log("Current list " + getLists());
});

//TO DO LIST
//Create a better "FORM" for inputting new memos/lists
//pipeline
// Add persistence (localStorage)
// Clean up module boundaries and naming
// Add basic styling and UX improvements
// Final review and small refactors, code cleanup, add comments

// import odinImage from "./img/odin.png";
// const image = document.createElement("img");
// image.src = odinImage;
// document.body.appendChild(image);
