const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
mx = canvas.width / 2
my = canvas.height / 2
const bullets = []
const enemies = []
const particles = []
class Projectile {
    constructor(x, y, radius, color, velocity, mult) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.mult = mult

    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x * this.mult
        this.y = this.y + this.velocity.y * this.mult
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity, mult) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.mult = mult

    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x * this.mult
        this.y = this.y + this.velocity.y * this.mult
    }
}

class Particle {
    constructor(x, y, radius, color, velocity, mult) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.mult = mult
        this.alpha = 1
    }
    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.restore()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x * this.mult
        this.y = this.y + this.velocity.y * this.mult
        this.alpha -= 0.01
    }
}


class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color

    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}


const player = new Player(mx, my, 15, "white")

function spawnEnemies() {
    setInterval(() => {
        
        const radius = Math.random() < 0.1 ? Math.random() * (90 - 10) + 10 : Math.random() * (30 - 10) + 10
        let x
        let y
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
            x = Math.random() * canvas.width
        }
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`
        const angle = Math.atan2(my - y, mx - x)
        const velocity = {
            x:Math.cos(angle),
            y:Math.sin(angle)
        }
        enemies.push(new Enemy(x, y, radius, color, velocity, Math.random() * 5))
        
    }, 1000)
}
let animationId = undefined
function animate() {
    animationId = requestAnimationFrame(animate)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1)
        }
        particle.update()
        
    })
    bullets.forEach((proj, pindex) => {
        proj.update()
        if (proj.x + proj.radius < 0 ||
             proj.x - proj.radius > canvas.width ||
             proj.y + proj.radius < 0 ||
             proj.y - proj.radius > canvas.height) {
            setTimeout(() =>{
                bullets.splice(pindex, 1) 
            },0)
        }
    })
    enemies.forEach((enemy, index) => {
        enemy.update() 
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)
        if (dist - enemy.radius - player.radius < 1) {
            cancelAnimationFrame(animationId)
        }
        bullets.forEach((proj, pindex) => {
            const dist = Math.hypot(proj.x - enemy.x, proj.y - enemy.y)
            if(dist - enemy.radius - proj.radius < 1) {
                for (let i = 0; i < Math.round(Math.random() * 8); i++) {
                
                    particles.push(new Particle(proj.x, proj.y, 3, enemy.color, {x:Math.random() - 0.5, y:Math.random() - 0.5}, 1))
                }
                if (enemy.radius - 10 > 5) {
                    gsap.to(enemy, {
                        radius: enemy.radius - 10
                    })
                    setTimeout(() =>{
                        bullets.splice(pindex, 1) 
                    },0)
                }else{
                setTimeout(() =>{
                    enemies.splice(index, 1)
                    bullets.splice(pindex, 1) 
                },0)}
                
            }
        })
    })
}

window.addEventListener("click", (event) => {
    
    const angle = Math.atan2(event.clientY - my, event.clientX - mx)
    const velocity = {
        x:Math.cos(angle),
        y:Math.sin(angle)
    }
   const proj = new Projectile(mx, my, 5, 'white', velocity, 3.5)
   bullets.push(proj)
})

document.addEventListener('keydown',() => {
    if (event.keyCode==115) {
        
        i = 0
        while (i < 1000) {
            const radius = Math.random() < 0.1 ? Math.random() * (90 - 10) + 10 : Math.random() * (30 - 10) + 10
            let x
            let y
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
                y = Math.random() * canvas.height
            } else {
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
                x = Math.random() * canvas.width
            }
            const color = `hsl(${Math.random() * 360}, 50%, 50%)`
            const angle = Math.atan2(my - y, mx - x)
            const velocity = {
                x:Math.cos(angle),
                y:Math.sin(angle)
            }
            enemies.push(new Enemy(x, y, radius, color, velocity, Math.random() * 5))
            
            i++;
        }
    }
    
})
animate()
spawnEnemies()