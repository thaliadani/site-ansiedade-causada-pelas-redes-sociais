# 🧠 Ansiedade nas Redes Sociais

> Um portal interativo e educativo focado em conscientizar e oferecer estratégias para lidar com os impactos da vida digital na saúde mental.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido como uma plataforma informativa que aborda fenômenos modernos como **FOMO**, **Doomscrolling**, **Cultura do Cancelamento** e outros transtornos psicológicos intensificados pelo uso excessivo de tecnologias. O objetivo é promover um uso equilibrado da internet através de conteúdos baseados em evidências e ferramentas práticas.

## ✨ Funcionalidades Principais

* 📖 **Conteúdo Educativo:** Seções detalhadas sobre diversos temas relacionados à saúde mental e tecnologia.
* 🌓 **Modo Claro/Escuro:** Alternância de tema com persistência de dados no navegador (`localStorage`).
* 🔍 **Acessibilidade de Texto:** Botões flutuantes para aumentar, diminuir e resetar o tamanho da fonte, garantindo uma leitura confortável para todos.
* 📝 **Quiz Interativo:** Um teste de 10 perguntas com barra de progresso e sistema de revisão de erros para testar o conhecimento adquirido.
* 📱 **Design Responsivo:** Interface otimizada para dispositivos móveis, tablets e desktops seguindo a filosofia *Mobile-First*.
* 🧭 **Menu de Conteúdos Dinâmico:** Navegação rápida e animada para todas as subpages de conteúdo.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização moderna com variáveis (Custom Properties), animações e flexbox/grid.
* **JavaScript (Vanilla):** Lógica pura para manipulação de DOM, persistência de preferências e funcionamento do quiz.

## 📂 Estrutura do Projeto

```text
site/
├── index.html              # Página inicial
├── assets/
│   ├── pages/              # Páginas de conteúdo, quiz e sobre
│   │   └── conteudos/      # Páginas específicas dos conteúdos detalhados
│   ├── scripts/            # Lógica separada por funcionalidade
│   │   ├── acessibilidade.js
│   │   ├── tema.js         # Lógica para alternar entre tema claro/escuro
│   │   ├── botaoConteudos.js # Lógica para abrir/fechar o menu de conteúdos
│   │   └── quiz.js
│   └── styles/             # Arquivos de estilização CSS
│       ├── main.css
│       ├── quiz.css
│       └── reset.css
└── README.md
```

## 🔧 Como Executar

1. Clone este repositório ou baixe os arquivos.
2. Navegue até a pasta raiz.
3. Abra o arquivo `index.html` em qualquer navegador moderno.
4. **Dica:** Para uma melhor experiência de desenvolvimento, utilize a extensão "Live Server" no VS Code.

## 🎨 Acessibilidade e Experiência do Usuário (UX)

O projeto foi construído pensando no conforto visual e facilidade de uso:

* **Persistência:** Suas escolhas de tema e tamanho de fonte não são perdidas ao atualizar a página.
* **Feedback Visual:** Botões com efeitos de *hover* e animações de entrada suaves (`fadeInUp`).
* **Navegação Fluida:** Menu de temas com transições suaves de opacidade e movimento.

## 📝 Licença

Copyright © 2026 - Desenvolvido para fins educativos.

---
*Lembre-se: As informações aqui contidas não substituem o acompanhamento de profissionais de saúde mental.* 💚

---

### Contribuições

Feedbacks e sugestões de novos temas são sempre bem-vindos!

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua funcionalidade (`git checkout -b feature/NovaFuncionalidade`).
3. Faça o **Commit** das suas alterações (`git commit -m 'Adicionando nova funcionalidade'`).
4. Faça o **Push** para a Branch (`git push origin feature/NovaFuncionalidade`).
5. Abra um **Pull Request**.
