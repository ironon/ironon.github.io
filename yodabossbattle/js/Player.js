import BabyYoda from "./BabyYoda.js";
import HealthBar from "./HealthBar.js";
import MainScene from "./MainScene.js";
import PhysicsParticle from "./PhysicsParticle.js";
import Chat from "./Chat.js"
import PlayerList from "./PlayerList.js";

export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(data) {
        let {scene, x, y, texture, frame} = data
        super(scene.matter.world, x, y, texture, frame)
        this.scene.add.existing(this);
        this.scene = scene
        this.health = 100
        const {Body, Bodies} = Phaser.Physics.Matter.Matter
        var playerCollider = Bodies.circle(this.x, this.y, 9, {isSensor:false,label:"playerCollider"});
        var playerSensor= Bodies.circle(this.x,this.y,24,{isSensor:true, label:'playerSensor'})
        let compoundBody = Body.create({
            parts: [playerCollider, playerSensor],
            frictionAir: 0.35
        })
        compoundBody.collisionFilter = {
            'group': 1,
            'category': 4,
            'mask': 5,
          };
        compoundBody.player = this
        this.setExistingBody(compoundBody)
        this.setFixedRotation();
        this.setIgnoreGravity(true);
        this.healthBar = new HealthBar(this.scene,100,100,"red",1,this,this.onDeath)
        PlayerList.push(this)
        // let testsprite = new Phaser.Physics.Matter.Sprite(scene.matter.world, 270, 270, "thief")
        // console.log(testsprite)
        
    }

    static preload(scene) {
        scene.load.atlas('thief', 'assets/images/thief_atlas.png', 'assets/images/thief_atlas.json')
        scene.load.animation('thief_anim', 'assets/images/thief_atlas_anim.json')
    }

    get velocity() {
        return this.body.velocity
    }
    get x() {
        return this.body.position.x
    }
    get y() {
        return this.body.position.y
    }
    
    onDeath() {
        Chat.log(this.entity + " has died!")
        PlayerList.splice(PlayerList.indexOf(this.entity), 1)
        this.entity.destroy()
        this.destroy();
       

    }
    update() {
        if (this.IsDead != true) {
        this.anims.play('idle',true);
        let speed = 2.5
        
        let scene = this.scene
        let playerVelocity = new Phaser.Math.Vector2();
        
        
          if(this.inputKeys.left.isDown) {
              playerVelocity.x = -1
          } else if (this.inputKeys.right.isDown) {
              playerVelocity.x = 1
          }
          
           if(this.inputKeys.up.isDown) {
              playerVelocity.y = -1
          } else if (this.inputKeys.down.isDown) {
              playerVelocity.y = 1
          }
          if(this.inputKeys.sprint.isDown) {
              speed = 4
          } else {
              speed = 2.5
          }
          if(this.inputKeys.devbility.isDown) {
            scene.bossMob.jumpAttack2(scene, scene.bossMob);
        }
            if (playerVelocity.x != 0 || playerVelocity.y != 0) {
                playerVelocity.normalize();
                playerVelocity.scale(speed);
                this.setVelocity(playerVelocity.x, playerVelocity.y);
            }
          
          if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
                this.anims.play('moving',true);
   
          } else {
                this.anims.play('idle', true)
          }
          if (this.velocity.x < -0.1) {
              this.flipX = true
          } else if (this.velocity.x > 0.1) {
              this.flipX = false
          }
  
      }
    }
}