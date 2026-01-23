// index.js
import "./styles.css";
import { createMemo } from "./memo.js";
import { addList } from "./lists.js";
import { openModal } from "./modal.js";
import { storeMemo, storeList, setCurrentList } from "./storage.js";

const defaultList = addList("Default");
storeList(defaultList);
setCurrentList(defaultList);
//sets our default list for page setup

// #### TESTING CODE #### //
const TEST_DUE_DATE = "2026-02-01T00:00:00.000Z";
const memo1 = createMemo(
  "Memo Example",
  "Description goes here",
  TEST_DUE_DATE,
);
storeMemo(memo1);

//BUTTONS
const newMemoBtn = document.getElementById("new-memo-btn");
newMemoBtn.addEventListener("click", () => {
  openModal({
    title: "New Memo",
    placeholder: "Enter your Memo's title... ",
    textareaPlaceholder: "Enter your Description...",
    showTextarea: true,
    showDate: true,
    onSubmit: ({ title, description }) => {
      if (!title) return;

      const memo = createMemo(title, description, null);
      storeMemo(memo);
    },
  });
});

const newListBtn = document.getElementById("new-list-btn");
newListBtn.addEventListener("click", () => {
  openModal({
    title: "New List",
    placeholder: "List name",
    onSubmit: (value) => {
      if (!value.trim()) return;
      const list = addList(value.trim());
      storeList(list);
      setCurrentList(list);
    },
  });
});

//TO DO LIST
//memo EDITING button!!!
//if the list is empty, could we make a message like
//"your list is empty, add it from below!"
// we could have a ?? button to get help or info
// edit button for memos, to pull up an input box for creation
//local storage
//Create a better "FORM" for inputting new memos/lists
//clean and fix AI and spacing
//code check
//comments and GPT r
