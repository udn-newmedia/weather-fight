let OverState = {
    init: function(){
        this.level = arguments[0]
        this.level_arg = arguments[1] || {}
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    },

    update: function(){
        if(this.level_arg !== 'end'){
            if(this.paperfloating.y >= this.sharebutton.y-this.sharebutton.height*1.5){
                this.paperfloating.body.velocity.y = 0
                this.paperfloating.frame = 2
                this.floatingAnim.stop()
            }
        }
    },

    create: function(){

        this.game.input.enabled = true

        if(this.level_arg==='end'){

            this.game.stage.backgroundColor = '#000'

            var padding_x = 15
            var padding_y = 0

            var comics = []

            var comic1 = this.game.add.image(padding_x,padding_y,'comic_1')
            comic1.scale.setTo(0.5)
            comic1.anchor.setTo(0,0)
            comic1.visible = false
            comics.push(comic1)

            var comic2 = this.game.add.image(this.game.world.width-padding_x,padding_y,'comic_2')
            comic2.scale.setTo(0.5)
            comic2.anchor.setTo(1,0)
            comic2.visible = false
            comics.push(comic2)
            
            var comic3 = this.game.add.image(this.game.world.centerX,comic1.y+comic1.height/2-5,'comic_3')
            comic3.scale.setTo(0.5)
            comic3.anchor.setTo(0.5,0)
            comic3.visible = false
            comics.push(comic3)
            
            var comic4 = this.game.add.image(comic3.x,comic3.y+comic3.height,'comic_4')
            comic4.scale.setTo(0.5)
            comic4.anchor.setTo(0.5,0)
            comic4.visible = false
            comics.push(comic4)

            var comic5 = this.game.add.image(comic1.x,comic4.y+comic4.height,'comic_5')
            comic5.scale.setTo(0.5)
            comic5.anchor.setTo(0,0)
            comic5.visible = false
            comics.push(comic5)
            
            var comic6 = this.game.add.image(comic2.x,comic4.y+comic4.height,'comic_6')
            comic6.scale.setTo(0.5)
            comic6.anchor.setTo(1,0)
            comic6.visible = false
            comics.push(comic6)            

            var ctr = 0
            var comicPlay = this.game.time.events.loop(Phaser.Timer.SECOND*0.5, function(){
                comics[ctr].visible = true
                ctr++

                if(ctr>=comics.length){
                    this.game.time.events.remove(comicPlay)
                }
            }, this)

        }else{

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
            var style = {font: "40px Microsoft JhengHei", fill: "#ffff00"}
            var failwords = this.game.add.text(this.game.world.centerX, failcloud.y-failcloud.height/2, '失敗~', style)
            failwords.anchor.setTo(0.5)

            this.replaybutton = this.btnGenerator('btn_1_1','再試一次', 1, false)
            this.longformbutton = this.btnGenerator('btn_2_1','觀看專題', 2, false)
            this.sharebutton = this.btnGenerator('btn_share','分享出去吧!', 0, false)

            var fbSize = this.game.cache.getImage('fb').width/2
            var fbshare = this.game.add.image(this.sharebutton.x-this.sharebutton.button_txt.width/2-fbSize, this.sharebutton.button_txt.y,'fb')
            fbshare.anchor.setTo(0.5,0.1)
            fbshare.scale.setTo(0.5)

            //紙張飄落
            this.paperfloating = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY/4, 'paper')
            this.paperfloating.anchor.setTo(0.5)
            this.floatingAnim = this.paperfloating.animations.add('paper');
            this.floatingAnim.play(5,true);

            this.game.physics.arcade.enable(this.paperfloating)
            this.paperfloating.body.velocity.y = 150
        }

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
                this.game.state.start('Play', true, false, this.level,'play')
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