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
let mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  let width
  let color
  let yOffset
  let line_width
  let letterLength
  let textYOffset
  let textSize
  let xPadding
  let yPadding
  let word
  if (mobileCheck() == false) {
     width = 0.05 * canvas.width //pixels
     color = 'rgb(255, 255, 255)'
     line_width = 0.0025 * canvas.width
     yOffset = 60 //Just so i have room for title and stuff up top
     letterLength = 0.03 * canvas.width
     textYOffset = 0.09 * canvas.width
     textSize = 0.005 * canvas.width
     xPadding = 0.006 * canvas.width
     yPadding = 0.001 * canvas.width
     word = "DAVID"
     
  } else {
      //Player is on mobile
     width = 0.085 * canvas.height //pixels
     color = 'rgb(255, 255, 255)'
     line_width = 0.0025 * canvas.height
     yOffset = 0.03 * canvas.width
     letterLength = 0.06 * canvas.height
     textYOffset = 0.04 * canvas.height
     textSize = 0.005 * canvas.height
     xPadding = 0.006 * canvas.height
     yPadding = 0.001 * canvas.height
     word = "DAVID"

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
  }
//BOX PROPERTIES



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

