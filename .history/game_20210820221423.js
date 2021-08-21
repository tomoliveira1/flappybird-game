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
        flappyBird.SpriteX, flappyBird.spriteY, //Sprite X, Sprite Y
        flappyBird.width, flappyBird.Height, // Sprite crop size
        flappyBird.x, flappyBird.y,
        flappyBird.width, flappyBird.Height,
    );

    requestAnimationFrame(loop);    
}

loop();
