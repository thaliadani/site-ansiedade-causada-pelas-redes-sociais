const botaoTemas = document.getElementById('botao-temas');
const menuTemas = document.getElementById('menu-temas');

botaoTemas.addEventListener('click', () => {
    if (menuTemas.style.display === 'block') {
        menuTemas.style.display = 'none';
    } else {
        menuTemas.style.display = 'block';
    }
});