
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav ul');
    navMenu.classList.toggle('show'); // Alterna la clase "show" para mostrar u ocultar el menú
  });
  
  document.querySelectorAll('.imagen').forEach(imagen => {
    imagen.addEventListener('click', () => {
        imagen.classList.toggle('active');
    });
});