function sliderPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    // for(const slide of slides) {
    //     slide.addEventListener("click", () => {
    //         clearActiveClasses();

    //         slide.classList.add("active");
    //     });
    // }

    // function clearActiveClasses() {
    //     slides.forEach((slide) => {
    //         slide.classList.remove("active");
    //     });
    // }

    slides.forEach(slide => {
        slide.addEventListener("click", () => {
            slides.forEach(slid => {
                slid.classList.remove("active");
            })
            slide.classList.add("active");
        });
    });
}

sliderPlugin(3);