let PlayState = {

    init: function(){
        this.level = arguments[0]
        this.level_arg = arguments[1] || {}
        // this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT
        if(this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }else{
            this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        }

        var ispad = window.matchMedia("(min-width: 768px)").matches
        this.isIpad = this.game.device.iPad || ispad
    },

    create: function(){
        //sound
        this.bgsound = this.game.add.audio('bgsound', 0.2, true)
        this.catchhailsound = this.game.add.audio('catchhail', 0.2, false)
        this.catchbighailsound = this.game.add.audio('catchbighail', 0.2, false)
        this.buttonclicksound = this.game.add.audio('buttonclick', 0.2, false)
        this.passedsound = this.game.add.audio('passed', 0.2, false)
        this.losssound = this.game.add.audio('losshail', 0.2, false)
        this.failsound = this.game.add.audio('fail', 0.2, false)

        this.game.sound.setDecodedCallback(
            [this.bgsound, this.catchhailsound, this.catchbighailsound,
            this.buttonclicksound, this.passedsound, this.losssound],
        function(){
            this.backgroundMusicControler('play')
            this.game.physics.startSystem(Phaser.Physics.ARCADE)
            this.scenesFactory(this.level,this.level_arg)
        },this)

    },

    update: function(){
        if(this.mycloud){
            this.game.physics.arcade.overlap(this.hails, this.mycloud, this.hitmyCloud, null, this)    
            this.game.physics.arcade.overlap(this.hails, this.corns, this.hitCorn, null, this)
        }
        //For level3
        if(this.level==='level3' && this.cars && this.mycloud){
            this.cars.forEachAlive(function(car){
                if(car.x > car.slide_x){
                    
                    if(this.mycloud.life===2){
                        car.frame = 1
                        car.body.velocity.x = 400
                    }else if(this.mycloud.life===1){
                        car.frame = 1
                        car.body.velocity.x = 600
                    }else if(this.mycloud.life===0){
                        car.frame = 1
                        car.body.velocity.x = 800                        
                    }
                }
            },this)
        }

        if(this.level_arg!=='play'){
            this.typeFinished()
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

        var maxframe
        hail.kill()   

        if(this.level==='level1'){
            maxframe = 3
        }else if(this.level==='level2'){
            maxframe = 2
        }

        if(corn.life===3){
            corn.frame = 1
            this.corns.children.forEach(function(ele) {
                ele.life--
            }, this)
        }else{
            this.corns.children.forEach(function(ele) {
                if(ele.frame<maxframe){
                    ele.frame++
                }
                ele.life--
            }, this)
        }

        // this.corns.children.forEach(function(ele){
        //     console.log(ele.frame)
        // },this)
        try{
            this.losssound.play()
        } catch(e){
        }
    
        if(this.level_arg==='play'){
            this.mycloudLifeHandler(--this.mycloud.life)                 
        }
    },

    hitmyCloud: function(mycloud, hail) {

        hail.kill()
        
        this.hailCrushed(hail.x,hail.y,hail.scale.x,hail.size)

        //接到冰雹
        if(hail.size==='big'){
            try{
                this.catchbighailsound.play()
            } catch(e){
            }    
        }else{
            try{
                this.catchhailsound.play()
            } catch(e){
            }            
        }

        var catchTween = this.game.add.tween(mycloud)
        catchTween.to({tint: 0x00FF00}, 200)
        catchTween.onComplete.add(function(){
            mycloud.tint = 0xFFFFFF
        }, this)
        catchTween.start()

        if(hail.size==='big' && !this.mycloud.isfreezing){
            this.hitbyBighail(hail)
        }

        if(this.level_arg==='trial1-1'){
            this.level_arg = 'trial1-2'
            this.tutorialMode()
        }
    },

    hitbyBighail: function(hail){
        this.mycloud.clickTimes = 0
        this.mycloud.body.velocity.x = 0
        this.mycloud.isfreezing = true
        this.mycloud.animations.play('frozen')
    },

    cornInitialize: function(){

        var target_left,
            target_middle,
            target_right

        if(this.level==='level1'){

            target_left = 'corn'
            target_middle = 'corn'
            target_right = 'corn'

        } else if(this.level==='level2'){

            target_left = 'people1'
            target_middle = 'people2'
            target_right = 'people3'

        } else if(this.level==='level3'){
            target_left = 'car1'
            target_middle = 'car2'
            target_right = 'car3'
        }

        this.corns = this.game.add.group()
        this.corns.enableBody = true

        var cornSize = this.game.cache.getImage('corn').width/4
        var corn_y = this.game.height * 0.9275

        if(this.isIpad){
            var left_corn_x = this.game.width * 1/6
            var middle_corn_x = this.game.width * 1/2
            var right_corn_x = this.game.width * 5/6
        }else{
            var left_corn_x = this.game.width * 1/6
            var middle_corn_x = this.game.width * 1/2
            var right_corn_x = this.game.width * 5/6
        }

        this.left_corn = this.game.add.sprite(left_corn_x , corn_y, target_left)
        this.left_corn.frame = 0
        if(this.isIpad){
            this.left_corn.scale.setTo(0.8,0)
        }else{
            this.left_corn.scale.setTo(0.5,0)
        }
        this.left_corn.anchor.setTo(0.5,1)
        this.left_corn.life = 3
        this.corns.add(this.left_corn)
        this.game.physics.arcade.enable(this.left_corn)

        this.middle_corn = this.game.add.sprite(middle_corn_x , corn_y, target_middle)
        this.middle_corn.frame = 0
        if(this.isIpad){
            this.middle_corn.scale.setTo(0.8,0)
        }else{
            this.middle_corn.scale.setTo(0.5,0)
        }
        this.middle_corn.anchor.setTo(0.5,1)
        this.middle_corn.life = 3
        this.corns.add(this.middle_corn)
        this.game.physics.arcade.enable(this.middle_corn)

        this.right_corn = this.game.add.sprite(right_corn_x , corn_y, target_right)
        this.right_corn.frame = 0
        if(this.isIpad){
            this.right_corn.scale.setTo(0.8,0)
        }else{
            this.right_corn.scale.setTo(0.5,0)
        }
        this.right_corn.anchor.setTo(0.5,1)
        this.right_corn.life = 3
        this.corns.add(this.right_corn)
        this.game.physics.arcade.enable(this.right_corn)

        var leftTween = this.game.add.tween(this.left_corn.scale)
        if(this.isIpad){
            leftTween.to({y: 0.8}, 1200, Phaser.Easing.Bounce.Out)
        }else{
            leftTween.to({y: 0.5}, 1200, Phaser.Easing.Bounce.Out)
        }
        leftTween.start()

        var middleTween = this.game.add.tween(this.middle_corn.scale)
        if(this.isIpad){
            middleTween.to({y: 0.8}, 1200, Phaser.Easing.Bounce.Out)
        }else{
            middleTween.to({y: 0.5}, 1200, Phaser.Easing.Bounce.Out)
        }
        middleTween.start()

        var rightTween = this.game.add.tween(this.right_corn.scale)
        if(this.isIpad){
            rightTween.to({y: 0.8}, 1200, Phaser.Easing.Bounce.Out)
        }else{
            rightTween.to({y: 0.5}, 1200, Phaser.Easing.Bounce.Out)
        }
        rightTween.start()
    },

    carRunning: function(){
        this.cars = this.game.add.group()
        this.cars.enableBody = true

        var carscale = 0.5
        var carWidth = this.game.cache.getImage('car1').width/2 * carscale
        var carHeight = this.game.cache.getImage('car1').height * carscale
        
        var carTypes = ['car1','car2','car3','car4']

        this.game.time.events.loop(Phaser.Timer.SECOND*1, 
            function(){
                var x = 0
                var y = this.game.rnd.integerInRange(this.game.world.height-carHeight,this.game.world.height)
                var type = carTypes[Math.floor(Math.random() * carTypes.length)]
                var car = this.cars.getFirstExists(false,true,x,y,type)
                car.anchor.setTo(0.5,1)
                car.scale.setTo(carscale)
                this.game.physics.arcade.enable(car)

                car.slide_x = this.game.rnd.integerInRange(0,this.game.world.width)
                car.body.velocity.x = 200
                car.outOfBoundsKill = true
                car.checkWorldBounds = true
            }, this)
    },

    settingMyCloud: function(x,y,anchor_x,anchor_y){

        var mycloud_x = x || this.game.world.centerX
        var mycloud_y = y || this.game.world.height * 0.7
        var anchorX = anchor_x || 0.5
        var anchorY = anchor_y || 0.5

        //add sprite
        this.mycloud = this.game.add.sprite(mycloud_x , mycloud_y, 'mycloud')
        this.mycloud.anchor.setTo(anchorX, anchorY)
        this.mycloud.life = 3
        this.mycloud.spritescale = (this.isIpad)?0.6:0.4
        this.mycloud.scale.setTo(this.mycloud.spritescale)
        var size = this.game.cache.getImage('mycloud').width/10;

        //run animation
        // this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)
        this.mycloud.animations.add('run', [5, 4, 5, 6, 7, 6], 10, true)
        this.mycloud.animations.add('static', [0, 1, 0, 2, 0, 1, 0, 3],10, true)
        this.mycloud.animations.add('frozen', [8, 8, 8, 8, 8, 9, 8],10, true)   

        this.mycloud.animations.play('static')     

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
        }, this)

        this.game.input.onUp.add(function(){
            if(!this.mycloud.isfreezing){
                this.mycloud.body.velocity.x = 0
                this.mycloud.animations.play('static')
            }
        },this)

        if(this.game.device.desktop){
            this.game.input.addMoveCallback(function(pointer,x,y, isTap){
                if(!this.mycloud.isfreezing){
                    if(x > this.mycloud.x){
                        this.mycloud.scale.setTo('-'+scale, scale)
                    }
                    else{
                        this.mycloud.scale.setTo(scale, scale)
                    }

                    this.mycloud.x = x
                    this.mycloud.animations.play('run')
                }
            },this)
        }else{
            this.game.input.addMoveCallback(function(pointer,x,y, isTap){
                if(!this.mycloud.isfreezing){

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
                }
            },this)
        }


        // this.game.input.addMoveCallback(function(pointer,x,y, isTap){
        //     if(this.game.device.desktop && !this.mycloud.isfreezing){
        //         if(x > this.mycloud.x){
        //             this.mycloud.scale.setTo('-'+scale, scale)
        //         }
        //         else{
        //             this.mycloud.scale.setTo(scale, scale)
        //         }
        //         this.mycloud.x = x
        //         this.mycloud.animations.play('run')
        //     }else if(!this.game.device.desktop && !this.mycloud.isfreezing){
        //         if (this.mycloud.touching){

        //             this.mycloud.body.velocity.x = 0

        //             if(x > this.mycloud.x){
        //                 this.mycloud.scale.setTo('-'+scale, scale)
        //             }
        //             else{
        //                 this.mycloud.scale.setTo(scale, scale)
        //             }

        //             this.mycloud.x = x

        //         } else {

        //             if(x > this.mycloud.x + this.mycloud.width/2){
        //                 this.mycloud.scale.setTo('-'+scale, scale)
        //                 this.mycloud.body.velocity.x = 200
        //             }
        //             else if(x < this.mycloud.x - this.mycloud.width/2){
        //                 this.mycloud.scale.setTo(scale, scale)
        //                 this.mycloud.body.velocity.x = -200
        //             } else {
        //                 this.mycloud.body.velocity.x = 0
        //             }
        //         }

        //         this.mycloud.animations.play('run')     
        //     }

        //     //(desktop)雲跟著滑鼠動，但只會在三個位置停留
        //     //(mobile)只會在三個位置停留，除了拖曳外，也可點螢幕讓雲動，點左向左一格，依此類推
        //         // var position = this.mycloud.currentPosition
        //         // var position1 = this.game.width * 1/4
        //         // var position2 = this.game.width * 1/2
        //         // var position3 = this.game.width * 3/4
        //         // var canmove = false
        //         //unit step method
        //             // if(x>this.mycloud.x + this.mycloud.width * this.mycloud.spritescale){
        //             //     this.mycloud.scale.setTo('-'+scale, scale)
        //             //     ++position
        //             //     canmove=true
        //             // }else if(x<this.mycloud.x - this.mycloud.width * this.mycloud.spritescale){
        //             //     this.mycloud.scale.setTo(scale)
        //             //     --position
        //             //     canmove=true
        //             // }else{
        //             //     this.mycloud.animations.stop()
        //             //     this.mycloud.frame = 0
        //             //     canmove=true
        //             // }

        //             // if(canmove) {
        //             //     this.mycloud.animations.play('run')

        //             //     if(position==0) {
        //             //         this.mycloud.x = position2
        //             //         position=0
        //             //     } else if(position<=-1){
        //             //         this.mycloud.x = position1
        //             //         position=-1
        //             //     } else if(position>=1){
        //             //         this.mycloud.x = position3
        //             //         position=1
        //             //     }

        //             //     // console.log(position)                
        //             //     this.mycloud.currentPosition = position
        //             // }
            
        //         //minimum distance method
        //             // var canmove = false
        //             // var distance1 = Math.abs(x-position1)
        //             // var distance2 = Math.abs(x-position2)
        //             // var distance3 = Math.abs(x-position3)
        //             // var mindistance = Math.min(distance1,distance2,distance3)

        //             // if(x >this.mycloud.x){
        //             //     this.mycloud.scale.setTo('-'+scale, scale)
        //             // }else{
        //             //     this.mycloud.scale.setTo(scale)
        //             // }    

        //             // if(this.game.device.desktop||(!this.game.device.desktop && !isTap && this.mycloud.touching )){

        //             //     canmove = true

        //             // } else if(!this.game.device.desktop && isTap) {

        //             //     if(x<this.mycloud.x){
        //             //         // console.log('left')
        //             //     }else{
        //             //         // console.log('right')
        //             //     }
        //             // }

        //             // if(canmove){
        //             //     this.mycloud.animations.play('run')
        //             //     switch(mindistance){
        //             //         case distance1:
        //             //             this.mycloud.x = position1
        //             //             break
        //             //         case distance2:
        //             //             this.mycloud.x = position2
        //             //             break 
        //             //         case distance3:
        //             //             this.mycloud.x = position3
        //             //             break                         
        //             //     }
        //             // }
        // },this)

    },

    scenesFactory: function(level,level_arg){

        //background
            if(level==='level1'){
                var bg = this.game.add.image(0,0,'firstbg')
                bg.width = this.game.world.width
                bg.height = this.game.world.height

                //corn
                this.cornInitialize()//left,middle,right
                //cow
                var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75,'cow')
                cow.scale.setTo(0.6,0.6)
                cow.anchor.setTo(0.5,0.5)
                var cowAnim = cow.animations.add('cow');
                cowAnim.play(10,true);

                if(level_arg==='play'){
                    this.staticScenes()
                }else{
                    this.animatedScenes()

                    //set the first mask for trial
                    this.trialmask1 = this.settingmask('rgba(0,0,0,0)')
                }

            } else if(level==='level2'){

                var bg = this.game.add.image(0,0,'secondbg')
                bg.width = this.game.world.width
                bg.height = this.game.world.height

                this.cornInitialize()

                if(level_arg==='play'){
                    this.staticScenes()
                }else{
                    this.animatedScenes()

                    //set the first mask for trial
                    this.trialmask1 = this.settingmask('rgba(0,0,0,0)')
                }

            } else if(level==='level3'){
                var bg = this.game.add.image(0,0,'thirdbg')
                bg.width = this.game.world.width
                bg.height = this.game.world.height

                this.frozenroadInitialize()
                this.carRunning()

                this.animatedScenes()
                // if(level_arg==='play'){
                //     this.staticScenes()
                // }else{
                //     this.animatedScenes()
                // }

            } else if(level==='trial1'){

                // this.game.stage.backgroundColor = '#fff'
                var bg = this.game.add.image(0,0,'firstbg')
                bg.width = this.game.world.width
                bg.height = this.game.world.height

                this.cornInitialize()//left,middle,right
                
                this.staticScenes()
                this.heartmaker(['redheart','redheart','redheart'])

                //static cow
                var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75,'cow')
                cow.scale.setTo(0.6,0.6)
                cow.anchor.setTo(0.5,0.5)

                this.settingmask()

                this.hails = this.game.add.group()
                this.hails.enableBody = true
                this.hailcrushes = this.game.add.group()

                this.settingMyCloud(this.game.world.width * 0.85,this.game.world.height*0.6)

                this.game.time.events.add(Phaser.Timer.SECOND*1, this.hailing, this)
                this.game.time.events.loop(Phaser.Timer.SECOND*5, this.hailing, this)

            } else if(level==='trial2'){

                this.game.stage.backgroundColor = '#fff'
                this.staticScenes()
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

    settinghails: function(){
      //create group for hail
        this.hails = this.game.add.group()
        this.hails.enableBody = true
        this.hailcrushes = this.game.add.group()

        //create hailing timer
        if(this.level==='level1'){
            var delayTofire = Phaser.Timer.SECOND*1.3
        }else if(this.level==='level2'){
            var delayTofire = Phaser.Timer.SECOND*1            
        }else if(this.level==='level3'){
            var delayTofire = Phaser.Timer.SECOND*0.7            
        }

        this.hailingTimer = this.game.time.create(false)

        //不連續掉大冰雹
        this.bighailblock = false
        this.blockingctr = 0
        this.hailingTimer.loop(delayTofire,this.hailing,this)
    },

    animatedScenes: function(){
        //darksky and cloud animation

        if(this.level==='level1'){
            var sky = 'darksky1'
        }else if(this.level==='level2'){
            var sky = 'darksky2'
        }else if(this.level==='level3'){
            var sky = 'darksky3'
        }

        if(this.isIpad){
            var darksky = this.game.add.image(0,-200,sky)
            darksky.width = this.game.world.width
            darksky.height = this.game.world.height * 0.35

            var blackcloud1 = this.game.add.image(-200,0,'blackcloud1')      
            var blackcloud1Img = this.game.cache.getImage('blackcloud1')
            blackcloud1.width = this.game.world.width * 0.5
            blackcloud1.height = blackcloud1.width / blackcloud1Img.width * blackcloud1Img.height

            var blackcloud2 = this.game.add.image(this.game.world.width+200,0,'blackcloud2')        
            blackcloud2.anchor.setTo(0.7,0.2)
            var blackcloud2Img = this.game.cache.getImage('blackcloud2')
            blackcloud2.width = this.game.world.width * 0.65
            blackcloud2.height = blackcloud2.width / blackcloud2Img.width * blackcloud2Img.height

            var cloud = this.game.add.image(-30,this.game.world.height/2,'cloud')  
            cloud.anchor.setTo(0,0.5)      
            var cloudImg = this.game.cache.getImage('cloud')
            cloud.width = this.game.world.width * 1.2
            cloud.height = cloud.width / cloudImg.width * cloudImg.height

            this.bigcloud = this.game.add.image(this.game.world.centerX, -300,'bigcloud')
            this.bigcloud.anchor.setTo(0.5,0)    
            var bigcloudImg = this.game.cache.getImage('bigcloud')
            this.bigcloud.width = this.game.world.width
            this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height

            var darkskyTween = this.game.add.tween(darksky).to({y: 0}, 1000, Phaser.Easing.Bounce.In, true)
            darkskyTween.start()

            var blackcloud1Tween = this.game.add.tween(blackcloud1).to({x: -50}, 500, Phaser.Easing.Linear.In, true, 1000)
            blackcloud1Tween.start()

            var blackcloud2Tween = this.game.add.tween(blackcloud2).to({x: this.game.world.width}, 500, Phaser.Easing.Linear.In, true, 1200)
            blackcloud2Tween.start()

            this.bigcloud.Yposition = -50
            var bigcloudTween = this.game.add.tween(this.bigcloud).to({y: this.bigcloud.Yposition}, 700, Phaser.Easing.Sinusoidal.InOut, true, 1700)
            bigcloudTween.start()      
            bigcloudTween.onComplete.add(this.onStart, this)

        }else{

            var darksky = this.game.add.image(0,-100,sky)
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
        }

    },

    staticScenes: function() {
       
        if(this.level==='level1'){
            var sky = 'darksky1'
        }else if(this.level==='level2'){
            var sky = 'darksky2'
        }else if(this.level==='level3'){
            var sky = 'darksky3'
        }

        var darksky = this.game.add.image(0,0,sky)
        darksky.width = this.game.world.width
        darksky.height = this.game.world.height * 0.35

        var blackcloud1 = this.game.add.image(-50,0,'blackcloud1')      
        var blackcloud1Img = this.game.cache.getImage('blackcloud1')
        blackcloud1.width = this.game.world.width * 0.5
        blackcloud1.height = blackcloud1.width / blackcloud1Img.width * blackcloud1Img.height

        var blackcloud2 = this.game.add.image(this.game.world.width,0,'blackcloud2')  
        blackcloud2.anchor.setTo(0.7,0.2)      
        var blackcloud2Img = this.game.cache.getImage('blackcloud2')
        blackcloud2.width = this.game.world.width * 0.65
        blackcloud2.height = blackcloud2.width / blackcloud2Img.width * blackcloud2Img.height

        var cloud = this.game.add.image(-30,this.game.world.height/2,'cloud')        
        cloud.anchor.setTo(0,0.5)      
        var cloudImg = this.game.cache.getImage('cloud')
        cloud.width = this.game.world.width * 1.2
        cloud.height = cloud.width / cloudImg.width * cloudImg.height

        if(this.isIpad){
            this.bigcloud = this.game.add.image(this.game.world.centerX, -50,'bigcloud')
        }else{
            this.bigcloud = this.game.add.image(this.game.world.centerX, 10,'bigcloud')
        }
        this.bigcloud.anchor.setTo(0.5,0)        
        var bigcloudImg = this.game.cache.getImage('bigcloud')
        this.bigcloud.width = this.game.world.width
        this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height

        if(this.isIpad){
            this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.y+this.bigcloud.height/2,'bigcloud_anger1')
            this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger1.width = this.bigcloud.width/20
            this.bigcloud_anger1.height = this.bigcloud.width/20     

            this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.6,'bigcloud_anger2')
            this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger2.width = this.bigcloud.width/20
            this.bigcloud_anger2.height = this.bigcloud.width/20     

        }else{
            this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55,'bigcloud_anger1')
            this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger1.width = this.bigcloud.width/20
            this.bigcloud_anger1.height = this.bigcloud.width/20     

            this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8,'bigcloud_anger2')
            this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger2.width = this.bigcloud.width/20
            this.bigcloud_anger2.height = this.bigcloud.width/20     
        }

        this.onStart()
    },

    settingmask: function(color) {

        var fill = color||'rgba(0,0,0,0.6)'
        var bmd = this.game.make.bitmapData(this.game.world.width,this.game.world.height)
        bmd.addToWorld()
        bmd.rect(0,0,this.game.world.width,this.game.world.height,fill)
        bmd.dirty = false

        return bmd
    },

    settingtaskWindow: function(){ 
    
        var taskwindowGroup = this.game.add.group()

        //using graphics
        var window = this.game.add.graphics(0,0)
        window.alignIn(window,Phaser.CENTER,this.game.world.width*0.1,this.game.world.height*0.15)
        window.beginFill(0xFFFFFF);
        window.drawRoundedRect(0,0,this.game.world.width*0.8,this.game.world.height*0.7)
        window.endFill()

        taskwindowGroup.add(window)

        if(this.level==='level1'){
            var imgName = 'wang'

            if(this.level_arg==='trial1-1'){
                var btnvalue = '遊戲開始'
                var words = "正 在 玉 米 田 裡 忙 碌 的 王 爺 爺 ， 卻 收 到 了 冰 雹 警 報 ， 想 起 過 去 曾 有 冰 雹 造 成 農 損 的 例 子 ， 若 沒 有 及 時 阻 止 冰 雹 落 下 ， 他 的 心 血 就 要 泡 湯 了......"
            } else if(this.level_arg==='play'){
                var btnvalue = '進入下一關'
                var words = "「 謝 謝 你 拯 救 了 我 的 玉 米 田 ！ 希 望 你 繼 續 幫 助 更 多 人 ！ 」"                
            }

        } else if(this.level==='level2'){

            if(this.level_arg==='trial2-1'){
                var imgName = 'people1'
                var btnvalue = '遊戲開始'
                var words = "離 開 了 玉 米 田 ， 雲 朵 人 來 到 車 水 馬 龍 的 台 北 街 頭 ， 萬 里 無 雲 的 藍 天 ， 此 時 卻 飄 來 一 朵 大 烏 雲 ..."
            } else if(this.level_arg==='play'){
                var imgName = 'people1'
                var btnvalue = '進入下一關'
                var words = "「謝 謝 你 保 護 了 我 們 的 生 命 安 全 ！ 不 過 前 面 還 有 人 也 需 要 你 幫 忙......」" 
            } else if(this.level_arg==='alarm'){
                var imgName = 'alarmcloud'
                var btnvalue = '沒問題'
                var words = "新 任 務 ！ 冒 著 被 冰 凍 的 危 險 ， 勇 敢 接 住 大 冰 雹 吧 ， 並 連 續 點 擊 雲 朵 人 來 脫 困 。"
            }

        } else if(this.level==='level3'){

            if(this.level_arg==='alarm'){
                var imgName = 'alarmcloud'
                var btnvalue = '沒問題'
                var words = "大量冰雹將快速落下！\n請注意！"

            }else{
                var imgName = 'police'
                var btnvalue = '遊戲開始'
                var words = "危 險 ！ 國 道 也 下 起 冰 雹 ， 若 造 成 車 輛 打 滑 就 糟 了 ⋯ 雲 朵 人 ， 拯 救 駕 駛 人 ， 靠 你 了 ！"          
                // var words = "幫 助 台 北 市 度 過 危 機 後 ， 雲 朵 人 來 到 了 高 速 公 路 ， 氣 象 單 位 卻 突 然 發 布 冰 雹 預 警 ！ 若 冰 雹 落 在 高 速 公 路 造 成 車 輛 打 滑 就 不 好 了......"            
            }
        }

        var banner = (this.level_arg==='play')?'passedbanner':'alarmbanner'
        var window_banner = this.game.add.sprite(this.game.world.centerX,window.y,banner)
        window_banner.scale.setTo(0.5)
        window_banner.anchor.setTo(0.5)
        var bannerAnim = window_banner.animations.add(window_banner);
        bannerAnim.play(10,true)
        taskwindowGroup.add(window_banner)

        var unpausebtn = this.btnGenerator('btn_1_1', btnvalue, false) 
        this.unpausebtn = unpausebtn
        taskwindowGroup.add(unpausebtn)
        taskwindowGroup.add(unpausebtn.button_txt)

        var peopleSize = this.game.cache.getImage(imgName).height

        var font_rwd
        var padding_rwd = (this.game.world.width < 600) ? 40 : 200 
 
        if(this.game.world.width < 350){
            font_rwd = '16px'
        }else if(this.game.world.width >= 350 && this.game.world.width < 400){
            font_rwd = '18px'
        }else if(this.game.world.width >= 400 && this.game.world.width < 600){
            font_rwd = '20px'
        }else{
            font_rwd = '24px'
        }

        // console.log(this.game.world.width, font_rwd)

        var style = { font: font_rwd + " Microsoft JhengHei", fill: "#000", 
                    boundsAlignH: "center", boundsAlignV: "middle", 
                    wordWrap: true, wordWrapWidth: this.game.world.width*0.8 - padding_rwd}      

        if(this.level_arg==='alarm'){
            if(this.isIpad){
                var people = this.game.add.image(this.game.world.centerX,unpausebtn.y-peopleSize*0.55,imgName)
                people.anchor.setTo(0.5)
                people.scale.setTo(1)

                var text = this.game.add.text(this.game.world.centerX, people.y-people.height*0.45 ,words,style)
                text.anchor.setTo(0.5,1)

            }else{
                var people = this.game.add.image(this.game.world.centerX,unpausebtn.y-peopleSize*0.3,imgName)
                people.anchor.setTo(0.5)
                people.scale.setTo(0.5)

                var text = this.game.add.text(this.game.world.centerX, people.y-people.height/2 ,words,style)
                text.anchor.setTo(0.5,1)
            }

        }else{
            if(this.isIpad){
                var people = this.game.add.image(this.game.world.centerX,unpausebtn.y-peopleSize*0.8,imgName)
                people.anchor.setTo(0.5)
                people.scale.setTo(1)

                var text = this.game.add.text(this.game.world.centerX, people.y-people.height*0.6 ,words,style)
                text.anchor.setTo(0.5,1)

            }else{
                var people = this.game.add.image(this.game.world.centerX,unpausebtn.y-peopleSize*0.4,imgName)
                people.anchor.setTo(0.5)
                people.scale.setTo(0.5)

                var text = this.game.add.text(this.game.world.centerX, people.y-people.height/2 ,words,style)
                text.anchor.setTo(0.5,1)

            }

        }

        taskwindowGroup.add(text)  
        taskwindowGroup.add(people)

        return taskwindowGroup
    },

    onStart: function(){
        if(this.isIpad){
            //big cloud is angry
            this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.y+this.bigcloud.height/2,'bigcloud_anger1')
            this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger1.width = this.bigcloud.width/20
            this.bigcloud_anger1.height = this.bigcloud.width/20     

            this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.6,'bigcloud_anger2')
            this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger2.width = this.bigcloud.width/20
            this.bigcloud_anger2.height = this.bigcloud.width/20     

        }else{
            //big cloud is angry
            this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55,'bigcloud_anger1')
            this.bigcloud_anger1.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger1.width = this.bigcloud.width/20
            this.bigcloud_anger1.height = this.bigcloud.width/20     

            this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8,'bigcloud_anger2')
            this.bigcloud_anger2.anchor.setTo(0.5,0.5)   
            this.bigcloud_anger2.width = this.bigcloud.width/20
            this.bigcloud_anger2.height = this.bigcloud.width/20     
        }

        //heart setting
        this.mycloudLifeHandler(3)

        //time setting
        this.passedTimer()

        //因為圖層的關係，mask要設定在settingMyCloud()之前,Timer之後
        this.trialmask2 = this.settingmask('rgba(0,0,0,0)')

        this.settingMyCloud()

        //用來發射冰凍狀態時點擊的碎片
        this.mycloudEmitter = this.emitterGenerator()
    
        if(this.level_arg==='play'){
            this.onPlay()
        }else{
            //taskwindow pops up
            this.game.paused = true
            this.mask = this.settingmask()
            this.taskWindowGroup = this.settingtaskWindow()
            this.taskWindowlistener = this.game.input.onDown.add(this.unpause,this,0,'taskWindow')
        }

    },

    unpause: function(event){

        var window = arguments[2]
        var btnIsClicked = false
        
        if(window==='taskWindow'||window==='passedWindow'||window==='alarmWindow'){
            if(event.x > this.unpausebtn.x - this.unpausebtn.width/2 &&
                event.x < this.unpausebtn.x + this.unpausebtn.width/2 &&
                event.y > this.unpausebtn.y - this.unpausebtn.height/2 &&
                event.y < this.unpausebtn.y + this.unpausebtn.height/2){
                    btnIsClicked = true
            }
        }

        if(this.game.paused && btnIsClicked){

                // console.log(window)
                // console.log(this.level_arg)

                this.game.paused = false

                try{
                    this.buttonclicksound.play()
                } catch(e){
                }
                    
                this.mask.cls()
                if(window==='taskWindow'){
                    if(this.level==='level3'){
                        this.level_arg = 'play'
                    }
                    this.taskWindowGroup.destroy()
                    this.game.input.onDown.removeAll()
                    this.onPlay()       
                } else if(window==='passedWindow'){
                    this.passedWindowGroup.destroy()
                    if(this.level==='level1'){
                        this.backgroundMusicControler('stop')                      
                        this.game.state.start('Play', true, false, 'level2', 'trial2-1')
                    }else if(this.level==='level2'){
                        //等待螢幕歸正
                        this.game.time.events.add(Phaser.Timer.SECOND * 0.5,function(){
                            this.backgroundMusicControler('stop')                      
                            this.game.state.start('Play', true, false, 'level3')  
                        },this)
                    }
                } else if(window==='alarmWindow'){
                    this.alarmWindowGroup.destroy()
                    this.game.input.onDown.removeAll()
                    
                    this.hailingTimer.pause()
                    this.hailingAlarmPeriod.pause()

                    if(this.hailingStormTimer.paused){
                        this.hailingStormTimer.resume()                
                    }else{
                        this.hailingStormTimer.start()
                    }

                }
        }
    },

    passedTimer: function(){
        // var counter = 10

        if(this.level==='level1'){
            var counter = 10
        }else{
            var counter = 30
        }

        if(this.isIpad){
            var style2 = { font: "bold 60px Arial", fill: "#FFAA33", align: "center" }
            var text2 = this.game.add.text(this.game.width*0.95, this.heart3.y, counter, style2)
            text2.anchor.setTo(1, 0.25)

            var style1 = { font: "bold 30px Microsoft JhengHei", fill: "#ffffff", align: "left" }
            var text1 = this.game.add.text(this.game.width*0.95-text2.width, this.heart3.y, '剩餘時間 : ', style1)
            text1.anchor.setTo(1, 0)

        }else{
            var style1 = { font: "bold 22px Microsoft JhengHei", fill: "#ffffff", align: "left" }
            var text1 = this.game.add.text(this.game.world.width*0.55, this.heart3.y, '剩餘時間 : ', style1)
            text1.anchor.setTo(0, 0)

            var style2 = { font: "bold 50px Arial", fill: "#FFAA33", align: "center" }
            var text2 = this.game.add.text(text1.x + text1.width*1.25, this.heart3.y, counter, style2)
            text2.anchor.setTo(0.5, 0.25)

        }

        this.gameTimer = this.game.time.create(false)

        this.gameTimer.loop(Phaser.Timer.SECOND, function(){

            if(counter===0){

                //因為pause的緣故，不能順利播放
                try{
                    this.passedsound.play()
                } catch(e){
                }

                if(this.level==='level3'){
                    this.game.time.events.add(Phaser.Timer.SECOND*0.5,function(){
                        this.game.state.start('Over', true, false, this.level,'end')
                    },this)

                }else{
                    this.game.paused = true
                    this.mask = this.settingmask()
                    this.passedWindowGroup = this.settingtaskWindow()
                    this.game.input.onDown.add(this.unpause,this,0,'passedWindow')
                }
    
            }else{
                text2.setText(--counter)
            }

        },this)

        this.gameTimer.start()

    },

    onPlay: function(){
        
        this.settinghails()

        if(this.level_arg==='play'){
            this.hailingTimer.start()

            if(this.level==='level2'||this.level==='level3'){
                this.hailingAlarm()
            }

        }else{
            this.tutorialMode()
        }

    },

    tutorialMode: function(){

        var mycloudX = this.game.world.width * 0.85

        if(this.level_arg==='trial1-1'){
            var words = [
                "在 時 限 內 ， 拖 曳 雲 朵 人 接 冰 雹 ， ",
                "防 止 冰 雹 落 地 _"
            ]

            this.trialmask2.fill(0,0,0,0.6)

        } else if(this.level_arg==='trial1-2'){
            var words = [
                "若 漏 接 ， 冰 雹 落 入 玉 米 田 ， 就 會 ",
                "損 失 一 顆 愛 心 ， 愛 心 歸 零 = 挑 戰",
                "失 敗 !"
            ]

            this.trialmask2.cls()
            this.trialmask1.fill(0,0,0,0.6)

            var life = 3
            //twinkling hearts
            this.game.time.events.loop(Phaser.Timer.SECOND*0.5, function(){
                if(life===3){
                    var newlife = 2
                }else if(life===2){
                    var newlife = 3
                }
                life = newlife
                this.mycloudLifeHandler(newlife)
            }, this,life)
        } else if(this.level_arg==='trial2-1'){
            // var words = [
            //     "接 住 大 冰 雹 會 被 冰 凍 ， 請 連 續 點 ",
            //     "擊 來 脫 困 ! _"
            // ]

            var words = [
                "新 任 務 ！ 冒 著 被 冰 凍 的 危 險 ， 勇 ",
                "敢 接 住 大 冰 雹 吧 ， 並 連 續 點 擊 雲 ",
                "朵 人 來 脫 困 。_"
            ]

            this.trialmask2.fill(0,0,0,0.6)
        }

        this.playPaused()   

        var mycloudmoving = this.game.add.tween(this.mycloud).to({x: mycloudX}, 500, Phaser.Easing.Linear.In, true)
        mycloudmoving.onComplete.add(this.mycloudTrialDialogue,this,0,words)
        
    },

    hailingAlarm: function(){

        //storm delay
        var delayTofire = (this.level==='level3')?Phaser.Timer.SECOND*0.4:Phaser.Timer.SECOND*0.7

        var alarmPeriod = (this.level==='level3')?Phaser.Timer.SECOND*10:Phaser.Timer.SECOND*15

        //多久一次Alarm的timer
        this.hailingAlarmPeriod = this.game.time.create(false)
        //給Alarm掉冰雹的timer
        this.hailingStormTimer = this.game.time.create(false)
        this.hailingStormTimer.loop(delayTofire, this.hailing,this)

        this.hailingAlarmPeriod.loop(alarmPeriod, function(){
            
            if(this.level==='level2'){
                //只加快，不叫taskwindow出來
                this.hailingTimer.pause()
                this.hailingAlarmPeriod.pause()
                this.hailingStormTimer.start()

            }else if(this.level==='level3'){

                this.level_arg = 'alarm'

                //叫taskwindow出來
                this.game.paused = true
                this.mask = this.settingmask()
                this.alarmWindowGroup = this.settingtaskWindow()
                this.game.input.onDown.add(this.unpause,this,0,'alarmWindow')

                //pause after 5 seconds
                this.game.time.events.add(Phaser.Timer.SECOND*5,function(){
                    this.hailingStormTimer.pause()
                    this.hailingAlarmPeriod.resume()
                    this.hailingTimer.resume()

                    //level_arg改回play
                    this.level_arg = 'play'
                },this)
            }

        }, this)

        this.hailingAlarmPeriod.start()
    },

    mycloudTrialDialogue: function(){

        var words = arguments[2]

        var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height*1.2)
        dialogue.content = words
        dialogue.style = (this.isIpad)?{ font: "20px Microsoft JhengHei", fill: "#000" }:{ font: "16px Microsoft JhengHei", fill: "#000" }

        if(this.isIpad){
            this.typewriter(dialogue.img.x - (dialogue.img.width*0.7)/2,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)
        }else{
            this.typewriter(dialogue.img.x - (dialogue.img.width*0.8)/2,dialogue.img.y-(dialogue.img.height*0.8)/2, dialogue)
        }

        if(this.level_arg==='trial1-2'){
            this.game.input.enabled = true
            var button = this.btnGenerator('btn_1_1', '沒問題!', 0, false)      
        }

    },

    //For trial
    playPaused: function(){
        this.mycloud.inputEnabled = false
        this.game.input.enabled = false
        this.gameTimer.pause()
        this.hailingTimer.pause()

    },

    playResumed: function(){
        //因為trial1-2不會自動解除暫停，需要按按鈕開始
        if(this.level_arg!=='trial1-2'){
            this.game.input.enabled = true
            this.mycloud.inputEnabled = true
        }
    },

    heartmaker: function(hearts){

        var heart_1 = hearts[0]
        var heart_2 = hearts[1]
        var heart_3 = hearts[2]        
        // var newhearts = []

        var heartscale = 0.6
        this.heart1 = this.game.add.image(10,20,heart_1)
        this.heart2 = this.game.add.image(this.heart1.x + this.heart1.width * heartscale,20,heart_2)      
        this.heart3 = this.game.add.image(this.heart2.x + this.heart2.width * heartscale,20,heart_3)      
        this.heart1.scale.setTo(heartscale)
        this.heart2.scale.setTo(heartscale)
        this.heart3.scale.setTo(heartscale)

        // newhearts[0] = this.heart1
        // newhearts[1] = this.heart2
        // newhearts[2] = this.heart3

        // return newhearts
    },

    btnGenerator: function(btnStyle, value, isClick){

        var x = this.game.world.centerX
        var y = this.game.world.height*0.75
        var anchor_x = 0.5
        var anchor_y = 0.2
        var txt_anchor_y = 0
        var style = isClick?btnStyle+'_click':btnStyle

        if(this.isIpad){
            var width = 225
            var height = 72
        }else{
            var width = 150
            var height = 48
        }

        var button = this.game.add.button(x, y, style, function() {
            this.btnGenerator(style, value, true)
        }, this, 1,1,0)

        button.anchor.setTo(anchor_x,anchor_y)
        button.width = width
        button.height = height

        if(this.isIpad){
            var txt_style = {font: "30px Microsoft JhengHei", fill: "#fff"}
        }else{
            var txt_style = {font: "22px Microsoft JhengHei", fill: "#fff"}
        }

        button.button_txt = this.game.add.text(x, y, value, txt_style)
        button.button_txt.anchor.setTo(anchor_x,txt_anchor_y)

        if(isClick){
            try{
                this.buttonclicksound.play()
            } catch(e){
            }

            this.stateChanger(value)
        }

        return button
    },

    stateChanger: function(value){
        if(this.level_arg==='trial1-2' && value==='沒問題!'){
            this.game.state.restart(true, false, this.level, 'play')    
            this.backgroundMusicControler('stop')                           
        }
    },

    emitterGenerator: function(){

        var emitter = this.game.add.emitter(0, 0, 500)


        emitter.makeParticles(['ice1','ice2','ice3'])

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

                if(this.mycloud.clickTimes>=2){
                    this.mycloud.clickTimes = 0
                    this.mycloud.isfreezing = false
                    this.mycloud.animations.play('static')

                    if(this.level_arg==='trial2-1'){
                        //等待螢幕歸正
                        this.game.time.events.add(Phaser.Timer.SECOND * 1,function(){
                            this.game.state.restart(true,false,this.level,'play')
                            this.backgroundMusicControler('stop')                      
                        },this)
                    }

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

    hailing: function(size,positionX){

        var hailSize = this.game.cache.getImage('hail').width/3
        var bighailSize = this.game.cache.getImage('bighail').width/3

        var x = positionX || this.game.rnd.integerInRange(0, this.game.width - hailSize) 
        var y = this.bigcloud.y + this.bigcloud.height

        if(this.level==='level1'){
            var fallingObject = 'hail'
        }else if(this.level_arg==='trial2-1'){
            var fallingObject = 'bighail'
        }else{
            var fallingObject = (this.game.rnd.integerInRange(0,10)>7 && !this.bighailblock)?'bighail':'hail'
            
            if(fallingObject==='bighail'){
                this.bighailblock = true
            }

            if(this.bighailblock && this.blockingctr<this.game.rnd.integerInRange(2,5)){
                this.blockingctr++
            }else{
                this.blockingctr = 0
                this.bighailblock = false
            }
        }

        var hail = this.hails.getFirstExists(false,true,x,y,fallingObject)            
        hail.scale.setTo(0.5)

        this.game.physics.arcade.enable(hail)
        hail.body.setSize(hailSize*0.6,hailSize*0.6,hailSize*0.2,hailSize*0.3)
        hail.body.velocity.y = 300
        hail.size = (fallingObject==='bighail')?'big':'small'
        // hail.outOfBoundsKill = true
        hail.checkWorldBounds = true
        hail.events.onOutOfBounds.add(function(){

            if(this.level==='level3'){
                this.hitroad(hail)
            }

            hail.destroy()

        },this)
    },

    frozenroadInitialize: function(){

        var road_x = []
        var road_y = this.game.height
        this.frozenroad = []
        this.frozenroads = this.add.group()
        this.frozenroads.maxframe = 1

        //left
        road_x[0] = this.game.width * 1/6
        //middle
        road_x[1] = this.game.width * 1/2
        //right
        road_x[2] = this.game.width * 5/6


        for(var i=0;i<3;i++){
            this.frozenroad[i] = this.game.add.sprite(road_x[i] , road_y, 'iceground')
            this.frozenroad[i].frame = 0
            if(this.isIpad){
                this.frozenroad[i].scale.setTo(1.2,0.8)
            }else{
                this.frozenroad[i].scale.setTo(0.55,0.5)
            }
            this.frozenroad[i].anchor.setTo(0.5,1)
            this.frozenroad[i].visible = false
            this.frozenroads.add(this.frozenroad[i])
        }


    },

    hitroad: function(hail){

        if(this.mycloud.life===3){
            // console.log(hail.x)

            if(hail.x<=this.game.world.width/3){

                this.frozenroad[0].visible = true

            }else if(hail.x>this.game.world.width* 1/3 && 
                    hail.x<=this.game.world.width* 2/3){

                this.frozenroad[1].visible = true

            }else{

                this.frozenroad[2].visible = true
            }

        }else{

            this.frozenroads.children.forEach(function(ele){
                ele.visible = true
                if(ele.frame<this.frozenroads.maxframe){
                    ele.frame++
                }
            },this)
        }

        if(this.mycloud.life>0){
            try{
                this.losssound.play()
            } catch(e){
            }
            this.mycloudLifeHandler(--this.mycloud.life)
        }
    },

    hailCrushed: function(x,y,scale,size){
        var fallingObject = (size==='big')?'bighail':'hail'
        var anchorY = 0.5
        var crush = this.hailcrushes.getFirstExists(false,true,x,y,fallingObject)
        crush.anchor.setTo(0.5,anchorY)
        crush.scale.setTo(scale)

        var anim = crush.animations.add(fallingObject);
        anim.play(60,false,false)
        anim.onComplete.addOnce(function(){
            crush.destroy();
        }, this)
    },

    mycloudLifeHandler: function(life){

        if(life>0){

            var hearts = []

            for(var i=0; i<3; i++){
                hearts[i] = i<=life-1?'redheart':'blackheart'
            }

            this.heartmaker(hearts)

        }else{
            this.backgroundMusicControler('stop')    
            try{
                this.failsound.play()          
            } catch(e){
            }        
            this.game.state.start('Over', true, false, this.level)
        }
    },

    settingDialogue: function(x,y,words){

        var dialogueImg = this.game.add.image(x,y, 'dialogue') 
        dialogueImg.width = (this.isIpad)?this.game.world.width * 0.5:this.game.world.width * 0.8
        dialogueImg.height = (this.isIpad)?this.game.world.height * 0.15:this.game.world.height * 0.2
        dialogueImg.anchor.setTo(0.5,0.5)

        var dialogue = {}
        dialogue.img = dialogueImg
        dialogue.content = words

        if(dialogue.content){
            this.mycloudSpeaking(dialogue)
        }

        return dialogue
    },

    typewriter: function(x,y,dialogue){

        this.content = dialogue.content

        this.line = []
        this.wordIndex = 0
        this.lineIndex = 0;
        
        this.wordDelay = 100;
        this.lineDelay = 0;

        this.typefinished = false

        var style = dialogue.style ||{ font: "16px Microsoft JhengHei", fill: "#fff" }

        this.text = this.game.add.text(x, y, '', style);
        this.nextLine()
    },

    nextLine: function(){

        if (this.lineIndex === this.content.length)
        {
            //  We're finished
                this.typefinished = true
            // this.game.time.events.add(Phaser.Timer.SECOND * 2,function(){
            //     this.typefinished = true
            // },this)

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

    typeFinished: function(){
        if(this.typefinished){
            this.playResumed()

            if(this.level_arg!=='play'){
                this.hailingTimer.start()
            }

            this.typefinished = false
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

        }else if(option==='pause'){

            try{
                this.bgsound.pause()
            } catch(e){
            }

        }else if(option==='resume'){

            try{
                this.bgsound.resume()
            } catch(e){
            }

        }
    }

}

module.exports = PlayState
