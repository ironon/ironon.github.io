let canvas = require('canvas')
let createCanvas = canvas.createCanvas

let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let alphabet2 = alphabet.map((value) => {
    return require(`./letters/${value.toUpperCase()}.png`)
})

function SecretLanguage(props) {
    let [text, setText] = props.text
    let imgs = []
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toUpperCase()
        imgs.push(<img src={alphabet2[alphabet.indexOf(char)]}></img>)
        
    }
    
    return(
        <div>
            <p>langauge comes out here</p>
             <div id="landivv">
                {imgs}
            </div>
        </div>
    )
}

export default SecretLanguage