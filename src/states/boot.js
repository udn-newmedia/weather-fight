import preloader from '../../public/assets/preloader.gif'
import mycloud from '../../public/assets/cloud.png'


let BootState = {

    init: function(){

        this.game.stage.backgroundColor = '#000'

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

    },

    preload: function(){

        this.game.load.image('preload', preloader)
        this.game.load.spritesheet('mycloud', mycloud, 224, 224)

    },

    create: function(){
        // this.game.stage.disableVisibilityChange = true; //continuing when the page is unfocused
        
        this.game.state.start('Load')

    }

}

module.exports = BootState
