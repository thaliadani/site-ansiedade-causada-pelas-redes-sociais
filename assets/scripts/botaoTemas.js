const botaoTemas = document.getElementById('botao-temas');
const menuTemas = document.getElementById('menu-temas');

botaoTemas?.addEventListener('click', () => {
    menuTemas.classList.toggle('aberto');
});