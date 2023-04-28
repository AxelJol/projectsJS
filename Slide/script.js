const body = document.querySelector("body");
const toggle = document.querySelector(".toggle")
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};

