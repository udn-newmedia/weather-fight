

let PlayState = {

    init: function(game_level){

        this.level = game_level
        this.game.stage.backgroundColor = '#000'

    },

    create: function(){

        this.game.physics.startSystem(Phaser.Physics.ARCADE)

        this.scenesFactory(this.level)
        this.settingMyCloud()
    },

    update: function(){
        this.game.physics.arcade.overlap(this.hails, this.mycloud, this.hitmyCloud, null, this)
        this.game.physics.arcade.overlap(this.hails, this.corns, this.hitCorn, null, this)
    },
    hitCorn: function(hail, corn) {
        hail.kill()    

        switch(--corn.life){            
            case 3:
                corn.frame = 0
                break
            case 2:
                corn.frame = 1
                break
            case 1:
                corn.frame = 2                    
                break
            case 0:
                corn.frame = 3                    
                break

            default:
                console.log(corn.life)
        }
    },

    hitmyCloud: function(mycloud, hail) {
        hail.kill()
        this.hailCrushed(hail.x,hail.y)                     
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

    settingMyCloud: function(){

        var touching = false
        var scale = 0.6
        var mycloud_x = this.game.world.centerX
        var mycloud_y = this.game.world.height * 0.65

        //add sprite
        this.mycloud = this.game.add.sprite(mycloud_x , mycloud_y, 'mycloud')
        this.mycloud.anchor.setTo(0.5, 0.5)
        this.mycloud.scale.setTo(scale, scale)

        //run animation
        this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)

        this.game.physics.arcade.enable(this.mycloud);
        this.mycloud.body.collideWorldBounds = true;

        this.game.input.onDown.add(function(pointer){
            if(Math.abs(pointer.x - this.mycloud.x) < this.mycloud.width / 2) {
                touching = true
            }
        },this)

        this.game.input.onUp.add(function(){
            touching = true
            this.mycloud.animations.stop()
            this.mycloud.frame = 0
        },this)

        this.game.input.addMoveCallback(function(pointer, x, y, isTap){
            if (!isTap && touching){ 
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
    },

    scenesFactory: function(level){

        //background
        if(level==='level1'){
            var bg = this.game.add.image(0,0,'firstbg')
        } else if(level==='level2'){
        } else if(level==='level3'){
        }

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

        this.bigcloud = this.game.add.image(this.game.world.centerX, -200,'bigcloud')
        this.bigcloud.anchor.setTo(0.5,0)        
        var bigcloudImg = this.game.cache.getImage('bigcloud')
        this.bigcloud.width = this.game.world.width;
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
        bigcloudTween.onComplete.add(this.onStart, this);
    },

    onStart: function(){
        //hailing
        this.hails = this.game.add.group()
        this.hails.enableBody = true
        this.game.time.events.loop(Phaser.Timer.SECOND*1, this.hailing, this)
        this.hailcrushes = this.game.add.group() 
    },

    hailing: function(){
        var hailSize = this.game.cache.getImage('hail').width/3
        var x = this.game.rnd.integerInRange(0, this.game.width - hailSize) 
        var y = this.bigcloud.y + this.bigcloud.height
        var hail = this.hails.getFirstExists(false,true,x,y,'hail')
        hail.scale.setTo(0.5, 0.5)
        this.game.physics.arcade.enable(hail)
        hail.body.velocity.y = 300

        hail.outOfBoundsKill = true
        hail.checkWorldBounds = true
    },

    hailCrushed: function(x,y){
        var crush = this.hailcrushes.getFirstExists(false,true,x,y,'hail')
        crush.anchor.setTo(0.5,0.5)
        crush.scale.setTo(0.5,0.5)

        var anim = crush.animations.add('hail');
        anim.play(60,false,false);
        anim.onComplete.addOnce(function(){
            crush.destroy();
        }, this);

    }
}

module.exports = PlayState
