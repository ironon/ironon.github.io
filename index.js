
class animatedText {
    constructor(text, element, speed) {
        self.element = element
        self.text = text
        self.speed = speed
    }
    myLoop() {    
            //  create a loop function
        setTimeout(() => {  //  call a 3s setTimeout when the loop is called
            
            element.innerHTML = element.innerHTML + self.text.charAt(this.i)  
            
            this.i = this.i + 1;    
              //  increment the counter
            if (this.i < text.length) { 
                        //  if the counter < 10, call the loop function
                this.myLoop(); 
                            //  ..  again which will trigger another 
            }                       //  ..  setTimeout()
        }, speed)
    }

    play() {
        element.innerHTML = ""
        //console.log(this.setString)
        this.i = 0;  
        console.log("played!", this.i)                //  set your counter to 1
        this.myLoop()
        
            
    }
    
}

