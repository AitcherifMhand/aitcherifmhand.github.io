document.addEventListener("DOMContentLoaded", function () {
  const bootScreen = document.getElementById("bootScreen");
  const mainWindow = document.querySelector(".main-window");
  const bootStatus = document.getElementById("bootStatus");
  // macOS removed from themes array
  const themes = ["7", "xp", "98", "dos"]; 
  
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  
  setTimeout(() => {
    if (bootStatus) {
      bootStatus.textContent = "System Ready";
      bootStatus.style.color = "#00ff00";
    }
    bootScreen.classList.add("hidden");
    // Ensure default theme isn't jarring on mobile by defaulting to 7
    switchTheme("7"); 
    mainWindow.classList.add("visible");
  }, 3000);

  function updateCPU() {
    const cpuUsage = document.getElementById("cpuUsage");
    if (cpuUsage) {
      const randomCPU = Math.floor(Math.random() * 30) + 5; 
      cpuUsage.textContent = randomCPU;
    }
  }
  
  updateCPU();
  setInterval(updateCPU, 5000);

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

  const themeToggleBtn = document.getElementById("themeToggle");
  const themeModal = document.getElementById("themeModal");
  const themeModalBackdrop = document.getElementById("themeModalBackdrop");
  const closeThemeModalBtn = document.getElementById("closeThemeModal");
  const themeOptions = document.querySelectorAll(".theme-option");

  function openModal() {
    themeModal.style.display = "block";
    themeModalBackdrop.style.display = "block";
  }

  function closeModal() {
    themeModal.style.display = "none";
    themeModalBackdrop.style.display = "none";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      if (themeModal.style.display === "none") {
        openModal();
      } else {
        closeModal();
      }
    });
  }

  if (closeThemeModalBtn) {
    closeThemeModalBtn.addEventListener("click", closeModal);
  }

  if (themeModalBackdrop) {
    themeModalBackdrop.addEventListener("click", closeModal);
  }

  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.getAttribute("data-theme");
      switchTheme(theme);
      closeModal();
    });
  });

  const openPdfBtn = document.getElementById("openPdfBtn");
  const closePdfBtn = document.getElementById("closePdfBtn");
  const pdfModalBackdrop = document.getElementById("pdfModalBackdrop");
  const pdfIframe = document.getElementById("pdfIframe");

  const CV_PDF_URL = "cv/cv.pdf";

  if (openPdfBtn) {
    openPdfBtn.addEventListener("click", () => {
      pdfIframe.src = CV_PDF_URL;
      pdfModalBackdrop.classList.add("active");
    });
  }

  if (closePdfBtn) {
    closePdfBtn.addEventListener("click", () => {
      pdfModalBackdrop.classList.remove("active");
      pdfIframe.src = "";
    });
  }

  if (pdfModalBackdrop) {
    pdfModalBackdrop.addEventListener("click", (e) => {
      if (e.target === pdfModalBackdrop) {
        pdfModalBackdrop.classList.remove("active");
        pdfIframe.src = "";
      }
    });
  }
});

const htmlTag = document.documentElement;
const mainWindow = document.querySelector(".main-window");
const body = document.body;

let currentTheme = "7";

const themeStylesheet = document.getElementById("theme-stylesheet");
const stylesheet98 = document.getElementById("98-stylesheet");
const stylesheetDOS = document.getElementById("dos-stylesheet");

function switchTheme(theme) {
  themeStylesheet.disabled = true;
  stylesheet98.disabled = true;
  stylesheetDOS.disabled = true;

  body.classList.remove("dos-mode");
  htmlTag.classList.remove("dos-mode");

  currentTheme = theme;

  switch (theme) {
    case "xp":
      themeStylesheet.href = "https://unpkg.com/xp.css";
      themeStylesheet.disabled = false;
      mainWindow.classList.remove("glass", "active");
      break;
    case "7":
      themeStylesheet.href = "https://unpkg.com/7.css";
      themeStylesheet.disabled = false;
      mainWindow.classList.add("glass", "active");
      break;
    case "98":
      stylesheet98.disabled = false;
      mainWindow.classList.remove("glass", "active");
      break;
    case "dos":
      stylesheetDOS.disabled = false;
      body.classList.add("dos-mode");
      htmlTag.classList.add("dos-mode");
      mainWindow.classList.remove("glass", "active");
      break;
  }
}