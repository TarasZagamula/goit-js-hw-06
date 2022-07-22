const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientCreator = ingredientArr => {
  return ingredientArr.map(ingridient => {
    const newListItem = document.createElement(`li`);
    newListItem.textContent = ingridient;
    newListItem.classList.add(ingridient);
  
    return newListItem
  }
  )
};

const listEl = document.querySelector(`#ingredients`);

listEl.append(...ingridientCreator(ingredients));
  

