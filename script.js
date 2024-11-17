// app.js
document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipeNameInput = document.getElementById('recipe-name');
    const recipeIngredientsInput = document.getElementById('recipe-ingredients');
    const recipeList = document.getElementById('recipes');
  
    const recipes = [];
  
    function addRecipe(name, ingredients) {
      const recipe = { name, ingredients };
      recipes.push(recipe);
      renderRecipes();
    }
  
    function renderRecipes() {
      recipeList.innerHTML = '';
      recipes.forEach((recipe, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <strong>${recipe.name}</strong>
          <p>${recipe.ingredients.join(', ')}</p>
          <button onclick="removeRecipe(${index})">Remove</button>
        `;
        recipeList.appendChild(listItem);
      });
    }
  
    window.removeRecipe = (index) => {
      recipes.splice(index, 1);
      renderRecipes();
    };
  
    recipeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = recipeNameInput.value.trim();
      const ingredients = recipeIngredientsInput.value.split(',').map(ing => ing.trim());
      if (name && ingredients.length > 0) {
        addRecipe(name, ingredients);
        recipeNameInput.value = '';
        recipeIngredientsInput.value = '';
      }
    });
  });
  