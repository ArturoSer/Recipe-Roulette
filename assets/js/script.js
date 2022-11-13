var homeEl = document.getElementById("#homeDisplay");
var displayEl = document.getElementById("#display");
var startEl = document.getElementById("#start");
const randomBtn = document.querySelector("#rand-btn");
const searchBtn = document.querySelector("#search-btn");

// Fetching response from API
function randomMeal () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => res.json())
        .then((data) => displayFoods(data.meals));
}

function searchMeal() {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s= VALUE")
    .then((res) => res.json())
    .then((data) => displayFoods(data.meals));
}

const displayFoods = (foods) => {
  const foodsDiv = document.createElement("food-items");

  foods.forEach((meals) => {
    const foodDiv = document.createElement("div");

    foodDiv.className = "meals";
    const foodInfo = `
        <h3>${meals.strMeal}</h3>
        `;
    foodDiv.innerHTML = foodInfo;
    foodsDiv.appendChild(foodDiv);
  })
}

function createMeal(meals) {
  const ingredients = [];
  for (i = 1; i <= 20; i++) {
    if (startEl[`strIngredients${i}`]) {
      ingredients.push(
        `${startEl[`strIngredients${i}`]} 
                -${startEl[`strMeasure$`]}`
      );
    } else {
      break;
    }
  }
}

const mealName = mealDisplay.querySelector('mealName')
const mealArea = mealDisplay.querySelector('.meal__area')
const mealImg = mealDisplay.querySelector('.meal__img')
const mealIngredients = mealDisplay.querySelector('.meal__ingredients')
const mealInstructions = mealDisplay.querySelector('.meal__instructions')
const mealVideoContainer = mealContainer.querySelector('.video-container')

mealName.innerText = meal.strMeal
mealArea.innerText = meal.strArea
mealImg.src = meal.strMealThumb
mealImg.alt = meal.strMeal
let ingredientLists = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')
mealIngredients.innerHTML = ingredientLists
mealInstructions.innerText = meal.strInstructions

// calls for a random meal when the page is first loaded
getRandom();

// Adding event listener for when random button is clicked

searchBtn.addEventListener("click", searchMeal);

if(randomBtn) {
  randomBtn.addEventListener("click", getRandom);
};
