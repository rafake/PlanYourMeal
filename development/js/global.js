var allPlansId = 0;

function Schedule(id, title, description, weekNumber) {
    this.id = id; // id planu
    this.title = title; // nazwa planu
    this.description = description; // opis planu
    this.weekNumber = weekNumber; // numer tygodnia do którego przypisany jest plan
    this.monday = []; // plan na poniedzialek
    this.tuesday = []; // plan na wtorek
    this.wednesday = []; // plan na środę
    this.thursday = []; // plan na czwartek
    this.friday = []; // plan na piątek
    this.saturday = []; // plan na sobotę
    this.sunday = []; // plan na niedzielę
}

// global variable storing plans
var allPlanns = [];

var allRecipesContainer = [];
var recipe1 = {
    title: 'jajecznica',
    recDescription: 'dobra na każde śniadanie',
    ingredients: ["jajko", "sól", "masło"],
    manual: ["umyj", "gotuj"],
};

var recipe2 = {
    title: 'kurczak z ryżem',
    recDescription: 'dobry na każdy obiad',
    ingredients: ["kurczak", "sól", "ryż"],
    manual: ["umyj", "gotuj"],
};
var recipe3 = {
    title: 'kurczak',
    recDescription: 'dobry na każdy obiad',
    ingredients: ["kurczak", "sól", "ryż"],
    manual: ["umyj", "gotuj"],
};

allRecipesContainer.push(recipe1);
allRecipesContainer.push(recipe2);
allRecipesContainer.push(recipe3);


function savePlanToLocalStorage(newObject) {

    var dataFromLocalStorage = [];
    if (null != localStorage.getItem("plan")) {
        console.dir(dataFromLocalStorage);
        dataFromLocalStorage = JSON.parse((localStorage.getItem("plan")));
        console.dir(dataFromLocalStorage);
        console.log(newObject);
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("plan", JSON.stringify(dataFromLocalStorage));
    }
    alert("Plan zapisany");
}

// asdf