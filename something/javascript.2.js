let myGamePiece;
let enemyUnit;
let wall;
let centerx;
let centery;
let javascriptTime = new Date().getTime() / 1000;
let time = 0;
let deltaTime;


let output = document.querySelector("#output");
function startGame() {
    myGameArea.start();
    // myGamePiece = new component(30, 30, "blue", 0, 0);
    console.log(myGameArea.canvas.width);
    console.log(myGameArea.canvas.height);
    centerx = myGameArea.canvas.width / 2;
    centery = myGameArea.canvas.height / 2;
    console.log(sin(45));

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
function drawRect(x, y, size) {
    ctx = myGameArea.context;
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, size, size);
}
function updateGameArea() {
    deltaTime = (new Date().getTime() / 1000) - javascriptTime;
    javascriptTime = new Date().getTime() / 1000;
    time += deltaTime;
    // console.log(time)
    output.innerHTML = "";
    myGameArea.clear();
    // wall.update();
    // myGamePiece.update();
    let count = 20;
    let angleInterval = 360/ count;
    for (let i = 0; i <= count; i++) {
        let radius = 5 + time * 10;
        let angle = time * 180 + (angleInterval * i);
        let x = centerx + cos(angle) * radius;
        let y = centery + sin(angle) * radius;
        drawRect(x, y, 10)
    }

    // enemyUnit.update();
    // output.innerHTML += `gamepiece:${myGamePiece.x},${myGamePiece.y}<br>`
    // output.innerHTML += `wall:${wall.x},${wall.y}<br>`
}
function sin(degrees) {
    return Math.sin(degrees / 180 * Math.PI);
}
function cos(degrees) {
    return Math.cos(degrees / 180 * Math.PI);
}
startGame();