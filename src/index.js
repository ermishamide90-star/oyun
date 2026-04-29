import { Scene } from './scene.js';
import { Controls } from './controls.js';
import { Game } from './game.js';

const container = document.body;
const scene = new Scene(container);
const controls = new Controls();
const game = new Game();

let lastTime = Date.now();

function gameLoop() {
    requestAnimationFrame(gameLoop);

    const currentTime = Date.now();
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    if (!game.isGameOver()) {
        // Oyuncu hareketini al
        const direction = controls.getMovementDirection();
        scene.movePlayer(direction, deltaTime);

        // Oyun mantığını güncelle
        game.update(scene, deltaTime);
    }

    // Sahneyi render et
    scene.render();
}

// Oyunu başlat
gameLoop();

// Pencerenin kapatılması ve yeniden boyutlandırılması
window.addEventListener('resize', () => {
    scene.onWindowResize();
});
