const gameBoard = document.getElementById("gameboard")
const ctx = gameBoard.getContext("2d")
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
let yVelocity = 0
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
    ctx.fillStyle = boardBackground
    ctx.fillRect(0, 0, gameWidht, gameHeight)
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
    ctx.fillStyle = foodColor
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}

function moveSnake() {
    const head = {x: snake[0].x + xVelocity,
                  y: snake[0].y + yVelocity}
    snake.unshift(head)
    if (foodX == snake[0].x && foodY == snake[0].y) {
        score += 1
        scoretext.textContent = score
        createFood()
    } else {
        snake.pop()
    }
}

function drawSnake() {
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
        
    })
}

function changeDirection(event) {
    const keyPressed = event.keyCode
    console.log(keyPressed)
    const keydown = 40
    const keyright = 39
    const keyleft = 37
    const keyup = 38
    const goingUP = (yVelocity == -unitSize)
    const goingDOWN = (yVelocity == unitSize)
    const goingRIGHT = (xVelocity == unitSize)
    const goingLEFT = (xVelocity == -unitSize)

    switch (true) {
        case (keyPressed == keyleft && !goingRIGHT):
            xVelocity = -unitSize
            yVelocity = 0
            break;
        case (keyPressed == keyright && !goingLEFT):
            xVelocity = unitSize
            yVelocity = 0
            break;
        case (keyPressed == keyup && !goingDOWN):
            xVelocity = 0
            yVelocity = -unitSize
            break;
        case(keyPressed == keydown && !goingUP):
            xVelocity = 0
            yVelocity = unitSize 

    }

}

function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false
            break;
        case (snake[0].x >= gameWidht):
            running = false
            break;
        case (snake[0].y < 0):
            running = false
            break;
        case (snake[0].y >= gameHeight):
            running = false
            break;    
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].x) {
            
        }        
    }
}

function displayGameOver() {
    ctx.font = "50px MV Boli"
    ctx.fillStyle = "black"
    ctx.textalign = "center"
    ctx.fillText("GAMEOVER", gameWidht/2, gameHeight/2)
    running = false
}

function resetGame() {
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    let snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ]
    gameStart()
}