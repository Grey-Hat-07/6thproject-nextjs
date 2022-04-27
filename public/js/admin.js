const logo = document.querySelector(".logo");
const clicking = document.querySelector("#clicking");

clicking.addEventListener("click", function () {
  logo.classList.toggle("logo-1");
});

// progress wheel

const number = document.querySelector("#number");
const counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHtml = counter + "%";
  }
}, 30);
