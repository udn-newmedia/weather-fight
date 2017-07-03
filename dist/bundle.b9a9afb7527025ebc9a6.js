webpackJsonp([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BootState = {

    init: function init() {

        this.game.stage.backgroundColor = '#000';

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function preload() {},

    create: function create() {}

};

module.exports = BootState;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

var _phaser = __webpack_require__(3);

var _phaser2 = _interopRequireDefault(_phaser);

__webpack_require__(9);

var _boot = __webpack_require__(10);

var _boot2 = _interopRequireDefault(_boot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = Weather || {};

Weather.game = new _phaser2.default.Game('100%', '100%', _phaser2.default.AUTO, 'root');
Weather.BootState = _boot2.default;

Weather.game.state.add('Boot', Weather.BootState);

Weather.game.state.start('Boot');

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[4]);