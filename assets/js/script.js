const homeEl = document.querySelector('#homeDisplay');
const displayEl = document.querySelector('#display');
const randomBtn = document.querySelector('#rand-btn');
const searchBtn = document.querySelector('#search-btn');

// Random Meal Generator 
function getRandom() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')

// Fetching response from API 
fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
});

function searchMeal() {
    fetch('www.themealdb.com/api/json/v1/1/search.php?s= VALUE')
        .then(response => response.json())
        .then(data => {

        })
}

// calls for a random meal when the page is first loaded
getRandom();


// Adding event listener for when random button is clicked

searchBtn.addEventListener('click', searchMeal);
randomBtn.addEventListener('click', getRandom);
