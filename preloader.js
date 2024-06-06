document.addEventListener('DOMContentLoaded', () => {
    // Verificar e remover qualquer overlay existente
    const existingOverlay = document.getElementById('loader');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Criar o overlay
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
    document.body.appendChild(overlay);

    // Criar o contêiner Lottie
    const lottieContainer = document.createElement('div');
    lottieContainer.id = 'lottieContainer';
    lottieContainer.style.cssText = `
        width: 75px;
        height: 75px;
        position: relative;
    `;
    overlay.appendChild(lottieContainer);

    // Carregar a animação Lottie
    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://aicrus.github.io/FlutterFlow_preloader/LoadAicrusComponents.json',
    });

    window.addEventListener('load', () => {
        if (overlay) {
            overlay.style.display = 'none';
        }
    });
});
