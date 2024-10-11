document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = "scale(1)";
        });
    });
});
