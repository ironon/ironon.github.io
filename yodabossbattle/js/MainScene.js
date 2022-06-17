import BabyYoda from "./BabyYoda.js";
import PhysicsParticle from "./PhysicsParticle.js";
import Player from "./Player.js";
import UpdateList from "./UpdateList.js";
import LoadList from "./LoadList.js";
import PlayerList from "./PlayerList.js";
import IronSword from "./items/IronSword.js";
import config from "./survival-game.js";



export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
        
    }
    
    preload() {
        LoadList.forEach(element => {
            element.preload(this);
        });
        //scene.load.audio('groundpound',['assets/audio/groundpound.mp3'])
        
        this.load.image('tiles','assets/images/RPGNatureTileset.png')
        this.load.tilemapTiledJSON('map','assets/images/map.json')
        this.load.audio('music', 'assets/audio/battlemusic.mp3')
       
    
    }
    create() {
        

        this.scale.displaySize.setAspectRatio(1);
        this.scale.refresh();
        const map = this.make.tilemap({key:'map'});
        // map.setBaseTileSize(64, 64);
        // map.setLayerTileSize(64, 64)
        const tileset = map.addTilesetImage('RPGNatureTileset','tiles',32,32,0,0);
        let layer1 = map.createLayer('Tile Layer 1', tileset, 0, 0)
        let layer2 = map.createLayer('Tile Layer 2', tileset, 0, 0)
        layer1.setScale(2, 2)
        layer2.setScale(2, 2)
        
        const scene = this
        
        // this.scale.displaySize.setAspectRatio( window.innerWidth/window.innerHeight );
        // this.scale.refresh();
        layer1.setCollisionByProperty({col:true});
        layer1.collisionFilter = {
            'group': 1,
            'category': 5,
            'mask': 4,
          };
        let music = this.sound.add('music')
       // music.play()
        this.matter.world.convertTilemapLayer(layer1)
        this.player = new Player({scene:this, x:200, y:200, texture:'thief',frame:'thief_idle_1'})
        
        this.bossMob = new BabyYoda({scene:this, x:config.width / 1.9, y:config.height /  2.5, texture:'baby_yoda',frame:'babyyoda_0'})
        this.player.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            sprint: Phaser.Input.Keyboard.KeyCodes.SHIFT,
            inventory_left: Phaser.Input.Keyboard.KeyCodes.E,
            inventory_right: Phaser.Input.Keyboard.KeyCodes.R,
            pick_item: Phaser.Input.Keyboard.KeyCodes.Q
            
        })
        
        let ground_particles = ["sand_particle","grass_particle","grass_chunk","rock_particle"]
        let offset = 0
       let testItem = new IronSword(this, 400, 400, null)
            
            
        //Making a mob jumb in a top-down game isn't exactly straightforward, but the physics engine is already configured
        //for a side view, so im kinda cheating it by making it jump on an invisible platform.
        
        
        
        
    }

    update() {
        this.player.update();
        this.bossMob.update();
        //console.log(UpdateList)
        UpdateList.forEach(element => {
            element.update()
        });
    }
    
}