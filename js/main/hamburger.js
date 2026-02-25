const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

hamburger.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && !hamburger.contains(e.target)) {
    sideMenu.classList.remove("active");
  }
});
