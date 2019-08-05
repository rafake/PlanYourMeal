document.addEventListener("DOMContentLoaded", function (e) {
    var weekNoVariable = document.querySelector(".weekNo");
    // showing the currentWeekNo
    var currentWeekNo = 24;

    weekNoVariable.innerText = `Your plan for ${currentWeekNo} week:`;
    // changing current week - bug to fix
    var buttonShowNext = document.querySelector(".next");
    var buttonShowPrevious = document.querySelector(".previous");
    buttonShowNext.addEventListener("click", function (e) {
        currentWeekNo++;
        document.location.reload();
    });
    buttonShowPrevious.addEventListener("click", function (e) {
        currentWeekNo--;
        document.location.reload();
    });



    var allPlansForWeekNo = JSON.parse(localStorage.getItem("plan"));

    allPlansForWeekNo.forEach(function (value, index) {
        if (currentWeekNo == value.weekNumber) {
            var goodWeek = allPlansForWeekNo[index];
            var breakfasts = document.querySelectorAll(".row-2 div");
            breakfasts.forEach(function (value2, index2) {
                if (index2 == 0) {
                    breakfasts[index2].innerText = goodWeek.monday[0];
                } else if (index2 == 1) {
                    breakfasts[index2].innerText = goodWeek.tuesday[0];
                } else if (index2 == 2) {
                    breakfasts[index2].innerText = goodWeek.wednesday[0];
                } else if (index2 == 3) {
                    breakfasts[index2].innerText = goodWeek.thursday[0];
                } else if (index2 == 4) {
                    breakfasts[index2].innerText = goodWeek.friday[0];
                } else if (index2 == 5) {
                    breakfasts[index2].innerText = goodWeek.saturday[0];
                } else if (index2 == 6) {
                    breakfasts[index2].innerText = goodWeek.sunday[0];
                }});
            var breakfastsSec = document.querySelectorAll(".row-3 div");
            breakfastsSec.forEach(function (value2, index2) {
                if (index2 == 0) {
                    breakfastsSec[index2].innerText = goodWeek.monday[1];
                } else if (index2 == 1) {
                    breakfastsSec[index2].innerText = goodWeek.tuesday[1];
                } else if (index2 == 2) {
                    breakfastsSec[index2].innerText = goodWeek.wednesday[1];
                } else if (index2 == 3) {
                    breakfastsSec[index2].innerText = goodWeek.thursday[1];
                } else if (index2 == 4) {
                    breakfastsSec[index2].innerText = goodWeek.friday[1];
                } else if (index2 == 5) {
                    breakfastsSec[index2].innerText = goodWeek.saturday[1];
                } else if (index2 == 6) {
                    breakfastsSec[index2].innerText = goodWeek.sunday[1];
                }
            });
            var soup = document.querySelectorAll(".row-4 div");
            soup.forEach(function (value2, index2) {
                if (index2 == 0) {
                    soup[index2].innerText = goodWeek.monday[2];
                } else if (index2 == 1) {
                    soup[index2].innerText = goodWeek.tuesday[2];
                } else if (index2 == 2) {
                    soup[index2].innerText = goodWeek.wednesday[2];
                } else if (index2 == 3) {
                    soup[index2].innerText = goodWeek.thursday[2];
                } else if (index2 == 4) {
                    soup[index2].innerText = goodWeek.friday[2];
                } else if (index2 == 5) {
                    soup[index2].innerText = goodWeek.saturday[2];
                } else if (index2 == 6) {
                    soup[index2].innerText = goodWeek.sunday[2];
                }});
            var mainCourse = document.querySelectorAll(".row-5 div");
            mainCourse.forEach(function (value2, index2) {
                if (index2 == 0) {
                    mainCourse[index2].innerText = goodWeek.monday[3];
                } else if (index2 == 1) {
                    mainCourse[index2].innerText = goodWeek.tuesday[3];
                } else if (index2 == 2) {
                    mainCourse[index2].innerText = goodWeek.wednesday[3];
                } else if (index2 == 3) {
                    mainCourse[index2].innerText = goodWeek.thursday[3];
                } else if (index2 == 4) {
                    mainCourse[index2].innerText = goodWeek.friday[3];
                } else if (index2 == 5) {
                    mainCourse[index2].innerText = goodWeek.saturday[3];
                } else if (index2 == 6) {
                    mainCourse[index2].innerText = goodWeek.sunday[3];
                }});
            var supper = document.querySelectorAll(".row-6 div");
            supper.forEach(function (value2, index2) {
                if (index2 == 0) {
                    supper[index2].innerText = goodWeek.monday[4];
                } else if (index2 == 1) {
                    supper[index2].innerText = goodWeek.tuesday[4];
                } else if (index2 == 2) {
                    supper[index2].innerText = goodWeek.wednesday[4];
                } else if (index2 == 3) {
                    supper[index2].innerText = goodWeek.thursday[4];
                } else if (index2 == 4) {
                    supper[index2].innerText = goodWeek.friday[4];
                } else if (index2 == 5) {
                    supper[index2].innerText = goodWeek.saturday[4];
                } else if (index2 == 6) {
                    supper[index2].innerText = goodWeek.sunday[4];
                }});
        }});

});

