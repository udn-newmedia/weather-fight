import 'pixi'
import 'p2'
import Phaser from 'phaser'
import '../style/style.css'

import BootState from './states/boot'

let Weather = Weather || {}

Weather.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'root')
Weather.BootState = BootState

Weather.game.state.add('Boot', Weather.BootState)

Weather.game.state.start('Boot')