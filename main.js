function getElement(selector, parent = document) {
    return parent.querySelector(selector);
}

const pokemonCards = [
    {
        id: 1,
        title: "test",
        img: "./images/pokemon.png",
        categories: ["grass", "poison"],
        weight: "8.9kg",
        age: 5,
    },
    {
        id: 2,
        title: "Pokemons",

        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s",

        categories: ["grass", "poison", "nimadir"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 3,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 4,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 5,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 6,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 7,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison"],
        weight: "6.9kg",
        age: 99,
    },
    {
        id: 8,
        title: "Pokemons",

        img: "./images/pokemon.png",

        categories: ["grass", "poison", "test"],
        weight: "6.9kg",
        age: 99,
    },
];

const categories = ["grass", "poison", "nimadir", "test"];
const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");
const template = document.querySelector("template");

const elCategories = getElement("#categories-list");
const elSearchInput = getElement("#search");
const elSubmitBtn = getElement("#submit-btn");

const heartIcon = getElement("#heart");
const mainDrawer = getElement(".main-drawer");
const drawer = getElement(".drawer");

const closeIcon = getElement("#close");

heartIcon.addEventListener("click", () => {
    mainDrawer.style.display = "block";
    drawer.style.transform = "translateX(0)";
});
closeIcon.addEventListener("click", () => {
    mainDrawer.style.display = "none";
    drawer.style.transform = "translateX(100%)";
});

elSubmitBtn.addEventListener("click", () => {
    if (elSearchInput.value.length > 0) {
        const filteredArray = pokemonCards.filter((item) => item.title.toLowerCase().includes(elSearchInput.value.toLowerCase()));

        displayPokemonCard(filteredArray);
    } else {
        displayPokemonCard(pokemonCards);
    }
});

window.addEventListener("DOMContentLoaded", function () {
    displayPokemonCard(pokemonCards);

    categories.forEach((category) => {
        const newOption = document.createElement("option");
        newOption.value = category;
        newOption.textContent = category;

        elCategories.appendChild(newOption);
    });
});

elCategories.addEventListener("change", () => {
    console.log(elCategories.value);
    const filteredArray = pokemonCards.filter((obyekti) => obyekti.categories.includes(elCategories.value));

    displayPokemonCard(filteredArray);
});

function displayPokemonCard(menuItems) {
    sectionEl.textContent = null;

    let displayPokemonCard = menuItems.map((item) => {
        const newElement = template.content.cloneNode(true);

        const topImg = getElement(".card-img-top", newElement);
        const title = getElement(".card-title", newElement);
        const weight = getElement(".card-weight", newElement);
        const age = getElement(".card-age", newElement);
        const categories = getElement(".categories", newElement);

        topImg.src = item.img;
        title.textContent = item.title;
        weight.textContent = item.weight;
        age.textContent = item.age;

        item.categories.map((category, i) => {
            const newLi = document.createElement("li");
            const span = document.createElement("span");

            if (item.categories.length - 1 !== i) {
                span.textContent = ", ";
            }

            newLi.textContent = category;

            categories.appendChild(newLi);
            categories.appendChild(span);
        });

        sectionEl.appendChild(newElement);
    });
}
