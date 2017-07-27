// import preloader from '../../public/assets/preloader.gif'
// import mycloud from '../../public/assets/cloud.png'
// import mycloud from '../../public/assets/cloudman_248.png'
// import loader1 from '../../public/assets/loader_1.png'
// import loader2 from '../../public/assets/loader_2.png'

var Weather = Weather || {}

Weather.BootState = {

    init: function(){

        this.game.stage.backgroundColor = '#000'

        // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        if(this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }else{
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }

        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true
    },

    preload: function(){

        // this.game.load.image('preload', preloader)
        this.game.load.image('loader1', './public/assets/loader_1.png')
        this.game.load.image('loader2', './public/assets/loader_2.png')
        this.game.load.spritesheet('mycloud', './public/assets/cloudman_248.png', 248, 240)

    },

    create: function(){
        // this.game.stage.disableVisibilityChange = true; //continuing when the page is unfocused
        
        this.game.state.start('Load')

    }

}