addEventListener("DOMContentLoaded", function () {
    var bodyTag = document.querySelector("body");

    var addPlan = document.querySelector(".addPlanButton");
    addPlan.addEventListener("click", function (e) {
        // creating new div and ascribing it a fullscreen class
        var newDiv = document.createElement("div");
        newDiv.classList.add("fullscreen");
        // adding a next div inside the previous one, which will be a container for all the elements
        var newDiv2 = document.createElement("div");
        newDiv2.classList.add("insideWrapper3");
        newDiv.appendChild(newDiv2);
        // adding a new div for a section with title and button
        var newDiv3 = document.createElement("div");
        var newButtOn = document.createElement("input");
        newButtOn.classList.add("close");
        newButtOn.classList.add("orangeExitButton");
        newDiv2.appendChild(newDiv3);
        newDiv3.classList.add("titleButton");
        // creating a form inside a div
        var newForm = document.createElement("form");
        newDiv2.appendChild(newForm);
        // givin the necessary parameters to the button e.g. a submit function for the form
        newForm.appendChild(newButtOn);
        newForm.classList.add("formClass");
        newDiv3.innerText = "New plan";
        newButtOn.value = "Save and close";
        newButtOn.type = "submit";

        newForm.action = "#";

        // identation elements for visual purposes
        var br1 = document.createElement("p");
        var br2 = document.createElement("p");
        var br3 = document.createElement("p");

        // input 1
        var label1 = document.createElement("label");
        var input1 = document.createElement("input");
        label1.innerText = "Plan's name";
        label1.htmlFor = "planName";
        input1.id = "planName";
        input1.type = "text";
        input1.placeholder = "Insert plan's name";
        input1.required = true;
        input1.name = "planName";
        newForm.appendChild(label1);
        label1.appendChild(input1);
        newForm.appendChild(br1);

        // input 2
        var label2 = document.createElement("label");
        var textarea = document.createElement("textarea");
        label2.innerText = "Plan's description";
        label2.htmlFor = "planDescription";
        textarea.id = "planDescription";
        textarea.name = "planDescription";
        textarea.required = true;
        textarea.type = "text";
        textarea.placeholder = "Describe main plan's assumptions";
        newForm.appendChild(label2);
        label2.appendChild(textarea);
        newForm.appendChild(br2);
        // input 3
        var label3 = document.createElement("label");
        var input3 = document.createElement("input");
        label3.innerText = "Week no";
        label3.htmlFor = "weekNoInput";
        input3.id = "weekNoInput";
        input3.type = "number";
        input3.required = true;
        input3.placeholder = "Week number.";
        input3.name = "weekNoInput";
        newForm.appendChild(label3);
        label3.appendChild(input3);
        newForm.appendChild(br3);
        // daily selector
        var label4 = document.createElement("label");
        var array = [];
        var arrayColumns = [];
        // var newSelect = [];
        var arrayMeals = [];

        var options = [];
        for (var i = 0; i < 8; i++) {
            // creating subsequent rows of the table
            array[i] = document.createElement("div");
            array[i].classList.add(`row-exp-${i}`);

            // adding the row to the form
            label4.appendChild(array[i]);
            // choosing the row into which the colums should be added
            var currentRow = label4.children[i];
            // newSelect[i] = [];
            arrayMeals[i] = [];
            for (var j = 0; j < 6; j++) {
                // adding 7 columns in row 1,2,3.. creating the element in the array with columns elements
                arrayColumns[j] = document.createElement("div");
                // giving the element the class
                arrayColumns[j].classList.add(`col-exp-${j}`);
                // adding the inner text in the row 0
                if (i == 0) {
                    if (j == 0) {
                        arrayColumns[j].innerText = "";
                    } else if (j == 1) {
                        arrayColumns[j].innerText = "breakfast";
                    } else if (j == 2) {
                        arrayColumns[j].innerText = "brunch";
                    } else if (j == 3) {
                        arrayColumns[j].innerText = "soup";
                    } else if (j == 4) {
                        arrayColumns[j].innerText = "main course";
                    } else if (j == 5) {
                        arrayColumns[j].innerText = "supper";
                    }


                } else if (j == 0) {
                    if (i == 1) {
                        arrayColumns[j].innerText = "Mon";
                    } else if (i == 2) {
                        arrayColumns[j].innerText = "Tue";
                    } else if (i == 3) {
                        arrayColumns[j].innerText = "Wed";
                    } else if (i == 4) {
                        arrayColumns[j].innerText = "Thu";
                    } else if (i == 5) {
                        arrayColumns[j].innerText = "Fri";
                    } else if (i == 6) {
                        arrayColumns[j].innerText = "Sat";
                    } else if (i == 7) {
                        arrayColumns[j].innerText = "Sun";
                    }
                } else {

                    var newSelect = document.createElement("select");
                    arrayColumns[j].appendChild(newSelect);
                    // adding options from the allRecipesContainer object
                    for (var k = 0; k < allRecipesContainer.length; k++) {
                        options[k] = document.createElement("option");
                        options[k].value = k;
                        options[k].innerText = allRecipesContainer[k].title;
                        newSelect.appendChild(options[k]);
                    }

                }

                // adding column to row
                currentRow.appendChild(arrayColumns[j]);

                newForm.appendChild(label4);
            }
        }
        console.dir(textarea);

        bodyTag.appendChild(newDiv);

        newButtOn.addEventListener("click", function (e) {
            e.preventDefault();
            // allPlannsId++;
            // creating a variable storing the plan to be saved in localStorage
            var newPlan2 = new Schedule(1,input1.value,textarea.value,input3.value);
            newPlan2.monday = [];
            // bug to fix
            // var a = input1.value;
            // var b = textarea.value;
            // if (a.length > 50) {
            //     alert("Nazwa planu jest zbyt długa")
            // }
            // if (b.length > 360) {
            //     alert("Opis planu jest zbyt długi")
            // }
            // if ((Number(input3.value) > 52) OR (Number(input3.value) < 1)) {
            //     alert("Zły numer tygodnia")
            // }

            // getting the chosen meals for Monday into the newPlan object
            var mondayMeals = document.querySelectorAll(".row-exp-1 select");
            for (var i = 0; i < mondayMeals.length; i++) {
                newPlan2.monday.push(mondayMeals[i][mondayMeals[i].value].innerText);
            }
            // getting the chosen meals for Tuesday into the newPlan object
            newPlan2.tuesday = [];
            var tuesdayMeals = document.querySelectorAll(".row-exp-2 select");
            for (var i = 0; i < tuesdayMeals.length; i++) {
                newPlan2.tuesday.push(tuesdayMeals[i][tuesdayMeals[i].value].innerText);
            }
            // getting the chosen meals for Wednesday into the newPlan object
            newPlan2.wednesday = [];
            var wednesdayMeals = document.querySelectorAll(".row-exp-3 select");
            for (var i = 0; i < wednesdayMeals.length; i++) {
                newPlan2.wednesday.push(wednesdayMeals[i][wednesdayMeals[i].value].innerText);
            }
            // getting the chosen meals for Thursday into the newPlan object
            newPlan2.thursday = [];
            var thursdayMeals = document.querySelectorAll(".row-exp-4 select");
            for (var i = 0; i < thursdayMeals.length; i++) {
                newPlan2.thursday.push(thursdayMeals[i][thursdayMeals[i].value].innerText);
            }
            // getting the chosen meals for Friday into the newPlan object
            newPlan2.friday = [];
            var fridayMeals = document.querySelectorAll(".row-exp-5 select");
            for (var i = 0; i < fridayMeals.length; i++) {
                newPlan2.friday.push(fridayMeals[i][fridayMeals[i].value].innerText);
            }
            // getting the chosen meals for Saturday into the newPlan object
            newPlan2.saturday = [];
            var saturdayMeals = document.querySelectorAll(".row-exp-6 select");
            for (var i = 0; i < saturdayMeals.length; i++) {
                newPlan2.saturday.push(saturdayMeals[i][saturdayMeals[i].value].innerText);
            }
            // getting the chosen meals for Sunday into the newPlan object
            newPlan2.sunday = [];
            var sundayMeals = document.querySelectorAll(".row-exp-7 select");
            for (var i = 0; i < sundayMeals.length; i++) {
                newPlan2.sunday.push(sundayMeals[i][sundayMeals[i].value].innerText);
            }
            // saving the whole object to localStorage
            allPlanns.push(newPlan2);

            savePlanToLocalStorage(newPlan2);
            // closing the pop up addPlan window
            bodyTag.removeChild(newDiv);
            document.location.reload();
        })
    });
});
var myInput = document.getElementById('name');
var myButton = document.querySelector('#rederButton');
var userName = document.querySelector('.userName');


myButton.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('name', myInput.value);
    console.log(localStorage.getItem('name'));
    userName.innerText =  localStorage.getItem('name');
});

