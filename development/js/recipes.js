//Łukasz list of recipes JS
//Łukasz new recipe JS

var newRecipeContainer = document.querySelector('.add-new-recipe-container');


var instructionButton = document.querySelector(".instruction");//button instrukcji
var ingredientButton = document.querySelector(".ingredient");//button skladnikow
var saveCloseButton = document.querySelector(".saveClose");//button zapisu przepisu
var addRecipeButton = document.querySelector('.add-recipe');

var nameInput = document.querySelector("#name-recipe");//input z nazwą przepisu
var descriptionInput = document.querySelector("#description-recipe");//input z opisem przepisu
var instructionInput = document.querySelector("#instruction-txt");//input z instrukcjami
var ingredientInput = document.querySelector("#ingredient-txt");//input ze skladnikami


var instructionList = document.querySelector(".instruction-list");//lista z instrukcjami
var ingredientList = document.querySelector(".ingredient-list");//lista skladnikow

var recipeContainer = document.querySelector(".recipes-container");

var newLiElement = document.createElement('li');//nowy element listy
newLiElement.innerHTML = "<button class='edit'><i class='far fa-edit'></i></button>" + "<button class='trash'><i class='far fa-trash-alt'></i></button>";

var trashButton = document.querySelector('.trash');//button trash
var editButton = document.querySelector('.button');//button edit

// console.log(instructionButton);
// console.log(ingredientButton);
// console.log(instructionInput);
// console.log(ingredientInput);
// console.log(instructionList);
// console.log(ingredientList);

//otwieranie pola do nowego przepisu
addRecipeButton.addEventListener('click', function (e) {
    e.preventDefault();
    newRecipeContainer.style.display = 'block'//kontener z formularzem się pokazuje bo był display none
});

//wrzucanie instrukcji przepisu do tabeli poniżej
instructionButton.addEventListener('click', function (e) {
    e.preventDefault();
    newLiElement.innerHTML = instructionInput.value;//pobieram wartosc inputa  'instrukcje' do nowego elementu li
    var newEditButton = document.createElement('button');//tworze nowy button edit
    newEditButton.classList.add('edit');//klasa
    newEditButton.innerHTML = "<i class='far fa-edit'></i>";//ikonka edit
    var newTrashButton = document.createElement('button');//tworze nowy nutton trash
    newTrashButton.classList.add('trash');//klasa
    newTrashButton.innerHTML = "<i class='far fa-trash-alt'></i>";//ikonka trash

    newLiElement.appendChild(newEditButton.cloneNode(true));//dodaje edit button
    newLiElement.appendChild(newTrashButton.cloneNode(true));//dodaje trash button
    instructionList.appendChild(newLiElement.cloneNode(true));//dodaje element do listy

    var trashButton = document.querySelector('.trash');//button trash
    trashButton.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.outerHTML = "";//kiedy klikam to odpowiednie pole z listy znika
    });
});

//wrzucanie składnikow do tabeli poniżej - analogicznie jak wyzej pole instruction
ingredientButton.addEventListener('click', function (e) {
    e.preventDefault();

    newLiElement.innerHTML = ingredientInput.value;
    var newEditButton = document.createElement('button');
    newEditButton.classList.add('edit');
    newEditButton.innerHTML = "<i class='far fa-edit'></i>";
    var newTrashButton = document.createElement('button');
    newTrashButton.classList.add('trash');
    newTrashButton.innerHTML = "<i class='far fa-trash-alt'></i>";

    newLiElement.appendChild(newEditButton.cloneNode(true));
    newLiElement.appendChild(newTrashButton.cloneNode(true));
    ingredientList.appendChild(newLiElement.cloneNode(true));

    var trashButton = document.querySelector('.trash');//button trash
    trashButton.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.outerHTML = "";
    });
});

