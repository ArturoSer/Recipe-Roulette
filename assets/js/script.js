var homeEl = document.getElementById("#homeDisplay");
var displayEl = document.getElementById("#display");
var startEl = document.getElementById("#start");
const randomBtn = document.querySelector("#rand-btn");
const searchBtn = document.querySelector("#search-btn");

// Fetching response from API
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((res) => res.json())
  .then((data) => displayFoods(data.meals));

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
  });
};

// Random Meal Generator
function getRandom() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);
    });
}

function searchMeal() {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s= VALUE")
    .then((response) => response.json())
    .then((data) => {});
}

//document.getElementById("start").addEventListener("click", homeEl);

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

function searchMeal() {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s= VALUE")
    .then((response) => response.json())
    .then((data) => {});
}

// calls for a random meal when the page is first loaded
getRandom();

// Adding event listener for when random button is clicked

searchBtn.addEventListener("click", searchMeal);
if(randomBtn) {
  randomBtn.addEventListener("click", getRandom);
};

