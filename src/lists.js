//project.js

let listID = 0;

export function addList(title) {
  return {
    id: listID++,
    title,
    memos: [],
    setTitle(value) {
      [this.title] = value.split(" ");
    }, //rename function
  };
} //factory function to create our lists object
