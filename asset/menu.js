
let menuBtn = document.querySelector(".menu-btn");
let menuLinks = document.querySelector(".links");

let menuLinkVisibility = false;

menuBtn.addEventListener('click', () => {
  if (menuLinkVisibility) {
    menuLinks.style.display = "none";
  }
  else {
    menuLinks.style.display = "block";
  }
  menuLinkVisibility = !menuLinkVisibility;
})

document.addEventListener("scroll", () => {
  menuLinks.style.display = "none";
  menuLinkVisibility = false;
})