//pobieranie całości przepisu do local storage i zapis w liscie przepisów
saveCloseButton.addEventListener('click', function (e) { //klikniecie przycisku 'zapisz i wyjdz'
    e.preventDefault();

    function Recipe(id, name, description) {
        this.id = id; // id przepisu
        this.name = name; // nazwa przepisu
        this.description = description; // opis przepisu
        this.ingredients = []; // składniki przepisu
        this.instructions = []; // instrukcje przepisu
    }

    /* Metoda `.showInfo()` wyświetlająca w konsoli wszystkie informacje o przepisie */
    Recipe.prototype.showInfo = function () {
        console.warn(this.id, this.name); // wyświetl id oraz tytuł
        console.warn(this.description); // wyświetl opis
        this.ingredients.map(function (elem, i) {
            console.warn(i, elem); // wyświetl każdy element
        });
        this.instructions.map(function (elem, i) {
            console.warn(i, elem); // wyświetl każdy element
        })
    };

// przygotowanie globalnej zmiennej przechowującej wszystkie przepisy

    var recipeFromLocalStorage = localStorage.getItem("recipe");
    if (recipeFromLocalStorage) {
        var allRecipies = JSON.parse(recipeFromLocalStorage);
    } else {
         allRecipies = [];
    }

    var newRecipe = new Recipe(allRecipies.length + 1, nameInput.value, descriptionInput.value);
    allRecipies.push(newRecipe);
    // dodanie id, nazwy i opisu do allRecipes

    //wpisywanie wartosci listy skladnikow do allRecipes
    var liIngrElems = document.querySelectorAll(".ingredient-list>li");
    for (var i = 0; i < liIngrElems.length; i++) {
        newRecipe.ingredients.push(liIngrElems[i].innerText);
    }
    //wpisywanie wartosci listy instrukcji do allRecipes
    var liInstElems = document.querySelectorAll(".instruction-list>li");
    for (var k = 0; k < liInstElems.length; k++) {
        newRecipe.instructions.push(liInstElems[k].innerText);
    }

    console.clear();

    localStorage.setItem('recipe', JSON.stringify(allRecipies));

    // var newRecipeElement = document.createElement('div');
    // newRecipeElement.classList.add('recipe-sections');
    // var newPIdElement = document.createElement('p');
    // newPIdElement.classList.add('recipe-id');
    // newPIdElement.innerText = localStorage.getItem('recipe');

    function showRecipes() {
        var parseRecipes = JSON.parse(localStorage.getItem('recipe'));
        parseRecipes.forEach(function (parseRecipe) {
            var newRecipeElement = document.createElement('div');
            newRecipeElement.classList.add('recipe-sections');

            var newPIdElement = document.createElement('p');
            newPIdElement.classList.add('recipe-id');
            newPIdElement.innerHTML = parseRecipe.id;

            var newPNameElement = document.createElement('p');
            newPNameElement.classList.add('recipe-name');
            newPNameElement.innerHTML = parseRecipe.name;

            var newPDescriptionElement = document.createElement('p');
            newPDescriptionElement.classList.add('recipe-description');
            newPDescriptionElement.innerHTML = parseRecipe.description;

            var newPActionElement = document.createElement('p');
            newPActionElement.classList.add('recipe-actions');

            var newEditButton = document.createElement('button');
            newEditButton.classList.add('edit');
            newEditButton.innerHTML = "<i class='far fa-edit'></i>";

            var newTrashButton = document.createElement('button');
            newTrashButton.classList.add('trash');
            newTrashButton.innerHTML = "<i class='far fa-trash-alt'></i>";

            newPActionElement.appendChild(newEditButton.cloneNode(true));
            newPActionElement.appendChild(newTrashButton.cloneNode(true));

            newRecipeElement.appendChild(newPIdElement.cloneNode(true));
            newRecipeElement.appendChild(newPNameElement.cloneNode(true));
            newRecipeElement.appendChild(newPDescriptionElement.cloneNode(true));
            newRecipeElement.appendChild(newPActionElement.cloneNode(true));

            recipeContainer.appendChild(newRecipeElement.cloneNode(true));

        })
    }

    showRecipes();

    newRecipeContainer.style.display = 'none';
    alert('You saved a recipe!')
});


//l