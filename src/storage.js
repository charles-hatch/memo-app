//storage.js

import { updateDisplay } from "./dom";

const memos = [];
//temp storage

const lists = [];

//LISTS
export function storeList(list) {
  lists.push(list);
}

export function getLists() {
  return lists;
}

//MEMOS
export function storeMemo(memo) {
  memos.push(memo);
}

export function getMemos() {
  return memos;
}

export function deleteMemoById(id) {
  const index = memos.findIndex((m) => m.id === id);
  if (index !== -1) memos.splice(index, 1);
  updateDisplay(memos);
  console.log("After delete, our list of memos is : " + memos);
}
