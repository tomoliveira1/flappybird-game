console.log('Study game created by Tom Oliveira, enjoy it :)');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const flappyBird = {
    SpriteX: 0,
    spriteY: 0,
    Width: 33,
    Height: 24,
    x: 10,
    y: 50,
}

function loop() {
    context.drawImage(
        sprites,
        0, 0, //Sprite X, Sprite Y
        33, 24, // Sprite crop size
        10, 50,
        33, 24,
    );

    requestAnimationFrame(loop);    
}

loop();
