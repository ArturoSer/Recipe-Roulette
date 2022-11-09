var homeEl = document.getElementById('#homeDisplay');
var displayEl = document.getElementById('#display');
var startEl = document.getElementById('#start');

// Fetching response from API 
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res=>res.json())
.then(data=> displayFoods(data.meals));

async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
}

getRandomMeal();


// Adding event listener for when random button is clicked