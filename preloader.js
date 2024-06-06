// Create the overlay and Lottie elements
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
    z-index: 9999;
`;

// Function to create and append the Lottie player element
function createLottiePlayer() {
    const animation = document.createElement('dotlottie-player');
    animation.src = 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/kit-web-design-9lav4f/assets/zo6z05bxjair/Scene_4.json';
    animation.background = 'transparent';
    animation.speed = '1';
    animation.style.width = '300px';
    animation.style.height = '300px';
    animation.loop = true;
    animation.autoplay = true;
    overlay.appendChild(animation);
    document.body.appendChild(overlay);
}

// Add the script for the Lottie player
const script = document.createElement('script');
script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
script.type = 'module';
script.onload = createLottiePlayer; // Ensure the Lottie player is created after the script loads
document.head.appendChild(script);

// Function to hide the overlay
function hideOverlay() {
    overlay.style.display = 'none';
}

// Add an event listener to hide the overlay when all external JS files are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading external JS files
    setTimeout(hideOverlay, 2000); // Adjust the time as needed
});

// Fallback: If all external resources are loaded and the DOMContentLoaded event doesn't fire,
// we'll still hide the overlay when the window's load event is triggered.
window.addEventListener('load', hideOverlay);
