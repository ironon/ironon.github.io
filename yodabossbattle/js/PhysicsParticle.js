
import CollisionBox from "./CollisionBox.js";
import UpdateList from "./UpdateList.js";
function toRadians(angle) {
    return angle * (Math.PI / 180);
  }
export default class PhysicsParticle extends Phaser.Physics.Matter.Sprite {
    static preload(scene) {
        scene.load.atlas('particles', 'assets/images/particle/particles.png', 'assets/images/particle/particles_atlas.json')
        scene.load.atlas('forcefields', 'assets/images/shield/forcefield.png', 'assets/images/shield/forcefield_atlas.json')
    
    }
    
   
    constructor(scene, x, y, angle, radius, texture, name, frame, damage, speed) {
        
        super(scene.matter.world, x, y, texture, frame)
        this.scene.add.existing(this);
        UpdateList.push(this)
        let sprite = this
        //  console.log(UpdateList)
        
        this.t_scene = scene
        
        if (speed == null) {
            this.speed = 3
        } else {
            this.speed = speed
        }
        this.setAngle(angle)
        
        this.setScale(2, 2)
        this.textureName = texture
        this.setTint(0xfff8f7, 0xfff8f7, 0xfff8f7, 0xfff8f7);
        let collisionBox = new CollisionBox("circle",x,y,radius,false,name)
        this.setExistingBody(collisionBox.compoundBody)
        //this.setFixedRotation();
        if (texture == "forcefields") { 
            this.setRotation(toRadians(angle+90))
        }
        this.setIgnoreGravity(true);
        this.lifetime = 0
        this.damg = damage
        
        
        
        //EVENT LISTENER
        scene.matter.world.on('collisionstart', function (event, thingA, thingB) {
            
            if ((thingB.label == "ground_pound_p" && thingA.label == "playerCollider")) {
                let player = thingA.gameObject
                player.healthBar.removeHealth(10 + sprite.damg)
                thingB.gameObject.setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
                setTimeout(() => {
                    thingB.gameObject.setTint(0xfff8f7, 0xfff8f7, 0xfff8f7, 0xfff8f7);
                }, 440);
                setTimeout(() => {
                    thingB.gameObject.setTint(0xff0000, 0xff0000, 0xff0000, 0xff0000)
                }, 240);
                setTimeout(() => {
                    thingB.gameObject.setTint(0xfff8f7, 0xfff8f7, 0xfff8f7, 0xfff8f7);
                }, 280);
            }
         })
    }
    setAngle(angle) {
        
       
        let t_angle = toRadians(angle)
        
        this.aangle = angle
        this.direction = new Phaser.Math.Vector2(Math.cos(t_angle), Math.sin(t_angle));
        
        this.direction.scale((Math.random() + 1) * this.speed)
        this.setCollisionCategory(this.particlecat);    
       
       
    }   
    update() {
            
            if(this.active == false){return;}
           // console.log(this.direction)
             this.setIgnoreGravity(true);

            this.setVelocity(this.direction.x, this.direction.y)
            if (this.textureName != "forcefields") {
            this.setAngularVelocity(Math.PI/((Math.random() * 16) + 8))    
            }
            this.lifetime += 1
            
            if ((this.lifetime > 400) || (this.t_scene.cameras.main.worldView.contains(this.body.position.x, this.body.position.y) == false)) {
                this.destroy();
                UpdateList.splice(UpdateList.indexOf(this),1)
            }
            // console.log(this.direction)
            
    }
}