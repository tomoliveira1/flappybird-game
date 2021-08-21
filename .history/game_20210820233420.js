console.log('Study game created by Tom Oliveira, enjoy it :)');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//get ready
const getReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h: 152,
    x: (canvas.width / 2) - 172 / 2,
    y: 50,
    draw() {
        context.drawImage(
            sprites,
            getReady.sX, getReady.sY, 
            getReady.w, getReady.h, 
            getReady.x, getReady.y,
            getReady.w, getReady.h,
        );
    },
};

//floor
const grass = {
    sX: 0,
    sY: 610,
    w: 224,
    h: 112,
    x: 0,
    y: canvas.height - 112,
    draw() {
        context.drawImage(
            sprites,
            grass.sX, grass.sY, 
            grass.w, grass.h, 
            grass.x, grass.y,
            grass.w, grass.h,
        );

        context.drawImage(
            sprites,
            grass.spriteX, grass.spriteY, 
            grass.width, grass.height, 
            (grass.x + grass.width), grass.y,
            grass.width, grass.height,
        );
    },
};

//Background
const backGround = {
    spriteX: 390,
    spriteY: 0,
    width: 275,
    height: 204,
    x: 0,
    y: canvas.height - 204,
    draw() {
        //backgroundColor
        context.fillStyle = '#70c5ce'
        context.fillRect(0,0, canvas.width, canvas.height)

        //Drawing the FlappyBird
        context.drawImage(
            sprites,
            backGround.spriteX, backGround.spriteY, //Sprite X, Sprite Y
            backGround.width, backGround.height, // Sprite crop size
            backGround.x, backGround.y,
            backGround.width, backGround.height,
        );
        context.drawImage(
            sprites,
            backGround.spriteX, backGround.spriteY, //Sprite X, Sprite Y
            backGround.width, backGround.height, // Sprite crop size
            (backGround.x + backGround.width), backGround.y,
            backGround.width, backGround.height,
        );
    },
};

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
    speed: 0,
    gravity: 0.25,
    refresh() {
        flappyBird.speed = flappyBird.speed + flappyBird.gravity;
        flappyBird.y = flappyBird.y + flappyBird.speed;
    },

    draw() {
        //Drawing the FlappyBird
        context.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, //Sprite X, Sprite Y
            flappyBird.width, flappyBird.height, // Sprite crop size
            flappyBird.x, flappyBird.y,
            flappyBird.width, flappyBird.height,
        );
    },
};

function loop() {
    
    flappyBird.refresh();
    backGround.draw();
    flappyBird.draw();
    grass.draw();

    requestAnimationFrame(loop);    
}

loop();
