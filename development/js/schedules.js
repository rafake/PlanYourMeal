
var allPlanns = [];
// ==================================================
// adding a plan in plans list
addEventListener("DOMContentLoaded", function () {
    var bodyTag = document.querySelector("body");

    var addPlan = document.querySelector(".addPlanButtonSmall");
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
        newDiv3.innerText = "New plan";
        newButtOn.value = "Save and close";
        newButtOn.type = "submit";

        newForm.action = "#";
        newForm.classList.add("formClass");

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
        input1.placeholder = "Put your plan's name";
        input1.required = true;
        input1.name = "planName";
        newForm.appendChild(label1);
        label1.appendChild(input1);
        newForm.appendChild(br1);

        // input 2
        var label2 = document.createElement("label");
        var textarea = document.createElement("textarea");
        label2.innerText = "Plan description";
        label2.htmlFor = "planDescription";
        textarea.id = "planDescription";
        textarea.name = "planDescription";
        textarea.required = true;
        textarea.type = "text";
        textarea.placeholder = "Main assumptions of the plan";
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

            // creating a variable storing the plan to be saved in localStorage
            var newPlan2 = new Schedule(allPlansId,input1.value,textarea.value,input3.value);
            newPlan2.monday = [];
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
            console.log(newPlan2);
            // saving the whole object to localStorage
            allPlanns.push(newPlan2);

            savePlanToLocalStorage(newPlan2);
            // closing the pop up addPlan window
            bodyTag.removeChild(newDiv);
            document.location.reload();
        })
    });
});
// ==============================================================
// generating list of plans in schedules.html
var plansFromLocalStorage = JSON.parse(localStorage.getItem("plan"));
console.log(plansFromLocalStorage);

if (null != plansFromLocalStorage.length) {
    for (var i = 0; i < plansFromLocalStorage.length; i++) {
        var divRow = document.createElement("div");
        divRow.id = `row-plan-${i}`;
        var planListParent = document.querySelector(".planList");
        planListParent.appendChild(divRow);
        for (var j = 0; j < 5; j++) {
            var newCol = document.createElement("div");
            newCol.classList.add(`column-${j}`);
            divRow.appendChild(newCol);
            if ((j == 0)) {
                var singlePlan = plansFromLocalStorage[i];
                newCol.innerText = singlePlan["id"];
            } else if (j == 1) {
                var singlePlan = plansFromLocalStorage[i];
                newCol.innerText = singlePlan["title"];
            } else if (j == 2) {
                var singlePlan = plansFromLocalStorage[i];
                newCol.innerText = singlePlan["description"];
            } else if (j == 3) {
                var singlePlan = plansFromLocalStorage[i];
                newCol.innerText = singlePlan["weekNumber"];
            } else if (j == 4) {
                var editButton = document.createElement("i");
                editButton.classList.add("fas");
                editButton.classList.add("fa-edit");
                editButton.id = `edit-${i}`;

                newCol.appendChild(editButton);
                var trashButton = document.createElement("i");
                trashButton.classList.add("fas");
                trashButton.classList.add("fa-trash-alt");
                trashButton.id = `trash-${i}`;
                newCol.appendChild(trashButton);
            }

        }
    }
}


