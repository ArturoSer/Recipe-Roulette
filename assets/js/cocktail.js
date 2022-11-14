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
		</div>
	`;

	random_container.innerHTML = newInnerHTML;
	
}