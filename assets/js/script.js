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

const modelViewerSofa = document.querySelector("#model-viewer-sofa");
const modelViewerMeja = document.querySelector("#model-viewer-meja");
const modelViewerKursi = document.querySelector("#model-viewer-kursi");

window.switchSrcSofa = (element, name) => {
  const base_glb = "assets/img/Asset_AR/Glb/" + name;
  const base_png = "assets/img/Asset_AR/Png/" + name;
  modelViewerSofa.src = base_glb + ".glb";
  modelViewerSofa.poster = base_png + ".png";
  const slides = document.querySelectorAll(".slide1");
  
  slides.forEach((element) => {
    element.classList.remove("selected");
  });
  element.classList.add("selected"); 
  
  if (modelViewerSofa.src.match('assets/img/Asset_AR/Glb/Sofa1abu.glb')) {
    modelViewerSofa.src = "assets/img/Asset_AR/Glb/sofa2.glb"
  }
};


window.switchSrcMeja = (element, name) => {
  const base_glb = "assets/img/Asset_AR/Glb/" + name;
  const base_png = "assets/img/Asset_AR/Png/" + name;
  modelViewerMeja.src = base_glb + ".glb";
  modelViewerMeja.poster = base_png + ".png";
  const slides = document.querySelectorAll(".slide1");
  slides.forEach((element) => {
    element.classList.remove("selected");
  });
  element.classList.add("selected");
};

window.switchSrcKursi = (element, name) => {
  const base_glb = "assets/img/Asset_AR/Glb/" + name;
  const base_png = "assets/img/Asset_AR/Png/" + name;
  modelViewerKursi.src = base_glb + ".glb";
  modelViewerKursi.poster = base_png + ".png";
  const slides = document.querySelectorAll(".slide1");
  slides.forEach((element) => {
    element.classList.remove("selected");
  });
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});

// change color model
