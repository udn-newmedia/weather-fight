let PlayState = {

    init: function(game_level){

        this.level = game_level
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
    },

    create: function(){

        this.game.physics.startSystem(Phaser.Physics.ARCADE)
        this.scenesFactory(this.level)
        this.mycloudEmitter = this.emitterGenerator()
    },

    update: function(){
        this.game.physics.arcade.overlap(this.hails, this.mycloud, this.hitmyCloud, null, this)
        this.game.physics.arcade.overlap(this.hails, this.corns, this.hitCorn, null, this)

        if(this.level!=='trial2'){
            this.mycloudStop()
        }
    },

    render: function() {
        // this.game.debug.body(this.mycloud)

        // if(this.hails) {
        //     this.hails.forEachAlive(function(hail){
        //         this.game.debug.body(hail)
        //     },this)
        // }

        // if(this.bighails) {
        //     this.bighails.forEachAlive(function(bighail){
        //         this.game.debug.body(bighail)
        //     },this)
        // }
    },

    hitCorn: function(hail, corn) {
        hail.kill()    

        switch(corn.life){            
            case 3:
                corn.frame = 1
                this.corns.children.forEach(function(ele) {
                    ele.life--
                }, this)
                break
            case 2:
                this.corns.children.forEach(function(ele) {
                    ele.frame = 2
                    ele.life--
                }, this)
                break
            case 1:
                this.corns.children.forEach(function(ele) {
                    ele.frame = 3
                    ele.life--
                }, this)
                break                
        }

        this.mycloudLifeHandler(--this.mycloud.life)    

        if(this.level==='trial2'){

            this.game.time.events.add(Phaser.Timer.SECOND*1,function(){
                this.settingmask()
                // this.game.state.start('over');
            },this);
        }                 
    },

    hitmyCloud: function(mycloud, hail) {

        hail.kill()
        
        this.hailCrushed(hail.x,hail.y,hail.scale.x,hail.size)

        //接到冰雹
        var catchTween = this.game.add.tween(mycloud)
        catchTween.to({tint: 0x9CD9EB}, 200)
        catchTween.onComplete.add(function(){
            mycloud.tint = 0xFFFFFF
        }, this)
        catchTween.start()

        if(hail.size==='big' && !this.mycloud.isfreezing){
            this.hitbyBighail(hail)
        }

        if(this.level==='trial1'){
            this.game.state.start('Start', true, false, 'intro2')    
        }
    },

    hitbyBighail: function(hail){
        this.mycloud.clickTimes = 0
        this.mycloud.isfreezing = true
        this.mycloud.scale.setTo(1)
    },

    cornInitialize: function(){

        this.corns = this.game.add.group()
        this.corns.enableBody = true

        var cornSize = this.game.cache.getImage('corn').width/4
        var corn_y = this.game.height * 0.785
        var left_corn_x = this.game.width * 1/6
        var middle_corn_x = this.game.width * 1/2
        var right_corn_x = this.game.width * 5/6

        this.left_corn = this.game.add.sprite(left_corn_x , corn_y, 'corn')
        this.left_corn.frame = 0
        this.left_corn.scale.setTo(0.5,0.5)
        this.left_corn.anchor.setTo(0.5,0)
        this.left_corn.life = 3
        this.corns.add(this.left_corn)
        this.game.physics.arcade.enable(this.left_corn)

        this.middle_corn = this.game.add.sprite(middle_corn_x , corn_y, 'corn')
        this.middle_corn.frame = 0
        this.middle_corn.scale.setTo(0.5,0.5)
        this.middle_corn.anchor.setTo(0.5,0)
        this.middle_corn.life = 3
        this.corns.add(this.middle_corn)
        this.game.physics.arcade.enable(this.middle_corn)

        this.right_corn = this.game.add.sprite(right_corn_x , corn_y, 'corn')
        this.right_corn.frame = 0
        this.right_corn.scale.setTo(0.5,0.5)
        this.right_corn.anchor.setTo(0.5,0)
        this.right_corn.life = 3
        this.corns.add(this.right_corn)
        this.game.physics.arcade.enable(this.right_corn)
    },

    settingMyCloud: function(x,y,anchor_x,anchor_y){

        var mycloud_x = x || this.game.world.centerX
        var mycloud_y = y || this.game.world.height * 0.65
        var anchorX = anchor_x || 0.5
        var anchorY = anchor_y || 0.5

        //add sprite
        this.mycloud = this.game.add.sprite(mycloud_x , mycloud_y, 'mycloud')
        this.mycloud.anchor.setTo(anchorX, anchorY)
        this.mycloud.life = 3
        this.mycloud.spritescale = 0.4
        this.mycloud.scale.setTo(this.mycloud.spritescale)
        var size = this.game.cache.getImage('mycloud').width/5;

        //run animation
        this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)

        this.game.physics.arcade.enable(this.mycloud)
        this.mycloud.body.collideWorldBounds = true
        this.mycloud.body.setSize(size*0.8,size*0.8,size*0.1,size*0.1)

        this.mycloud.touching = false
        this.mycloud.inputEnabled = true
        this.mycloud.isfreezing = false

        // Click mycloud for unfreezing
        this.onclickEmitter(this.mycloud)

        if(this.level!=='trial2'){
            this.mycloudMove()
            // this.mycloud.currentPosition = 0
        }
    },

    mycloudMove: function(){

        var scale = this.mycloud.spritescale

        this.mycloud.events.onInputDown.add(function(){
            this.mycloud.touching = true
        }, this)

        this.mycloud.events.onInputUp.add(function(){
            this.mycloud.touching = false
            this.mycloud.animations.stop()
            this.mycloud.frame = 0
        }, this)

        this.game.input.addMoveCallback(function(pointer,x,y, isTap){

            if(this.game.device.desktop && !this.mycloud.isfreezing){
                if(x > this.mycloud.x){
                    this.mycloud.scale.setTo('-'+scale, scale)
                }
                else{
                    this.mycloud.scale.setTo(scale, scale)
                }
                this.mycloud.x = x
                this.mycloud.animations.play('run')

            }else if(!this.game.device.desktop && !this.mycloud.isfreezing){

                if (this.mycloud.touching){

                    this.mycloud.body.velocity.x = 0

                    if(x > this.mycloud.x){
                        this.mycloud.scale.setTo('-'+scale, scale)
                    }
                    else{
                        this.mycloud.scale.setTo(scale, scale)
                    }

                    this.mycloud.x = x

                } else {

                    if(x > this.mycloud.x + this.mycloud.width/2){
                        this.mycloud.scale.setTo('-'+scale, scale)
                        this.mycloud.body.velocity.x = 200
                    }
                    else if(x < this.mycloud.x - this.mycloud.width/2){
                        this.mycloud.scale.setTo(scale, scale)
                        this.mycloud.body.velocity.x = -200
                    } else {
                        this.mycloud.body.velocity.x = 0

                    }
                }

                this.mycloud.animations.play('run')     

            } else if(this.mycloud.isfreezing){
                    this.mycloud.animations.stop()
                    this.mycloud.frame = 0
            }

            //(desktop)雲跟著滑鼠動，但只會在三個位置停留
            //(mobile)只會在三個位置停留，除了拖曳外，也可點螢幕讓雲動，點左向左一格，依此類推
                // var position = this.mycloud.currentPosition
                // var position1 = this.game.width * 1/4
                // var position2 = this.game.width * 1/2
                // var position3 = this.game.width * 3/4
                // var canmove = false
                //unit step method
                    // if(x>this.mycloud.x + this.mycloud.width * this.mycloud.spritescale){
                    //     this.mycloud.scale.setTo('-'+scale, scale)
                    //     ++position
                    //     canmove=true
                    // }else if(x<this.mycloud.x - this.mycloud.width * this.mycloud.spritescale){
                    //     this.mycloud.scale.setTo(scale)
                    //     --position
                    //     canmove=true
                    // }else{
                    //     this.mycloud.animations.stop()
                    //     this.mycloud.frame = 0
                    //     canmove=true
                    // }

                    // if(canmove) {
                    //     this.mycloud.animations.play('run')

                    //     if(position==0) {
                    //         this.mycloud.x = position2
                    //         position=0
                    //     } else if(position<=-1){
                    //         this.mycloud.x = position1
                    //         position=-1
                    //     } else if(position>=1){
                    //         this.mycloud.x = position3
                    //         position=1
                    //     }

                    //     // console.log(position)                
                    //     this.mycloud.currentPosition = position
                    // }
            
                //minimum distance method
                    // var canmove = false
                    // var distance1 = Math.abs(x-position1)
                    // var distance2 = Math.abs(x-position2)
                    // var distance3 = Math.abs(x-position3)
                    // var mindistance = Math.min(distance1,distance2,distance3)

                    // if(x >this.mycloud.x){
                    //     this.mycloud.scale.setTo('-'+scale, scale)
                    // }else{
                    //     this.mycloud.scale.setTo(scale)
                    // }    

                    // if(this.game.device.desktop||(!this.game.device.desktop && !isTap && this.mycloud.touching )){

                    //     canmove = true

                    // } else if(!this.game.device.desktop && isTap) {

                    //     if(x<this.mycloud.x){
                    //         // console.log('left')
                    //     }else{
                    //         // console.log('right')
                    //     }
                    // }

                    // if(canmove){
                    //     this.mycloud.animations.play('run')
                    //     switch(mindistance){
                    //         case distance1:
                    //             this.mycloud.x = position1
                    //             break
                    //         case distance2:
                    //             this.mycloud.x = position2
                    //             break 
                    //         case distance3:
                    //             this.mycloud.x = position3
                    //             break                         
                    //     }
                    // }


        },this)

    },

    mycloudStop: function(){
        //滑鼠放開時mycloud不移動
        this.game.input.onUp.add(function(){
            this.mycloud.body.velocity.x = 0
            this.mycloud.animations.stop()
            this.mycloud.frame = 0
        },this)
    },

    scenesFactory: function(level){

        //background
        if(level==='level1'){
            var bg = this.game.add.image(0,0,'firstbg')
            bg.width = this.game.world.width
            bg.height = this.game.world.height

            this.cornInitialize()//left,middle,right

            //darksky and cloud animation
            var darksky = this.game.add.image(0,-100,'darksky')
            darksky.width = this.game.world.width
            darksky.height = this.game.world.height * 0.35

            var blackcloud1 = this.game.add.image(-150,0,'blackcloud1')      
            var blackcloud1Img = this.game.cache.getImage('blackcloud1')
            blackcloud1.width = this.game.world.width * 0.5
            blackcloud1.height = blackcloud1.width / blackcloud1Img.width * blackcloud1Img.height
    
            var blackcloud2 = this.game.add.image(300,0,'blackcloud2')        
            var blackcloud2Img = this.game.cache.getImage('blackcloud2')
            blackcloud2.width = this.game.world.width * 0.65
            blackcloud2.height = blackcloud2.width / blackcloud2Img.width * blackcloud2Img.height

            var cloud = this.game.add.image(-30,this.game.world.height/2,'cloud')        
            var cloudImg = this.game.cache.getImage('cloud')
            cloud.width = this.game.world.width * 1.2
            cloud.height = cloud.width / cloudImg.width * cloudImg.height

            //cow
            var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75,'cow')
            cow.scale.setTo(0.6,0.6)
            cow.anchor.setTo(0.5,0.5)
            var cowAnim = cow.animations.add('cow');
            cowAnim.play(10,true);

            this.bigcloud = this.game.add.image(this.game.world.centerX, -200,'bigcloud')
            this.bigcloud.anchor.setTo(0.5,0)        
            var bigcloudImg = this.game.cache.getImage('bigcloud')
            this.bigcloud.width = this.game.world.width
            this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height

            var darkskyTween = this.game.add.tween(darksky).to({y: 0}, 1000, Phaser.Easing.Bounce.In, true)
            darkskyTween.start()

            var blackcloud1Tween = this.game.add.tween(blackcloud1).to({x: -50}, 500, Phaser.Easing.Linear.In, true, 1000)
            blackcloud1Tween.start()

            var blackcloud2Tween = this.game.add.tween(blackcloud2).to({x: 200}, 500, Phaser.Easing.Linear.In, true, 1200)
            blackcloud2Tween.start()

            this.bigcloud.Yposition = 10
            var bigcloudTween = this.game.add.tween(this.bigcloud).to({y: this.bigcloud.Yposition}, 700, Phaser.Easing.Sinusoidal.InOut, true, 1700)
            bigcloudTween.start()      
            bigcloudTween.onComplete.add(this.onStart, this)

            this.settingMyCloud()

        } else if(level==='level2'){
        } else if(level==='level3'){
        } else if(level==='trial1'){

            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloudReady()
            this.heartmaker(['redheart','redheart','redheart'])
            this.settingmask()

            this.hails = this.game.add.group()
            this.hails.enableBody = true
            this.hailcrushes = this.game.add.group()

            this.settingMyCloud(this.game.world.width * 0.85,this.game.world.height*0.6)

            this.game.time.events.add(Phaser.Timer.SECOND*1, this.hailing, this)
            this.game.time.events.loop(Phaser.Timer.SECOND*5, this.hailing, this);

        } else if(level==='trial2'){

            this.game.stage.backgroundColor = '#fff'
            this.settingBigcloudReady()
            this.heartmaker(['redheart','redheart','redheart'])
            this.settingmask()

            this.hails = this.game.add.group()
            this.hails.enableBody = true
            this.hailcrushes = this.game.add.group()

            //add static mycloud
            var mycloud_x = this.game.world.width * 0.85
            var mycloud_y = this.game.world.height * 0.65
            this.settingMyCloud(mycloud_x,mycloud_y)

            //冰雹落在特定位置，只落一次
            this.hailing('small',this.bigcloud.x)

            //放玉米在正下方
            this.corns = this.game.add.group()
            this.corns.enableBody = true

            var cornSize = this.game.cache.getImage('corn').width/4
            var corn_x = this.game.world.centerX
            var corn_y = this.game.height * 0.785

            var corn = this.game.add.sprite(corn_x , corn_y, 'corn')
            corn.frame = 0
            corn.scale.setTo(0.5,0.5)
            corn.anchor.setTo(0.5,0)
            corn.life = 3
            this.corns.add(corn)
            this.game.physics.arcade.enable(corn)

        }

    },

    //No animation big cloud
    settingBigcloudReady: function() {

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

    settingmask: function() {
        
        this.game.paused = true
        var bmd = this.game.make.bitmapData(this.game.world.width,this.game.world.height)
        bmd.addToWorld()
        bmd.rect(0,0,this.game.world.width,this.game.world.height,'rgba(0,0,0,0.6)')
        bmd.dirty = true

        return bmd
    },

    settingtaskWindow: function(){
    
        if(this.level==='level1'){

            var taskwindowGroup = this.game.add.group()

            //using graphics
            var window = this.game.add.graphics(0,0)
            window.alignIn(window,Phaser.CENTER,this.game.world.width*0.1,this.game.world.height*0.15)
            window.beginFill(0xFFFFFF);
            window.drawRoundedRect(0,0,this.game.world.width*0.8,this.game.world.height*0.7)
            window.endFill()

            taskwindowGroup.add(window)

            //button
            var startbtn = this.btnGenerator('btn_1_1', '遊戲開始', false) 

            this.startbtn = startbtn
            taskwindowGroup.add(startbtn)
            taskwindowGroup.add(startbtn.button_txt)

            //Mr.Wang
            var wangSize = this.game.cache.getImage('wang').height;
            var wang = this.game.add.image(this.game.world.centerX,startbtn.y-wangSize*0.4,'wang')
            wang.anchor.setTo(0.5)
            wang.scale.setTo(0.5)

            taskwindowGroup.add(wang)

            //words
            var words = "正在玉米田裡忙碌的王爺爺，\n卻收到了冰雹警報，想起過去\n曾有冰雹造成農損的例子，若\n沒有及時阻止冰雹落下，他的\n心血就要泡湯了......"

            var style = { font: "20px Microsoft JhengHei", fill: "#000", 
                        boundsAlignH: "center", boundsAlignV: "middle", 
                        wordWrap: true, wordWrapWidth: window.width*0.8}

            var text = this.game.add.text(this.game.world.centerX, wang.y-wang.height ,words,style)
            text.anchor.setTo(0.5,1)

            taskwindowGroup.add(text)            
        }

        return taskwindowGroup
    },

    unpause: function(event){

        var startbtnIsClicked = false

        if(event.x > this.startbtn.x - this.startbtn.width/2 &&
            event.x < this.startbtn.x + this.startbtn.width/2 &&
            event.y > this.startbtn.y - this.startbtn.height/2 &&
            event.y < this.startbtn.y + this.startbtn.height/2){
                startbtnIsClicked = true
            }

        if(this.game.paused && startbtnIsClicked){
                this.game.paused = false
                this.mask.cls()
                this.taskWindowGroup.destroy()         
                this.onPlay()       
        }
    },

    onStart: function(){
        //big cloud is angry
        this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55,'bigcloud_anger1')
        this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
        this.bigcloud_anger1.width = this.bigcloud.width/20
        this.bigcloud_anger1.height = this.bigcloud.width/20     

        this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8,'bigcloud_anger2')
        this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
        this.bigcloud_anger2.width = this.bigcloud.width/20
        this.bigcloud_anger2.height = this.bigcloud.width/20     

        //heart setting
        this.mycloudLifeHandler(this.mycloud.life)

        //time setting

        //task1
        this.mask = this.settingmask()
        this.taskWindowGroup = this.settingtaskWindow()

        //listener to unpause
        this.game.input.onDown.add(this.unpause,this)

        

    },

    onPlay: function(){
        //create group for hail
        this.hails = this.game.add.group()
        this.hails.enableBody = true
        this.hailcrushes = this.game.add.group()

        //create hailing timer
        this.hailingTimer = this.game.time.create(false)
        this.hailingTimer.loop(Phaser.Timer.SECOND*2, this.hailing, this)
        this.hailingTimer.start()

        //create group for big hail 
            // this.bighails = this.game.add.group()
            // this.bighails.enableBody = true

        //create big hail appearence timer
            // this.bighailAppearTimer = this.game.time.create(false)
            // this.bighailAppearTimer.loop(Phaser.Timer.SECOND*5, this.hailing, this, "big")
            // this.bighailAppearTimer.start()
    },

    heartmaker: function(hearts){

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

    btnGenerator: function(btnStyle, value, isClick){

        var width = 150
        var height = 48
        var x = this.game.world.centerX
        var y = this.game.world.height*0.75
        var anchor_x = 0.5
        var anchor_y = 0.2
        var txt_anchor_y = 0
        var style = isClick?btnStyle+'_click':btnStyle

        var button = this.game.add.button(x, y, style, function() {
            this.btnGenerator(style, value, true)
        }, this, 1,1,0)

        button.anchor.setTo(anchor_x,anchor_y)
        button.width = width
        button.height = height

        var txt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}

        button.button_txt = this.game.add.text(x, y, value, txt_style)
        button.button_txt.anchor.setTo(anchor_x,txt_anchor_y)

        // if(isClick){
        //     console.log('click')
        //     this.mask.cls()
        //     this.taskWindowGroup.destroy()
        // }

        return button
    },

    bighailAppear: function(){
        this.bighailAppearTimer.pause()
        var hailSize = this.game.cache.getImage('hail').width/3;

        var x = this.game.world.centerX
        var y = this.game.height/2

        var bighail = this.bighails.getFirstExists(false,true,x,y,'hail')
        bighail.scale.setTo(1.5,1.5)
        bighail.anchor.setTo(0.5,1)

        bighail.clickTimes = 0
        bighail.inputEnabled = true
        bighail.body.setSize(hailSize*0.6,hailSize*0.6,hailSize*0.2,hailSize*0.2)

        //clear the alive hails in group hails       
        this.clearhails()

        this.onclickEmitter(bighail)

        //set the timer for big hail mode
        this.game.time.events.add(Phaser.Timer.SECOND * 5,this.fightbighail,this,bighail)
    },

    emitterGenerator: function(){

        var emitter = this.game.add.emitter(0, 0, 500)
        emitter.makeParticles('ice_break')

        emitter.minParticleSpeed.set(-1000, -500)
        emitter.maxParticleSpeed.set(1000, 500)
        emitter.gravity = 0;
        emitter.setRotation(10, 50)
        // this.bighailEmitter.setAlpha(0.1, 0.8, 300)
        // this.bighailEmitter.setScale(0.6, 0.9, 0.6, 0.9, 0, Phaser.Easing.Quintic.Out)
        emitter.setScale(0.5, 0.5, 1, 1, 0, Phaser.Easing.Quintic.Out)

        return emitter
    },

    onclickEmitter: function(obj){

        this.clickEmitter = obj.events.onInputDown.add(function(pointer){

            if(this.mycloud.isfreezing) {

                this.mycloud.clickTimes++

                if(this.mycloud.clickTimes>=5){
                    this.mycloud.clickTimes = 0
                    this.mycloud.isfreezing = false
                    this.mycloud.scale.setTo(this.mycloud.spritescale)

                } else {
                    this.mycloudEmitter.x = pointer.x
                    this.mycloudEmitter.y = pointer.y
                    this.mycloudEmitter.start(true, 2000, null, 10)
                    this.addQuake()
                }
            }

        }, this)
    },

    addQuake: function(){

        var intensity = 0.01
        var duration = 500
        this.game.camera.shake(intensity,duration)
    },

    fightbighail: function(bighail){

        if(bighail.clickTimes>10) {
            //冰雹爆炸
            // console.log(bighail.x,bighail.y,bighail.scale.x)
            bighail.destroy()
            this.hailCrushed(bighail.x,bighail.y,bighail.scale.x,bighail.anchor.y)

            //Reset the timers
            this.hailingTimer = this.game.time.create(true)
            this.hailingTimer.loop(Phaser.Timer.SECOND*1, this.hailing, this)
            this.hailingTimer.start()
            this.bighailAppearTimer.resume()

        } else {
            var bighailfade = this.game.add.tween(bighail).to( { alpha: 0.5 }, 500, Phaser.Easing.Linear.None, true);
            bighailfade.start()      
            bighailfade.onComplete.add(function(){
                bighail.destroy()

                //Reset the timers
                this.hailingTimer = this.game.time.create(true)
                this.hailingTimer.loop(Phaser.Timer.SECOND*0.1, this.hailing, this)
                this.hailingTimer.start()
                this.bighailAppearTimer.resume()
            }, this);
        }

        this.bighailAppearTimer.resume()
    },

    clearhails: function(){
        this.hailingTimer.pause()
        this.bighailAppearTimer.pause()
        this.hails.forEachAlive(function(hail){
            hail.kill()
        },this)
    },

    hailing: function(size,positionX){
        var hailSize = this.game.cache.getImage('hail').width/3
        var bighailSize = this.game.cache.getImage('bighail').width/3

        var x = positionX || this.game.rnd.integerInRange(0, this.game.width - hailSize) 
        var y = this.bigcloud.y + this.bigcloud.height
        var fallingObject = (this.game.rnd.integerInRange(0,10)>7)?'bighail':'hail'

        var hail = this.hails.getFirstExists(false,true,x,y,fallingObject)
        hail.scale.setTo(0.5)

        // this.hails.smallsizeScale = 0.5
        // this.hails.bigsizeScale = 1.5
        // if(size==="big"){
        //     hail.scale.setTo(this.hails.bigsizeScale)
        // }else{
        //     hail.scale.setTo(this.hails.smallsizeScale)
        // }

        this.game.physics.arcade.enable(hail)
        hail.body.setSize(hailSize*0.6,hailSize*0.6,hailSize*0.2,hailSize*0.3)
        hail.body.velocity.y = 300
        hail.outOfBoundsKill = true
        hail.checkWorldBounds = true
        hail.size = (fallingObject==='bighail')?'big':'small'
    },

    hailCrushed: function(x,y,scale,size){
        var fallingObject = (size==='big')?'bighail':'hail'
        var anchorY = 0.5
        var crush = this.hailcrushes.getFirstExists(false,true,x,y,fallingObject)
        crush.anchor.setTo(0.5,anchorY)
        crush.scale.setTo(scale)

        var anim = crush.animations.add(fallingObject);
        anim.play(60,false,false);
        anim.onComplete.addOnce(function(){
            crush.destroy();
        }, this);
    },

    mycloudLifeHandler: function(life){
        var hearts = []

        for(var i=0; i<3; i++){
            hearts[i] = i<=life-1?'redheart':'blackheart'
        }

        this.heartmaker(hearts)
    }
}

module.exports = PlayState
