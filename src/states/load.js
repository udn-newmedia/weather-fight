//startpage
import talking from '../../public/assets/talking.png'
import bg from '../../public/assets/bg.jpg'
import longform_btn_1 from '../../public/assets/longform_btn_1.png'
import longform_btn from '../../public/assets/longform_btn.png'
import startgame_btn_2 from '../../public/assets/startgame_btn_2.png'
import startgame_btn from '../../public/assets/startgame_btn.png'
import title from '../../public/assets/title.png'
import btn_1_1 from '../../public/assets/btn_1_1.png'
import btn_1_2 from '../../public/assets/btn_1_2.png'
import btn_2_1 from '../../public/assets/btn_2_1.png'
import btn_2_2 from '../../public/assets/btm_2_2.png'
import btn_3_1 from '../../public/assets/btn_3_1.png'
import btn_3_2 from '../../public/assets/btn_3_2.png'

//first round
import firstbg from '../../public/assets/bg_game1.jpg'
// import mycloud from '../../public/assets/cloud.png'
import darksky from '../../public/assets/darksky_1.png'
import blackcloud1 from '../../public/assets/blackcloud_1.png'
import blackcloud2 from '../../public/assets/blackcloud_2.png'
import bigcloud from '../../public/assets/bigcloud.png'
import hail from '../../public/assets/ball_1_93.png'
import corn from '../../public/assets/corn_1_240.png'
import heart_1 from '../../public/assets/heart_1.png'
import heart_2 from '../../public/assets/heart_2.png'
import ice_break from '../../public/assets/ice_break.png'
import cloud from '../../public/assets/cloud_1.png'
import bigcloud_anger1 from '../../public/assets/bigcloud_anger1.png'
import bigcloud_anger2 from '../../public/assets/bigcloud_anger2.png'
import cow from '../../public/assets/cow_1_70.png'
import bigice from '../../public/assets/bigice_186.png'
import icecloud from '../../public/assets/icecloud.png'
import mr_wang from '../../public/assets/mr_wang.png'

let LoadState = {

    init: function(){
        this.game.stage.backgroundColor = '#000'

        //mycloud
        this.mycloud = this.game.add.sprite(this.game.world.centerX , this.game.world.height/2, 'mycloud')
        this.mycloud.anchor.setTo(0.5, 0.5)
        this.mycloud.spritescale = 0.5
        this.mycloud.scale.setTo(this.mycloud.spritescale)
        this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)
        this.mycloud.animations.play('run')

        var words = [
            "每 到 夏 天 ， 除 了 颱 風 外 ， 對 流 旺 ",
            "盛 也 常 帶 來 冰 雹 等 災 害 性 天 氣 ， ",
            "現 在 你 有 機 會 拯 救 台 灣 不 受 冰 雹 ",
            "侵 襲 ， 你 準 備 好 了 嗎 ？ _ "
        ]

        var dialogue = {}
        dialogue.content = words

        this.typewriter(this.game.world.width * 0.21,this.mycloud.y-this.mycloud.height*2, dialogue)
    },

    preload: function(){
        //for loading progress
        var preloadSprite = this.game.add.sprite(this.game.width/2 - 220/2, this.mycloud.y + this.mycloud.height/2, 'preload')
        this.game.load.setPreloadSprite(preloadSprite)

        //startpage
        this.game.load.image('dialogue', talking)        
        this.game.load.image('bg', bg)
        this.game.load.image('longform_btn_click', longform_btn_1)
        this.game.load.image('longform_btn', longform_btn)
        this.game.load.image('startgame_btn_click', startgame_btn_2)
        this.game.load.image('startgame_btn', startgame_btn)
        this.game.load.image('title', title)
        this.game.load.image('btn_1_1', btn_1_1)
        this.game.load.image('btn_1_1_click', btn_1_2)
        this.game.load.image('btn_2_1', btn_2_1)
        this.game.load.image('btn_2_1_click', btn_2_2)
        this.game.load.image('btn_3_1', btn_3_1)
        this.game.load.image('btn_3_1_click', btn_3_2)

        //level1
        this.game.load.image('firstbg', firstbg)
        // this.game.load.spritesheet('mycloud', mycloud, 224, 224)
        this.game.load.image('darksky', darksky)
        this.game.load.image('blackcloud1', blackcloud1)
        this.game.load.image('blackcloud2', blackcloud2)
        this.game.load.image('bigcloud', bigcloud)
        this.game.load.spritesheet('hail', hail, 93,93)        
        this.game.load.spritesheet('corn', corn, 240,189)                
        this.game.load.image('redheart', heart_1)
        this.game.load.image('blackheart', heart_2)
        this.game.load.image('ice_break', ice_break)
        this.game.load.image('cloud', cloud)
        this.game.load.image('icecloud', icecloud)
        this.game.load.image('bigcloud_anger1', bigcloud_anger1)
        this.game.load.image('bigcloud_anger2', bigcloud_anger2)
        this.game.load.spritesheet('cow', cow,70,60)
        this.game.load.spritesheet('bighail', bigice, 557/3, 187)     
        this.game.load.image('wang', mr_wang)                

        this.game.load.onFileComplete.add(function(progress){
            // console.log(progress);
        });
    },

    create: function(){

        // if(this.finished && this.game.state.current==="Load"){
            this.game.state.start('Start', true, false, 'startpage')
        // }
        
    },

    update: function(){

        if(this.finished && this.game.state.current==="Load"){
            this.game.state.start('Start', true, false, 'startpage')
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
    }

}

module.exports = LoadState