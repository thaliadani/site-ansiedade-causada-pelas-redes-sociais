const perguntas = [
    {
        pergunta: "O que significa a sigla FOMO?",
        opcoes: ["Focar apenas no meu objetivo", "Medo de ficar de fora (Fear of Missing Out)", "Frequência de objetos muito otimizados", "Fim de muitas opiniões"],
        correta: 1
    },
    {
        pergunta: "O que caracteriza o 'Doomscrolling'?",
        opcoes: ["Ler apenas notícias positivas", "Passar horas consumindo notícias negativas sem parar", "Bloquear pessoas que discordam de você", "Seguir influenciadores de viagem"],
        correta: 1
    },
    {
        pergunta: "Como a 'Comparação Social' afeta a saúde mental?",
        opcoes: ["Melhora a autoestima", "Gera uma percepção distorcida de que a vida alheia é perfeita", "Ajuda a focar nos próprios problemas", "Não possui impacto relevante"],
        correta: 1
    },
    {
        pergunta: "O que é a 'Síndrome do Toque Fantasma'?",
        opcoes: ["Medo de fantasmas na internet", "Achar que o celular vibrou ou tocou sem que tenha acontecido", "Sentir que alguém está te observando pela webcam", "Esquecer a senha de todas as redes"],
        correta: 1
    },
    {
        pergunta: "Qual o efeito da luz azul das telas no sono?",
        opcoes: ["Ajuda a dormir mais rápido", "Não interfere no organismo", "Inibe a produção de melatonina, dificultando o sono", "Melhora a qualidade dos sonhos"],
        correta: 2
    },
    {
        pergunta: "A 'Cultura do Cancelamento' costuma gerar qual sentimento no usuário?",
        opcoes: ["Sensação de segurança", "Medo do julgamento e exclusão", "Desejo de postar mais opiniões", "Indiferença total"],
        correta: 1
    },
    {
        pergunta: "Qual é uma forma saudável de lidar com as redes sociais?",
        opcoes: ["Usar o celular 24 horas por dia", "Desativar todas as notificações e nunca mais usar", "Estabelecer limites de tempo e filtrar conteúdos que fazem mal", "Seguir o máximo de pessoas possível"],
        correta: 2
    },
    {
        pergunta: "O que contribui para a 'Distorção da Realidade' nas redes?",
        opcoes: ["O uso excessivo de filtros e a curadoria apenas de momentos felizes", "A falta de conexão com a internet", "Postar apenas fotos sem edição", "Ler livros físicos"],
        correta: 0
    },
    {
        pergunta: "A sobrecarga de informação pode levar a:",
        opcoes: ["Melhor capacidade de foco", "Sentimento de exaustão mental e ansiedade", "Aumento da inteligência imediata", "Paz de espírito"],
        correta: 1
    },
    {
        pergunta: "Qual o objetivo de uma 'relação equilibrada' com a tecnologia?",
        opcoes: ["Substituir a vida real pela virtual", "Usar a tecnologia como ferramenta, sem que ela domine suas emoções", "Ignorar as inovações tecnológicas", "Aumentar o número de seguidores"],
        correta: 1
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostasUsuario = [];

const containerPergunta = document.getElementById('pergunta-container');
const textoPergunta = document.getElementById('pergunta-texto');
const containerOpcoes = document.getElementById('opcoes-container');
const containerResultado = document.getElementById('resultado-container');
const textoResultado = document.getElementById('resultado-texto');
const btnIniciar = document.getElementById('botao-iniciar');
const btnRevisar = document.getElementById('botao-revisar');
const descricaoQuiz = document.getElementById('descricao-quiz');
const containerQuiz = document.getElementById('quiz-container');
const progressoContainer = document.getElementById('progresso-container');
const barraProgresso = document.getElementById('barra-progresso');

btnIniciar.addEventListener('click', iniciarQuiz);
btnRevisar.addEventListener('click', mostrarRevisao);

function iniciarQuiz() {
    btnIniciar.style.display = 'none';
    descricaoQuiz.style.display = 'none';
    progressoContainer.style.display = 'block';
    containerPergunta.style.display = 'block';
    mostrarPergunta();
}

function mostrarPergunta() {
    const q = perguntas[perguntaAtual];
    const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = `${progresso}%`;

    textoPergunta.innerText = `${perguntaAtual + 1}. ${q.pergunta}`;
    containerOpcoes.innerHTML = '';
    
    q.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.innerText = opcao;
        botao.classList.add('botao-opcao');
        botao.addEventListener('click', () => selecionarResposta(index));
        containerOpcoes.appendChild(botao);
    });
}

function selecionarResposta(index) {
    respostasUsuario.push(index);
    if (index === perguntas[perguntaAtual].correta) pontuacao++;
    
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    progressoContainer.style.display = 'none';
    containerPergunta.style.display = 'none';
    containerResultado.style.display = 'block';
    textoResultado.innerText = `Você acertou ${pontuacao} de ${perguntas.length} questões!`;
}

function mostrarRevisao() {
    containerQuiz.style.display = 'none';
    document.getElementById('revisao-container').style.display = 'block';
    const lista = document.getElementById('lista-revisao');
    lista.innerHTML = perguntas.map((q, i) => `
        <div class="item-revisao">
            <p><strong>${i + 1}. ${q.pergunta}</strong></p>
            <p>Sua resposta: <span class="${respostasUsuario[i] === q.correta ? 'correto' : 'errado'}">${q.opcoes[respostasUsuario[i]]}</span></p>
            ${respostasUsuario[i] !== q.correta ? `<p>Resposta correta: <span class="correto">${q.opcoes[q.correta]}</span></p>` : ''}
        </div>
    `).join('<hr>');
}