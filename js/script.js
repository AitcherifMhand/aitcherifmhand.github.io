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

    const langBtn = document.getElementById('langToggle');
    const htmlTag = document.documentElement;

    langBtn.addEventListener('click', () => {
        if (htmlTag.getAttribute('lang') === 'fr') {
            htmlTag.setAttribute('lang', 'en');
        } else {
            htmlTag.setAttribute('lang', 'fr');
        }
    });
});