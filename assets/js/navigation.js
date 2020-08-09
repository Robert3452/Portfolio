document.querySelector('.btn-menu').addEventListener('click', () => {
    document.querySelector('.navbar__right').classList.toggle("toggle");
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        document.querySelector(".header").classList.add("fixed-nav")
    } else {
        document.querySelector(".header").classList.remove("fixed-nav")
    }
})