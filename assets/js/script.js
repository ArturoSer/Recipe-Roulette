const homeEl = document.getElementById("#homeDisplay");
const displayEl = document.getElementById("#display");
const startEl = document.getElementById("#start");
const randomBtn = document.querySelector("#rand-btn");
const searchBtn = document.querySelector("#search-btn");
const mealName = mealDisplay.querySelector('.mealName')
const mealArea = mealDisplay.querySelector('.meal__area')
const mealImg = mealDisplay.querySelector('.meal__img')
const mealIngredients = mealDisplay.querySelector('.meal__ingredients')
const mealInstructions = mealDisplay.querySelector('.meal__instructions')


const getMeal = meal => {
  const ingredients = []
  // Get ingredients
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      // Stops when complete
      break;
    }
  }

  mealName.innerText = meal.strMeal
  mealArea.innerText = meal.strArea
  mealImg.src = meal.strMealThumb
  mealImg.alt = meal.strMeal
  let ingredientLists = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')
  mealIngredients.innerHTML = ingredientLists
  mealInstructions.innerText = meal.strInstructions
}

// Fetching response from API
function randomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then(data => {
        getMeal(data.meals[0]);
        console.log(data.meals[0]);
      })
}

function searchMeal() {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s= VALUE")
    .then((res) => res.json())
    .then(data => {
      getMeal(data.meals[0])
    })
}

// calls for a random meal when the page is first loaded
randomMeal();

// Adding event listener for when random button is clicked

searchBtn.addEventListener("click", searchMeal);
randomBtn.addEventListener("click", randomMeal);