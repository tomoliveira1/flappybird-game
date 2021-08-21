console.log('Study game created by Tom Oliveira, enjoy it :)');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
    draw() {
        context.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, //Sprite X, Sprite Y
            flappyBird.width, flappyBird.height, // Sprite crop size
            flappyBird.x, flappyBird.y,
            flappyBird.width, flappyBird.height,
        );
    }
}

function loop() {

    flappyBird.draw()

    requestAnimationFrame(loop);    
}

loop();
