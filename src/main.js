// Theme Toggle
const themeToggle = document.querySelector("#djne-theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.getAttribute("data-theme") === "light"
    ? enableDarkTheme()
    : enableLightTheme();
});

function enableDarkTheme() {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light theme");
}

function enableLightTheme() {
    document.body.setAttribute("data-theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark theme");
}

function setThemePreference() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      enableDarkTheme();
      return;
    }
    enableLightTheme();
}
  
document.onload = setThemePreference();