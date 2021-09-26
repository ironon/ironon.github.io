

const button1 = document.querySelector('#test1')
const button2 = document.querySelector('#test2')
const paragraph = document.querySelector("p")
let x = new animatedText(beemoviescript, paragraph, 100)
button2.onclick = function() {

    
    x.play()
}
button1.onclick = function() {

    x.stop()
}


