import CollisionBox from "./CollisionBox.js"
function IsMultOf(num, multiple) {
    let factor = (num % multiple == 0)
    let mult = (multiple % num == 0)
    return (mult || factor)
}
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}


function roundToNearestMultipleOf(num, mult) {
    return Math.round(num / mult) * mult
}
export default class Wall extends Phaser.Physics.Matter.Sprite {

    static preload(scene) {
        scene.load.image('grass_walls','assets/images/walls/grass.png')
        scene.load.image('sand', 'assets/particles/sand.png')
       
    }
    /**
     * 
     * @param {string} wall_biome
     * @param {float} x
     * @param {float} y
     * @param {objectOrInt} size
     * @param {float} angle
     * 
     */
    constructor(scene, wall_biome, x, y, size, angle) {
        
        let wall_degree
        angle = angle - 90
        if (Math.sign(angle) == -1) {
            angle = 360 + angle
        }
        let roundedNum = roundToNearestMultipleOf(angle, 45)
        let width = 50
        let height = 20
        // if (roundedNum == 0 || roundedNum == 180) {
        //     wall_degree = "0"
        // } else if (roundedNum == 45 || roundedNum == 225) {
        //     wall_degree = "45"
        // } else if (roundedNum == 90 || roundedNum == 270) {
        //     wall_degree = "90"
        // } else if (roundedNum == 135 || roundedNum == 315) {
        //     wall_degree = "135"
        // }
        
        super(scene.matter.world, x , y, wall_biome)
        this.biome = wall_biome
        if (typeof size == 'object') {
            this.size = {x:size.x, y:size.y}
        } else if (typeof size == 'int') {
            this.size = {x:size, y:size}
        }
        this.wall_angle = angle
        this.collisionBox = new CollisionBox("rectangle",x,y,{width:width,height:height},false,'wallAttackWall',0.5)
        this.scene.add.existing(this)
        this.collisionBox.compoundBody.collisionFilter = {
            'group': 1,
            'category': 5,
            'mask': 4,
          };
        this.setExistingBody(this.collisionBox.compoundBody)
        this.setFixedRotation();
        this.setToSleep();
        this.setIgnoreGravity(true)
        this.rotation = degrees_to_radians(angle)
        let particles = scene.add.particles('sand') 
        let emitter = particles.createEmitter({
            x: this.x,
            y: this.y,
            lifespan: 2000,
            speed: { min: 200, max: 400 },
            radial:true,
            angle: {min: 0, max: 360},
            gravityY: 300,
            maxParticles:10
        })

        //EVENT LISTENER
        scene.matter.world.on('collisionstart', function (event, thingA, thingB) {
           
            if ((thingA.label == "wallAttackWall" && thingB.label == "ground_pound_p")) {
                //Destroys any physics particles on collide with wall.
                
                thingB.gameObject.destroy()
            }
         })
        
    }
    get x() {
        return this.body.position.x
    }
    get y() {
        return this.body.position.y
    }
    set x(x) {
        this.body.position.x = x
    }
    set y(y) {
        this.body.position.y = y
    }
    setAngle(angle) {
        this.wall_angle = angle
    }
    setPosition(x, y) {
        this.x = x
        this.y = y
    }
    
}