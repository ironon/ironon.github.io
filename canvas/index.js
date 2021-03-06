const canvas = document.getElementById("can")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight


class Player {
    constructor(x, y, color, radius, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        this.radius = radius
        this.color = color
        this.pastX = null
        this.pastY = null
    }
    update() {
        // ctx.fillRect(this.x - this.radius / 2, this.y - this.radius / 2, this.radius, this.radius)
        ctx.fillStyle = this.color
        ctx.moveTo(this.x, this.y)
        if (this.pastX != null) {
            ctx.lineTo(this.pastX, this.pastY)
            ctx.stroke()
        }
        
        // ctx.arc(this.x + scrollX, this.y + scrollY, this.radius, 0, 2 * Math.PI, false);

        ctx.fill()
        
    }
}

const player = new Player(canvas.width/2, canvas.height/2, "green", 10, 5)
function animate() {
    
    setInterval(animate, 1)
    player.update()

}

var mouseDown = 0;

document.body.onmousedown = function(mouse) { 
    // player.pastX = mouse.x
    // player.pastY = mouse.y
  ++mouseDown;
  player.pastX = mouse.x - canvas.offsetLeft
  player.pastY = mouse.y - canvas.offsetTop
  player.x = mouse.x - canvas.offsetLeft
  player.y = mouse.y - canvas.offsetTop
}
document.body.onmouseup = function(mouse) {
  --mouseDown;

}

addEventListener("mousemove", (event) => {
    if (mouseDown==1) {
        player.pastX = player.x
        player.pastY = player.y
        player.x = event.x - canvas.offsetLeft
        player.y = event.y - canvas.offsetTop
        
    }

})

animate()