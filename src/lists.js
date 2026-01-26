//project.js

export function addList(title) {
  return {
    id: crypto.randomUUID(),
    title,
    memos: [],
    setTitle(value) {
      [this.title] = value.split(" ");
    }, //rename function
  };
} //factory function to create our lists object
