

let StartState = {

    create: function(){
        
        var bg = this.game.add.image(0,0,'bg')
        bg.width = this.game.world.width
        bg.height = this.game.world.height

        var title = this.game.add.image(0,-100,'title')
        title.width = this.game.world.width * 1.1
        title.height = this.game.world.height * 0.6

        var titleTween = this.game.add.tween(title).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true)
        titleTween.start()

        this.createStartPageBtn('startgame_btn', false)
        this.createStartPageBtn('longform_btn', false)

    },

    createStartPageBtn: function(btnName, isClick) {
        var btn_width = 150
        var btn_height = 48
        var btn_x = this.game.world.centerX
        var startbtn_y = this.game.world.height * 0.8
        var longformbtn_y = this.game.world.height * 0.9
        var btn_anchor_x = 0.5
        var startbtn_anchor_y = 0.2
        var longformbtn_anchor_y = 0.4
        
        var name = isClick?btnName+'_click':btnName

        if(btnName==='startgame_btn') {

            var startbtn = this.game.add.button(btn_x, startbtn_y, name, this.onStartClick, this, 1,1,0)
            startbtn.anchor.setTo(btn_anchor_x,startbtn_anchor_y)
            startbtn.width = btn_width
            startbtn.height = btn_height

        } else if(btnName==='longform_btn') {

            var longformbtn = this.game.add.button(btn_x, longformbtn_y, name, this.onLongformClick, this, 1,1,0)
            longformbtn.anchor.setTo(btn_anchor_x,longformbtn_anchor_y)
            longformbtn.width = btn_width
            longformbtn.height = btn_height
        }

    },

    onStartClick: function() {
        
        this.createStartPageBtn('startgame_btn',true);
        // console.log("play")
        this.game.state.start('Play', true, false, 'level1')
    },

    onLongformClick: function() {
        
        this.createStartPageBtn('longform_btn',true);
        console.log("longform")
    }

}

module.exports = StartState
