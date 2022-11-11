const savedList = document.getElementById("saved");
const homeDisplay = document.getElementById("homeDisplay");

window.addEventListener("DOMContentLoaded" , () => {
    addListItemtoCard();
});

function addListItemtoCard() {
    const data = localStorage.getItem("saved");
    const meal = JSON.parse(data);
if (meal==null) {
    return;
}
    if (meal.length == 0) {
        emptyListTag = document.createElement("div");
        emptyListTag.id = "save_null";
        emptyListTag.innerHTML = `<h1>Choose to Save Food</h1>`;
        savedList.remove();
        homeDisplay.append(emptyListTag);
    }
    

    meal.forEach((element) => {
        const listItem = document.createElement("li");
        listItem.className = "liked-card";
        listItem.style.backgroundImage = `url(${element["strMealThumb"]})`;
        listItem.innerHTML = `<div class="liked-container">
        <div class="content">
        <button class="btn" onclick = "deletefromStorage)${element["idMeal"]}"> Remove from Likes</button></div>
        </div>
        <div class ="info-container">
        <h2 class ="title">
        ${element["strMeal"]} </h2>
        <p class="sub-title">${element["strCategory"]} </p>
        <div class ="ingredients-container">
        <div class="box info">
        <svg class="icon" style="width: 25px; height: 25px viewBox="0 0 25 25">
        <p><a href= "javascript:void(0)" data-id =${element["idMeal"]} id="desc-btn" onClick= "fetchById(${element["idMeal"]})">View Ingredients</a></p>
        </div> `;
        savedList.append(listItem);
    });
}

function getSaved() {
    let saved = [];
    const isPresent = localStorage.getItem("saved");
    if (isPresent) {
        saved = JSON.parse(isPresent);
    }
    return saved;
}

function deletefromStorage(id) {
    console.log(id);
    const saved = getSaved();
    let res;
    saved.forEach((elem) => {
        if (elem["idMeal"] == id) {
            console.log();
            res = saved.index0f(elem);
            console.log(res);
        }
    });
    if (res != -1) {
        b = saved.splice(res, 1);
        localStorage.setItem("saved", JSON.stringify(saved));
    }
    location.reload();
}

const fetchById = (id) => {
    url = "https://www.themealdb.com/api/json/v1/1/random.php?i=" + id;
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network Not Responding");
}
    })
    .then((data) => {
        obj = data;
        setToLocal(obj);
    })
    .catch((error) => {
        console.error("Get Error Response:", error);
    });
};

function setToLocal(obj) {
    const a = obj.meals;
    localStorage.setItem("mealsDesc", JSON.stringify(a[0]));
    window.location.href = "./saved-recipes.html";
}