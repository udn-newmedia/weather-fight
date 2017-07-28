// //startpage
// import talking from '../../public/assets/talking.png'
// import bg from '../../public/assets/bg.jpg'
// import longform_btn_1 from '../../public/assets/longform_btn_1.png'
// import longform_btn from '../../public/assets/longform_btn.png'
// import startgame_btn_2 from '../../public/assets/startgame_btn_2.png'
// import startgame_btn from '../../public/assets/startgame_btn.png'
// import title from '../../public/assets/title.png'
// import btn_1_1 from '../../public/assets/btn_1_1.png'
// import btn_1_2 from '../../public/assets/btn_1_2.png'
// import btn_2_1 from '../../public/assets/btn_2_1.png'
// import btn_2_2 from '../../public/assets/btm_2_2.png'
// import btn_3_1 from '../../public/assets/btn_3_1.png'
// import btn_3_2 from '../../public/assets/btn_3_2.png'

// //level1
// import firstbg from '../../public/assets/bg_game1.jpg'
// // import mycloud from '../../public/assets/cloud.png'
// import darksky1 from '../../public/assets/darksky_1.png'
// import blackcloud1 from '../../public/assets/blackcloud_1.png'
// import blackcloud2 from '../../public/assets/blackcloud_2.png'
// import bigcloud from '../../public/assets/bigcloud.png'
// import hail from '../../public/assets/ball_1_93.png'
// import corn from '../../public/assets/corn_1_240.png'
// import heart_1 from '../../public/assets/heart_1.png'
// import heart_2 from '../../public/assets/heart_2.png'
// // import ice_break from '../../public/assets/ice_break.png'
// import ice1 from '../../public/assets/ice_1.png'
// import ice2 from '../../public/assets/ice_2.png'
// import ice3 from '../../public/assets/ice_3.png'
// import cloud from '../../public/assets/cloud_1.png'
// import bigcloud_anger1 from '../../public/assets/bigcloud_anger1.png'
// import bigcloud_anger2 from '../../public/assets/bigcloud_anger2.png'
// import cow from '../../public/assets/cow_1_70.png'
// import bigice from '../../public/assets/bigice_186.png'
// import icecloud from '../../public/assets/icecloud.png'
// import mr_wang from '../../public/assets/mr_wang.png'
// import mr_wang_happy from '../../public/assets/game1_start2.png'

// //level2
// import secondbg from '../../public/assets/bg_game2.jpg'
// import people1 from '../../public/assets/people_1_240.png'
// import people2 from '../../public/assets/people_2_240.png'
// import people3 from '../../public/assets/people_3_240.png'
// import darksky2 from '../../public/assets/darksky_2.png'
// import game2_start from '../../public/assets/game2_start.png'
// import game2_start2 from '../../public/assets/game2_start_2.png'
// import finger from '../../public/assets/finger.png'
// import bird from '../../public/assets/bird_1_80.png'

// //level3
// import thirdbg from '../../public/assets/bg_game3.jpg'
// import car1 from '../../public/assets/car_1_240.png'
// import car2 from '../../public/assets/car_2_240.png'
// import car3 from '../../public/assets/car_3_240.png'
// import car4 from '../../public/assets/car_4_240.png'
// import darksky3 from '../../public/assets/darksky_3.png'
// import iceground from '../../public/assets/iceground_240.png'
// import police from '../../public/assets/game3_start.png'
// import angrycloud from '../../public/assets/angrycloud.png'
// import blackcar from '../../public/assets/blackcar.png'
// import highway from '../../public/assets/highway.png'


// //banner
// import alarmbanner from '../../public/assets/alarm_300.png'
// import passedbanner from '../../public/assets/complete_300.png'

// //fail
// import fail_bg from '../../public/assets/fail_bg.jpg'
// import btn_share from '../../public/assets/btn_share.png'
// import fail_510 from '../../public/assets/fail_510.png'
// import fb from '../../public/assets/fb.jpg'
// import paper from '../../public/assets/paper_100.png'
// import share_1 from '../../public/assets/share_1.png'
// import share_2 from '../../public/assets/share_2.png'
// import share_3 from '../../public/assets/share_3.png'
// import share_4 from '../../public/assets/share_4.png'

// //sounds
// import bgsound from '../../public/assets/Mr_Turtle.mp3'
// import buttonclick from '../../public/assets/clickbutton_01.mp3'
// import passed from '../../public/assets/passed_01.mp3'
// import catchhail from '../../public/assets/catch.mp3'
// import catchbighail from '../../public/assets/bigcatch_01.mp3'
// import fail from '../../public/assets/fail_01.mp3'
// import losshail from '../../public/assets/loss_01.mp3'

