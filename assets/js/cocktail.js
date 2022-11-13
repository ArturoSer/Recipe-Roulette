const rand_btn = document.getElementById("rand_btn");
const search_btn = document.getElementById("search_btn");
let APIKey = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
if(search_btn){
search_btn.addEventListener("click", () => {
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
        createResult(res.drinks[0]);
    });
})};

window.addEventListener("DOMContentLoaded", () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
})



const createResult = (result) => {
    const ingredients = [];
    for (let i=1; i<=20; i++) {
        if(result[`strIngredient${i}`]) {
            ingredients.push(`${result[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    const newInnerHTML = `
    <div id="rowa" id="cocktail-data">
    <div id="five">
    <img src="${result.strDrinkThumb}" >
    </div>
    <div id="seven">
    <h4>${result.strDrink}</h4>
    
    <div class="likes">
    <button id="likeButton">
    <i class="fa fa-thumbs-up".</i>
    </button>
    <input type="number" id="inputLike" value="0" name="">likes</input>
    </div>
    
    <p><strong>Category:</strong>${result.strCategory}</p>
    <p><strong>Glass type:</strong>${result.strGlass}</p>
    <p><strong>Type: </strong>${result.strAlcoholic}</p>
    <h5>Ingredients:</h5>
    <ul> ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")} </ul>
    <h5> Instructions: </h5>
    <p>${result.strInstructions}</p>
    </div>
    </div>
    `;

    rand_container.innerHTML = newInnerHTML;
    let likeButton = document.querySelector("#LikeButton");
    let inputLike = document.querySelector("#inputLike");

    likeButton.addEventListener("click", () => {
        inputLike.value = parseInt(inputLike.value) + 1;
    })
}