const btnAumentar = document.getElementById('aumentar-fonte');
const btnDiminuir = document.getElementById('diminuir-fonte');
const btnReset = document.getElementById('resetar-acessibilidade');

// Carrega a preferência salva ou define o padrão 1.0
let savedFontSize = localStorage.getItem('fontSize');
let currentFontSize = savedFontSize ? parseFloat(savedFontSize) : 1.0;

// Aplica o tamanho salvo imediatamente ao carregar a página
document.documentElement.style.setProperty('--tamanho-fonte-base', `${currentFontSize}rem`);

btnAumentar?.addEventListener('click', () => {
    currentFontSize = parseFloat((currentFontSize + 0.1).toFixed(1));
    atualizarFonte();
});

btnDiminuir?.addEventListener('click', () => {
    if (currentFontSize > 0.8) {
        currentFontSize = parseFloat((currentFontSize - 0.1).toFixed(1));
        atualizarFonte();
    }
});

btnReset?.addEventListener('click', () => {
    currentFontSize = 1.0;
    atualizarFonte();
});

function atualizarFonte() {
    document.documentElement.style.setProperty('--tamanho-fonte-base', `${currentFontSize}rem`);
    localStorage.setItem('fontSize', currentFontSize);
}