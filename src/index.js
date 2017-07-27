
var Weather = Weather || {}

function isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

if(window.innerWidth>=500){
    var gamewidth = 500
    var gameheight = 500 * 667 / 375
}else{
    var gamewidth = window.innerWidth

    var gameheight = (isFacebookApp())?window.innerHeight-128:window.innerHeight
}

// Weather.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'root')
Weather.game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, 'root')

Weather.game.state.add('Boot', Weather.BootState)
Weather.game.state.add('Load', Weather.LoadState)
Weather.game.state.add('Start', Weather.StartState)
Weather.game.state.add('Play', Weather.PlayState)
Weather.game.state.add('Over', Weather.OverState)

Weather.game.state.start('Boot')