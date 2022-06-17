var cook = decodeURIComponent(document.cookie)
var cookie = cook.split(';')
var all = document.getElementsByTagName("input")
console.log(cookie)

var welcometext = "this is a \n bug";


const paragraph = document.querySelector("#password")
let response



document.addEventListener('DOMContentLoaded', function(){
    // when the website loads
    console.log(all)
    response = new animatedText(welcometext, paragraph, 'sounds/sans', 70)
    response.play()
    for (item of all) {
        item.addEventListener('keydown', (keyf) => {
            if (keyf.key == "Enter") {
                item.blur()
                
                response.setPlay(item.value, 0)
                item.value = ""
            }
        }) 
    }
       
    
});

