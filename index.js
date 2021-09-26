animatedTexts = []

class animatedText {
    constructor(text, element, speed) {
        this.element = element
        this.text = text
        this.speed = speed
        this.time = 0
        this.i = 0
        animatedTexts.push(this)
        
    }
    setText(settext) {
        this.text = settext
        
    }         
    play() {
        
     //  set your counter to 1
        this.time = setInterval(()=>{
            this.element.innerHTML = this.element.innerHTML + this.text.charAt(this.i)  
            //console.log(self, self.element)
            this.i = this.i + 1;    
            
        }, this.speed)
        
            
    }
    stop() {
        
        clearInterval(this.time)
    }
    
}

