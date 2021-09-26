animatedTexts = []


class randSound {
    constructor(folder) {
        this.folder = folder
    }
    play() {
        var startfile = new Audio(this.folder + "/start.mp3")
        startfile.play()
        var sounds = []
        for (let i = 0; i < 15; i++) {
            try {
            var s = new Audio(this.folder + "/randoms/" + i + ".mp3")
            }
            catch {
                i = 20
            }
            sounds.push(s)
            console.log(s)

        }
        this.soundtime = setInterval(()=>{
            
            
        }, this.speed)
    
    }
}

class animatedText {
    constructor(text, element, sound, speed) {
        this.element = element
        this.text = text
        this.speed = speed
        this.sound = sound
        this.time = 0
        this.i = 0
        animatedTexts.push(this)
        
    }
    setText(settext, soundfolder) {
        this.text = settext
        this.sound = sound
        
    }         
    play() {
        this.stop()
        var audio = new randSound(this.sound)
        audio.play()
     //  set your counter to 1
        this.time = setInterval(()=>{
            this.element.innerHTML = this.element.innerHTML + this.text.charAt(this.i)  
            //console.log(self, self.element)
            
            

            this.i = this.i + 1;    
            
        }, this.speed)
        
            
    }
    stop() {
        clearInterval(this.soundtime)
        clearInterval(this.time)
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

