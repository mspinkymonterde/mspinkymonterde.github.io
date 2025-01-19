
const openMenu = document.getElementById('open-menu');
const moreButton = document.getElementById('more-button');


moreButton.addEventListener('click', (event) => {
  
  event.preventDefault();

  openMenu.classList.toggle('open');

  openMenu.setAttribute('aria-hidden', !openMenu.classList.contains('open'));



    if (openMenu.classList.contains('open')) {
        moreButton.innerHTML = '✕';
    } else {
        moreButton.innerHTML = '•••';
    }
    
});



const navbarLinks = document.querySelectorAll('.navbar-link');
const currentHash = window.location.hash || 'index.html'; 

navbarLinks.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.querySelector('.loader').classList.add('loader--hidden');

    loader.qqerySelector('.loader').addEventListener('transitionend', () => {
        document.body.removeChild(document.querySelector('.loader'));
    });
});



// carousel
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.grid-photo');
    const items = carousel.querySelectorAll('.photo');
    const itemWidth = items[0].offsetWidth + 16; // Account for gap
    let position = 0;

    // Clone items for seamless looping
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });

    const moveCarousel = () => {
        position -= 1; // Adjust slide speed here
        if (Math.abs(position) >= items.length * itemWidth) {
            position = 0; // Reset position
        }
        carousel.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveCarousel);
    };

    carousel.style.display = "flex"; // Ensure flex display
    carousel.style.transition = "transform 0s"; // Disable default transitions
    carousel.style.willChange = "transform"; // Optimize performance

    moveCarousel();
});

