const userForm = document.querySelector("#submitForm");
const symbolic = document.querySelector("#trans");
const spot = document.querySelector("#stuff");
// const button = document.querySelector("#btn");

const inputHandler = function (event) {
  event.preventDefault();
  let stock = symbolic.value.trim().toUpperCase();
  console.log(stock);
  getStock(stock);
};

function getStock(stock) {
  const requestUrl =
    "https://api.funtranslations.com/translate/minion.json?text=" + stock + "";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (yo) {
      console.log(yo);

      let low = document.createElement("h1");

      low.textContent = yo.contents.translated;

      low.setAttribute("style", "color: #f4dd4b");
      low.classList.add("min");

      spot.appendChild(low);

      document.querySelector("#submitForm").reset();
    });
}

userForm.addEventListener("submit", inputHandler);
