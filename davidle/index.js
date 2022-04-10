const Keyboard = window.SimpleKeyboard.default;

let canvas = document.getElementById("davidle")
let ctx = canvas.getContext("2d")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
let midX = canvas.width / 2
let midY = canvas.height / 2
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Yes i know thats a terrible way for letter detection but I DIDNT ASK FOR YOUR OPINI-
let Davidle = []
let gamestate = "playing"
let attempts = 0
//BOX PROPERTIES

let width = 0.05 * canvas.width //pixels
let color = 'rgb(255, 255, 255)'
let line_width = 0.0025 * canvas.width
let yOffset = 60 //Just so i have room for title and stuff up top
let letterLength = 0.03 * canvas.width
let textYOffset = 0.07 * canvas.width
let textSize = 0.005 * canvas.width
let xPadding = 0.006 * canvas.width
let yPadding = 0.001 * canvas.width
let word = "DAVID"

function floorToNearestMultipleOf(num, roundererderdsdasdds_enlgish_is_hard) { // Here at David Incorperation we only make the best of variable names.
    return Math.floor(num / roundererderdsdasdds_enlgish_is_hard) * roundererderdsdasdds_enlgish_is_hard
}
function addGrid(x1, y1) {
    for (i = 0; i < 30 - (attempts * 5); i++) {
        let y = y1 + (floorToNearestMultipleOf(i, 5) * ((width / 5) + yPadding)) + (attempts * ((width) + (5 * yPadding))) // I have no idea why this works i spent the last 30 minutes of trial and error and it works and im not touching it
        let x = x1 + (i % 5) * (width + xPadding)
        ctx.beginPath() //why is javascript canvas so weird
        ctx.lineWidth = line_width
        ctx.fillStyle = color
        ctx.fillRect(x, y, width, width) // For the white background
        ctx.rect(x, y, width, width) //For the border
        
        if (Davidle[i] != null) {
            ctx.font = `${letterLength}px Comic Sans MS`
            ctx.textAlign = "center"
            ctx.fillStyle = "black"
            ctx.fillText(Davidle[i].key.toUpperCase(), x + (width / 2), y + (width/1.5))
        }
        ctx.stroke() //WHY DO I HAVE TO SAY THIS
    }
}

function title() {
    ctx.font = `${letterLength}px Comic Sans MS`
    ctx.textAlign = "center"
    let title = "DAVIDLE"
    ctx.fillText(title, midX, midY - (midY - (width * 6) / 2) - textYOffset)
}
function enter() {
    let enteredword = []
    for (i = 0; i < 5; i++) {
        try {
            enteredword.push(Davidle.shift().key) 
        } catch {
            console.log('user tried to enter <5 letter word and im too lazy to tell them')
            return
        }
        
    }
    gradeRow(attempts, enteredword, newX, newY)
    attempts = attempts + 1
    
    if (attempts == 6) {
        gameOver()
    }

}
function gradeRow(index, enteredword, x1, y1) {
    // 0 = first row, 1 = second, etc
    //idk why you'd acuse me of copying code from above that stupid man why
    let correct = 0
    for (i = 0; i < 5; i++) {
        
        let y = y1 + (floorToNearestMultipleOf(i, 5) * ((width / 5) + yPadding)) + (attempts * ((width) + (5 * yPadding))) // I have no idea why this works i spent the last 30 minutes of trial and error and it works and im not touching it
        let x = x1 + (i % 5) * (width + xPadding)
        ctx.beginPath() //why is javascript canvas so weird
        ctx.lineWidth = line_width
        
        if (actualWord[i] == enteredword[i].toUpperCase()) {
            ctx.fillStyle = "green"
            correct = correct + 1
        } else if (actualWord.includes(enteredword[i].toUpperCase())) {
            ctx.fillStyle = "yellow"
        } else {
            ctx.fillStyle = "gray"
        }
        
        ctx.fillRect(x, y, width, width) // For the white background
        ctx.rect(x, y, width, width) //For the border
        
        ctx.font = `${letterLength}px Comic Sans MS`
        ctx.textAlign = "center"
        ctx.fillStyle = "black"
        ctx.fillText(enteredword[i].toUpperCase(), x + (width / 2), y + (width/1.5))
        

        ctx.stroke() //WHY DO I HAVE TO SAY THIS
        if (correct == 5) {
            win()
        }
    }
}
function diologBox(text) {
    let x = midX / 8
    let y = midY / 2
    ctx.fillStyle = "white"
    ctx.fillRect(0.4 * canvas.width, 0.2 * canvas.width, 0.2 * canvas.width, 0.2 * canvas.width)
    ctx.fillStyle = "black"
    ctx.lineWidth = line_width
    ctx.rect(0.4 * canvas.width, 0.2 * canvas.width, 0.2 * canvas.width, 0.2 * canvas.width)
    ctx.stroke()
    ctx.font = `20px Comic Sans MS`
    ctx.textAlign = "left"
    ctx.fillText(text, 0.42 * canvas.width, 0.3 * canvas.width)
}
function gameOver() {
    gamestate = "gameover"
    diologBox("sucks 2 suck. refresh to restart")
}
function win() {
    gamestate = "gameover"
    diologBox("HOW DID U GUESS THAT??? HAX")
}
let newX = midX - ((width + xPadding) * 5) / 2
let newY = (midY - (width * 6) / 2) + yOffset
function update() {
    if (gamestate == "playing") {
       
        addGrid(newX, newY)
        title()
        
    }
}

setInterval(() => {
    update()
}, 33) //trying to get 30 fps, 1000 miliseconds / 30 frames = 1 every 33 milliseconds
let actualWord = word.split(""); //Turns the word into an array
window.addEventListener("keydown", (event) => {
    if (letters.includes(event.key)) {
        if (Davidle.length % 5 != 0) {
            Davidle.push(event)
        } else {
            if (Davidle.length == 0) {
                Davidle.push(event)
            }
        }
        
    }
    if (event.key == "Backspace") {
        Davidle.pop()
    }
    if (event.key == "Enter") {
        enter()
    }
   
})

const myKeyboard = new Keyboard({
    onKeyPress: button => onKeyPress(button)
  });

    function onKeyPress(button) {
    if (letters.includes(button)) {
        if (Davidle.length % 5 != 0) {
            Davidle.push({key:button})
        } else {
            if (Davidle.length == 0) {
                Davidle.push({key:button})
            }
        }
        
    }
    if (button == "{bksp}") {
        Davidle.pop()
    }
    if (button == "{enter}") {
        enter()
    }
  }