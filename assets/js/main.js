
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
