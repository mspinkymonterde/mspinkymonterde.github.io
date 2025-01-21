document.getElementById('fileInput').addEventListener('change', function () {
    const fileName = this.files[0]?.name || "No file selected";
    alert(`Selected File: ${fileName}`);
});


document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        // Display success or error in the popup
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popupMessage');

        if (result.status === 'success') {
            popupMessage.innerHTML = `
                <strong>Message Sent Successfully!</strong><br>
                Name: ${result.data.name}<br>
                Email: ${result.data.email}<br>
                Message: ${result.data.message}<br>
                Attachment: ${result.data.attachment || 'No attachment'}
            `;
        } else {
            popupMessage.innerHTML = `
                <strong>Error!</strong> ${result.message}
            `;
        }

        // Show the popup
        popup.classList.remove('hidden');

    } catch (error) {
        alert('An unexpected error occurred. Please try again later.');
        console.error(error);
    }
});

// Close popup functionality
document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
});
