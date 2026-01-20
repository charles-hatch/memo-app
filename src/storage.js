//storage.js

import { updateDisplay } from "./dom";

const lists = [];

let currentList = null;

//LISTS
export function storeList(list) {
  lists.push(list);
}

export function getLists() {
  return lists;
}

export function setCurrentList(list, listTitle) {
  currentList = list;
  console.log("The Current List was changed to " + listTitle);
  updateDisplay(currentList.memos, lists);
}
export function getCurrentList(list) {
  return currentList;
}

//MEMOS
export function storeMemo(memo) {
  currentList.memos.push(memo); // correct
}

export function getMemos() {
  console.log("The Current Selected List contains" + currentList.memos);
  return currentList.memos;
}

export function deleteMemoById(id) {
  const index = currentList.memos.findIndex((m) => m.id === id);
  if (index !== -1) currentList.memos.splice(index, 1);
  updateDisplay(currentList.memos, lists);
  console.log("After delete, our list of memos is : " + currentList.memos);
}
