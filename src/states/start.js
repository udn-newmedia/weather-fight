import LoadState from './load'

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

        }else if(this.beginning==="mycloudOS"){

            this.game.stage.backgroundColor = '#000'
            this.settingmycloud(this.game.world.centerX,this.game.world.centerY,0.5,0.5)

            var words = "我來自雲端，看不慣雲朵製造冰\n雹危害人類，要拯救地球不受冰\n雹攻擊。\n"

            //setting dialogue
            this.settingDialogue(this.mycloud.x, this.mycloud.y - this.mycloud.height*1.2, words)

            this.createStartPageBtn('btn_1_1', false)
            this.createStartPageBtn('btn_3_1', false)

        }else if(this.beginning==="intro1"){

            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloud()
            this.settinghearts(['redheart','redheart','redheart'])
            this.settingmask()
            this.settingmycloud(this.game.world.width,this.game.world.height*0.6,1,0.5)

            var words = [
                "在 時 間 內 使 用 手 指 拖 曳 移 動 雲 朵 ",
                "防 止 冰 雹 落 下 _"
            ]

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height*1.2)
            dialogue.content = words
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" }

            LoadState.typewriter(dialogue.img.x - (dialogue.img.width*0.8)/2,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)

            this.createStartPageBtn('btn_1_1', false)
            this.createStartPageBtn('btn_3_1', false)
            
        }else if(this.beginning==="demo1"){
            
        }else if(this.beginning==="intro2"){
            
        }else if(this.beginning==="demo2"){
            
        }
    },
    settingDialogue: function(x,y,words){

        var dialogueImg = this.game.add.image(x,y, 'dialogue') 
        dialogueImg.width = this.game.world.width * 0.8
        dialogueImg.height = this.game.world.height * 0.2
        dialogueImg.anchor.setTo(0.5,0.5)

        var dialogue = {}
        dialogue.img = dialogueImg
        dialogue.content = words

        if(dialogue.content){
            this.mycloudSpeaking(dialogue)
        }

        return dialogue
    },

    settingmycloud: function(x,y,anchor_x,anchor_y) {

        this.mycloud = this.game.add.sprite(x,y, 'mycloud')
        this.mycloud.anchor.setTo(anchor_x, anchor_y)
        this.mycloud.spritescale = 0.5
        this.mycloud.scale.setTo(this.mycloud.spritescale)
    },

    settinghearts: function(hearts) {

        var heart_3 = hearts[0]
        var heart_2 = hearts[1]
        var heart_1 = hearts[2]        

        var heartscale = 0.6
        this.heart3 = this.game.add.image(10,20,heart_3)
        this.heart2 = this.game.add.image(this.heart3.x + this.heart3.width * heartscale,20,heart_2)      
        this.heart1 = this.game.add.image(this.heart2.x + this.heart2.width * heartscale,20,heart_1)      
        this.heart3.scale.setTo(heartscale)
        this.heart2.scale.setTo(heartscale)
        this.heart1.scale.setTo(heartscale)
    },

    settingmask: function() {

        var bmd = this.game.make.bitmapData(this.game.world.width,this.game.world.height)
        bmd.addToWorld()
        bmd.rect(0,0,this.game.world.width,this.game.world.height,'rgba(0,0,0,0.6)')

    },

    settingBigcloud: function() {

        this.bigcloud = this.game.add.image(this.game.world.centerX, 10,'bigcloud')
        this.bigcloud.anchor.setTo(0.5,0)        
        var bigcloudImg = this.game.cache.getImage('bigcloud')
        this.bigcloud.width = this.game.world.width
        this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height
        this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55,'bigcloud_anger1')
        this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
        this.bigcloud_anger1.width = this.bigcloud.width/20
        this.bigcloud_anger1.height = this.bigcloud.width/20     

        this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8,'bigcloud_anger2')
        this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
        this.bigcloud_anger2.width = this.bigcloud.width/20
        this.bigcloud_anger2.height = this.bigcloud.width/20     
    },

    mycloudSpeaking: function(dialogue) {
        // var content = "我來自雲端，看不慣雲朵製造冰雹危害人類，要拯救地球不受冰雹攻擊。"

        var style = { font: "16px Microsoft JhengHei", fill: "#000", 
                    boundsAlignH: "center", boundsAlignV: "middle", 
                    wordWrap: true, wordWrapWidth: dialogue.width*0.6}

        var text = this.game.add.text(dialogue.img.x, dialogue.img.y,dialogue.content,style)
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
        // console.log("intro")       
        this.game.state.start('Start', true, false, 'intro1')         
    },

    onStartAnywayClick: function() {

        this.createStartPageBtn('btn_3_1',true)
        // console.log("start anyway")
        this.game.state.start('Play', true, false, 'level1')
    }

}

module.exports = StartState
