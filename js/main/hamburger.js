const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const back = document.getElementById("back");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  sideMenu.classList.toggle("active");
});

back.addEventListener("click", (e) => {
  e.stopPropagation();
  sideMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    sideMenu.classList.remove("active");
  }
});
