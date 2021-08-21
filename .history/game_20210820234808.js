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
            grass.sX, grass.sY, 
            grass.w, grass.h, 
            (grass.x + grass.w), grass.y,
            grass.w, grass.h,
        );
    },
};

//Background
const backGround = {
    sX: 390,
    sY: 0,
    w: 275,
    h: 204,
    x: 0,
    y: canvas.height - 204,
    draw() {
        //backgroundColor
        context.fillStyle = '#70c5ce'
        context.fillRect(0,0, canvas.width, canvas.height)

        //Drawing the FlappyBird
        context.drawImage(
            sprites,
            backGround.sX, backGround.sY, //Sprite X, Sprite Y
            backGround.w, backGround.h, // Sprite crop size
            backGround.x, backGround.y,
            backGround.w, backGround.h,
        );
        context.drawImage(
            sprites,
            backGround.sX, backGround.sY, //Sprite X, Sprite Y
            backGround.w, backGround.h, // Sprite crop size
            (backGround.x + backGround.w), backGround.y,
            backGround.w, backGround.h,
        );
    },
};

const flappyBird = {
    sX: 0,
    sY: 0,
    w: 33,
    h: 24,
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
            flappyBird.sX, flappyBird.sY, //Sprite X, Sprite Y
            flappyBird.w, flappyBird.h, // Sprite crop size
            flappyBird.x, flappyBird.y,
            flappyBird.w, flappyBird.h,
        );
    },
};

//
// Screens
//

const screens = {
    START: {
        draw() {
            getReady.draw();
        },
        refresh() {

        }
    }
};

screens.GAME = {
 draw() {
    
    backGround.draw();
    flappyBird.draw();
    grass.draw();

 },
 refresh() {
    flappyBird.refresh();
 }
};

function loop() {
    requestAnimationFrame(loop);    
}

loop();
