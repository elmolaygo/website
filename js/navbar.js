const showNav = document.getElementById("showNav");
const altNav = document.getElementById("altNav");
const showNavIcon = document.getElementById("showNavIcon");

showNav.addEventListener("click", () => {
    showNavIcon.classList.toggle("fa-bars");
    showNavIcon.classList.toggle("fa-xmark");
    showNav.style.rotate = showNavIcon.classList.contains("fa-xmark") ? "90deg" : "0deg";
    showNav.style.background = showNavIcon.classList.contains("fa-xmark") ? "var(--rich-black)" : "var(--aero)";
    showNavIcon.style.color = showNavIcon.classList.contains("fa-xmark") ? "var(--aero)" : "var(--rich-black)";
    altNav.classList.toggle("active");
});