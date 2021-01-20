let mealList = document.querySelector("#meal");
let menuDetailContent = document.querySelector(".menu-detail__content");
$(document).ready(function () {
  $(".search-btn").click(function () {
    let seacrhInputText = document.querySelector("#search-inputs").value.trim();
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${seacrhInputText}`
    )
      .then((response) => response.json())
       .then((data) => {
         console.log(data)
          let htmlElement = "";
            if (data.meals) {
              data.meals.forEach((meal) => {
                htmlElement += `
                                <div class="meals__item" data-id="${meal.idMeal}">
                                    <div class="meals__img">
                                        <img
                                            src="${meal.strMealThumb}"
                                            alt="food-img"
                                            class="meals__img-potato"
                                        />
                                    </div>
                                    <div class="meals__name">
                                        <h3>${meal.strMeal}</h3>
                                        <a href="#" class="recipe-btn">Get Recipe</a>
                                    </div>
                            </div>
                        `;
              });
              mealList.classList.remove("not-found");
            } else {
              htmlElement = `Sorry we dont have that meal!`;
              mealList.classList.add("not-found");
            }
            mealList.innerHTML = htmlElement;
       }) 
  });
  $(".meals").click((e) => {
    e.preventDefault();
    if (e.target.classList.contains("recipe-btn")) {
      let mealItem = e.target.parentElement.parentElement;
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
      )
        .then((res) => res.json())
        .then((dataItem) => mealRecipeModal(dataItem.meals));
    }
  });
  function mealRecipeModal(meal) {
    meal = meal[0];
    console.log(meal)
    let htmlE = `
      <h2 class="menu-detail__title">${meal.strMeal}</h2>
      <p class="menu-detail__category">${meal.strCategory}</p>
      <div class="menu-detail__instruction">
        <h3 class="menu-detail__instruction__title">Instructions:</h3>
        <p class="menu-detail__instruction__desc">
          ${meal.strInstructions}
        </p>
        <div class="menu-detail__img">
          <img
            src="${meal.strMealThumb}"
            alt="food-recipe"
          />
        </div>
        <div class="menu-detail__link">
          <a href="${meal.strYoutube}">watch video</a>
        </div>
      </div>
    `;
    menuDetailContent.innerHTML = htmlE;
    $(".menu-detail__content")
      .parent()
      .hide(0)
      .show(0)
      .addClass("show-recipe");
  }
  $(".menu-detail__button--close").click(function (e) {
    $(".menu-detail").fadeOut(500, () => {
      $(".menu-detail").css({
        transform: "translate(0,-50%)",
        right: "-50%",
      });
    });
  });
});
