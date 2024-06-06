// Cria o overlay e os elementos de animação
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

// Adiciona o script do player de animação
const script = document.createElement('script');
script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
script.type = 'module';
document.head.appendChild(script);

// Cria o elemento de animação
const animation = document.createElement('dotlottie-player');
animation.src = 'https://lottie.host/embed/54a2053a-bce8-42c8-9300-aff573aa6557/pTZXBfgCVW.json';
animation.background = 'transparent';
animation.speed = '1';
animation.style.width = '300px';
animation.style.height = '300px';
animation.loop = true;
animation.autoplay = true;

// Adiciona os elementos ao body
overlay.appendChild(animation);
document.body.appendChild(overlay);

// Função para ocultar o overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Adiciona um event listener para ocultar o overlay quando todos os arquivos JS externos forem carregados
document.addEventListener('DOMContentLoaded', () => {
    // Substitua as linhas abaixo pelo código real que carrega seus arquivos JS externos
    // Para fins de demonstração, usaremos um setTimeout para simular o carregamento de arquivos JS externos.
    setTimeout(hideOverlay, 1000); // Substitua pelo seu código real de carregamento.
});

// Fallback: Se todos os recursos externos forem carregados e o evento DOMContentLoaded não disparar,
// ainda ocultaremos o overlay quando o evento de carregamento da janela for acionado.
window.addEventListener('load', hideOverlay);
