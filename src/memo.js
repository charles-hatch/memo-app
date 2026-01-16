// greeting.js
export const greeting = "Hello, Odinite!";

let memoID = 0;

export function createMemo(title) {
  return {
    id: memoID++,
    title,
    completed: false,
    toggle() {
      this.completed = !this.completed;
    },
  };
}

export function deleteMemo(title) {
  return {};
}

// Our Basic Function to Create a To Do.
// Charlie, in the same style as our Directions game, we have functions and processes for everything.
// To Dos are created (via a function)
// And deleted.
// Or edited/updated
//Once that basic logic is done, we can create some dummy to dos.
// When that works, we need to sort them into projects.
//When that works, we need the same process for projects.
// We then need a DOM.

// Check the project guidelines to see what I have missed. And good luck.
