const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const newIngredients = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const newIngredient = document.createElement('li');
  newIngredient.textContent = ingredient;
  newIngredient.className = 'item';
  newIngredients.appendChild(newIngredient);
});
