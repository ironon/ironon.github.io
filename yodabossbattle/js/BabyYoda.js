import BossBar from "./BossBar.js";
import Chat from "./Chat.js";
import CollisionBox from "./CollisionBox.js";
import MainScene from "./MainScene.js";
import PhysicsParticle from "./PhysicsParticle.js";
import PlayerList from "./PlayerList.js";
import ScaleFactor from "./ScaleFactor.js";
import Wall from "./Wall.js";

let groundpound
let chargeup
let darkfire
let sprite
function getDistance(point1, point2) {
    let {x1, y1} = point1
    let {x2, y2} = point2
    let dx = x1 - x2
    let dy = y1 - y2
   
    let distance = Math.hypot(dx, dy)
    return distance

}
function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
export default class BabyYoda extends Phaser.Physics.Matter.Sprite {
    
    
    constructor(data) {
        
        let {scene, x, y, texture, frame} = data
        super(scene.matter.world, x, y, texture, frame)
        sprite = this
        this.scene.add.existing(this);
        this.scene = scene
        this.emitter = null
        this.setScale(4 * ScaleFactor, 4 * ScaleFactor)
       
        this.attackFinished = true
        this.attackIndex = -1
        this.attacks = [this.delay5s, this.jumpAttack, this.jumpAttack_f, this.jumpAttack_f, this.jumpAttack_f, this.wallAttack, this.wallAttack_f, this.jumpAttack, this.wallAttack,this.jumpAttack_f, this.wallAttack_f]
        groundpound = scene.sound.add('groundpound')
        chargeup = scene.sound.add('chargeup')
        darkfire = scene.sound.add('darkfire')
        this.healthBar = new BossBar(this.scene,1000,1000,1,this,this.onDeath)
        this.i = 0
        const {Body, Bodies} = Phaser.Physics.Matter.Matter
        this.bossMobPlatform = new Phaser.Physics.Matter.Sprite(scene.matter.world, 250, 250,'baby_yoda','babyyoda_24')
        let body = Bodies.rectangle(this.x, this.y + 100, 100, 10, {isSensor:false,label:"yodaPlatform"}); // The platform that yoda jumps on, so he doesnt fall out the map
        let compoundBody2 = Body.create({
            parts: [body],
            frictionAir: 0.35
        })
        compoundBody2.collisionFilter = {
            'group': 1,
            'category': 4,
            'mask': 2,
          };
        
        this.bossMobPlatform.setExistingBody(compoundBody2)
        this.bossMobPlatform.setFixedRotation();
        this.bossMobPlatform.setToSleep();
        var yodaCol = new CollisionBox("circle",this.x,this.y,48 * ScaleFactor,false, "yodaCol")
        var yodaSen = Bodies.circle(this.x, this.y, 48 * ScaleFactor * 1.2, {isSensor:true,label:"yodaSen"});
        this.compoundBody = Body.create({
            parts: [yodaCol.compoundBody, yodaSen],
            frictionAir: 0.1
        })
        this.compoundBody.collisionFilter = {
            'group': 1,
            'category': 5,
            'mask': 2,
          };
       
          
        this.setExistingBody(this.compoundBody)
        this.setFixedRotation();
        this.setToSleep();
        //Done with weirdo stuff
        

        //Old Event listener, which is inconsistant.
        scene.matter.world.on('collisionstart', function (event, thingA, thingB) {
            console.log(thingB)
            console.log(thingB.gameObject + "    " + thingA.label)
            if(thingB.label == "yodaSen" && thingA.label == "yodaPlatform") {
                console.log("touched")
                scene.bossMob.ground_pound(scene, scene.bossMob)
            }
         })
        
        
        
    }
    static preload(scene) {
        scene.load.atlas('baby_yoda', 'assets/images/baby_yoda.png', 'assets/images/baby_yoda_atlas.json')
        scene.load.atlas('forcefields', 'assets/images/shield/forcefields.png', 'assets/images/shield/forcefields_atlas.json')
        scene.load.animation('baby_yoda_anim', 'assets/images/baby_yoda_anim.json')
        scene.load.audio('groundpound', 'assets/audio/groundpound.mp3')
        scene.load.audio('chargeup', 'assets/audio/chargeup.wav')
        scene.load.audio('darkfire', 'assets/audio/darkfire.wav')
        PhysicsParticle.preload(scene);
    }
    get x() {
        return this.body.position.x
    }
    get y() {
        return this.body.position.y
    }
    onDeath() {
        console.log("I hasth died")
    }
    setCollisionWithPlayers(bool) {
        if (bool == true) {
            this.compoundBody.collisionFilter = {
                'group': 1,
                'category': 5,
                'mask': 2,
              };
        } else {
            this.compoundBody.collisionFilter = {
                'group': -1,
                'category': 2,
                'mask': 4,
              };
        }
    }
    delay5s() {
        sprite.attackFinished = false
        setTimeout(() => {
            sprite.attackFinished = true
        }, 5000);
    }
    jumpAttack() {
        sprite.cooldown = 1
        sprite.setCollisionWithPlayers(false)
        sprite.attackFinished = false
        sprite.setAwake();
        sprite.setVelocityY(-140)
        groundpound.play()
       
        
       // this.setToSleep();
    }
    jumpAttack_f() {
        sprite.jumpAttack()
        sprite.cooldown = 0.5
    }
    wallAttack_f() {
        sprite.wallAttack(0.5)
    }
    ground_pound(scene, yoda, spread, finishAttack, speed, particles) {
        if (finishAttack == null) {
            finishAttack = true
        }
        if(particles == null || particles == undefined) {
            particles = "particles"
           
        }
  
        if (spread == null) {
            spread = 25
        }

        yoda.setToSleep();
        let num = 0
        let attackCooldown = 2 * 1000 * this.cooldown
        if (speed == null) {
            speed = 3
        }
        let randoffset = Math.round(Math.random() * 360)
        for (let i = -180 - randoffset; i < 360 - randoffset; i = i + num) {
            
            let ground_particles = ["sand_particle","grass_particle","grass_chunk","rock_particle"]
            let force_particles = ["force", "force1", "force2"]
            let entry
            if (particles == "forcefields") {
                entry = force_particles[Math.ceil(Math.random() * 3)]
            } else {
                entry = ground_particles[Math.ceil(Math.random() * 4)]
            }
            
            let radius = 5.5
            let damage = 0
            if (particles == "forcefields") {
                if (entry == "force") {
                    radius = 3.5
                    damage = -7
                } else if (entry == "force1") {
                    radius = 7.4
                } else if (entry == "force2") {
                    radius = 11.5
                    damage = 5
                }
            } else {
                if (entry == "grass_particle") {
                    radius = 3.5
                    damage = -7
                } else if (entry == "rock_particle") {
                    radius = 7.4
                } else if (entry == "sand_particle") {
                    radius = 11.5
                    damage = 5
                }
            }
           
            
           
            let particle = new PhysicsParticle(scene, this.x, this.y+30, i, radius, particles, 'ground_pound_p', entry, damage, speed)
            num = Math.round(Math.random() * spread)
            sprite.setCollisionWithPlayers(true)
            
            
        }
        if (finishAttack == true) {
            setTimeout(() => {
          
                this.attackFinished = true
           }, attackCooldown)
        }
       
        // emitter.setPosition(yoda.body.position.x, yoda.body.position.y + 50);
        // emitter.setSpeed(200);
        // emitter.setBlendMode(Phaser.BlendModes.ADD);
    }
    placeWall(orginX, orginY, angle, distance) {
        let aangle = angle * Math.PI / 180
        return new Wall(sprite.scene, 'grass_walls', orginX + (distance * Math.cos(aangle)), orginY + (distance * Math.sin(aangle)),1,angle)
    }
    wallAttack(cooldown) {
        if (cooldown == null) {
            cooldown = 1
        }
        sprite.attackFinished = false
        chargeup.play()
        let closestPlayer = sprite.getClosestPlayer()
        let angle = Math.atan2(closestPlayer.x - sprite.x, closestPlayer.y - sprite.y)*180/Math.PI
        if (Math.sign(angle) == -1) {
            angle = (angle * -1) + 180
        }
        if (Math.random() < 0.5) {
            angle = angle + (Math.random() * 120)
        } else {
            angle = angle - (Math.random() * 120)
        }
        
        if (angle > 360) {
            angle = angle - 360
        }
      
        let wall = sprite.placeWall(sprite.x, sprite.y, angle, 110)
        setTimeout(() => {
            darkfire.play()
            sprite.ground_pound(sprite.scene,sprite,7,false, 2, "forcefields")
        }, 1500);
        setTimeout(() => {
            wall.destroy()
        }, 3500);
        setTimeout(() => {
            sprite.attackFinished = true
            
        }, 4500 * cooldown);
    }
    getClosestPlayer() {
        return this.scene.player
    }
    update() {
        let closestPlayer = this.getClosestPlayer()
        
        if (closestPlayer.IsDead != true) {
            let angle = Math.atan2(closestPlayer.x - this.x, closestPlayer.y - this.y)*180/Math.PI
            
            if (angle < 180 && angle > 120) {
                this.setFrame('babyyoda_2')
            } else if (angle < 120 && angle > 60) {
                this.setFrame('babyyoda_5')
            } else if (angle < 60 && angle > 0) {
                this.setFrame('babyyoda_1')
            } else if (angle < 0 && angle > -60) {
                this.setFrame('babyyoda_0')
            } else if (angle < -60 && angle > -120) {
                this.setFrame('babyyoda_4')
            } else if (angle < -120 && angle > -180) {
                this.setFrame('babyyoda_3')
            }
            
            
        
        
        if ((this.attackFinished == true) && (this.attackIndex + 1 <= this.attacks.length - 1)) {
            
            this.attackIndex += 1
            this.attacks[this.attackIndex]();
            
        }
        }
    }

    
}