const btnAumentar = document.getElementById('aumentar-fonte');
const btnDiminuir = document.getElementById('diminuir-fonte');
let currentFontSize = 1.0;

btnAumentar?.addEventListener('click', () => {
    currentFontSize += 0.1;
    document.documentElement.style.setProperty('--tamanho-fonte-base', `${currentFontSize}rem`);
});

btnDiminuir?.addEventListener('click', () => {
    if (currentFontSize > 0.8) {
        currentFontSize -= 0.1;
        document.documentElement.style.setProperty('--tamanho-fonte-base', `${currentFontSize}rem`);
    }
});