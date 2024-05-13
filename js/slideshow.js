let slideIndex1 = 0; // Initialize slide index for slideshow1
let slideIndex2 = 0; // Initialize slide index for slideshow2

// Show initial slides for both slideshows
showSlides(slideIndex1, 'slideshow1');
showSlides(slideIndex2, 'slideshow2');

// Function to navigate slides
function plusSlides(n, slideshowId) {
    if (slideshowId === 'slideshow1') {
        slideIndex1 += n;
        // Loop back to the first slide if at the end
        if (slideIndex1 >= document.querySelectorAll('#slideshow1 img').length) {
            slideIndex1 = 0;
        } else if (slideIndex1 < 0) { // Loop back to the last slide if at the beginning
            slideIndex1 = document.querySelectorAll('#slideshow1 img').length - 1;
        }
        showSlides(slideIndex1, slideshowId);
    } else if (slideshowId === 'slideshow2') {
        slideIndex2 += n;
        // Loop back to the first slide if at the end
        if (slideIndex2 >= document.querySelectorAll('#slideshow2 img').length) {
            slideIndex2 = 0;
        } else if (slideIndex2 < 0) { // Loop back to the last slide if at the beginning
            slideIndex2 = document.querySelectorAll('#slideshow2 img').length - 1;
        }
        showSlides(slideIndex2, slideshowId);
    }
}

// Function to navigate to a specific slide
function currentSlide(n, slideshowId) {
    if (slideshowId === 'slideshow1') {
        slideIndex1 = n;
        showSlides(slideIndex1, slideshowId);
    } else if (slideshowId === 'slideshow2') {
        slideIndex2 = n;
        showSlides(slideIndex2, slideshowId);
    }
}

// Function to display slides
function showSlides(n, slideshowId) {
    const slides = document.querySelectorAll(`#${slideshowId} img`);
    const dotsContainer = document.getElementById(`dot-container${slideshowId.slice(-1)}`);
    const textbox = document.getElementById(`textbox${slideshowId.slice(-1)}`);

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Create dots dynamically
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => currentSlide(i, slideshowId));
        dotsContainer.appendChild(dot);
    }

    // Ensure slide index stays within bounds
    if (n >= slides.length) { 
        n = 0;
    }
    if (n < 0) { 
        n = slides.length - 1;
    }

    // Display current slide and update active dot
    slides[n].style.display = "block";
    const dots = dotsContainer.querySelectorAll('.dot');
    dots[n].classList.add('active');

    // Update the textbox content based on the current image
    textbox.textContent = slides[n].alt;
}
