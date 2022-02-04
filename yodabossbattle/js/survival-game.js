import MainScene from "./MainScene.js"

const config = {
    width: 512,
    height: 512,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'survival-game',
    scene: [MainScene],
    scale: {
        zoom:2,
        mode: Phaser.Scale.FIT
    },
    physics: {
        default: 'matter',
        matter: {
            debug:false ,
            gravity:{y:6.5},
        }
    },
    plugins: {
        scene: [
          {
            plugin: PhaserMatterCollisionPlugin, // The plugin class
            key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
            mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
          }
        ]
      }
}
    
new Phaser.Game(config)