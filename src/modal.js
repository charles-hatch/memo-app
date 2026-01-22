//modal.js

const overlay = document.getElementById("modal-overlay");
const titleEl = document.getElementById("modal-title");
const inputEl = document.getElementById("modal-input");
const cancelBtn = document.getElementById("modal-cancel");
const confirmBtn = document.getElementById("modal-confirm");

let onConfirm = null;

export function openModal({
  title,
  placeholder = "",
  value = "",
  showInput = true,
  onSubmit,
}) {
  titleEl.textContent = title;
  onConfirm = onSubmit;

  inputEl.hidden = !showInput;

  if (showInput) {
    inputEl.placeholder = placeholder;
    inputEl.value = value;
  } else {
    inputEl.value = "";
  }

  overlay.hidden = false;
  overlay.focus(); // ✅ required for keyboard events

  if (showInput) {
    inputEl.focus(); // optional: input gets focus instead
  }
}

function closeModal() {
  overlay.hidden = true;
  inputEl.value = "";
  onConfirm = null;
}

cancelBtn.addEventListener("click", closeModal);

confirmBtn.addEventListener("click", () => {
  if (!onConfirm) return;
  onConfirm(inputEl.value);
  closeModal();
});

overlay.addEventListener("keydown", (e) => {
  if (overlay.hidden) return;

  if (e.key === "Escape") {
    closeModal();
  }

  if (e.key === "Enter") {
    confirmBtn.click();
  }
});
