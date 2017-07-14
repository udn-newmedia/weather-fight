

let StartState = {

    init: function(beginning){

        this.beginning = beginning
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    },

    create: function(){

        if(this.beginning==="startpage"){
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
        }
        else{
            this.game.stage.backgroundColor = '#000'
            //setting mycloud
            var mycloud = this.game.add.sprite(this.game.world.centerX , this.game.world.height/2, 'mycloud')
            mycloud.anchor.setTo(0.5, 0.5)
            mycloud.spritescale = 0.5
            mycloud.scale.setTo(mycloud.spritescale)
            //setting dialogue
            var dialogue = this.game.add.image(mycloud.x, mycloud.y - mycloud.height, 'dialogue') 
            dialogue.width = this.game.world.width * 0.8
            dialogue.height = this.game.world.height * 0.2
            dialogue.anchor.setTo(0.5,0.5)
            this.mycloudSpeaking(dialogue)
            this.createStartPageBtn('btn_1_1', false)
            this.createStartPageBtn('btn_3_1', false)            
        }
    },

    mycloudSpeaking: function(dialogue) {
        var content = "我來自雲端，看不慣雲朵製造冰\n雹危害人類，要拯救地球不受冰\n雹攻擊。\n"
        // var content = "我來自雲端，看不慣雲朵製造冰雹危害人類，要拯救地球不受冰雹攻擊。"

        var style = { font: "16px Microsoft JhengHei", fill: "#000", 
                    boundsAlignH: "center", boundsAlignV: "middle", 
                    wordWrap: true, wordWrapWidth: dialogue.width*0.6}

        var text = this.game.add.text(dialogue.x, dialogue.y,content,style)
        text.anchor.setTo(0.5,0.5)
    },

    createStartPageBtn: function(btnName, isClick) {
        var btn_width = 150
        var btn_height = 48
        var btn_x = this.game.world.centerX
        var longformbtn_y = this.game.world.height * 0.9
        // var startbtn_y = this.game.world.height * 0.8
        var startbtn_y = longformbtn_y - btn_height * 1.5
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

        } else if(btnName==='btn_1_1'){

            var introbtn = this.game.add.button(btn_x, startbtn_y, name, this.onIntroClick, this, 1,1,0)
            introbtn.anchor.setTo(btn_anchor_x,startbtn_anchor_y)
            introbtn.width = btn_width
            introbtn.height = btn_height

            var btntxt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}

            var introbtn_txt = this.game.add.text(introbtn.x, introbtn.y,"遊戲說明",btntxt_style)
            introbtn_txt.anchor.setTo(btn_anchor_x,0)

        } else if (btnName==='btn_3_1'){

            var startAnywaybtn = this.game.add.button(btn_x, longformbtn_y, name, this.onStartAnywayClick, this, 1,1,0)
            startAnywaybtn.anchor.setTo(btn_anchor_x,longformbtn_anchor_y)
            startAnywaybtn.width = btn_width
            startAnywaybtn.height = btn_height

            var btntxt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}

            var startAnywaybtn_txt = this.game.add.text(startAnywaybtn.x, startAnywaybtn.y,"直接開始",btntxt_style)
            startAnywaybtn_txt.anchor.setTo(btn_anchor_x,0.3)

        }

    },

    onStartClick: function() {
        
        this.createStartPageBtn('startgame_btn',true)
        // console.log("play")
        // this.game.state.start('Play', true, false, 'level1')
        this.game.state.start('Start', true, false, 'mycloudOS')
    },

    onLongformClick: function() {
        
        this.createStartPageBtn('longform_btn',true)
        console.log("longform")
    }, 

    onIntroClick: function() {
        this.createStartPageBtn('btn_1_1',true)
        console.log("intro")        
    },

    onStartAnywayClick: function() {
        this.createStartPageBtn('btn_3_1',true)
        // console.log("start anyway")
        this.game.state.start('Play', true, false, 'level1')
    }

}

module.exports = StartState
