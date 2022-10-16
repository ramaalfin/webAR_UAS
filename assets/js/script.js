AOS.init();

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarTogglerDemo02");
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
