

const inputs = document.querySelectorAll('.contact-input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focus');
    });

    input.addEventListener('blur', () => {
        input.classList.remove('focus');
        if (input.value.trim() !== '') {
            input.classList.add('not-empty');
        } else {
            input.classList.remove('not-empty');
        }
    });
});
