var gameboard = document.querySelector("#gameboard")
var ctx = gameboard.getContext('2d')
gameboard.width = window.innerWidth
gameboard.height = window.innerHeight
mx = gameboard.width / 2
my = gameboard.height / 2

var gameProperties = {
    gravity:0.7,
    groundlevel:0.9,
    friction:0.99
}
var players = []

class Player {
    
    constructor(x, y, name) {
        this.x = x
        this.y = y
        this.radius = 50
        this.velocity = {
            x:0,
            y:0
        }
        this.keydowns = {

        }
        this.keyups = []
            
        
        this.name = name
        this.inputs = []
        players.push(this)
        addEventListener("keydown", (key)=>{
            this.inputs.forEach(element => {
                if (key.key == element[0]) {
                    
                    this.keydowns[element[0]] = (element[1])
                    
                }
            })
        })  
        addEventListener("keyup", (key)=>{
            this.keyups.push(key)
        })  
    }
    draw() {
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke(); 
    }
    addXVelocity(vel) {
        this.velocity.x += vel
    }
    addYVelocity(vel) {
        this.velocity.y -= vel
    }
    move(vel){
        (Math.abs(this.velocity.x) > 5) ? this.addXVelocity(vel * 0.01) : this.addXVelocity(vel * 1)
        
    }
    
    jump(){
        this.addYVelocity(30)
    }
    addInput(keyf) {
        this.inputs.push(keyf)
    }
    
    update() {
        this.draw()
        for (const [keya, valuea] of Object.entries(this.keydowns)) {
            this.keyups.forEach(element => {
                if (keya== element.key) {
                    delete this.keydowns[keya]
                    this.keyups = []
                }
                
            });
        }
        
        for (const [keyb, valueb] of Object.entries(this.keydowns)) {
            valueb()
            console.log("---------------------")
            
        }
        this.velocity.y += gameProperties.gravity
        this.y += this.velocity.y
        console.log(this.keydowns, this.keyups)
        this.x += this.velocity.x
        while (this.y + this.radius > gameboard.height * gameProperties.groundlevel) {
            this.y -= 1
            this.velocity.y = 0
           
        }
        this.velocity.x *= gameProperties.friction
        if (Math.abs(this.velocity.x)<6) {
            this.velocity.x *= 0.97
        }
        
        
    }
    

   
    
}

var player = new Player(300, 300, "your mom")
player.addInput(["w",function () {
    player.jump()
}])
player.addInput(["a",function () {
    player.move(-10)
}])
player.addInput(["d",function () {
    player.move(10)
}])
//Game loop, runs 50 times a second.
setInterval(function(){
    ctx.clearRect(0, 0, gameboard.width, gameboard.height);
    players.forEach(element => {
        element.update()
    });

},20)

