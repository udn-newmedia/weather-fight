import 'pixi'
import 'p2'
import Phaser from 'phaser'
import '../style/style.css'

import BootState from './states/boot'
import LoadState from './states/load'
import StartState from './states/start'

let Weather = Weather || {}

Weather.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'root')

Weather.BootState = BootState
Weather.LoadState = LoadState
Weather.StartState = StartState

Weather.game.state.add('Boot', Weather.BootState)
Weather.game.state.add('Load', Weather.LoadState)
Weather.game.state.add('Start', Weather.StartState)

Weather.game.state.start('Boot')