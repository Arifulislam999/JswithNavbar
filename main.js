const heder = document.querySelector("nav");
window.addEventListener("scroll", () => {
    heder.classList.toggle("sticky", window.scrollY > 0);
});