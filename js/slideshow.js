let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.image-container img');
    const dotsContainer = document.querySelector('.dot-container');

    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    slides.forEach(slide => slide.style.display = "none");

    // Create dots dynamically
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(i));
        dotsContainer.appendChild(dot);
    }

    slides[slideIndex].style.display = "block";
    const dots = document.querySelectorAll('.dot');
    dots[slideIndex].classList.add('active');
}