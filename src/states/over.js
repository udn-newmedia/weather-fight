var title = $('title').text()
var isMob = detectmob();
var platform = (isMob == true) ? 'Mob' : 'PC'

let OverState = {
    init: function(){
        this.level = arguments[0]
        this.level_arg = arguments[1] || {}
        // this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
        if(this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }else{
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }

        this.window500 = (this.game.scale.width===500)?true:false

        if(this.level_arg==='end'){
            //ga
            ga("send", {
                "hitType": "event",
                "eventCategory": "遊戲進度",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [全破]"
            })
            
        }else{
            //ga
            ga("send", {
                "hitType": "event",
                "eventCategory": "遊戲進度",
                "eventAction": "click",
                "eventLabel": "[" + platform + "] [" + title + "] [失敗:"+this.level+"]"
            })
        }
    },

    update: function(){

        if(this.level_arg!=='end' && this.level_arg !== 'whichcloud'){
            if(this.paperfloating.y >= this.sharebutton.y-this.sharebutton.height*0.5){
                this.paperfloating.body.velocity.y = 0
                this.paperfloating.frame = 2
                this.floatingAnim.stop()

                this.windowgroup.visible = true

                this.level_arg = 'whichcloud'
            }
        }

    },

    create: function(){

        this.game.input.enabled = true

        if(this.level_arg==='end'){

            this.game.stage.backgroundColor = '#000'

            var comics = []

            if(this.window500){
                var padding_x = 28
                var comic_scale = 0.65
            }else{
                var padding_x = 32 * this.game.scale.width/375
                var comic_scale = 0.45 * this.game.scale.width/375
            }

            var padding_y = 10



            // var comic1 = this.game.add.image(padding_x,padding_y,'comic_1')
            var comic1 = this.game.add.image(this.game.world.centerX, this.game.world.centerY,'comic_1')
            comic1.scale.setTo(comic_scale)
            // comic1.anchor.setTo(0,0)
            comic1.anchor.setTo(0.5)
            comic1.alpha = 0
            // comic1.visible = false
            comics.push(comic1)

            var ct1_1 = this.game.add.tween(comic1)
            ct1_1.to({alpha: 1}, 1200, Phaser.Easing.Bounce.Out)
            var ct1_2 = this.game.add.tween(comic1)
            ct1_2.to({x: padding_x + comic1.width/2, y: padding_y + comic1.height/2}, 400)

            ct1_1.chain(ct1_2)
            ct1_1.start()

            // var comic2 = this.game.add.image(this.game.world.width-padding_x,padding_y,'comic_2')
            var comic2 = this.game.add.image(this.game.world.centerX,this.game.world.centerY,'comic_2')
            comic2.scale.setTo(comic_scale)
            // comic2.anchor.setTo(1,0)
            comic2.anchor.setTo(0.5)
            // comic2.visible = false
            comic2.alpha = 0
            comics.push(comic2)

            var ct2_1 = this.game.add.tween(comic2)
            ct2_1.to({alpha: 1}, 1200, Phaser.Easing.Bounce.Out)
            var ct2_2 = this.game.add.tween(comic2)
            ct2_2.to({x: this.game.world.width-padding_x-comic2.width/2, y: padding_y + comic2.height/2}, 400)
            
            ct1_2.chain(ct2_1)
            ct2_1.chain(ct2_2)
            
            // var comic3 = this.game.add.image(this.game.world.centerX,comic1.y+comic1.height/2-5,'comic_3')
            var comic3 = this.game.add.image(this.game.world.width + this.game.cache.getImage('comic_3').width/2, padding_y + comic1.height,'comic_3')
            comic3.scale.setTo(comic_scale)
            // comic3.anchor.setTo(0.5,0)
            comic3.anchor.setTo(0.5)
            // comic3.visible = false
            comic3.alpha = 0
            comics.push(comic3)

            var ct3_1 = this.game.add.tween(comic3)
            ct3_1.to({alpha: 1, x: this.game.world.centerX}, 1200)

            ct2_2.chain(ct3_1)

            // var comic4 = this.game.add.image(comic3.x,comic3.y+comic3.height,'comic_4')
            var comic4 = this.game.add.image(0 - this.game.cache.getImage('comic_4').width/2 , this.game.world.centerY + 5,'comic_4')
            comic4.scale.setTo(comic_scale)
            // comic4.anchor.setTo(0.5,0)
            comic4.anchor.setTo(0.5,0.5)
            // comic4.visible = false
            comic4.alpha = 0
            comics.push(comic4)

            var ct4_1 = this.game.add.tween(comic4)
            ct4_1.to({alpha: 1, x: this.game.world.centerX}, 1200, Phaser.Easing.Bounce.Out)

            var ct1_s = this.game.add.tween(comic1)
            ct1_s.to({y: padding_y + comic1.height/2 - comic2.height/3}, 400)
            var ct2_s = this.game.add.tween(comic2)
            ct2_s.to({y: padding_y + comic2.height/2 - comic2.height/3}, 400)
            var ct3_s = this.game.add.tween(comic3)
            ct3_s.to({y: comic3.y - comic2.height/3}, 400)
            var ct3_s2 = this.game.add.tween(comic3)
            ct3_s2.to({y: comic3.y - comic2.height/3*2}, 400)
            var ct4_s = this.game.add.tween(comic4)
            ct4_s.to({y: comic4.y - comic2.height/3}, 400)

            ct3_1.onComplete.add(function(){
                ct1_s.start()
                ct2_s.start()
                ct3_s.start()
                ct4_1.start()
            })

            ct4_1.onComplete.add(function(){
                ct3_s2.start()
                ct4_s.start()
                ct5_1.start()
            })

            // var comic5 = this.game.add.image(comic1.x,comic4.y+comic4.height,'comic_5')
            var comic5 = this.game.add.image(padding_x + comic1.width/2, this.game.world.centerY + comic4.height + 5 - comic2.height/3,'comic_5')
            comic5.scale.setTo(comic_scale)
            // comic5.anchor.setTo(0,0)
            comic5.anchor.setTo(0.5)
            // comic5.visible = false
            comic5.alpha = 0
            comics.push(comic5)


            var ct5_1 = this.game.add.tween(comic5)
            ct5_1.to({alpha: 1}, 1200, Phaser.Easing.Bounce.Out)

            // var comic6 = this.game.add.image(comic2.x,comic4.y+comic4.height,'comic_6')
            var comic6 = this.game.add.image(this.game.world.width-padding_x-comic2.width/2, this.game.world.centerY + comic4.height + 5 - comic2.height/3,'comic_6')
            comic6.scale.setTo(comic_scale)
            // comic6.anchor.setTo(1,0)
            comic6.anchor.setTo(0.5)
            // comic6.visible = false
            comic6.alpha = 0
            comics.push(comic6)            

            var ct6_1 = this.game.add.tween(comic6)
            ct6_1.to({alpha: 1}, 1200, Phaser.Easing.Bounce.Out)
            ct6_1.onComplete.add(function(){
                this.game.time.events.add(Phaser.Timer.SECOND*2,this.pasteSharePaper,this)
            }, this)

            ct5_1.chain(ct6_1)

            

            // var ctr = 0
            // var comicPlay = this.game.time.events.loop(Phaser.Timer.SECOND*0.5, function(){
            //     comics[ctr].visible = true
            //     ctr++

            //     if(ctr>=comics.length){
            //         this.game.time.events.remove(comicPlay)
            //         // this.game.time.events.add(Phaser.Timer.SECOND*2,this.pasteSharePaper,this)      
            //     }
            // }, this)

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

            //紙張飄落
            this.paperfloating = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY/4, 'paper')
            this.paperfloating.anchor.setTo(0.5)
            this.floatingAnim = this.paperfloating.animations.add('paper');
            this.floatingAnim.play(5,true);

            this.game.physics.arcade.enable(this.paperfloating)
            this.paperfloating.body.velocity.y = 150

            //whichcloud
            this.windowgroup = this.whichcloud()

            this.replaybutton = this.btnGenerator('btn_1_1','再試一次', 1, false)
            this.longformbutton = this.btnGenerator('btn_2_1','觀看專題', 2, false)
            this.sharebutton = this.btnGenerator('btn_share','分享出去吧!', 0, false)

            var fbSize = this.game.cache.getImage('fb').width/2
            var fbshare = this.game.add.image(this.sharebutton.x-this.sharebutton.button_txt.width/2-fbSize, this.sharebutton.button_txt.y,'fb')
            fbshare.anchor.setTo(0.5,0.1)
            fbshare.scale.setTo(0.5)

            this.share = this.game.add.group()
            this.share.add(this.sharebutton)
            this.share.add(fbshare)
            this.share.add(this.sharebutton.button_txt)
            // this.share.visible = false
            this.windowgroup.add(this.share)

            this.windowgroup.visible = false
        }

    },
    pasteSharePaper: function(){
        this.settingmask('rgba(0,0,0,0.8)')
        //whichcloud
        this.windowgroup = this.whichcloud()

        this.replaybutton = this.btnGenerator('btn_1_1','再玩一次', 1, false)
        this.longformbutton = this.btnGenerator('btn_2_1','觀看專題', 2, false)
        this.sharebutton = this.btnGenerator('btn_share','分享出去吧!', 0, false)

        var fbSize = this.game.cache.getImage('fb').width/2
        var fbshare = this.game.add.image(this.sharebutton.x-this.sharebutton.button_txt.width/2-fbSize, this.sharebutton.button_txt.y,'fb')
        fbshare.anchor.setTo(0.5,0.1)
        fbshare.scale.setTo(0.5)

        this.share = this.game.add.group()
        this.share.add(this.sharebutton)
        this.share.add(fbshare)
        this.share.add(this.sharebutton.button_txt)

        this.windowgroup.add(this.share)      
    },

    whichcloud: function(){
        var windowgroup = this.game.add.group()

        var padding_top = this.game.world.height*0.05
        var padding_left = this.game.world.width*0.05

        var window = this.game.add.graphics(0,0)
        window.alignIn(window,Phaser.CENTER,padding_left,padding_top)
        window.beginFill(0xe8e4cd)
        window.drawRoundedRect(0,0,this.game.world.width*0.9,this.game.world.height*0.8)
        window.endFill()

        windowgroup.add(window)

        //title
        if(this.game.width>=375){
            var title_style = {font: "bold 35px Microsoft JhengHei", fill: "#000"}
        }else{
            var title_style = {font: "bold 28px Microsoft JhengHei", fill: "#000"}                
        }

        //subtitle
        if(this.game.width>=375){
            var subtitle_style = {font: "22px Microsoft JhengHei", fill: "#000"}
        }else{
            var subtitle_style = {font: "16px Microsoft JhengHei", fill: "#000"}                
        }     

        if(this.level==='level1'){
            var title = this.game.add.text(this.game.world.centerX, window.y+padding_top*2, '你是魯蛇雲', title_style)
            title.anchor.setTo(0.5)
            title.addColor('#376089',2)
            windowgroup.add(title)
  
            var subtitle = this.game.add.text(this.game.world.centerX, title.y + title.height*1.2, '說好要拯救地球的雄心壯志呢?!', subtitle_style)
            subtitle.anchor.setTo(0.5)
            windowgroup.add(subtitle)

            //picture
            var profile = this.game.add.image(this.game.world.centerX, this.game.world.centerY,'share1')
            profile.anchor.setTo(0.5,0.5)
            profile.scale.setTo(0.5)
            windowgroup.add(profile)

        }else if(this.level==='level2'){
            //title
            var title = this.game.add.text(this.game.world.centerX, window.y+padding_top*2, '你是略有份量的白雲', title_style)
            title.anchor.setTo(0.5)
            title.addColor('#498e70',7)
            windowgroup.add(title)

            //subtitle
            var subtitle = this.game.add.text(this.game.world.centerX, title.y + title.height*1.2, '城市的救援得加把力才行!', subtitle_style)
            subtitle.anchor.setTo(0.5)
            windowgroup.add(subtitle)

            //picture
            var profile = this.game.add.image(this.game.world.centerX, this.game.world.centerY,'share2')
            profile.anchor.setTo(0.5,0.5)
            profile.scale.setTo(0.5)
            windowgroup.add(profile)
        }else if(this.level==='level3'){

            if(this.level_arg==='end'){
                //title
                var title = this.game.add.text(this.game.world.centerX, window.y+padding_top*2, '你是人力雲', title_style)
                title.anchor.setTo(0.5)
                title.addColor('#3f3f7a',2)
                windowgroup.add(title)

                //subtitle
                var subtitle = this.game.add.text(this.game.world.centerX, title.y + title.height*1.2, '超棒der，冰雹達人非你莫屬!', subtitle_style)
                subtitle.anchor.setTo(0.5)
                windowgroup.add(subtitle)

                //picture
                var profile = this.game.add.image(this.game.world.centerX, this.game.world.centerY,'share4')
                profile.anchor.setTo(0.5,0.5)
                profile.scale.setTo(0.5)
                windowgroup.add(profile)
            }else{
                //title
                var title = this.game.add.text(this.game.world.centerX, window.y+padding_top*2, '你是馬雲', title_style)
                title.anchor.setTo(0.5)
                title.addColor('#ba4747',2)
                windowgroup.add(title)

                //subtitle               
                var subtitle = this.game.add.text(this.game.world.centerX, title.y + title.height*1.2, '離冰雹系不遠了，加油!', subtitle_style)
                subtitle.anchor.setTo(0.5)
                windowgroup.add(subtitle)

                //picture
                var profile = this.game.add.image(this.game.world.centerX, this.game.world.centerY,'share3')
                profile.anchor.setTo(0.5,0.5)
                profile.scale.setTo(0.5)
                windowgroup.add(profile)
            }
        }

        return windowgroup
    },

    btnGenerator: function(btnStyle, value, position, isClick){
        //position: 0(最上面),1(左下),2(右下)

        if(position===0){
                var width = this.game.world.width * 0.8
                var height = 48
                var x = this.game.world.centerX
                var y = this.replaybutton.y - this.replaybutton.height*2
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

        if(this.level==='level1'){
            var cover = 'cover1'
        }else if(this.level==='level2'){
            var cover = 'cover2'
        }else if(this.level==='level3'){
            if(this.level_arg==='end'){
                var cover = 'cover4'
            }else{
                var cover = 'cover3'
            }
        }

        switch(value){
            case '再試一次':
                var arg=(this.level==='level3')?{}:'play'
                this.game.state.start('Play', true, false, this.level, arg)

                // ga            
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "遊戲進度",
                    "eventAction": "click",
                    "eventLabel": "[" + platform + "] [" + title + "] [再試一次：" + this.level + "]"
                })

                break
            case '再玩一次':
                var arg=(this.level==='level3')?{}:'play'
                this.game.state.start('Play', true, false, 'level1', arg)

                // ga            
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "遊戲進度",
                    "eventAction": "click",
                    "eventLabel": "[" + platform + "] [" + title + "] [再玩一次：" + this.level + "]"
                })

                break
            case '觀看專題':
                window.open("https://udn.com/upf/newmedia/2017_data/summerweather/game.html", "_blank")

                // ga            
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "超連結點擊",
                    "eventAction": "click",
                    "eventLabel": "[" + platform + "] [" + title + "] [觀看專題]"
                })

                break
            case '分享出去吧!':
                // FB.ui({
                //     method: 'share',
                //     href: 'https://udn.com/upf/newmedia/2017_data/summerweather/'+cover+'.html',
                // }, function(response){});
                // console.log('share')
                window.open('https://www.facebook.com/sharer.php?sdk=joey&amp%3Bu=https://udn.com/upf/newmedia/2017_data/summerweather/'+cover+'.html&amp%3B%20display%20=%20popup%20&amp%3B%20ref%20=%20plugin%20&amp%3B%20src%20=%20share_button&u=https://udn.com/upf/newmedia/2017_data/summerweather/'+cover+'.html')
                // ga            
                ga("send", {
                    "hitType": "event",
                    "eventCategory": "超連結點擊",
                    "eventAction": "click",
                    "eventLabel": "[" + platform + "] [" + title + "] [臉書分享]"
                })

                break
        }
    },

    settingmask: function(color) {

        var fill = color||'rgba(0,0,0,0.6)'
        var bmd = this.game.make.bitmapData(this.game.world.width,this.game.world.height)
        bmd.addToWorld()
        bmd.rect(0,0,this.game.world.width,this.game.world.height,fill)
        bmd.dirty = false

        return bmd
    },

}

module.exports = OverState