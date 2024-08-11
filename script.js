// Obtén todos los elementos de las imágenes en la galería
const images = document.querySelectorAll('.gallery .preview');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// Añade un evento de clic a cada imagen
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImage.src = this.src;
        caption.textContent = this.alt;
    });
});

// Cierra el modal cuando se hace clic en el botón de cerrar
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cierra el modal cuando se hace clic fuera de la imagen ampliada
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
