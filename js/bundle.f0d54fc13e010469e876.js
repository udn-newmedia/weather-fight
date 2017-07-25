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

var _load = __webpack_require__(14);

var _load2 = _interopRequireDefault(_load);

var _start = __webpack_require__(68);

var _start2 = _interopRequireDefault(_start);

var _play = __webpack_require__(69);

var _play2 = _interopRequireDefault(_play);

var _over = __webpack_require__(70);

var _over2 = _interopRequireDefault(_over);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = Weather || {};

Weather.game = new _phaser2.default.Game('100%', '100%', _phaser2.default.AUTO, 'root');

Weather.BootState = _boot2.default;
Weather.LoadState = _load2.default;
Weather.StartState = _start2.default;
Weather.PlayState = _play2.default;
Weather.OverState = _over2.default;

Weather.game.state.add('Boot', Weather.BootState);
Weather.game.state.add('Load', Weather.LoadState);
Weather.game.state.add('Start', Weather.StartState);
Weather.game.state.add('Play', Weather.PlayState);
Weather.game.state.add('Over', Weather.OverState);

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

var _cloudman_ = __webpack_require__(13);

var _cloudman_2 = _interopRequireDefault(_cloudman_);

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
        this.game.load.spritesheet('mycloud', _cloudman_2.default, 248, 240);
    },

    create: function create() {
        // this.game.stage.disableVisibilityChange = true; //continuing when the page is unfocused

        this.game.state.start('Load');
    }

};
// import mycloud from '../../public/assets/cloud.png'


module.exports = BootState;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/57ca1a2.gif";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/d8c27ec.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _talking = __webpack_require__(15);

var _talking2 = _interopRequireDefault(_talking);

var _bg = __webpack_require__(16);

var _bg2 = _interopRequireDefault(_bg);

var _longform_btn_ = __webpack_require__(17);

var _longform_btn_2 = _interopRequireDefault(_longform_btn_);

var _longform_btn = __webpack_require__(18);

var _longform_btn2 = _interopRequireDefault(_longform_btn);

var _startgame_btn_ = __webpack_require__(19);

var _startgame_btn_2 = _interopRequireDefault(_startgame_btn_);

var _startgame_btn = __webpack_require__(20);

var _startgame_btn2 = _interopRequireDefault(_startgame_btn);

var _title = __webpack_require__(21);

var _title2 = _interopRequireDefault(_title);

var _btn_1_ = __webpack_require__(22);

var _btn_1_2 = _interopRequireDefault(_btn_1_);

var _btn_1_3 = __webpack_require__(23);

var _btn_1_4 = _interopRequireDefault(_btn_1_3);

var _btn_2_ = __webpack_require__(24);

var _btn_2_2 = _interopRequireDefault(_btn_2_);

var _btm_2_ = __webpack_require__(25);

var _btm_2_2 = _interopRequireDefault(_btm_2_);

var _btn_3_ = __webpack_require__(26);

var _btn_3_2 = _interopRequireDefault(_btn_3_);

var _btn_3_3 = __webpack_require__(27);

var _btn_3_4 = _interopRequireDefault(_btn_3_3);

var _bg_game = __webpack_require__(28);

var _bg_game2 = _interopRequireDefault(_bg_game);

var _darksky_ = __webpack_require__(29);

var _darksky_2 = _interopRequireDefault(_darksky_);

var _blackcloud_ = __webpack_require__(30);

var _blackcloud_2 = _interopRequireDefault(_blackcloud_);

var _blackcloud_3 = __webpack_require__(31);

var _blackcloud_4 = _interopRequireDefault(_blackcloud_3);

var _bigcloud = __webpack_require__(32);

var _bigcloud2 = _interopRequireDefault(_bigcloud);

var _ball_1_ = __webpack_require__(33);

var _ball_1_2 = _interopRequireDefault(_ball_1_);

var _corn_1_ = __webpack_require__(34);

var _corn_1_2 = _interopRequireDefault(_corn_1_);

var _heart_ = __webpack_require__(35);

var _heart_2 = _interopRequireDefault(_heart_);

var _heart_3 = __webpack_require__(36);

var _heart_4 = _interopRequireDefault(_heart_3);

var _ice_ = __webpack_require__(37);

var _ice_2 = _interopRequireDefault(_ice_);

var _ice_3 = __webpack_require__(38);

var _ice_4 = _interopRequireDefault(_ice_3);

var _ice_5 = __webpack_require__(39);

var _ice_6 = _interopRequireDefault(_ice_5);

var _cloud_ = __webpack_require__(40);

var _cloud_2 = _interopRequireDefault(_cloud_);

var _bigcloud_anger = __webpack_require__(41);

var _bigcloud_anger2 = _interopRequireDefault(_bigcloud_anger);

var _bigcloud_anger3 = __webpack_require__(42);

var _bigcloud_anger4 = _interopRequireDefault(_bigcloud_anger3);

var _cow_1_ = __webpack_require__(43);

var _cow_1_2 = _interopRequireDefault(_cow_1_);

var _bigice_ = __webpack_require__(44);

var _bigice_2 = _interopRequireDefault(_bigice_);

var _icecloud = __webpack_require__(45);

var _icecloud2 = _interopRequireDefault(_icecloud);

var _mr_wang = __webpack_require__(46);

var _mr_wang2 = _interopRequireDefault(_mr_wang);

var _bg_game3 = __webpack_require__(47);

var _bg_game4 = _interopRequireDefault(_bg_game3);

var _people_1_ = __webpack_require__(48);

var _people_1_2 = _interopRequireDefault(_people_1_);

var _people_2_ = __webpack_require__(49);

var _people_2_2 = _interopRequireDefault(_people_2_);

var _people_3_ = __webpack_require__(50);

var _people_3_2 = _interopRequireDefault(_people_3_);

var _darksky_3 = __webpack_require__(51);

var _darksky_4 = _interopRequireDefault(_darksky_3);

var _bg_game5 = __webpack_require__(52);

var _bg_game6 = _interopRequireDefault(_bg_game5);

var _car_1_ = __webpack_require__(53);

var _car_1_2 = _interopRequireDefault(_car_1_);

var _car_2_ = __webpack_require__(54);

var _car_2_2 = _interopRequireDefault(_car_2_);

var _car_3_ = __webpack_require__(55);

var _car_3_2 = _interopRequireDefault(_car_3_);

var _car_4_ = __webpack_require__(56);

var _car_4_2 = _interopRequireDefault(_car_4_);

var _darksky_5 = __webpack_require__(57);

var _darksky_6 = _interopRequireDefault(_darksky_5);

var _iceground_ = __webpack_require__(58);

var _iceground_2 = _interopRequireDefault(_iceground_);

var _game3_start = __webpack_require__(59);

var _game3_start2 = _interopRequireDefault(_game3_start);

var _angrycloud = __webpack_require__(60);

var _angrycloud2 = _interopRequireDefault(_angrycloud);

var _alarm_ = __webpack_require__(61);

var _alarm_2 = _interopRequireDefault(_alarm_);

var _complete_ = __webpack_require__(62);

var _complete_2 = _interopRequireDefault(_complete_);

var _fail_bg = __webpack_require__(63);

var _fail_bg2 = _interopRequireDefault(_fail_bg);

var _btn_share = __webpack_require__(64);

var _btn_share2 = _interopRequireDefault(_btn_share);

var _fail_ = __webpack_require__(65);

var _fail_2 = _interopRequireDefault(_fail_);

var _fb = __webpack_require__(66);

var _fb2 = _interopRequireDefault(_fb);

var _Mr_Turtle = __webpack_require__(67);

var _Mr_Turtle2 = _interopRequireDefault(_Mr_Turtle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//level3


//level1
var LoadState = {

        init: function init() {
                this.game.stage.backgroundColor = '#000';

                //mycloud
                this.mycloud = this.game.add.sprite(this.game.world.centerX, this.game.world.height / 2, 'mycloud');
                this.mycloud.anchor.setTo(0.5, 0.5);
                this.mycloud.spritescale = 0.5;
                this.mycloud.scale.setTo(this.mycloud.spritescale);
                // this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)
                this.mycloud.animations.add('run', [5, 4, 5, 6, 7, 6], 10, true);
                this.mycloud.animations.play('run');

                var words = ["每 到 夏 天 ， 除 了 颱 風 外 ， 對 流 旺 ", "盛 也 常 帶 來 冰 雹 等 災 害 性 天 氣 ， ", "現 在 你 有 機 會 拯 救 台 灣 不 受 冰 雹 ", "侵 襲 ， 你 準 備 好 了 嗎 ？ _ "];

                var dialogue = {};
                dialogue.content = words;

                this.typewriter(this.game.world.width * 0.21, this.mycloud.y - this.mycloud.height * 2, dialogue);
        },

        preload: function preload() {
                //for loading progress
                var preloadSprite = this.game.add.sprite(this.game.width / 2 - 220 / 2, this.mycloud.y + this.mycloud.height / 2, 'preload');
                this.game.load.setPreloadSprite(preloadSprite);

                //startpage
                this.game.load.image('dialogue', _talking2.default);
                this.game.load.image('bg', _bg2.default);
                this.game.load.image('longform_btn_click', _longform_btn_2.default);
                this.game.load.image('longform_btn', _longform_btn2.default);
                this.game.load.image('startgame_btn_click', _startgame_btn_2.default);
                this.game.load.image('startgame_btn', _startgame_btn2.default);
                this.game.load.image('title', _title2.default);
                this.game.load.image('btn_1_1', _btn_1_2.default);
                this.game.load.image('btn_1_1_click', _btn_1_4.default);
                this.game.load.image('btn_2_1', _btn_2_2.default);
                this.game.load.image('btn_2_1_click', _btm_2_2.default);
                this.game.load.image('btn_3_1', _btn_3_2.default);
                this.game.load.image('btn_3_1_click', _btn_3_4.default);

                //banner
                this.game.load.spritesheet('alarmbanner', _alarm_2.default, 300, 94);
                this.game.load.spritesheet('passedbanner', _complete_2.default, 300, 94);

                //level1
                this.game.load.image('firstbg', _bg_game2.default);
                // this.game.load.spritesheet('mycloud', mycloud, 224, 224)
                this.game.load.image('darksky1', _darksky_2.default);
                this.game.load.image('blackcloud1', _blackcloud_2.default);
                this.game.load.image('blackcloud2', _blackcloud_4.default);
                this.game.load.image('bigcloud', _bigcloud2.default);
                this.game.load.spritesheet('hail', _ball_1_2.default, 93, 93);
                this.game.load.spritesheet('corn', _corn_1_2.default, 240, 189);
                this.game.load.image('redheart', _heart_2.default);
                this.game.load.image('blackheart', _heart_4.default);
                // this.game.load.image('ice_break', ice_break)
                this.game.load.image('ice1', _ice_2.default);
                this.game.load.image('ice2', _ice_4.default);
                this.game.load.image('ice3', _ice_6.default);
                this.game.load.image('cloud', _cloud_2.default);
                this.game.load.image('icecloud', _icecloud2.default);
                this.game.load.image('bigcloud_anger1', _bigcloud_anger2.default);
                this.game.load.image('bigcloud_anger2', _bigcloud_anger4.default);
                this.game.load.spritesheet('cow', _cow_1_2.default, 70, 60);
                this.game.load.spritesheet('bighail', _bigice_2.default, 557 / 3, 187);
                this.game.load.image('wang', _mr_wang2.default);
                //level2
                this.game.load.image('secondbg', _bg_game4.default);
                this.game.load.spritesheet('people1', _people_1_2.default, 240, 196);
                this.game.load.spritesheet('people2', _people_2_2.default, 240, 196);
                this.game.load.spritesheet('people3', _people_3_2.default, 240, 196);
                this.game.load.image('darksky2', _darksky_4.default);

                //level3
                this.game.load.image('thirdbg', _bg_game6.default);
                this.game.load.spritesheet('car1', _car_1_2.default, 240, 150);
                this.game.load.spritesheet('car2', _car_2_2.default, 240, 150);
                this.game.load.spritesheet('car3', _car_3_2.default, 240, 150);
                this.game.load.spritesheet('car4', _car_4_2.default, 240, 150);
                this.game.load.spritesheet('iceground', _iceground_2.default, 240, 170);
                this.game.load.image('darksky3', _darksky_6.default);
                this.game.load.image('police', _game3_start2.default);
                this.game.load.image('alarmcloud', _angrycloud2.default);

                //fail
                this.game.load.image('fail_bg', _fail_bg2.default);
                this.game.load.image('btn_share', _btn_share2.default);
                this.game.load.spritesheet('failcloud', _fail_2.default, 510, 460);
                this.game.load.image('fb', _fb2.default);

                this.game.load.audio('bgsound', _Mr_Turtle2.default);

                this.game.load.onFileComplete.add(function (progress) {
                        // console.log(progress);
                });
        },

        create: function create() {},

        update: function update() {

                // if(this.finished && this.game.state.current==="Load"){
                this.game.state.start('Start', true, false, 'startpage');
                // }
        },

        typewriter: function typewriter(x, y, dialogue) {

                this.content = dialogue.content;

                this.line = [];
                this.wordIndex = 0;
                this.lineIndex = 0;

                this.wordDelay = 100;
                this.lineDelay = 0;

                this.finished = false;

                var style = dialogue.style || { font: "16px Microsoft JhengHei", fill: "#fff" };

                this.text = this.game.add.text(x, y, '', style);
                this.nextLine();
        },

        nextLine: function nextLine() {

                if (this.lineIndex === this.content.length) {
                        //  We're finished
                        this.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                                this.finished = true;
                        }, this);

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

        nextWord: function nextWord() {

                //  Add the next word onto the text string, followed by a space
                this.text.text = this.text.text.concat(this.line[this.wordIndex]);

                //  Advance the word index to the next word in the line
                this.wordIndex++;

                //  Last word?
                if (this.wordIndex === this.line.length) {
                        //  Add a carriage return
                        this.text.text = this.text.text.concat("\n");

                        //  Get the next line after the lineDelay amount of ms has elapsed
                        this.game.time.events.add(this.lineDelay, this.nextLine, this);
                }
        }

};

//sounds


//fail


//banner


//level2

// import ice_break from '../../public/assets/ice_break.png'

// import mycloud from '../../public/assets/cloud.png'
//startpage


module.exports = LoadState;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/477bdfc.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/8acfc93.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/80ff2d0.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/efe42e1.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32b44eb.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/fa17377.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/92d3961.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c3e2db4.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/2dd8672.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/98d56e1.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a005b67.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b754877.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/cda0c9c.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32e8110.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/551ba1d.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c511e37.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/943dd14.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/8457c4e.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/73fa720.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1327475.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/d4e7167.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/953dc0d.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a82fba1.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/75bade8.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/560786a.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/17acd07.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1efbefb.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1a9f6cd.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/78408e1.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/116b00c.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/761c906.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/be66e52.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/0e1ad62.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6691e98.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/ec4aec8.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6ba6c22.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/e6fd6ac.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32dbbd7.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/286aa1f.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1cb0c51.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/f49ec65.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/0a3fa15.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/4166c8e.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b296081.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/ce6014d.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c0a61b9.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/2d1af39.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/7d48bb2.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c376aaf.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/aaf9b25.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b67a824.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/fe4824f.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/Mr_Turtle.dad8350.mp3";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StartState = {

    init: function init(beginning) {

        this.beginning = beginning;
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    create: function create() {

        if (this.beginning === "startpage") {

            //add audio
            this.bgsound = this.game.add.audio('bgsound', 0.2, true);
            //聲音出錯不影響
            try {
                this.bgsound.play();
            } catch (e) {}

            var bg = this.game.add.image(0, 0, 'bg');
            bg.width = this.game.world.width;
            bg.height = this.game.world.height;

            var title = this.game.add.image(0, -100, 'title');
            title.width = this.game.world.width * 1.1;
            title.height = this.game.world.height * 0.6;

            var titleTween = this.game.add.tween(title).to({ y: 0 }, 1000, Phaser.Easing.Bounce.Out, true);
            titleTween.start();

            this.btnGenerator('btn_1_1', '開始遊戲', 0, false);
            this.btnGenerator('btn_2_1', '觀看專題', 1, false);
        } else if (this.beginning === "mycloudOS") {

            this.game.stage.backgroundColor = '#000';
            this.settingmycloud(this.game.world.centerX, this.game.world.centerY, 0.5, 0.5);

            // var words = "我來自雲端，看不慣雲朵製造冰\n雹危害人類，要拯救地球不受冰\n雹攻擊。\n"
            // this.settingDialogue(this.mycloud.x, this.mycloud.y - this.mycloud.height*1.2, words)

            var words = ["我 來 自 雲 端 ， 看 不 慣 雲 朵 製 造 冰 ", "雹 危 害 人 類 ， 要 拯 救 地 球 不 受 冰 ", "雹 攻 擊 。 _"];

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height * 1.2);
            dialogue.content = words;
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" };

            this.typewriter(dialogue.img.x - dialogue.img.width * 0.8 / 2, dialogue.img.y - dialogue.img.height * 0.8 / 2, dialogue);

            // this.btnGenerator('btn_1_1', '遊戲說明', 0, false)        
            this.btnGenerator('btn_3_1', '直接開始', 0, false);
        } else if (this.beginning === "intro1") {

            this.game.stage.backgroundColor = '#fff';
            this.settingBigcloud();
            this.settinghearts(['redheart', 'redheart', 'redheart']);
            this.settingmask();
            this.settingmycloud(this.game.world.width * 0.85, this.game.world.height * 0.6);

            var words = ["在 時 間 內 使 用 手 指 拖 曳 移 動 雲 朵 ", "防 止 冰 雹 落 下 _"];

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height * 1.2);
            dialogue.content = words;
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" };

            this.typewriter(dialogue.img.x - dialogue.img.width * 0.8 / 2, dialogue.img.y - dialogue.img.height * 0.8 / 2, dialogue);

            this.btnGenerator('btn_1_1', '下一步', 0, false);
            this.btnGenerator('btn_3_1', '直接開始', 1, false);
        } else if (this.beginning === "intro2") {

            this.game.stage.backgroundColor = '#fff';
            this.settingBigcloud();
            this.settingmask();
            this.settinghearts(['redheart', 'redheart', 'redheart']);
            this.settingmycloud(this.game.world.width * 0.85, this.game.world.height * 0.6);

            var words = ["若 冰 雹 打 中 目 標 物 ， 則 會 損 失 一 ", "個 愛 心 ， 當 三 顆 愛 心 歸 零 則 遊 戲", "結 束 。"];

            var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height * 1.2);
            dialogue.content = words;
            dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" };

            this.typewriter(dialogue.img.x - dialogue.img.width * 0.8 / 2, dialogue.img.y - dialogue.img.height * 0.8 / 2, dialogue);

            //twinkling hearts
            var twinklingHearts = this.game.add.tween(this.hearts).to({ alpha: 0 }, 500, "Linear", true);
            twinklingHearts.yoyo(true, 500);
            twinklingHearts.repeat(10, 1000);

            this.btnGenerator('btn_1_1', '下一步', 0, false);
            this.btnGenerator('btn_3_1', '直接開始', 1, false);
        }
    },

    settingDialogue: function settingDialogue(x, y, words) {

        var dialogueImg = this.game.add.image(x, y, 'dialogue');
        dialogueImg.width = this.game.world.width * 0.8;
        dialogueImg.height = this.game.world.height * 0.2;
        dialogueImg.anchor.setTo(0.5, 0.5);

        var dialogue = {};
        dialogue.img = dialogueImg;
        dialogue.content = words;

        if (dialogue.content) {
            this.mycloudSpeaking(dialogue);
        }

        return dialogue;
    },

    settingmycloud: function settingmycloud(x, y, anchor_x, anchor_y) {
        var mycloud_x = x || this.game.world.centerX;
        var mycloud_y = y || this.game.world.height * 0.7;
        var anchorX = anchor_x || 0.5;
        var anchorY = anchor_y || 0.5;

        this.mycloud = this.game.add.sprite(mycloud_x, mycloud_y, 'mycloud');
        this.mycloud.anchor.setTo(anchorX, anchorY);
        this.mycloud.spritescale = 0.4;
        this.mycloud.scale.setTo(this.mycloud.spritescale);

        this.mycloud.animations.add('static', [0, 1, 0, 2, 0, 1, 0, 3], 10, true);
        this.mycloud.animations.play('static');
    },

    settinghearts: function settinghearts(hearts) {

        var heart_3 = hearts[0];
        var heart_2 = hearts[1];
        var heart_1 = hearts[2];

        var heartscale = 0.6;
        var heart3 = this.game.add.image(10, 20, heart_3);
        var heart2 = this.game.add.image(heart3.x + heart3.width * heartscale, 20, heart_2);
        var heart1 = this.game.add.image(heart2.x + heart2.width * heartscale, 20, heart_1);
        heart3.scale.setTo(heartscale);
        heart2.scale.setTo(heartscale);
        heart1.scale.setTo(heartscale);

        this.hearts = this.game.add.group();
        this.hearts.add(heart1);
        this.hearts.add(heart2);
        this.hearts.add(heart3);
    },

    settingmask: function settingmask() {
        var bmd = this.game.make.bitmapData(this.game.world.width, this.game.world.height);
        bmd.addToWorld();
        bmd.rect(0, 0, this.game.world.width, this.game.world.height, 'rgba(0,0,0,0.6)');
    },

    settingBigcloud: function settingBigcloud() {

        this.bigcloud = this.game.add.image(this.game.world.centerX, 10, 'bigcloud');
        this.bigcloud.anchor.setTo(0.5, 0);
        var bigcloudImg = this.game.cache.getImage('bigcloud');
        this.bigcloud.width = this.game.world.width;
        this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height;
        this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55, 'bigcloud_anger1');
        this.bigcloud_anger1.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger1.width = this.bigcloud.width / 20;
        this.bigcloud_anger1.height = this.bigcloud.width / 20;

        this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8, 'bigcloud_anger2');
        this.bigcloud_anger2.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger2.width = this.bigcloud.width / 20;
        this.bigcloud_anger2.height = this.bigcloud.width / 20;
    },

    mycloudSpeaking: function mycloudSpeaking(dialogue) {
        // var content = "我來自雲端，看不慣雲朵製造冰雹危害人類，要拯救地球不受冰雹攻擊。"

        var style = { font: "16px Microsoft JhengHei", fill: "#000",
            boundsAlignH: "center", boundsAlignV: "middle",
            wordWrap: true, wordWrapWidth: dialogue.width * 0.6 };

        var text = this.game.add.text(dialogue.img.x, dialogue.img.y, dialogue.content, style);
        text.anchor.setTo(0.5, 0.5);
    },

    btnGenerator: function btnGenerator(btnStyle, value, position, isClick) {

        var width = 150;
        var height = 48;
        var x = this.game.world.centerX;
        var lower_y = this.game.world.height * 0.9;
        var upper_y = lower_y - height * 1.5;
        var y = position == 0 ? upper_y : lower_y;
        var anchor_x = 0.5;
        var anchor_y = position == 0 ? 0.2 : 0.4;
        var txt_anchor_y = position == 0 ? 0 : 0.3;
        var style = isClick ? btnStyle + '_click' : btnStyle;

        var button = this.game.add.button(x, y, style, function () {
            this.btnGenerator(style, value, position, true);
        }, this, 1, 1, 0);

        button.anchor.setTo(anchor_x, anchor_y);
        button.width = width;
        button.height = height;

        var txt_style = { font: "22px Microsoft JhengHei", fill: "#fff" };

        var button_txt = this.game.add.text(x, y, value, txt_style);
        button_txt.anchor.setTo(anchor_x, txt_anchor_y);

        if (isClick) {
            this.stateChanger(value);
        }
    },

    stateChanger: function stateChanger(value) {
        switch (value) {
            case '開始遊戲':
                // console.log("start")
                this.game.state.start('Start', true, false, 'mycloudOS');
                break;
            case '觀看專題':
                console.log("longform");
                break;
            case '遊戲說明':
                // console.log("introduction")
                this.game.state.start('Start', true, false, 'intro1');
                break;
            case '直接開始':
                // console.log("start anyway")
                this.game.state.start('Play', true, false, 'level1', 'trial1-1');
                break;
            case '下一步':
                // console.log("next")
                if (this.beginning === "intro1") {
                    this.game.state.start('Play', true, false, 'trial');
                } else if (this.beginning === "intro2") {
                    this.game.state.start('Play', true, false, 'trial2');
                }
                break;
        }
    },

    typewriter: function typewriter(x, y, dialogue) {

        this.content = dialogue.content;

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;

        this.wordDelay = 100;
        this.lineDelay = 0;

        this.finished = false;

        var style = dialogue.style || { font: "16px Microsoft JhengHei", fill: "#fff" };

        this.text = this.game.add.text(x, y, '', style);
        this.nextLine();
    },

    nextLine: function nextLine() {

        if (this.lineIndex === this.content.length) {
            //  We're finished
            this.game.time.events.add(Phaser.Timer.SECOND * 2, function () {
                this.finished = true;
            }, this);

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

    nextWord: function nextWord() {

        //  Add the next word onto the text string, followed by a space
        this.text.text = this.text.text.concat(this.line[this.wordIndex]);

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length) {
            //  Add a carriage return
            this.text.text = this.text.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.game.time.events.add(this.lineDelay, this.nextLine, this);
        }
    }

};

