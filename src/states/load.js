//startpage
import bg from '../../public/assets/bg.jpg'
import longform_btn_1 from '../../public/assets/longform_btn_1.png'
import longform_btn from '../../public/assets/longform_btn.png'
import startgame_btn_2 from '../../public/assets/startgame_btn_2.png'
import startgame_btn from '../../public/assets/startgame_btn.png'
import title from '../../public/assets/title.png'

//first round
import firstbg from '../../public/assets/bg_game1.jpg'
import mycloud from '../../public/assets/cloud.png'


let LoadState = {

    init: function(){
        this.game.stage.backgroundColor = '#000'
    },

    preload: function(){
        //for loading progress
        var preloadSprite = this.game.add.sprite(this.game.width/2 - 220/2, this.game.height/2 - 19/2, 'preload')
        this.game.load.setPreloadSprite(preloadSprite)

        //startpage
        this.game.load.image('bg', bg)
        this.game.load.image('longform_btn_click', longform_btn_1)
        this.game.load.image('longform_btn', longform_btn)
        this.game.load.image('startgame_btn_click', startgame_btn_2)
        this.game.load.image('startgame_btn', startgame_btn)
        this.game.load.image('title', title)

        this.game.load.spritesheet('mycloud', mycloud, 224, 224)

        //level1
        this.game.load.image('firstbg', firstbg)

        this.game.load.onFileComplete.add(function(progress){
            // console.log(progress);
        });
    },

    create: function(){
        this.game.state.start('Start')
        // this.game.state.start('Play')
    }

}

module.exports = LoadState