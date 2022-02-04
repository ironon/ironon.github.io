

const button1 = document.querySelector('#test1')
const button2 = document.querySelector('#test2')
const button3 = document.querySelector('#test3')
const paragraph = document.querySelector("p")
let x = new animatedText(beemoviescript, paragraph, 'sounds/sans', 10)
button2.onclick = function() {

    
    x.play()
}
button1.onclick = function() {

    x.stop()
}
button3.onclick = function() {

    x.reverse()
}


