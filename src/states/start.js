

let StartState = {

    init: function(){

        this.game.stage.backgroundColor = '#000'

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

    },

    preload: function(){

        this.game.load.image('preload','../public/assets/preloader.gif')

    },

    create: function(){
        // this.game.stage.disableVisibilityChange = true; //continuing when the page is unfocused
        
        this.game.state.start('Load')

    }

}

module.exports = StartState
