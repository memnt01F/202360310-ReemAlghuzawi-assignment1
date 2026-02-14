// ================= THEME TOGGLE =================

// Get the toggle switch element
const themeToggleBtn = document.getElementById("themeToggle");

// Retrieve saved theme preference from localStorage
const savedTheme = localStorage.getItem("theme");

// If the saved theme is "dark", apply dark mode on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// Listen for user interaction with the toggle switch
themeToggleBtn.addEventListener("click", () => {

  // Toggle the "dark" class on the body
  document.body.classList.toggle("dark");

  // Save the current theme preference to localStorage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



