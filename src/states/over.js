let OverState = {
    init: function(){
        this.level = arguments[0]
        // this.level_arg = arguments[1]
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    },

    create: function(){
        this.game.input.enabled = true

        // this.game.stage.backgroundColor = '#000'
        var bg = this.game.add.image(0,0,'fail_bg')
        bg.width = this.game.world.width
        bg.height = this.game.world.height

        //failcloud
        var failcloud = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'failcloud')
        failcloud.scale.setTo(0.5)
        failcloud.anchor.setTo(0.5)
        var failAnim = failcloud.animations.add('failcloud');
        failAnim.play(5,false,false);

        //words
        var style = {font: "22px Microsoft JhengHei", fill: "#ffff00"}
        var failwords = this.game.add.text(this.game.world.centerX, failcloud.y-failcloud.height/2, '失敗~', style)
        failwords.anchor.setTo(0.5)

        this.replaybutton = this.btnGenerator('btn_1_1','再試一次', 1, false)
        this.longformbutton = this.btnGenerator('btn_2_1','觀看專題', 2, false)
        this.sharebutton = this.btnGenerator('btn_share','分享出去吧!', 0, false)

    },

    btnGenerator: function(btnStyle, value, position, isClick){
        //position: 0(最上面),1(左下),2(右下)

        if(position===0){
                var width = this.game.world.width * 0.9
                var height = 48
                var x = this.game.world.centerX
                var y = this.replaybutton.y - this.replaybutton.height*1.2
                var anchor_x = 0.5
        }else if(position===1){
                var width = this.game.world.width * 0.43
                var height = 48
                var x = this.game.world.width * 0.25
                var y = this.game.world.height*0.9
                var anchor_x = 0.45
        }else if(position===2){
                var width = this.game.world.width * 0.43
                var height = 48
                var x = this.game.world.width* 0.75
                var y = this.game.world.height*0.9
                var anchor_x = 0.55
        }

        // switch(position){
        //     case 0:
        //         var width = this.game.world.width * 0.9
        //         var height = 48
        //         var x = this.game.world.centerX
        //         var y = this.replaybutton.y - this.replaybutton.height*1.2
        //         var anchor_x = 0.5
        //         break
        //     case 1:
        //         var width = this.game.world.width * 0.43
        //         var height = 48
        //         var x = this.game.world.width * 0.25
        //         var y = this.game.world.height*0.9
        //         var anchor_x = 0.45
        //         break
        //     case 2:
        //         var width = this.game.world.width * 0.43
        //         var height = 48
        //         var x = this.game.world.width* 0.75
        //         var y = this.game.world.height*0.9
        //         var anchor_x = 0.55
        //         break
        // }

        var anchor_y = 0.2
        var txt_anchor_y = 0

        var style = isClick?btnStyle+'_click':btnStyle

        var button = this.game.add.button(x, y, style, function() {
            this.btnGenerator(style, value, position, true)
        }, this, 1,1,0)

        button.anchor.setTo(anchor_x,anchor_y)
        button.width = width
        button.height = height

        var txt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}

        button.button_txt = this.game.add.text(x, y, value, txt_style)
        button.button_txt.anchor.setTo(anchor_x,txt_anchor_y)

        if(isClick){
            this.stateChanger(value)
        }

        return button
    },

    stateChanger: function(value){

        switch(value){
            case '再試一次':
                this.game.state.start('Play', true, false, 'level1','play')
                break
            case '觀看專題':
                console.log('longform')
                break
            case '分享出去吧!':
                console.log('share FB')
                break
        }
    }

}

module.exports = OverState