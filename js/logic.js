const nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    nav.classList.add("fixed-top", "shadow");
    nav.classList.remove("bg-primary1", "navbar-dark");
    
  } else {
    nav.classList.remove("fixed-top", "shadow");
    nav.classList.add("bg-primary1", "navbar-dark");
  }
});
