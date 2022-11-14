const random = document.getElementById('get_random');
const random_container = document.getElementById('random');
random.addEventListener('click', () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createRandom(res.drinks[0]);
	});
});

document.addEventListener("DOMContentLoaded", () => {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

})



const createRandom = (random) => {
	const ingredients = [];
	for(let i=1; i<=20; i++) {
		if(random[`strIngredient${i}`]) {
			ingredients.push(`${random[`strIngredient${i}`]} - ${random[`strMeasure${i}`]}`)
		} else {
			break;
		}
	}
	
	const newInnerHTML = `
		<div id="rowa" id="cocktail-dataa">
			<div id="five">
				<img src="${random.strDrinkThumb}" >
            </div>
            <div id="seven">
               <h4>${random.strDrink}</h4>
			   <div class="hearts">
			   <button id="heartBtn">
			   <i class ="fa fa-solid fa-heart"></i></button>
			   <input type="number" id="inputHeart" value="0" name=""></input>
			   </div>
			   <div class="container">
			   <button class="clipboard">
			   <i class="fas fa-share"></i></button>
			 	<p><strong>Category:</strong> ${random.strCategory}</p>
				<p><strong>Glass type:</strong> ${random.strGlass}</p>
				<p><strong>Type:</strong> ${random.strAlcoholic}</p>
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
                <h5>Instructions:</h5>
				<p>${random.strInstructions}</p>
				
			</div>
	`;


	random_container.innerHTML = newInnerHTML;

	const clipboard = document.querySelector(".clipboard");
	clipboard.onclick = () => {
		navigator.clipboard.writeText(window.location.href);
	}	
	
	let heartbtn = document.querySelector('#heartBtn');
	let inputHeart = document.querySelector("#inputHeart");

	heartbtn.addEventListener("click", function() {
		if(count < 24) {
			count++;
			localStorage.setItem("count", count);
		}
		inputHeart.value = parseInt(inputHeart.value) + 1;
	});


var count = localStorage.getItem("count");



	
	
}