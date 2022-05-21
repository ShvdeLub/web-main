const gameBoard = document.getElementById("gameboard")
const context = gameBoard.getContext("2d")
const scoretext = document.getElementById("score")
const resetButton = document.getElementById("resetButton")
const gameWidht = gameBoard.width
const gameHeight = gameBoard.height
const boardBackground = "white"
const snakeBorder = "black"
const foodColor = "red"
const snakeColor = "green"
const unitSize = 25
let running = false
let xVelocity = unitSize
let yvelocity = 0
let xFood = 0
let yFood = 0
let score = 0
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
]

window.addEventListener("keydown", changeDirection)
resetButton.addEventListener("click", resetGame)

gameStart()

function gameStart() {
    running = true
    scoretext.textContent = score
    createFood()
    drawFood()
    nextTick()
}

function nextTick() {
    if(running){
        setTimeout(() => {
            clearBoard()
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, 75);
    }
    else {
        displayGameOver()    }
}

function clearBoard() {
    context.fillStyle = boardBackground
    context.fillRect(0, 0, gameWidht, gameHeight)
}

function createFood() {
    function randomFood(min, max) {
        const randNumber = Math.round((Math.random()*(max - min)+min) / unitSize) * unitSize  
        return randNumber
    }
    foodX = randomFood(0, gameWidht - unitSize)
    foodY = randomFood(0, gameHeight - unitSize)
    console.log(foodX)
    console.log(foodY)
}


function drawFood() {
    context.fillStyle = foodColor
    context.fillRect(foodX, foodY, unitSize, unitSize)
    context.strokeStyle = snakeBorder
    snake.forEach(snakePart)
}

function moveSnake() {
    
}

function drawSnake() {
    context.fillStyle = snakeColor

}

function changeDirection() {
    
}

function checkGameOver() {
    
}

function displayGameOver() {
    
}

function resetGame() {
    
}