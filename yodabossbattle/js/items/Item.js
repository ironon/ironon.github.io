import CollisionBox from "../CollisionBox.js"
import UpdateList from "../UpdateList.js"

let sprite
function isNu(value) {
    return (value == null || value == undefined)
}
export default class Item extends Phaser.Physics.Matter.Sprite {
    /**
     * 
     * @param {object} physical 
     * @param {object} player 
     * @param {object} texture 
     * @param {object} stats 
     * phyisical = {scene, x, y, sizeObject, visible}
     * player = player, playerOffsetObject
     * texture = {textureName, textureFrame(optional)}
     * stats = {damage, range, cooldown, animations:{idle, attack, ability}}
     */
    
    constructor(physical, player, texture, stats) {
        let {scene, x, y, sizeObject, visible} = physical
        let itemForm = false
        let playerObject
        let playerOffsetObject = player.playerOffsetObject
        if (player != null) {
            playerObject = player.playerObject
            playerOffsetObject = player.playerOffsetObject
        } else {
             itemForm = true
             
        }
        
        let {textureName, textureFrame} = texture
        

        //OPTIONAL PARAMS
        textureFrame = (isNu(textureFrame)) ? textureFrame = "default": textureFrame = textureFrame //Checks if a textureFrame was passed in
        sizeObject = (isNu(sizeObject)) ? sizeObject = {x:1,y:1} : sizeObject = sizeObject
        visible = (isNu(visible)) ? visible = true : visible = visible
        playerOffsetObject = (isNu(playerOffsetObject)) ? playerOffsetObject = {x:1, y:1} : playerOffsetObject = playerOffsetObject
        
        
        
        
       
        super(scene.matter.world, x, y, textureName, textureFrame)
        //SETTING PROPERTIES
        if(playerObject != null) {
            playerObject.inventory.push(this)
             this.player = playerObject
             
         }
        this.playerOffset = playerOffsetObject 
        this.collisionBox = new CollisionBox("rectangle", x, y, {width:sizeObject.width, height:sizeObject.height}, false, "item",0)
        // this.setScale(sizeObject.width, sizeObject.height)
        this.setExistingBody(this.collisionBox.compoundBody)
        this.collisionBox.compoundBody.collisionFilter = {
            'group': 1,
            'category': 4,
            'mask': 5,
          };
        this.scene.add.existing(this);
        this.item = true
        sprite = this
        this.setDepth(3)
        this.itemForm = itemForm
        sprite.setScale(sizeObject.x, sizeObject.y)
        sprite.setVisible(visible)
        // sprite.setFixedRotation();
        sprite.setIgnoreGravity(true);
        UpdateList.push(this) //Allows the update() function to run.

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
    equip() {
        this.player.equippedItem = this
        this.equipped = true
        this.setActive(true).setVisible(true)
        this.setFixedRotation();      
    }
    playerPick(player) {
        
        this.itemForm = false
        this.setActive(false).setVisible(false)
        this.player = player
        player.inventory.push(this)
    }
    goToPlayer() {
        
        this.x = this.player.x + this.playerOffset.x
        this.y = this.player.y + this.playerOffset.y
    }
    attack() {
        this.player.touching.forEach(element => {
            if (element.healthBar != null) {
                element.healthBar.removeHealth(10)
                console.log(this)
                this.tweens.add({
                    
                })
            }
        });
    }
    update() {
        if (this.equipped == true && this.itemForm == false) {
            this.goToPlayer()
        }
    }
}