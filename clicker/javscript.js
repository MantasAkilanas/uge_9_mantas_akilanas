let myGamePiece;
let coin;
let score = 0;
let output = document.querySelector("#output");
function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "blue", 10, 120);
    coin = new component()
    
}
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        myGameArea.context.drawImage(document.getElementById("coin"),250,100,300,200);
    }
}
function updateGameArea() {
    output.innerHTML = ""
    coin.update();
    
    output.innerHTML += `score ${score}`    

}


document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("canvas").addEventListener("click", (event) => {
        if (event.x < coin.x + coin.width &&
            event.x > coin.x &&
            event.y < coin.y + coin.height &&
            event.y > coin.y){
                score++
            }
            else{
                
            }
    });

});

startGame();