

let PlayState = {

    init: function(game_level){

        this.level = game_level;
        this.game.stage.backgroundColor = '#000'

    },

    create: function(){

        // console.log(PlayState.level)

        this.scenesFactory(this.level)
        this.settingMyCloud()

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

        var bg

        //background
        if(level==='level1'){
            bg = this.game.add.image(0,0,'firstbg')
        } else if(level==='level2'){
        } else if(level==='level3'){
        }

        bg.width = this.game.world.width
        bg.height = this.game.world.height

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

        var bigcloud = this.game.add.image(this.game.world.centerX, -200,'bigcloud')
        bigcloud.anchor.setTo(0.5,0)        
        var bigcloudImg = this.game.cache.getImage('bigcloud')
        bigcloud.width = this.game.world.width;
        bigcloud.height = bigcloud.width / bigcloudImg.width * bigcloudImg.height

        var darkskyTween = this.game.add.tween(darksky).to({y: 0}, 1000, Phaser.Easing.Bounce.In, true)
        darkskyTween.start()

        var blackcloud1Tween = this.game.add.tween(blackcloud1).to({x: -50}, 500, Phaser.Easing.Linear.In, true, 1000)
        blackcloud1Tween.start()

        var blackcloud2Tween = this.game.add.tween(blackcloud2).to({x: 200}, 500, Phaser.Easing.Linear.In, true, 1200)
        blackcloud2Tween.start()

        var bigcloudTween = this.game.add.tween(bigcloud).to({y: 10}, 700, Phaser.Easing.Bounce.Out, true, 1700)
        bigcloudTween.start()        

    }

}

module.exports = PlayState
