document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });

  const langBtn = document.getElementById("langToggle");
  const htmlTag = document.documentElement;

  langBtn.addEventListener("click", () => {
    if (htmlTag.getAttribute("lang") === "fr") {
      htmlTag.setAttribute("lang", "en");
    } else {
      htmlTag.setAttribute("lang", "fr");
    }
  });
});
const themeToggleBtn = document.getElementById("themeToggle");
const themeStyle = document.getElementById("theme-stylesheet");
const mainWindow = document.querySelector(".window");

themeToggleBtn.addEventListener("click", () => {
  if (themeStyle.href.includes("xp.css")) {
    themeStyle.href = "https://unpkg.com/7.css";
    themeToggleBtn.textContent = "Win XP";
    mainWindow.classList.add("glass", "active");
  } else {
    themeStyle.href = "https://unpkg.com/xp.css";
    themeToggleBtn.textContent = "Win 7";
    mainWindow.classList.remove("glass", "active");
  }
});
