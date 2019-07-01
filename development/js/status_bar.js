// clickable status info on desktop view
var exitInfo1 = document.querySelector(".info-1 .fas.fa-times-circle");
exitInfo1.addEventListener("click", function () {
    var info1Status = document.querySelector(".info-1");
    info1Status.classList.add("hidden-button");
});
var exitInfo2 = document.querySelector(".info-2 .fas.fa-times-circle");
var info2Status = document.querySelector(".info-2");

info2Status.classList.add("hidden-button");
if (JSON.parse(localStorage.getItem("plan")).length == 0) {
    info2Status.classList.toggle("hidden-button");
}

exitInfo2.addEventListener("click", function () {
    info2Status.classList.add("hidden-button");
});


var exitInfo3 = document.querySelector(".info-3 .fas.fa-times-circle");
exitInfo3.addEventListener("click", function () {
    var info1Status = document.querySelector(".info-3");
    info1Status.classList.add("hidden-button");
});


// asdfasd