// //end
// import comic_1 from '../../public/assets/comic_1.png'
// import comic_2 from '../../public/assets/comic_2.png'
// import comic_3 from '../../public/assets/comic_3.png'
// import comic_4 from '../../public/assets/comic_4.png'
// import comic_5 from '../../public/assets/comic_5.png'
// import comic_6 from '../../public/assets/comic_6.png'


function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

var Weather = Weather || {}

Weather.LoadState = {

    init: function(){
        this.game.stage.backgroundColor = '#000'

        //small creen
        if($(window).width() < 375 && isFacebookApp()){
            $('#head').delay(500).css('opacity', 0)
        }

        //mycloud
        this.mycloud = this.game.add.sprite(this.game.world.centerX , this.game.world.height/2, 'mycloud')
        this.mycloud.anchor.setTo(0.5, 0.5)
        this.mycloud.spritescale = 0.5
        this.mycloud.scale.setTo(this.mycloud.spritescale)
        // this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)
        this.mycloud.animations.add('run', [5, 4, 5, 6, 7, 6], 10, true)
        this.mycloud.animations.play('run')

        var words = [
            "每 到 夏 天 ， 除 了 颱 風 外 ， 對 流 旺 ",
            "盛 也 常 帶 來 冰 雹 等 災 害 性 天 氣 ， ",
            "現 在 你 有 機 會 拯 救 台 灣 不 受 冰 雹 ",
            "侵 襲 ， 你 準 備 好 了 嗎 ？ _ "
        ]

        var dialogue = {}
        dialogue.content = words

        this.typewriter(this.mycloud.x - this.mycloud.width*0.9,this.mycloud.y-this.mycloud.height*1.5, dialogue)
    },

    preload: function(){
        //for loading progress
        this.game.add.sprite(this.game.width/2 - 220/2, this.mycloud.y + this.mycloud.height/2, 'loader1')
        var preloadSprite = this.game.add.sprite(this.game.width/2 - 220/2, this.mycloud.y + this.mycloud.height/2, 'loader2')
        this.game.load.setPreloadSprite(preloadSprite)

        //startpage
        this.game.load.image('dialogue', './public/assets/talking.png')        
        this.game.load.image('bg', './public/assets/bg.jpg')
        this.game.load.image('longform_btn_click', './public/assets/longform_btn_1.png')
        this.game.load.image('longform_btn', './public/assets/longform_btn.png')
        this.game.load.image('startgame_btn_click', './public/assets/startgame_btn_2.png')
        this.game.load.image('startgame_btn', './public/assets/startgame_btn.png')
        this.game.load.image('title', './public/assets/title.png')
        this.game.load.image('btn_1_1', './public/assets/btn_1_1.png')
        this.game.load.image('btn_1_1_click', './public/assets/btn_1_2.png')
        this.game.load.image('btn_2_1', './public/assets/btn_2_1.png')
        this.game.load.image('btn_2_1_click', './public/assets/btm_2_2.png')
        this.game.load.image('btn_3_1', './public/assets/btn_3_1.png')
        this.game.load.image('btn_3_1_click', './public/assets/btn_3_2.png')

        //banner
        this.game.load.spritesheet('alarmbanner', './public/assets/alarm_300.png', 300,94)        
        this.game.load.spritesheet('passedbanner', './public/assets/complete_300.png', 300,94)                

        //level1
        this.game.load.image('firstbg', './public/assets/bg_game1.jpg')
        // this.game.load.spritesheet('mycloud', mycloud, 224, 224)
        this.game.load.image('darksky1', './public/assets/darksky_1.png')
        this.game.load.image('blackcloud1', './public/assets/blackcloud_1.png')
        this.game.load.image('blackcloud2', './public/assets/blackcloud_2.png')
        this.game.load.image('bigcloud', './public/assets/bigcloud.png')
        this.game.load.spritesheet('hail', './public/assets/ball_1_93.png', 93,93)        
        this.game.load.spritesheet('corn', './public/assets/corn_1_240.png', 240,189)                
        this.game.load.image('redheart', './public/assets/heart_1.png')
        this.game.load.image('blackheart', './public/assets/heart_2.png')
        // this.game.load.image('ice_break', ice_break)
        this.game.load.image('ice1', './public/assets/ice_1.png')
        this.game.load.image('ice2', './public/assets/ice_2.png')
        this.game.load.image('ice3', './public/assets/ice_3.png')
        this.game.load.image('cloud', './public/assets/cloud_1.png')
        this.game.load.image('icecloud', './public/assets/icecloud.png')
        this.game.load.image('bigcloud_anger1', './public/assets/bigcloud_anger1.png')
        this.game.load.image('bigcloud_anger2', './public/assets/bigcloud_anger2.png')
        this.game.load.spritesheet('cow', './public/assets/cow_1_70.png',70,60)
        this.game.load.spritesheet('bighail', './public/assets/bigice_186.png', 557/3, 187)     
        this.game.load.image('wang', './public/assets/mr_wang.png')     
        this.game.load.image('wang_happy', './public/assets/game1_start2.png')             

        //level2
        this.game.load.image('secondbg', './public/assets/bg_game2.jpg')
        this.game.load.spritesheet('people1', './public/assets/people_1_240.png', 240,196)        
        this.game.load.spritesheet('people2', './public/assets/people_2_240.png', 240,196)        
        this.game.load.spritesheet('people3', './public/assets/people_3_240.png', 240,196)        
        this.game.load.image('darksky2', './public/assets/darksky_2.png')
        this.game.load.image('game2_start', './public/assets/game2_start.png')
        this.game.load.spritesheet('finger', './public/assets/finger.png', 163/2,120)                
        this.game.load.spritesheet('bird', './public/assets/bird_1_80.png', 240/3,60)                
        this.game.load.image('game2_start2', './public/assets/game2_start_2.png')

        //level3
        this.game.load.image('thirdbg', './public/assets/bg_game3.jpg')
        this.game.load.spritesheet('car1', './public/assets/car_1_240.png', 240,150)        
        this.game.load.spritesheet('car2', './public/assets/car_2_240.png', 240,150)        
        this.game.load.spritesheet('car3', './public/assets/car_3_240.png', 240,150)        
        this.game.load.spritesheet('car4', './public/assets/car_4_240.png', 240,150)        
        this.game.load.spritesheet('iceground', './public/assets/iceground_240.png', 240,170)        
        this.game.load.image('darksky3', './public/assets/darksky_3.png')  
        this.game.load.image('police', './public/assets/game3_start.png')  
        this.game.load.image('alarmcloud', './public/assets/angrycloud.png')  
        this.game.load.image('blackcar', './public/assets/blackcar.png')  
        this.game.load.image('highway', './public/assets/highway.png?v=1')  

        //fail
        this.game.load.image('fail_bg', './public/assets/fail_bg.jpg')  
        this.game.load.image('btn_share', './public/assets/btn_share.png')  
        this.game.load.spritesheet('failcloud', './public/assets/fail_510.png', 510,460)        
        this.game.load.image('fb', './public/assets/fb.jpg')  
        this.game.load.spritesheet('paper', './public/assets/paper_100.png', 100,100)  
        this.game.load.image('share1', './public/assets/share_1.png')  
        this.game.load.image('share2', './public/assets/share_2.png')  
        this.game.load.image('share3', './public/assets/share_3.png')  
        this.game.load.image('share4', './public/assets/share_4.png')  

        //audio
        this.game.load.audio('bgsound', './public/assets/Mr_Turtle.mp3')
        this.game.load.audio('buttonclick', './public/assets/clickbutton_01.mp3')
        this.game.load.audio('passed', './public/assets/passed_01.mp3')
        this.game.load.audio('catchhail', './public/assets/catch.mp3')
        this.game.load.audio('catchbighail', './public/assets/bigcatch_01.mp3')
        this.game.load.audio('fail', './public/assets/fail_01.mp3')
        this.game.load.audio('losshail', './public/assets/loss_01.mp3')

        //end
        this.game.load.image('comic_1', './public/assets/comic_1.png')  
        this.game.load.image('comic_2', './public/assets/comic_2.png')  
        this.game.load.image('comic_3', './public/assets/comic_3.png')  
        this.game.load.image('comic_4', './public/assets/comic_4.png')  
        this.game.load.image('comic_5', './public/assets/comic_5.png')  
        this.game.load.image('comic_6', './public/assets/comic_6.png')          

        this.game.load.onFileComplete.add(function(progress){
            // console.log(progress);
        });
    },

    create: function(){

    },

    update: function(){

        if(this.finished && this.game.state.current==="Load"){
            this.game.state.start('Start', true, false, 'startpage')
            // this.game.state.start('Over', true, false, 'level3', 'end')
            // this.game.state.start('Play', true, false, 'level3', 'play')            
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

// module.exports = LoadState