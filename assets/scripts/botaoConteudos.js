const botaoConteudos = document.getElementById('botao-conteudos');
const menuConteudos = document.getElementById('menu-conteudos');

botaoConteudos?.addEventListener('click', () => {
    menuConteudos.classList.toggle('aberto');
});