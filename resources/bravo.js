animatedTexts = []


class randSound {
    constructor(folder) {
        this.folder = folder
        this.file
    }
    play() {
        this.file = new Audio(this.folder + "/sound.mp3")
        this.file.play()
        
        
    
    }
    stop() {
        
        this.file.pause()
        
        
    
    }
}

class animatedText {
    constructor(text, element, sound, speed) {
        this.element = element
        this.text = " " + text
        this.speed = speed
        this.sound = sound
        this.soundtime = "strinfeg";
        this.time = 0
        this.i = 0
        animatedTexts.push(this)
        
    }
    setText(settext) {
        this.text =  " " + settext
        
    }         
    play() {
        this.stop()
        this.soundtime = new randSound(this.sound)
        this.soundtime.play()
     //  set your counter to 1
        this.time = setInterval(()=>{
            this.element.innerHTML = this.element.innerHTML + this.text.charAt(this.i)
            if (this.i > this.text.length) {
                this.stop()
            }
            
            

            this.i = this.i + 1;    
            
        }, this.speed)
        
            
    }
    stop() {
        try {
            this.soundtime.stop()
            
        } catch(err) {
            console.log("No sound playing!")
        }
        clearInterval(this.time)
    }
    setIndex(ie) {
        this.i = ie
    }
    setPlay(text, index) {
        this.setIndex(index)
        this.setText(text)
        this.play()
    }
    reverse() {
        this.stop()
        this.time = setInterval(()=>{
            this.element.innerHTML = this.element.innerHTML.substring(0, this.element.innerHTML.length - 1)
            //console.log(self, self.element)
            if (this.i > 0) {
                this.i = this.i - 1;    
            }
        }, this.speed)
    }
}

