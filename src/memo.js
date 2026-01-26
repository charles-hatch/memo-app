//memo.js

export function createMemo(title, description, dueDate) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    completed: false,
    toggleCompleted() {
      this.completed = !this.completed;
    },
    setTitle(value) {
      [this.title] = value.split(" ");
    }, //rename function
  };
} //factory function to create our memo object
