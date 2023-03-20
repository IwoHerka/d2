function toggleDarkTheme() {
  if (localStorage.getItem('dark-theme') === 'enabled') {
    localStorage.setItem('dark-theme', 'disabled');
    document.body.classList.remove("dark-theme");
  } else {
    localStorage.setItem('dark-theme', 'enabled');
    document.body.classList.add("dark-theme");
  }
}

function loadThemeFromLocalStorage() {
  if (localStorage.getItem('dark-theme') === 'enabled') {
    document.body.classList.add("dark-theme");
  }
}

document.addEventListener('DOMContentLoaded', loadThemeFromLocalStorage);