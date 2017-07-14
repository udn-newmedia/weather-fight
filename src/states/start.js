import LoadState from './load'
import PlayState from './play'

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

            this.btnGenerator('btn_1_1', '開始遊戲', 0, false)        
            this.btnGenerator('btn_2_1', '觀看專題', 1, false)        

        }else if(this.beginning==="mycloudOS"){

            this.game.stage.backgroundColor = '#000'
            this.settingmycloud(this.game.world.centerX,this.game.world.centerY,0.5,0.5)

            var words = "我來自雲端，看不慣雲朵製造冰\n雹危害人類，要拯救地球不受冰\n雹攻擊。\n"

            //setting dialogue
            this.settingDialogue(this.mycloud.x, this.mycloud.y - this.mycloud.height*1.2, words)

            this.btnGenerator('btn_1_1', '遊戲說明', 0, false)        
            this.btnGenerator('btn_3_1', '直接開始', 1, false)        

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

            this.btnGenerator('btn_1_1', '下一步', 0, false)        
            this.btnGenerator('btn_3_1', '直接開始', 1, false)        
            
        }else if(this.beginning==="trial1"){

            this.game.physics.startSystem(Phaser.Physics.ARCADE)
            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloud()
            this.settinghearts(['redheart','redheart','redheart'])
            this.settingmask()
            PlayState.settingMyCloud(this.game.world.width,this.game.world.height*0.6)
            

        }else if(this.beginning==="intro2"){
            
        }else if(this.beginning==="trial2"){
            
        }
    },

    update: function(){
        if(this.beginning==="trial1"){
            PlayState.mycloudStop()
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
        this.mycloud.spritescale = 0.4
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

    btnGenerator: function(btnStyle, value, position, isClick){

        var width = 150
        var height = 48
        var x = this.game.world.centerX
        var lower_y = this.game.world.height * 0.9
        var upper_y = lower_y - height * 1.5
        var y = (position==0)?upper_y:lower_y
        var anchor_x = 0.5
        var anchor_y = (position==0)?0.2:0.4
        var txt_anchor_y = (position==0)?0:0.3
        var style = isClick?btnStyle+'_click':btnStyle

        var button = this.game.add.button(x, y, style, function() {
            this.btnGenerator(style, value, position, true)
        }, this, 1,1,0)

        button.anchor.setTo(anchor_x,anchor_y)
        button.width = width
        button.height = height

        var txt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}

        var button_txt = this.game.add.text(x, y, value, txt_style)
        button_txt.anchor.setTo(anchor_x,txt_anchor_y)

        if(isClick){
            switch(value){
                case '開始遊戲':
                    // console.log("start")
                    this.game.state.start('Start', true, false, 'mycloudOS')
                    break
                case '觀看專題':
                    console.log("longform")
                    break
                case '遊戲說明':
                    // console.log("introduction")
                    this.game.state.start('Start', true, false, 'intro1')         
                    break
                case '直接開始':
                    // console.log("start anyway")
                    this.game.state.start('Play', true, false, 'level1')
                    break
                case '下一步':
                    // console.log("next")
                    this.game.state.start('Start', true, false, 'trial1')         
                    break                            
            }
        }
    },

}

module.exports = StartState
