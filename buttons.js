

const button1 = document.querySelector('#test1')
const paragraph = document.querySelector("p")

button1.onclick = function() {
    const x = new animatedText("111111111111", button1, 100)
}
const y = new animatedText("they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching they are always watching ", paragraph, 100).play()
