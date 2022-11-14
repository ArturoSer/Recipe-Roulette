var homeEl = document.getElementById("#homeDisplay");
var displayEl = document.getElementById("#display");
var startEl = document.getElementById("#start");
const randomBtn = document.querySelector("#rand-btn");
const searchBtn = document.querySelector("#search-btn");

// Fetching response from API
function randomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => displayFoods(data.meals));
      console.log(data);
}

function searchMeal() {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s= VALUE")
    .then((res) => res.json())
    .then((data) => displayFoods(data.meals));
}

function displayFoods() {
  const mealName = mealDisplay.querySelector('.mealName')
  const mealArea = mealDisplay.querySelector('.meal__area')
  const mealImg = mealDisplay.querySelector('.meal__img')
  const mealIngredients = mealDisplay.querySelector('.meal__ingredients')
  const mealInstructions = mealDisplay.querySelector('.meal__instructions')

  mealName.innerText = meal.strMeal
  mealArea.innerText = meal.strArea
  mealImg.src = meal.strMealThumb
  mealImg.alt = meal.strMeal
  let ingredientLists = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')
  mealIngredients.innerHTML = ingredientLists
  mealInstructions.innerText = meal.strInstructions
}


// calls for a random meal when the page is first loaded
randomMeal();

// Adding event listener for when random button is clicked

searchBtn.addEventListener("click", searchMeal);

randomBtn.addEventListener("click", randomMeal);

