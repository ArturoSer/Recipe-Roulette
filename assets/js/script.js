var homeEl = document.querySelector('#homeDisplay');
var displayEl = document.querySelector('#display');
var startEl = document.querySelector('#start');

// Fetching response from API 
fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
});

// Adding event listener for when start button is clicked




