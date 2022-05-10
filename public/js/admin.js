const logo = document.querySelector(".logo");
const clicking = document.querySelector("#clicking");

clicking.addEventListener("click", function () {
  logo.classList.toggle("logo-1");
});

// progress wheel

let number = document.querySelector("#number-1");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.textContent = counter + "%";
  }
}, 30);

let numberAgain = document.querySelector("#number-2");
let counterAgain = 0;
setInterval(() => {
  if (counterAgain == 65) {
    clearInterval();
  } else {
    counterAgain += 1;
    numberAgain.textContent = counter + "%";
  }
}, 30);

// Chart js

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sell increase",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#1d2231",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
