let slideIndex1 = 0;
let slideIndex2 = 0;

showSlides(slideIndex1, 'slideshow1');
showSlides(slideIndex2, 'slideshow2');

function plusSlides(n, slideshowId) {
    if (slideshowId === 'slideshow1') {
        slideIndex1 += n;
        if (slideIndex1 >= document.querySelectorAll('#slideshow1 img').length) {
            slideIndex1 = 0;
        } else if (slideIndex1 < 0) {
            slideIndex1 = document.querySelectorAll('#slideshow1 img').length - 1;
        }
        showSlides(slideIndex1, slideshowId);
    } else if (slideshowId === 'slideshow2') {
        slideIndex2 += n;
        if (slideIndex2 >= document.querySelectorAll('#slideshow2 img').length) {
            slideIndex2 = 0;
        } else if (slideIndex2 < 0) {
            slideIndex2 = document.querySelectorAll('#slideshow2 img').length - 1;
        }
        showSlides(slideIndex2, slideshowId);
    }
}

function currentSlide(n, slideshowId) {
    if (slideshowId === 'slideshow1') {
        slideIndex1 = n;
        showSlides(slideIndex1, slideshowId);
    } else if (slideshowId === 'slideshow2') {
        slideIndex2 = n;
        showSlides(slideIndex2, slideshowId);
    }
}

function showSlides(n, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} img`);
    const dotsContainer = document.getElementById(`dot-container${slideshowId.slice(-1)}`);
    const textbox = document.getElementById(`textbox${slideshowId.slice(-1)}`);

    slides.forEach(slide => slide.style.display = "none");

    // Create dots dynamically
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(i, slideshowId));
        dotsContainer.appendChild(dot);
    }

    if (n >= slides.length) { 
        n = 0;
    }
    if (n < 0) { 
        n = slides.length - 1;
    }

    slides[n].style.display = "block";
    const dots = dotsContainer.querySelectorAll('.dot');
    dots[n].classList.add('active');

    // Update the textbox content based on the current image
    textbox.textContent = slides[n].alt;
}
