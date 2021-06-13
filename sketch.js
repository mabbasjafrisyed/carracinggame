var database;
var playerCount = 0;
var gameState;
var form, player, game;

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);

    //connects to the database
    database = firebase.database();
    game = new Game();
    console.log(gameState);
    game.getState();
    console.log(gameState);
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.update(1);
    }

    if(gameState ===1){
        game.play();
    }
}

