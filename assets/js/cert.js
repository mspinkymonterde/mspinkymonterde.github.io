// Modal functionality
const modal = document.getElementById('certificate-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-btn');
const viewButtons = document.querySelectorAll('.view-certificate');

viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    const certificatePath = button.getAttribute('data-certificate');
    modalImage.src = certificatePath;
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const certifications = document.querySelectorAll('.certification');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    certifications.forEach(cert => {
      if (category === 'all' || cert.getAttribute('data-category') === category) {
        cert.style.display = 'flex';
      } else {
        cert.style.display = 'none';
      }
    });
  });
});