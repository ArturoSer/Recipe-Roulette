var homeEl = document.querySelector('#homeDisplay');
var displayEl = document.querySelector('#display');
var startEl = document.querySelector('#start');

// Fetching response from API 
fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
});

async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    console.log(randomMeal);

    addMeal(randomMeal, true);
}

getRandomMeal();


// Adding event listener for when random button is clicked