// remove button mechanics - some bug to fix - wrong id show
var removeButton = document.querySelectorAll(`i[id*="trash"]`);
removeButton.forEach(function (value, index) {
    value.addEventListener("click", function (e) {
        var allItems = JSON.parse(localStorage.getItem("plan"));
        for (var i = 0; i < JSON.parse(localStorage.getItem("plan")).length; i++) {
            if (i == index) {
                allItems.splice(index,1);
            }
        }

        allItems = JSON.stringify(allItems);
        localStorage.setItem("plan", allItems);
        document.location.reload();
    })
});
// var currentIndex = -1;
addEventListener("DOMContentLoaded", function () {
    var bodyTag = document.querySelector("body");
// remove button mechanics - some bug to fix - wrong id show
    var allItemsToEdit = JSON.parse(localStorage.getItem("plan"));
    // for (var index = 0; index < editButton.length; index++) {

    // }
    var editButton = document.querySelectorAll(`i[id*="edit"]`);
    editButton.forEach(function (value, index) {

        currentIndex = index;
        console.log(currentIndex);
        value.addEventListener("click", function (e) {

            for (var i = 0; i < JSON.parse(localStorage.getItem("plan")).length; i++) {
                if (i == index) {
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
                    newForm.classList.add("formClass");
                    newDiv2.appendChild(newForm);
                    // givin the necessary parameters to the button e.g. a submit function for the form
                    newForm.appendChild(newButtOn);
                    newDiv3.innerText = "nowy plan";
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
                    input1.placeholder = "Fill in the plan's name.";
                    input1.value = allItemsToEdit[index].title;
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
                    textarea.value = allItemsToEdit[index].description;
                    textarea.placeholder = "Main plan's assumptions";
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
                    input3.value = allItemsToEdit[index].weekNumber;
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
                                // function findWithAttr(array, attr, value) {
                                //     for(var i = 0; i < array.length; i += 1) {
                                //         if(array[i][attr] === value) {
                                //             return i;
                                //         }
                                //     }
                                //     return -1;
                                // }

                                //     console.log(allItemsToEdit[index]);
                                //     if (i == 1) {
                                //         //var currentIndex2 = allRecipesContainer.indexOf(allItemsToEdit[index].monday[j]);
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].monday[j-1]);
                                //         console.log(currentIndex2);
                                //         // newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = allRecipesContainer[currentIndex2];
                                //         // newSelect.value = currentIndex2;
                                //         // arrayColumns[j].innerText = "poniedziałek";
                                //     } else if (i == 2) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].tuesday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].tuesday[j];
                                //         // arrayColumns[j].innerText = "wtorek";
                                //     } else if (i == 3) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].wednesday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].wednesday[j];
                                //         // arrayColumns[j].innerText = "środa";
                                //     } else if (i == 4) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].thursday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].thursday[j];
                                //         // arrayColumns[j].innerText = "czwartek";
                                //     } else if (i == 5) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].friday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].friday[j];
                                //         // arrayColumns[j].innerText = "piątek";
                                //     } else if (i == 6) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].saturday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].saturday[j];
                                //         // arrayColumns[j].innerText = "sobota";
                                //     } else if (i == 7) {
                                //         var currentIndex2 = findWithAttr(allRecipesContainer,"title",allItemsToEdit[index].sunday[j-1]);
                                //         console.log(currentIndex2)
                                //         newSelect.options.selectedIndex = currentIndex2;
                                //         newSelect.value = currentIndex2;
                                //         // newSelect.options.selectedIndex = allItemsToEdit[index].sunday[j];
                                //         // arrayColumns[j].innerText = "niedziela";
                                //     }
                                //
                                // }
                            }
                                // adding column to row
                                currentRow.appendChild(arrayColumns[j]);

                                newForm.appendChild(label4);
                            }
                        }

                        bodyTag.appendChild(newDiv);

                        newButtOn.addEventListener("click", function (e) {
                            e.preventDefault();
                            // creating a variable storing the plan to be saved in localStorage
                            var editedPlan2 = allItemsToEdit[index];
                            editedPlan2.monday = [];
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

                            editedPlan2.title = input1.value;
                            editedPlan2.description = textarea.value;
                            editedPlan2.weekNumber = input3.value;

                            // getting the chosen meals for Monday into the newPlan object
                            var mondayMeals = document.querySelectorAll(".row-exp-1 select");
                            for (var i = 0; i < mondayMeals.length; i++) {
                                //editedPlan2.monday.push(mondayMeals[i][mondayMeals[i].value].innerText);
                                editedPlan2.monday.push(mondayMeals[i][mondayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Tuesday into the newPlan object
                            editedPlan2.tuesday = [];
                            var tuesdayMeals = document.querySelectorAll(".row-exp-2 select");
                            for (var i = 0; i < tuesdayMeals.length; i++) {
                                editedPlan2.tuesday.push(tuesdayMeals[i][tuesdayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Wednesday into the newPlan object
                            editedPlan2.wednesday = [];
                            var wednesdayMeals = document.querySelectorAll(".row-exp-3 select");
                            for (var i = 0; i < wednesdayMeals.length; i++) {
                                editedPlan2.wednesday.push(wednesdayMeals[i][wednesdayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Thursday into the newPlan object
                            editedPlan2.thursday = [];
                            var thursdayMeals = document.querySelectorAll(".row-exp-4 select");
                            for (var i = 0; i < thursdayMeals.length; i++) {
                                editedPlan2.thursday.push(thursdayMeals[i][thursdayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Friday into the newPlan object
                            editedPlan2.friday = [];
                            var fridayMeals = document.querySelectorAll(".row-exp-5 select");
                            for (var i = 0; i < fridayMeals.length; i++) {
                                editedPlan2.friday.push(fridayMeals[i][fridayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Saturday into the newPlan object
                            editedPlan2.saturday = [];
                            var saturdayMeals = document.querySelectorAll(".row-exp-6 select");
                            for (var i = 0; i < saturdayMeals.length; i++) {
                                editedPlan2.saturday.push(saturdayMeals[i][saturdayMeals[i].value].innerText);
                            }
                            // getting the chosen meals for Sunday into the newPlan object
                            editedPlan2.sunday = [];
                            var sundayMeals = document.querySelectorAll(".row-exp-7 select");
                            for (var i = 0; i < sundayMeals.length; i++) {
                                editedPlan2.sunday.push(sundayMeals[i][sundayMeals[i].value].innerText);
                            }
                            // saving the whole object to localStorage
                            //allPlanns.push(editedPlan2);
                            console.log(editedPlan2);
                            allItemsToEdit[index] = editedPlan2;
                            console.log(allItemsToEdit);
                            var a = JSON.stringify(allItemsToEdit);
                            console.log(a);
                            localStorage.setItem("plan", a);
                            //savePlanToLocalStorage(editedPlan2);
                            // closing the pop up addPlan window
                            bodyTag.removeChild(newDiv);
                            // document.location.reload();
                        });
                    }


            }}
    )})});

// });

// asfd