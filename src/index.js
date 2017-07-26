import 'pixi'
import 'p2'
import Phaser from 'phaser'
import '../style/style.css'

import BootState from './states/boot'
import LoadState from './states/load'
import StartState from './states/start'
import PlayState from './states/play'
import OverState from './states/over'

let Weather = Weather || {}

if(window.innerWidth>=500){
    var gamewidth = 500
    var gameheight = 500 * 667 / 375
}else{
    var gamewidth = window.innerWidth
    var gameheight = window.innerHeight
}

// Weather.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'root')
Weather.game = new Phaser.Game(gamewidth, gameheight, Phaser.AUTO, 'root')

Weather.BootState = BootState
Weather.LoadState = LoadState
Weather.StartState = StartState
Weather.PlayState = PlayState
Weather.OverState = OverState

Weather.game.state.add('Boot', Weather.BootState)
Weather.game.state.add('Load', Weather.LoadState)
Weather.game.state.add('Start', Weather.StartState)
Weather.game.state.add('Play', Weather.PlayState)
Weather.game.state.add('Over', Weather.OverState)

Weather.game.state.start('Boot')