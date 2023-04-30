export const slideShow = {
    init : function() {
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            const slides = document.querySelectorAll(".mySlides");
            const dots = document.querySelectorAll(".dot");

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (const slide of slides) {
                slide.style.display = "none";
            }
            for (const dot of dots) {
                dot.classList.remove("active");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex - 1].classList.add("active");
        }

        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");

        prev.addEventListener("click", function() {
            plusSlides(-1);
        })
        next.addEventListener("click", function() {
            plusSlides(1);
        })

        const dots = document.querySelectorAll(".dot");
        for (let i = 0; i < dots.length; i++){
            dots[i].addEventListener("click", function() {
                currentSlide(i + 1);
            })
        }
    
    }
}