const elDarkModeBtn = document.querySelector(".js-mode-btn");
const elementsToToggleMode = document.querySelectorAll(
  ".js-navbar-mark, .js-contries-inp, .js-contries-select, .js-contries-mode"
);

let isDarkMode = false;

function toggleMode() {
  document.body.classList.toggle("bg__colors");
  elementsToToggleMode.forEach((element) => {
    element.classList.toggle("countries-color");
    element.classList.toggle("text-white");
  });
  
  isDarkMode = !isDarkMode;
}

elDarkModeBtn.addEventListener("click", toggleMode);
