//storage.js

import { updateDisplay } from "./dom";

const lists = [];
let currentList = null;

const STORAGE_KEY = "memo-app-data";

function saveToStorage() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      lists,
      currentListId: currentList?.id ?? null,
    }),
  );
}

export function loadFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  const data = JSON.parse(raw);

  lists.length = 0;
  lists.push(...data.lists);

  currentList =
    lists.find((l) => l.id === data.currentListId) ||
    lists.find((l) => l.title === "Default") ||
    null;
  updateDisplay();
}

//LISTS
export function setCurrentList(list) {
  currentList = list;
  saveToStorage();
  updateDisplay();
}

export function storeList(list) {
  lists.push(list);
  saveToStorage();
  updateDisplay();
}

export function storeMemo(memo) {
  currentList.memos.push(memo);
  saveToStorage();
  updateDisplay();
}

export function getLists() {
  return lists;
}

export function getCurrentList() {
  return currentList;
}

//MEMOS
export function getMemos() {
  return currentList.memos;
}

export function deleteMemoById(id) {
  const index = currentList.memos.findIndex((m) => m.id === id);
  if (index !== -1) currentList.memos.splice(index, 1);
  saveToStorage();
  updateDisplay();
}

export function deleteCurrentList() {
  if (!currentList) return;

  // never delete Default
  if (currentList.title === "Default") {
    alert("You can't delete your default list.");
    return;
  }

  const index = lists.findIndex((list) => list.id === currentList.id);
  if (index === -1) return;

  lists.splice(index, 1);

  // jump back to Default
  const defaultList = lists.find((list) => list.title === "Default") || null;
  currentList = defaultList;

  saveToStorage();
  updateDisplay();
}

export function renameList(list, newTitle) {
  if (!list) return;
  if (!newTitle.trim()) return;

  list.title = newTitle;
  saveToStorage();
  updateDisplay();
}

export function deleteList(list) {
  if (!list) return;

  if (list.title === "Default") {
    alert("You can't delete the Default list.");
    return;
  }

  const index = lists.findIndex((l) => l.id === list.id);
  if (index === -1) return;

  lists.splice(index, 1);

  currentList = lists.find((l) => l.title === "Default") || null;
  saveToStorage();
  updateDisplay();
}

//current list deletion... is it redundant?
