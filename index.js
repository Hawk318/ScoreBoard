let homeScore = 0
let awayScore = 0

let homeScoreBoard = document.getElementById("home-score")
let awayScoreBoard = document.getElementById("away-score")

homeScoreBoard.textContent = homeScore
awayScoreBoard.textContent = awayScore

function homeOne() {
    let newScore = homeScore += 1
    homeScoreBoard.textContent = newScore
}

function homeTwo() {
    let newScore = homeScore += 2
    homeScoreBoard.textContent = newScore
}

function homeThree() {
    let newScore = homeScore += 3
    homeScoreBoard.textContent = newScore
}

function awayOne() {
    let newScore = awayScore += 1
    awayScoreBoard.textContent = newScore
}

function awayTwo() {
    let newScore = awayScore += 2
    awayScoreBoard.textContent = newScore
}

function awayThree() {
    let newScore = awayScore += 3
    awayScoreBoard.textContent = newScore
}

