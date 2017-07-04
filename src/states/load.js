

let LoadState = {

    init: function(){
        this.game.stage.backgroundColor = '#000'
    },

    preload: function(){
        //for loading progress
        var preloadSprite = this.game.add.sprite(this.game.width/2 - 220/2, this.game.height/2 - 19/2, 'preload')
        this.game.load.setPreloadSprite(preloadSprite)

        //startpage
        this.game.load.image('bg', '../public/assets/bg.jpg')
        this.game.load.image('longform_btn_click', '../public/assets/longform_btn_1.png')
        this.game.load.image('longform_btn', '../public/assets/longform_btn.png')
        this.game.load.image('startgame_btn_click', '../public/assets/startgame_btn_2.png')
        this.game.load.image('startgame_btn', '../public/assets/startgame_btn.png')
        this.game.load.image('title', '../public/assets/title.png')

        this.game.load.onFileComplete.add(function(progress){
            // console.log(progress);
        });
    },

    create: function(){
        this.game.state.start('Start')
    }

}

module.exports = LoadState