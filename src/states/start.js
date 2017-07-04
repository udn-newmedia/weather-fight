

let StartState = {

    create: function(){
        
        var bg = this.game.add.image(0,0,'bg')
        bg.width = this.game.world.width
        bg.height = this.game.world.height

        var title = this.game.add.image(0,0,'title')
        title.width = this.game.world.width * 1.1
        title.height = this.game.world.height * 0.6
        
        var startbtn = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.8, 'startgame_btn', this.onStartClick, this, 1,1,0)
        startbtn.anchor.setTo(0.5,0.2)
        startbtn.width = 150
        startbtn.height = 48

        var longformbtn = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.9, 'longform_btn', this.onLongformClick, this, 1,1,0)
        longformbtn.anchor.setTo(0.5,0.4)
        longformbtn.width = 150
        longformbtn.height = 48

    },

    update: function(){
    },

    onStartClick: function() {
        // this.game.state.start('Play')
        var startbtn_click = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.8, 'startgame_btn_2', this.onStartClick, this, 1,1,0)
        startbtn_click.anchor.setTo(0.5,0.2)
        startbtn_click.width = 150
        startbtn_click.height = 48

        console.log("start")
    },

    onLongformClick: function() {
        var startbtn_click = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.9, 'longform_btn_1', this.onStartClick, this, 1,1,0)
        startbtn_click.anchor.setTo(0.5,0.4)
        startbtn_click.width = 150
        startbtn_click.height = 48

        console.log("longform")
    }

}

module.exports = StartState