module.exports = StartState;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlayState = {

    init: function init() {
        this.level = arguments[0];
        this.level_arg = arguments[1] || {};
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    create: function create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.scenesFactory(this.level, this.level_arg);
    },

    update: function update() {
        if (this.mycloud) {
            this.game.physics.arcade.overlap(this.hails, this.mycloud, this.hitmyCloud, null, this);
            this.game.physics.arcade.overlap(this.hails, this.corns, this.hitCorn, null, this);
        }
        //For level3
        if (this.level === 'level3' && this.cars) {
            this.cars.forEachAlive(function (car) {
                if (car.x > car.slide_x) {

                    if (this.mycloud.life === 2) {
                        car.frame = 1;
                        car.body.velocity.x = 400;
                    } else if (this.mycloud.life === 1) {
                        car.frame = 1;
                        car.body.velocity.x = 600;
                    } else if (this.mycloud.life === 0) {
                        car.frame = 1;
                        car.body.velocity.x = 800;
                    }
                }
            }, this);
        }

        if (this.level_arg !== 'play') {
            this.typeFinished();
        }
    },

    render: function render() {
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

    hitCorn: function hitCorn(hail, corn) {

        var maxframe;
        hail.kill();

        if (this.level === 'level1') {
            maxframe = 3;
        } else if (this.level === 'level2') {
            maxframe = 2;
        }

        if (corn.life === 3) {
            corn.frame = 1;
            this.corns.children.forEach(function (ele) {
                ele.life--;
            }, this);
        } else {
            this.corns.children.forEach(function (ele) {
                if (ele.frame < maxframe) {
                    ele.frame++;
                }
                ele.life--;
            }, this);
        }

        // this.corns.children.forEach(function(ele){
        //     console.log(ele.frame)
        // },this)

        this.mycloudLifeHandler(--this.mycloud.life);

        if (this.level === 'trial2') {

            this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                this.settingmask();
            }, this);
        }
    },

    hitmyCloud: function hitmyCloud(mycloud, hail) {

        hail.kill();

        this.hailCrushed(hail.x, hail.y, hail.scale.x, hail.size);

        //接到冰雹
        var catchTween = this.game.add.tween(mycloud);
        catchTween.to({ tint: 0x00FF00 }, 200);
        catchTween.onComplete.add(function () {
            mycloud.tint = 0xFFFFFF;
        }, this);
        catchTween.start();

        if (hail.size === 'big' && !this.mycloud.isfreezing) {
            this.hitbyBighail(hail);
        }

        if (this.level_arg === 'trial1-1') {
            this.level_arg = 'trial1-2';
            this.tutorialMode();
        }
    },

    hitbyBighail: function hitbyBighail(hail) {
        this.mycloud.clickTimes = 0;
        this.mycloud.body.velocity.x = 0;
        this.mycloud.isfreezing = true;
        this.mycloud.animations.play('frozen');
    },

    cornInitialize: function cornInitialize() {

        var target_left, target_middle, target_right;

        if (this.level === 'level1') {

            target_left = 'corn';
            target_middle = 'corn';
            target_right = 'corn';
        } else if (this.level === 'level2') {

            target_left = 'people1';
            target_middle = 'people2';
            target_right = 'people3';
        } else if (this.level === 'level3') {
            target_left = 'car1';
            target_middle = 'car2';
            target_right = 'car3';
        }

        this.corns = this.game.add.group();
        this.corns.enableBody = true;

        var cornSize = this.game.cache.getImage('corn').width / 4;
        var corn_y = this.game.height * 0.9275;
        var left_corn_x = this.game.width * 1 / 6;
        var middle_corn_x = this.game.width * 1 / 2;
        var right_corn_x = this.game.width * 5 / 6;

        this.left_corn = this.game.add.sprite(left_corn_x, corn_y, target_left);
        this.left_corn.frame = 0;
        this.left_corn.scale.setTo(0.5, 0);
        this.left_corn.anchor.setTo(0.5, 1);
        this.left_corn.life = 3;
        this.corns.add(this.left_corn);
        this.game.physics.arcade.enable(this.left_corn);

        this.middle_corn = this.game.add.sprite(middle_corn_x, corn_y, target_middle);
        this.middle_corn.frame = 0;
        this.middle_corn.scale.setTo(0.5, 0);
        this.middle_corn.anchor.setTo(0.5, 1);
        this.middle_corn.life = 3;
        this.corns.add(this.middle_corn);
        this.game.physics.arcade.enable(this.middle_corn);

        this.right_corn = this.game.add.sprite(right_corn_x, corn_y, target_right);
        this.right_corn.frame = 0;
        this.right_corn.scale.setTo(0.5, 0);
        this.right_corn.anchor.setTo(0.5, 1);
        this.right_corn.life = 3;
        this.corns.add(this.right_corn);
        this.game.physics.arcade.enable(this.right_corn);

        var leftTween = this.game.add.tween(this.left_corn.scale);
        leftTween.to({ y: 0.5 }, 1200, Phaser.Easing.Bounce.Out);
        leftTween.start();

        var middleTween = this.game.add.tween(this.middle_corn.scale);
        middleTween.to({ y: 0.5 }, 1200, Phaser.Easing.Bounce.Out);
        middleTween.start();

        var rightTween = this.game.add.tween(this.right_corn.scale);
        rightTween.to({ y: 0.5 }, 1200, Phaser.Easing.Bounce.Out);
        rightTween.start();
    },

    carRunning: function carRunning() {
        this.cars = this.game.add.group();
        this.cars.enableBody = true;

        var carscale = 0.5;
        var carWidth = this.game.cache.getImage('car1').width / 2 * carscale;
        var carHeight = this.game.cache.getImage('car1').height * carscale;

        var carTypes = ['car1', 'car2', 'car3', 'car4'];

        this.game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
            var x = 0;
            var y = this.game.rnd.integerInRange(this.game.world.height - carHeight, this.game.world.height);
            var type = carTypes[Math.floor(Math.random() * carTypes.length)];
            var car = this.cars.getFirstExists(false, true, x, y, type);
            car.anchor.setTo(0.5, 1);
            car.scale.setTo(carscale);
            this.game.physics.arcade.enable(car);

            car.slide_x = this.game.rnd.integerInRange(0, this.game.world.width);
            car.body.velocity.x = 200;
            car.outOfBoundsKill = true;
            car.checkWorldBounds = true;
        }, this);
    },

    settingMyCloud: function settingMyCloud(x, y, anchor_x, anchor_y) {

        var mycloud_x = x || this.game.world.centerX;
        var mycloud_y = y || this.game.world.height * 0.65;
        var anchorX = anchor_x || 0.5;
        var anchorY = anchor_y || 0.5;

        //add sprite
        this.mycloud = this.game.add.sprite(mycloud_x, mycloud_y, 'mycloud');
        this.mycloud.anchor.setTo(anchorX, anchorY);
        this.mycloud.life = 3;
        this.mycloud.spritescale = 0.4;
        this.mycloud.scale.setTo(this.mycloud.spritescale);
        var size = this.game.cache.getImage('mycloud').width / 10;

        //run animation
        // this.mycloud.animations.add('run', [1, 2, 3, 4], 10, true)
        this.mycloud.animations.add('run', [5, 4, 5, 6, 7, 6], 10, true);
        this.mycloud.animations.add('static', [0, 1, 0, 2, 0, 1, 0, 3], 10, true);
        this.mycloud.animations.add('frozen', [8, 8, 8, 8, 8, 9, 8], 10, true);

        this.mycloud.animations.play('static');

        this.game.physics.arcade.enable(this.mycloud);
        this.mycloud.body.collideWorldBounds = true;
        this.mycloud.body.setSize(size * 0.8, size * 0.8, size * 0.1, size * 0.1);

        this.mycloud.touching = false;
        this.mycloud.inputEnabled = true;
        this.mycloud.isfreezing = false;

        // Click mycloud for unfreezing
        this.onclickEmitter(this.mycloud);

        if (this.level !== 'trial2') {
            this.mycloudMove();
            // this.mycloud.currentPosition = 0
        }
    },

    mycloudMove: function mycloudMove() {

        var scale = this.mycloud.spritescale;

        this.mycloud.events.onInputDown.add(function () {
            this.mycloud.touching = true;
        }, this);

        this.mycloud.events.onInputUp.add(function () {
            this.mycloud.touching = false;
        }, this);

        this.game.input.onUp.add(function () {
            if (!this.mycloud.isfreezing) {
                this.mycloud.body.velocity.x = 0;
                this.mycloud.animations.play('static');
            }
        }, this);

        if (this.game.device.desktop) {
            this.game.input.addMoveCallback(function (pointer, x, y, isTap) {
                if (!this.mycloud.isfreezing) {
                    if (x > this.mycloud.x) {
                        this.mycloud.scale.setTo('-' + scale, scale);
                    } else {
                        this.mycloud.scale.setTo(scale, scale);
                    }

                    this.mycloud.x = x;
                    this.mycloud.animations.play('run');
                }
            }, this);
        } else {
            this.game.input.addMoveCallback(function (pointer, x, y, isTap) {
                if (!this.mycloud.isfreezing) {

                    if (this.mycloud.touching) {

                        this.mycloud.body.velocity.x = 0;

                        if (x > this.mycloud.x) {
                            this.mycloud.scale.setTo('-' + scale, scale);
                        } else {
                            this.mycloud.scale.setTo(scale, scale);
                        }

                        this.mycloud.x = x;
                    } else {

                        if (x > this.mycloud.x + this.mycloud.width / 2) {
                            this.mycloud.scale.setTo('-' + scale, scale);
                            this.mycloud.body.velocity.x = 200;
                        } else if (x < this.mycloud.x - this.mycloud.width / 2) {
                            this.mycloud.scale.setTo(scale, scale);
                            this.mycloud.body.velocity.x = -200;
                        } else {
                            this.mycloud.body.velocity.x = 0;
                        }
                    }

                    this.mycloud.animations.play('run');
                }
            }, this);
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

    scenesFactory: function scenesFactory(level, level_arg) {

        //background
        if (level === 'level1') {
            var bg = this.game.add.image(0, 0, 'firstbg');
            bg.width = this.game.world.width;
            bg.height = this.game.world.height;

            //corn
            this.cornInitialize(); //left,middle,right
            //cow
            var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75, 'cow');
            cow.scale.setTo(0.6, 0.6);
            cow.anchor.setTo(0.5, 0.5);
            var cowAnim = cow.animations.add('cow');
            cowAnim.play(10, true);

            if (level_arg === 'play') {
                this.staticScenes();
            } else {
                this.animatedScenes();

                //set the first mask for trial
                this.trialmask1 = this.settingmask('rgba(0,0,0,0)');
            }
        } else if (level === 'level2') {

            var bg = this.game.add.image(0, 0, 'secondbg');
            bg.width = this.game.world.width;
            bg.height = this.game.world.height;

            this.cornInitialize();

            if (level_arg === 'play') {
                this.staticScenes();
            } else {
                this.animatedScenes();

                //set the first mask for trial
                this.trialmask1 = this.settingmask('rgba(0,0,0,0)');
            }
        } else if (level === 'level3') {
            var bg = this.game.add.image(0, 0, 'thirdbg');
            bg.width = this.game.world.width;
            bg.height = this.game.world.height;

            this.frozenroadInitialize();
            this.carRunning();

            this.animatedScenes();
            // if(level_arg==='play'){
            //     this.staticScenes()
            // }else{
            //     this.animatedScenes()
            // }
        } else if (level === 'trial1') {

            // this.game.stage.backgroundColor = '#fff'
            var bg = this.game.add.image(0, 0, 'firstbg');
            bg.width = this.game.world.width;
            bg.height = this.game.world.height;

            this.cornInitialize(); //left,middle,right

            this.staticScenes();
            this.heartmaker(['redheart', 'redheart', 'redheart']);

            //static cow
            var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75, 'cow');
            cow.scale.setTo(0.6, 0.6);
            cow.anchor.setTo(0.5, 0.5);

            this.settingmask();

            this.hails = this.game.add.group();
            this.hails.enableBody = true;
            this.hailcrushes = this.game.add.group();

            this.settingMyCloud(this.game.world.width * 0.85, this.game.world.height * 0.6);

            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.hailing, this);
            this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.hailing, this);
        } else if (level === 'trial2') {

            this.game.stage.backgroundColor = '#fff';
            this.staticScenes();
            this.heartmaker(['redheart', 'redheart', 'redheart']);
            this.settingmask();

            this.hails = this.game.add.group();
            this.hails.enableBody = true;
            this.hailcrushes = this.game.add.group();

            //add static mycloud
            var mycloud_x = this.game.world.width * 0.85;
            var mycloud_y = this.game.world.height * 0.65;
            this.settingMyCloud(mycloud_x, mycloud_y);

            //冰雹落在特定位置，只落一次
            this.hailing('small', this.bigcloud.x);

            //放玉米在正下方
            this.corns = this.game.add.group();
            this.corns.enableBody = true;

            var cornSize = this.game.cache.getImage('corn').width / 4;
            var corn_x = this.game.world.centerX;
            var corn_y = this.game.height * 0.785;

            var corn = this.game.add.sprite(corn_x, corn_y, 'corn');
            corn.frame = 0;
            corn.scale.setTo(0.5, 0.5);
            corn.anchor.setTo(0.5, 0);
            corn.life = 3;
            this.corns.add(corn);
            this.game.physics.arcade.enable(corn);
        }
    },

    settinghails: function settinghails() {
        //create group for hail
        this.hails = this.game.add.group();
        this.hails.enableBody = true;
        this.hailcrushes = this.game.add.group();

        //create hailing timer
        if (this.level === 'level1') {
            var delayTofire = Phaser.Timer.SECOND * 1.3;
        } else if (this.level === 'level2') {
            var delayTofire = Phaser.Timer.SECOND * 1;
        } else if (this.level === 'level3') {
            var delayTofire = Phaser.Timer.SECOND * 0.5;
        }

        this.hailingTimer = this.game.time.create(false);
        this.hailingTimer.loop(delayTofire, this.hailing, this);
    },

    animatedScenes: function animatedScenes() {
        //darksky and cloud animation

        if (this.level === 'level1') {
            var sky = 'darksky1';
        } else if (this.level === 'level2') {
            var sky = 'darksky2';
        } else if (this.level === 'level3') {
            var sky = 'darksky3';
        }

        var darksky = this.game.add.image(0, -100, sky);
        darksky.width = this.game.world.width;
        darksky.height = this.game.world.height * 0.35;

        var blackcloud1 = this.game.add.image(-150, 0, 'blackcloud1');
        var blackcloud1Img = this.game.cache.getImage('blackcloud1');
        blackcloud1.width = this.game.world.width * 0.5;
        blackcloud1.height = blackcloud1.width / blackcloud1Img.width * blackcloud1Img.height;

        var blackcloud2 = this.game.add.image(300, 0, 'blackcloud2');
        var blackcloud2Img = this.game.cache.getImage('blackcloud2');
        blackcloud2.width = this.game.world.width * 0.65;
        blackcloud2.height = blackcloud2.width / blackcloud2Img.width * blackcloud2Img.height;

        var cloud = this.game.add.image(-30, this.game.world.height / 2, 'cloud');
        var cloudImg = this.game.cache.getImage('cloud');
        cloud.width = this.game.world.width * 1.2;
        cloud.height = cloud.width / cloudImg.width * cloudImg.height;

        this.bigcloud = this.game.add.image(this.game.world.centerX, -200, 'bigcloud');
        this.bigcloud.anchor.setTo(0.5, 0);
        var bigcloudImg = this.game.cache.getImage('bigcloud');
        this.bigcloud.width = this.game.world.width;
        this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height;

        var darkskyTween = this.game.add.tween(darksky).to({ y: 0 }, 1000, Phaser.Easing.Bounce.In, true);
        darkskyTween.start();

        var blackcloud1Tween = this.game.add.tween(blackcloud1).to({ x: -50 }, 500, Phaser.Easing.Linear.In, true, 1000);
        blackcloud1Tween.start();

        var blackcloud2Tween = this.game.add.tween(blackcloud2).to({ x: 200 }, 500, Phaser.Easing.Linear.In, true, 1200);
        blackcloud2Tween.start();

        this.bigcloud.Yposition = 10;
        var bigcloudTween = this.game.add.tween(this.bigcloud).to({ y: this.bigcloud.Yposition }, 700, Phaser.Easing.Sinusoidal.InOut, true, 1700);
        bigcloudTween.start();
        bigcloudTween.onComplete.add(this.onStart, this);
    },

    staticScenes: function staticScenes() {

        if (this.level === 'level1') {
            var sky = 'darksky1';
        } else if (this.level === 'level2') {
            var sky = 'darksky2';
        } else if (this.level === 'level3') {
            var sky = 'darksky3';
        }

        var darksky = this.game.add.image(0, 0, sky);
        darksky.width = this.game.world.width;
        darksky.height = this.game.world.height * 0.35;

        var blackcloud1 = this.game.add.image(-50, 0, 'blackcloud1');
        var blackcloud1Img = this.game.cache.getImage('blackcloud1');
        blackcloud1.width = this.game.world.width * 0.5;
        blackcloud1.height = blackcloud1.width / blackcloud1Img.width * blackcloud1Img.height;

        var blackcloud2 = this.game.add.image(200, 0, 'blackcloud2');
        var blackcloud2Img = this.game.cache.getImage('blackcloud2');
        blackcloud2.width = this.game.world.width * 0.65;
        blackcloud2.height = blackcloud2.width / blackcloud2Img.width * blackcloud2Img.height;

        var cloud = this.game.add.image(-30, this.game.world.height / 2, 'cloud');
        var cloudImg = this.game.cache.getImage('cloud');
        cloud.width = this.game.world.width * 1.2;
        cloud.height = cloud.width / cloudImg.width * cloudImg.height;

        this.bigcloud = this.game.add.image(this.game.world.centerX, 10, 'bigcloud');
        this.bigcloud.anchor.setTo(0.5, 0);
        var bigcloudImg = this.game.cache.getImage('bigcloud');
        this.bigcloud.width = this.game.world.width;
        this.bigcloud.height = this.bigcloud.width / bigcloudImg.width * bigcloudImg.height;
        this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55, 'bigcloud_anger1');
        this.bigcloud_anger1.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger1.width = this.bigcloud.width / 20;
        this.bigcloud_anger1.height = this.bigcloud.width / 20;

        this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8, 'bigcloud_anger2');
        this.bigcloud_anger2.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger2.width = this.bigcloud.width / 20;
        this.bigcloud_anger2.height = this.bigcloud.width / 20;

        this.onStart();
    },

    settingmask: function settingmask(color) {

        var fill = color || 'rgba(0,0,0,0.6)';
        var bmd = this.game.make.bitmapData(this.game.world.width, this.game.world.height);
        bmd.addToWorld();
        bmd.rect(0, 0, this.game.world.width, this.game.world.height, fill);
        bmd.dirty = false;

        return bmd;
    },

    settingtaskWindow: function settingtaskWindow() {

        var taskwindowGroup = this.game.add.group();

        //using graphics
        var window = this.game.add.graphics(0, 0);
        window.alignIn(window, Phaser.CENTER, this.game.world.width * 0.1, this.game.world.height * 0.15);
        window.beginFill(0xFFFFFF);
        window.drawRoundedRect(0, 0, this.game.world.width * 0.8, this.game.world.height * 0.7);
        window.endFill();

        taskwindowGroup.add(window);

        if (this.level === 'level1') {
            var imgName = 'wang';

            if (this.level_arg === 'trial1-1') {
                var btnvalue = '遊戲開始';
                var words = "正在玉米田裡忙碌的王爺爺，\n卻收到了冰雹警報，想起過去\n曾有冰雹造成農損的例子，若\n沒有及時阻止冰雹落下，他的\n心血就要泡湯了......";
            } else if (this.level_arg === 'play') {
                var btnvalue = '進入下一關';
                var words = "「謝謝你拯救了我的玉米田！\n希望你繼續幫助更多人！」";
            }
        } else if (this.level === 'level2') {

            if (this.level_arg === 'trial2-1') {
                var imgName = 'people1';
                var btnvalue = '遊戲開始';
                var words = "離開了玉米田，雲朵人來到了\n繁華的台北市，路上車水馬龍\n，沒想到過了中午，晴朗的天\n氣開始變糟......";
            } else if (this.level_arg === 'play') {
                var imgName = 'people1';
                var btnvalue = '進入下一關';
                var words = "「謝謝你保護了我們的生命安\n全！不過前面還有人也需要你\n幫忙......」";
            } else if (this.level_arg === 'alarm') {
                var imgName = 'alarmcloud';
                var btnvalue = '沒問題';
                var words = "大量冰雹將快速落下！\n請注意！";
            }
        } else if (this.level === 'level3') {

            if (this.level_arg === 'alarm') {
                var imgName = 'alarmcloud';
                var btnvalue = '沒問題';
                var words = "大量冰雹將快速落下！\n請注意！";
            } else {
                var imgName = 'police';
                var btnvalue = '遊戲開始';
                var words = "幫助台北市度過危機後，雲朵\n人來到了高速公路，氣象單位\n卻突然發布冰雹預警！若冰雹\n落在高速公路造成車輛打滑就\n不好了......";
            }
        }

        var banner = this.level_arg === 'play' ? 'passedbanner' : 'alarmbanner';
        var window_banner = this.game.add.sprite(this.game.world.centerX, window.y, banner);
        window_banner.scale.setTo(0.5);
        window_banner.anchor.setTo(0.5);
        var bannerAnim = window_banner.animations.add(window_banner);
        bannerAnim.play(10, true);
        taskwindowGroup.add(window_banner);

        var unpausebtn = this.btnGenerator('btn_1_1', btnvalue, false);
        this.unpausebtn = unpausebtn;
        taskwindowGroup.add(unpausebtn);
        taskwindowGroup.add(unpausebtn.button_txt);

        var peopleSize = this.game.cache.getImage(imgName).height;

        var style = { font: "20px Microsoft JhengHei", fill: "#000",
            boundsAlignH: "center", boundsAlignV: "middle",
            wordWrap: true, wordWrapWidth: window.width * 0.8 };

        if (this.level_arg === 'alarm') {
            var people = this.game.add.image(this.game.world.centerX, unpausebtn.y - peopleSize * 0.3, imgName);
            people.anchor.setTo(0.5);
            people.scale.setTo(0.5);

            var text = this.game.add.text(this.game.world.centerX, people.y - people.height / 2, words, style);
            text.anchor.setTo(0.5, 1);
        } else {
            var people = this.game.add.image(this.game.world.centerX, unpausebtn.y - peopleSize * 0.4, imgName);
            people.anchor.setTo(0.5);
            people.scale.setTo(0.5);

            var text = this.game.add.text(this.game.world.centerX, people.y - people.height / 2, words, style);
            text.anchor.setTo(0.5, 1);
        }

        taskwindowGroup.add(text);
        taskwindowGroup.add(people);

        return taskwindowGroup;
    },

    onStart: function onStart() {
        //big cloud is angry
        this.bigcloud_anger1 = this.game.add.image(this.bigcloud.width * 0.7, this.bigcloud.height * 0.55, 'bigcloud_anger1');
        this.bigcloud_anger1.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger1.width = this.bigcloud.width / 20;
        this.bigcloud_anger1.height = this.bigcloud.width / 20;

        this.bigcloud_anger2 = this.game.add.image(this.bigcloud.width * 0.15, this.bigcloud.height * 0.8, 'bigcloud_anger2');
        this.bigcloud_anger2.anchor.setTo(0.5, 0.5);
        this.bigcloud_anger2.width = this.bigcloud.width / 20;
        this.bigcloud_anger2.height = this.bigcloud.width / 20;

        //heart setting
        this.mycloudLifeHandler(3);

        //time setting
        this.passedTimer();

        //因為圖層的關係，mask要設定在settingMyCloud()之前,Timer之後
        this.trialmask2 = this.settingmask('rgba(0,0,0,0)');

        this.settingMyCloud();

        //用來發射冰凍狀態時點擊的碎片
        this.mycloudEmitter = this.emitterGenerator();

        if (this.level_arg === 'play') {
            this.onPlay();
        } else {
            //taskwindow pops up
            this.game.paused = true;
            this.mask = this.settingmask();
            this.taskWindowGroup = this.settingtaskWindow();
            this.taskWindowlistener = this.game.input.onDown.add(this.unpause, this, 0, 'taskWindow');
        }
    },

    unpause: function unpause(event) {

        var window = arguments[2];
        var btnIsClicked = false;

        if (window === 'taskWindow' || window === 'passedWindow' || window === 'alarmWindow') {
            if (event.x > this.unpausebtn.x - this.unpausebtn.width / 2 && event.x < this.unpausebtn.x + this.unpausebtn.width / 2 && event.y > this.unpausebtn.y - this.unpausebtn.height / 2 && event.y < this.unpausebtn.y + this.unpausebtn.height / 2) {
                btnIsClicked = true;
            }
        }

        if (this.game.paused && btnIsClicked) {

            // console.log(window)
            // console.log(this.level_arg)

            this.game.paused = false;
            this.mask.cls();

            if (window === 'taskWindow') {
                if (this.level === 'level3') {
                    this.level_arg = 'play';
                }
                this.taskWindowGroup.destroy();
                this.game.input.onDown.removeAll();
                this.onPlay();
            } else if (window === 'passedWindow') {
                this.passedWindowGroup.destroy();
                if (this.level === 'level1') {
                    this.game.state.start('Play', true, false, 'level2', 'trial2-1');
                } else if (this.level === 'level2') {
                    //等待螢幕歸正
                    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
                        this.game.state.start('Play', true, false, 'level3');
                    }, this);
                }
            } else if (window === 'alarmWindow') {
                this.alarmWindowGroup.destroy();
                this.game.input.onDown.removeAll();

                this.hailingTimer.pause();
                this.hailingAlarmPeriod.pause();

                if (this.hailingStormTimer.paused) {
                    this.hailingStormTimer.resume();
                } else {
                    this.hailingStormTimer.start();
                }
            }
        }
    },

    passedTimer: function passedTimer() {
        var counter = 30;
        var style1 = { font: "bold 22px Microsoft JhengHei", fill: "#ffffff", align: "left" };
        var text1 = this.game.add.text(this.game.world.width * 0.55, this.heart3.y, '剩餘時間 : ', style1);
        text1.anchor.setTo(0, 0);

        var style2 = { font: "bold 50px Arial", fill: "#FFAA33", align: "center" };
        var text2 = this.game.add.text(text1.x + text1.width * 1.25, this.heart3.y, counter, style2);
        text2.anchor.setTo(0.5, 0.25);

        this.gameTimer = this.game.time.create(false);

        this.gameTimer.loop(Phaser.Timer.SECOND, function () {

            if (counter === 0) {

                if (this.level === 'level1') {

                    this.game.paused = true;
                    this.mask = this.settingmask();
                    this.passedWindowGroup = this.settingtaskWindow();
                    this.game.input.onDown.add(this.unpause, this, 0, 'passedWindow');

                    // var nextlevel='level2'
                    // this.game.state.start('Play', true, false, nextlevel, 'trial2-1')
                } else if (this.level === 'level2') {

                    this.game.paused = true;
                    this.mask = this.settingmask();
                    this.passedWindowGroup = this.settingtaskWindow();
                    this.game.input.onDown.add(this.unpause, this, 0, 'passedWindow');

                    // var nextlevel='level3'
                    // this.game.state.start('Play', true, false, nextlevel, 'play')
                } else if (this.level === 'level3') {
                    // 結尾動畫
                }
            } else {
                text2.setText(--counter);
            }
        }, this);

        this.gameTimer.start();
    },

    onPlay: function onPlay() {

        this.settinghails();

        if (this.level_arg === 'play') {
            this.hailingTimer.start();

            if (this.level === 'level2' || this.level === 'level3') {
                this.hailingAlarm();
            }
        } else {
            this.tutorialMode();
        }
    },

    tutorialMode: function tutorialMode() {

        var mycloudX = this.game.world.width * 0.85;

        if (this.level_arg === 'trial1-1') {
            var words = ["在 時 間 內 使 用 手 指 拖 曳 移 動 雲 朵 ", "防 止 冰 雹 落 下 _"];

            this.trialmask2.fill(0, 0, 0, 0.6);
        } else if (this.level_arg === 'trial1-2') {
            var words = ["若 漏 接 ， 冰 雹 落 入 玉 米 田 ， 就 會 ", "損 失 一 顆 愛 心 ， 愛 心 歸 零 = 挑 戰", "失 敗 !"];

            this.trialmask2.cls();
            this.trialmask1.fill(0, 0, 0, 0.6);

            var life = 3;
            //twinkling hearts
            this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, function () {
                if (life === 3) {
                    var newlife = 2;
                } else if (life === 2) {
                    var newlife = 3;
                }
                life = newlife;
                this.mycloudLifeHandler(newlife);
            }, this, life);
        } else if (this.level_arg === 'trial2-1') {
            var words = ["接 住 大 冰 雹 會 被 冰 凍 ， 請 連 續 點 ", "擊 來 脫 困 ! _"];

            this.trialmask2.fill(0, 0, 0, 0.6);
        }

        this.playPaused();

        var mycloudmoving = this.game.add.tween(this.mycloud).to({ x: mycloudX }, 500, Phaser.Easing.Linear.In, true);
        mycloudmoving.onComplete.add(this.mycloudTrialDialogue, this, 0, words);
    },

    hailingAlarm: function hailingAlarm() {

        //storm delay
        var delayTofire = this.level === 'level3' ? Phaser.Timer.SECOND * 0.3 : Phaser.Timer.SECOND * 0.5;

        var alarmPeriod = this.level === 'level3' ? Phaser.Timer.SECOND * 10 : Phaser.Timer.SECOND * 15;

        //多久一次Alarm的timer
        this.hailingAlarmPeriod = this.game.time.create(false);
        //給Alarm掉冰雹的timer
        this.hailingStormTimer = this.game.time.create(false);
        this.hailingStormTimer.loop(delayTofire, this.hailing, this);

        this.hailingAlarmPeriod.loop(alarmPeriod, function () {

            if (this.level === 'level2') {
                //只加快，不叫taskwindow出來
                this.hailingTimer.pause();
                this.hailingAlarmPeriod.pause();
                this.hailingStormTimer.start();
            } else if (this.level === 'level3') {

                this.level_arg = 'alarm';

                //叫taskwindow出來
                this.game.paused = true;
                this.mask = this.settingmask();
                this.alarmWindowGroup = this.settingtaskWindow();
                this.game.input.onDown.add(this.unpause, this, 0, 'alarmWindow');

                //pause after 5 seconds
                this.game.time.events.add(Phaser.Timer.SECOND * 5, function () {
                    this.hailingStormTimer.pause();
                    this.hailingAlarmPeriod.resume();
                    this.hailingTimer.resume();

                    //level_arg改回play
                    this.level_arg = 'play';
                }, this);
            }
        }, this);

        this.hailingAlarmPeriod.start();
    },

    mycloudTrialDialogue: function mycloudTrialDialogue() {

        var words = arguments[2];

        var dialogue = this.settingDialogue(this.game.world.centerX, this.mycloud.y - this.mycloud.height * 1.2);
        dialogue.content = words;
        dialogue.style = { font: "16px Microsoft JhengHei", fill: "#000" };

        this.typewriter(dialogue.img.x - dialogue.img.width * 0.8 / 2, dialogue.img.y - dialogue.img.height * 0.8 / 2, dialogue);

        if (this.level_arg === 'trial1-2') {
            this.game.input.enabled = true;
            var button = this.btnGenerator('btn_1_1', '沒問題!', 0, false);
        }
    },

    //For trial
    playPaused: function playPaused() {
        this.mycloud.inputEnabled = false;
        this.game.input.enabled = false;
        this.gameTimer.pause();
        this.hailingTimer.pause();
    },

    playResumed: function playResumed() {
        //因為trial1-2不會自動解除暫停，需要按按鈕開始
        if (this.level_arg !== 'trial1-2') {
            this.game.input.enabled = true;
            this.mycloud.inputEnabled = true;
        }
    },

    heartmaker: function heartmaker(hearts) {

        var heart_1 = hearts[0];
        var heart_2 = hearts[1];
        var heart_3 = hearts[2];
        // var newhearts = []

        var heartscale = 0.6;
        this.heart1 = this.game.add.image(10, 20, heart_1);
        this.heart2 = this.game.add.image(this.heart1.x + this.heart1.width * heartscale, 20, heart_2);
        this.heart3 = this.game.add.image(this.heart2.x + this.heart2.width * heartscale, 20, heart_3);
        this.heart1.scale.setTo(heartscale);
        this.heart2.scale.setTo(heartscale);
        this.heart3.scale.setTo(heartscale);

        // newhearts[0] = this.heart1
        // newhearts[1] = this.heart2
        // newhearts[2] = this.heart3

        // return newhearts
    },

    btnGenerator: function btnGenerator(btnStyle, value, isClick) {

        var width = 150;
        var height = 48;
        var x = this.game.world.centerX;
        var y = this.game.world.height * 0.75;
        var anchor_x = 0.5;
        var anchor_y = 0.2;
        var txt_anchor_y = 0;
        var style = isClick ? btnStyle + '_click' : btnStyle;

        var button = this.game.add.button(x, y, style, function () {
            this.btnGenerator(style, value, true);
        }, this, 1, 1, 0);

        button.anchor.setTo(anchor_x, anchor_y);
        button.width = width;
        button.height = height;

        var txt_style = { font: "22px Microsoft JhengHei", fill: "#fff" };

        button.button_txt = this.game.add.text(x, y, value, txt_style);
        button.button_txt.anchor.setTo(anchor_x, txt_anchor_y);

        if (isClick) {
            this.stateChanger(value);
        }

        return button;
    },

    stateChanger: function stateChanger(value) {
        if (this.level_arg === 'trial1-2' && value === '沒問題!') {
            this.game.state.restart(true, false, this.level, 'play');
        }
    },

    emitterGenerator: function emitterGenerator() {

        var emitter = this.game.add.emitter(0, 0, 500);

        emitter.makeParticles(['ice1', 'ice2', 'ice3']);

        emitter.minParticleSpeed.set(-1000, -500);
        emitter.maxParticleSpeed.set(1000, 500);
        emitter.gravity = 0;
        emitter.setRotation(10, 50);
        // this.bighailEmitter.setAlpha(0.1, 0.8, 300)
        // this.bighailEmitter.setScale(0.6, 0.9, 0.6, 0.9, 0, Phaser.Easing.Quintic.Out)
        emitter.setScale(0.5, 0.5, 1, 1, 0, Phaser.Easing.Quintic.Out);

        return emitter;
    },

    onclickEmitter: function onclickEmitter(obj) {

        this.clickEmitter = obj.events.onInputDown.add(function (pointer) {

            if (this.mycloud.isfreezing) {

                this.mycloud.clickTimes++;

                if (this.mycloud.clickTimes >= 5) {
                    this.mycloud.clickTimes = 0;
                    this.mycloud.isfreezing = false;
                    this.mycloud.animations.play('static');

                    if (this.level_arg === 'trial2-1') {
                        //等待螢幕歸正
                        this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                            this.game.state.restart(true, false, this.level, 'play');
                        }, this);
                    }
                } else {
                    this.mycloudEmitter.x = pointer.x;
                    this.mycloudEmitter.y = pointer.y;
                    this.mycloudEmitter.start(true, 2000, null, 10);
                    this.addQuake();
                }
            }
        }, this);
    },

    addQuake: function addQuake() {

        var intensity = 0.01;
        var duration = 500;
        this.game.camera.shake(intensity, duration);
    },

    hailing: function hailing(size, positionX) {

        var hailSize = this.game.cache.getImage('hail').width / 3;
        var bighailSize = this.game.cache.getImage('bighail').width / 3;

        var x = positionX || this.game.rnd.integerInRange(0, this.game.width - hailSize);
        var y = this.bigcloud.y + this.bigcloud.height;

        if (this.level === 'level1') {
            var fallingObject = 'hail';
        } else if (this.level_arg === 'trial2-1') {
            var fallingObject = 'bighail';
        } else {
            var fallingObject = this.game.rnd.integerInRange(0, 10) > 7 ? 'bighail' : 'hail';
        }

        var hail = this.hails.getFirstExists(false, true, x, y, fallingObject);
        hail.scale.setTo(0.5);

        this.game.physics.arcade.enable(hail);
        hail.body.setSize(hailSize * 0.6, hailSize * 0.6, hailSize * 0.2, hailSize * 0.3);
        hail.body.velocity.y = 300;
        hail.size = fallingObject === 'bighail' ? 'big' : 'small';
        // hail.outOfBoundsKill = true
        hail.checkWorldBounds = true;
        hail.events.onOutOfBounds.add(function () {

            if (this.level === 'level3') {
                this.hitroad(hail);
            }

            hail.destroy();
        }, this);
    },

    frozenroadInitialize: function frozenroadInitialize() {

        var road_x = [];
        var road_y = this.game.height;
        this.frozenroad = [];
        this.frozenroads = this.add.group();
        this.frozenroads.maxframe = 1;

        //left
        road_x[0] = this.game.width * 1 / 6;
        //middle
        road_x[1] = this.game.width * 1 / 2;
        //right
        road_x[2] = this.game.width * 5 / 6;

        for (var i = 0; i < 3; i++) {
            this.frozenroad[i] = this.game.add.sprite(road_x[i], road_y, 'iceground');
            this.frozenroad[i].frame = 0;
            this.frozenroad[i].scale.setTo(0.5, 0.5);
            this.frozenroad[i].anchor.setTo(0.5, 1);
            this.frozenroad[i].visible = false;
            this.frozenroads.add(this.frozenroad[i]);
        }
    },

    hitroad: function hitroad(hail) {

        if (this.mycloud.life === 3) {
            // console.log(hail.x)

            if (hail.x <= this.game.world.width / 3) {

                this.frozenroad[0].visible = true;
            } else if (hail.x > this.game.world.width * 1 / 3 && hail.x <= this.game.world.width * 2 / 3) {

                this.frozenroad[1].visible = true;
            } else {

                this.frozenroad[2].visible = true;
            }
        } else {

            this.frozenroads.children.forEach(function (ele) {
                ele.visible = true;
                if (ele.frame < this.frozenroads.maxframe) {
                    ele.frame++;
                }
            }, this);
        }

        if (this.mycloud.life > 0) {

            this.mycloudLifeHandler(--this.mycloud.life);
        }
    },

    hailCrushed: function hailCrushed(x, y, scale, size) {
        var fallingObject = size === 'big' ? 'bighail' : 'hail';
        var anchorY = 0.5;
        var crush = this.hailcrushes.getFirstExists(false, true, x, y, fallingObject);
        crush.anchor.setTo(0.5, anchorY);
        crush.scale.setTo(scale);

        var anim = crush.animations.add(fallingObject);
        anim.play(60, false, false);
        anim.onComplete.addOnce(function () {
            crush.destroy();
        }, this);
    },

    mycloudLifeHandler: function mycloudLifeHandler(life) {

        if (life > 0) {

            var hearts = [];

            for (var i = 0; i < 3; i++) {
                hearts[i] = i <= life - 1 ? 'redheart' : 'blackheart';
            }

            this.heartmaker(hearts);
        } else {
            this.game.state.start('Over', true, false, this.level);
        }
    },

    settingDialogue: function settingDialogue(x, y, words) {

        var dialogueImg = this.game.add.image(x, y, 'dialogue');
        dialogueImg.width = this.game.world.width * 0.8;
        dialogueImg.height = this.game.world.height * 0.2;
        dialogueImg.anchor.setTo(0.5, 0.5);

        var dialogue = {};
        dialogue.img = dialogueImg;
        dialogue.content = words;

        if (dialogue.content) {
            this.mycloudSpeaking(dialogue);
        }

        return dialogue;
    },

    typewriter: function typewriter(x, y, dialogue) {

        this.content = dialogue.content;

        this.line = [];
        this.wordIndex = 0;
        this.lineIndex = 0;

        this.wordDelay = 100;
        this.lineDelay = 0;

        this.typefinished = false;

        var style = dialogue.style || { font: "16px Microsoft JhengHei", fill: "#fff" };

        this.text = this.game.add.text(x, y, '', style);
        this.nextLine();
    },

    nextLine: function nextLine() {

        if (this.lineIndex === this.content.length) {
            //  We're finished
            this.typefinished = true;
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

    nextWord: function nextWord() {

        //  Add the next word onto the text string, followed by a space
        this.text.text = this.text.text.concat(this.line[this.wordIndex]);

        //  Advance the word index to the next word in the line
        this.wordIndex++;

        //  Last word?
        if (this.wordIndex === this.line.length) {
            //  Add a carriage return
            this.text.text = this.text.text.concat("\n");

            //  Get the next line after the lineDelay amount of ms has elapsed
            this.game.time.events.add(this.lineDelay, this.nextLine, this);
        }
    },

    typeFinished: function typeFinished() {
        if (this.typefinished) {
            this.playResumed();

            if (this.level_arg !== 'play') {
                this.hailingTimer.start();
            }

            this.typefinished = false;
        }
    }

};

module.exports = PlayState;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OverState = {
        init: function init() {
                this.level = arguments[0];
                // this.level_arg = arguments[1]
                this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        },

        create: function create() {
                this.game.input.enabled = true;

                // this.game.stage.backgroundColor = '#000'
                var bg = this.game.add.image(0, 0, 'fail_bg');
                bg.width = this.game.world.width;
                bg.height = this.game.world.height;

                //failcloud
                var failcloud = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'failcloud');
                failcloud.scale.setTo(0.5);
                failcloud.anchor.setTo(0.5);
                var failAnim = failcloud.animations.add('failcloud');
                failAnim.play(5, false, false);

                //words
                var style = { font: "22px Microsoft JhengHei", fill: "#ffff00" };
                var failwords = this.game.add.text(this.game.world.centerX, failcloud.y - failcloud.height / 2, '失敗~', style);
                failwords.anchor.setTo(0.5);

                this.replaybutton = this.btnGenerator('btn_1_1', '再試一次', 1, false);
                this.longformbutton = this.btnGenerator('btn_2_1', '觀看專題', 2, false);
                this.sharebutton = this.btnGenerator('btn_share', '分享出去吧!', 0, false);
        },

        btnGenerator: function btnGenerator(btnStyle, value, position, isClick) {
                //position: 0(最上面),1(左下),2(右下)

                if (position === 0) {
                        var width = this.game.world.width * 0.9;
                        var height = 48;
                        var x = this.game.world.centerX;
                        var y = this.replaybutton.y - this.replaybutton.height * 1.2;
                        var anchor_x = 0.5;
                } else if (position === 1) {
                        var width = this.game.world.width * 0.43;
                        var height = 48;
                        var x = this.game.world.width * 0.25;
                        var y = this.game.world.height * 0.9;
                        var anchor_x = 0.45;
                } else if (position === 2) {
                        var width = this.game.world.width * 0.43;
                        var height = 48;
                        var x = this.game.world.width * 0.75;
                        var y = this.game.world.height * 0.9;
                        var anchor_x = 0.55;
                }

                // switch(position){
                //     case 0:
                //         var width = this.game.world.width * 0.9
                //         var height = 48
                //         var x = this.game.world.centerX
                //         var y = this.replaybutton.y - this.replaybutton.height*1.2
                //         var anchor_x = 0.5
                //         break
                //     case 1:
                //         var width = this.game.world.width * 0.43
                //         var height = 48
                //         var x = this.game.world.width * 0.25
                //         var y = this.game.world.height*0.9
                //         var anchor_x = 0.45
                //         break
                //     case 2:
                //         var width = this.game.world.width * 0.43
                //         var height = 48
                //         var x = this.game.world.width* 0.75
                //         var y = this.game.world.height*0.9
                //         var anchor_x = 0.55
                //         break
                // }

                var anchor_y = 0.2;
                var txt_anchor_y = 0;

                var style = isClick ? btnStyle + '_click' : btnStyle;

                var button = this.game.add.button(x, y, style, function () {
                        this.btnGenerator(style, value, position, true);
                }, this, 1, 1, 0);

                button.anchor.setTo(anchor_x, anchor_y);
                button.width = width;
                button.height = height;

                var txt_style = { font: "22px Microsoft JhengHei", fill: "#fff" };

                button.button_txt = this.game.add.text(x, y, value, txt_style);
                button.button_txt.anchor.setTo(anchor_x, txt_anchor_y);

                if (isClick) {
                        this.stateChanger(value);
                }

                return button;
        },

        stateChanger: function stateChanger(value) {

                switch (value) {
                        case '再試一次':
                                this.game.state.start('Play', true, false, 'level1', 'play');
                                break;
                        case '觀看專題':
                                console.log('longform');
                                break;
                        case '分享出去吧!':
                                console.log('share FB');
                                break;
                }
        }

};

