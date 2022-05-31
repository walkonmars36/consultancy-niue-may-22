import charactersArr from "./data/data.js";

console.log(charactersArr);

const characterContainer = document.querySelector(".character-container");
const searchInput = document.querySelector("#search");
console.log(searchInput);
const checkboxes = document.querySelectorAll(".nav__checkbox");
console.log(checkboxes);

const checkedArray = [];

console.log(characterContainer);

const createCardHTML = (array) => {
  const characterHTML = array
    .map((character) => {
      return `
<div class="character-card"> 
    <h1>${character.firstName}</h1>
    <img class="character-card--image" src=${character.imageUrl} alt="Image of ${character.firstName}">
    <h2>${character.title}</h2>
    <h3>${character.family}</h3>
</div>
          `;
    })
    .join("");

  return characterHTML;
};

const getSearchInput = (event) => {
  return event.target.value;
};

const filterBySearch = (event) => {
  const searchTerm = getSearchInput(event).toLowerCase();

  const filteredArray = charactersArr.filter((character) => {
    return character.fullName.toLowerCase().includes(searchTerm) || character.title.toLowerCase().includes(searchTerm) || character.family.toLowerCase().includes(searchTerm);
  });

  characterContainer.innerHTML = createCardHTML(filteredArray);
};

const addToCheckboxArray = (event) => {
  if (!checkedArray.includes(event.target.id)) {
    checkedArray.push(event.target.id);
  } else if (checkedArray.includes(event.target.id)) {
    const index = checkedArray.indexOf(event.target.id);
    checkedArray.splice(index, 1);
  }

  console.log(checkedArray);
};

const filterByCheckbox = (event) => {
  addToCheckboxArray(event);
  const filteredArrByCheckbox = charactersArr.filter((character) => {
    return character.family.toLowerCase().includes(checkedArray[0]) || character.family.toLowerCase().includes(checkedArray[1]) || character.family.toLowerCase().includes(checkedArray[2]) || character.family.toLowerCase().includes(checkedArray[3]);
  });

  if (checkedArray.length < 1) {
    characterContainer.innerHTML = createCardHTML(charactersArr);
  } else {
    characterContainer.innerHTML = createCardHTML(filteredArrByCheckbox);
  }
};

const characterCards = createCardHTML(charactersArr);

characterContainer.innerHTML = characterCards;

searchInput.addEventListener("input", filterBySearch);

checkboxes.forEach((checkbox) => checkbox.addEventListener("change", filterByCheckbox));
