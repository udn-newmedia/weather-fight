var title = $('title').text()
var isMob = detectmob();
var platform = (isMob == true) ? 'Mob' : 'PC'

var Weather = Weather || {}

Weather.StartState = {

    init: function(beginning){
        this.beginning = beginning
        // this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
        if(this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }else{
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }

        this.window500 = (this.game.scale.width===500)?true:false
    },

    create: function(){

        if(this.beginning==="startpage"){

            this.bgsound = this.game.add.audio('bgsound', 0.2, true)

            this.backgroundMusicControler('play')

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

            this.backgroundMusicControler('play')

            this.game.stage.backgroundColor = '#000'
            this.settingmycloud(this.game.world.centerX,this.game.world.centerY,0.5,0.5)

            // var words = "我來自雲端，看不慣雲朵製造冰\n雹危害人類，要拯救地球不受冰\n雹攻擊。\n"
            // this.settingDialogue(this.mycloud.x, this.mycloud.y - this.mycloud.height*1.2, words)

            var words = [
                "我 來 自 雲 端 ， 看 不 慣 雲 朵 製 造 冰 ",
                "雹 ， 害 人 類 受 傷 ， 所 以 我 決 定 來 ",
                "拯 救 大 家 ! _"
            ]

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height*1.2)                

            dialogue.content = words

            if(this.game.world.width < 350){
                var font_rwd = '16px'
                var padding_left = 15
            }else if(this.game.world.width >= 350 && this.game.world.width < 400){
                var font_rwd = '18px'
                var padding_left = 20
            }else if(this.game.world.width >= 400 && this.game.world.width < 500){
                var font_rwd = '20px'
                var padding_left = 20
            }else{
                var font_rwd = '24px'
                var padding_left = 30
            }

            dialogue.style = { font: font_rwd+" Microsoft JhengHei", fill: "#000" }

            this.typewriter(dialogue.img.x - dialogue.img.width/2 + padding_left,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)

            // this.btnGenerator('btn_1_1', '遊戲說明', 0, false)        
            this.btnGenerator('btn_3_1', '好!', 0, false)        

        }else if(this.beginning==="intro1"){

            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloud()
            this.settinghearts(['redheart','redheart','redheart'])
            this.settingmask()
            this.settingmycloud(this.game.world.width*0.85,this.game.world.height*0.6)

            var words = [
                "在 時 間 內 使 用 手 指 拖 曳 移 動 雲 朵 ",
                "防 止 冰 雹 落 下 _"
            ]

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height*1.2)
            dialogue.content = words
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" }

            this.typewriter(dialogue.img.x - (dialogue.img.width*0.8)/2,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)

            this.btnGenerator('btn_1_1', '下一步', 0, false)        
            this.btnGenerator('btn_3_1', '直接開始', 1, false)        
            
        }else if(this.beginning==="intro2"){

            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloud()
            this.settingmask()
            this.settinghearts(['redheart','redheart','redheart'])
            this.settingmycloud(this.game.world.width*0.85,this.game.world.height*0.6)

            var words = [
                "若 冰 雹 打 中 目 標 物 ， 則 會 損 失 一 ",
                "個 愛 心 ， 當 三 顆 愛 心 歸 零 則 遊 戲",
                "結 束 。"
            ]

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height*1.2)
            dialogue.content = words
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" }

            this.typewriter(dialogue.img.x - (dialogue.img.width*0.8)/2,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)

            //twinkling hearts
            var twinklingHearts= this.game.add.tween(this.hearts).to({alpha: 0}, 500, "Linear", true)
            twinklingHearts.yoyo(true,500)
            twinklingHearts.repeat(10,1000)

            this.btnGenerator('btn_1_1', '下一步', 0, false)        
            this.btnGenerator('btn_3_1', '直接開始', 1, false)        
        }
    },

    settingDialogue: function(x,y,words){

        var dialogueImg = this.game.add.image(x,y, 'dialogue') 
        dialogueImg.width = this.game.world.width*0.8
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
        var mycloud_x = x || this.game.world.centerX
        var mycloud_y = y || this.game.world.height * 0.7
        var anchorX = anchor_x || 0.5
        var anchorY = anchor_y || 0.5

        this.mycloud = this.game.add.sprite(mycloud_x,mycloud_y, 'mycloud')
        this.mycloud.anchor.setTo(anchorX, anchorY)
        this.mycloud.spritescale = 0.4
        this.mycloud.scale.setTo(this.mycloud.spritescale)

        this.mycloud.animations.add('static', [0, 1, 0, 2, 0, 1, 0, 3],10, true)
        this.mycloud.animations.play('static')
    },

    settinghearts: function(hearts) {

        var heart_3 = hearts[0]
        var heart_2 = hearts[1]
        var heart_1 = hearts[2]        

        var heartscale = 0.6
        var heart3 = this.game.add.image(10,20,heart_3)
        var heart2 = this.game.add.image(heart3.x + heart3.width * heartscale,20,heart_2)      
        var heart1 = this.game.add.image(heart2.x + heart2.width * heartscale,20,heart_1)      
        heart3.scale.setTo(heartscale)
        heart2.scale.setTo(heartscale)
        heart1.scale.setTo(heartscale)

        this.hearts = this.game.add.group()
        this.hearts.add(heart1)
        this.hearts.add(heart2)
        this.hearts.add(heart3)
        
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

        var x = this.game.world.centerX
        var anchor_x = 0.5
        var anchor_y = (position==0)?0.2:0.4
        var txt_anchor_y = (position==0)?0:0.3
        var style = isClick?btnStyle+'_click':btnStyle

        var width = 150
        var height = 48
        var lower_y = this.game.world.height * 0.9
        var upper_y = lower_y - height * 1.5

        var y = (position==0)?upper_y:lower_y

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
            var buttonclicksound = this.game.add.audio('buttonclick', 0.1, false)
            try{
                buttonclicksound.play()
            } catch(e){
            }

            this.stateChanger(value)

            //ga            
            ga("send", {
                "hitType": "event",
                "eventCategory": "按鈕點擊",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [" + value + "]"
            })

        }
    },

    stateChanger: function(value){

        switch(value){
            case '開始遊戲':
                // console.log("start")
                if($(window).width() < 500){
                    $('#head').css('opacity', 0);
                }
                this.game.state.start('Start', true, false, 'mycloudOS')
                this.backgroundMusicControler('stop')
                break
            case '觀看專題':
                this.bgsound.stop()
                window.open("https://udn.com/upf/newmedia/2017_data/summerweather/game.html", "_blank")
                // this.game.state.start('Over', true, false, 'level3','end')//測試用
                break
            case '好!':
                // console.log("start anyway")
                this.game.state.start('Play', true, false, 'level1', 'trial1-1')
                this.backgroundMusicControler('stop')
                break                         
        }
    },

    typewriter: function(x,y,dialogue){

        this.content = dialogue.content

        this.line = []
        this.wordIndex = 0
        this.lineIndex = 0;
        
        this.wordDelay = 100;
        this.lineDelay = 0;

        this.finished = false

        var style = dialogue.style ||{ font: "16px Microsoft JhengHei", fill: "#fff" }

        this.text = this.game.add.text(x, y, '', style);
        this.nextLine()
    },

    nextLine: function(){

        if (this.lineIndex === this.content.length)
        {
            //  We're finished
            this.game.time.events.add(Phaser.Timer.SECOND * 2,function(){
                this.finished = true
            },this)

            return;
        }

        //  Split the current line on spaces, so one word per array element
        this.line = this.content[this.lineIndex].split(' ');

        //  Reset the word index to zero (the first word in the line)
        this.wordIndex = 0;

        //  Call the 'nextWord' function once for each word in the line (line.length)
        this.game.time.events.repeat(this.wordDelay, this.line.length, this.nextWord, this);

        //  Advance to the next line
        this.lineIndex++;
    },

    nextWord: function(){

        //  Add the next word onto the text string, followed by a space
        this.text.text = this.text.text.concat(this.line[this.wordIndex]);

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length)
        {
            //  Add a carriage return
            this.text.text = this.text.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.game.time.events.add(this.lineDelay, this.nextLine, this);
        }
    },

    backgroundMusicControler: function(option){
        
        if(option==='play'){
            //聲音出錯不影響
            try{
                this.bgsound.play()
            } catch(e){
            }

        }else if(option==='stop'){

            try{
                this.bgsound.stop()
            } catch(e){
            }

        }
    }

}

// module.exports = StartState
