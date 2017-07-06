webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(4);

var _phaser = __webpack_require__(6);

var _phaser2 = _interopRequireDefault(_phaser);

__webpack_require__(9);

var _boot = __webpack_require__(11);

var _boot2 = _interopRequireDefault(_boot);

var _load = __webpack_require__(13);

var _load2 = _interopRequireDefault(_load);

var _start = __webpack_require__(20);

var _start2 = _interopRequireDefault(_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = Weather || {};

Weather.game = new _phaser2.default.Game('100%', '100%', _phaser2.default.AUTO, 'root');

Weather.BootState = _boot2.default;
Weather.LoadState = _load2.default;
Weather.StartState = _start2.default;

Weather.game.state.add('Boot', Weather.BootState);
Weather.game.state.add('Load', Weather.LoadState);
Weather.game.state.add('Start', Weather.StartState);

Weather.game.state.start('Boot');

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _preloader = __webpack_require__(12);

var _preloader2 = _interopRequireDefault(_preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootState = {

    init: function init() {

        this.game.stage.backgroundColor = '#000';

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function preload() {

        this.game.load.image('preload', _preloader2.default);
    },

    create: function create() {
        // this.game.stage.disableVisibilityChange = true; //continuing when the page is unfocused

        this.game.state.start('Load');
    }

};

module.exports = BootState;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/57ca1a2085d82f0574e3ef740b9a5ead.gif";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bg = __webpack_require__(14);

var _bg2 = _interopRequireDefault(_bg);

var _longform_btn_ = __webpack_require__(15);

var _longform_btn_2 = _interopRequireDefault(_longform_btn_);

var _longform_btn = __webpack_require__(16);

var _longform_btn2 = _interopRequireDefault(_longform_btn);

var _startgame_btn_ = __webpack_require__(17);

var _startgame_btn_2 = _interopRequireDefault(_startgame_btn_);

var _startgame_btn = __webpack_require__(18);

var _startgame_btn2 = _interopRequireDefault(_startgame_btn);

var _title = __webpack_require__(19);

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadState = {

    init: function init() {
        this.game.stage.backgroundColor = '#000';
    },

    preload: function preload() {
        //for loading progress
        var preloadSprite = this.game.add.sprite(this.game.width / 2 - 220 / 2, this.game.height / 2 - 19 / 2, 'preload');
        this.game.load.setPreloadSprite(preloadSprite);

        //startpage
        this.game.load.image('bg', _bg2.default);
        this.game.load.image('longform_btn_click', _longform_btn_2.default);
        this.game.load.image('longform_btn', _longform_btn2.default);
        this.game.load.image('startgame_btn_click', _startgame_btn_2.default);
        this.game.load.image('startgame_btn', _startgame_btn2.default);
        this.game.load.image('title', _title2.default);

        this.game.load.onFileComplete.add(function (progress) {
            // console.log(progress);
        });
    },

    create: function create() {
        this.game.state.start('Start');
    }

};

module.exports = LoadState;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/8acfc93fdbf97cabd8ff50d98cf2c770.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/80ff2d08a47ab73700af4256b384423f.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/efe42e1bf0851a292148c3c4c058d173.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32b44ebaad908e963b4b13d2487b0692.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/fa17377be651a8507dcfc594b039592c.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/92d3961850f918db6308e255f48d7507.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StartState = {

    create: function create() {

        var bg = this.game.add.image(0, 0, 'bg');
        bg.width = this.game.world.width;
        bg.height = this.game.world.height;

        var title = this.game.add.image(0, 0, 'title');
        title.width = this.game.world.width * 1.1;
        title.height = this.game.world.height * 0.6;

        this.createStartPageBtn('startgame_btn', false);
        this.createStartPageBtn('longform_btn', false);
    },

    update: function update() {},

    createStartPageBtn: function createStartPageBtn(btnName, isClick) {
        var btn_width = 150;
        var btn_height = 48;
        var btn_x = this.game.world.width * 0.5;
        var startbtn_y = this.game.world.height * 0.8;
        var longformbtn_y = this.game.world.height * 0.9;
        var btn_anchor_x = 0.5;
        var startbtn_anchor_y = 0.2;
        var longformbtn_anchor_y = 0.4;

        var name = isClick ? btnName + '_click' : btnName;

        if (btnName === 'startgame_btn') {

            var startbtn = this.game.add.button(btn_x, startbtn_y, name, this.onStartClick, this, 1, 1, 0);
            startbtn.anchor.setTo(btn_anchor_x, startbtn_anchor_y);
            startbtn.width = btn_width;
            startbtn.height = btn_height;
        } else if (btnName === 'longform_btn') {

            var longformbtn = this.game.add.button(btn_x, longformbtn_y, name, this.onLongformClick, this, 1, 1, 0);
            longformbtn.anchor.setTo(btn_anchor_x, longformbtn_anchor_y);
            longformbtn.width = btn_width;
            longformbtn.height = btn_height;
        }
    },

    onStartClick: function onStartClick() {

        this.createStartPageBtn('startgame_btn', true);
        console.log("start");
        // this.game.state.start('Play')
    },

    onLongformClick: function onLongformClick() {

        this.createStartPageBtn('longform_btn', true);
        console.log("longform");
    }

};

module.exports = StartState;

/***/ })
],[1]);