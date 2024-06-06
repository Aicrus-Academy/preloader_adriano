// Cria o overlay e os elementos SVG
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

const svgImage = document.createElement('img');
svgImage.id = 'svgImage';
// Substitua pelo caminho da sua nova animação JSON
svgImage.src = 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/kit-web-design-9lav4f/assets/zo6z05bxjair/Scene_4.json';
svgImage.style.cssText = `
    max-width: 100%;
    max-height: 100%;
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
svgImage.style.display = 'none';

// Adiciona os elementos ao body
document.body.appendChild(overlay);
document.body.appendChild(svgImage);

// Função para ocultar o overlay e exibir o SVG
function hideOverlay() {
    overlay.style.display = 'none';
    svgImage.style.display = 'block';
}

// Adiciona um event listener para ocultar o overlay quando todos os arquivos JS externos forem carregados
document.addEventListener('DOMContentLoaded', () => {
    // Substitua as linhas abaixo pelo código real que carrega seus arquivos JS externos
    // Para fins de demonstração, usaremos um setTimeout para simular o carregamento de arquivos JS externos.
    setTimeout(hideOverlay, 100); // Substitua pelo seu código real de carregamento.
});

// Fallback: Se todos os recursos externos forem carregados e o evento DOMContentLoaded não disparar,
// ainda ocultaremos o overlay quando o evento de carregamento da janela for acionado.
window.addEventListener('load', hideOverlay);
