
let menuBtn = document.querySelector(".menu-btn");
let menuLinks = document.querySelector(".links");
let showMenuBtn = document.querySelector(".show-menu");
let hideMenuBtn = document.querySelector(".hide-menu");

let menuLinkVisibility = false;

menuBtn.addEventListener('click', () => {
  if (menuLinkVisibility) {
    menuLinks.style.display = "none";
    showMenuBtn.style.display = "inline-block";
    hideMenuBtn.style.display = "none";
  }
  else {
    menuLinks.style.display = "block";
    showMenuBtn.style.display = "none";
    hideMenuBtn.style.display = "inline-block";
  }
  menuLinkVisibility = !menuLinkVisibility;
})

document.addEventListener("scroll", () => {
  menuLinks.style.display = "none";
  hideMenuBtn.style.display = "none";
  showMenuBtn.style.display = "inline-block";
  menuLinkVisibility = false;
})
