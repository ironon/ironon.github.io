
import UpdateList from "./UpdateList.js"

export default class HealthBar extends Phaser.GameObjects.Sprite {
    constructor(scene, max, current, size, entity, onDealth, healthbar="healthbar"){
        let frame = "10"
        if(healthbar == "bosshealthbar") {frame = undefined}
        console.log(healthbar, frame)
        super(scene,entity.x,entity.y, healthbar,frame)
        
        this.healthStages = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] //t1 represents 10 health, t10 represents 100 health, etc
        this.scene = scene
        this.maxHealth = max
        this.health = current
        this.size = size
        this.entity = entity
        this.hitCooldown = 0
        this.deathFunction = onDealth
        this.offsetY = 18
        this.setScale(0.69, 0.69) //HAHAHHA FUNNY NUMBER OMBOMBOD ASDASDASD die
        this.scene.add.existing(this)
        UpdateList.push(this)
        
    }
    static preload(scene) {
        scene.load.atlas("healthbar", "assets/images/healthBar/healthbar.png", "assets/images/healthBar/healthbar_atlas.json")
    
    }
    setHealth(health, legal) {
        if (this.hitCooldown == 0) {
            if (legal == null) {legal = true}
            this.health = health
            this.checkIfHealthIsLegal(legal)
        }
    }
    removeHealth(health, legal) {
        if (this.hitCooldown == 0) {
            if (legal == null) {legal = true}
            this.health -= health
            this.checkIfHealthIsLegal(legal)
        } else {
            
        }
    }
    addHealth(health, legal) {
        if (this.hitCooldown == 0) {
            if (legal == null) {legal = true}
            this.health += health
            this.checkIfHealthIsLegal(legal)
        }
    }
    checkIfHealthIsLegal(legal) {
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
        
        let closetStage = this.findClosestStage(this.health)
        this.setFrame(closetStage)
        this.hitCooldown = 2
        
    }
    findClosestStage(health) {
        let scaled = health / 10
        
        let stage = this.healthStages[Math.round(scaled)]
        
        return stage
    }
    updatePos() {
        this.setX(this.entity.x)
        this.setY(this.entity.y - this.offsetY)
    }
    update() {
        if (this.IsDead != true) {
            this.updatePos()
            if (this.hitCooldown > 0) {this.hitCooldown -= 1}
        }
        
        
    }
}