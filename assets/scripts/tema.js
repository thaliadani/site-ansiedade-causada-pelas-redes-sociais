const btnTema = document.getElementById('alternar-tema');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (btnTema) btnTema.innerText = '☀️';
}

btnTema?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (btnTema) {
        btnTema.innerText = isDark ? '☀️' : '🌙';
    }
});