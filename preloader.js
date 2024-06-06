// Cria e estiliza o overlay de carregamento
const overlay = document.createElement('div');
overlay.id = 'loader';
overlay.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
`;

// Cria e estiliza o container do Lottie
const lottieContainer = document.createElement('div');
lottieContainer.id = 'lottieContainer';
lottieContainer.style.cssText = `
    width: 150px; // Ajuste o tamanho conforme necessário
    height: 150px;
`;

// Adiciona os elementos ao corpo do documento
document.body.appendChild(overlay);
overlay.appendChild(lottieContainer); // Coloca o Lottie dentro do overlay

// Função para ocultar o overlay e iniciar a animação Lottie
function hideOverlay() {
    overlay.style.display = 'none';
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg', // ou 'canvas'
        loop: true,
        autoplay: true,
        path: 'https://aicrus.github.io/FlutterFlow_preloader/LoadAicrusComponents.json', // URL do arquivo JSON do Lottie
    });
}

// Executa a função hideOverlay quando a página estiver totalmente carregada
window.addEventListener('load', hideOverlay);
