

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



// Select the button and file input
const btnUpload = document.querySelector('.btn-upload');
const fileInput = document.querySelector('.file-upload');

// Trigger the file input when the button is clicked
document.getElementById('uploadTrigger').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});
