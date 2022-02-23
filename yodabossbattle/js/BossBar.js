import HealthBar from "./HealthBar.js";

export default class BossBar extends HealthBar {
    constructor(scene,max,current,size,entity, onDeath) {
        super(scene, max, current, size, entity, onDeath, "bosshealthbar")
        this.bar = new Phaser.GameObjects.Graphics(scene);
        this.offsetY = 60
        this.offsetX = -10
        this.setScale(2, 2)
        this.setHealth(100  )
        console.log(this)
    }
    static preload(scene) {
        scene.load.image("bosshealthbar", "assets/images/healthBar/BossBar.png")
    
    }
    checkIfHealthIsLegal(legal) {
        console.log("Boss Bar!")
        if (legal == true) {
            while (this.health > this.maxHealth) {
                this.health -= 1
            }
            if (this.health < 0) {
                this.IsDead = true
                this.entity.IsDead = true
                this.deathFunction()

            }
        } else {
            console.log("You have chosen to ignore health boundaries. Systems may not work as expected.")
        }
        this.bar.fillStyle(0xffffff)
        this.bar.fillRect(this.x, this.y, 200, 150)
        this.hitCooldown = 2
        
    }
    updatePos() {
        this.setX(this.entity.x + this.offsetX)
        this.setY(30)
        
    }
}