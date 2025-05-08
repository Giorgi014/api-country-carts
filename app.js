const cartContainer = document.getElementById("cart_container");
const cart = document.getElementById("cart");
const flag = document.getElementsByClassName("flag");
const country = document.getElementsByClassName("country");
const population = document.getElementsByClassName("population");
const populationNumber = document.getElementsByClassName("population_number");
const region = document.getElementsByClassName("region");
const regionName = document.getElementsByClassName("region_name");
const capital = document.getElementsByClassName("capital");
const capitalName = document.getElementsByClassName("capital_name");

// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

const getAllCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  return await res.json();
};

const renderCarts = (carts) => {
  carts.map((cartItems) => {
    const cartItem = creatCart(cartItems);

    cartContainer.appendChild(cartItem);
  });
};
const creatCart = (info) => {
  const container = document.createElement("div");
  container.classList.add("cart");
  container.innerHTML = `<div id="cart">
        <img src=${info.flags.png} alt="" class="flag">
        <h1 class="country">${info.name.common.toLocaleString()}</h1>
        <p class="population">Population: <span class="population_number">${info.population.toLocaleString()}</span></p>
        <p class="region">Region: <span class="region_name">${info.continents.toLocaleString()}</span></p>
        <p class="capital">Capital: <span class="capital_name">${info.capital.toLocaleString()}</span></p>
    </div>`


  return container;
};

const renderHtml = async () => {
  try {
    const countries = await getAllCountries();
    renderCarts(countries);
  } catch (err) {
    console.log("Error: ", err);
  }
};

renderHtml();
