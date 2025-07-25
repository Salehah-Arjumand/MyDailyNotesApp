document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      darkModeToggle.textContent = "🌙 Dark Mode";
    }
  });
});

function toggleEditForm(noteId) {
  const form = document.getElementById(`edit-form-${noteId}`);
  if (!form) return;

  document.querySelectorAll("form[id^='edit-form-']").forEach(f => {
    if (f !== form) f.style.display = "none";
  });

  form.style.display = form.style.display === "none" ? "block" : "none";
}
