document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggle-theme");
  const icon = document.getElementById("theme-icon");

  function updateIcon(theme) {
    if (theme === "dark") {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
    } else {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
    }
  }

  btn.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    updateIcon(newTheme);
  });

  // Opcional: inicializar ícono al cargar
  const initialTheme = document.documentElement.getAttribute("data-bs-theme") || "light";
  updateIcon(initialTheme);
});
