//modal.js

const overlay = document.getElementById("modal-overlay");
const titleEl = document.getElementById("modal-title");
const inputEl = document.getElementById("modal-input");
const cancelBtn = document.getElementById("modal-cancel");
const confirmBtn = document.getElementById("modal-confirm");
const textareaEl = document.getElementById("modal-textarea");
const dateEl = document.getElementById("modal-date");

let onConfirm = null;

export function openModal({
  title,
  placeholder = "",
  textareaPlaceholder = "",
  value = "",
  textareaValue = "",
  showInput = true,
  showTextarea = false,
  showDate = false,
  dateValue = "",
  onSubmit,
}) {
  titleEl.textContent = title;
  onConfirm = onSubmit;

  inputEl.hidden = !showInput;
  textareaEl.hidden = !showTextarea;

  if (showInput) {
    inputEl.placeholder = placeholder;
    inputEl.value = value;
  }

  if (showTextarea) {
    textareaEl.placeholder = textareaPlaceholder;
    textareaEl.value = textareaValue;
  } else {
    textareaEl.value = "";
  }

  dateEl.hidden = !showDate;

  if (showDate) {
    dateEl.value = dateValue;
  } else {
    dateEl.value = "";
  }

  overlay.hidden = false;
  (showInput ? inputEl : textareaEl)?.focus();
}

function closeModal() {
  overlay.hidden = true;
  inputEl.value = "";
  onConfirm = null;
}

cancelBtn.addEventListener("click", closeModal);

confirmBtn.addEventListener("click", () => {
  if (!onConfirm) return;

  onConfirm({
    title: inputEl.value,
    description: textareaEl.value,
    dueDate: dateEl.value || null,
  });

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
