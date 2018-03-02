let myGamePiece;
let enemyUnit;
let wall;
let keysPressed = [];
let output = document.querySelector("#output");
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "blue", 10, 120);
    enemyUnit = new component(50, 50, "red", 100, 100);
    wall = new component(10, 50, "green", 200, 150);
}
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function updateGameArea() {
    output.innerHTML = "";
    myGameArea.clear();
    if (!enemyColision()) {
        movement();
    }
    else {

    }

    wall.update();
    myGamePiece.update();
    enemyUnit.update();
    output.innerHTML += `gamepiece:${myGamePiece.x},${myGamePiece.y}<br>`
    output.innerHTML += `wall:${wall.x},${wall.y}<br>`
    output.innerHTML += `buttons clicked ${keysPressed}`
}

document.addEventListener("keydown", (event) => {
    if (keysPressed.indexOf(event.key) == -1) {
        keysPressed.push(event.key)
    }
})
document.addEventListener("keyup", (event) => {
    keysPressed.splice(keysPressed.indexOf(event.key), 1);
})
function movement() {
    keysPressed.forEach((element) => {
        if (element == "ArrowRight" && myGamePiece.x < myGameArea.canvas.width - myGamePiece.width) {
            myGamePiece.x += 2;
            wallColision();
        }
        if (element == "ArrowLeft" && myGamePiece.x > 0) {
            myGamePiece.x -= 2;
            wallColision();
        }
        if (element == "ArrowDown" && myGamePiece.y < myGameArea.canvas.height - myGamePiece.height) {
            myGamePiece.y += 2;
            wallColision();
        }
        if (element == "ArrowUp" && myGamePiece.y > 0) {
            myGamePiece.y -= 2;
            wallColision();
        }
    })
}
function enemyColision() {
    if (myGamePiece.x < enemyUnit.x + enemyUnit.width &&
        myGamePiece.x + myGamePiece.width > enemyUnit.x &&
        myGamePiece.y < enemyUnit.y + enemyUnit.height &&
        myGamePiece.y + myGamePiece.height > enemyUnit.y
    ) {
        return true;
    }
    else {
        return false;
    }
}
function wallColision() {
    if (myGamePiece.x < wall.x + wall.width &&
        myGamePiece.x + myGamePiece.width > wall.x &&
        myGamePiece.y < wall.y + wall.height &&
        myGamePiece.y + myGamePiece.height > wall.y
    ) {
        if (myGamePiece.x < wall.x + wall.width && keysPressed.indexOf("ArrowLeft") != -1) {
            myGamePiece.x += 2;
        }
        else if ( myGamePiece.x + myGamePiece.width > wall.x && keysPressed.indexOf("ArrowRight") != -1) {
            myGamePiece.x -= 2;
        }
        if( myGamePiece.y < wall.y + wall.height && keysPressed.indexOf("ArrowDown") != -1){
            myGamePiece.y -=2;
        }
        else if (  myGamePiece.y < wall.y + wall.height && keysPressed.indexOf("ArrowUp") != -1) {
            myGamePiece.y += 2;
        }

    }

}
startGame();