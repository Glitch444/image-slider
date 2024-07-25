const slides = document.querySelectorAll(".slides img");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const navButtons = document.querySelectorAll(".nav-button");

let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");

        navButtons[slideIndex].id = "currentSlide";

        intervalId = setInterval(nextSlide, 5000);
    }
}



function showSlide(index) {
    if(index >= slides.length) {
        slideIndex= 0;
    }
    else if (index < 0){
        slideIndex = slides.length -1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");


    navButtons.forEach(button => {
        button.removeAttribute("id");
    })
    navButtons[slideIndex].id = "currentSlide"
}


next.addEventListener("click", () => {
    reset();
    nextSlide();
});

prev.addEventListener("click", () => {
    reset();
    prevSlide();
});


function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


function reset() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);

}
// slide navigation
navButtons.forEach(button =>{
    button.addEventListener("click", (event) => {

        slideIndex = parseInt(event.target.dataset.imageNumber);
        
        console.log(slideIndex);

        showSlide(slideIndex);

        reset();
    })
})