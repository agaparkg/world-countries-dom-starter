const totalCountEl = document.getElementById("total-count");
const pageCountEl = document.getElementById("page-count");
const searchEl = document.getElementById("search");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const countriesListEl = document.querySelector(".countries");

let countries = [];
let activePage = 1;
let totalPages;
let countriesPerPage = 10;
let totalCountries;

const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    countries = data;
    totalCountries = countries.length;
    totalPages = Math.ceil(totalCountries / countriesPerPage);

    totalCountEl.innerHTML = totalCountries + " countries";
    pageCountEl.innerHTML = `Page: ${activePage}/${totalPages}`;

    const startInd = (activePage - 1) * countriesPerPage; // 0, 3, 6
    const endInd = activePage * countriesPerPage;

    const slicedCountries = countries.slice(startInd, endInd);

    displayAllCountries(slicedCountries);
  })
  .catch((error) => console.log(error));

function displayAllCountries(countries) {
  countriesListEl.innerHTML = "";

  for (let country of countries) {
    const singleCountry = `
            <div class="single-country">
                <img src="https://flagcdn.com/w320/cy.png"" alt="country flag" />
                <div><strong>Cyprus</strong></div>
                <div><b>Cap:</b></div>
                <div><b>Pop: </b> 100</div>
            </div>
        `;

    countriesListEl.innerHTML += singleCountry;
  }
}

nextBtn.addEventListener("click", () => {});

prevBtn.addEventListener("click", () => {});
