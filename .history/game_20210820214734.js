console.log('Study game created by Tom Oliveira, enjoy it :)');

const sprites = new Image();
sprites.src = '/sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');


function loop () {
    context.drawImage(
        sprites,
        0, 0, //Sprite X, Sprite Y
        33, 24, // Sprite crop size
        10, 50,
        33, 24,
);

    requestAnimationFrame(loop);
}

loop ();
