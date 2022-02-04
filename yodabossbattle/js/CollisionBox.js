export default class CollisionBox {
    constructor(shape, x, y, radius, sensor, label, frictionAir) {
        
        if (frictionAir == null) {
            frictionAir = 0.35
        }
        const {Body, Bodies} = Phaser.Physics.Matter.Matter
        var col
        if (shape == "circle") {
            
            col = Bodies.circle(x, y, radius, {isSensor:sensor,label:label});
            
        } else if (shape == "rectangle") {
            let {width, height} = radius
            col = Bodies.rectangle(x, y, width, height, {isSensor:sensor,label:label});
        }
        
        this.compoundBody = Body.create({
            parts: [col],
            frictionAir: frictionAir
        })
        this.compoundBody.collisionFilter = {
            'group': -1,
            'category': 5,
            'mask': 4,
          };
          Body.setInertia(this.compoundBody, 100)
    }
}