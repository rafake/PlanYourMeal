const leftSlider = document.querySelector("#leftSlider");
const rightSlider = document.querySelector("#rightSlider");
const contentSlider = document.querySelectorAll(".contentSlider div");

let carousel_index = 0;

const slide = function (operation) {
    switch (operation) {
        case "+":
            contentSlider[carousel_index].classList.remove("clearContentSlider");
            carousel_index++;
            if (carousel_index === contentSlider.length) {
                carousel_index = 0;
            }
            contentSlider[carousel_index].classList.add("clearContentSlider");
            break;
        case "-":

            contentSlider[carousel_index].classList.remove("clearContentSlider")
            carousel_index--;
            if (carousel_index < 0){
                carousel_index = contentSlider.length - 1
            }
            contentSlider[carousel_index].classList.add("clearContentSlider")
            break;
    }
};
leftSlider.addEventListener("click", function () {
    slide("-")
});
rightSlider.addEventListener("click", function () {
    slide("+")
});