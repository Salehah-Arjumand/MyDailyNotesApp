console.log("✅ script.js is loaded");

// document.addEventListener("DOMContentLoaded", () => {
//     // const toggleBtn = document.getElementById("toggleViewBtn");
//     const cardView = document.getElementById("notesContainer");
//     const tableView = document.getElementById("notesTable");

//     if (toggleBtn && cardView && tableView) {
//         toggleBtn.addEventListener("click", () => {
//             const cardVisible = !cardView.classList.contains("hidden");

//             if (cardVisible) {
//                 cardView.classList.add("hidden");
//                 tableView.classList.remove("hidden");
//             } else {
//                 tableView.classList.add("hidden");
//                 cardView.classList.remove("hidden");
//             }
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Set initial label based on current mode
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "☀️ Light Mode";
  } else {
    darkModeToggle.textContent = "🌙 Dark Mode";
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update the button label based on new mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "☀️ Light Mode";
    } else {
      darkModeToggle.textContent = "🌙 Dark Mode";
    }
  });
});


// Toggle Edit Form
function toggleEditForm(noteId) {
  const form = document.getElementById(`edit-form-${noteId}`);
  if (!form) return;

  document.querySelectorAll("form[id^='edit-form-']").forEach(f => {
    if (f !== form) f.style.display = "none";
  });

  form.style.display = form.style.display === "none" ? "block" : "none";
}