module.exports = OverState;

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3ByZWxvYWRlci5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jbG91ZG1hbl8yNDgucG5nIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3RhbGtpbmcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmcuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N0YXJ0Z2FtZV9idG5fMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2J0bl8xXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9idG5fMl8xLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2J0bV8yXzIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9idG5fM18yLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUxLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9ibGFja2Nsb3VkXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmxhY2tjbG91ZF8yLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JhbGxfMV85My5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jb3JuXzFfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaGVhcnRfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jbG91ZF8xLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkX2FuZ2VyMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9iaWdjbG91ZF9hbmdlcjIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY293XzFfNzAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmlnaWNlXzE4Ni5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VjbG91ZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9tcl93YW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUyLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3Blb3BsZV8xXzI0MC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9wZW9wbGVfMl8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvcGVvcGxlXzNfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY2FyXzJfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Nhcl8zXzI0MC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvZGFya3NreV8zLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljZWdyb3VuZF8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvZ2FtZTNfc3RhcnQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYW5ncnljbG91ZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9hbGFybV8zMDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZhaWxfYmcuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuX3NoYXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZhaWxfNTEwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZiLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL01yX1R1cnRsZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9vdmVyLmpzIl0sIm5hbWVzIjpbIldlYXRoZXIiLCJnYW1lIiwiR2FtZSIsIkFVVE8iLCJCb290U3RhdGUiLCJMb2FkU3RhdGUiLCJTdGFydFN0YXRlIiwiUGxheVN0YXRlIiwiT3ZlclN0YXRlIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsImluaXQiLCJzdGFnZSIsImJhY2tncm91bmRDb2xvciIsInNjYWxlIiwic2NhbGVNb2RlIiwiUGhhc2VyIiwiU2NhbGVNYW5hZ2VyIiwiU0hPV19BTEwiLCJwYWdlQWxpZ25Ib3Jpem9udGFsbHkiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5IiwicHJlbG9hZCIsImxvYWQiLCJpbWFnZSIsInNwcml0ZXNoZWV0IiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm15Y2xvdWQiLCJzcHJpdGUiLCJ3b3JsZCIsImNlbnRlclgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXRUbyIsInNwcml0ZXNjYWxlIiwiYW5pbWF0aW9ucyIsInBsYXkiLCJ3b3JkcyIsImRpYWxvZ3VlIiwiY29udGVudCIsInR5cGV3cml0ZXIiLCJ3aWR0aCIsInkiLCJwcmVsb2FkU3ByaXRlIiwic2V0UHJlbG9hZFNwcml0ZSIsImF1ZGlvIiwib25GaWxlQ29tcGxldGUiLCJwcm9ncmVzcyIsInVwZGF0ZSIsIngiLCJsaW5lIiwid29yZEluZGV4IiwibGluZUluZGV4Iiwid29yZERlbGF5IiwibGluZURlbGF5IiwiZmluaXNoZWQiLCJzdHlsZSIsImZvbnQiLCJmaWxsIiwidGV4dCIsIm5leHRMaW5lIiwibGVuZ3RoIiwidGltZSIsImV2ZW50cyIsIlRpbWVyIiwiU0VDT05EIiwic3BsaXQiLCJyZXBlYXQiLCJuZXh0V29yZCIsImNvbmNhdCIsImJlZ2lubmluZyIsIkVYQUNUX0ZJVCIsImJnc291bmQiLCJlIiwiYmciLCJ0aXRsZSIsInRpdGxlVHdlZW4iLCJ0d2VlbiIsInRvIiwiRWFzaW5nIiwiQm91bmNlIiwiT3V0IiwiYnRuR2VuZXJhdG9yIiwic2V0dGluZ215Y2xvdWQiLCJjZW50ZXJZIiwic2V0dGluZ0RpYWxvZ3VlIiwiaW1nIiwic2V0dGluZ0JpZ2Nsb3VkIiwic2V0dGluZ2hlYXJ0cyIsInNldHRpbmdtYXNrIiwidHdpbmtsaW5nSGVhcnRzIiwiaGVhcnRzIiwiYWxwaGEiLCJ5b3lvIiwiZGlhbG9ndWVJbWciLCJteWNsb3VkU3BlYWtpbmciLCJhbmNob3JfeCIsImFuY2hvcl95IiwibXljbG91ZF94IiwibXljbG91ZF95IiwiYW5jaG9yWCIsImFuY2hvclkiLCJoZWFydF8zIiwiaGVhcnRfMiIsImhlYXJ0XzEiLCJoZWFydHNjYWxlIiwiaGVhcnQzIiwiaGVhcnQyIiwiaGVhcnQxIiwiZ3JvdXAiLCJibWQiLCJtYWtlIiwiYml0bWFwRGF0YSIsImFkZFRvV29ybGQiLCJyZWN0IiwiYmlnY2xvdWQiLCJiaWdjbG91ZEltZyIsImNhY2hlIiwiZ2V0SW1hZ2UiLCJiaWdjbG91ZF9hbmdlcjEiLCJiaWdjbG91ZF9hbmdlcjIiLCJib3VuZHNBbGlnbkgiLCJib3VuZHNBbGlnblYiLCJ3b3JkV3JhcCIsIndvcmRXcmFwV2lkdGgiLCJidG5TdHlsZSIsInZhbHVlIiwicG9zaXRpb24iLCJpc0NsaWNrIiwibG93ZXJfeSIsInVwcGVyX3kiLCJ0eHRfYW5jaG9yX3kiLCJidXR0b24iLCJ0eHRfc3R5bGUiLCJidXR0b25fdHh0Iiwic3RhdGVDaGFuZ2VyIiwiY29uc29sZSIsImxvZyIsImxldmVsIiwiYXJndW1lbnRzIiwibGV2ZWxfYXJnIiwicGh5c2ljcyIsInN0YXJ0U3lzdGVtIiwiUGh5c2ljcyIsIkFSQ0FERSIsInNjZW5lc0ZhY3RvcnkiLCJhcmNhZGUiLCJvdmVybGFwIiwiaGFpbHMiLCJoaXRteUNsb3VkIiwiY29ybnMiLCJoaXRDb3JuIiwiY2FycyIsImZvckVhY2hBbGl2ZSIsImNhciIsInNsaWRlX3giLCJsaWZlIiwiZnJhbWUiLCJib2R5IiwidmVsb2NpdHkiLCJ0eXBlRmluaXNoZWQiLCJyZW5kZXIiLCJoYWlsIiwiY29ybiIsIm1heGZyYW1lIiwia2lsbCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImVsZSIsIm15Y2xvdWRMaWZlSGFuZGxlciIsImhhaWxDcnVzaGVkIiwic2l6ZSIsImNhdGNoVHdlZW4iLCJ0aW50Iiwib25Db21wbGV0ZSIsImlzZnJlZXppbmciLCJoaXRieUJpZ2hhaWwiLCJ0dXRvcmlhbE1vZGUiLCJjbGlja1RpbWVzIiwiY29ybkluaXRpYWxpemUiLCJ0YXJnZXRfbGVmdCIsInRhcmdldF9taWRkbGUiLCJ0YXJnZXRfcmlnaHQiLCJlbmFibGVCb2R5IiwiY29yblNpemUiLCJjb3JuX3kiLCJsZWZ0X2Nvcm5feCIsIm1pZGRsZV9jb3JuX3giLCJyaWdodF9jb3JuX3giLCJsZWZ0X2Nvcm4iLCJlbmFibGUiLCJtaWRkbGVfY29ybiIsInJpZ2h0X2Nvcm4iLCJsZWZ0VHdlZW4iLCJtaWRkbGVUd2VlbiIsInJpZ2h0VHdlZW4iLCJjYXJSdW5uaW5nIiwiY2Fyc2NhbGUiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsImNhclR5cGVzIiwibG9vcCIsInJuZCIsImludGVnZXJJblJhbmdlIiwidHlwZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEZpcnN0RXhpc3RzIiwib3V0T2ZCb3VuZHNLaWxsIiwiY2hlY2tXb3JsZEJvdW5kcyIsInNldHRpbmdNeUNsb3VkIiwiY29sbGlkZVdvcmxkQm91bmRzIiwic2V0U2l6ZSIsInRvdWNoaW5nIiwiaW5wdXRFbmFibGVkIiwib25jbGlja0VtaXR0ZXIiLCJteWNsb3VkTW92ZSIsIm9uSW5wdXREb3duIiwib25JbnB1dFVwIiwiaW5wdXQiLCJvblVwIiwiZGV2aWNlIiwiZGVza3RvcCIsImFkZE1vdmVDYWxsYmFjayIsInBvaW50ZXIiLCJpc1RhcCIsImNvdyIsImNvd0FuaW0iLCJzdGF0aWNTY2VuZXMiLCJhbmltYXRlZFNjZW5lcyIsInRyaWFsbWFzazEiLCJmcm96ZW5yb2FkSW5pdGlhbGl6ZSIsImhlYXJ0bWFrZXIiLCJoYWlsY3J1c2hlcyIsImhhaWxpbmciLCJjb3JuX3giLCJzZXR0aW5naGFpbHMiLCJkZWxheVRvZmlyZSIsImhhaWxpbmdUaW1lciIsInNreSIsImRhcmtza3kiLCJibGFja2Nsb3VkMSIsImJsYWNrY2xvdWQxSW1nIiwiYmxhY2tjbG91ZDIiLCJibGFja2Nsb3VkMkltZyIsImNsb3VkIiwiY2xvdWRJbWciLCJkYXJrc2t5VHdlZW4iLCJJbiIsImJsYWNrY2xvdWQxVHdlZW4iLCJMaW5lYXIiLCJibGFja2Nsb3VkMlR3ZWVuIiwiWXBvc2l0aW9uIiwiYmlnY2xvdWRUd2VlbiIsIlNpbnVzb2lkYWwiLCJJbk91dCIsIm9uU3RhcnQiLCJjb2xvciIsImRpcnR5Iiwic2V0dGluZ3Rhc2tXaW5kb3ciLCJ0YXNrd2luZG93R3JvdXAiLCJ3aW5kb3ciLCJncmFwaGljcyIsImFsaWduSW4iLCJDRU5URVIiLCJiZWdpbkZpbGwiLCJkcmF3Um91bmRlZFJlY3QiLCJlbmRGaWxsIiwiaW1nTmFtZSIsImJ0bnZhbHVlIiwiYmFubmVyIiwid2luZG93X2Jhbm5lciIsImJhbm5lckFuaW0iLCJ1bnBhdXNlYnRuIiwicGVvcGxlU2l6ZSIsInBlb3BsZSIsInBhc3NlZFRpbWVyIiwidHJpYWxtYXNrMiIsIm15Y2xvdWRFbWl0dGVyIiwiZW1pdHRlckdlbmVyYXRvciIsIm9uUGxheSIsInBhdXNlZCIsIm1hc2siLCJ0YXNrV2luZG93R3JvdXAiLCJ0YXNrV2luZG93bGlzdGVuZXIiLCJvbkRvd24iLCJ1bnBhdXNlIiwiZXZlbnQiLCJidG5Jc0NsaWNrZWQiLCJjbHMiLCJkZXN0cm95IiwicmVtb3ZlQWxsIiwicGFzc2VkV2luZG93R3JvdXAiLCJhbGFybVdpbmRvd0dyb3VwIiwicGF1c2UiLCJoYWlsaW5nQWxhcm1QZXJpb2QiLCJoYWlsaW5nU3Rvcm1UaW1lciIsInJlc3VtZSIsImNvdW50ZXIiLCJzdHlsZTEiLCJhbGlnbiIsInRleHQxIiwic3R5bGUyIiwidGV4dDIiLCJnYW1lVGltZXIiLCJzZXRUZXh0IiwiaGFpbGluZ0FsYXJtIiwibXljbG91ZFgiLCJuZXdsaWZlIiwicGxheVBhdXNlZCIsIm15Y2xvdWRtb3ZpbmciLCJteWNsb3VkVHJpYWxEaWFsb2d1ZSIsImFsYXJtUGVyaW9kIiwiZW5hYmxlZCIsInBsYXlSZXN1bWVkIiwicmVzdGFydCIsImVtaXR0ZXIiLCJtYWtlUGFydGljbGVzIiwibWluUGFydGljbGVTcGVlZCIsInNldCIsIm1heFBhcnRpY2xlU3BlZWQiLCJncmF2aXR5Iiwic2V0Um90YXRpb24iLCJzZXRTY2FsZSIsIlF1aW50aWMiLCJvYmoiLCJjbGlja0VtaXR0ZXIiLCJhZGRRdWFrZSIsImludGVuc2l0eSIsImR1cmF0aW9uIiwiY2FtZXJhIiwic2hha2UiLCJwb3NpdGlvblgiLCJoYWlsU2l6ZSIsImJpZ2hhaWxTaXplIiwiZmFsbGluZ09iamVjdCIsIm9uT3V0T2ZCb3VuZHMiLCJoaXRyb2FkIiwicm9hZF94Iiwicm9hZF95IiwiZnJvemVucm9hZCIsImZyb3plbnJvYWRzIiwiaSIsInZpc2libGUiLCJjcnVzaCIsImFuaW0iLCJhZGRPbmNlIiwidHlwZWZpbmlzaGVkIiwiZmFpbGNsb3VkIiwiZmFpbEFuaW0iLCJmYWlsd29yZHMiLCJyZXBsYXlidXR0b24iLCJsb25nZm9ybWJ1dHRvbiIsInNoYXJlYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSUEsVUFBVUEsV0FBVyxFQUF6Qjs7QUFFQUEsUUFBUUMsSUFBUixHQUFlLElBQUksaUJBQU9DLElBQVgsQ0FBZ0IsTUFBaEIsRUFBd0IsTUFBeEIsRUFBZ0MsaUJBQU9DLElBQXZDLEVBQTZDLE1BQTdDLENBQWY7O0FBRUFILFFBQVFJLFNBQVI7QUFDQUosUUFBUUssU0FBUjtBQUNBTCxRQUFRTSxVQUFSO0FBQ0FOLFFBQVFPLFNBQVI7QUFDQVAsUUFBUVEsU0FBUjs7QUFFQVIsUUFBUUMsSUFBUixDQUFhUSxLQUFiLENBQW1CQyxHQUFuQixDQUF1QixNQUF2QixFQUErQlYsUUFBUUksU0FBdkM7QUFDQUosUUFBUUMsSUFBUixDQUFhUSxLQUFiLENBQW1CQyxHQUFuQixDQUF1QixNQUF2QixFQUErQlYsUUFBUUssU0FBdkM7QUFDQUwsUUFBUUMsSUFBUixDQUFhUSxL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QUFmLENBQXRCLENBQWpCOztBQUVBO0FBQ0EscUJBQUtBLFNBQUw7O0FBRUE7QUFDQSxvQkFBSSxLQUFLQSxTQUFMLEtBQW1CLEtBQUtELElBQUwsQ0FBVVcsTUFBakMsRUFDQTtBQUNJO0FBQ0EsNkJBQUtGLElBQUwsQ0FBVUEsSUFBVixHQUFpQixLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZVUsTUFBZixDQUFzQixJQUF0QixDQUFqQjs7QUFFQTtBQUNBLDZCQUFLdEUsSUFBTCxDQUFVK0QsSUFBVixDQUFlQyxNQUFmLENBQXNCdkQsR0FBdEIsQ0FBMEIsS0FBSzhDLFNBQS9CLEVBQTBDLEtBQUtNLFFBQS9DLEVBQXlELElBQXpEO0FBQ0g7QUFDSjs7QUFsTFcsQ0FBaEI7O0FBSkE7OztBQU5BOzs7QUFKQTs7O0FBbEJBOztBQVpBOztBQVRBO0FBakJBOzs7QUE0UEFuQyxPQUFPQyxPQUFQLEdBQWlCdkIsU0FBakIsQzs7Ozs7O0FDNVBBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2RDs7Ozs7O0FDQUEsNkQ7Ozs7OztBQ0FBLDZEOzs7Ozs7QUNBQSw2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c0JBQVNULEtBQVQsRUFBZTs7QUFFekIsd0JBQU9BLEtBQVA7QUFDSSw2QkFBSyxNQUFMO0FBQ0kscUNBQUsvSCxJQUFMLENBQVVRLEtBQVYsQ0FBZ0JFLEtBQWhCLENBQXNCLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DLEtBQXBDLEVBQTJDLFFBQTNDLEVBQW9ELE1BQXBEO0FBQ0E7QUFDSiw2QkFBSyxNQUFMO0FBQ0krSCx3Q0FBUUMsR0FBUixDQUFZLFVBQVo7QUFDQTtBQUNKLDZCQUFLLFFBQUw7QUFDSUQsd0NBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0E7QUFUUjtBQVdIOztBQXRIVyxDQUFoQjs7QUEwSEFoSCxPQUFPQyxPQUFQLEdBQWlCcEIsU0FBakIsQyIsImZpbGUiOiJqcy9idW5kbGUuZjBkNTRmYzEzZTAxMDQ2OWU4NzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3BpeGknXHJcbmltcG9ydCAncDInXHJcbmltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcydcclxuXHJcbmltcG9ydCBCb290U3RhdGUgZnJvbSAnLi9zdGF0ZXMvYm9vdCdcclxuaW1wb3J0IExvYWRTdGF0ZSBmcm9tICcuL3N0YXRlcy9sb2FkJ1xyXG5pbXBvcnQgU3RhcnRTdGF0ZSBmcm9tICcuL3N0YXRlcy9zdGFydCdcclxuaW1wb3J0IFBsYXlTdGF0ZSBmcm9tICcuL3N0YXRlcy9wbGF5J1xyXG5pbXBvcnQgT3ZlclN0YXRlIGZyb20gJy4vc3RhdGVzL292ZXInXHJcblxyXG5sZXQgV2VhdGhlciA9IFdlYXRoZXIgfHwge31cclxuXHJcbldlYXRoZXIuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSgnMTAwJScsICcxMDAlJywgUGhhc2VyLkFVVE8sICdyb290JylcclxuXHJcbldlYXRoZXIuQm9vdFN0YXRlID0gQm9vdFN0YXRlXHJcbldlYXRoZXIuTG9hZFN0YXRlID0gTG9hZFN0YXRlXHJcbldlYXRoZXIuU3RhcnRTdGF0ZSA9IFN0YXJ0U3RhdGVcclxuV2VhdGhlci5QbGF5U3RhdGUgPSBQbGF5U3RhdGVcclxuV2VhdGhlci5PdmVyU3RhdGUgPSBPdmVyU3RhdGVcclxuXHJcbldlYXRoZXIuZ2FtZS5zdGF0ZS5hZGQoJ0Jvb3QnLCBXZWF0aGVyLkJvb3RTdGF0ZSlcclxuV2VhdGhlci5nYW1lLnN0YXRlLmFkZCgnTG9hZCcsIFdlYXRoZXIuTG9hZFN0YXRlKVxyXG5XZWF0aGVyLmdhbWUuc3RhdGUuYWRkKCdTdGFydCcsIFdlYXRoZXIuU3RhcnRTdGF0ZSlcclxuV2VhdGhlci5nYW1lLnN0YXRlLmFkZCgnUGxheScsIFdlYXRoZXIuUGxheVN0YXRlKVxyXG5XZWF0aGVyLmdhbWUuc3RhdGUuYWRkKCdPdmVyJywgV2VhdGhlci5PdmVyU3RhdGUpXHJcblxyXG5XZWF0aGVyLmdhbWUuc3RhdGUuc3RhcnQoJ0Jvb3QnKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zdHlsZS9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHByZWxvYWRlciBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3ByZWxvYWRlci5naWYnXHJcbi8vIGltcG9ydCBteWNsb3VkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY2xvdWQucG5nJ1xyXG5pbXBvcnQgbXljbG91ZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nsb3VkbWFuXzI0OC5wbmcnXHJcblxyXG5sZXQgQm9vdFN0YXRlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCdcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMXHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuc2NhbGUucGFnZUFsaWduVmVydGljYWxseSA9IHRydWVcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdwcmVsb2FkJywgcHJlbG9hZGVyKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdteWNsb3VkJywgbXljbG91ZCwgMjQ4LCAyNDApXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTsgLy9jb250aW51aW5nIHdoZW4gdGhlIHBhZ2UgaXMgdW5mb2N1c2VkXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdMb2FkJylcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJvb3RTdGF0ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVzL2Jvb3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS81N2NhMWEyLmdpZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9wcmVsb2FkZXIuZ2lmXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9kOGMyN2VjLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jbG91ZG1hbl8yNDgucG5nXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL3N0YXJ0cGFnZVxyXG5pbXBvcnQgdGFsa2luZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3RhbGtpbmcucG5nJ1xyXG5pbXBvcnQgYmcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iZy5qcGcnXHJcbmltcG9ydCBsb25nZm9ybV9idG5fMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2xvbmdmb3JtX2J0bl8xLnBuZydcclxuaW1wb3J0IGxvbmdmb3JtX2J0biBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2xvbmdmb3JtX2J0bi5wbmcnXHJcbmltcG9ydCBzdGFydGdhbWVfYnRuXzIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuXzIucG5nJ1xyXG5pbXBvcnQgc3RhcnRnYW1lX2J0biBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3N0YXJ0Z2FtZV9idG4ucG5nJ1xyXG5pbXBvcnQgdGl0bGUgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy90aXRsZS5wbmcnXHJcbmltcG9ydCBidG5fMV8xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzFfMS5wbmcnXHJcbmltcG9ydCBidG5fMV8yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmcnXHJcbmltcG9ydCBidG5fMl8xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzJfMS5wbmcnXHJcbmltcG9ydCBidG5fMl8yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRtXzJfMi5wbmcnXHJcbmltcG9ydCBidG5fM18xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmcnXHJcbmltcG9ydCBidG5fM18yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzNfMi5wbmcnXHJcblxyXG4vL2xldmVsMVxyXG5pbXBvcnQgZmlyc3RiZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUxLmpwZydcclxuLy8gaW1wb3J0IG15Y2xvdWQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jbG91ZC5wbmcnXHJcbmltcG9ydCBkYXJrc2t5MSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmcnXHJcbmltcG9ydCBibGFja2Nsb3VkMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMS5wbmcnXHJcbmltcG9ydCBibGFja2Nsb3VkMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMi5wbmcnXHJcbmltcG9ydCBiaWdjbG91ZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZydcclxuaW1wb3J0IGhhaWwgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iYWxsXzFfOTMucG5nJ1xyXG5pbXBvcnQgY29ybiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nvcm5fMV8yNDAucG5nJ1xyXG5pbXBvcnQgaGVhcnRfMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nJ1xyXG5pbXBvcnQgaGVhcnRfMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzIucG5nJ1xyXG4vLyBpbXBvcnQgaWNlX2JyZWFrIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlX2JyZWFrLnBuZydcclxuaW1wb3J0IGljZTEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY2VfMS5wbmcnXHJcbmltcG9ydCBpY2UyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlXzIucG5nJ1xyXG5pbXBvcnQgaWNlMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljZV8zLnBuZydcclxuaW1wb3J0IGNsb3VkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY2xvdWRfMS5wbmcnXHJcbmltcG9ydCBiaWdjbG91ZF9hbmdlcjEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iaWdjbG91ZF9hbmdlcjEucG5nJ1xyXG5pbXBvcnQgYmlnY2xvdWRfYW5nZXIyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYmlnY2xvdWRfYW5nZXIyLnBuZydcclxuaW1wb3J0IGNvdyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nvd18xXzcwLnBuZydcclxuaW1wb3J0IGJpZ2ljZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JpZ2ljZV8xODYucG5nJ1xyXG5pbXBvcnQgaWNlY2xvdWQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY2VjbG91ZC5wbmcnXHJcbmltcG9ydCBtcl93YW5nIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvbXJfd2FuZy5wbmcnXHJcblxyXG4vL2xldmVsMlxyXG5pbXBvcnQgc2Vjb25kYmcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMi5qcGcnXHJcbmltcG9ydCBwZW9wbGUxIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvcGVvcGxlXzFfMjQwLnBuZydcclxuaW1wb3J0IHBlb3BsZTIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9wZW9wbGVfMl8yNDAucG5nJ1xyXG5pbXBvcnQgcGVvcGxlMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3Blb3BsZV8zXzI0MC5wbmcnXHJcbmltcG9ydCBkYXJrc2t5MiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMi5wbmcnXHJcblxyXG4vL2xldmVsM1xyXG5pbXBvcnQgdGhpcmRiZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUzLmpwZydcclxuaW1wb3J0IGNhcjEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nJ1xyXG5pbXBvcnQgY2FyMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nhcl8yXzI0MC5wbmcnXHJcbmltcG9ydCBjYXIzIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY2FyXzNfMjQwLnBuZydcclxuaW1wb3J0IGNhcjQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nJ1xyXG5pbXBvcnQgZGFya3NreTMgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9kYXJrc2t5XzMucG5nJ1xyXG5pbXBvcnQgaWNlZ3JvdW5kIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlZ3JvdW5kXzI0MC5wbmcnXHJcbmltcG9ydCBwb2xpY2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9nYW1lM19zdGFydC5wbmcnXHJcbmltcG9ydCBhbmdyeWNsb3VkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYW5ncnljbG91ZC5wbmcnXHJcblxyXG4vL2Jhbm5lclxyXG5pbXBvcnQgYWxhcm1iYW5uZXIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9hbGFybV8zMDAucG5nJ1xyXG5pbXBvcnQgcGFzc2VkYmFubmVyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZydcclxuXHJcbi8vZmFpbFxyXG5pbXBvcnQgZmFpbF9iZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ZhaWxfYmcuanBnJ1xyXG5pbXBvcnQgYnRuX3NoYXJlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuX3NoYXJlLnBuZydcclxuaW1wb3J0IGZhaWxfNTEwIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvZmFpbF81MTAucG5nJ1xyXG5pbXBvcnQgZmIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9mYi5qcGcnXHJcblxyXG4vL3NvdW5kc1xyXG5pbXBvcnQgYmdzb3VuZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL01yX1R1cnRsZS5tcDMnXHJcblxyXG5cclxubGV0IExvYWRTdGF0ZSA9IHtcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCdcclxuXHJcbiAgICAgICAgLy9teWNsb3VkXHJcbiAgICAgICAgdGhpcy5teWNsb3VkID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclggLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LzIsICdteWNsb3VkJylcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5jaG9yLnNldFRvKDAuNSwgMC41KVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zcHJpdGVzY2FsZSA9IDAuNVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyh0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpXHJcbiAgICAgICAgLy8gdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbMSwgMiwgMywgNF0sIDEwLCB0cnVlKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLmFkZCgncnVuJywgWzUsIDQsIDUsIDYsIDcsIDZdLCAxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG5cclxuICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgIFwi5q+PIOWIsCDlpI8g5aSpIO+8jCDpmaQg5LqGIOmisSDpoqgg5aSWIO+8jCDlsI0g5rWBIOaXuiBcIixcclxuICAgICAgICAgICAgXCLnm5sg5LmfIOW4uCDluLYg5L6GIOWGsCDpm7kg562JIOeBvSDlrrMg5oCnIOWkqSDmsKMg77yMIFwiLFxyXG4gICAgICAgICAgICBcIuePviDlnKgg5L2gIOaciSDmqZ8g5pyDIOaLryDmlZEg5Y+wIOeBoyDkuI0g5Y+XIOWGsCDpm7kgXCIsXHJcbiAgICAgICAgICAgIFwi5L61IOilsiDvvIwg5L2gIOa6liDlgpkg5aW9IOS6hiDll44g77yfIF8gXCJcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHZhciBkaWFsb2d1ZSA9IHt9XHJcbiAgICAgICAgZGlhbG9ndWUuY29udGVudCA9IHdvcmRzXHJcblxyXG4gICAgICAgIHRoaXMudHlwZXdyaXRlcih0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjIxLHRoaXMubXljbG91ZC55LXRoaXMubXljbG91ZC5oZWlnaHQqMiwgZGlhbG9ndWUpXHJcbiAgICB9LFxyXG5cclxuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9mb3IgbG9hZGluZyBwcm9ncmVzc1xyXG4gICAgICAgIHZhciBwcmVsb2FkU3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoLzIgLSAyMjAvMiwgdGhpcy5teWNsb3VkLnkgKyB0aGlzLm15Y2xvdWQuaGVpZ2h0LzIsICdwcmVsb2FkJylcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHByZWxvYWRTcHJpdGUpXHJcblxyXG4gICAgICAgIC8vc3RhcnRwYWdlXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2RpYWxvZ3VlJywgdGFsa2luZykgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiZycsIGJnKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdsb25nZm9ybV9idG5fY2xpY2snLCBsb25nZm9ybV9idG5fMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnbG9uZ2Zvcm1fYnRuJywgbG9uZ2Zvcm1fYnRuKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzdGFydGdhbWVfYnRuX2NsaWNrJywgc3RhcnRnYW1lX2J0bl8yKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzdGFydGdhbWVfYnRuJywgc3RhcnRnYW1lX2J0bilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYnRuXzFfMScsIGJ0bl8xXzEpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2J0bl8xXzFfY2xpY2snLCBidG5fMV8yKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fMl8xJywgYnRuXzJfMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYnRuXzJfMV9jbGljaycsIGJ0bl8yXzIpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2J0bl8zXzEnLCBidG5fM18xKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fM18xX2NsaWNrJywgYnRuXzNfMilcclxuXHJcbiAgICAgICAgLy9iYW5uZXJcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnYWxhcm1iYW5uZXInLCBhbGFybWJhbm5lciwgMzAwLDk0KSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3Bhc3NlZGJhbm5lcicsIHBhc3NlZGJhbm5lciwgMzAwLDk0KSAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy9sZXZlbDFcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZmlyc3RiZycsIGZpcnN0YmcpXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ215Y2xvdWQnLCBteWNsb3VkLCAyMjQsIDIyNClcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZGFya3NreTEnLCBkYXJrc2t5MSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmxhY2tjbG91ZDEnLCBibGFja2Nsb3VkMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmxhY2tjbG91ZDInLCBibGFja2Nsb3VkMilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmlnY2xvdWQnLCBiaWdjbG91ZClcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnaGFpbCcsIGhhaWwsIDkzLDkzKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nvcm4nLCBjb3JuLCAyNDAsMTg5KSAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncmVkaGVhcnQnLCBoZWFydF8xKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdibGFja2hlYXJ0JywgaGVhcnRfMilcclxuICAgICAgICAvLyB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaWNlX2JyZWFrJywgaWNlX2JyZWFrKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdpY2UxJywgaWNlMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaWNlMicsIGljZTIpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2ljZTMnLCBpY2UzKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdjbG91ZCcsIGNsb3VkKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdpY2VjbG91ZCcsIGljZWNsb3VkKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiaWdjbG91ZF9hbmdlcjEnLCBiaWdjbG91ZF9hbmdlcjEpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JpZ2Nsb3VkX2FuZ2VyMicsIGJpZ2Nsb3VkX2FuZ2VyMilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY293JywgY293LDcwLDYwKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdiaWdoYWlsJywgYmlnaWNlLCA1NTcvMywgMTg3KSAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3dhbmcnLCBtcl93YW5nKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL2xldmVsMlxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzZWNvbmRiZycsIHNlY29uZGJnKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUxJywgcGVvcGxlMSwgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUyJywgcGVvcGxlMiwgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUzJywgcGVvcGxlMywgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdkYXJrc2t5MicsIGRhcmtza3kyKVxyXG5cclxuICAgICAgICAvL2xldmVsM1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0aGlyZGJnJywgdGhpcmRiZylcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMScsIGNhcjEsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMicsIGNhcjIsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMycsIGNhcjMsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyNCcsIGNhcjQsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnaWNlZ3JvdW5kJywgaWNlZ3JvdW5kLCAyNDAsMTcwKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Rhcmtza3kzJywgZGFya3NreTMpICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncG9saWNlJywgcG9saWNlKSAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2FsYXJtY2xvdWQnLCBhbmdyeWNsb3VkKSAgXHJcblxyXG4gICAgICAgIC8vZmFpbFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdmYWlsX2JnJywgZmFpbF9iZykgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fc2hhcmUnLCBidG5fc2hhcmUpICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZmFpbGNsb3VkJywgZmFpbF81MTAsIDUxMCw0NjApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZmInLCBmYikgIFxyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnYmdzb3VuZCcsIGJnc291bmQpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5maW5pc2hlZCAmJiB0aGlzLmdhbWUuc3RhdGUuY3VycmVudD09PVwiTG9hZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdTdGFydCcsIHRydWUsIGZhbHNlLCAnc3RhcnRwYWdlJylcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHR5cGV3cml0ZXI6IGZ1bmN0aW9uKHgseSxkaWFsb2d1ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRpYWxvZ3VlLmNvbnRlbnRcclxuXHJcbiAgICAgICAgdGhpcy5saW5lID0gW11cclxuICAgICAgICB0aGlzLndvcmRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmxpbmVJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53b3JkRGVsYXkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5saW5lRGVsYXkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gZGlhbG9ndWUuc3R5bGUgfHx7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgJycsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLm5leHRMaW5lKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dExpbmU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVJbmRleCA9PT0gdGhpcy5jb250ZW50Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSdyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAyLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgU3BsaXQgdGhlIGN1cnJlbnQgbGluZSBvbiBzcGFjZXMsIHNvIG9uZSB3b3JkIHBlciBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5jb250ZW50W3RoaXMubGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgdGhlIHdvcmQgaW5kZXggdG8gemVybyAodGhlIGZpcnN0IHdvcmQgaW4gdGhlIGxpbmUpXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyAgQ2FsbCB0aGUgJ25leHRXb3JkJyBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIHdvcmQgaW4gdGhlIGxpbmUgKGxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy53b3JkRGVsYXksIHRoaXMubGluZS5sZW5ndGgsIHRoaXMubmV4dFdvcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0byB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXgrKztcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFdvcmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vICBBZGQgdGhlIG5leHQgd29yZCBvbnRvIHRoZSB0ZXh0IHN0cmluZywgZm9sbG93ZWQgYnkgYSBzcGFjZVxyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KHRoaXMubGluZVt0aGlzLndvcmRJbmRleF0pO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0aGUgd29yZCBpbmRleCB0byB0aGUgbmV4dCB3b3JkIGluIHRoZSBsaW5lXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gIExhc3Qgd29yZD9cclxuICAgICAgICBpZiAodGhpcy53b3JkSW5kZXggPT09IHRoaXMubGluZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGEgY2FycmlhZ2UgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEdldCB0aGUgbmV4dCBsaW5lIGFmdGVyIHRoZSBsaW5lRGVsYXkgYW1vdW50IG9mIG1zIGhhcyBlbGFwc2VkXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQodGhpcy5saW5lRGVsYXksIHRoaXMubmV4dExpbmUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTG9hZFN0YXRlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcy9sb2FkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNDc3YmRmYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvdGFsa2luZy5wbmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzhhY2ZjOTMuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JnLmpwZ1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvODBmZjJkMC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9lZmU0MmUxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9sb25nZm9ybV9idG4ucG5nXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8zMmI0NGViLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuXzIucG5nXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9mYTE3Mzc3LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvOTJkMzk2MS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvdGl0bGUucG5nXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9jM2UyZGI0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9idG5fMV8xLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMmRkODY3Mi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzk4ZDU2ZTEucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2J0bl8yXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9hMDA1YjY3LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9idG1fMl8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYjc1NDg3Ny5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2NkYTBjOWMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2J0bl8zXzIucG5nXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8zMmU4MTEwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMS5qcGdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzU1MWJhMWQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2M1MTFlMzcucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzk0M2RkMTQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzg0NTdjNGUucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNzNmYTcyMC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmFsbF8xXzkzLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMTMyNzQ3NS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY29ybl8xXzI0MC5wbmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2Q0ZTcxNjcucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS85NTNkYzBkLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9oZWFydF8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYTgyZmJhMS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvaWNlXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS83NWJhZGU4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2VfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzU2MDc4NmEucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ljZV8zLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMTdhY2QwNy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY2xvdWRfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzFlZmJlZmIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkX2FuZ2VyMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzFhOWY2Y2QucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkX2FuZ2VyMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzc4NDA4ZTEucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2Nvd18xXzcwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMTE2YjAwYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmlnaWNlXzE4Ni5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzc2MWM5MDYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ljZWNsb3VkLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYmU2NmU1Mi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvbXJfd2FuZy5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzBlMWFkNjIuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUyLmpwZ1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNjY5MWU5OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvcGVvcGxlXzFfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZWM0YWVjOC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvcGVvcGxlXzJfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNmJhNmMyMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvcGVvcGxlXzNfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZTZmZDZhYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZGFya3NreV8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMzJkYmJkNy5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmdfZ2FtZTMuanBnXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8yODZhYTFmLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8xY2IwYzUxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfMl8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9mNDllYzY1LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfM18yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8wYTNmYTE1LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS80MTY2YzhlLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9kYXJrc2t5XzMucG5nXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9iMjk2MDgxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2Vncm91bmRfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvY2U2MDE0ZC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZ2FtZTNfc3RhcnQucG5nXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9jMGE2MWI5LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9hbmdyeWNsb3VkLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMmQxYWYzOS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYWxhcm1fMzAwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvN2Q0OGJiMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYzM3NmFhZi5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZmFpbF9iZy5qcGdcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2FhZjliMjUucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2J0bl9zaGFyZS5wbmdcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2I2N2E4MjQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ZhaWxfNTEwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZmU0ODI0Zi5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZmIuanBnXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJtZWRpYS9Ncl9UdXJ0bGUuZGFkODM1MC5tcDNcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvTXJfVHVydGxlLm1wM1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IFN0YXJ0U3RhdGUgPSB7XHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24oYmVnaW5uaW5nKXtcclxuXHJcbiAgICAgICAgdGhpcy5iZWdpbm5pbmcgPSBiZWdpbm5pbmdcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5FWEFDVF9GSVRcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZih0aGlzLmJlZ2lubmluZz09PVwic3RhcnRwYWdlXCIpe1xyXG5cclxuICAgICAgICAgICAgLy9hZGQgYXVkaW9cclxuICAgICAgICAgICAgdGhpcy5iZ3NvdW5kID0gdGhpcy5nYW1lLmFkZC5hdWRpbygnYmdzb3VuZCcsIDAuMiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8v6IGy6Z+z5Ye66Yyv5LiN5b2x6Z+/XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdzb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCdiZycpXHJcbiAgICAgICAgICAgIGJnLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgICAgIGJnLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHRcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwtMTAwLCd0aXRsZScpXHJcbiAgICAgICAgICAgIHRpdGxlLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMS4xXHJcbiAgICAgICAgICAgIHRpdGxlLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjZcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aXRsZSkudG8oe3k6IDB9LCAxMDAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQsIHRydWUpXHJcbiAgICAgICAgICAgIHRpdGxlVHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCAn6ZaL5aeL6YGK5oiyJywgMCwgZmFsc2UpICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8yXzEnLCAn6KeA55yL5bCI6aGMJywgMSwgZmFsc2UpICAgICAgICBcclxuXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5iZWdpbm5pbmc9PT1cIm15Y2xvdWRPU1wiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCdcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nbXljbG91ZCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwwLjUsMC41KVxyXG5cclxuICAgICAgICAgICAgLy8gdmFyIHdvcmRzID0gXCLmiJHkvoboh6rpm7Lnq6/vvIznnIvkuI3mhaPpm7LmnLXoo73pgKDlhrBcXG7pm7nljbHlrrPkurrpoZ7vvIzopoHmi6/mlZHlnLDnkIPkuI3lj5flhrBcXG7pm7nmlLvmk4rjgIJcXG5cIlxyXG4gICAgICAgICAgICAvLyB0aGlzLnNldHRpbmdEaWFsb2d1ZSh0aGlzLm15Y2xvdWQueCwgdGhpcy5teWNsb3VkLnkgLSB0aGlzLm15Y2xvdWQuaGVpZ2h0KjEuMiwgd29yZHMpXHJcblxyXG4gICAgICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIuaIkSDkvoYg6IeqIOmbsiDnq68g77yMIOeciyDkuI0g5oWjIOmbsiDmnLUg6KO9IOmAoCDlhrAgXCIsXHJcbiAgICAgICAgICAgICAgICBcIumbuSDljbEg5a6zIOS6uiDpoZ4g77yMIOimgSDmi68g5pWRIOWcsCDnkIMg5LiNIOWPlyDlhrAgXCIsXHJcbiAgICAgICAgICAgICAgICBcIumbuSDmlLsg5pOKIOOAgiBfXCJcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgdmFyIGRpYWxvZ3VlID0gdGhpcy5zZXR0aW5nRGlhbG9ndWUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMubXljbG91ZC55IC0gdGhpcy5teWNsb3VkLmhlaWdodCoxLjIpXHJcbiAgICAgICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG4gICAgICAgICAgICBkaWFsb2d1ZS5zdHlsZSA9IHsgZm9udDogXCIxNnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiMwMDBcIiB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR5cGV3cml0ZXIoZGlhbG9ndWUuaW1nLnggLSAoZGlhbG9ndWUuaW1nLndpZHRoKjAuOCkvMixkaWFsb2d1ZS5pbWcueS0oZGlhbG9ndWUuaW1nLmhlaWdodCowLjgpLzIsIGRpYWxvZ3VlKVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgJ+mBiuaIsuiqquaYjicsIDAsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fM18xJywgJ+ebtOaOpemWi+WniycsIDAsIGZhbHNlKSAgICAgICAgXHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYmVnaW5uaW5nPT09XCJpbnRybzFcIil7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0JpZ2Nsb3VkKClcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5naGVhcnRzKFsncmVkaGVhcnQnLCdyZWRoZWFydCcsJ3JlZGhlYXJ0J10pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ21hc2soKVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdteWNsb3VkKHRoaXMuZ2FtZS53b3JsZC53aWR0aCowLjg1LHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC42KVxyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLlnKgg5pmCIOmWkyDlhacg5L2/IOeUqCDmiYsg5oyHIOaLliDmm7Mg56e7IOWLlSDpm7Ig5py1IFwiLFxyXG4gICAgICAgICAgICAgICAgXCLpmLIg5q2iIOWGsCDpm7kg6JC9IOS4iyBfXCJcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgdmFyIGRpYWxvZ3VlID0gdGhpcy5zZXR0aW5nRGlhbG9ndWUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMubXljbG91ZC55IC0gdGhpcy5teWNsb3VkLmhlaWdodCoxLjIpXHJcbiAgICAgICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG4gICAgICAgICAgICBkaWFsb2d1ZS5zdHlsZSA9IHsgZm9udDogXCIxNnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiMwMDBcIiB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR5cGV3cml0ZXIoZGlhbG9ndWUuaW1nLnggLSAoZGlhbG9ndWUuaW1nLndpZHRoKjAuOCkvMixkaWFsb2d1ZS5pbWcueS0oZGlhbG9ndWUuaW1nLmhlaWdodCowLjgpLzIsIGRpYWxvZ3VlKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCAn5LiL5LiA5q2lJywgMCwgZmFsc2UpICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8zXzEnLCAn55u05o6l6ZaL5aeLJywgMSwgZmFsc2UpICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5iZWdpbm5pbmc9PT1cImludHJvMlwiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZidcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nQmlnY2xvdWQoKVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5naGVhcnRzKFsncmVkaGVhcnQnLCdyZWRoZWFydCcsJ3JlZGhlYXJ0J10pXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ215Y2xvdWQodGhpcy5nYW1lLndvcmxkLndpZHRoKjAuODUsdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjYpXHJcblxyXG4gICAgICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIuiLpSDlhrAg6Zu5IOaJkyDkuK0g55uuIOaomSDniakg77yMIOWJhyDmnIMg5pCNIOWksSDkuIAgXCIsXHJcbiAgICAgICAgICAgICAgICBcIuWAiyDmhJsg5b+DIO+8jCDnlbYg5LiJIOmhhiDmhJsg5b+DIOatuCDpm7Yg5YmHIOmBiiDmiLJcIixcclxuICAgICAgICAgICAgICAgIFwi57WQIOadnyDjgIJcIlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICB2YXIgZGlhbG9ndWUgPSB0aGlzLnNldHRpbmdEaWFsb2d1ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5teWNsb3VkLnkgLSB0aGlzLm15Y2xvdWQuaGVpZ2h0KjEuMilcclxuICAgICAgICAgICAgZGlhbG9ndWUuY29udGVudCA9IHdvcmRzXHJcbiAgICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlID0geyBmb250OiBcIjE2cHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiIzAwMFwiIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZXdyaXRlcihkaWFsb2d1ZS5pbWcueCAtIChkaWFsb2d1ZS5pbWcud2lkdGgqMC44KS8yLGRpYWxvZ3VlLmltZy55LShkaWFsb2d1ZS5pbWcuaGVpZ2h0KjAuOCkvMiwgZGlhbG9ndWUpXHJcblxyXG4gICAgICAgICAgICAvL3R3aW5rbGluZyBoZWFydHNcclxuICAgICAgICAgICAgdmFyIHR3aW5rbGluZ0hlYXJ0cz0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmhlYXJ0cykudG8oe2FscGhhOiAwfSwgNTAwLCBcIkxpbmVhclwiLCB0cnVlKVxyXG4gICAgICAgICAgICB0d2lua2xpbmdIZWFydHMueW95byh0cnVlLDUwMClcclxuICAgICAgICAgICAgdHdpbmtsaW5nSGVhcnRzLnJlcGVhdCgxMCwxMDAwKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCAn5LiL5LiA5q2lJywgMCwgZmFsc2UpICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8zXzEnLCAn55u05o6l6ZaL5aeLJywgMSwgZmFsc2UpICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmdEaWFsb2d1ZTogZnVuY3Rpb24oeCx5LHdvcmRzKXtcclxuXHJcbiAgICAgICAgdmFyIGRpYWxvZ3VlSW1nID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh4LHksICdkaWFsb2d1ZScpIFxyXG4gICAgICAgIGRpYWxvZ3VlSW1nLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC44XHJcbiAgICAgICAgZGlhbG9ndWVJbWcuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuMlxyXG4gICAgICAgIGRpYWxvZ3VlSW1nLmFuY2hvci5zZXRUbygwLjUsMC41KVxyXG5cclxuICAgICAgICB2YXIgZGlhbG9ndWUgPSB7fVxyXG4gICAgICAgIGRpYWxvZ3VlLmltZyA9IGRpYWxvZ3VlSW1nXHJcbiAgICAgICAgZGlhbG9ndWUuY29udGVudCA9IHdvcmRzXHJcblxyXG4gICAgICAgIGlmKGRpYWxvZ3VlLmNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLm15Y2xvdWRTcGVha2luZyhkaWFsb2d1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkaWFsb2d1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nbXljbG91ZDogZnVuY3Rpb24oeCx5LGFuY2hvcl94LGFuY2hvcl95KSB7XHJcbiAgICAgICAgdmFyIG15Y2xvdWRfeCA9IHggfHwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclhcclxuICAgICAgICB2YXIgbXljbG91ZF95ID0geSB8fCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC43XHJcbiAgICAgICAgdmFyIGFuY2hvclggPSBhbmNob3JfeCB8fCAwLjVcclxuICAgICAgICB2YXIgYW5jaG9yWSA9IGFuY2hvcl95IHx8IDAuNVxyXG5cclxuICAgICAgICB0aGlzLm15Y2xvdWQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShteWNsb3VkX3gsbXljbG91ZF95LCAnbXljbG91ZCcpXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuY2hvci5zZXRUbyhhbmNob3JYLCBhbmNob3JZKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zcHJpdGVzY2FsZSA9IDAuNFxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyh0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpXHJcblxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLmFkZCgnc3RhdGljJywgWzAsIDEsIDAsIDIsIDAsIDEsIDAsIDNdLDEwLCB0cnVlKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnBsYXkoJ3N0YXRpYycpXHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmdoZWFydHM6IGZ1bmN0aW9uKGhlYXJ0cykge1xyXG5cclxuICAgICAgICB2YXIgaGVhcnRfMyA9IGhlYXJ0c1swXVxyXG4gICAgICAgIHZhciBoZWFydF8yID0gaGVhcnRzWzFdXHJcbiAgICAgICAgdmFyIGhlYXJ0XzEgPSBoZWFydHNbMl0gICAgICAgIFxyXG5cclxuICAgICAgICB2YXIgaGVhcnRzY2FsZSA9IDAuNlxyXG4gICAgICAgIHZhciBoZWFydDMgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDEwLDIwLGhlYXJ0XzMpXHJcbiAgICAgICAgdmFyIGhlYXJ0MiA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoaGVhcnQzLnggKyBoZWFydDMud2lkdGggKiBoZWFydHNjYWxlLDIwLGhlYXJ0XzIpICAgICAgXHJcbiAgICAgICAgdmFyIGhlYXJ0MSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoaGVhcnQyLnggKyBoZWFydDIud2lkdGggKiBoZWFydHNjYWxlLDIwLGhlYXJ0XzEpICAgICAgXHJcbiAgICAgICAgaGVhcnQzLnNjYWxlLnNldFRvKGhlYXJ0c2NhbGUpXHJcbiAgICAgICAgaGVhcnQyLnNjYWxlLnNldFRvKGhlYXJ0c2NhbGUpXHJcbiAgICAgICAgaGVhcnQxLnNjYWxlLnNldFRvKGhlYXJ0c2NhbGUpXHJcblxyXG4gICAgICAgIHRoaXMuaGVhcnRzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgdGhpcy5oZWFydHMuYWRkKGhlYXJ0MSlcclxuICAgICAgICB0aGlzLmhlYXJ0cy5hZGQoaGVhcnQyKVxyXG4gICAgICAgIHRoaXMuaGVhcnRzLmFkZChoZWFydDMpXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmdtYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYm1kID0gdGhpcy5nYW1lLm1ha2UuYml0bWFwRGF0YSh0aGlzLmdhbWUud29ybGQud2lkdGgsdGhpcy5nYW1lLndvcmxkLmhlaWdodClcclxuICAgICAgICBibWQuYWRkVG9Xb3JsZCgpXHJcbiAgICAgICAgYm1kLnJlY3QoMCwwLHRoaXMuZ2FtZS53b3JsZC53aWR0aCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0LCdyZ2JhKDAsMCwwLDAuNiknKVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nQmlnY2xvdWQ6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgMTAsJ2JpZ2Nsb3VkJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLmFuY2hvci5zZXRUbygwLjUsMCkgICAgICAgIFxyXG4gICAgICAgIHZhciBiaWdjbG91ZEltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmlnY2xvdWQnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGggLyBiaWdjbG91ZEltZy53aWR0aCAqIGJpZ2Nsb3VkSW1nLmhlaWdodFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmJpZ2Nsb3VkLndpZHRoICogMC43LCB0aGlzLmJpZ2Nsb3VkLmhlaWdodCAqIDAuNTUsJ2JpZ2Nsb3VkX2FuZ2VyMScpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEuYW5jaG9yLnNldFRvKDAuNSwwLjUpICAgXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEud2lkdGggPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMCAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmJpZ2Nsb3VkLndpZHRoICogMC4xNSwgdGhpcy5iaWdjbG91ZC5oZWlnaHQgKiAwLjgsJ2JpZ2Nsb3VkX2FuZ2VyMicpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIuYW5jaG9yLnNldFRvKDAuNSwwLjUpICAgXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIud2lkdGggPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMCAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG15Y2xvdWRTcGVha2luZzogZnVuY3Rpb24oZGlhbG9ndWUpIHtcclxuICAgICAgICAvLyB2YXIgY29udGVudCA9IFwi5oiR5L6G6Ieq6Zuy56uv77yM55yL5LiN5oWj6Zuy5py16KO96YCg5Yaw6Zu55Y2x5a6z5Lq66aGe77yM6KaB5ouv5pWR5Zyw55CD5LiN5Y+X5Yaw6Zu55pS75pOK44CCXCJcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0geyBmb250OiBcIjE2cHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiIzAwMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBib3VuZHNBbGlnbkg6IFwiY2VudGVyXCIsIGJvdW5kc0FsaWduVjogXCJtaWRkbGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgd29yZFdyYXA6IHRydWUsIHdvcmRXcmFwV2lkdGg6IGRpYWxvZ3VlLndpZHRoKjAuNn1cclxuXHJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoZGlhbG9ndWUuaW1nLngsIGRpYWxvZ3VlLmltZy55LGRpYWxvZ3VlLmNvbnRlbnQsc3R5bGUpXHJcbiAgICAgICAgdGV4dC5hbmNob3Iuc2V0VG8oMC41LDAuNSlcclxuICAgIH0sXHJcblxyXG4gICAgYnRuR2VuZXJhdG9yOiBmdW5jdGlvbihidG5TdHlsZSwgdmFsdWUsIHBvc2l0aW9uLCBpc0NsaWNrKXtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gMTUwXHJcbiAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWFxyXG4gICAgICAgIHZhciBsb3dlcl95ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuOVxyXG4gICAgICAgIHZhciB1cHBlcl95ID0gbG93ZXJfeSAtIGhlaWdodCAqIDEuNVxyXG4gICAgICAgIHZhciB5ID0gKHBvc2l0aW9uPT0wKT91cHBlcl95Omxvd2VyX3lcclxuICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjVcclxuICAgICAgICB2YXIgYW5jaG9yX3kgPSAocG9zaXRpb249PTApPzAuMjowLjRcclxuICAgICAgICB2YXIgdHh0X2FuY2hvcl95ID0gKHBvc2l0aW9uPT0wKT8wOjAuM1xyXG4gICAgICAgIHZhciBzdHlsZSA9IGlzQ2xpY2s/YnRuU3R5bGUrJ19jbGljayc6YnRuU3R5bGVcclxuXHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IHRoaXMuZ2FtZS5hZGQuYnV0dG9uKHgsIHksIHN0eWxlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5idG5HZW5lcmF0b3Ioc3R5bGUsIHZhbHVlLCBwb3NpdGlvbiwgdHJ1ZSlcclxuICAgICAgICB9LCB0aGlzLCAxLDEsMClcclxuXHJcbiAgICAgICAgYnV0dG9uLmFuY2hvci5zZXRUbyhhbmNob3JfeCxhbmNob3JfeSlcclxuICAgICAgICBidXR0b24ud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIGJ1dHRvbi5oZWlnaHQgPSBoZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIHR4dF9zdHlsZSA9IHtmb250OiBcIjIycHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiI2ZmZlwifVxyXG5cclxuICAgICAgICB2YXIgYnV0dG9uX3R4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh4LCB5LCB2YWx1ZSwgdHh0X3N0eWxlKVxyXG4gICAgICAgIGJ1dHRvbl90eHQuYW5jaG9yLnNldFRvKGFuY2hvcl94LHR4dF9hbmNob3JfeSlcclxuXHJcbiAgICAgICAgaWYoaXNDbGljayl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VyKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhdGVDaGFuZ2VyOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKXtcclxuICAgICAgICAgICAgY2FzZSAn6ZaL5aeL6YGK5oiyJzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnRcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnU3RhcnQnLCB0cnVlLCBmYWxzZSwgJ215Y2xvdWRPUycpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICfop4DnnIvlsIjpoYwnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb25nZm9ybVwiKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAn6YGK5oiy6Kqq5piOJzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW50cm9kdWN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1N0YXJ0JywgdHJ1ZSwgZmFsc2UsICdpbnRybzEnKSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAn55u05o6l6ZaL5aeLJzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgYW55d2F5XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ2xldmVsMScsICd0cmlhbDEtMScpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICfkuIvkuIDmraUnOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuZXh0XCIpXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJlZ2lubmluZz09PVwiaW50cm8xXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGxheScsIHRydWUsIGZhbHNlLCAndHJpYWwnKSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5iZWdpbm5pbmc9PT1cImludHJvMlwiKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ3RyaWFsMicpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhayAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHR5cGV3cml0ZXI6IGZ1bmN0aW9uKHgseSxkaWFsb2d1ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRpYWxvZ3VlLmNvbnRlbnRcclxuXHJcbiAgICAgICAgdGhpcy5saW5lID0gW11cclxuICAgICAgICB0aGlzLndvcmRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmxpbmVJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53b3JkRGVsYXkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5saW5lRGVsYXkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gZGlhbG9ndWUuc3R5bGUgfHx7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgJycsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLm5leHRMaW5lKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dExpbmU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVJbmRleCA9PT0gdGhpcy5jb250ZW50Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSdyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAyLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgU3BsaXQgdGhlIGN1cnJlbnQgbGluZSBvbiBzcGFjZXMsIHNvIG9uZSB3b3JkIHBlciBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5jb250ZW50W3RoaXMubGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgdGhlIHdvcmQgaW5kZXggdG8gemVybyAodGhlIGZpcnN0IHdvcmQgaW4gdGhlIGxpbmUpXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyAgQ2FsbCB0aGUgJ25leHRXb3JkJyBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIHdvcmQgaW4gdGhlIGxpbmUgKGxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy53b3JkRGVsYXksIHRoaXMubGluZS5sZW5ndGgsIHRoaXMubmV4dFdvcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0byB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXgrKztcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFdvcmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vICBBZGQgdGhlIG5leHQgd29yZCBvbnRvIHRoZSB0ZXh0IHN0cmluZywgZm9sbG93ZWQgYnkgYSBzcGFjZVxyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KHRoaXMubGluZVt0aGlzLndvcmRJbmRleF0pO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0aGUgd29yZCBpbmRleCB0byB0aGUgbmV4dCB3b3JkIGluIHRoZSBsaW5lXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gIExhc3Qgd29yZD9cclxuICAgICAgICBpZiAodGhpcy53b3JkSW5kZXggPT09IHRoaXMubGluZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGEgY2FycmlhZ2UgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEdldCB0aGUgbmV4dCBsaW5lIGFmdGVyIHRoZSBsaW5lRGVsYXkgYW1vdW50IG9mIG1zIGhhcyBlbGFwc2VkXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQodGhpcy5saW5lRGVsYXksIHRoaXMubmV4dExpbmUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJ0U3RhdGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcy9zdGFydC5qcyIsImxldCBQbGF5U3RhdGUgPSB7XHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmxldmVsID0gYXJndW1lbnRzWzBdXHJcbiAgICAgICAgdGhpcy5sZXZlbF9hcmcgPSBhcmd1bWVudHNbMV0gfHwge31cclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5FWEFDVF9GSVRcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSlcclxuICAgICAgICB0aGlzLnNjZW5lc0ZhY3RvcnkodGhpcy5sZXZlbCx0aGlzLmxldmVsX2FyZylcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMubXljbG91ZCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMuaGFpbHMsIHRoaXMubXljbG91ZCwgdGhpcy5oaXRteUNsb3VkLCBudWxsLCB0aGlzKSAgICBcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLm92ZXJsYXAodGhpcy5oYWlscywgdGhpcy5jb3JucywgdGhpcy5oaXRDb3JuLCBudWxsLCB0aGlzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL0ZvciBsZXZlbDNcclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMycgJiYgdGhpcy5jYXJzKXtcclxuICAgICAgICAgICAgdGhpcy5jYXJzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihjYXIpe1xyXG4gICAgICAgICAgICAgICAgaWYoY2FyLnggPiBjYXIuc2xpZGVfeCl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5teWNsb3VkLmxpZmU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmZyYW1lID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuYm9keS52ZWxvY2l0eS54ID0gNDAwXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5teWNsb3VkLmxpZmU9PT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmZyYW1lID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuYm9keS52ZWxvY2l0eS54ID0gNjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5teWNsb3VkLmxpZmU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmZyYW1lID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXIuYm9keS52ZWxvY2l0eS54ID0gODAwICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZyE9PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUZpbmlzaGVkKClcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0sXHJcblxyXG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyB0aGlzLmdhbWUuZGVidWcuYm9keSh0aGlzLm15Y2xvdWQpXHJcblxyXG4gICAgICAgIC8vIGlmKHRoaXMuaGFpbHMpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5oYWlscy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oaGFpbCl7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmdhbWUuZGVidWcuYm9keShoYWlsKVxyXG4gICAgICAgIC8vICAgICB9LHRoaXMpXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLmJpZ2hhaWxzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmlnaGFpbHMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGJpZ2hhaWwpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lLmRlYnVnLmJvZHkoYmlnaGFpbClcclxuICAgICAgICAvLyAgICAgfSx0aGlzKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGl0Q29ybjogZnVuY3Rpb24oaGFpbCwgY29ybikge1xyXG5cclxuICAgICAgICB2YXIgbWF4ZnJhbWVcclxuICAgICAgICBoYWlsLmtpbGwoKSAgIFxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICBtYXhmcmFtZSA9IDNcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG4gICAgICAgICAgICBtYXhmcmFtZSA9IDJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGNvcm4ubGlmZT09PTMpe1xyXG4gICAgICAgICAgICBjb3JuLmZyYW1lID0gMVxyXG4gICAgICAgICAgICB0aGlzLmNvcm5zLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUubGlmZS0tXHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuY29ybnMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihlbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGVsZS5mcmFtZTxtYXhmcmFtZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLmZyYW1lKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsZS5saWZlLS1cclxuICAgICAgICAgICAgfSwgdGhpcylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29ybnMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihlbGUpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlbGUuZnJhbWUpXHJcbiAgICAgICAgLy8gfSx0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLm15Y2xvdWRMaWZlSGFuZGxlcigtLXRoaXMubXljbG91ZC5saWZlKSAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbD09PSd0cmlhbDInKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCoxLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgaGl0bXlDbG91ZDogZnVuY3Rpb24obXljbG91ZCwgaGFpbCkge1xyXG5cclxuICAgICAgICBoYWlsLmtpbGwoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaGFpbENydXNoZWQoaGFpbC54LGhhaWwueSxoYWlsLnNjYWxlLngsaGFpbC5zaXplKVxyXG5cclxuICAgICAgICAvL+aOpeWIsOWGsOmbuVxyXG4gICAgICAgIHZhciBjYXRjaFR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2VlbihteWNsb3VkKVxyXG4gICAgICAgIGNhdGNoVHdlZW4udG8oe3RpbnQ6IDB4MDBGRjAwfSwgMjAwKVxyXG4gICAgICAgIGNhdGNoVHdlZW4ub25Db21wbGV0ZS5hZGQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbXljbG91ZC50aW50ID0gMHhGRkZGRkZcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIGNhdGNoVHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICBpZihoYWlsLnNpemU9PT0nYmlnJyAmJiAhdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmhpdGJ5QmlnaGFpbChoYWlsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwxLTEnKXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbF9hcmcgPSAndHJpYWwxLTInXHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxNb2RlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhpdGJ5QmlnaGFpbDogZnVuY3Rpb24oaGFpbCl7XHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmNsaWNrVGltZXMgPSAwXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDBcclxuICAgICAgICB0aGlzLm15Y2xvdWQuaXNmcmVlemluZyA9IHRydWVcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdmcm96ZW4nKVxyXG4gICAgfSxcclxuXHJcbiAgICBjb3JuSW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldF9sZWZ0LFxyXG4gICAgICAgICAgICB0YXJnZXRfbWlkZGxlLFxyXG4gICAgICAgICAgICB0YXJnZXRfcmlnaHRcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDEnKXtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldF9sZWZ0ID0gJ2Nvcm4nXHJcbiAgICAgICAgICAgIHRhcmdldF9taWRkbGUgPSAnY29ybidcclxuICAgICAgICAgICAgdGFyZ2V0X3JpZ2h0ID0gJ2Nvcm4nXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0X2xlZnQgPSAncGVvcGxlMSdcclxuICAgICAgICAgICAgdGFyZ2V0X21pZGRsZSA9ICdwZW9wbGUyJ1xyXG4gICAgICAgICAgICB0YXJnZXRfcmlnaHQgPSAncGVvcGxlMydcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgIHRhcmdldF9sZWZ0ID0gJ2NhcjEnXHJcbiAgICAgICAgICAgIHRhcmdldF9taWRkbGUgPSAnY2FyMidcclxuICAgICAgICAgICAgdGFyZ2V0X3JpZ2h0ID0gJ2NhcjMnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvcm5zID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgdGhpcy5jb3Jucy5lbmFibGVCb2R5ID0gdHJ1ZVxyXG5cclxuICAgICAgICB2YXIgY29yblNpemUgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2Nvcm4nKS53aWR0aC80XHJcbiAgICAgICAgdmFyIGNvcm5feSA9IHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjkyNzVcclxuICAgICAgICB2YXIgbGVmdF9jb3JuX3ggPSB0aGlzLmdhbWUud2lkdGggKiAxLzZcclxuICAgICAgICB2YXIgbWlkZGxlX2Nvcm5feCA9IHRoaXMuZ2FtZS53aWR0aCAqIDEvMlxyXG4gICAgICAgIHZhciByaWdodF9jb3JuX3ggPSB0aGlzLmdhbWUud2lkdGggKiA1LzZcclxuXHJcbiAgICAgICAgdGhpcy5sZWZ0X2Nvcm4gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShsZWZ0X2Nvcm5feCAsIGNvcm5feSwgdGFyZ2V0X2xlZnQpXHJcbiAgICAgICAgdGhpcy5sZWZ0X2Nvcm4uZnJhbWUgPSAwXHJcbiAgICAgICAgdGhpcy5sZWZ0X2Nvcm4uc2NhbGUuc2V0VG8oMC41LDApXHJcbiAgICAgICAgdGhpcy5sZWZ0X2Nvcm4uYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgIHRoaXMubGVmdF9jb3JuLmxpZmUgPSAzXHJcbiAgICAgICAgdGhpcy5jb3Jucy5hZGQodGhpcy5sZWZ0X2Nvcm4pXHJcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLmxlZnRfY29ybilcclxuXHJcbiAgICAgICAgdGhpcy5taWRkbGVfY29ybiA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKG1pZGRsZV9jb3JuX3ggLCBjb3JuX3ksIHRhcmdldF9taWRkbGUpXHJcbiAgICAgICAgdGhpcy5taWRkbGVfY29ybi5mcmFtZSA9IDBcclxuICAgICAgICB0aGlzLm1pZGRsZV9jb3JuLnNjYWxlLnNldFRvKDAuNSwwKVxyXG4gICAgICAgIHRoaXMubWlkZGxlX2Nvcm4uYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgIHRoaXMubWlkZGxlX2Nvcm4ubGlmZSA9IDNcclxuICAgICAgICB0aGlzLmNvcm5zLmFkZCh0aGlzLm1pZGRsZV9jb3JuKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcy5taWRkbGVfY29ybilcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodF9jb3JuID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUocmlnaHRfY29ybl94ICwgY29ybl95LCB0YXJnZXRfcmlnaHQpXHJcbiAgICAgICAgdGhpcy5yaWdodF9jb3JuLmZyYW1lID0gMFxyXG4gICAgICAgIHRoaXMucmlnaHRfY29ybi5zY2FsZS5zZXRUbygwLjUsMClcclxuICAgICAgICB0aGlzLnJpZ2h0X2Nvcm4uYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgIHRoaXMucmlnaHRfY29ybi5saWZlID0gM1xyXG4gICAgICAgIHRoaXMuY29ybnMuYWRkKHRoaXMucmlnaHRfY29ybilcclxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMucmlnaHRfY29ybilcclxuXHJcbiAgICAgICAgdmFyIGxlZnRUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5sZWZ0X2Nvcm4uc2NhbGUpXHJcbiAgICAgICAgbGVmdFR3ZWVuLnRvKHt5OiAwLjV9LCAxMjAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQpXHJcbiAgICAgICAgbGVmdFR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdmFyIG1pZGRsZVR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm1pZGRsZV9jb3JuLnNjYWxlKVxyXG4gICAgICAgIG1pZGRsZVR3ZWVuLnRvKHt5OiAwLjV9LCAxMjAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQpXHJcbiAgICAgICAgbWlkZGxlVHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICB2YXIgcmlnaHRUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5yaWdodF9jb3JuLnNjYWxlKVxyXG4gICAgICAgIHJpZ2h0VHdlZW4udG8oe3k6IDAuNX0sIDEyMDAsIFBoYXNlci5FYXNpbmcuQm91bmNlLk91dClcclxuICAgICAgICByaWdodFR3ZWVuLnN0YXJ0KClcclxuICAgIH0sXHJcblxyXG4gICAgY2FyUnVubmluZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmNhcnMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuICAgICAgICB0aGlzLmNhcnMuZW5hYmxlQm9keSA9IHRydWVcclxuXHJcbiAgICAgICAgdmFyIGNhcnNjYWxlID0gMC41XHJcbiAgICAgICAgdmFyIGNhcldpZHRoID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdjYXIxJykud2lkdGgvMiAqIGNhcnNjYWxlXHJcbiAgICAgICAgdmFyIGNhckhlaWdodCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnY2FyMScpLmhlaWdodCAqIGNhcnNjYWxlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGNhclR5cGVzID0gWydjYXIxJywnY2FyMicsJ2NhcjMnLCdjYXI0J11cclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCoxLCBcclxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gMFxyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQtY2FySGVpZ2h0LHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGNhclR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhclR5cGVzLmxlbmd0aCldXHJcbiAgICAgICAgICAgICAgICB2YXIgY2FyID0gdGhpcy5jYXJzLmdldEZpcnN0RXhpc3RzKGZhbHNlLHRydWUseCx5LHR5cGUpXHJcbiAgICAgICAgICAgICAgICBjYXIuYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgICAgICAgICAgY2FyLnNjYWxlLnNldFRvKGNhcnNjYWxlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShjYXIpXHJcblxyXG4gICAgICAgICAgICAgICAgY2FyLnNsaWRlX3ggPSB0aGlzLmdhbWUucm5kLmludGVnZXJJblJhbmdlKDAsdGhpcy5nYW1lLndvcmxkLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgY2FyLmJvZHkudmVsb2NpdHkueCA9IDIwMFxyXG4gICAgICAgICAgICAgICAgY2FyLm91dE9mQm91bmRzS2lsbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIGNhci5jaGVja1dvcmxkQm91bmRzID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nTXlDbG91ZDogZnVuY3Rpb24oeCx5LGFuY2hvcl94LGFuY2hvcl95KXtcclxuXHJcbiAgICAgICAgdmFyIG15Y2xvdWRfeCA9IHggfHwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclhcclxuICAgICAgICB2YXIgbXljbG91ZF95ID0geSB8fCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC42NVxyXG4gICAgICAgIHZhciBhbmNob3JYID0gYW5jaG9yX3ggfHwgMC41XHJcbiAgICAgICAgdmFyIGFuY2hvclkgPSBhbmNob3JfeSB8fCAwLjVcclxuXHJcbiAgICAgICAgLy9hZGQgc3ByaXRlXHJcbiAgICAgICAgdGhpcy5teWNsb3VkID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUobXljbG91ZF94ICwgbXljbG91ZF95LCAnbXljbG91ZCcpXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuY2hvci5zZXRUbyhhbmNob3JYLCBhbmNob3JZKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5saWZlID0gM1xyXG4gICAgICAgIHRoaXMubXljbG91ZC5zcHJpdGVzY2FsZSA9IDAuNFxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyh0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpXHJcbiAgICAgICAgdmFyIHNpemUgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ215Y2xvdWQnKS53aWR0aC8xMDtcclxuXHJcbiAgICAgICAgLy9ydW4gYW5pbWF0aW9uXHJcbiAgICAgICAgLy8gdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbMSwgMiwgMywgNF0sIDEwLCB0cnVlKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLmFkZCgncnVuJywgWzUsIDQsIDUsIDYsIDcsIDZdLCAxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5hZGQoJ3N0YXRpYycsIFswLCAxLCAwLCAyLCAwLCAxLCAwLCAzXSwxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5hZGQoJ2Zyb3plbicsIFs4LCA4LCA4LCA4LCA4LCA5LCA4XSwxMCwgdHJ1ZSkgICBcclxuXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgnc3RhdGljJykgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMubXljbG91ZClcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkuc2V0U2l6ZShzaXplKjAuOCxzaXplKjAuOCxzaXplKjAuMSxzaXplKjAuMSlcclxuXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLnRvdWNoaW5nID0gZmFsc2VcclxuICAgICAgICB0aGlzLm15Y2xvdWQuaW5wdXRFbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5pc2ZyZWV6aW5nID0gZmFsc2VcclxuXHJcbiAgICAgICAgLy8gQ2xpY2sgbXljbG91ZCBmb3IgdW5mcmVlemluZ1xyXG4gICAgICAgIHRoaXMub25jbGlja0VtaXR0ZXIodGhpcy5teWNsb3VkKVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsIT09J3RyaWFsMicpe1xyXG4gICAgICAgICAgICB0aGlzLm15Y2xvdWRNb3ZlKClcclxuICAgICAgICAgICAgLy8gdGhpcy5teWNsb3VkLmN1cnJlbnRQb3NpdGlvbiA9IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG15Y2xvdWRNb3ZlOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgc2NhbGUgPSB0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGVcclxuXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmV2ZW50cy5vbklucHV0RG93bi5hZGQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkLnRvdWNoaW5nID0gdHJ1ZVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMubXljbG91ZC5ldmVudHMub25JbnB1dFVwLmFkZChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm15Y2xvdWQudG91Y2hpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vblVwLmFkZChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDBcclxuICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnBsYXkoJ3N0YXRpYycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5hZGRNb3ZlQ2FsbGJhY2soZnVuY3Rpb24ocG9pbnRlcix4LHksIGlzVGFwKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm15Y2xvdWQuaXNmcmVlemluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoeCA+IHRoaXMubXljbG91ZC54KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKCctJytzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyhzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQueCA9IHhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5hZGRNb3ZlQ2FsbGJhY2soZnVuY3Rpb24ocG9pbnRlcix4LHksIGlzVGFwKXtcclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLm15Y2xvdWQuaXNmcmVlemluZyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm15Y2xvdWQudG91Y2hpbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHggPiB0aGlzLm15Y2xvdWQueCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKHNjYWxlLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnggPSB4XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4ID4gdGhpcy5teWNsb3VkLnggKyB0aGlzLm15Y2xvdWQud2lkdGgvMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAyMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHggPCB0aGlzLm15Y2xvdWQueCAtIHRoaXMubXljbG91ZC53aWR0aC8yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyhzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS52ZWxvY2l0eS54ID0gLTIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5pbnB1dC5hZGRNb3ZlQ2FsbGJhY2soZnVuY3Rpb24ocG9pbnRlcix4LHksIGlzVGFwKXtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5nYW1lLmRldmljZS5kZXNrdG9wICYmICF0aGlzLm15Y2xvdWQuaXNmcmVlemluZyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZih4ID4gdGhpcy5teWNsb3VkLngpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5teWNsb3VkLnggPSB4XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICAgIC8vICAgICB9ZWxzZSBpZighdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wICYmICF0aGlzLm15Y2xvdWQuaXNmcmVlemluZyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5teWNsb3VkLnRvdWNoaW5nKXtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDBcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoeCA+IHRoaXMubXljbG91ZC54KXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKCctJytzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyhzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm15Y2xvdWQueCA9IHhcclxuXHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZih4ID4gdGhpcy5teWNsb3VkLnggKyB0aGlzLm15Y2xvdWQud2lkdGgvMil7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS52ZWxvY2l0eS54ID0gMjAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYoeCA8IHRoaXMubXljbG91ZC54IC0gdGhpcy5teWNsb3VkLndpZHRoLzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS52ZWxvY2l0eS54ID0gLTIwMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnBsYXkoJ3J1bicpICAgICBcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgLy8oZGVza3RvcCnpm7Lot5/okZfmu5HpvKDli5XvvIzkvYblj6rmnIPlnKjkuInlgIvkvY3nva7lgZznlZlcclxuICAgICAgICAvLyAgICAgLy8obW9iaWxlKeWPquacg+WcqOS4ieWAi+S9jee9ruWBnOeVme+8jOmZpOS6huaLluabs+Wklu+8jOS5n+WPr+m7nuieouW5leiuk+mbsuWLle+8jOm7nuW3puWQkeW3puS4gOagvO+8jOS+neatpOmhnuaOqFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHBvc2l0aW9uID0gdGhpcy5teWNsb3VkLmN1cnJlbnRQb3NpdGlvblxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHBvc2l0aW9uMSA9IHRoaXMuZ2FtZS53aWR0aCAqIDEvNFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHBvc2l0aW9uMiA9IHRoaXMuZ2FtZS53aWR0aCAqIDEvMlxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHBvc2l0aW9uMyA9IHRoaXMuZ2FtZS53aWR0aCAqIDMvNFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIGNhbm1vdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgLy91bml0IHN0ZXAgbWV0aG9kXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYoeD50aGlzLm15Y2xvdWQueCArIHRoaXMubXljbG91ZC53aWR0aCAqIHRoaXMubXljbG91ZC5zcHJpdGVzY2FsZSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICArK3Bvc2l0aW9uXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNhbm1vdmU9dHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH1lbHNlIGlmKHg8dGhpcy5teWNsb3VkLnggLSB0aGlzLm15Y2xvdWQud2lkdGggKiB0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIC0tcG9zaXRpb25cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgY2FubW92ZT10cnVlXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnN0b3AoKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuZnJhbWUgPSAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNhbm1vdmU9dHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYoY2FubW92ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgaWYocG9zaXRpb249PTApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubXljbG91ZC54ID0gcG9zaXRpb24yXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbj0wXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZihwb3NpdGlvbjw9LTEpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5teWNsb3VkLnggPSBwb3NpdGlvbjFcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uPS0xXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH0gZWxzZSBpZihwb3NpdGlvbj49MSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm15Y2xvdWQueCA9IHBvc2l0aW9uM1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb249MVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhwb3NpdGlvbikgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMubXljbG91ZC5jdXJyZW50UG9zaXRpb24gPSBwb3NpdGlvblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAvL21pbmltdW0gZGlzdGFuY2UgbWV0aG9kXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdmFyIGNhbm1vdmUgPSBmYWxzZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHZhciBkaXN0YW5jZTEgPSBNYXRoLmFicyh4LXBvc2l0aW9uMSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB2YXIgZGlzdGFuY2UyID0gTWF0aC5hYnMoeC1wb3NpdGlvbjIpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdmFyIGRpc3RhbmNlMyA9IE1hdGguYWJzKHgtcG9zaXRpb24zKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHZhciBtaW5kaXN0YW5jZSA9IE1hdGgubWluKGRpc3RhbmNlMSxkaXN0YW5jZTIsZGlzdGFuY2UzKVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpZih4ID50aGlzLm15Y2xvdWQueCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfSAgICBcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYodGhpcy5nYW1lLmRldmljZS5kZXNrdG9wfHwoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCAmJiAhaXNUYXAgJiYgdGhpcy5teWNsb3VkLnRvdWNoaW5nICkpe1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgY2FubW92ZSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfSBlbHNlIGlmKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3AgJiYgaXNUYXApIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGlmKHg8dGhpcy5teWNsb3VkLngpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2xlZnQnKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyaWdodCcpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGlmKGNhbm1vdmUpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBzd2l0Y2gobWluZGlzdGFuY2Upe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBkaXN0YW5jZTE6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5teWNsb3VkLnggPSBwb3NpdGlvbjFcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSBkaXN0YW5jZTI6XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5teWNsb3VkLnggPSBwb3NpdGlvbjJcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhayBcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgZGlzdGFuY2UzOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubXljbG91ZC54ID0gcG9zaXRpb24zXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfSx0aGlzKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2NlbmVzRmFjdG9yeTogZnVuY3Rpb24obGV2ZWwsbGV2ZWxfYXJnKXtcclxuXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kXHJcbiAgICAgICAgICAgIGlmKGxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJnID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgwLDAsJ2ZpcnN0YmcnKVxyXG4gICAgICAgICAgICAgICAgYmcud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICAgICAgICAgIGJnLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHRcclxuXHJcbiAgICAgICAgICAgICAgICAvL2Nvcm5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29ybkluaXRpYWxpemUoKS8vbGVmdCxtaWRkbGUscmlnaHRcclxuICAgICAgICAgICAgICAgIC8vY293XHJcbiAgICAgICAgICAgICAgICB2YXIgY293ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLndpZHRoICogMC4xLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC43NSwnY293JylcclxuICAgICAgICAgICAgICAgIGNvdy5zY2FsZS5zZXRUbygwLjYsMC42KVxyXG4gICAgICAgICAgICAgICAgY293LmFuY2hvci5zZXRUbygwLjUsMC41KVxyXG4gICAgICAgICAgICAgICAgdmFyIGNvd0FuaW0gPSBjb3cuYW5pbWF0aW9ucy5hZGQoJ2NvdycpO1xyXG4gICAgICAgICAgICAgICAgY293QW5pbS5wbGF5KDEwLHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGxldmVsX2FyZz09PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlZFNjZW5lcygpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBmaXJzdCBtYXNrIGZvciB0cmlhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpYWxtYXNrMSA9IHRoaXMuc2V0dGluZ21hc2soJ3JnYmEoMCwwLDAsMCknKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxldmVsPT09J2xldmVsMicpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCdzZWNvbmRiZycpXHJcbiAgICAgICAgICAgICAgICBiZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgICAgICAgICAgYmcuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29ybkluaXRpYWxpemUoKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKGxldmVsX2FyZz09PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlZFNjZW5lcygpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IHRoZSBmaXJzdCBtYXNrIGZvciB0cmlhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpYWxtYXNrMSA9IHRoaXMuc2V0dGluZ21hc2soJ3JnYmEoMCwwLDAsMCknKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxldmVsPT09J2xldmVsMycpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJnID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgwLDAsJ3RoaXJkYmcnKVxyXG4gICAgICAgICAgICAgICAgYmcud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICAgICAgICAgIGJnLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHRcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRJbml0aWFsaXplKClcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyUnVubmluZygpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlZFNjZW5lcygpXHJcbiAgICAgICAgICAgICAgICAvLyBpZihsZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhdGljU2NlbmVzKClcclxuICAgICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0ZWRTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxldmVsPT09J3RyaWFsMScpe1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZidcclxuICAgICAgICAgICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCdmaXJzdGJnJylcclxuICAgICAgICAgICAgICAgIGJnLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgICAgICAgICBiZy5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JuSW5pdGlhbGl6ZSgpLy9sZWZ0LG1pZGRsZSxyaWdodFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRpY1NjZW5lcygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYXJ0bWFrZXIoWydyZWRoZWFydCcsJ3JlZGhlYXJ0JywncmVkaGVhcnQnXSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL3N0YXRpYyBjb3dcclxuICAgICAgICAgICAgICAgIHZhciBjb3cgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjEsIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjc1LCdjb3cnKVxyXG4gICAgICAgICAgICAgICAgY293LnNjYWxlLnNldFRvKDAuNiwwLjYpXHJcbiAgICAgICAgICAgICAgICBjb3cuYW5jaG9yLnNldFRvKDAuNSwwLjUpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nbWFzaygpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlscyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlscy5lbmFibGVCb2R5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsY3J1c2hlcyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ015Q2xvdWQodGhpcy5nYW1lLndvcmxkLndpZHRoICogMC44NSx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuNilcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQqMSwgdGhpcy5oYWlsaW5nLCB0aGlzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmxvb3AoUGhhc2VyLlRpbWVyLlNFQ09ORCo1LCB0aGlzLmhhaWxpbmcsIHRoaXMpXHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobGV2ZWw9PT0ndHJpYWwyJyl7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydG1ha2VyKFsncmVkaGVhcnQnLCdyZWRoZWFydCcsJ3JlZGhlYXJ0J10pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdtYXNrKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxzLmVuYWJsZUJvZHkgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxjcnVzaGVzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9hZGQgc3RhdGljIG15Y2xvdWRcclxuICAgICAgICAgICAgICAgIHZhciBteWNsb3VkX3ggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjg1XHJcbiAgICAgICAgICAgICAgICB2YXIgbXljbG91ZF95ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuNjVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ015Q2xvdWQobXljbG91ZF94LG15Y2xvdWRfeSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WGsOmbueiQveWcqOeJueWumuS9jee9ru+8jOWPquiQveS4gOasoVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nKCdzbWFsbCcsdGhpcy5iaWdjbG91ZC54KVxyXG5cclxuICAgICAgICAgICAgICAgIC8v5pS+546J57Gz5Zyo5q2j5LiL5pa5XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcm5zID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcm5zLmVuYWJsZUJvZHkgPSB0cnVlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvcm5TaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdjb3JuJykud2lkdGgvNFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvcm5feCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYXHJcbiAgICAgICAgICAgICAgICB2YXIgY29ybl95ID0gdGhpcy5nYW1lLmhlaWdodCAqIDAuNzg1XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvcm4gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjb3JuX3ggLCBjb3JuX3ksICdjb3JuJylcclxuICAgICAgICAgICAgICAgIGNvcm4uZnJhbWUgPSAwXHJcbiAgICAgICAgICAgICAgICBjb3JuLnNjYWxlLnNldFRvKDAuNSwwLjUpXHJcbiAgICAgICAgICAgICAgICBjb3JuLmFuY2hvci5zZXRUbygwLjUsMClcclxuICAgICAgICAgICAgICAgIGNvcm4ubGlmZSA9IDNcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ybnMuYWRkKGNvcm4pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKGNvcm4pXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmdoYWlsczogZnVuY3Rpb24oKXtcclxuICAgICAgLy9jcmVhdGUgZ3JvdXAgZm9yIGhhaWxcclxuICAgICAgICB0aGlzLmhhaWxzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgdGhpcy5oYWlscy5lbmFibGVCb2R5ID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuaGFpbGNydXNoZXMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuXHJcbiAgICAgICAgLy9jcmVhdGUgaGFpbGluZyB0aW1lclxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgIHZhciBkZWxheVRvZmlyZSA9IFBoYXNlci5UaW1lci5TRUNPTkQqMS4zXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgdmFyIGRlbGF5VG9maXJlID0gUGhhc2VyLlRpbWVyLlNFQ09ORCoxICAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgdmFyIGRlbGF5VG9maXJlID0gUGhhc2VyLlRpbWVyLlNFQ09ORCowLjUgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKGZhbHNlKVxyXG4gICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyLmxvb3AoZGVsYXlUb2ZpcmUsIHRoaXMuaGFpbGluZywgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgYW5pbWF0ZWRTY2VuZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9kYXJrc2t5IGFuZCBjbG91ZCBhbmltYXRpb25cclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDEnKXtcclxuICAgICAgICAgICAgdmFyIHNreSA9ICdkYXJrc2t5MSdcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG4gICAgICAgICAgICB2YXIgc2t5ID0gJ2Rhcmtza3kyJ1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgIHZhciBza3kgPSAnZGFya3NreTMnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZGFya3NreSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwtMTAwLHNreSlcclxuICAgICAgICBkYXJrc2t5LndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgZGFya3NreS5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC4zNVxyXG5cclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDEgPSB0aGlzLmdhbWUuYWRkLmltYWdlKC0xNTAsMCwnYmxhY2tjbG91ZDEnKSAgICAgIFxyXG4gICAgICAgIHZhciBibGFja2Nsb3VkMUltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmxhY2tjbG91ZDEnKVxyXG4gICAgICAgIGJsYWNrY2xvdWQxLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC41XHJcbiAgICAgICAgYmxhY2tjbG91ZDEuaGVpZ2h0ID0gYmxhY2tjbG91ZDEud2lkdGggLyBibGFja2Nsb3VkMUltZy53aWR0aCAqIGJsYWNrY2xvdWQxSW1nLmhlaWdodFxyXG5cclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDMwMCwwLCdibGFja2Nsb3VkMicpICAgICAgICBcclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDJJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JsYWNrY2xvdWQyJylcclxuICAgICAgICBibGFja2Nsb3VkMi53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNjVcclxuICAgICAgICBibGFja2Nsb3VkMi5oZWlnaHQgPSBibGFja2Nsb3VkMi53aWR0aCAvIGJsYWNrY2xvdWQySW1nLndpZHRoICogYmxhY2tjbG91ZDJJbWcuaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciBjbG91ZCA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoLTMwLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvMiwnY2xvdWQnKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGNsb3VkSW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdjbG91ZCcpXHJcbiAgICAgICAgY2xvdWQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAxLjJcclxuICAgICAgICBjbG91ZC5oZWlnaHQgPSBjbG91ZC53aWR0aCAvIGNsb3VkSW1nLndpZHRoICogY2xvdWRJbWcuaGVpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCAtMjAwLCdiaWdjbG91ZCcpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC5hbmNob3Iuc2V0VG8oMC41LDApICAgICAgICBcclxuICAgICAgICB2YXIgYmlnY2xvdWRJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JpZ2Nsb3VkJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoIC8gYmlnY2xvdWRJbWcud2lkdGggKiBiaWdjbG91ZEltZy5oZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIGRhcmtza3lUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oZGFya3NreSkudG8oe3k6IDB9LCAxMDAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5JbiwgdHJ1ZSlcclxuICAgICAgICBkYXJrc2t5VHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDFUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oYmxhY2tjbG91ZDEpLnRvKHt4OiAtNTB9LCA1MDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAxMDAwKVxyXG4gICAgICAgIGJsYWNrY2xvdWQxVHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDJUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4oYmxhY2tjbG91ZDIpLnRvKHt4OiAyMDB9LCA1MDAsIFBoYXNlci5FYXNpbmcuTGluZWFyLkluLCB0cnVlLCAxMjAwKVxyXG4gICAgICAgIGJsYWNrY2xvdWQyVHdlZW4uc3RhcnQoKVxyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLllwb3NpdGlvbiA9IDEwXHJcbiAgICAgICAgdmFyIGJpZ2Nsb3VkVHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMuYmlnY2xvdWQpLnRvKHt5OiB0aGlzLmJpZ2Nsb3VkLllwb3NpdGlvbn0sIDcwMCwgUGhhc2VyLkVhc2luZy5TaW51c29pZGFsLkluT3V0LCB0cnVlLCAxNzAwKVxyXG4gICAgICAgIGJpZ2Nsb3VkVHdlZW4uc3RhcnQoKSAgICAgIFxyXG4gICAgICAgIGJpZ2Nsb3VkVHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5vblN0YXJ0LCB0aGlzKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhdGljU2NlbmVzOiBmdW5jdGlvbigpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgIHZhciBza3kgPSAnZGFya3NreTEnXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgdmFyIHNreSA9ICdkYXJrc2t5MidcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG4gICAgICAgICAgICB2YXIgc2t5ID0gJ2Rhcmtza3kzJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhcmtza3kgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsMCxza3kpXHJcbiAgICAgICAgZGFya3NreS53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgIGRhcmtza3kuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuMzVcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQxID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgtNTAsMCwnYmxhY2tjbG91ZDEnKSAgICAgIFxyXG4gICAgICAgIHZhciBibGFja2Nsb3VkMUltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmxhY2tjbG91ZDEnKVxyXG4gICAgICAgIGJsYWNrY2xvdWQxLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC41XHJcbiAgICAgICAgYmxhY2tjbG91ZDEuaGVpZ2h0ID0gYmxhY2tjbG91ZDEud2lkdGggLyBibGFja2Nsb3VkMUltZy53aWR0aCAqIGJsYWNrY2xvdWQxSW1nLmhlaWdodFxyXG5cclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDIwMCwwLCdibGFja2Nsb3VkMicpICAgICAgICBcclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDJJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JsYWNrY2xvdWQyJylcclxuICAgICAgICBibGFja2Nsb3VkMi53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNjVcclxuICAgICAgICBibGFja2Nsb3VkMi5oZWlnaHQgPSBibGFja2Nsb3VkMi53aWR0aCAvIGJsYWNrY2xvdWQySW1nLndpZHRoICogYmxhY2tjbG91ZDJJbWcuaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciBjbG91ZCA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoLTMwLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvMiwnY2xvdWQnKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGNsb3VkSW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdjbG91ZCcpXHJcbiAgICAgICAgY2xvdWQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAxLjJcclxuICAgICAgICBjbG91ZC5oZWlnaHQgPSBjbG91ZC53aWR0aCAvIGNsb3VkSW1nLndpZHRoICogY2xvdWRJbWcuaGVpZ2h0XHJcblxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCAxMCwnYmlnY2xvdWQnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQuYW5jaG9yLnNldFRvKDAuNSwwKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGJpZ2Nsb3VkSW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdiaWdjbG91ZCcpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aCAvIGJpZ2Nsb3VkSW1nLndpZHRoICogYmlnY2xvdWRJbWcuaGVpZ2h0XHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuYmlnY2xvdWQud2lkdGggKiAwLjcsIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ICogMC41NSwnYmlnY2xvdWRfYW5nZXIxJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS5hbmNob3Iuc2V0VG8oMC41LDAuNSkgICBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS53aWR0aCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuYmlnY2xvdWQud2lkdGggKiAwLjE1LCB0aGlzLmJpZ2Nsb3VkLmhlaWdodCAqIDAuOCwnYmlnY2xvdWRfYW5nZXIyJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi5hbmNob3Iuc2V0VG8oMC41LDAuNSkgICBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi53aWR0aCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5vblN0YXJ0KClcclxuICAgIH0sXHJcblxyXG4gICAgc2V0dGluZ21hc2s6IGZ1bmN0aW9uKGNvbG9yKSB7XHJcblxyXG4gICAgICAgIHZhciBmaWxsID0gY29sb3J8fCdyZ2JhKDAsMCwwLDAuNiknXHJcbiAgICAgICAgdmFyIGJtZCA9IHRoaXMuZ2FtZS5tYWtlLmJpdG1hcERhdGEodGhpcy5nYW1lLndvcmxkLndpZHRoLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpXHJcbiAgICAgICAgYm1kLmFkZFRvV29ybGQoKVxyXG4gICAgICAgIGJtZC5yZWN0KDAsMCx0aGlzLmdhbWUud29ybGQud2lkdGgsdGhpcy5nYW1lLndvcmxkLmhlaWdodCxmaWxsKVxyXG4gICAgICAgIGJtZC5kaXJ0eSA9IGZhbHNlXHJcblxyXG4gICAgICAgIHJldHVybiBibWRcclxuICAgIH0sXHJcblxyXG4gICAgc2V0dGluZ3Rhc2tXaW5kb3c6IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICAgICB2YXIgdGFza3dpbmRvd0dyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcblxyXG4gICAgICAgIC8vdXNpbmcgZ3JhcGhpY3NcclxuICAgICAgICB2YXIgd2luZG93ID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLDApXHJcbiAgICAgICAgd2luZG93LmFsaWduSW4od2luZG93LFBoYXNlci5DRU5URVIsdGhpcy5nYW1lLndvcmxkLndpZHRoKjAuMSx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuMTUpXHJcbiAgICAgICAgd2luZG93LmJlZ2luRmlsbCgweEZGRkZGRik7XHJcbiAgICAgICAgd2luZG93LmRyYXdSb3VuZGVkUmVjdCgwLDAsdGhpcy5nYW1lLndvcmxkLndpZHRoKjAuOCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuNylcclxuICAgICAgICB3aW5kb3cuZW5kRmlsbCgpXHJcblxyXG4gICAgICAgIHRhc2t3aW5kb3dHcm91cC5hZGQod2luZG93KVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICB2YXIgaW1nTmFtZSA9ICd3YW5nJ1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwxLTEnKXtcclxuICAgICAgICAgICAgICAgIHZhciBidG52YWx1ZSA9ICfpgYrmiLLplovlp4snXHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBcIuato+WcqOeOieexs+eUsOijoeW/meeijOeahOeOi+eIuueIuu+8jFxcbuWNu+aUtuWIsOS6huWGsOmbueitpuWgse+8jOaDs+i1t+mBjuWOu1xcbuabvuacieWGsOmbuemAoOaIkOi+suaQjeeahOS+i+WtkO+8jOiLpVxcbuaykuacieWPiuaZgumYu+atouWGsOmbueiQveS4i++8jOS7lueahFxcbuW/g+ihgOWwseimgeazoea5r+S6hi4uLi4uLlwiXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsX2FyZz09PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn6YCy5YWl5LiL5LiA6ZecJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLjgIzorJ3orJ3kvaDmi6/mlZHkuobmiJHnmoTnjonnsbPnlLDvvIFcXG7luIzmnJvkvaDnubznuozluavliqnmm7TlpJrkurrvvIHjgI1cIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMi0xJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nTmFtZSA9ICdwZW9wbGUxJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnZhbHVlID0gJ+mBiuaIsumWi+WniydcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IFwi6Zui6ZaL5LqG546J57Gz55Sw77yM6Zuy5py15Lq65L6G5Yiw5LqGXFxu57mB6I+v55qE5Y+w5YyX5biC77yM6Lev5LiK6LuK5rC06aas6b6NXFxu77yM5rKS5oOz5Yiw6YGO5LqG5Lit5Y2I77yM5pm05pyX55qE5aSpXFxu5rCj6ZaL5aeL6K6K57OfLi4uLi4uXCJcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J3BsYXknKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdOYW1lID0gJ3Blb3BsZTEnXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn6YCy5YWl5LiL5LiA6ZecJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLjgIzorJ3orJ3kvaDkv53orbfkuobmiJHlgJHnmoTnlJ/lkb3lrolcXG7lhajvvIHkuI3pgY7liY3pnaLpgoTmnInkurrkuZ/pnIDopoHkvaBcXG7luavlv5kuLi4uLi7jgI1cIiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J2FsYXJtJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nTmFtZSA9ICdhbGFybWNsb3VkJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnZhbHVlID0gJ+aykuWVj+mhjCdcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IFwi5aSn6YeP5Yaw6Zu55bCH5b+r6YCf6JC95LiL77yBXFxu6KuL5rOo5oSP77yBXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J2FsYXJtJyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nTmFtZSA9ICdhbGFybWNsb3VkJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnZhbHVlID0gJ+aykuWVj+mhjCdcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IFwi5aSn6YeP5Yaw6Zu55bCH5b+r6YCf6JC95LiL77yBXFxu6KuL5rOo5oSP77yBXCJcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ05hbWUgPSAncG9saWNlJ1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnZhbHVlID0gJ+mBiuaIsumWi+WniydcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IFwi5bmr5Yqp5Y+w5YyX5biC5bqm6YGO5Y2x5qmf5b6M77yM6Zuy5py1XFxu5Lq65L6G5Yiw5LqG6auY6YCf5YWs6Lev77yM5rCj6LGh5Zau5L2NXFxu5Y2756qB54S255m85biD5Yaw6Zu56aCQ6K2m77yB6Iul5Yaw6Zu5XFxu6JC95Zyo6auY6YCf5YWs6Lev6YCg5oiQ6LuK6Lyb5omT5ruR5bCxXFxu5LiN5aW95LqGLi4uLi4uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJhbm5lciA9ICh0aGlzLmxldmVsX2FyZz09PSdwbGF5Jyk/J3Bhc3NlZGJhbm5lcic6J2FsYXJtYmFubmVyJ1xyXG4gICAgICAgIHZhciB3aW5kb3dfYmFubmVyID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsd2luZG93LnksYmFubmVyKVxyXG4gICAgICAgIHdpbmRvd19iYW5uZXIuc2NhbGUuc2V0VG8oMC41KVxyXG4gICAgICAgIHdpbmRvd19iYW5uZXIuYW5jaG9yLnNldFRvKDAuNSlcclxuICAgICAgICB2YXIgYmFubmVyQW5pbSA9IHdpbmRvd19iYW5uZXIuYW5pbWF0aW9ucy5hZGQod2luZG93X2Jhbm5lcik7XHJcbiAgICAgICAgYmFubmVyQW5pbS5wbGF5KDEwLHRydWUpXHJcbiAgICAgICAgdGFza3dpbmRvd0dyb3VwLmFkZCh3aW5kb3dfYmFubmVyKVxyXG5cclxuICAgICAgICB2YXIgdW5wYXVzZWJ0biA9IHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgYnRudmFsdWUsIGZhbHNlKSBcclxuICAgICAgICB0aGlzLnVucGF1c2VidG4gPSB1bnBhdXNlYnRuXHJcbiAgICAgICAgdGFza3dpbmRvd0dyb3VwLmFkZCh1bnBhdXNlYnRuKVxyXG4gICAgICAgIHRhc2t3aW5kb3dHcm91cC5hZGQodW5wYXVzZWJ0bi5idXR0b25fdHh0KVxyXG5cclxuICAgICAgICB2YXIgcGVvcGxlU2l6ZSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZShpbWdOYW1lKS5oZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0geyBmb250OiBcIjIwcHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiIzAwMFwiLCBcclxuICAgICAgICAgICAgICAgICAgICBib3VuZHNBbGlnbkg6IFwiY2VudGVyXCIsIGJvdW5kc0FsaWduVjogXCJtaWRkbGVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgd29yZFdyYXA6IHRydWUsIHdvcmRXcmFwV2lkdGg6IHdpbmRvdy53aWR0aCowLjh9ICAgICAgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0nYWxhcm0nKXtcclxuICAgICAgICAgICAgdmFyIHBlb3BsZSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdW5wYXVzZWJ0bi55LXBlb3BsZVNpemUqMC4zLGltZ05hbWUpXHJcbiAgICAgICAgICAgIHBlb3BsZS5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgICAgICAgICBwZW9wbGUuc2NhbGUuc2V0VG8oMC41KVxyXG5cclxuICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHBlb3BsZS55LXBlb3BsZS5oZWlnaHQvMiAsd29yZHMsc3R5bGUpXHJcbiAgICAgICAgICAgIHRleHQuYW5jaG9yLnNldFRvKDAuNSwxKVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIHBlb3BsZSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdW5wYXVzZWJ0bi55LXBlb3BsZVNpemUqMC40LGltZ05hbWUpXHJcbiAgICAgICAgICAgIHBlb3BsZS5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgICAgICAgICBwZW9wbGUuc2NhbGUuc2V0VG8oMC41KVxyXG5cclxuICAgICAgICAgICAgdmFyIHRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHBlb3BsZS55LXBlb3BsZS5oZWlnaHQvMiAsd29yZHMsc3R5bGUpXHJcbiAgICAgICAgICAgIHRleHQuYW5jaG9yLnNldFRvKDAuNSwxKVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0YXNrd2luZG93R3JvdXAuYWRkKHRleHQpICBcclxuICAgICAgICB0YXNrd2luZG93R3JvdXAuYWRkKHBlb3BsZSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhc2t3aW5kb3dHcm91cFxyXG4gICAgfSxcclxuXHJcbiAgICBvblN0YXJ0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vYmlnIGNsb3VkIGlzIGFuZ3J5XHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuYmlnY2xvdWQud2lkdGggKiAwLjcsIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ICogMC41NSwnYmlnY2xvdWRfYW5nZXIxJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS5hbmNob3Iuc2V0VG8oMC41LDAuNSkgICBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS53aWR0aCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMS5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuYmlnY2xvdWQud2lkdGggKiAwLjE1LCB0aGlzLmJpZ2Nsb3VkLmhlaWdodCAqIDAuOCwnYmlnY2xvdWRfYW5nZXIyJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi5hbmNob3Iuc2V0VG8oMC41LDAuNSkgICBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi53aWR0aCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjBcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMi5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwICAgICBcclxuXHJcbiAgICAgICAgLy9oZWFydCBzZXR0aW5nXHJcbiAgICAgICAgdGhpcy5teWNsb3VkTGlmZUhhbmRsZXIoMylcclxuXHJcbiAgICAgICAgLy90aW1lIHNldHRpbmdcclxuICAgICAgICB0aGlzLnBhc3NlZFRpbWVyKClcclxuXHJcbiAgICAgICAgLy/lm6DngrrlnJblsaTnmoTpl5zkv4LvvIxtYXNr6KaB6Kit5a6a5Zyoc2V0dGluZ015Q2xvdWQoKeS5i+WJjSxUaW1lcuS5i+W+jFxyXG4gICAgICAgIHRoaXMudHJpYWxtYXNrMiA9IHRoaXMuc2V0dGluZ21hc2soJ3JnYmEoMCwwLDAsMCknKVxyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdNeUNsb3VkKClcclxuXHJcbiAgICAgICAgLy/nlKjkvobnmbzlsITlhrDlh43ni4DmhYvmmYLpu57mk4rnmoTnoo7niYdcclxuICAgICAgICB0aGlzLm15Y2xvdWRFbWl0dGVyID0gdGhpcy5lbWl0dGVyR2VuZXJhdG9yKClcclxuICAgIFxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J3BsYXknKXtcclxuICAgICAgICAgICAgdGhpcy5vblBsYXkoKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL3Rhc2t3aW5kb3cgcG9wcyB1cFxyXG4gICAgICAgICAgICB0aGlzLmdhbWUucGF1c2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgdGhpcy50YXNrV2luZG93R3JvdXAgPSB0aGlzLnNldHRpbmd0YXNrV2luZG93KClcclxuICAgICAgICAgICAgdGhpcy50YXNrV2luZG93bGlzdGVuZXIgPSB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnVucGF1c2UsdGhpcywwLCd0YXNrV2luZG93JylcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB1bnBhdXNlOiBmdW5jdGlvbihldmVudCl7XHJcblxyXG4gICAgICAgIHZhciB3aW5kb3cgPSBhcmd1bWVudHNbMl1cclxuICAgICAgICB2YXIgYnRuSXNDbGlja2VkID0gZmFsc2VcclxuICAgICAgICBcclxuICAgICAgICBpZih3aW5kb3c9PT0ndGFza1dpbmRvdyd8fHdpbmRvdz09PSdwYXNzZWRXaW5kb3cnfHx3aW5kb3c9PT0nYWxhcm1XaW5kb3cnKXtcclxuICAgICAgICAgICAgaWYoZXZlbnQueCA+IHRoaXMudW5wYXVzZWJ0bi54IC0gdGhpcy51bnBhdXNlYnRuLndpZHRoLzIgJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LnggPCB0aGlzLnVucGF1c2VidG4ueCArIHRoaXMudW5wYXVzZWJ0bi53aWR0aC8yICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC55ID4gdGhpcy51bnBhdXNlYnRuLnkgLSB0aGlzLnVucGF1c2VidG4uaGVpZ2h0LzIgJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LnkgPCB0aGlzLnVucGF1c2VidG4ueSArIHRoaXMudW5wYXVzZWJ0bi5oZWlnaHQvMil7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuSXNDbGlja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmdhbWUucGF1c2VkICYmIGJ0bklzQ2xpY2tlZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93KVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sZXZlbF9hcmcpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBhdXNlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2suY2xzKClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYod2luZG93PT09J3Rhc2tXaW5kb3cnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2FyZyA9ICdwbGF5J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhc2tXaW5kb3dHcm91cC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLnJlbW92ZUFsbCgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblBsYXkoKSAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3c9PT0ncGFzc2VkV2luZG93Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXNzZWRXaW5kb3dHcm91cC5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ2xldmVsMicsICd0cmlhbDItMScpXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/nrYnlvoXonqLluZXmrbjmraNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ2xldmVsMycpICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYod2luZG93PT09J2FsYXJtV2luZG93Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGFybVdpbmRvd0dyb3VwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24ucmVtb3ZlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5wYXVzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nQWxhcm1QZXJpb2QucGF1c2UoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmhhaWxpbmdTdG9ybVRpbWVyLnBhdXNlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1N0b3JtVGltZXIucmVzdW1lKCkgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1N0b3JtVGltZXIuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwYXNzZWRUaW1lcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgY291bnRlciA9IDMwXHJcbiAgICAgICAgdmFyIHN0eWxlMSA9IHsgZm9udDogXCJib2xkIDIycHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiI2ZmZmZmZlwiLCBhbGlnbjogXCJsZWZ0XCIgfVxyXG4gICAgICAgIHZhciB0ZXh0MSA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQud2lkdGgqMC41NSwgdGhpcy5oZWFydDMueSwgJ+WJqemkmOaZgumWkyA6ICcsIHN0eWxlMSlcclxuICAgICAgICB0ZXh0MS5hbmNob3Iuc2V0VG8oMCwgMClcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlMiA9IHsgZm9udDogXCJib2xkIDUwcHggQXJpYWxcIiwgZmlsbDogXCIjRkZBQTMzXCIsIGFsaWduOiBcImNlbnRlclwiIH1cclxuICAgICAgICB2YXIgdGV4dDIgPSB0aGlzLmdhbWUuYWRkLnRleHQodGV4dDEueCArIHRleHQxLndpZHRoKjEuMjUsIHRoaXMuaGVhcnQzLnksIGNvdW50ZXIsIHN0eWxlMilcclxuICAgICAgICB0ZXh0Mi5hbmNob3Iuc2V0VG8oMC41LCAwLjI1KVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZShmYWxzZSlcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lVGltZXIubG9vcChQaGFzZXIuVGltZXIuU0VDT05ELCBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgaWYoY291bnRlcj09PTApe1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBhdXNlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NlZFdpbmRvd0dyb3VwID0gdGhpcy5zZXR0aW5ndGFza1dpbmRvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy51bnBhdXNlLHRoaXMsMCwncGFzc2VkV2luZG93JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG5leHRsZXZlbD0nbGV2ZWwyJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGxheScsIHRydWUsIGZhbHNlLCBuZXh0bGV2ZWwsICd0cmlhbDItMScpXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBhdXNlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NlZFdpbmRvd0dyb3VwID0gdGhpcy5zZXR0aW5ndGFza1dpbmRvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy51bnBhdXNlLHRoaXMsMCwncGFzc2VkV2luZG93JykgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbmV4dGxldmVsPSdsZXZlbDMnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5JywgdHJ1ZSwgZmFsc2UsIG5leHRsZXZlbCwgJ3BsYXknKVxyXG5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g57WQ5bC+5YuV55WrXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRleHQyLnNldFRleHQoLS1jb3VudGVyKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lVGltZXIuc3RhcnQoKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgb25QbGF5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0dGluZ2hhaWxzKClcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMid8fHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdBbGFybSgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxNb2RlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICB0dXRvcmlhbE1vZGU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBteWNsb3VkWCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuODVcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwxLTEnKXtcclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLlnKgg5pmCIOmWkyDlhacg5L2/IOeUqCDmiYsg5oyHIOaLliDmm7Mg56e7IOWLlSDpm7Ig5py1IFwiLFxyXG4gICAgICAgICAgICAgICAgXCLpmLIg5q2iIOWGsCDpm7kg6JC9IOS4iyBfXCJcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmlhbG1hc2syLmZpbGwoMCwwLDAsMC42KVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwxLTInKXtcclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLoi6Ug5ryPIOaOpSDvvIwg5YawIOmbuSDokL0g5YWlIOeOiSDnsbMg55SwIO+8jCDlsLEg5pyDIFwiLFxyXG4gICAgICAgICAgICAgICAgXCLmkI0g5aSxIOS4gCDpoYYg5oSbIOW/gyDvvIwg5oSbIOW/gyDmrbgg6Zu2ID0g5oyRIOaIsFwiLFxyXG4gICAgICAgICAgICAgICAgXCLlpLEg5pWXICFcIlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWFsbWFzazIuY2xzKClcclxuICAgICAgICAgICAgdGhpcy50cmlhbG1hc2sxLmZpbGwoMCwwLDAsMC42KVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpZmUgPSAzXHJcbiAgICAgICAgICAgIC8vdHdpbmtsaW5nIGhlYXJ0c1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMubG9vcChQaGFzZXIuVGltZXIuU0VDT05EKjAuNSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKGxpZmU9PT0zKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3bGlmZSA9IDJcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGxpZmU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3bGlmZSA9IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpZmUgPSBuZXdsaWZlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWRMaWZlSGFuZGxlcihuZXdsaWZlKVxyXG4gICAgICAgICAgICB9LCB0aGlzLGxpZmUpXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMi0xJyl7XHJcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IFtcclxuICAgICAgICAgICAgICAgIFwi5o6lIOS9jyDlpKcg5YawIOmbuSDmnIMg6KKrIOWGsCDlh40g77yMIOiriyDpgKMg57qMIOm7niBcIixcclxuICAgICAgICAgICAgICAgIFwi5pOKIOS+hiDohKsg5ZuwICEgX1wiXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpYWxtYXNrMi5maWxsKDAsMCwwLDAuNilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheVBhdXNlZCgpICAgXHJcblxyXG4gICAgICAgIHZhciBteWNsb3VkbW92aW5nID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm15Y2xvdWQpLnRvKHt4OiBteWNsb3VkWH0sIDUwMCwgUGhhc2VyLkVhc2luZy5MaW5lYXIuSW4sIHRydWUpXHJcbiAgICAgICAgbXljbG91ZG1vdmluZy5vbkNvbXBsZXRlLmFkZCh0aGlzLm15Y2xvdWRUcmlhbERpYWxvZ3VlLHRoaXMsMCx3b3JkcylcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgaGFpbGluZ0FsYXJtOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvL3N0b3JtIGRlbGF5XHJcbiAgICAgICAgdmFyIGRlbGF5VG9maXJlID0gKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyk/UGhhc2VyLlRpbWVyLlNFQ09ORCowLjM6UGhhc2VyLlRpbWVyLlNFQ09ORCowLjVcclxuXHJcbiAgICAgICAgdmFyIGFsYXJtUGVyaW9kID0gKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyk/UGhhc2VyLlRpbWVyLlNFQ09ORCoxMDpQaGFzZXIuVGltZXIuU0VDT05EKjE1XHJcblxyXG4gICAgICAgIC8v5aSa5LmF5LiA5qyhQWxhcm3nmoR0aW1lclxyXG4gICAgICAgIHRoaXMuaGFpbGluZ0FsYXJtUGVyaW9kID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKGZhbHNlKVxyXG4gICAgICAgIC8v57WmQWxhcm3mjonlhrDpm7nnmoR0aW1lclxyXG4gICAgICAgIHRoaXMuaGFpbGluZ1N0b3JtVGltZXIgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lci5sb29wKGRlbGF5VG9maXJlLCB0aGlzLmhhaWxpbmcsdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5oYWlsaW5nQWxhcm1QZXJpb2QubG9vcChhbGFybVBlcmlvZCwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwyJyl7XHJcbiAgICAgICAgICAgICAgICAvL+WPquWKoOW/q++8jOS4jeWPq3Rhc2t3aW5kb3flh7rkvoZcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyLnBhdXNlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ0FsYXJtUGVyaW9kLnBhdXNlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1N0b3JtVGltZXIuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2FyZyA9ICdhbGFybSdcclxuXHJcbiAgICAgICAgICAgICAgICAvL+WPq3Rhc2t3aW5kb3flh7rkvoZcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wYXVzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxhcm1XaW5kb3dHcm91cCA9IHRoaXMuc2V0dGluZ3Rhc2tXaW5kb3coKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy51bnBhdXNlLHRoaXMsMCwnYWxhcm1XaW5kb3cnKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vcGF1c2UgYWZ0ZXIgNSBzZWNvbmRzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQqNSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1N0b3JtVGltZXIucGF1c2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ0FsYXJtUGVyaW9kLnJlc3VtZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nVGltZXIucmVzdW1lKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXZlbF9hcmfmlLnlm55wbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9hcmcgPSAncGxheSdcclxuICAgICAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhaWxpbmdBbGFybVBlcmlvZC5zdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIG15Y2xvdWRUcmlhbERpYWxvZ3VlOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgd29yZHMgPSBhcmd1bWVudHNbMl1cclxuXHJcbiAgICAgICAgdmFyIGRpYWxvZ3VlID0gdGhpcy5zZXR0aW5nRGlhbG9ndWUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMubXljbG91ZC55IC0gdGhpcy5teWNsb3VkLmhlaWdodCoxLjIpXHJcbiAgICAgICAgZGlhbG9ndWUuY29udGVudCA9IHdvcmRzXHJcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUgPSB7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjMDAwXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnR5cGV3cml0ZXIoZGlhbG9ndWUuaW1nLnggLSAoZGlhbG9ndWUuaW1nLndpZHRoKjAuOCkvMixkaWFsb2d1ZS5pbWcueS0oZGlhbG9ndWUuaW1nLmhlaWdodCowLjgpLzIsIGRpYWxvZ3VlKVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSd0cmlhbDEtMicpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9IHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgJ+aykuWVj+mhjCEnLCAwLCBmYWxzZSkgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL0ZvciB0cmlhbFxyXG4gICAgcGxheVBhdXNlZDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm15Y2xvdWQuaW5wdXRFbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5nYW1lVGltZXIucGF1c2UoKVxyXG4gICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyLnBhdXNlKClcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHBsYXlSZXN1bWVkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8v5Zug54K6dHJpYWwxLTLkuI3mnIPoh6rli5Xop6PpmaTmmqvlgZzvvIzpnIDopoHmjInmjInpiJXplovlp4tcclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZyE9PSd0cmlhbDEtMicpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkLmlucHV0RW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhlYXJ0bWFrZXI6IGZ1bmN0aW9uKGhlYXJ0cyl7XHJcblxyXG4gICAgICAgIHZhciBoZWFydF8xID0gaGVhcnRzWzBdXHJcbiAgICAgICAgdmFyIGhlYXJ0XzIgPSBoZWFydHNbMV1cclxuICAgICAgICB2YXIgaGVhcnRfMyA9IGhlYXJ0c1syXSAgICAgICAgXHJcbiAgICAgICAgLy8gdmFyIG5ld2hlYXJ0cyA9IFtdXHJcblxyXG4gICAgICAgIHZhciBoZWFydHNjYWxlID0gMC42XHJcbiAgICAgICAgdGhpcy5oZWFydDEgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDEwLDIwLGhlYXJ0XzEpXHJcbiAgICAgICAgdGhpcy5oZWFydDIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKHRoaXMuaGVhcnQxLnggKyB0aGlzLmhlYXJ0MS53aWR0aCAqIGhlYXJ0c2NhbGUsMjAsaGVhcnRfMikgICAgICBcclxuICAgICAgICB0aGlzLmhlYXJ0MyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5oZWFydDIueCArIHRoaXMuaGVhcnQyLndpZHRoICogaGVhcnRzY2FsZSwyMCxoZWFydF8zKSAgICAgIFxyXG4gICAgICAgIHRoaXMuaGVhcnQxLnNjYWxlLnNldFRvKGhlYXJ0c2NhbGUpXHJcbiAgICAgICAgdGhpcy5oZWFydDIuc2NhbGUuc2V0VG8oaGVhcnRzY2FsZSlcclxuICAgICAgICB0aGlzLmhlYXJ0My5zY2FsZS5zZXRUbyhoZWFydHNjYWxlKVxyXG5cclxuICAgICAgICAvLyBuZXdoZWFydHNbMF0gPSB0aGlzLmhlYXJ0MVxyXG4gICAgICAgIC8vIG5ld2hlYXJ0c1sxXSA9IHRoaXMuaGVhcnQyXHJcbiAgICAgICAgLy8gbmV3aGVhcnRzWzJdID0gdGhpcy5oZWFydDNcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIG5ld2hlYXJ0c1xyXG4gICAgfSxcclxuXHJcbiAgICBidG5HZW5lcmF0b3I6IGZ1bmN0aW9uKGJ0blN0eWxlLCB2YWx1ZSwgaXNDbGljayl7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IDE1MFxyXG4gICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclhcclxuICAgICAgICB2YXIgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC43NVxyXG4gICAgICAgIHZhciBhbmNob3JfeCA9IDAuNVxyXG4gICAgICAgIHZhciBhbmNob3JfeSA9IDAuMlxyXG4gICAgICAgIHZhciB0eHRfYW5jaG9yX3kgPSAwXHJcbiAgICAgICAgdmFyIHN0eWxlID0gaXNDbGljaz9idG5TdHlsZSsnX2NsaWNrJzpidG5TdHlsZVxyXG5cclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5nYW1lLmFkZC5idXR0b24oeCwgeSwgc3R5bGUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkdlbmVyYXRvcihzdHlsZSwgdmFsdWUsIHRydWUpXHJcbiAgICAgICAgfSwgdGhpcywgMSwxLDApXHJcblxyXG4gICAgICAgIGJ1dHRvbi5hbmNob3Iuc2V0VG8oYW5jaG9yX3gsYW5jaG9yX3kpXHJcbiAgICAgICAgYnV0dG9uLndpZHRoID0gd2lkdGhcclxuICAgICAgICBidXR0b24uaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciB0eHRfc3R5bGUgPSB7Zm9udDogXCIyMnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiNmZmZcIn1cclxuXHJcbiAgICAgICAgYnV0dG9uLmJ1dHRvbl90eHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgdmFsdWUsIHR4dF9zdHlsZSlcclxuICAgICAgICBidXR0b24uYnV0dG9uX3R4dC5hbmNob3Iuc2V0VG8oYW5jaG9yX3gsdHh0X2FuY2hvcl95KVxyXG5cclxuICAgICAgICBpZihpc0NsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXIodmFsdWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRlQ2hhbmdlcjogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMS0yJyAmJiB2YWx1ZT09PSfmspLllY/poYwhJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5yZXN0YXJ0KHRydWUsIGZhbHNlLCB0aGlzLmxldmVsLCAncGxheScpICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBlbWl0dGVyR2VuZXJhdG9yOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgZW1pdHRlciA9IHRoaXMuZ2FtZS5hZGQuZW1pdHRlcigwLCAwLCA1MDApXHJcblxyXG5cclxuICAgICAgICBlbWl0dGVyLm1ha2VQYXJ0aWNsZXMoWydpY2UxJywnaWNlMicsJ2ljZTMnXSlcclxuXHJcbiAgICAgICAgZW1pdHRlci5taW5QYXJ0aWNsZVNwZWVkLnNldCgtMTAwMCwgLTUwMClcclxuICAgICAgICBlbWl0dGVyLm1heFBhcnRpY2xlU3BlZWQuc2V0KDEwMDAsIDUwMClcclxuICAgICAgICBlbWl0dGVyLmdyYXZpdHkgPSAwO1xyXG4gICAgICAgIGVtaXR0ZXIuc2V0Um90YXRpb24oMTAsIDUwKVxyXG4gICAgICAgIC8vIHRoaXMuYmlnaGFpbEVtaXR0ZXIuc2V0QWxwaGEoMC4xLCAwLjgsIDMwMClcclxuICAgICAgICAvLyB0aGlzLmJpZ2hhaWxFbWl0dGVyLnNldFNjYWxlKDAuNiwgMC45LCAwLjYsIDAuOSwgMCwgUGhhc2VyLkVhc2luZy5RdWludGljLk91dClcclxuICAgICAgICBlbWl0dGVyLnNldFNjYWxlKDAuNSwgMC41LCAxLCAxLCAwLCBQaGFzZXIuRWFzaW5nLlF1aW50aWMuT3V0KVxyXG5cclxuICAgICAgICByZXR1cm4gZW1pdHRlclxyXG4gICAgfSxcclxuXHJcbiAgICBvbmNsaWNrRW1pdHRlcjogZnVuY3Rpb24ob2JqKXtcclxuXHJcbiAgICAgICAgdGhpcy5jbGlja0VtaXR0ZXIgPSBvYmouZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbihwb2ludGVyKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubXljbG91ZC5pc2ZyZWV6aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmNsaWNrVGltZXMrK1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubXljbG91ZC5jbGlja1RpbWVzPj01KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuY2xpY2tUaW1lcyA9IDBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuaXNmcmVlemluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgnc3RhdGljJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwyLTEnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/nrYnlvoXonqLluZXmrbjmraNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnJlc3RhcnQodHJ1ZSxmYWxzZSx0aGlzLmxldmVsLCdwbGF5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIueCA9IHBvaW50ZXIueFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIueSA9IHBvaW50ZXIueVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIuc3RhcnQodHJ1ZSwgMjAwMCwgbnVsbCwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRRdWFrZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgYWRkUXVha2U6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBpbnRlbnNpdHkgPSAwLjAxXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gNTAwXHJcbiAgICAgICAgdGhpcy5nYW1lLmNhbWVyYS5zaGFrZShpbnRlbnNpdHksZHVyYXRpb24pXHJcbiAgICB9LFxyXG5cclxuICAgIGhhaWxpbmc6IGZ1bmN0aW9uKHNpemUscG9zaXRpb25YKXtcclxuXHJcbiAgICAgICAgdmFyIGhhaWxTaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdoYWlsJykud2lkdGgvM1xyXG4gICAgICAgIHZhciBiaWdoYWlsU2l6ZSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmlnaGFpbCcpLndpZHRoLzNcclxuXHJcbiAgICAgICAgdmFyIHggPSBwb3NpdGlvblggfHwgdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLCB0aGlzLmdhbWUud2lkdGggLSBoYWlsU2l6ZSkgXHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLmJpZ2Nsb3VkLnkgKyB0aGlzLmJpZ2Nsb3VkLmhlaWdodFxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICB2YXIgZmFsbGluZ09iamVjdCA9ICdoYWlsJ1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMi0xJyl7XHJcbiAgICAgICAgICAgIHZhciBmYWxsaW5nT2JqZWN0ID0gJ2JpZ2hhaWwnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBmYWxsaW5nT2JqZWN0ID0gKHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwxMCk+Nyk/J2JpZ2hhaWwnOidoYWlsJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhhaWwgPSB0aGlzLmhhaWxzLmdldEZpcnN0RXhpc3RzKGZhbHNlLHRydWUseCx5LGZhbGxpbmdPYmplY3QpICAgICAgICAgICAgXHJcbiAgICAgICAgaGFpbC5zY2FsZS5zZXRUbygwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoaGFpbClcclxuICAgICAgICBoYWlsLmJvZHkuc2V0U2l6ZShoYWlsU2l6ZSowLjYsaGFpbFNpemUqMC42LGhhaWxTaXplKjAuMixoYWlsU2l6ZSowLjMpXHJcbiAgICAgICAgaGFpbC5ib2R5LnZlbG9jaXR5LnkgPSAzMDBcclxuICAgICAgICBoYWlsLnNpemUgPSAoZmFsbGluZ09iamVjdD09PSdiaWdoYWlsJyk/J2JpZyc6J3NtYWxsJ1xyXG4gICAgICAgIC8vIGhhaWwub3V0T2ZCb3VuZHNLaWxsID0gdHJ1ZVxyXG4gICAgICAgIGhhaWwuY2hlY2tXb3JsZEJvdW5kcyA9IHRydWVcclxuICAgICAgICBoYWlsLmV2ZW50cy5vbk91dE9mQm91bmRzLmFkZChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGl0cm9hZChoYWlsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYWlsLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB9LHRoaXMpXHJcbiAgICB9LFxyXG5cclxuICAgIGZyb3plbnJvYWRJbml0aWFsaXplOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgcm9hZF94ID0gW11cclxuICAgICAgICB2YXIgcm9hZF95ID0gdGhpcy5nYW1lLmhlaWdodFxyXG4gICAgICAgIHRoaXMuZnJvemVucm9hZCA9IFtdXHJcbiAgICAgICAgdGhpcy5mcm96ZW5yb2FkcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuICAgICAgICB0aGlzLmZyb3plbnJvYWRzLm1heGZyYW1lID0gMVxyXG5cclxuICAgICAgICAvL2xlZnRcclxuICAgICAgICByb2FkX3hbMF0gPSB0aGlzLmdhbWUud2lkdGggKiAxLzZcclxuICAgICAgICAvL21pZGRsZVxyXG4gICAgICAgIHJvYWRfeFsxXSA9IHRoaXMuZ2FtZS53aWR0aCAqIDEvMlxyXG4gICAgICAgIC8vcmlnaHRcclxuICAgICAgICByb2FkX3hbMl0gPSB0aGlzLmdhbWUud2lkdGggKiA1LzZcclxuXHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8MztpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShyb2FkX3hbaV0gLCByb2FkX3ksICdpY2Vncm91bmQnKVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0uZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFtpXS5zY2FsZS5zZXRUbygwLjUsMC41KVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0uYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0udmlzaWJsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZHMuYWRkKHRoaXMuZnJvemVucm9hZFtpXSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaGl0cm9hZDogZnVuY3Rpb24oaGFpbCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubXljbG91ZC5saWZlPT09Myl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhhaWwueClcclxuXHJcbiAgICAgICAgICAgIGlmKGhhaWwueDw9dGhpcy5nYW1lLndvcmxkLndpZHRoLzMpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFswXS52aXNpYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYoaGFpbC54PnRoaXMuZ2FtZS53b3JsZC53aWR0aCogMS8zICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhaWwueDw9dGhpcy5nYW1lLndvcmxkLndpZHRoKiAyLzMpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFsxXS52aXNpYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5yb2FkWzJdLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZWxlKXtcclxuICAgICAgICAgICAgICAgIGVsZS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYoZWxlLmZyYW1lPHRoaXMuZnJvemVucm9hZHMubWF4ZnJhbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5mcmFtZSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubXljbG91ZC5saWZlPjApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkTGlmZUhhbmRsZXIoLS10aGlzLm15Y2xvdWQubGlmZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhaWxDcnVzaGVkOiBmdW5jdGlvbih4LHksc2NhbGUsc2l6ZSl7XHJcbiAgICAgICAgdmFyIGZhbGxpbmdPYmplY3QgPSAoc2l6ZT09PSdiaWcnKT8nYmlnaGFpbCc6J2hhaWwnXHJcbiAgICAgICAgdmFyIGFuY2hvclkgPSAwLjVcclxuICAgICAgICB2YXIgY3J1c2ggPSB0aGlzLmhhaWxjcnVzaGVzLmdldEZpcnN0RXhpc3RzKGZhbHNlLHRydWUseCx5LGZhbGxpbmdPYmplY3QpXHJcbiAgICAgICAgY3J1c2guYW5jaG9yLnNldFRvKDAuNSxhbmNob3JZKVxyXG4gICAgICAgIGNydXNoLnNjYWxlLnNldFRvKHNjYWxlKVxyXG5cclxuICAgICAgICB2YXIgYW5pbSA9IGNydXNoLmFuaW1hdGlvbnMuYWRkKGZhbGxpbmdPYmplY3QpO1xyXG4gICAgICAgIGFuaW0ucGxheSg2MCxmYWxzZSxmYWxzZSlcclxuICAgICAgICBhbmltLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjcnVzaC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgbXljbG91ZExpZmVIYW5kbGVyOiBmdW5jdGlvbihsaWZlKXtcclxuXHJcbiAgICAgICAgaWYobGlmZT4wKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWFydHMgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8MzsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGhlYXJ0c1tpXSA9IGk8PWxpZmUtMT8ncmVkaGVhcnQnOidibGFja2hlYXJ0J1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhlYXJ0bWFrZXIoaGVhcnRzKVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdPdmVyJywgdHJ1ZSwgZmFsc2UsIHRoaXMubGV2ZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nRGlhbG9ndWU6IGZ1bmN0aW9uKHgseSx3b3Jkcyl7XHJcblxyXG4gICAgICAgIHZhciBkaWFsb2d1ZUltZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoeCx5LCAnZGlhbG9ndWUnKSBcclxuICAgICAgICBkaWFsb2d1ZUltZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuOFxyXG4gICAgICAgIGRpYWxvZ3VlSW1nLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjJcclxuICAgICAgICBkaWFsb2d1ZUltZy5hbmNob3Iuc2V0VG8oMC41LDAuNSlcclxuXHJcbiAgICAgICAgdmFyIGRpYWxvZ3VlID0ge31cclxuICAgICAgICBkaWFsb2d1ZS5pbWcgPSBkaWFsb2d1ZUltZ1xyXG4gICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG5cclxuICAgICAgICBpZihkaWFsb2d1ZS5jb250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkU3BlYWtpbmcoZGlhbG9ndWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlhbG9ndWVcclxuICAgIH0sXHJcblxyXG4gICAgdHlwZXdyaXRlcjogZnVuY3Rpb24oeCx5LGRpYWxvZ3VlKXtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGlhbG9ndWUuY29udGVudFxyXG5cclxuICAgICAgICB0aGlzLmxpbmUgPSBbXVxyXG4gICAgICAgIHRoaXMud29yZEluZGV4ID0gMFxyXG4gICAgICAgIHRoaXMubGluZUluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndvcmREZWxheSA9IDEwMDtcclxuICAgICAgICB0aGlzLmxpbmVEZWxheSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZWZpbmlzaGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gZGlhbG9ndWUuc3R5bGUgfHx7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgJycsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLm5leHRMaW5lKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dExpbmU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVJbmRleCA9PT0gdGhpcy5jb250ZW50Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSdyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlZmluaXNoZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudHlwZWZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgU3BsaXQgdGhlIGN1cnJlbnQgbGluZSBvbiBzcGFjZXMsIHNvIG9uZSB3b3JkIHBlciBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5jb250ZW50W3RoaXMubGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgdGhlIHdvcmQgaW5kZXggdG8gemVybyAodGhlIGZpcnN0IHdvcmQgaW4gdGhlIGxpbmUpXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyAgQ2FsbCB0aGUgJ25leHRXb3JkJyBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIHdvcmQgaW4gdGhlIGxpbmUgKGxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy53b3JkRGVsYXksIHRoaXMubGluZS5sZW5ndGgsIHRoaXMubmV4dFdvcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0byB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXgrKztcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFdvcmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vICBBZGQgdGhlIG5leHQgd29yZCBvbnRvIHRoZSB0ZXh0IHN0cmluZywgZm9sbG93ZWQgYnkgYSBzcGFjZVxyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KHRoaXMubGluZVt0aGlzLndvcmRJbmRleF0pO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0aGUgd29yZCBpbmRleCB0byB0aGUgbmV4dCB3b3JkIGluIHRoZSBsaW5lXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gIExhc3Qgd29yZD9cclxuICAgICAgICBpZiAodGhpcy53b3JkSW5kZXggPT09IHRoaXMubGluZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGEgY2FycmlhZ2UgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEdldCB0aGUgbmV4dCBsaW5lIGFmdGVyIHRoZSBsaW5lRGVsYXkgYW1vdW50IG9mIG1zIGhhcyBlbGFwc2VkXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQodGhpcy5saW5lRGVsYXksIHRoaXMubmV4dExpbmUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHlwZUZpbmlzaGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMudHlwZWZpbmlzaGVkKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5UmVzdW1lZCgpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxldmVsX2FyZyE9PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZWZpbmlzaGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXlTdGF0ZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVzL3BsYXkuanMiLCJsZXQgT3ZlclN0YXRlID0ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmxldmVsID0gYXJndW1lbnRzWzBdXHJcbiAgICAgICAgLy8gdGhpcy5sZXZlbF9hcmcgPSBhcmd1bWVudHNbMV1cclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5FWEFDVF9GSVRcclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5lbmFibGVkID0gdHJ1ZVxyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnXHJcbiAgICAgICAgdmFyIGJnID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgwLDAsJ2ZhaWxfYmcnKVxyXG4gICAgICAgIGJnLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgYmcuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodFxyXG5cclxuICAgICAgICAvL2ZhaWxjbG91ZFxyXG4gICAgICAgIHZhciBmYWlsY2xvdWQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5nYW1lLndvcmxkLmNlbnRlclksJ2ZhaWxjbG91ZCcpXHJcbiAgICAgICAgZmFpbGNsb3VkLnNjYWxlLnNldFRvKDAuNSlcclxuICAgICAgICBmYWlsY2xvdWQuYW5jaG9yLnNldFRvKDAuNSlcclxuICAgICAgICB2YXIgZmFpbEFuaW0gPSBmYWlsY2xvdWQuYW5pbWF0aW9ucy5hZGQoJ2ZhaWxjbG91ZCcpO1xyXG4gICAgICAgIGZhaWxBbmltLnBsYXkoNSxmYWxzZSxmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vd29yZHNcclxuICAgICAgICB2YXIgc3R5bGUgPSB7Zm9udDogXCIyMnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiNmZmZmMDBcIn1cclxuICAgICAgICB2YXIgZmFpbHdvcmRzID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCBmYWlsY2xvdWQueS1mYWlsY2xvdWQuaGVpZ2h0LzIsICflpLHmlZd+Jywgc3R5bGUpXHJcbiAgICAgICAgZmFpbHdvcmRzLmFuY2hvci5zZXRUbygwLjUpXHJcblxyXG4gICAgICAgIHRoaXMucmVwbGF5YnV0dG9uID0gdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCflho3oqabkuIDmrKEnLCAxLCBmYWxzZSlcclxuICAgICAgICB0aGlzLmxvbmdmb3JtYnV0dG9uID0gdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8yXzEnLCfop4DnnIvlsIjpoYwnLCAyLCBmYWxzZSlcclxuICAgICAgICB0aGlzLnNoYXJlYnV0dG9uID0gdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl9zaGFyZScsJ+WIhuS6q+WHuuWOu+WQpyEnLCAwLCBmYWxzZSlcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkdlbmVyYXRvcjogZnVuY3Rpb24oYnRuU3R5bGUsIHZhbHVlLCBwb3NpdGlvbiwgaXNDbGljayl7XHJcbiAgICAgICAgLy9wb3NpdGlvbjogMCjmnIDkuIrpnaIpLDEo5bem5LiLKSwyKOWPs+S4iylcclxuXHJcbiAgICAgICAgaWYocG9zaXRpb249PT0wKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuOVxyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYXHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMucmVwbGF5YnV0dG9uLnkgLSB0aGlzLnJlcGxheWJ1dHRvbi5oZWlnaHQqMS4yXHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjVcclxuICAgICAgICB9ZWxzZSBpZihwb3NpdGlvbj09PTEpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC40M1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuMjVcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjlcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JfeCA9IDAuNDVcclxuICAgICAgICB9ZWxzZSBpZihwb3NpdGlvbj09PTIpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC40M1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCogMC43NVxyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuOVxyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcl94ID0gMC41NVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3dpdGNoKHBvc2l0aW9uKXtcclxuICAgICAgICAvLyAgICAgY2FzZSAwOlxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC45XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgaGVpZ2h0ID0gNDhcclxuICAgICAgICAvLyAgICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclhcclxuICAgICAgICAvLyAgICAgICAgIHZhciB5ID0gdGhpcy5yZXBsYXlidXR0b24ueSAtIHRoaXMucmVwbGF5YnV0dG9uLmhlaWdodCoxLjJcclxuICAgICAgICAvLyAgICAgICAgIHZhciBhbmNob3JfeCA9IDAuNVxyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyAgICAgY2FzZSAxOlxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC40M1xyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuMjVcclxuICAgICAgICAvLyAgICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjlcclxuICAgICAgICAvLyAgICAgICAgIHZhciBhbmNob3JfeCA9IDAuNDVcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8gICAgIGNhc2UgMjpcclxuICAgICAgICAvLyAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNDNcclxuICAgICAgICAvLyAgICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQud2lkdGgqIDAuNzVcclxuICAgICAgICAvLyAgICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjlcclxuICAgICAgICAvLyAgICAgICAgIHZhciBhbmNob3JfeCA9IDAuNTVcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB2YXIgYW5jaG9yX3kgPSAwLjJcclxuICAgICAgICB2YXIgdHh0X2FuY2hvcl95ID0gMFxyXG5cclxuICAgICAgICB2YXIgc3R5bGUgPSBpc0NsaWNrP2J0blN0eWxlKydfY2xpY2snOmJ0blN0eWxlXHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih4LCB5LCBzdHlsZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKHN0eWxlLCB2YWx1ZSwgcG9zaXRpb24sIHRydWUpXHJcbiAgICAgICAgfSwgdGhpcywgMSwxLDApXHJcblxyXG4gICAgICAgIGJ1dHRvbi5hbmNob3Iuc2V0VG8oYW5jaG9yX3gsYW5jaG9yX3kpXHJcbiAgICAgICAgYnV0dG9uLndpZHRoID0gd2lkdGhcclxuICAgICAgICBidXR0b24uaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciB0eHRfc3R5bGUgPSB7Zm9udDogXCIyMnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiNmZmZcIn1cclxuXHJcbiAgICAgICAgYnV0dG9uLmJ1dHRvbl90eHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgdmFsdWUsIHR4dF9zdHlsZSlcclxuICAgICAgICBidXR0b24uYnV0dG9uX3R4dC5hbmNob3Iuc2V0VG8oYW5jaG9yX3gsdHh0X2FuY2hvcl95KVxyXG5cclxuICAgICAgICBpZihpc0NsaWNrKXtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZUNoYW5nZXIodmFsdWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYnV0dG9uXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRlQ2hhbmdlcjogZnVuY3Rpb24odmFsdWUpe1xyXG5cclxuICAgICAgICBzd2l0Y2godmFsdWUpe1xyXG4gICAgICAgICAgICBjYXNlICflho3oqabkuIDmrKEnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5JywgdHJ1ZSwgZmFsc2UsICdsZXZlbDEnLCdwbGF5JylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ+ingOeci+WwiOmhjCc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9uZ2Zvcm0nKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAn5YiG5Lqr5Ye65Y675ZCnISc6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hhcmUgRkInKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE92ZXJTdGF0ZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXMvb3Zlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=