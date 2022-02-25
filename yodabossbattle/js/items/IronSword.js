import ScaleFactor from "../ScaleFactor.js";
import Item from "./Item.js";

export default class IronSword extends Item {
    constructor(scene, x, y, player) {
        super({scene:scene, x:x, y:y, sizeObject: {width:15, height:15}},{playerObject:player, playerOffsetObject:{x:1, y:1}},{textureName:'iron_sword'})
        this.setScale(1 * ScaleFactor, 1 * ScaleFactor)
    }
    static preload(scene) {
        scene.load.atlas('iron_sword', "assets/images/items/iron_sword.png", "assets/images/items/iron_sword_atlas.json")
    }
}