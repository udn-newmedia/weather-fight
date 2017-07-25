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

module.exports = __webpack_require__.p + "image/57ca1a2085d82f0574e3ef740b9a5ead.gif";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/d8c27ec89099c52ac6784fb39a1e6b9c.png";

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

module.exports = __webpack_require__.p + "image/477bdfc746b6ebf74c15d743ef356f8f.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/8acfc93fdbf97cabd8ff50d98cf2c770.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/80ff2d08a47ab73700af4256b384423f.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/efe42e1bf0851a292148c3c4c058d173.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32b44ebaad908e963b4b13d2487b0692.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/fa17377be651a8507dcfc594b039592c.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/92d3961850f918db6308e255f48d7507.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c3e2db495a61f31715b1431eedab9a22.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/2dd86720c7791b1ed33a6fc3e447f80c.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/98d56e11ed509f0f1169ac29715f59cc.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a005b67358273d2229cd40e6af77509c.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b7548773a9ad3a002a01fa000557b8a0.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/cda0c9c3742a7b28ed5be5b955e28583.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32e811048ebfdec90502dcecd9936b81.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/551ba1d984cae4c1c00500d6d223aeb9.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c511e3775ef5501d83e01951b7da2bdb.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/943dd14a36d2fa331fd0a2b82deddd44.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/8457c4ec8c7bbfd20206858b1e5848b8.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/73fa7200f3778acadcf517b43d03f2bc.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/13274755cb99d12a9984a2e1e25a2d1b.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/d4e7167d0f06efd370f57d29ac790ed9.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/953dc0d8aecec3d88267c9044f1eaeaa.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/a82fba1fc88d46824ad6ed90e3f9d938.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/75bade84d155869a72d3dba680ef2cff.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/560786a92d43d945f644e4ed0aba95eb.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/17acd07aed2ec72bf76f6a15d6c832c8.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1efbefbfb2613ab91d81aaefcdae5640.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1a9f6cd8080861d27f64036b9cbba5c3.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/78408e16dfdc1f3c8621359d11995933.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/116b00c9f89f06056506987573857745.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/761c906a7bac93bd0cd51a03eafd1131.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/be66e5214bd86cf09b89b4c09f3a769b.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/0e1ad62d5221322e37c743c55ff2f5fc.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6691e9811516ed5c1fb5a1babf1aca16.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/ec4aec8e9ad879782106eefcf8107e01.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6ba6c2276cf9af55588757bfff821958.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/e6fd6ac91700050dbe1bec1ca1ace468.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/32dbbd7b62ee91131ac6042e6b0ee43f.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/286aa1f8713dacd55d7c25a8dd468fef.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1cb0c518f75972cfd7102a42ca3bf165.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/f49ec65556484eb42dc67df70112621f.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/0a3fa150a53904b5b4ef72509e03e9d3.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/4166c8e2068e0b976a4f00c4588adf52.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b2960817f6d32efc3232314758fe4150.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/ce6014dde4b0beb6941eaea040a6226c.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c0a61b91f0248b4f77dedb32be10bb7b.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/2d1af39b247d1ada6c910142f37e0b19.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/7d48bb2520fde7850d7aeee468a12e0a.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/c376aaf0c54a0f4e712c71fb674603a9.jpg";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/aaf9b25c43c5b9592ef0b0c341be44e2.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/b67a8240d93755d9689ae7fd56e49d58.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/fe4824fc34e984505b594380ff9e91c6.jpg";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/dad83504109a6719341c7fffede9228d.mp3";

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

            this.bgsound = this.game.add.audio('bgsound', 0.2, true);

            this.backgroundMusicControler('play');

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

            this.backgroundMusicControler('play');

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
                this.backgroundMusicControler('stop');
                break;
            case '觀看專題':
                // console.log("longform")
                this.bgsound.stop();
                break;
            case '遊戲說明':
                // console.log("introduction")
                this.game.state.start('Start', true, false, 'intro1');
                break;
            case '直接開始':
                // console.log("start anyway")
                this.game.state.start('Play', true, false, 'level1', 'trial1-1');
                this.backgroundMusicControler('stop');
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
    },

    backgroundMusicControler: function backgroundMusicControler(option) {

        if (option === 'play') {
            //聲音出錯不影響
            try {
                this.bgsound.play();
            } catch (e) {}
        } else if (option === 'stop') {

            try {
                this.bgsound.stop();
            } catch (e) {}
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
        this.bgsound = this.game.add.audio('bgsound', 0.2, true);
        this.backgroundMusicControler('play');
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
                    this.backgroundMusicControler('stop');
                    this.game.state.start('Play', true, false, 'level2', 'trial2-1');
                } else if (this.level === 'level2') {
                    //等待螢幕歸正
                    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
                        this.backgroundMusicControler('stop');
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
            this.backgroundMusicControler('stop');
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
                            this.backgroundMusicControler('stop');
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
            this.backgroundMusicControler('stop');
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
    },

    backgroundMusicControler: function backgroundMusicControler(option) {

        if (option === 'play') {
            //聲音出錯不影響
            try {
                this.bgsound.play();
            } catch (e) {}
        } else if (option === 'stop') {

            try {
                this.bgsound.stop();
            } catch (e) {}
        } else if (option === 'pause') {

            try {
                this.bgsound.pause();
            } catch (e) {}
        } else if (option === 'resume') {

            try {
                this.bgsound.resume();
            } catch (e) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvYm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3ByZWxvYWRlci5naWYiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jbG91ZG1hbl8yNDgucG5nIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZXMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3RhbGtpbmcucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmcuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3N0YXJ0Z2FtZV9idG5fMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3RpdGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2J0bl8xXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9idG5fMl8xLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2J0bV8yXzIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9idG5fM18yLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUxLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9ibGFja2Nsb3VkXzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmxhY2tjbG91ZF8yLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JhbGxfMV85My5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jb3JuXzFfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvaGVhcnRfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VfMy5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jbG91ZF8xLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkX2FuZ2VyMS5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9iaWdjbG91ZF9hbmdlcjIucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY293XzFfNzAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYmlnaWNlXzE4Ni5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pY2VjbG91ZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9tcl93YW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUyLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL3Blb3BsZV8xXzI0MC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9wZW9wbGVfMl8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvcGVvcGxlXzNfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMy5qcGciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY2FyXzJfMjQwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2Nhcl8zXzI0MC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvZGFya3NreV8zLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ljZWdyb3VuZF8yNDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvZ2FtZTNfc3RhcnQucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYW5ncnljbG91ZC5wbmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9hbGFybV8zMDAucG5nIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZhaWxfYmcuanBnIiwid2VicGFjazovLy8uL3B1YmxpYy9hc3NldHMvYnRuX3NoYXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZhaWxfNTEwLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL2ZiLmpwZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXNzZXRzL01yX1R1cnRsZS5tcDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9zdGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGVzL3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlcy9vdmVyLmpzIl0sIm5hbWVzIjpbIldlYXRoZXIiLCJnYW1lIiwiR2FtZSIsIkFVVE8iLCJCb290U3RhdGUiLCJMb2FkU3RhdGUiLCJTdGFydFN0YXRlIiwiUGxheVN0YXRlIiwiT3ZlclN0YXRlIiwic3RhdGUiLCJhZGQiLCJzdGFydCIsImluaXQiLCJzdGFnZSIsImJhY2tncm91bmRDb2xvciIsInNjYWxlIiwic2NhbGVNb2RlIiwiUGhhc2VyIiwiU2NhbGVNYW5hZ2VyIiwiU0hPV19BTEwiLCJwYWdlQWxpZ25Ib3Jpem9udGFsbHkiLCJwYWdlQWxpZ25WZXJ0aWNhbGx5IiwicHJlbG9hZCIsImxvYWQiLCJpbWFnZSIsInNwcml0ZXNoZWV0IiwiY3JlYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm15Y2xvdWQiLCJzcHJpdGUiLCJ3b3JsZCIsImNlbnRlclgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXRUbyIsInNwcml0ZXNjYWxlIiwiYW5pbWF0aW9ucyIsInBsYXkiLCJ3b3JkcyIsImRpYWxvZ3VlIiwiY29udGVudCIsInR5cGV3cml0ZXIiLCJ3aWR0aCIsInkiLCJwcmVsb2FkU3ByaXRlIiwic2V0UHJlbG9hZFNwcml0ZSIsImF1ZGlvIiwib25GaWxlQ29tcGxldGUiLCJwcm9ncmVzcyIsInVwZGF0ZSIsIngiLCJsaW5lIiwid29yZEluZGV4IiwibGluZUluZGV4Iiwid29yZERlbGF5IiwibGluZURlbGF5IiwiZmluaXNoZWQiLCJzdHlsZSIsImZvbnQiLCJmaWxsIiwidGV4dCIsIm5leHRMaW5lIiwibGVuZ3RoIiwidGltZSIsImV2ZW50cyIsIlRpbWVyIiwiU0VDT05EIiwic3BsaXQiLCJyZXBlYXQiLCJuZXh0V29yZCIsImNvbmNhdCIsImJlZ2lubmluZyIsIkVYQUNUX0ZJVCIsImJnc291bmQiLCJiYWNrZ3JvdW5kTXVzaWNDb250cm9sZXIiLCJiZyIsInRpdGxlIiwidGl0bGVUd2VlbiIsInR3ZWVuIiwidG8iLCJFYXNpbmciLCJCb3VuY2UiLCJPdXQiLCJidG5HZW5lcmF0b3IiLCJzZXR0aW5nbXljbG91ZCIsImNlbnRlclkiLCJzZXR0aW5nRGlhbG9ndWUiLCJpbWciLCJzZXR0aW5nQmlnY2xvdWQiLCJzZXR0aW5naGVhcnRzIiwic2V0dGluZ21hc2siLCJ0d2lua2xpbmdIZWFydHMiLCJoZWFydHMiLCJhbHBoYSIsInlveW8iLCJkaWFsb2d1ZUltZyIsIm15Y2xvdWRTcGVha2luZyIsImFuY2hvcl94IiwiYW5jaG9yX3kiLCJteWNsb3VkX3giLCJteWNsb3VkX3kiLCJhbmNob3JYIiwiYW5jaG9yWSIsImhlYXJ0XzMiLCJoZWFydF8yIiwiaGVhcnRfMSIsImhlYXJ0c2NhbGUiLCJoZWFydDMiLCJoZWFydDIiLCJoZWFydDEiLCJncm91cCIsImJtZCIsIm1ha2UiLCJiaXRtYXBEYXRhIiwiYWRkVG9Xb3JsZCIsInJlY3QiLCJiaWdjbG91ZCIsImJpZ2Nsb3VkSW1nIiwiY2FjaGUiLCJnZXRJbWFnZSIsImJpZ2Nsb3VkX2FuZ2VyMSIsImJpZ2Nsb3VkX2FuZ2VyMiIsImJvdW5kc0FsaWduSCIsImJvdW5kc0FsaWduViIsIndvcmRXcmFwIiwid29yZFdyYXBXaWR0aCIsImJ0blN0eWxlIiwidmFsdWUiLCJwb3NpdGlvbiIsImlzQ2xpY2siLCJsb3dlcl95IiwidXBwZXJfeSIsInR4dF9hbmNob3JfeSIsImJ1dHRvbiIsInR4dF9zdHlsZSIsImJ1dHRvbl90eHQiLCJzdGF0ZUNoYW5nZXIiLCJzdG9wIiwib3B0aW9uIiwiZSIsImxldmVsIiwiYXJndW1lbnRzIiwibGV2ZWxfYXJnIiwicGh5c2ljcyIsInN0YXJ0U3lzdGVtIiwiUGh5c2ljcyIsIkFSQ0FERSIsInNjZW5lc0ZhY3RvcnkiLCJhcmNhZGUiLCJvdmVybGFwIiwiaGFpbHMiLCJoaXRteUNsb3VkIiwiY29ybnMiLCJoaXRDb3JuIiwiY2FycyIsImZvckVhY2hBbGl2ZSIsImNhciIsInNsaWRlX3giLCJsaWZlIiwiZnJhbWUiLCJib2R5IiwidmVsb2NpdHkiLCJ0eXBlRmluaXNoZWQiLCJyZW5kZXIiLCJoYWlsIiwiY29ybiIsIm1heGZyYW1lIiwia2lsbCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImVsZSIsIm15Y2xvdWRMaWZlSGFuZGxlciIsImhhaWxDcnVzaGVkIiwic2l6ZSIsImNhdGNoVHdlZW4iLCJ0aW50Iiwib25Db21wbGV0ZSIsImlzZnJlZXppbmciLCJoaXRieUJpZ2hhaWwiLCJ0dXRvcmlhbE1vZGUiLCJjbGlja1RpbWVzIiwiY29ybkluaXRpYWxpemUiLCJ0YXJnZXRfbGVmdCIsInRhcmdldF9taWRkbGUiLCJ0YXJnZXRfcmlnaHQiLCJlbmFibGVCb2R5IiwiY29yblNpemUiLCJjb3JuX3kiLCJsZWZ0X2Nvcm5feCIsIm1pZGRsZV9jb3JuX3giLCJyaWdodF9jb3JuX3giLCJsZWZ0X2Nvcm4iLCJlbmFibGUiLCJtaWRkbGVfY29ybiIsInJpZ2h0X2Nvcm4iLCJsZWZ0VHdlZW4iLCJtaWRkbGVUd2VlbiIsInJpZ2h0VHdlZW4iLCJjYXJSdW5uaW5nIiwiY2Fyc2NhbGUiLCJjYXJXaWR0aCIsImNhckhlaWdodCIsImNhclR5cGVzIiwibG9vcCIsInJuZCIsImludGVnZXJJblJhbmdlIiwidHlwZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldEZpcnN0RXhpc3RzIiwib3V0T2ZCb3VuZHNLaWxsIiwiY2hlY2tXb3JsZEJvdW5kcyIsInNldHRpbmdNeUNsb3VkIiwiY29sbGlkZVdvcmxkQm91bmRzIiwic2V0U2l6ZSIsInRvdWNoaW5nIiwiaW5wdXRFbmFibGVkIiwib25jbGlja0VtaXR0ZXIiLCJteWNsb3VkTW92ZSIsIm9uSW5wdXREb3duIiwib25JbnB1dFVwIiwiaW5wdXQiLCJvblVwIiwiZGV2aWNlIiwiZGVza3RvcCIsImFkZE1vdmVDYWxsYmFjayIsInBvaW50ZXIiLCJpc1RhcCIsImNvdyIsImNvd0FuaW0iLCJzdGF0aWNTY2VuZXMiLCJhbmltYXRlZFNjZW5lcyIsInRyaWFsbWFzazEiLCJmcm96ZW5yb2FkSW5pdGlhbGl6ZSIsImhlYXJ0bWFrZXIiLCJoYWlsY3J1c2hlcyIsImhhaWxpbmciLCJjb3JuX3giLCJzZXR0aW5naGFpbHMiLCJkZWxheVRvZmlyZSIsImhhaWxpbmdUaW1lciIsInNreSIsImRhcmtza3kiLCJibGFja2Nsb3VkMSIsImJsYWNrY2xvdWQxSW1nIiwiYmxhY2tjbG91ZDIiLCJibGFja2Nsb3VkMkltZyIsImNsb3VkIiwiY2xvdWRJbWciLCJkYXJrc2t5VHdlZW4iLCJJbiIsImJsYWNrY2xvdWQxVHdlZW4iLCJMaW5lYXIiLCJibGFja2Nsb3VkMlR3ZWVuIiwiWXBvc2l0aW9uIiwiYmlnY2xvdWRUd2VlbiIsIlNpbnVzb2lkYWwiLCJJbk91dCIsIm9uU3RhcnQiLCJjb2xvciIsImRpcnR5Iiwic2V0dGluZ3Rhc2tXaW5kb3ciLCJ0YXNrd2luZG93R3JvdXAiLCJ3aW5kb3ciLCJncmFwaGljcyIsImFsaWduSW4iLCJDRU5URVIiLCJiZWdpbkZpbGwiLCJkcmF3Um91bmRlZFJlY3QiLCJlbmRGaWxsIiwiaW1nTmFtZSIsImJ0bnZhbHVlIiwiYmFubmVyIiwid2luZG93X2Jhbm5lciIsImJhbm5lckFuaW0iLCJ1bnBhdXNlYnRuIiwicGVvcGxlU2l6ZSIsInBlb3BsZSIsInBhc3NlZFRpbWVyIiwidHJpYWxtYXNrMiIsIm15Y2xvdWRFbWl0dGVyIiwiZW1pdHRlckdlbmVyYXRvciIsIm9uUGxheSIsInBhdXNlZCIsIm1hc2siLCJ0YXNrV2luZG93R3JvdXAiLCJ0YXNrV2luZG93bGlzdGVuZXIiLCJvbkRvd24iLCJ1bnBhdXNlIiwiZXZlbnQiLCJidG5Jc0NsaWNrZWQiLCJjbHMiLCJkZXN0cm95IiwicmVtb3ZlQWxsIiwicGFzc2VkV2luZG93R3JvdXAiLCJhbGFybVdpbmRvd0dyb3VwIiwicGF1c2UiLCJoYWlsaW5nQWxhcm1QZXJpb2QiLCJoYWlsaW5nU3Rvcm1UaW1lciIsInJlc3VtZSIsImNvdW50ZXIiLCJzdHlsZTEiLCJhbGlnbiIsInRleHQxIiwic3R5bGUyIiwidGV4dDIiLCJnYW1lVGltZXIiLCJzZXRUZXh0IiwiaGFpbGluZ0FsYXJtIiwibXljbG91ZFgiLCJuZXdsaWZlIiwicGxheVBhdXNlZCIsIm15Y2xvdWRtb3ZpbmciLCJteWNsb3VkVHJpYWxEaWFsb2d1ZSIsImFsYXJtUGVyaW9kIiwiZW5hYmxlZCIsInBsYXlSZXN1bWVkIiwicmVzdGFydCIsImVtaXR0ZXIiLCJtYWtlUGFydGljbGVzIiwibWluUGFydGljbGVTcGVlZCIsInNldCIsIm1heFBhcnRpY2xlU3BlZWQiLCJncmF2aXR5Iiwic2V0Um90YXRpb24iLCJzZXRTY2FsZSIsIlF1aW50aWMiLCJvYmoiLCJjbGlja0VtaXR0ZXIiLCJhZGRRdWFrZSIsImludGVuc2l0eSIsImR1cmF0aW9uIiwiY2FtZXJhIiwic2hha2UiLCJwb3NpdGlvblgiLCJoYWlsU2l6ZSIsImJpZ2hhaWxTaXplIiwiZmFsbGluZ09iamVjdCIsIm9uT3V0T2ZCb3VuZHMiLCJoaXRyb2FkIiwicm9hZF94Iiwicm9hZF95IiwiZnJvemVucm9hZCIsImZyb3plbnJvYWRzIiwiaSIsInZpc2libGUiLCJjcnVzaCIsImFuaW0iLCJhZGRPbmNlIiwidHlwZWZpbmlzaGVkIiwiZmFpbGNsb3VkIiwiZmFpbEFuaW0iLCJmYWlsd29yZHMiLCJyZXBsYXlidXR0b24iLCJsb25nZm9ybWJ1dHRvbiIsInNoYXJlYnV0dG9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUlBLFVBQVVBLFdBQVcsRUFBekI7O0FBRUFBLFFBQVFDLElBQVIsR0FBZSxJQUFJLGlCQUFPQyxJQUFYLENBQWdCLE1BQWhCLEVBQXdCLE1BQXhCLEVBQWdDLGlCQUFPQyxJQUF2QyxFQUE2QyxNQUE3QyxDQUFmOztBQUVBSCxRQUFRSSxTQUFSO0FBQ0FKLFFBQVFLLFNBQVI7QUFDQUwsUUFBUU0sVUFBUjtBQUNBTixRQUFRTyxTQUFSO0FBQ0FQLFFBQVFRLFNBQVI7O0FBRUFSLFFBQVFDLElBQVIsQ0FBYVEsS0FBYixDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkIsRUFBK0JWLFFBQVFJLFNBQXZDO0FBQ0FKLFFBQVFDLElBQVIsQ0FBYVEsS0FBYixDQUFtQkMsR0FBbkIsQ0FBdUIsTUFBdkIs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QUwsQ0FBVVMsR0FBVixDQUFjbUQsSUFBZCxDQUFtQlYsQ0FBbkIsRUFBc0JQLENBQXRCLEVBQXlCb0YsS0FBekIsRUFBZ0NPLFNBQWhDLENBQXBCO0FBQ0FELHVCQUFPRSxVQUFQLENBQWtCdEcsTUFBbEIsQ0FBeUJDLEtBQXpCLENBQStCK0QsUUFBL0IsRUFBd0NtQyxZQUF4Qzs7QUFFQSxvQkFBR0gsT0FBSCxFQUFXO0FBQ1AsNkJBQUtPLFlBQUwsQ0FBa0JULEtBQWxCO0FBQ0g7O0FBRUQsdUJBQU9NLE1BQVA7QUFDSCxTQXZHVzs7QUF5R1pHLHNCQUFjLHNCQUFTVCxLQUFULEVBQWU7O0FBRXpCLHdCQUFPQSxLQUFQO0FBQ0ksNkJBQUssTUFBTDtBQUNJLHFDQUFLL0gsSUFBTCxDQUFVUSxLQUFWLENBQWdCRSxLQUFoQixDQUFzQixNQUF0QixFQUE4QixJQUE5QixFQUFvQyxLQUFwQyxFQUEyQyxRQUEzQyxFQUFvRCxNQUFwRDtBQUNBO0FBQ0osNkJBQUssTUFBTDtBQUNJMlYsd0NBQVFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0E7QUFDSiw2QkFBSyxRQUFMO0FBQ0lELHdDQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBO0FBVFI7QUFXSDs7QUF0SFcsQ0FBaEI7O0FBMEhBNVUsT0FBT0MsT0FBUCxHQUFpQnBCLFNBQWpCLEMiLCJmaWxlIjoianMvYnVuZGxlLjE2Y2Y4NTY3YmYwMjdiNzJiYzc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdwaXhpJ1xyXG5pbXBvcnQgJ3AyJ1xyXG5pbXBvcnQgUGhhc2VyIGZyb20gJ3BoYXNlcidcclxuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnXHJcblxyXG5pbXBvcnQgQm9vdFN0YXRlIGZyb20gJy4vc3RhdGVzL2Jvb3QnXHJcbmltcG9ydCBMb2FkU3RhdGUgZnJvbSAnLi9zdGF0ZXMvbG9hZCdcclxuaW1wb3J0IFN0YXJ0U3RhdGUgZnJvbSAnLi9zdGF0ZXMvc3RhcnQnXHJcbmltcG9ydCBQbGF5U3RhdGUgZnJvbSAnLi9zdGF0ZXMvcGxheSdcclxuaW1wb3J0IE92ZXJTdGF0ZSBmcm9tICcuL3N0YXRlcy9vdmVyJ1xyXG5cclxubGV0IFdlYXRoZXIgPSBXZWF0aGVyIHx8IHt9XHJcblxyXG5XZWF0aGVyLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoJzEwMCUnLCAnMTAwJScsIFBoYXNlci5BVVRPLCAncm9vdCcpXHJcblxyXG5XZWF0aGVyLkJvb3RTdGF0ZSA9IEJvb3RTdGF0ZVxyXG5XZWF0aGVyLkxvYWRTdGF0ZSA9IExvYWRTdGF0ZVxyXG5XZWF0aGVyLlN0YXJ0U3RhdGUgPSBTdGFydFN0YXRlXHJcbldlYXRoZXIuUGxheVN0YXRlID0gUGxheVN0YXRlXHJcbldlYXRoZXIuT3ZlclN0YXRlID0gT3ZlclN0YXRlXHJcblxyXG5XZWF0aGVyLmdhbWUuc3RhdGUuYWRkKCdCb290JywgV2VhdGhlci5Cb290U3RhdGUpXHJcbldlYXRoZXIuZ2FtZS5zdGF0ZS5hZGQoJ0xvYWQnLCBXZWF0aGVyLkxvYWRTdGF0ZSlcclxuV2VhdGhlci5nYW1lLnN0YXRlLmFkZCgnU3RhcnQnLCBXZWF0aGVyLlN0YXJ0U3RhdGUpXHJcbldlYXRoZXIuZ2FtZS5zdGF0ZS5hZGQoJ1BsYXknLCBXZWF0aGVyLlBsYXlTdGF0ZSlcclxuV2VhdGhlci5nYW1lLnN0YXRlLmFkZCgnT3ZlcicsIFdlYXRoZXIuT3ZlclN0YXRlKVxyXG5cclxuV2VhdGhlci5nYW1lLnN0YXRlLnN0YXJ0KCdCb290JylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3R5bGUvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBwcmVsb2FkZXIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJ1xyXG4vLyBpbXBvcnQgbXljbG91ZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nsb3VkLnBuZydcclxuaW1wb3J0IG15Y2xvdWQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jbG91ZG1hbl8yNDgucG5nJ1xyXG5cclxubGV0IEJvb3RTdGF0ZSA9IHtcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnXHJcblxyXG4gICAgICAgIHRoaXMuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTFxyXG5cclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWVcclxuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBwcmVsb2FkOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncHJlbG9hZCcsIHByZWxvYWRlcilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnbXljbG91ZCcsIG15Y2xvdWQsIDI0OCwgMjQwKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7IC8vY29udGludWluZyB3aGVuIHRoZSBwYWdlIGlzIHVuZm9jdXNlZFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnTG9hZCcpXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCb290U3RhdGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcy9ib290LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNTdjYTFhMjA4NWQ4MmYwNTc0ZTNlZjc0MGI5YTVlYWQuZ2lmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL3ByZWxvYWRlci5naWZcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2Q4YzI3ZWM4OTA5OWM1MmFjNjc4NGZiMzlhMWU2YjljLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jbG91ZG1hbl8yNDgucG5nXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL3N0YXJ0cGFnZVxyXG5pbXBvcnQgdGFsa2luZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3RhbGtpbmcucG5nJ1xyXG5pbXBvcnQgYmcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iZy5qcGcnXHJcbmltcG9ydCBsb25nZm9ybV9idG5fMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2xvbmdmb3JtX2J0bl8xLnBuZydcclxuaW1wb3J0IGxvbmdmb3JtX2J0biBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2xvbmdmb3JtX2J0bi5wbmcnXHJcbmltcG9ydCBzdGFydGdhbWVfYnRuXzIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuXzIucG5nJ1xyXG5pbXBvcnQgc3RhcnRnYW1lX2J0biBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3N0YXJ0Z2FtZV9idG4ucG5nJ1xyXG5pbXBvcnQgdGl0bGUgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy90aXRsZS5wbmcnXHJcbmltcG9ydCBidG5fMV8xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzFfMS5wbmcnXHJcbmltcG9ydCBidG5fMV8yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmcnXHJcbmltcG9ydCBidG5fMl8xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzJfMS5wbmcnXHJcbmltcG9ydCBidG5fMl8yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRtXzJfMi5wbmcnXHJcbmltcG9ydCBidG5fM18xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmcnXHJcbmltcG9ydCBidG5fM18yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuXzNfMi5wbmcnXHJcblxyXG4vL2xldmVsMVxyXG5pbXBvcnQgZmlyc3RiZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUxLmpwZydcclxuLy8gaW1wb3J0IG15Y2xvdWQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jbG91ZC5wbmcnXHJcbmltcG9ydCBkYXJrc2t5MSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmcnXHJcbmltcG9ydCBibGFja2Nsb3VkMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMS5wbmcnXHJcbmltcG9ydCBibGFja2Nsb3VkMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JsYWNrY2xvdWRfMi5wbmcnXHJcbmltcG9ydCBiaWdjbG91ZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZydcclxuaW1wb3J0IGhhaWwgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iYWxsXzFfOTMucG5nJ1xyXG5pbXBvcnQgY29ybiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nvcm5fMV8yNDAucG5nJ1xyXG5pbXBvcnQgaGVhcnRfMSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nJ1xyXG5pbXBvcnQgaGVhcnRfMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzIucG5nJ1xyXG4vLyBpbXBvcnQgaWNlX2JyZWFrIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlX2JyZWFrLnBuZydcclxuaW1wb3J0IGljZTEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY2VfMS5wbmcnXHJcbmltcG9ydCBpY2UyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlXzIucG5nJ1xyXG5pbXBvcnQgaWNlMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ljZV8zLnBuZydcclxuaW1wb3J0IGNsb3VkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY2xvdWRfMS5wbmcnXHJcbmltcG9ydCBiaWdjbG91ZF9hbmdlcjEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iaWdjbG91ZF9hbmdlcjEucG5nJ1xyXG5pbXBvcnQgYmlnY2xvdWRfYW5nZXIyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYmlnY2xvdWRfYW5nZXIyLnBuZydcclxuaW1wb3J0IGNvdyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nvd18xXzcwLnBuZydcclxuaW1wb3J0IGJpZ2ljZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JpZ2ljZV8xODYucG5nJ1xyXG5pbXBvcnQgaWNlY2xvdWQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9pY2VjbG91ZC5wbmcnXHJcbmltcG9ydCBtcl93YW5nIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvbXJfd2FuZy5wbmcnXHJcblxyXG4vL2xldmVsMlxyXG5pbXBvcnQgc2Vjb25kYmcgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMi5qcGcnXHJcbmltcG9ydCBwZW9wbGUxIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvcGVvcGxlXzFfMjQwLnBuZydcclxuaW1wb3J0IHBlb3BsZTIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9wZW9wbGVfMl8yNDAucG5nJ1xyXG5pbXBvcnQgcGVvcGxlMyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL3Blb3BsZV8zXzI0MC5wbmcnXHJcbmltcG9ydCBkYXJrc2t5MiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMi5wbmcnXHJcblxyXG4vL2xldmVsM1xyXG5pbXBvcnQgdGhpcmRiZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUzLmpwZydcclxuaW1wb3J0IGNhcjEgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nJ1xyXG5pbXBvcnQgY2FyMiBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2Nhcl8yXzI0MC5wbmcnXHJcbmltcG9ydCBjYXIzIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY2FyXzNfMjQwLnBuZydcclxuaW1wb3J0IGNhcjQgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nJ1xyXG5pbXBvcnQgZGFya3NreTMgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9kYXJrc2t5XzMucG5nJ1xyXG5pbXBvcnQgaWNlZ3JvdW5kIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaWNlZ3JvdW5kXzI0MC5wbmcnXHJcbmltcG9ydCBwb2xpY2UgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9nYW1lM19zdGFydC5wbmcnXHJcbmltcG9ydCBhbmdyeWNsb3VkIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYW5ncnljbG91ZC5wbmcnXHJcblxyXG4vL2Jhbm5lclxyXG5pbXBvcnQgYWxhcm1iYW5uZXIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9hbGFybV8zMDAucG5nJ1xyXG5pbXBvcnQgcGFzc2VkYmFubmVyIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZydcclxuXHJcbi8vZmFpbFxyXG5pbXBvcnQgZmFpbF9iZyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ZhaWxfYmcuanBnJ1xyXG5pbXBvcnQgYnRuX3NoYXJlIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvYnRuX3NoYXJlLnBuZydcclxuaW1wb3J0IGZhaWxfNTEwIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvZmFpbF81MTAucG5nJ1xyXG5pbXBvcnQgZmIgZnJvbSAnLi4vLi4vcHVibGljL2Fzc2V0cy9mYi5qcGcnXHJcblxyXG4vL3NvdW5kc1xyXG5pbXBvcnQgYmdzb3VuZCBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL01yX1R1cnRsZS5tcDMnXHJcblxyXG5cclxubGV0IExvYWRTdGF0ZSA9IHtcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCdcclxuXHJcbiAgICAgICAgLy9teWNsb3VkXHJcbiAgICAgICAgdGhpcy5teWNsb3VkID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclggLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0LzIsICdteWNsb3VkJylcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5jaG9yLnNldFRvKDAuNSwgMC41KVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zcHJpdGVzY2FsZSA9IDAuNVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyh0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpXHJcbiAgICAgICAgLy8gdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMuYWRkKCdydW4nLCBbMSwgMiwgMywgNF0sIDEwLCB0cnVlKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLmFkZCgncnVuJywgWzUsIDQsIDUsIDYsIDcsIDZdLCAxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKVxyXG5cclxuICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgIFwi5q+PIOWIsCDlpI8g5aSpIO+8jCDpmaQg5LqGIOmisSDpoqgg5aSWIO+8jCDlsI0g5rWBIOaXuiBcIixcclxuICAgICAgICAgICAgXCLnm5sg5LmfIOW4uCDluLYg5L6GIOWGsCDpm7kg562JIOeBvSDlrrMg5oCnIOWkqSDmsKMg77yMIFwiLFxyXG4gICAgICAgICAgICBcIuePviDlnKgg5L2gIOaciSDmqZ8g5pyDIOaLryDmlZEg5Y+wIOeBoyDkuI0g5Y+XIOWGsCDpm7kgXCIsXHJcbiAgICAgICAgICAgIFwi5L61IOilsiDvvIwg5L2gIOa6liDlgpkg5aW9IOS6hiDll44g77yfIF8gXCJcclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHZhciBkaWFsb2d1ZSA9IHt9XHJcbiAgICAgICAgZGlhbG9ndWUuY29udGVudCA9IHdvcmRzXHJcblxyXG4gICAgICAgIHRoaXMudHlwZXdyaXRlcih0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjIxLHRoaXMubXljbG91ZC55LXRoaXMubXljbG91ZC5oZWlnaHQqMiwgZGlhbG9ndWUpXHJcbiAgICB9LFxyXG5cclxuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9mb3IgbG9hZGluZyBwcm9ncmVzc1xyXG4gICAgICAgIHZhciBwcmVsb2FkU3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoLzIgLSAyMjAvMiwgdGhpcy5teWNsb3VkLnkgKyB0aGlzLm15Y2xvdWQuaGVpZ2h0LzIsICdwcmVsb2FkJylcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHByZWxvYWRTcHJpdGUpXHJcblxyXG4gICAgICAgIC8vc3RhcnRwYWdlXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2RpYWxvZ3VlJywgdGFsa2luZykgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiZycsIGJnKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdsb25nZm9ybV9idG5fY2xpY2snLCBsb25nZm9ybV9idG5fMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnbG9uZ2Zvcm1fYnRuJywgbG9uZ2Zvcm1fYnRuKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzdGFydGdhbWVfYnRuX2NsaWNrJywgc3RhcnRnYW1lX2J0bl8yKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzdGFydGdhbWVfYnRuJywgc3RhcnRnYW1lX2J0bilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGl0bGUnLCB0aXRsZSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYnRuXzFfMScsIGJ0bl8xXzEpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2J0bl8xXzFfY2xpY2snLCBidG5fMV8yKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fMl8xJywgYnRuXzJfMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYnRuXzJfMV9jbGljaycsIGJ0bl8yXzIpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2J0bl8zXzEnLCBidG5fM18xKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fM18xX2NsaWNrJywgYnRuXzNfMilcclxuXHJcbiAgICAgICAgLy9iYW5uZXJcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnYWxhcm1iYW5uZXInLCBhbGFybWJhbm5lciwgMzAwLDk0KSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3Bhc3NlZGJhbm5lcicsIHBhc3NlZGJhbm5lciwgMzAwLDk0KSAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgLy9sZXZlbDFcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZmlyc3RiZycsIGZpcnN0YmcpXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ215Y2xvdWQnLCBteWNsb3VkLCAyMjQsIDIyNClcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZGFya3NreTEnLCBkYXJrc2t5MSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmxhY2tjbG91ZDEnLCBibGFja2Nsb3VkMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmxhY2tjbG91ZDInLCBibGFja2Nsb3VkMilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmlnY2xvdWQnLCBiaWdjbG91ZClcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnaGFpbCcsIGhhaWwsIDkzLDkzKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nvcm4nLCBjb3JuLCAyNDAsMTg5KSAgICAgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncmVkaGVhcnQnLCBoZWFydF8xKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdibGFja2hlYXJ0JywgaGVhcnRfMilcclxuICAgICAgICAvLyB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaWNlX2JyZWFrJywgaWNlX2JyZWFrKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdpY2UxJywgaWNlMSlcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaWNlMicsIGljZTIpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2ljZTMnLCBpY2UzKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdjbG91ZCcsIGNsb3VkKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdpY2VjbG91ZCcsIGljZWNsb3VkKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiaWdjbG91ZF9hbmdlcjEnLCBiaWdjbG91ZF9hbmdlcjEpXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JpZ2Nsb3VkX2FuZ2VyMicsIGJpZ2Nsb3VkX2FuZ2VyMilcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY293JywgY293LDcwLDYwKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdiaWdoYWlsJywgYmlnaWNlLCA1NTcvMywgMTg3KSAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3dhbmcnLCBtcl93YW5nKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAvL2xldmVsMlxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdzZWNvbmRiZycsIHNlY29uZGJnKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUxJywgcGVvcGxlMSwgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUyJywgcGVvcGxlMiwgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdwZW9wbGUzJywgcGVvcGxlMywgMjQwLDE5NikgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdkYXJrc2t5MicsIGRhcmtza3kyKVxyXG5cclxuICAgICAgICAvL2xldmVsM1xyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0aGlyZGJnJywgdGhpcmRiZylcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMScsIGNhcjEsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMicsIGNhcjIsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyMycsIGNhcjMsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2FyNCcsIGNhcjQsIDI0MCwxNTApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnaWNlZ3JvdW5kJywgaWNlZ3JvdW5kLCAyNDAsMTcwKSAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Rhcmtza3kzJywgZGFya3NreTMpICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgncG9saWNlJywgcG9saWNlKSAgXHJcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2FsYXJtY2xvdWQnLCBhbmdyeWNsb3VkKSAgXHJcblxyXG4gICAgICAgIC8vZmFpbFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdmYWlsX2JnJywgZmFpbF9iZykgIFxyXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdidG5fc2hhcmUnLCBidG5fc2hhcmUpICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZmFpbGNsb3VkJywgZmFpbF81MTAsIDUxMCw0NjApICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZmInLCBmYikgIFxyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbygnYmdzb3VuZCcsIGJnc291bmQpXHJcblxyXG5cclxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5maW5pc2hlZCAmJiB0aGlzLmdhbWUuc3RhdGUuY3VycmVudD09PVwiTG9hZFwiKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdTdGFydCcsIHRydWUsIGZhbHNlLCAnc3RhcnRwYWdlJylcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHR5cGV3cml0ZXI6IGZ1bmN0aW9uKHgseSxkaWFsb2d1ZSl7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRpYWxvZ3VlLmNvbnRlbnRcclxuXHJcbiAgICAgICAgdGhpcy5saW5lID0gW11cclxuICAgICAgICB0aGlzLndvcmRJbmRleCA9IDBcclxuICAgICAgICB0aGlzLmxpbmVJbmRleCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy53b3JkRGVsYXkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5saW5lRGVsYXkgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gZGlhbG9ndWUuc3R5bGUgfHx7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgJycsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLm5leHRMaW5lKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dExpbmU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVJbmRleCA9PT0gdGhpcy5jb250ZW50Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSdyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAyLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgU3BsaXQgdGhlIGN1cnJlbnQgbGluZSBvbiBzcGFjZXMsIHNvIG9uZSB3b3JkIHBlciBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5jb250ZW50W3RoaXMubGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgdGhlIHdvcmQgaW5kZXggdG8gemVybyAodGhlIGZpcnN0IHdvcmQgaW4gdGhlIGxpbmUpXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyAgQ2FsbCB0aGUgJ25leHRXb3JkJyBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIHdvcmQgaW4gdGhlIGxpbmUgKGxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy53b3JkRGVsYXksIHRoaXMubGluZS5sZW5ndGgsIHRoaXMubmV4dFdvcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0byB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXgrKztcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFdvcmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vICBBZGQgdGhlIG5leHQgd29yZCBvbnRvIHRoZSB0ZXh0IHN0cmluZywgZm9sbG93ZWQgYnkgYSBzcGFjZVxyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KHRoaXMubGluZVt0aGlzLndvcmRJbmRleF0pO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0aGUgd29yZCBpbmRleCB0byB0aGUgbmV4dCB3b3JkIGluIHRoZSBsaW5lXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gIExhc3Qgd29yZD9cclxuICAgICAgICBpZiAodGhpcy53b3JkSW5kZXggPT09IHRoaXMubGluZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGEgY2FycmlhZ2UgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEdldCB0aGUgbmV4dCBsaW5lIGFmdGVyIHRoZSBsaW5lRGVsYXkgYW1vdW50IG9mIG1zIGhhcyBlbGFwc2VkXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQodGhpcy5saW5lRGVsYXksIHRoaXMubmV4dExpbmUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTG9hZFN0YXRlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcy9sb2FkLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNDc3YmRmYzc0NmI2ZWJmNzRjMTVkNzQzZWYzNTZmOGYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL3RhbGtpbmcucG5nXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS84YWNmYzkzZmRiZjk3Y2FiZDhmZjUwZDk4Y2YyYzc3MC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmcuanBnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS84MGZmMmQwOGE0N2FiNzM3MDBhZjQyNTZiMzg0NDIzZi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9lZmU0MmUxYmYwODUxYTI5MjE0OGMzYzRjMDU4ZDE3My5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvbG9uZ2Zvcm1fYnRuLnBuZ1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMzJiNDRlYmFhZDkwOGU5NjNiNGIxM2QyNDg3YjA2OTIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL3N0YXJ0Z2FtZV9idG5fMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2ZhMTczNzdiZTY1MWE4NTA3ZGNmYzU5NGIwMzk1OTJjLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9zdGFydGdhbWVfYnRuLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvOTJkMzk2MTg1MGY5MThkYjYzMDhlMjU1ZjQ4ZDc1MDcucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL3RpdGxlLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYzNlMmRiNDk1YTYxZjMxNzE1YjE0MzFlZWRhYjlhMjIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2J0bl8xXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8yZGQ4NjcyMGM3NzkxYjFlZDMzYTZmYzNlNDQ3ZjgwYy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYnRuXzFfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzk4ZDU2ZTExZWQ1MDlmMGYxMTY5YWMyOTcxNWY1OWNjLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9idG5fMl8xLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYTAwNWI2NzM1ODI3M2QyMjI5Y2Q0MGU2YWY3NzUwOWMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2J0bV8yXzIucG5nXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9iNzU0ODc3M2E5YWQzYTAwMmEwMWZhMDAwNTU3YjhhMC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYnRuXzNfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2NkYTBjOWMzNzQyYTdiMjhlZDViZTViOTU1ZTI4NTgzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9idG5fM18yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMzJlODExMDQ4ZWJmZGVjOTA1MDJkY2VjZDk5MzZiODEuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUxLmpwZ1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNTUxYmExZDk4NGNhZTRjMWMwMDUwMGQ2ZDIyM2FlYjkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2M1MTFlMzc3NWVmNTUwMWQ4M2UwMTk1MWI3ZGEyYmRiLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9ibGFja2Nsb3VkXzEucG5nXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS85NDNkZDE0YTM2ZDJmYTMzMWZkMGEyYjgyZGVkZGQ0NC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmxhY2tjbG91ZF8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvODQ1N2M0ZWM4YzdiYmZkMjAyMDY4NThiMWU1ODQ4YjgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNzNmYTcyMDBmMzc3OGFjYWRjZjUxN2I0M2QwM2YyYmMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JhbGxfMV85My5wbmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzEzMjc0NzU1Y2I5OWQxMmE5OTg0YTJlMWUyNWEyZDFiLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jb3JuXzFfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZDRlNzE2N2QwZjA2ZWZkMzcwZjU3ZDI5YWM3OTBlZDkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2hlYXJ0XzEucG5nXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS85NTNkYzBkOGFlY2VjM2Q4ODI2N2M5MDQ0ZjFlYWVhYS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvaGVhcnRfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2E4MmZiYTFmYzg4ZDQ2ODI0YWQ2ZWQ5MGUzZjlkOTM4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2VfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzc1YmFkZTg0ZDE1NTg2OWE3MmQzZGJhNjgwZWYyY2ZmLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2VfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzU2MDc4NmE5MmQ0M2Q5NDVmNjQ0ZTRlZDBhYmE5NWViLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2VfMy5wbmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzE3YWNkMDdhZWQyZWM3MmJmNzZmNmExNWQ2YzgzMmM4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jbG91ZF8xLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMWVmYmVmYmZiMjYxM2FiOTFkODFhYWVmY2RhZTU2NDAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JpZ2Nsb3VkX2FuZ2VyMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzFhOWY2Y2Q4MDgwODYxZDI3ZjY0MDM2YjljYmJhNWMzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9iaWdjbG91ZF9hbmdlcjIucG5nXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS83ODQwOGUxNmRmZGMxZjNjODYyMTM1OWQxMTk5NTkzMy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY293XzFfNzAucG5nXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8xMTZiMDBjOWY4OWYwNjA1NjUwNjk4NzU3Mzg1Nzc0NS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYmlnaWNlXzE4Ni5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzc2MWM5MDZhN2JhYzkzYmQwY2Q1MWEwM2VhZmQxMTMxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9pY2VjbG91ZC5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2JlNjZlNTIxNGJkODZjZjA5Yjg5YjRjMDlmM2E3NjliLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9tcl93YW5nLnBuZ1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvMGUxYWQ2MmQ1MjIxMzIyZTM3Yzc0M2M1NWZmMmY1ZmMuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2JnX2dhbWUyLmpwZ1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvNjY5MWU5ODExNTE2ZWQ1YzFmYjVhMWJhYmYxYWNhMTYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL3Blb3BsZV8xXzI0MC5wbmdcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlL2VjNGFlYzhlOWFkODc5NzgyMTA2ZWVmY2Y4MTA3ZTAxLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9wZW9wbGVfMl8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS82YmE2YzIyNzZjZjlhZjU1NTg4NzU3YmZmZjgyMTk1OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvcGVvcGxlXzNfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZTZmZDZhYzkxNzAwMDUwZGJlMWJlYzFjYTFhY2U0NjgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2Rhcmtza3lfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzMyZGJiZDdiNjJlZTkxMTMxYWM2MDQyZTZiMGVlNDNmLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9iZ19nYW1lMy5qcGdcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzI4NmFhMWY4NzEzZGFjZDU1ZDdjMjVhOGRkNDY4ZmVmLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfMV8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS8xY2IwYzUxOGY3NTk3MmNmZDcxMDJhNDJjYTNiZjE2NS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY2FyXzJfMjQwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZjQ5ZWM2NTU1NjQ4NGViNDJkYzY3ZGY3MDExMjYyMWYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2Nhcl8zXzI0MC5wbmdcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzBhM2ZhMTUwYTUzOTA0YjViNGVmNzI1MDllMDNlOWQzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9jYXJfNF8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS80MTY2YzhlMjA2OGUwYjk3NmE0ZjAwYzQ1ODhhZGY1Mi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZGFya3NreV8zLnBuZ1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYjI5NjA4MTdmNmQzMmVmYzMyMzIzMTQ3NThmZTQxNTAucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ljZWdyb3VuZF8yNDAucG5nXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9jZTYwMTRkZGU0YjBiZWI2OTQxZWFlYTA0MGE2MjI2Yy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvZ2FtZTNfc3RhcnQucG5nXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9jMGE2MWI5MWYwMjQ4YjRmNzdkZWRiMzJiZTEwYmI3Yi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYW5ncnljbG91ZC5wbmdcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlLzJkMWFmMzliMjQ3ZDFhZGE2YzkxMDE0MmYzN2UwYjE5LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Fzc2V0cy9hbGFybV8zMDAucG5nXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS83ZDQ4YmIyNTIwZmRlNzg1MGQ3YWVlZTQ2OGExMmUwYS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvY29tcGxldGVfMzAwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYzM3NmFhZjBjNTRhMGY0ZTcxMmM3MWZiNjc0NjAzYTkuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ZhaWxfYmcuanBnXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZS9hYWY5YjI1YzQzYzViOTU5MmVmMGIwYzM0MWJlNDRlMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9hc3NldHMvYnRuX3NoYXJlLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvYjY3YTgyNDBkOTM3NTVkOTY4OWFlN2ZkNTZlNDlkNTgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ZhaWxfNTEwLnBuZ1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2UvZmU0ODI0ZmMzNGU5ODQ1MDViNTk0MzgwZmY5ZTkxYzYuanBnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL2ZiLmpwZ1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwibWVkaWEvZGFkODM1MDQxMDlhNjcxOTM0MWM3ZmZmZWRlOTIyOGQubXAzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvYXNzZXRzL01yX1R1cnRsZS5tcDNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImxldCBTdGFydFN0YXRlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKGJlZ2lubmluZyl7XHJcblxyXG4gICAgICAgIHRoaXMuYmVnaW5uaW5nID0gYmVnaW5uaW5nXHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuRVhBQ1RfRklUXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5iZWdpbm5pbmc9PT1cInN0YXJ0cGFnZVwiKXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmdzb3VuZCA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oJ2Jnc291bmQnLCAwLjIsIHRydWUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0NvbnRyb2xlcigncGxheScpXHJcblxyXG4gICAgICAgICAgICB2YXIgYmcgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsMCwnYmcnKVxyXG4gICAgICAgICAgICBiZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgICAgICBiZy5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsLTEwMCwndGl0bGUnKVxyXG4gICAgICAgICAgICB0aXRsZS53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDEuMVxyXG4gICAgICAgICAgICB0aXRsZS5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC42XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGVUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGl0bGUpLnRvKHt5OiAwfSwgMTAwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuT3V0LCB0cnVlKVxyXG4gICAgICAgICAgICB0aXRsZVR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgJ+mWi+Wni+mBiuaIsicsIDAsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMl8xJywgJ+ingOeci+WwiOmhjCcsIDEsIGZhbHNlKSAgICAgICAgXHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYmVnaW5uaW5nPT09XCJteWNsb3VkT1NcIil7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRNdXNpY0NvbnRyb2xlcigncGxheScpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ215Y2xvdWQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksMC41LDAuNSlcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciB3b3JkcyA9IFwi5oiR5L6G6Ieq6Zuy56uv77yM55yL5LiN5oWj6Zuy5py16KO96YCg5YawXFxu6Zu55Y2x5a6z5Lq66aGe77yM6KaB5ouv5pWR5Zyw55CD5LiN5Y+X5YawXFxu6Zu55pS75pOK44CCXFxuXCJcclxuICAgICAgICAgICAgLy8gdGhpcy5zZXR0aW5nRGlhbG9ndWUodGhpcy5teWNsb3VkLngsIHRoaXMubXljbG91ZC55IC0gdGhpcy5teWNsb3VkLmhlaWdodCoxLjIsIHdvcmRzKVxyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLmiJEg5L6GIOiHqiDpm7Ig56uvIO+8jCDnnIsg5LiNIOaFoyDpm7Ig5py1IOijvSDpgKAg5YawIFwiLFxyXG4gICAgICAgICAgICAgICAgXCLpm7kg5Y2xIOWusyDkurog6aGeIO+8jCDopoEg5ouvIOaVkSDlnLAg55CDIOS4jSDlj5cg5YawIFwiLFxyXG4gICAgICAgICAgICAgICAgXCLpm7kg5pS7IOaTiiDjgIIgX1wiXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHZhciBkaWFsb2d1ZSA9IHRoaXMuc2V0dGluZ0RpYWxvZ3VlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLm15Y2xvdWQueSAtIHRoaXMubXljbG91ZC5oZWlnaHQqMS4yKVxyXG4gICAgICAgICAgICBkaWFsb2d1ZS5jb250ZW50ID0gd29yZHNcclxuICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUgPSB7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjMDAwXCIgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBld3JpdGVyKGRpYWxvZ3VlLmltZy54IC0gKGRpYWxvZ3VlLmltZy53aWR0aCowLjgpLzIsZGlhbG9ndWUuaW1nLnktKGRpYWxvZ3VlLmltZy5oZWlnaHQqMC44KS8yLCBkaWFsb2d1ZSlcclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmJ0bkdlbmVyYXRvcignYnRuXzFfMScsICfpgYrmiLLoqqrmmI4nLCAwLCBmYWxzZSkgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJ0bkdlbmVyYXRvcignYnRuXzNfMScsICfnm7TmjqXplovlp4snLCAwLCBmYWxzZSkgICAgICAgIFxyXG5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmJlZ2lubmluZz09PVwiaW50cm8xXCIpe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmJ1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdCaWdjbG91ZCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ2hlYXJ0cyhbJ3JlZGhlYXJ0JywncmVkaGVhcnQnLCdyZWRoZWFydCddKVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdtYXNrKClcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nbXljbG91ZCh0aGlzLmdhbWUud29ybGQud2lkdGgqMC44NSx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KjAuNilcclxuXHJcbiAgICAgICAgICAgIHZhciB3b3JkcyA9IFtcclxuICAgICAgICAgICAgICAgIFwi5ZyoIOaZgiDplpMg5YWnIOS9vyDnlKgg5omLIOaMhyDmi5Yg5puzIOenuyDli5Ug6ZuyIOactSBcIixcclxuICAgICAgICAgICAgICAgIFwi6ZiyIOatoiDlhrAg6Zu5IOiQvSDkuIsgX1wiXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHZhciBkaWFsb2d1ZSA9IHRoaXMuc2V0dGluZ0RpYWxvZ3VlKHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLCB0aGlzLm15Y2xvdWQueSAtIHRoaXMubXljbG91ZC5oZWlnaHQqMS4yKVxyXG4gICAgICAgICAgICBkaWFsb2d1ZS5jb250ZW50ID0gd29yZHNcclxuICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUgPSB7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjMDAwXCIgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBld3JpdGVyKGRpYWxvZ3VlLmltZy54IC0gKGRpYWxvZ3VlLmltZy53aWR0aCowLjgpLzIsZGlhbG9ndWUuaW1nLnktKGRpYWxvZ3VlLmltZy5oZWlnaHQqMC44KS8yLCBkaWFsb2d1ZSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgJ+S4i+S4gOatpScsIDAsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fM18xJywgJ+ebtOaOpemWi+WniycsIDEsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuYmVnaW5uaW5nPT09XCJpbnRybzJcIil7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0JpZ2Nsb3VkKClcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nbWFzaygpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ2hlYXJ0cyhbJ3JlZGhlYXJ0JywncmVkaGVhcnQnLCdyZWRoZWFydCddKVxyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdteWNsb3VkKHRoaXMuZ2FtZS53b3JsZC53aWR0aCowLjg1LHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC42KVxyXG5cclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLoi6Ug5YawIOmbuSDmiZMg5LitIOebriDmqJkg54mpIO+8jCDliYcg5pyDIOaQjSDlpLEg5LiAIFwiLFxyXG4gICAgICAgICAgICAgICAgXCLlgIsg5oSbIOW/gyDvvIwg55W2IOS4iSDpoYYg5oSbIOW/gyDmrbgg6Zu2IOWJhyDpgYog5oiyXCIsXHJcbiAgICAgICAgICAgICAgICBcIue1kCDmnZ8g44CCXCJcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgdmFyIGRpYWxvZ3VlID0gdGhpcy5zZXR0aW5nRGlhbG9ndWUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMubXljbG91ZC55IC0gdGhpcy5teWNsb3VkLmhlaWdodCoxLjIpXHJcbiAgICAgICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG4gICAgICAgICAgICBkaWFsb2d1ZS5zdHlsZSA9IHsgZm9udDogXCIxNnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiMwMDBcIiB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR5cGV3cml0ZXIoZGlhbG9ndWUuaW1nLnggLSAoZGlhbG9ndWUuaW1nLndpZHRoKjAuOCkvMixkaWFsb2d1ZS5pbWcueS0oZGlhbG9ndWUuaW1nLmhlaWdodCowLjgpLzIsIGRpYWxvZ3VlKVxyXG5cclxuICAgICAgICAgICAgLy90d2lua2xpbmcgaGVhcnRzXHJcbiAgICAgICAgICAgIHZhciB0d2lua2xpbmdIZWFydHM9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5oZWFydHMpLnRvKHthbHBoYTogMH0sIDUwMCwgXCJMaW5lYXJcIiwgdHJ1ZSlcclxuICAgICAgICAgICAgdHdpbmtsaW5nSGVhcnRzLnlveW8odHJ1ZSw1MDApXHJcbiAgICAgICAgICAgIHR3aW5rbGluZ0hlYXJ0cy5yZXBlYXQoMTAsMTAwMClcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywgJ+S4i+S4gOatpScsIDAsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fM18xJywgJ+ebtOaOpemWi+WniycsIDEsIGZhbHNlKSAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nRGlhbG9ndWU6IGZ1bmN0aW9uKHgseSx3b3Jkcyl7XHJcblxyXG4gICAgICAgIHZhciBkaWFsb2d1ZUltZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoeCx5LCAnZGlhbG9ndWUnKSBcclxuICAgICAgICBkaWFsb2d1ZUltZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuOFxyXG4gICAgICAgIGRpYWxvZ3VlSW1nLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjJcclxuICAgICAgICBkaWFsb2d1ZUltZy5hbmNob3Iuc2V0VG8oMC41LDAuNSlcclxuXHJcbiAgICAgICAgdmFyIGRpYWxvZ3VlID0ge31cclxuICAgICAgICBkaWFsb2d1ZS5pbWcgPSBkaWFsb2d1ZUltZ1xyXG4gICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG5cclxuICAgICAgICBpZihkaWFsb2d1ZS5jb250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkU3BlYWtpbmcoZGlhbG9ndWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlhbG9ndWVcclxuICAgIH0sXHJcblxyXG4gICAgc2V0dGluZ215Y2xvdWQ6IGZ1bmN0aW9uKHgseSxhbmNob3JfeCxhbmNob3JfeSkge1xyXG4gICAgICAgIHZhciBteWNsb3VkX3ggPSB4IHx8IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYXHJcbiAgICAgICAgdmFyIG15Y2xvdWRfeSA9IHkgfHwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuN1xyXG4gICAgICAgIHZhciBhbmNob3JYID0gYW5jaG9yX3ggfHwgMC41XHJcbiAgICAgICAgdmFyIGFuY2hvclkgPSBhbmNob3JfeSB8fCAwLjVcclxuXHJcbiAgICAgICAgdGhpcy5teWNsb3VkID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUobXljbG91ZF94LG15Y2xvdWRfeSwgJ215Y2xvdWQnKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmNob3Iuc2V0VG8oYW5jaG9yWCwgYW5jaG9yWSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUgPSAwLjRcclxuICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8odGhpcy5teWNsb3VkLnNwcml0ZXNjYWxlKVxyXG5cclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5hZGQoJ3N0YXRpYycsIFswLCAxLCAwLCAyLCAwLCAxLCAwLCAzXSwxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdzdGF0aWMnKVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5naGVhcnRzOiBmdW5jdGlvbihoZWFydHMpIHtcclxuXHJcbiAgICAgICAgdmFyIGhlYXJ0XzMgPSBoZWFydHNbMF1cclxuICAgICAgICB2YXIgaGVhcnRfMiA9IGhlYXJ0c1sxXVxyXG4gICAgICAgIHZhciBoZWFydF8xID0gaGVhcnRzWzJdICAgICAgICBcclxuXHJcbiAgICAgICAgdmFyIGhlYXJ0c2NhbGUgPSAwLjZcclxuICAgICAgICB2YXIgaGVhcnQzID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgxMCwyMCxoZWFydF8zKVxyXG4gICAgICAgIHZhciBoZWFydDIgPSB0aGlzLmdhbWUuYWRkLmltYWdlKGhlYXJ0My54ICsgaGVhcnQzLndpZHRoICogaGVhcnRzY2FsZSwyMCxoZWFydF8yKSAgICAgIFxyXG4gICAgICAgIHZhciBoZWFydDEgPSB0aGlzLmdhbWUuYWRkLmltYWdlKGhlYXJ0Mi54ICsgaGVhcnQyLndpZHRoICogaGVhcnRzY2FsZSwyMCxoZWFydF8xKSAgICAgIFxyXG4gICAgICAgIGhlYXJ0My5zY2FsZS5zZXRUbyhoZWFydHNjYWxlKVxyXG4gICAgICAgIGhlYXJ0Mi5zY2FsZS5zZXRUbyhoZWFydHNjYWxlKVxyXG4gICAgICAgIGhlYXJ0MS5zY2FsZS5zZXRUbyhoZWFydHNjYWxlKVxyXG5cclxuICAgICAgICB0aGlzLmhlYXJ0cyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgIHRoaXMuaGVhcnRzLmFkZChoZWFydDEpXHJcbiAgICAgICAgdGhpcy5oZWFydHMuYWRkKGhlYXJ0MilcclxuICAgICAgICB0aGlzLmhlYXJ0cy5hZGQoaGVhcnQzKVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nbWFzazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGJtZCA9IHRoaXMuZ2FtZS5tYWtlLmJpdG1hcERhdGEodGhpcy5nYW1lLndvcmxkLndpZHRoLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQpXHJcbiAgICAgICAgYm1kLmFkZFRvV29ybGQoKVxyXG4gICAgICAgIGJtZC5yZWN0KDAsMCx0aGlzLmdhbWUud29ybGQud2lkdGgsdGhpcy5nYW1lLndvcmxkLmhlaWdodCwncmdiYSgwLDAsMCwwLjYpJylcclxuICAgIH0sXHJcblxyXG4gICAgc2V0dGluZ0JpZ2Nsb3VkOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZCA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIDEwLCdiaWdjbG91ZCcpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC5hbmNob3Iuc2V0VG8oMC41LDApICAgICAgICBcclxuICAgICAgICB2YXIgYmlnY2xvdWRJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JpZ2Nsb3VkJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC5oZWlnaHQgPSB0aGlzLmJpZ2Nsb3VkLndpZHRoIC8gYmlnY2xvdWRJbWcud2lkdGggKiBiaWdjbG91ZEltZy5oZWlnaHRcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5iaWdjbG91ZC53aWR0aCAqIDAuNywgdGhpcy5iaWdjbG91ZC5oZWlnaHQgKiAwLjU1LCdiaWdjbG91ZF9hbmdlcjEnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLmFuY2hvci5zZXRUbygwLjUsMC41KSAgIFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLndpZHRoID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMiA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5iaWdjbG91ZC53aWR0aCAqIDAuMTUsIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ICogMC44LCdiaWdjbG91ZF9hbmdlcjInKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLmFuY2hvci5zZXRUbygwLjUsMC41KSAgIFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLndpZHRoID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBteWNsb3VkU3BlYWtpbmc6IGZ1bmN0aW9uKGRpYWxvZ3VlKSB7XHJcbiAgICAgICAgLy8gdmFyIGNvbnRlbnQgPSBcIuaIkeS+huiHqumbsuerr++8jOeci+S4jeaFo+mbsuacteijvemAoOWGsOmbueWNseWus+S6uumhnu+8jOimgeaLr+aVkeWcsOeQg+S4jeWPl+WGsOmbueaUu+aTiuOAglwiXHJcblxyXG4gICAgICAgIHZhciBzdHlsZSA9IHsgZm9udDogXCIxNnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiMwMDBcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzQWxpZ25IOiBcImNlbnRlclwiLCBib3VuZHNBbGlnblY6IFwibWlkZGxlXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRXcmFwOiB0cnVlLCB3b3JkV3JhcFdpZHRoOiBkaWFsb2d1ZS53aWR0aCowLjZ9XHJcblxyXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KGRpYWxvZ3VlLmltZy54LCBkaWFsb2d1ZS5pbWcueSxkaWFsb2d1ZS5jb250ZW50LHN0eWxlKVxyXG4gICAgICAgIHRleHQuYW5jaG9yLnNldFRvKDAuNSwwLjUpXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkdlbmVyYXRvcjogZnVuY3Rpb24oYnRuU3R5bGUsIHZhbHVlLCBwb3NpdGlvbiwgaXNDbGljayl7XHJcblxyXG4gICAgICAgIHZhciB3aWR0aCA9IDE1MFxyXG4gICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclhcclxuICAgICAgICB2YXIgbG93ZXJfeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjlcclxuICAgICAgICB2YXIgdXBwZXJfeSA9IGxvd2VyX3kgLSBoZWlnaHQgKiAxLjVcclxuICAgICAgICB2YXIgeSA9IChwb3NpdGlvbj09MCk/dXBwZXJfeTpsb3dlcl95XHJcbiAgICAgICAgdmFyIGFuY2hvcl94ID0gMC41XHJcbiAgICAgICAgdmFyIGFuY2hvcl95ID0gKHBvc2l0aW9uPT0wKT8wLjI6MC40XHJcbiAgICAgICAgdmFyIHR4dF9hbmNob3JfeSA9IChwb3NpdGlvbj09MCk/MDowLjNcclxuICAgICAgICB2YXIgc3R5bGUgPSBpc0NsaWNrP2J0blN0eWxlKydfY2xpY2snOmJ0blN0eWxlXHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih4LCB5LCBzdHlsZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKHN0eWxlLCB2YWx1ZSwgcG9zaXRpb24sIHRydWUpXHJcbiAgICAgICAgfSwgdGhpcywgMSwxLDApXHJcblxyXG4gICAgICAgIGJ1dHRvbi5hbmNob3Iuc2V0VG8oYW5jaG9yX3gsYW5jaG9yX3kpXHJcbiAgICAgICAgYnV0dG9uLndpZHRoID0gd2lkdGhcclxuICAgICAgICBidXR0b24uaGVpZ2h0ID0gaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciB0eHRfc3R5bGUgPSB7Zm9udDogXCIyMnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiNmZmZcIn1cclxuXHJcbiAgICAgICAgdmFyIGJ1dHRvbl90eHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgdmFsdWUsIHR4dF9zdHlsZSlcclxuICAgICAgICBidXR0b25fdHh0LmFuY2hvci5zZXRUbyhhbmNob3JfeCx0eHRfYW5jaG9yX3kpXHJcblxyXG4gICAgICAgIGlmKGlzQ2xpY2spe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcih2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRlQ2hhbmdlcjogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgIHN3aXRjaCh2YWx1ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ+mWi+Wni+mBiuaIsic6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0XCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1N0YXJ0JywgdHJ1ZSwgZmFsc2UsICdteWNsb3VkT1MnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNDb250cm9sZXIoJ3N0b3AnKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAn6KeA55yL5bCI6aGMJzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibG9uZ2Zvcm1cIilcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdzb3VuZC5zdG9wKClcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ+mBiuaIsuiqquaYjic6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludHJvZHVjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdTdGFydCcsIHRydWUsIGZhbHNlLCAnaW50cm8xJykgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ+ebtOaOpemWi+Wniyc6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGFueXdheVwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5JywgdHJ1ZSwgZmFsc2UsICdsZXZlbDEnLCAndHJpYWwxLTEnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNDb250cm9sZXIoJ3N0b3AnKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgY2FzZSAn5LiL5LiA5q2lJzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV4dFwiKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5iZWdpbm5pbmc9PT1cImludHJvMVwiKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ3RyaWFsJykgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuYmVnaW5uaW5nPT09XCJpbnRybzJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5JywgdHJ1ZSwgZmFsc2UsICd0cmlhbDInKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0eXBld3JpdGVyOiBmdW5jdGlvbih4LHksZGlhbG9ndWUpe1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBkaWFsb2d1ZS5jb250ZW50XHJcblxyXG4gICAgICAgIHRoaXMubGluZSA9IFtdXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud29yZERlbGF5ID0gMTAwO1xyXG4gICAgICAgIHRoaXMubGluZURlbGF5ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlXHJcblxyXG4gICAgICAgIHZhciBzdHlsZSA9IGRpYWxvZ3VlLnN0eWxlIHx8eyBmb250OiBcIjE2cHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiI2ZmZlwiIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHgsIHksICcnLCBzdHlsZSk7XHJcbiAgICAgICAgdGhpcy5uZXh0TGluZSgpXHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRMaW5lOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saW5lSW5kZXggPT09IHRoaXMuY29udGVudC5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgV2UncmUgZmluaXNoZWRcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWVcclxuICAgICAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gIFNwbGl0IHRoZSBjdXJyZW50IGxpbmUgb24gc3BhY2VzLCBzbyBvbmUgd29yZCBwZXIgYXJyYXkgZWxlbWVudFxyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMuY29udGVudFt0aGlzLmxpbmVJbmRleF0uc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgLy8gIFJlc2V0IHRoZSB3b3JkIGluZGV4IHRvIHplcm8gKHRoZSBmaXJzdCB3b3JkIGluIHRoZSBsaW5lKVxyXG4gICAgICAgIHRoaXMud29yZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8gIENhbGwgdGhlICduZXh0V29yZCcgZnVuY3Rpb24gb25jZSBmb3IgZWFjaCB3b3JkIGluIHRoZSBsaW5lIChsaW5lLmxlbmd0aClcclxuICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMucmVwZWF0KHRoaXMud29yZERlbGF5LCB0aGlzLmxpbmUubGVuZ3RoLCB0aGlzLm5leHRXb3JkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gIEFkdmFuY2UgdG8gdGhlIG5leHQgbGluZVxyXG4gICAgICAgIHRoaXMubGluZUluZGV4Kys7XHJcbiAgICB9LFxyXG5cclxuICAgIG5leHRXb3JkOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAvLyAgQWRkIHRoZSBuZXh0IHdvcmQgb250byB0aGUgdGV4dCBzdHJpbmcsIGZvbGxvd2VkIGJ5IGEgc3BhY2VcclxuICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMudGV4dC50ZXh0LmNvbmNhdCh0aGlzLmxpbmVbdGhpcy53b3JkSW5kZXhdKTtcclxuXHJcbiAgICAgICAgLy8gIEFkdmFuY2UgdGhlIHdvcmQgaW5kZXggdG8gdGhlIG5leHQgd29yZCBpbiB0aGUgbGluZVxyXG4gICAgICAgIHRoaXMud29yZEluZGV4Kys7XHJcblxyXG4gICAgICAgIC8vICBMYXN0IHdvcmQ/XHJcbiAgICAgICAgaWYgKHRoaXMud29yZEluZGV4ID09PSB0aGlzLmxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gIEFkZCBhIGNhcnJpYWdlIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLnRleHQudGV4dCA9IHRoaXMudGV4dC50ZXh0LmNvbmNhdChcIlxcblwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vICBHZXQgdGhlIG5leHQgbGluZSBhZnRlciB0aGUgbGluZURlbGF5IGFtb3VudCBvZiBtcyBoYXMgZWxhcHNlZFxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKHRoaXMubGluZURlbGF5LCB0aGlzLm5leHRMaW5lLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJhY2tncm91bmRNdXNpY0NvbnRyb2xlcjogZnVuY3Rpb24ob3B0aW9uKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihvcHRpb249PT0ncGxheScpe1xyXG4gICAgICAgICAgICAvL+iBsumfs+WHuumMr+S4jeW9semfv1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnc291bmQucGxheSgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2UgaWYob3B0aW9uPT09J3N0b3AnKXtcclxuXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdzb3VuZC5zdG9wKClcclxuICAgICAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTdGFydFN0YXRlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZXMvc3RhcnQuanMiLCJsZXQgUGxheVN0YXRlID0ge1xyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGFyZ3VtZW50c1swXVxyXG4gICAgICAgIHRoaXMubGV2ZWxfYXJnID0gYXJndW1lbnRzWzFdIHx8IHt9XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuRVhBQ1RfRklUXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJnc291bmQgPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKCdiZ3NvdW5kJywgMC4yLCB0cnVlKVxyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljQ29udHJvbGVyKCdwbGF5JylcclxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpXHJcbiAgICAgICAgdGhpcy5zY2VuZXNGYWN0b3J5KHRoaXMubGV2ZWwsdGhpcy5sZXZlbF9hcmcpXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLm15Y2xvdWQpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUub3ZlcmxhcCh0aGlzLmhhaWxzLCB0aGlzLm15Y2xvdWQsIHRoaXMuaGl0bXlDbG91ZCwgbnVsbCwgdGhpcykgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5vdmVybGFwKHRoaXMuaGFpbHMsIHRoaXMuY29ybnMsIHRoaXMuaGl0Q29ybiwgbnVsbCwgdGhpcylcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9Gb3IgbGV2ZWwzXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnICYmIHRoaXMuY2Fycyl7XHJcbiAgICAgICAgICAgIHRoaXMuY2Fycy5mb3JFYWNoQWxpdmUoZnVuY3Rpb24oY2FyKXtcclxuICAgICAgICAgICAgICAgIGlmKGNhci54ID4gY2FyLnNsaWRlX3gpe1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubXljbG91ZC5saWZlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5mcmFtZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmJvZHkudmVsb2NpdHkueCA9IDQwMFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubXljbG91ZC5saWZlPT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5mcmFtZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmJvZHkudmVsb2NpdHkueCA9IDYwMFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubXljbG91ZC5saWZlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhci5mcmFtZSA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyLmJvZHkudmVsb2NpdHkueCA9IDgwMCAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmchPT0ncGxheScpe1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVGaW5pc2hlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLmRlYnVnLmJvZHkodGhpcy5teWNsb3VkKVxyXG5cclxuICAgICAgICAvLyBpZih0aGlzLmhhaWxzKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGFpbHMuZm9yRWFjaEFsaXZlKGZ1bmN0aW9uKGhhaWwpe1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5nYW1lLmRlYnVnLmJvZHkoaGFpbClcclxuICAgICAgICAvLyAgICAgfSx0aGlzKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYodGhpcy5iaWdoYWlscykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmJpZ2hhaWxzLmZvckVhY2hBbGl2ZShmdW5jdGlvbihiaWdoYWlsKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2FtZS5kZWJ1Zy5ib2R5KGJpZ2hhaWwpXHJcbiAgICAgICAgLy8gICAgIH0sdGhpcylcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhpdENvcm46IGZ1bmN0aW9uKGhhaWwsIGNvcm4pIHtcclxuXHJcbiAgICAgICAgdmFyIG1heGZyYW1lXHJcbiAgICAgICAgaGFpbC5raWxsKCkgICBcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDEnKXtcclxuICAgICAgICAgICAgbWF4ZnJhbWUgPSAzXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgbWF4ZnJhbWUgPSAyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihjb3JuLmxpZmU9PT0zKXtcclxuICAgICAgICAgICAgY29ybi5mcmFtZSA9IDFcclxuICAgICAgICAgICAgdGhpcy5jb3Jucy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGVsZSkge1xyXG4gICAgICAgICAgICAgICAgZWxlLmxpZmUtLVxyXG4gICAgICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmNvcm5zLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihlbGUuZnJhbWU8bWF4ZnJhbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5mcmFtZSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbGUubGlmZS0tXHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNvcm5zLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZWxlKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZWxlLmZyYW1lKVxyXG4gICAgICAgIC8vIH0sdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5teWNsb3VkTGlmZUhhbmRsZXIoLS10aGlzLm15Y2xvdWQubGlmZSkgICAgXHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0ndHJpYWwyJyl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQqMSxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nbWFzaygpXHJcbiAgICAgICAgICAgIH0sdGhpcyk7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIGhpdG15Q2xvdWQ6IGZ1bmN0aW9uKG15Y2xvdWQsIGhhaWwpIHtcclxuXHJcbiAgICAgICAgaGFpbC5raWxsKClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmhhaWxDcnVzaGVkKGhhaWwueCxoYWlsLnksaGFpbC5zY2FsZS54LGhhaWwuc2l6ZSlcclxuXHJcbiAgICAgICAgLy/mjqXliLDlhrDpm7lcclxuICAgICAgICB2YXIgY2F0Y2hUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4obXljbG91ZClcclxuICAgICAgICBjYXRjaFR3ZWVuLnRvKHt0aW50OiAweDAwRkYwMH0sIDIwMClcclxuICAgICAgICBjYXRjaFR3ZWVuLm9uQ29tcGxldGUuYWRkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG15Y2xvdWQudGludCA9IDB4RkZGRkZGXHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBjYXRjaFR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgaWYoaGFpbC5zaXplPT09J2JpZycgJiYgIXRoaXMubXljbG91ZC5pc2ZyZWV6aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5oaXRieUJpZ2hhaWwoaGFpbClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMS0xJyl7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfYXJnID0gJ3RyaWFsMS0yJ1xyXG4gICAgICAgICAgICB0aGlzLnR1dG9yaWFsTW9kZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBoaXRieUJpZ2hhaWw6IGZ1bmN0aW9uKGhhaWwpe1xyXG4gICAgICAgIHRoaXMubXljbG91ZC5jbGlja1RpbWVzID0gMFxyXG4gICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmlzZnJlZXppbmcgPSB0cnVlXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgnZnJvemVuJylcclxuICAgIH0sXHJcblxyXG4gICAgY29ybkluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXRfbGVmdCxcclxuICAgICAgICAgICAgdGFyZ2V0X21pZGRsZSxcclxuICAgICAgICAgICAgdGFyZ2V0X3JpZ2h0XHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRfbGVmdCA9ICdjb3JuJ1xyXG4gICAgICAgICAgICB0YXJnZXRfbWlkZGxlID0gJ2Nvcm4nXHJcbiAgICAgICAgICAgIHRhcmdldF9yaWdodCA9ICdjb3JuJ1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldF9sZWZ0ID0gJ3Blb3BsZTEnXHJcbiAgICAgICAgICAgIHRhcmdldF9taWRkbGUgPSAncGVvcGxlMidcclxuICAgICAgICAgICAgdGFyZ2V0X3JpZ2h0ID0gJ3Blb3BsZTMnXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG4gICAgICAgICAgICB0YXJnZXRfbGVmdCA9ICdjYXIxJ1xyXG4gICAgICAgICAgICB0YXJnZXRfbWlkZGxlID0gJ2NhcjInXHJcbiAgICAgICAgICAgIHRhcmdldF9yaWdodCA9ICdjYXIzJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb3JucyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgIHRoaXMuY29ybnMuZW5hYmxlQm9keSA9IHRydWVcclxuXHJcbiAgICAgICAgdmFyIGNvcm5TaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdjb3JuJykud2lkdGgvNFxyXG4gICAgICAgIHZhciBjb3JuX3kgPSB0aGlzLmdhbWUuaGVpZ2h0ICogMC45Mjc1XHJcbiAgICAgICAgdmFyIGxlZnRfY29ybl94ID0gdGhpcy5nYW1lLndpZHRoICogMS82XHJcbiAgICAgICAgdmFyIG1pZGRsZV9jb3JuX3ggPSB0aGlzLmdhbWUud2lkdGggKiAxLzJcclxuICAgICAgICB2YXIgcmlnaHRfY29ybl94ID0gdGhpcy5nYW1lLndpZHRoICogNS82XHJcblxyXG4gICAgICAgIHRoaXMubGVmdF9jb3JuID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUobGVmdF9jb3JuX3ggLCBjb3JuX3ksIHRhcmdldF9sZWZ0KVxyXG4gICAgICAgIHRoaXMubGVmdF9jb3JuLmZyYW1lID0gMFxyXG4gICAgICAgIHRoaXMubGVmdF9jb3JuLnNjYWxlLnNldFRvKDAuNSwwKVxyXG4gICAgICAgIHRoaXMubGVmdF9jb3JuLmFuY2hvci5zZXRUbygwLjUsMSlcclxuICAgICAgICB0aGlzLmxlZnRfY29ybi5saWZlID0gM1xyXG4gICAgICAgIHRoaXMuY29ybnMuYWRkKHRoaXMubGVmdF9jb3JuKVxyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUodGhpcy5sZWZ0X2Nvcm4pXHJcblxyXG4gICAgICAgIHRoaXMubWlkZGxlX2Nvcm4gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShtaWRkbGVfY29ybl94ICwgY29ybl95LCB0YXJnZXRfbWlkZGxlKVxyXG4gICAgICAgIHRoaXMubWlkZGxlX2Nvcm4uZnJhbWUgPSAwXHJcbiAgICAgICAgdGhpcy5taWRkbGVfY29ybi5zY2FsZS5zZXRUbygwLjUsMClcclxuICAgICAgICB0aGlzLm1pZGRsZV9jb3JuLmFuY2hvci5zZXRUbygwLjUsMSlcclxuICAgICAgICB0aGlzLm1pZGRsZV9jb3JuLmxpZmUgPSAzXHJcbiAgICAgICAgdGhpcy5jb3Jucy5hZGQodGhpcy5taWRkbGVfY29ybilcclxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMubWlkZGxlX2Nvcm4pXHJcblxyXG4gICAgICAgIHRoaXMucmlnaHRfY29ybiA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHJpZ2h0X2Nvcm5feCAsIGNvcm5feSwgdGFyZ2V0X3JpZ2h0KVxyXG4gICAgICAgIHRoaXMucmlnaHRfY29ybi5mcmFtZSA9IDBcclxuICAgICAgICB0aGlzLnJpZ2h0X2Nvcm4uc2NhbGUuc2V0VG8oMC41LDApXHJcbiAgICAgICAgdGhpcy5yaWdodF9jb3JuLmFuY2hvci5zZXRUbygwLjUsMSlcclxuICAgICAgICB0aGlzLnJpZ2h0X2Nvcm4ubGlmZSA9IDNcclxuICAgICAgICB0aGlzLmNvcm5zLmFkZCh0aGlzLnJpZ2h0X2Nvcm4pXHJcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLnJpZ2h0X2Nvcm4pXHJcblxyXG4gICAgICAgIHZhciBsZWZ0VHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMubGVmdF9jb3JuLnNjYWxlKVxyXG4gICAgICAgIGxlZnRUd2Vlbi50byh7eTogMC41fSwgMTIwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuT3V0KVxyXG4gICAgICAgIGxlZnRUd2Vlbi5zdGFydCgpXHJcblxyXG4gICAgICAgIHZhciBtaWRkbGVUd2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5taWRkbGVfY29ybi5zY2FsZSlcclxuICAgICAgICBtaWRkbGVUd2Vlbi50byh7eTogMC41fSwgMTIwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuT3V0KVxyXG4gICAgICAgIG1pZGRsZVR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdmFyIHJpZ2h0VHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucmlnaHRfY29ybi5zY2FsZSlcclxuICAgICAgICByaWdodFR3ZWVuLnRvKHt5OiAwLjV9LCAxMjAwLCBQaGFzZXIuRWFzaW5nLkJvdW5jZS5PdXQpXHJcbiAgICAgICAgcmlnaHRUd2Vlbi5zdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIGNhclJ1bm5pbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5jYXJzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcbiAgICAgICAgdGhpcy5jYXJzLmVuYWJsZUJvZHkgPSB0cnVlXHJcblxyXG4gICAgICAgIHZhciBjYXJzY2FsZSA9IDAuNVxyXG4gICAgICAgIHZhciBjYXJXaWR0aCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnY2FyMScpLndpZHRoLzIgKiBjYXJzY2FsZVxyXG4gICAgICAgIHZhciBjYXJIZWlnaHQgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2NhcjEnKS5oZWlnaHQgKiBjYXJzY2FsZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjYXJUeXBlcyA9IFsnY2FyMScsJ2NhcjInLCdjYXIzJywnY2FyNCddXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQqMSwgXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IDBcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSh0aGlzLmdhbWUud29ybGQuaGVpZ2h0LWNhckhlaWdodCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBjYXJUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJUeXBlcy5sZW5ndGgpXVxyXG4gICAgICAgICAgICAgICAgdmFyIGNhciA9IHRoaXMuY2Fycy5nZXRGaXJzdEV4aXN0cyhmYWxzZSx0cnVlLHgseSx0eXBlKVxyXG4gICAgICAgICAgICAgICAgY2FyLmFuY2hvci5zZXRUbygwLjUsMSlcclxuICAgICAgICAgICAgICAgIGNhci5zY2FsZS5zZXRUbyhjYXJzY2FsZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoY2FyKVxyXG5cclxuICAgICAgICAgICAgICAgIGNhci5zbGlkZV94ID0gdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLHRoaXMuZ2FtZS53b3JsZC53aWR0aClcclxuICAgICAgICAgICAgICAgIGNhci5ib2R5LnZlbG9jaXR5LnggPSAyMDBcclxuICAgICAgICAgICAgICAgIGNhci5vdXRPZkJvdW5kc0tpbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBjYXIuY2hlY2tXb3JsZEJvdW5kcyA9IHRydWVcclxuICAgICAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgc2V0dGluZ015Q2xvdWQ6IGZ1bmN0aW9uKHgseSxhbmNob3JfeCxhbmNob3JfeSl7XHJcblxyXG4gICAgICAgIHZhciBteWNsb3VkX3ggPSB4IHx8IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYXHJcbiAgICAgICAgdmFyIG15Y2xvdWRfeSA9IHkgfHwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuNjVcclxuICAgICAgICB2YXIgYW5jaG9yWCA9IGFuY2hvcl94IHx8IDAuNVxyXG4gICAgICAgIHZhciBhbmNob3JZID0gYW5jaG9yX3kgfHwgMC41XHJcblxyXG4gICAgICAgIC8vYWRkIHNwcml0ZVxyXG4gICAgICAgIHRoaXMubXljbG91ZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKG15Y2xvdWRfeCAsIG15Y2xvdWRfeSwgJ215Y2xvdWQnKVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmNob3Iuc2V0VG8oYW5jaG9yWCwgYW5jaG9yWSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQubGlmZSA9IDNcclxuICAgICAgICB0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUgPSAwLjRcclxuICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8odGhpcy5teWNsb3VkLnNwcml0ZXNjYWxlKVxyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdteWNsb3VkJykud2lkdGgvMTA7XHJcblxyXG4gICAgICAgIC8vcnVuIGFuaW1hdGlvblxyXG4gICAgICAgIC8vIHRoaXMubXljbG91ZC5hbmltYXRpb25zLmFkZCgncnVuJywgWzEsIDIsIDMsIDRdLCAxMCwgdHJ1ZSlcclxuICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5hZGQoJ3J1bicsIFs1LCA0LCA1LCA2LCA3LCA2XSwgMTAsIHRydWUpXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMuYWRkKCdzdGF0aWMnLCBbMCwgMSwgMCwgMiwgMCwgMSwgMCwgM10sMTAsIHRydWUpXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMuYWRkKCdmcm96ZW4nLCBbOCwgOCwgOCwgOCwgOCwgOSwgOF0sMTAsIHRydWUpICAgXHJcblxyXG4gICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnBsYXkoJ3N0YXRpYycpICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZSh0aGlzLm15Y2xvdWQpXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnNldFNpemUoc2l6ZSowLjgsc2l6ZSowLjgsc2l6ZSowLjEsc2l6ZSowLjEpXHJcblxyXG4gICAgICAgIHRoaXMubXljbG91ZC50b3VjaGluZyA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5teWNsb3VkLmlucHV0RW5hYmxlZCA9IHRydWVcclxuICAgICAgICB0aGlzLm15Y2xvdWQuaXNmcmVlemluZyA9IGZhbHNlXHJcblxyXG4gICAgICAgIC8vIENsaWNrIG15Y2xvdWQgZm9yIHVuZnJlZXppbmdcclxuICAgICAgICB0aGlzLm9uY2xpY2tFbWl0dGVyKHRoaXMubXljbG91ZClcclxuXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbCE9PSd0cmlhbDInKXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkTW92ZSgpXHJcbiAgICAgICAgICAgIC8vIHRoaXMubXljbG91ZC5jdXJyZW50UG9zaXRpb24gPSAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBteWNsb3VkTW92ZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIHNjYWxlID0gdGhpcy5teWNsb3VkLnNwcml0ZXNjYWxlXHJcblxyXG4gICAgICAgIHRoaXMubXljbG91ZC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubXljbG91ZC50b3VjaGluZyA9IHRydWVcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLm15Y2xvdWQuZXZlbnRzLm9uSW5wdXRVcC5hZGQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkLnRvdWNoaW5nID0gZmFsc2VcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25VcC5hZGQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoIXRoaXMubXljbG91ZC5pc2ZyZWV6aW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdzdGF0aWMnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICBpZih0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3Ape1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQuYWRkTW92ZUNhbGxiYWNrKGZ1bmN0aW9uKHBvaW50ZXIseCx5LCBpc1RhcCl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHggPiB0aGlzLm15Y2xvdWQueCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnggPSB4XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQuYWRkTW92ZUNhbGxiYWNrKGZ1bmN0aW9uKHBvaW50ZXIseCx5LCBpc1RhcCl7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5teWNsb3VkLnRvdWNoaW5nKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4ID4gdGhpcy5teWNsb3VkLngpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKCctJytzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbyhzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC54ID0geFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeCA+IHRoaXMubXljbG91ZC54ICsgdGhpcy5teWNsb3VkLndpZHRoLzIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKCctJytzY2FsZSwgc2NhbGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS52ZWxvY2l0eS54ID0gMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih4IDwgdGhpcy5teWNsb3VkLnggLSB0aGlzLm15Y2xvdWQud2lkdGgvMil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IC0yMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5hbmltYXRpb25zLnBsYXkoJ3J1bicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLmdhbWUuaW5wdXQuYWRkTW92ZUNhbGxiYWNrKGZ1bmN0aW9uKHBvaW50ZXIseCx5LCBpc1RhcCl7XHJcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCAmJiAhdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoeCA+IHRoaXMubXljbG91ZC54KXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKHNjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubXljbG91ZC54ID0geFxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgICAvLyAgICAgfWVsc2UgaWYoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCAmJiAhdGhpcy5teWNsb3VkLmlzZnJlZXppbmcpe1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMubXljbG91ZC50b3VjaGluZyl7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubXljbG91ZC5ib2R5LnZlbG9jaXR5LnggPSAwXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHggPiB0aGlzLm15Y2xvdWQueCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5zY2FsZS5zZXRUbygnLScrc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oc2NhbGUsIHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5teWNsb3VkLnggPSB4XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYoeCA+IHRoaXMubXljbG91ZC54ICsgdGhpcy5teWNsb3VkLndpZHRoLzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IDIwMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbHNlIGlmKHggPCB0aGlzLm15Y2xvdWQueCAtIHRoaXMubXljbG91ZC53aWR0aC8yKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKHNjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5teWNsb3VkLmJvZHkudmVsb2NpdHkueCA9IC0yMDBcclxuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYm9keS52ZWxvY2l0eS54ID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdydW4nKSAgICAgXHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIC8vKGRlc2t0b3Ap6Zuy6Lef6JGX5ruR6byg5YuV77yM5L2G5Y+q5pyD5Zyo5LiJ5YCL5L2N572u5YGc55WZXHJcbiAgICAgICAgLy8gICAgIC8vKG1vYmlsZSnlj6rmnIPlnKjkuInlgIvkvY3nva7lgZznlZnvvIzpmaTkuobmi5bmm7PlpJbvvIzkuZ/lj6/pu57onqLluZXorpPpm7Lli5XvvIzpu57lt6blkJHlt6bkuIDmoLzvvIzkvp3mraTpoZ7mjqhcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciBwb3NpdGlvbiA9IHRoaXMubXljbG91ZC5jdXJyZW50UG9zaXRpb25cclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciBwb3NpdGlvbjEgPSB0aGlzLmdhbWUud2lkdGggKiAxLzRcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciBwb3NpdGlvbjIgPSB0aGlzLmdhbWUud2lkdGggKiAxLzJcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciBwb3NpdGlvbjMgPSB0aGlzLmdhbWUud2lkdGggKiAzLzRcclxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciBjYW5tb3ZlID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgIC8vdW5pdCBzdGVwIG1ldGhvZFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGlmKHg+dGhpcy5teWNsb3VkLnggKyB0aGlzLm15Y2xvdWQud2lkdGggKiB0aGlzLm15Y2xvdWQuc3ByaXRlc2NhbGUpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgKytwb3NpdGlvblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBjYW5tb3ZlPXRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9ZWxzZSBpZih4PHRoaXMubXljbG91ZC54IC0gdGhpcy5teWNsb3VkLndpZHRoICogdGhpcy5teWNsb3VkLnNwcml0ZXNjYWxlKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAtLXBvc2l0aW9uXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNhbm1vdmU9dHJ1ZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5zdG9wKClcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5teWNsb3VkLmZyYW1lID0gMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBjYW5tb3ZlPXRydWVcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGlmKGNhbm1vdmUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGlmKHBvc2l0aW9uPT0wKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLm15Y2xvdWQueCA9IHBvc2l0aW9uMlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgcG9zaXRpb249MFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYocG9zaXRpb248PS0xKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubXljbG91ZC54ID0gcG9zaXRpb24xXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbj0tMVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9IGVsc2UgaWYocG9zaXRpb24+PTEpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5teWNsb3VkLnggPSBwb3NpdGlvbjNcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIHBvc2l0aW9uPTFcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocG9zaXRpb24pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuY3VycmVudFBvc2l0aW9uID0gcG9zaXRpb25cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgLy9taW5pbXVtIGRpc3RhbmNlIG1ldGhvZFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHZhciBjYW5tb3ZlID0gZmFsc2VcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB2YXIgZGlzdGFuY2UxID0gTWF0aC5hYnMoeC1wb3NpdGlvbjEpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdmFyIGRpc3RhbmNlMiA9IE1hdGguYWJzKHgtcG9zaXRpb24yKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHZhciBkaXN0YW5jZTMgPSBNYXRoLmFicyh4LXBvc2l0aW9uMylcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB2YXIgbWluZGlzdGFuY2UgPSBNYXRoLm1pbihkaXN0YW5jZTEsZGlzdGFuY2UyLGRpc3RhbmNlMylcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gaWYoeCA+dGhpcy5teWNsb3VkLngpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB0aGlzLm15Y2xvdWQuc2NhbGUuc2V0VG8oJy0nK3NjYWxlLCBzY2FsZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5teWNsb3VkLnNjYWxlLnNldFRvKHNjYWxlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH0gICAgXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGlmKHRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcHx8KCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3AgJiYgIWlzVGFwICYmIHRoaXMubXljbG91ZC50b3VjaGluZyApKXtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgIGNhbm1vdmUgPSB0cnVlXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIH0gZWxzZSBpZighdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wICYmIGlzVGFwKSB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICBpZih4PHRoaXMubXljbG91ZC54KXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWZ0JylcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygncmlnaHQnKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBpZihjYW5tb3ZlKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgdGhpcy5teWNsb3VkLmFuaW1hdGlvbnMucGxheSgncnVuJylcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgc3dpdGNoKG1pbmRpc3RhbmNlKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgZGlzdGFuY2UxOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubXljbG91ZC54ID0gcG9zaXRpb24xXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgIGNhc2UgZGlzdGFuY2UyOlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMubXljbG91ZC54ID0gcG9zaXRpb24yXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgYnJlYWsgXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIGRpc3RhbmNlMzpcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm15Y2xvdWQueCA9IHBvc2l0aW9uM1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH0sdGhpcylcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHNjZW5lc0ZhY3Rvcnk6IGZ1bmN0aW9uKGxldmVsLGxldmVsX2FyZyl7XHJcblxyXG4gICAgICAgIC8vYmFja2dyb3VuZFxyXG4gICAgICAgICAgICBpZihsZXZlbD09PSdsZXZlbDEnKXtcclxuICAgICAgICAgICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCdmaXJzdGJnJylcclxuICAgICAgICAgICAgICAgIGJnLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgICAgICAgICBiZy5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb3JuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcm5Jbml0aWFsaXplKCkvL2xlZnQsbWlkZGxlLHJpZ2h0XHJcbiAgICAgICAgICAgICAgICAvL2Nvd1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuMSwgdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuNzUsJ2NvdycpXHJcbiAgICAgICAgICAgICAgICBjb3cuc2NhbGUuc2V0VG8oMC42LDAuNilcclxuICAgICAgICAgICAgICAgIGNvdy5hbmNob3Iuc2V0VG8oMC41LDAuNSlcclxuICAgICAgICAgICAgICAgIHZhciBjb3dBbmltID0gY293LmFuaW1hdGlvbnMuYWRkKCdjb3cnKTtcclxuICAgICAgICAgICAgICAgIGNvd0FuaW0ucGxheSgxMCx0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihsZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2NlbmVzKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRTY2VuZXMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgZmlyc3QgbWFzayBmb3IgdHJpYWxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWFsbWFzazEgPSB0aGlzLnNldHRpbmdtYXNrKCdyZ2JhKDAsMCwwLDApJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsZXZlbD09PSdsZXZlbDInKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYmcgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsMCwnc2Vjb25kYmcnKVxyXG4gICAgICAgICAgICAgICAgYmcud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICAgICAgICAgIGJnLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHRcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcm5Jbml0aWFsaXplKClcclxuXHJcbiAgICAgICAgICAgICAgICBpZihsZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2NlbmVzKClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRTY2VuZXMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgZmlyc3QgbWFzayBmb3IgdHJpYWxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWFsbWFzazEgPSB0aGlzLnNldHRpbmdtYXNrKCdyZ2JhKDAsMCwwLDApJylcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCd0aGlyZGJnJylcclxuICAgICAgICAgICAgICAgIGJnLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoXHJcbiAgICAgICAgICAgICAgICBiZy5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5yb2FkSW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhclJ1bm5pbmcoKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgLy8gaWYobGV2ZWxfYXJnPT09J3BsYXknKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnN0YXRpY1NjZW5lcygpXHJcbiAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGVkU2NlbmVzKClcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihsZXZlbD09PSd0cmlhbDEnKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnXHJcbiAgICAgICAgICAgICAgICB2YXIgYmcgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsMCwnZmlyc3RiZycpXHJcbiAgICAgICAgICAgICAgICBiZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgICAgICAgICAgYmcuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29ybkluaXRpYWxpemUoKS8vbGVmdCxtaWRkbGUscmlnaHRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0aWNTY2VuZXMoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFydG1ha2VyKFsncmVkaGVhcnQnLCdyZWRoZWFydCcsJ3JlZGhlYXJ0J10pXHJcblxyXG4gICAgICAgICAgICAgICAgLy9zdGF0aWMgY293XHJcbiAgICAgICAgICAgICAgICB2YXIgY293ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLndpZHRoICogMC4xLCB0aGlzLmdhbWUud29ybGQuaGVpZ2h0ICogMC43NSwnY293JylcclxuICAgICAgICAgICAgICAgIGNvdy5zY2FsZS5zZXRUbygwLjYsMC42KVxyXG4gICAgICAgICAgICAgICAgY293LmFuY2hvci5zZXRUbygwLjUsMC41KVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ21hc2soKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbHMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbHMuZW5hYmxlQm9keSA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGNydXNoZXMgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdNeUNsb3VkKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuODUsdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjYpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EKjEsIHRoaXMuaGFpbGluZywgdGhpcylcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQqNSwgdGhpcy5oYWlsaW5nLCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGxldmVsPT09J3RyaWFsMicpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZidcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGljU2NlbmVzKClcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhcnRtYWtlcihbJ3JlZGhlYXJ0JywncmVkaGVhcnQnLCdyZWRoZWFydCddKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5nbWFzaygpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlscyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlscy5lbmFibGVCb2R5ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsY3J1c2hlcyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYWRkIHN0YXRpYyBteWNsb3VkXHJcbiAgICAgICAgICAgICAgICB2YXIgbXljbG91ZF94ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC44NVxyXG4gICAgICAgICAgICAgICAgdmFyIG15Y2xvdWRfeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjY1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdNeUNsb3VkKG15Y2xvdWRfeCxteWNsb3VkX3kpXHJcblxyXG4gICAgICAgICAgICAgICAgLy/lhrDpm7nokL3lnKjnibnlrprkvY3nva7vvIzlj6rokL3kuIDmrKFcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZygnc21hbGwnLHRoaXMuYmlnY2xvdWQueClcclxuXHJcbiAgICAgICAgICAgICAgICAvL+aUvueOieexs+WcqOato+S4i+aWuVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JucyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3Jucy5lbmFibGVCb2R5ID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb3JuU2l6ZSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnY29ybicpLndpZHRoLzRcclxuICAgICAgICAgICAgICAgIHZhciBjb3JuX3ggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvcm5feSA9IHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjc4NVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjb3JuID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY29ybl94ICwgY29ybl95LCAnY29ybicpXHJcbiAgICAgICAgICAgICAgICBjb3JuLmZyYW1lID0gMFxyXG4gICAgICAgICAgICAgICAgY29ybi5zY2FsZS5zZXRUbygwLjUsMC41KVxyXG4gICAgICAgICAgICAgICAgY29ybi5hbmNob3Iuc2V0VG8oMC41LDApXHJcbiAgICAgICAgICAgICAgICBjb3JuLmxpZmUgPSAzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcm5zLmFkZChjb3JuKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShjb3JuKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5naGFpbHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vY3JlYXRlIGdyb3VwIGZvciBoYWlsXHJcbiAgICAgICAgdGhpcy5oYWlscyA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKVxyXG4gICAgICAgIHRoaXMuaGFpbHMuZW5hYmxlQm9keSA9IHRydWVcclxuICAgICAgICB0aGlzLmhhaWxjcnVzaGVzID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpXHJcblxyXG4gICAgICAgIC8vY3JlYXRlIGhhaWxpbmcgdGltZXJcclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICB2YXIgZGVsYXlUb2ZpcmUgPSBQaGFzZXIuVGltZXIuU0VDT05EKjEuM1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwyJyl7XHJcbiAgICAgICAgICAgIHZhciBkZWxheVRvZmlyZSA9IFBoYXNlci5UaW1lci5TRUNPTkQqMSAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgIHZhciBkZWxheVRvZmlyZSA9IFBoYXNlci5UaW1lci5TRUNPTkQqMC41ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhaWxpbmdUaW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZShmYWxzZSlcclxuICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5sb29wKGRlbGF5VG9maXJlLCB0aGlzLmhhaWxpbmcsIHRoaXMpXHJcbiAgICB9LFxyXG5cclxuICAgIGFuaW1hdGVkU2NlbmVzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vZGFya3NreSBhbmQgY2xvdWQgYW5pbWF0aW9uXHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgIHZhciBza3kgPSAnZGFya3NreTEnXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgdmFyIHNreSA9ICdkYXJrc2t5MidcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG4gICAgICAgICAgICB2YXIgc2t5ID0gJ2Rhcmtza3kzJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRhcmtza3kgPSB0aGlzLmdhbWUuYWRkLmltYWdlKDAsLTEwMCxza3kpXHJcbiAgICAgICAgZGFya3NreS53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgIGRhcmtza3kuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCAqIDAuMzVcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQxID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgtMTUwLDAsJ2JsYWNrY2xvdWQxJykgICAgICBcclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDFJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JsYWNrY2xvdWQxJylcclxuICAgICAgICBibGFja2Nsb3VkMS53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNVxyXG4gICAgICAgIGJsYWNrY2xvdWQxLmhlaWdodCA9IGJsYWNrY2xvdWQxLndpZHRoIC8gYmxhY2tjbG91ZDFJbWcud2lkdGggKiBibGFja2Nsb3VkMUltZy5oZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQyID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgzMDAsMCwnYmxhY2tjbG91ZDInKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQySW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdibGFja2Nsb3VkMicpXHJcbiAgICAgICAgYmxhY2tjbG91ZDIud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjY1XHJcbiAgICAgICAgYmxhY2tjbG91ZDIuaGVpZ2h0ID0gYmxhY2tjbG91ZDIud2lkdGggLyBibGFja2Nsb3VkMkltZy53aWR0aCAqIGJsYWNrY2xvdWQySW1nLmhlaWdodFxyXG5cclxuICAgICAgICB2YXIgY2xvdWQgPSB0aGlzLmdhbWUuYWRkLmltYWdlKC0zMCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0LzIsJ2Nsb3VkJykgICAgICAgIFxyXG4gICAgICAgIHZhciBjbG91ZEltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnY2xvdWQnKVxyXG4gICAgICAgIGNsb3VkLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMS4yXHJcbiAgICAgICAgY2xvdWQuaGVpZ2h0ID0gY2xvdWQud2lkdGggLyBjbG91ZEltZy53aWR0aCAqIGNsb3VkSW1nLmhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgLTIwMCwnYmlnY2xvdWQnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQuYW5jaG9yLnNldFRvKDAuNSwwKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGJpZ2Nsb3VkSW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdiaWdjbG91ZCcpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aCAvIGJpZ2Nsb3VkSW1nLndpZHRoICogYmlnY2xvdWRJbWcuaGVpZ2h0XHJcblxyXG4gICAgICAgIHZhciBkYXJrc2t5VHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGRhcmtza3kpLnRvKHt5OiAwfSwgMTAwMCwgUGhhc2VyLkVhc2luZy5Cb3VuY2UuSW4sIHRydWUpXHJcbiAgICAgICAgZGFya3NreVR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQxVHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGJsYWNrY2xvdWQxKS50byh7eDogLTUwfSwgNTAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMTAwMClcclxuICAgICAgICBibGFja2Nsb3VkMVR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQyVHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKGJsYWNrY2xvdWQyKS50byh7eDogMjAwfSwgNTAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSwgMTIwMClcclxuICAgICAgICBibGFja2Nsb3VkMlR3ZWVuLnN0YXJ0KClcclxuXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZC5ZcG9zaXRpb24gPSAxMFxyXG4gICAgICAgIHZhciBiaWdjbG91ZFR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLmJpZ2Nsb3VkKS50byh7eTogdGhpcy5iaWdjbG91ZC5ZcG9zaXRpb259LCA3MDAsIFBoYXNlci5FYXNpbmcuU2ludXNvaWRhbC5Jbk91dCwgdHJ1ZSwgMTcwMClcclxuICAgICAgICBiaWdjbG91ZFR3ZWVuLnN0YXJ0KCkgICAgICBcclxuICAgICAgICBiaWdjbG91ZFR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMub25TdGFydCwgdGhpcylcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXRpY1NjZW5lczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICBcclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICB2YXIgc2t5ID0gJ2Rhcmtza3kxJ1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwyJyl7XHJcbiAgICAgICAgICAgIHZhciBza3kgPSAnZGFya3NreTInXHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgdmFyIHNreSA9ICdkYXJrc2t5MydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkYXJrc2t5ID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgwLDAsc2t5KVxyXG4gICAgICAgIGRhcmtza3kud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICBkYXJrc2t5LmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjM1XHJcblxyXG4gICAgICAgIHZhciBibGFja2Nsb3VkMSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoLTUwLDAsJ2JsYWNrY2xvdWQxJykgICAgICBcclxuICAgICAgICB2YXIgYmxhY2tjbG91ZDFJbWcgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SW1hZ2UoJ2JsYWNrY2xvdWQxJylcclxuICAgICAgICBibGFja2Nsb3VkMS53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNVxyXG4gICAgICAgIGJsYWNrY2xvdWQxLmhlaWdodCA9IGJsYWNrY2xvdWQxLndpZHRoIC8gYmxhY2tjbG91ZDFJbWcud2lkdGggKiBibGFja2Nsb3VkMUltZy5oZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQyID0gdGhpcy5nYW1lLmFkZC5pbWFnZSgyMDAsMCwnYmxhY2tjbG91ZDInKSAgICAgICAgXHJcbiAgICAgICAgdmFyIGJsYWNrY2xvdWQySW1nID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdibGFja2Nsb3VkMicpXHJcbiAgICAgICAgYmxhY2tjbG91ZDIud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjY1XHJcbiAgICAgICAgYmxhY2tjbG91ZDIuaGVpZ2h0ID0gYmxhY2tjbG91ZDIud2lkdGggLyBibGFja2Nsb3VkMkltZy53aWR0aCAqIGJsYWNrY2xvdWQySW1nLmhlaWdodFxyXG5cclxuICAgICAgICB2YXIgY2xvdWQgPSB0aGlzLmdhbWUuYWRkLmltYWdlKC0zMCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0LzIsJ2Nsb3VkJykgICAgICAgIFxyXG4gICAgICAgIHZhciBjbG91ZEltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnY2xvdWQnKVxyXG4gICAgICAgIGNsb3VkLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMS4yXHJcbiAgICAgICAgY2xvdWQuaGVpZ2h0ID0gY2xvdWQud2lkdGggLyBjbG91ZEltZy53aWR0aCAqIGNsb3VkSW1nLmhlaWdodFxyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgMTAsJ2JpZ2Nsb3VkJylcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLmFuY2hvci5zZXRUbygwLjUsMCkgICAgICAgIFxyXG4gICAgICAgIHZhciBiaWdjbG91ZEltZyA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmlnY2xvdWQnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGhcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGggLyBiaWdjbG91ZEltZy53aWR0aCAqIGJpZ2Nsb3VkSW1nLmhlaWdodFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmJpZ2Nsb3VkLndpZHRoICogMC43LCB0aGlzLmJpZ2Nsb3VkLmhlaWdodCAqIDAuNTUsJ2JpZ2Nsb3VkX2FuZ2VyMScpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEuYW5jaG9yLnNldFRvKDAuNSwwLjUpICAgXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEud2lkdGggPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjEuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMCAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmJpZ2Nsb3VkLndpZHRoICogMC4xNSwgdGhpcy5iaWdjbG91ZC5oZWlnaHQgKiAwLjgsJ2JpZ2Nsb3VkX2FuZ2VyMicpXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIuYW5jaG9yLnNldFRvKDAuNSwwLjUpICAgXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIud2lkdGggPSB0aGlzLmJpZ2Nsb3VkLndpZHRoLzIwXHJcbiAgICAgICAgdGhpcy5iaWdjbG91ZF9hbmdlcjIuaGVpZ2h0ID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMCAgICAgXHJcblxyXG4gICAgICAgIHRoaXMub25TdGFydCgpXHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmdtYXNrOiBmdW5jdGlvbihjb2xvcikge1xyXG5cclxuICAgICAgICB2YXIgZmlsbCA9IGNvbG9yfHwncmdiYSgwLDAsMCwwLjYpJ1xyXG4gICAgICAgIHZhciBibWQgPSB0aGlzLmdhbWUubWFrZS5iaXRtYXBEYXRhKHRoaXMuZ2FtZS53b3JsZC53aWR0aCx0aGlzLmdhbWUud29ybGQuaGVpZ2h0KVxyXG4gICAgICAgIGJtZC5hZGRUb1dvcmxkKClcclxuICAgICAgICBibWQucmVjdCgwLDAsdGhpcy5nYW1lLndvcmxkLndpZHRoLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQsZmlsbClcclxuICAgICAgICBibWQuZGlydHkgPSBmYWxzZVxyXG5cclxuICAgICAgICByZXR1cm4gYm1kXHJcbiAgICB9LFxyXG5cclxuICAgIHNldHRpbmd0YXNrV2luZG93OiBmdW5jdGlvbigpeyBcclxuICAgIFxyXG4gICAgICAgIHZhciB0YXNrd2luZG93R3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKClcclxuXHJcbiAgICAgICAgLy91c2luZyBncmFwaGljc1xyXG4gICAgICAgIHZhciB3aW5kb3cgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsMClcclxuICAgICAgICB3aW5kb3cuYWxpZ25Jbih3aW5kb3csUGhhc2VyLkNFTlRFUix0aGlzLmdhbWUud29ybGQud2lkdGgqMC4xLHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC4xNSlcclxuICAgICAgICB3aW5kb3cuYmVnaW5GaWxsKDB4RkZGRkZGKTtcclxuICAgICAgICB3aW5kb3cuZHJhd1JvdW5kZWRSZWN0KDAsMCx0aGlzLmdhbWUud29ybGQud2lkdGgqMC44LHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC43KVxyXG4gICAgICAgIHdpbmRvdy5lbmRGaWxsKClcclxuXHJcbiAgICAgICAgdGFza3dpbmRvd0dyb3VwLmFkZCh3aW5kb3cpXHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgIHZhciBpbWdOYW1lID0gJ3dhbmcnXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSd0cmlhbDEtMScpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ0bnZhbHVlID0gJ+mBiuaIsumWi+WniydcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkcyA9IFwi5q2j5Zyo546J57Gz55Sw6KOh5b+Z56KM55qE546L54i654i677yMXFxu5Y275pS25Yiw5LqG5Yaw6Zu56K2m5aCx77yM5oOz6LW36YGO5Y67XFxu5pu+5pyJ5Yaw6Zu56YCg5oiQ6L6y5pCN55qE5L6L5a2Q77yM6IulXFxu5rKS5pyJ5Y+K5pmC6Zi75q2i5Yaw6Zu56JC95LiL77yM5LuW55qEXFxu5b+D6KGA5bCx6KaB5rOh5rmv5LqGLi4uLi4uXCJcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J3BsYXknKXtcclxuICAgICAgICAgICAgICAgIHZhciBidG52YWx1ZSA9ICfpgLLlhaXkuIvkuIDpl5wnXHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBcIuOAjOisneisneS9oOaLr+aVkeS6huaIkeeahOeOieexs+eUsO+8gVxcbuW4jOacm+S9oOe5vOe6jOW5q+WKqeabtOWkmuS6uu+8geOAjVwiICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwyLTEnKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdOYW1lID0gJ3Blb3BsZTEnXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn6YGK5oiy6ZaL5aeLJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLpm6LplovkuobnjonnsbPnlLDvvIzpm7LmnLXkurrkvobliLDkuoZcXG7nuYHoj6/nmoTlj7DljJfluILvvIzot6/kuIrou4rmsLTppqzpvo1cXG7vvIzmspLmg7PliLDpgY7kuobkuK3ljYjvvIzmmbTmnJfnmoTlpKlcXG7msKPplovlp4vororns58uLi4uLi5cIlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZ05hbWUgPSAncGVvcGxlMSdcclxuICAgICAgICAgICAgICAgIHZhciBidG52YWx1ZSA9ICfpgLLlhaXkuIvkuIDpl5wnXHJcbiAgICAgICAgICAgICAgICB2YXIgd29yZHMgPSBcIuOAjOisneisneS9oOS/neitt+S6huaIkeWAkeeahOeUn+WRveWuiVxcbuWFqO+8geS4jemBjuWJjemdoumChOacieS6uuS5n+mcgOimgeS9oFxcbuW5q+W/mS4uLi4uLuOAjVwiICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbF9hcmc9PT0nYWxhcm0nKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdOYW1lID0gJ2FsYXJtY2xvdWQnXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn5rKS5ZWP6aGMJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLlpKfph4/lhrDpm7nlsIflv6vpgJ/okL3kuIvvvIFcXG7oq4vms6jmhI/vvIFcIlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0nYWxhcm0nKXtcclxuICAgICAgICAgICAgICAgIHZhciBpbWdOYW1lID0gJ2FsYXJtY2xvdWQnXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn5rKS5ZWP6aGMJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLlpKfph4/lhrDpm7nlsIflv6vpgJ/okL3kuIvvvIFcXG7oq4vms6jmhI/vvIFcIlxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nTmFtZSA9ICdwb2xpY2UnXHJcbiAgICAgICAgICAgICAgICB2YXIgYnRudmFsdWUgPSAn6YGK5oiy6ZaL5aeLJ1xyXG4gICAgICAgICAgICAgICAgdmFyIHdvcmRzID0gXCLluavliqnlj7DljJfluILluqbpgY7ljbHmqZ/lvozvvIzpm7LmnLVcXG7kurrkvobliLDkuobpq5jpgJ/lhazot6/vvIzmsKPosaHllq7kvY1cXG7ljbvnqoHnhLbnmbzluIPlhrDpm7npoJDorabvvIHoi6XlhrDpm7lcXG7okL3lnKjpq5jpgJ/lhazot6/pgKDmiJDou4rovJvmiZPmu5HlsLFcXG7kuI3lpb3kuoYuLi4uLi5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYmFubmVyID0gKHRoaXMubGV2ZWxfYXJnPT09J3BsYXknKT8ncGFzc2VkYmFubmVyJzonYWxhcm1iYW5uZXInXHJcbiAgICAgICAgdmFyIHdpbmRvd19iYW5uZXIgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx3aW5kb3cueSxiYW5uZXIpXHJcbiAgICAgICAgd2luZG93X2Jhbm5lci5zY2FsZS5zZXRUbygwLjUpXHJcbiAgICAgICAgd2luZG93X2Jhbm5lci5hbmNob3Iuc2V0VG8oMC41KVxyXG4gICAgICAgIHZhciBiYW5uZXJBbmltID0gd2luZG93X2Jhbm5lci5hbmltYXRpb25zLmFkZCh3aW5kb3dfYmFubmVyKTtcclxuICAgICAgICBiYW5uZXJBbmltLnBsYXkoMTAsdHJ1ZSlcclxuICAgICAgICB0YXNrd2luZG93R3JvdXAuYWRkKHdpbmRvd19iYW5uZXIpXHJcblxyXG4gICAgICAgIHZhciB1bnBhdXNlYnRuID0gdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCBidG52YWx1ZSwgZmFsc2UpIFxyXG4gICAgICAgIHRoaXMudW5wYXVzZWJ0biA9IHVucGF1c2VidG5cclxuICAgICAgICB0YXNrd2luZG93R3JvdXAuYWRkKHVucGF1c2VidG4pXHJcbiAgICAgICAgdGFza3dpbmRvd0dyb3VwLmFkZCh1bnBhdXNlYnRuLmJ1dHRvbl90eHQpXHJcblxyXG4gICAgICAgIHZhciBwZW9wbGVTaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKGltZ05hbWUpLmhlaWdodFxyXG5cclxuICAgICAgICB2YXIgc3R5bGUgPSB7IGZvbnQ6IFwiMjBweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjMDAwXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kc0FsaWduSDogXCJjZW50ZXJcIiwgYm91bmRzQWxpZ25WOiBcIm1pZGRsZVwiLCBcclxuICAgICAgICAgICAgICAgICAgICB3b3JkV3JhcDogdHJ1ZSwgd29yZFdyYXBXaWR0aDogd2luZG93LndpZHRoKjAuOH0gICAgICAgIFxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSdhbGFybScpe1xyXG4gICAgICAgICAgICB2YXIgcGVvcGxlID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx1bnBhdXNlYnRuLnktcGVvcGxlU2l6ZSowLjMsaW1nTmFtZSlcclxuICAgICAgICAgICAgcGVvcGxlLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICAgICAgICAgIHBlb3BsZS5zY2FsZS5zZXRUbygwLjUpXHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgcGVvcGxlLnktcGVvcGxlLmhlaWdodC8yICx3b3JkcyxzdHlsZSlcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0VG8oMC41LDEpXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgcGVvcGxlID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx1bnBhdXNlYnRuLnktcGVvcGxlU2l6ZSowLjQsaW1nTmFtZSlcclxuICAgICAgICAgICAgcGVvcGxlLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICAgICAgICAgIHBlb3BsZS5zY2FsZS5zZXRUbygwLjUpXHJcblxyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgcGVvcGxlLnktcGVvcGxlLmhlaWdodC8yICx3b3JkcyxzdHlsZSlcclxuICAgICAgICAgICAgdGV4dC5hbmNob3Iuc2V0VG8oMC41LDEpXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRhc2t3aW5kb3dHcm91cC5hZGQodGV4dCkgIFxyXG4gICAgICAgIHRhc2t3aW5kb3dHcm91cC5hZGQocGVvcGxlKVxyXG5cclxuICAgICAgICByZXR1cm4gdGFza3dpbmRvd0dyb3VwXHJcbiAgICB9LFxyXG5cclxuICAgIG9uU3RhcnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9iaWcgY2xvdWQgaXMgYW5ncnlcclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5iaWdjbG91ZC53aWR0aCAqIDAuNywgdGhpcy5iaWdjbG91ZC5oZWlnaHQgKiAwLjU1LCdiaWdjbG91ZF9hbmdlcjEnKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLmFuY2hvci5zZXRUbygwLjUsMC41KSAgIFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLndpZHRoID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIxLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLmJpZ2Nsb3VkX2FuZ2VyMiA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5iaWdjbG91ZC53aWR0aCAqIDAuMTUsIHRoaXMuYmlnY2xvdWQuaGVpZ2h0ICogMC44LCdiaWdjbG91ZF9hbmdlcjInKVxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLmFuY2hvci5zZXRUbygwLjUsMC41KSAgIFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLndpZHRoID0gdGhpcy5iaWdjbG91ZC53aWR0aC8yMFxyXG4gICAgICAgIHRoaXMuYmlnY2xvdWRfYW5nZXIyLmhlaWdodCA9IHRoaXMuYmlnY2xvdWQud2lkdGgvMjAgICAgIFxyXG5cclxuICAgICAgICAvL2hlYXJ0IHNldHRpbmdcclxuICAgICAgICB0aGlzLm15Y2xvdWRMaWZlSGFuZGxlcigzKVxyXG5cclxuICAgICAgICAvL3RpbWUgc2V0dGluZ1xyXG4gICAgICAgIHRoaXMucGFzc2VkVGltZXIoKVxyXG5cclxuICAgICAgICAvL+WboOeCuuWcluWxpOeahOmXnOS/gu+8jG1hc2vopoHoqK3lrprlnKhzZXR0aW5nTXlDbG91ZCgp5LmL5YmNLFRpbWVy5LmL5b6MXHJcbiAgICAgICAgdGhpcy50cmlhbG1hc2syID0gdGhpcy5zZXR0aW5nbWFzaygncmdiYSgwLDAsMCwwKScpXHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ015Q2xvdWQoKVxyXG5cclxuICAgICAgICAvL+eUqOS+hueZvOWwhOWGsOWHjeeLgOaFi+aZgum7nuaTiueahOeijueJh1xyXG4gICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXJHZW5lcmF0b3IoKVxyXG4gICAgXHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ncGxheScpe1xyXG4gICAgICAgICAgICB0aGlzLm9uUGxheSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vdGFza3dpbmRvdyBwb3BzIHVwXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5wYXVzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMubWFzayA9IHRoaXMuc2V0dGluZ21hc2soKVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tXaW5kb3dHcm91cCA9IHRoaXMuc2V0dGluZ3Rhc2tXaW5kb3coKVxyXG4gICAgICAgICAgICB0aGlzLnRhc2tXaW5kb3dsaXN0ZW5lciA9IHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMudW5wYXVzZSx0aGlzLDAsJ3Rhc2tXaW5kb3cnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVucGF1c2U6IGZ1bmN0aW9uKGV2ZW50KXtcclxuXHJcbiAgICAgICAgdmFyIHdpbmRvdyA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAgIHZhciBidG5Jc0NsaWNrZWQgPSBmYWxzZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHdpbmRvdz09PSd0YXNrV2luZG93J3x8d2luZG93PT09J3Bhc3NlZFdpbmRvdyd8fHdpbmRvdz09PSdhbGFybVdpbmRvdycpe1xyXG4gICAgICAgICAgICBpZihldmVudC54ID4gdGhpcy51bnBhdXNlYnRuLnggLSB0aGlzLnVucGF1c2VidG4ud2lkdGgvMiAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQueCA8IHRoaXMudW5wYXVzZWJ0bi54ICsgdGhpcy51bnBhdXNlYnRuLndpZHRoLzIgJiZcclxuICAgICAgICAgICAgICAgIGV2ZW50LnkgPiB0aGlzLnVucGF1c2VidG4ueSAtIHRoaXMudW5wYXVzZWJ0bi5oZWlnaHQvMiAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQueSA8IHRoaXMudW5wYXVzZWJ0bi55ICsgdGhpcy51bnBhdXNlYnRuLmhlaWdodC8yKXtcclxuICAgICAgICAgICAgICAgICAgICBidG5Jc0NsaWNrZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5wYXVzZWQgJiYgYnRuSXNDbGlja2VkKXtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxldmVsX2FyZylcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGF1c2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzay5jbHMoKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3c9PT0ndGFza1dpbmRvdycpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfYXJnID0gJ3BsYXknXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza1dpbmRvd0dyb3VwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5vbkRvd24ucmVtb3ZlQWxsKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUGxheSgpICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHdpbmRvdz09PSdwYXNzZWRXaW5kb3cnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhc3NlZFdpbmRvd0dyb3VwLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljQ29udHJvbGVyKCdzdG9wJykgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGxheScsIHRydWUsIGZhbHNlLCAnbGV2ZWwyJywgJ3RyaWFsMi0xJylcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+etieW+heieouW5leatuOato1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljQ29udHJvbGVyKCdzdG9wJykgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgJ2xldmVsMycpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih3aW5kb3c9PT0nYWxhcm1XaW5kb3cnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsYXJtV2luZG93R3JvdXAuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5yZW1vdmVBbGwoKVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyLnBhdXNlKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdBbGFybVBlcmlvZC5wYXVzZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaGFpbGluZ1N0b3JtVGltZXIucGF1c2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lci5yZXN1bWUoKSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lci5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHBhc3NlZFRpbWVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMzBcclxuICAgICAgICB2YXIgc3R5bGUxID0geyBmb250OiBcImJvbGQgMjJweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmZmZmXCIsIGFsaWduOiBcImxlZnRcIiB9XHJcbiAgICAgICAgdmFyIHRleHQxID0gdGhpcy5nYW1lLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC53aWR0aCowLjU1LCB0aGlzLmhlYXJ0My55LCAn5Ymp6aSY5pmC6ZaTIDogJywgc3R5bGUxKVxyXG4gICAgICAgIHRleHQxLmFuY2hvci5zZXRUbygwLCAwKVxyXG5cclxuICAgICAgICB2YXIgc3R5bGUyID0geyBmb250OiBcImJvbGQgNTBweCBBcmlhbFwiLCBmaWxsOiBcIiNGRkFBMzNcIiwgYWxpZ246IFwiY2VudGVyXCIgfVxyXG4gICAgICAgIHZhciB0ZXh0MiA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0ZXh0MS54ICsgdGV4dDEud2lkdGgqMS4yNSwgdGhpcy5oZWFydDMueSwgY291bnRlciwgc3R5bGUyKVxyXG4gICAgICAgIHRleHQyLmFuY2hvci5zZXRUbygwLjUsIDAuMjUpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZVRpbWVyID0gdGhpcy5nYW1lLnRpbWUuY3JlYXRlKGZhbHNlKVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVUaW1lci5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICBpZihjb3VudGVyPT09MCl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDEnKXtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGF1c2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzayA9IHRoaXMuc2V0dGluZ21hc2soKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc2VkV2luZG93R3JvdXAgPSB0aGlzLnNldHRpbmd0YXNrV2luZG93KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnVucGF1c2UsdGhpcywwLCdwYXNzZWRXaW5kb3cnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgbmV4dGxldmVsPSdsZXZlbDInXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdQbGF5JywgdHJ1ZSwgZmFsc2UsIG5leHRsZXZlbCwgJ3RyaWFsMi0xJylcclxuXHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMicpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUucGF1c2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzayA9IHRoaXMuc2V0dGluZ21hc2soKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFzc2VkV2luZG93R3JvdXAgPSB0aGlzLnNldHRpbmd0YXNrV2luZG93KClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnVucGF1c2UsdGhpcywwLCdwYXNzZWRXaW5kb3cnKSAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBuZXh0bGV2ZWw9J2xldmVsMydcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ1BsYXknLCB0cnVlLCBmYWxzZSwgbmV4dGxldmVsLCAncGxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDntZDlsL7li5XnlatcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGV4dDIuc2V0VGV4dCgtLWNvdW50ZXIpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSx0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmdhbWVUaW1lci5zdGFydCgpXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvblBsYXk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXR0aW5naGFpbHMoKVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgIHRoaXMuaGFpbGluZ1RpbWVyLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMubGV2ZWw9PT0nbGV2ZWwyJ3x8dGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFpbGluZ0FsYXJtKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50dXRvcmlhbE1vZGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHR1dG9yaWFsTW9kZTogZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIG15Y2xvdWRYID0gdGhpcy5nYW1lLndvcmxkLndpZHRoICogMC44NVxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSd0cmlhbDEtMScpe1xyXG4gICAgICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIuWcqCDmmYIg6ZaTIOWFpyDkvb8g55SoIOaJiyDmjIcg5ouWIOabsyDnp7sg5YuVIOmbsiDmnLUgXCIsXHJcbiAgICAgICAgICAgICAgICBcIumYsiDmraIg5YawIOmbuSDokL0g5LiLIF9cIlxyXG4gICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWFsbWFzazIuZmlsbCgwLDAsMCwwLjYpXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmxldmVsX2FyZz09PSd0cmlhbDEtMicpe1xyXG4gICAgICAgICAgICB2YXIgd29yZHMgPSBbXHJcbiAgICAgICAgICAgICAgICBcIuiLpSDmvI8g5o6lIO+8jCDlhrAg6Zu5IOiQvSDlhaUg546JIOexsyDnlLAg77yMIOWwsSDmnIMgXCIsXHJcbiAgICAgICAgICAgICAgICBcIuaQjSDlpLEg5LiAIOmhhiDmhJsg5b+DIO+8jCDmhJsg5b+DIOatuCDpm7YgPSDmjJEg5oiwXCIsXHJcbiAgICAgICAgICAgICAgICBcIuWksSDmlZcgIVwiXHJcbiAgICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHJpYWxtYXNrMi5jbHMoKVxyXG4gICAgICAgICAgICB0aGlzLnRyaWFsbWFzazEuZmlsbCgwLDAsMCwwLjYpXHJcblxyXG4gICAgICAgICAgICB2YXIgbGlmZSA9IDNcclxuICAgICAgICAgICAgLy90d2lua2xpbmcgaGVhcnRzXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5sb29wKFBoYXNlci5UaW1lci5TRUNPTkQqMC41LCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYobGlmZT09PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdsaWZlID0gMlxyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYobGlmZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdsaWZlID0gM1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlmZSA9IG5ld2xpZmVcclxuICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZExpZmVIYW5kbGVyKG5ld2xpZmUpXHJcbiAgICAgICAgICAgIH0sIHRoaXMsbGlmZSlcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwyLTEnKXtcclxuICAgICAgICAgICAgdmFyIHdvcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgXCLmjqUg5L2PIOWkpyDlhrAg6Zu5IOacgyDooqsg5YawIOWHjSDvvIwg6KuLIOmAoyDnuowg6bueIFwiLFxyXG4gICAgICAgICAgICAgICAgXCLmk4og5L6GIOiEqyDlm7AgISBfXCJcclxuICAgICAgICAgICAgXVxyXG5cclxuICAgICAgICAgICAgdGhpcy50cmlhbG1hc2syLmZpbGwoMCwwLDAsMC42KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGF5UGF1c2VkKCkgICBcclxuXHJcbiAgICAgICAgdmFyIG15Y2xvdWRtb3ZpbmcgPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMubXljbG91ZCkudG8oe3g6IG15Y2xvdWRYfSwgNTAwLCBQaGFzZXIuRWFzaW5nLkxpbmVhci5JbiwgdHJ1ZSlcclxuICAgICAgICBteWNsb3VkbW92aW5nLm9uQ29tcGxldGUuYWRkKHRoaXMubXljbG91ZFRyaWFsRGlhbG9ndWUsdGhpcywwLHdvcmRzKVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBoYWlsaW5nQWxhcm06IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vc3Rvcm0gZGVsYXlcclxuICAgICAgICB2YXIgZGVsYXlUb2ZpcmUgPSAodGhpcy5sZXZlbD09PSdsZXZlbDMnKT9QaGFzZXIuVGltZXIuU0VDT05EKjAuMzpQaGFzZXIuVGltZXIuU0VDT05EKjAuNVxyXG5cclxuICAgICAgICB2YXIgYWxhcm1QZXJpb2QgPSAodGhpcy5sZXZlbD09PSdsZXZlbDMnKT9QaGFzZXIuVGltZXIuU0VDT05EKjEwOlBoYXNlci5UaW1lci5TRUNPTkQqMTVcclxuXHJcbiAgICAgICAgLy/lpJrkuYXkuIDmrKFBbGFybeeahHRpbWVyXHJcbiAgICAgICAgdGhpcy5oYWlsaW5nQWxhcm1QZXJpb2QgPSB0aGlzLmdhbWUudGltZS5jcmVhdGUoZmFsc2UpXHJcbiAgICAgICAgLy/ntaZBbGFybeaOieWGsOmbueeahHRpbWVyXHJcbiAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lciA9IHRoaXMuZ2FtZS50aW1lLmNyZWF0ZShmYWxzZSlcclxuICAgICAgICB0aGlzLmhhaWxpbmdTdG9ybVRpbWVyLmxvb3AoZGVsYXlUb2ZpcmUsIHRoaXMuaGFpbGluZyx0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmhhaWxpbmdBbGFybVBlcmlvZC5sb29wKGFsYXJtUGVyaW9kLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDInKXtcclxuICAgICAgICAgICAgICAgIC8v5Y+q5Yqg5b+r77yM5LiN5Y+rdGFza3dpbmRvd+WHuuS+hlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nVGltZXIucGF1c2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nQWxhcm1QZXJpb2QucGF1c2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lci5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxldmVsPT09J2xldmVsMycpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfYXJnID0gJ2FsYXJtJ1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5Y+rdGFza3dpbmRvd+WHuuS+hlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnBhdXNlZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMubWFzayA9IHRoaXMuc2V0dGluZ21hc2soKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGFybVdpbmRvd0dyb3VwID0gdGhpcy5zZXR0aW5ndGFza1dpbmRvdygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnVucGF1c2UsdGhpcywwLCdhbGFybVdpbmRvdycpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9wYXVzZSBhZnRlciA1IHNlY29uZHNcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCo1LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nU3Rvcm1UaW1lci5wYXVzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWlsaW5nQWxhcm1QZXJpb2QucmVzdW1lKClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5yZXN1bWUoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2xldmVsX2FyZ+aUueWbnnBsYXlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2FyZyA9ICdwbGF5J1xyXG4gICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMuaGFpbGluZ0FsYXJtUGVyaW9kLnN0YXJ0KClcclxuICAgIH0sXHJcblxyXG4gICAgbXljbG91ZFRyaWFsRGlhbG9ndWU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciB3b3JkcyA9IGFyZ3VtZW50c1syXVxyXG5cclxuICAgICAgICB2YXIgZGlhbG9ndWUgPSB0aGlzLnNldHRpbmdEaWFsb2d1ZSh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgdGhpcy5teWNsb3VkLnkgLSB0aGlzLm15Y2xvdWQuaGVpZ2h0KjEuMilcclxuICAgICAgICBkaWFsb2d1ZS5jb250ZW50ID0gd29yZHNcclxuICAgICAgICBkaWFsb2d1ZS5zdHlsZSA9IHsgZm9udDogXCIxNnB4IE1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBmaWxsOiBcIiMwMDBcIiB9XHJcblxyXG4gICAgICAgIHRoaXMudHlwZXdyaXRlcihkaWFsb2d1ZS5pbWcueCAtIChkaWFsb2d1ZS5pbWcud2lkdGgqMC44KS8yLGRpYWxvZ3VlLmltZy55LShkaWFsb2d1ZS5pbWcuaGVpZ2h0KjAuOCkvMiwgZGlhbG9ndWUpXHJcblxyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMS0yJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5idG5HZW5lcmF0b3IoJ2J0bl8xXzEnLCAn5rKS5ZWP6aGMIScsIDAsIGZhbHNlKSAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vRm9yIHRyaWFsXHJcbiAgICBwbGF5UGF1c2VkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubXljbG91ZC5pbnB1dEVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmdhbWVUaW1lci5wYXVzZSgpXHJcbiAgICAgICAgdGhpcy5oYWlsaW5nVGltZXIucGF1c2UoKVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgcGxheVJlc3VtZWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy/lm6Dngrp0cmlhbDEtMuS4jeacg+iHquWLleino+mZpOaaq+WBnO+8jOmcgOimgeaMieaMiemIlemWi+Wni1xyXG4gICAgICAgIGlmKHRoaXMubGV2ZWxfYXJnIT09J3RyaWFsMS0yJyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLm15Y2xvdWQuaW5wdXRFbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaGVhcnRtYWtlcjogZnVuY3Rpb24oaGVhcnRzKXtcclxuXHJcbiAgICAgICAgdmFyIGhlYXJ0XzEgPSBoZWFydHNbMF1cclxuICAgICAgICB2YXIgaGVhcnRfMiA9IGhlYXJ0c1sxXVxyXG4gICAgICAgIHZhciBoZWFydF8zID0gaGVhcnRzWzJdICAgICAgICBcclxuICAgICAgICAvLyB2YXIgbmV3aGVhcnRzID0gW11cclxuXHJcbiAgICAgICAgdmFyIGhlYXJ0c2NhbGUgPSAwLjZcclxuICAgICAgICB0aGlzLmhlYXJ0MSA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMTAsMjAsaGVhcnRfMSlcclxuICAgICAgICB0aGlzLmhlYXJ0MiA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UodGhpcy5oZWFydDEueCArIHRoaXMuaGVhcnQxLndpZHRoICogaGVhcnRzY2FsZSwyMCxoZWFydF8yKSAgICAgIFxyXG4gICAgICAgIHRoaXMuaGVhcnQzID0gdGhpcy5nYW1lLmFkZC5pbWFnZSh0aGlzLmhlYXJ0Mi54ICsgdGhpcy5oZWFydDIud2lkdGggKiBoZWFydHNjYWxlLDIwLGhlYXJ0XzMpICAgICAgXHJcbiAgICAgICAgdGhpcy5oZWFydDEuc2NhbGUuc2V0VG8oaGVhcnRzY2FsZSlcclxuICAgICAgICB0aGlzLmhlYXJ0Mi5zY2FsZS5zZXRUbyhoZWFydHNjYWxlKVxyXG4gICAgICAgIHRoaXMuaGVhcnQzLnNjYWxlLnNldFRvKGhlYXJ0c2NhbGUpXHJcblxyXG4gICAgICAgIC8vIG5ld2hlYXJ0c1swXSA9IHRoaXMuaGVhcnQxXHJcbiAgICAgICAgLy8gbmV3aGVhcnRzWzFdID0gdGhpcy5oZWFydDJcclxuICAgICAgICAvLyBuZXdoZWFydHNbMl0gPSB0aGlzLmhlYXJ0M1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gbmV3aGVhcnRzXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkdlbmVyYXRvcjogZnVuY3Rpb24oYnRuU3R5bGUsIHZhbHVlLCBpc0NsaWNrKXtcclxuXHJcbiAgICAgICAgdmFyIHdpZHRoID0gMTUwXHJcbiAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWFxyXG4gICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjc1XHJcbiAgICAgICAgdmFyIGFuY2hvcl94ID0gMC41XHJcbiAgICAgICAgdmFyIGFuY2hvcl95ID0gMC4yXHJcbiAgICAgICAgdmFyIHR4dF9hbmNob3JfeSA9IDBcclxuICAgICAgICB2YXIgc3R5bGUgPSBpc0NsaWNrP2J0blN0eWxlKydfY2xpY2snOmJ0blN0eWxlXHJcblxyXG4gICAgICAgIHZhciBidXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbih4LCB5LCBzdHlsZSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuR2VuZXJhdG9yKHN0eWxlLCB2YWx1ZSwgdHJ1ZSlcclxuICAgICAgICB9LCB0aGlzLCAxLDEsMClcclxuXHJcbiAgICAgICAgYnV0dG9uLmFuY2hvci5zZXRUbyhhbmNob3JfeCxhbmNob3JfeSlcclxuICAgICAgICBidXR0b24ud2lkdGggPSB3aWR0aFxyXG4gICAgICAgIGJ1dHRvbi5oZWlnaHQgPSBoZWlnaHRcclxuXHJcbiAgICAgICAgdmFyIHR4dF9zdHlsZSA9IHtmb250OiBcIjIycHggTWljcm9zb2Z0IEpoZW5nSGVpXCIsIGZpbGw6IFwiI2ZmZlwifVxyXG5cclxuICAgICAgICBidXR0b24uYnV0dG9uX3R4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCh4LCB5LCB2YWx1ZSwgdHh0X3N0eWxlKVxyXG4gICAgICAgIGJ1dHRvbi5idXR0b25fdHh0LmFuY2hvci5zZXRUbyhhbmNob3JfeCx0eHRfYW5jaG9yX3kpXHJcblxyXG4gICAgICAgIGlmKGlzQ2xpY2spe1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlcih2YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBidXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgc3RhdGVDaGFuZ2VyOiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgaWYodGhpcy5sZXZlbF9hcmc9PT0ndHJpYWwxLTInICYmIHZhbHVlPT09J+aykuWVj+mhjCEnKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnJlc3RhcnQodHJ1ZSwgZmFsc2UsIHRoaXMubGV2ZWwsICdwbGF5JykgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE11c2ljQ29udHJvbGVyKCdzdG9wJykgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGVtaXR0ZXJHZW5lcmF0b3I6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBlbWl0dGVyID0gdGhpcy5nYW1lLmFkZC5lbWl0dGVyKDAsIDAsIDUwMClcclxuXHJcblxyXG4gICAgICAgIGVtaXR0ZXIubWFrZVBhcnRpY2xlcyhbJ2ljZTEnLCdpY2UyJywnaWNlMyddKVxyXG5cclxuICAgICAgICBlbWl0dGVyLm1pblBhcnRpY2xlU3BlZWQuc2V0KC0xMDAwLCAtNTAwKVxyXG4gICAgICAgIGVtaXR0ZXIubWF4UGFydGljbGVTcGVlZC5zZXQoMTAwMCwgNTAwKVxyXG4gICAgICAgIGVtaXR0ZXIuZ3Jhdml0eSA9IDA7XHJcbiAgICAgICAgZW1pdHRlci5zZXRSb3RhdGlvbigxMCwgNTApXHJcbiAgICAgICAgLy8gdGhpcy5iaWdoYWlsRW1pdHRlci5zZXRBbHBoYSgwLjEsIDAuOCwgMzAwKVxyXG4gICAgICAgIC8vIHRoaXMuYmlnaGFpbEVtaXR0ZXIuc2V0U2NhbGUoMC42LCAwLjksIDAuNiwgMC45LCAwLCBQaGFzZXIuRWFzaW5nLlF1aW50aWMuT3V0KVxyXG4gICAgICAgIGVtaXR0ZXIuc2V0U2NhbGUoMC41LCAwLjUsIDEsIDEsIDAsIFBoYXNlci5FYXNpbmcuUXVpbnRpYy5PdXQpXHJcblxyXG4gICAgICAgIHJldHVybiBlbWl0dGVyXHJcbiAgICB9LFxyXG5cclxuICAgIG9uY2xpY2tFbWl0dGVyOiBmdW5jdGlvbihvYmope1xyXG5cclxuICAgICAgICB0aGlzLmNsaWNrRW1pdHRlciA9IG9iai5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uKHBvaW50ZXIpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5teWNsb3VkLmlzZnJlZXppbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuY2xpY2tUaW1lcysrXHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5teWNsb3VkLmNsaWNrVGltZXM+PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5jbGlja1RpbWVzID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZC5pc2ZyZWV6aW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Y2xvdWQuYW5pbWF0aW9ucy5wbGF5KCdzdGF0aWMnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxldmVsX2FyZz09PSd0cmlhbDItMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+etieW+heieouW5leatuOato1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAxLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUucmVzdGFydCh0cnVlLGZhbHNlLHRoaXMubGV2ZWwsJ3BsYXknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNDb250cm9sZXIoJ3N0b3AnKSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSx0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIueCA9IHBvaW50ZXIueFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIueSA9IHBvaW50ZXIueVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXljbG91ZEVtaXR0ZXIuc3RhcnQodHJ1ZSwgMjAwMCwgbnVsbCwgMTApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRRdWFrZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgYWRkUXVha2U6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBpbnRlbnNpdHkgPSAwLjAxXHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gNTAwXHJcbiAgICAgICAgdGhpcy5nYW1lLmNhbWVyYS5zaGFrZShpbnRlbnNpdHksZHVyYXRpb24pXHJcbiAgICB9LFxyXG5cclxuICAgIGhhaWxpbmc6IGZ1bmN0aW9uKHNpemUscG9zaXRpb25YKXtcclxuXHJcbiAgICAgICAgdmFyIGhhaWxTaXplID0gdGhpcy5nYW1lLmNhY2hlLmdldEltYWdlKCdoYWlsJykud2lkdGgvM1xyXG4gICAgICAgIHZhciBiaWdoYWlsU2l6ZSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRJbWFnZSgnYmlnaGFpbCcpLndpZHRoLzNcclxuXHJcbiAgICAgICAgdmFyIHggPSBwb3NpdGlvblggfHwgdGhpcy5nYW1lLnJuZC5pbnRlZ2VySW5SYW5nZSgwLCB0aGlzLmdhbWUud2lkdGggLSBoYWlsU2l6ZSkgXHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLmJpZ2Nsb3VkLnkgKyB0aGlzLmJpZ2Nsb3VkLmhlaWdodFxyXG5cclxuICAgICAgICBpZih0aGlzLmxldmVsPT09J2xldmVsMScpe1xyXG4gICAgICAgICAgICB2YXIgZmFsbGluZ09iamVjdCA9ICdoYWlsJ1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMubGV2ZWxfYXJnPT09J3RyaWFsMi0xJyl7XHJcbiAgICAgICAgICAgIHZhciBmYWxsaW5nT2JqZWN0ID0gJ2JpZ2hhaWwnXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBmYWxsaW5nT2JqZWN0ID0gKHRoaXMuZ2FtZS5ybmQuaW50ZWdlckluUmFuZ2UoMCwxMCk+Nyk/J2JpZ2hhaWwnOidoYWlsJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhhaWwgPSB0aGlzLmhhaWxzLmdldEZpcnN0RXhpc3RzKGZhbHNlLHRydWUseCx5LGZhbGxpbmdPYmplY3QpICAgICAgICAgICAgXHJcbiAgICAgICAgaGFpbC5zY2FsZS5zZXRUbygwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGUoaGFpbClcclxuICAgICAgICBoYWlsLmJvZHkuc2V0U2l6ZShoYWlsU2l6ZSowLjYsaGFpbFNpemUqMC42LGhhaWxTaXplKjAuMixoYWlsU2l6ZSowLjMpXHJcbiAgICAgICAgaGFpbC5ib2R5LnZlbG9jaXR5LnkgPSAzMDBcclxuICAgICAgICBoYWlsLnNpemUgPSAoZmFsbGluZ09iamVjdD09PSdiaWdoYWlsJyk/J2JpZyc6J3NtYWxsJ1xyXG4gICAgICAgIC8vIGhhaWwub3V0T2ZCb3VuZHNLaWxsID0gdHJ1ZVxyXG4gICAgICAgIGhhaWwuY2hlY2tXb3JsZEJvdW5kcyA9IHRydWVcclxuICAgICAgICBoYWlsLmV2ZW50cy5vbk91dE9mQm91bmRzLmFkZChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5sZXZlbD09PSdsZXZlbDMnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGl0cm9hZChoYWlsKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoYWlsLmRlc3Ryb3koKVxyXG5cclxuICAgICAgICB9LHRoaXMpXHJcbiAgICB9LFxyXG5cclxuICAgIGZyb3plbnJvYWRJbml0aWFsaXplOiBmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgcm9hZF94ID0gW11cclxuICAgICAgICB2YXIgcm9hZF95ID0gdGhpcy5nYW1lLmhlaWdodFxyXG4gICAgICAgIHRoaXMuZnJvemVucm9hZCA9IFtdXHJcbiAgICAgICAgdGhpcy5mcm96ZW5yb2FkcyA9IHRoaXMuYWRkLmdyb3VwKClcclxuICAgICAgICB0aGlzLmZyb3plbnJvYWRzLm1heGZyYW1lID0gMVxyXG5cclxuICAgICAgICAvL2xlZnRcclxuICAgICAgICByb2FkX3hbMF0gPSB0aGlzLmdhbWUud2lkdGggKiAxLzZcclxuICAgICAgICAvL21pZGRsZVxyXG4gICAgICAgIHJvYWRfeFsxXSA9IHRoaXMuZ2FtZS53aWR0aCAqIDEvMlxyXG4gICAgICAgIC8vcmlnaHRcclxuICAgICAgICByb2FkX3hbMl0gPSB0aGlzLmdhbWUud2lkdGggKiA1LzZcclxuXHJcblxyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8MztpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShyb2FkX3hbaV0gLCByb2FkX3ksICdpY2Vncm91bmQnKVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0uZnJhbWUgPSAwXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFtpXS5zY2FsZS5zZXRUbygwLjUsMC41KVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0uYW5jaG9yLnNldFRvKDAuNSwxKVxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRbaV0udmlzaWJsZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZHMuYWRkKHRoaXMuZnJvemVucm9hZFtpXSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaGl0cm9hZDogZnVuY3Rpb24oaGFpbCl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubXljbG91ZC5saWZlPT09Myl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhhaWwueClcclxuXHJcbiAgICAgICAgICAgIGlmKGhhaWwueDw9dGhpcy5nYW1lLndvcmxkLndpZHRoLzMpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFswXS52aXNpYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfWVsc2UgaWYoaGFpbC54PnRoaXMuZ2FtZS53b3JsZC53aWR0aCogMS8zICYmIFxyXG4gICAgICAgICAgICAgICAgICAgIGhhaWwueDw9dGhpcy5nYW1lLndvcmxkLndpZHRoKiAyLzMpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZnJvemVucm9hZFsxXS52aXNpYmxlID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm96ZW5yb2FkWzJdLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyb3plbnJvYWRzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oZWxlKXtcclxuICAgICAgICAgICAgICAgIGVsZS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgaWYoZWxlLmZyYW1lPHRoaXMuZnJvemVucm9hZHMubWF4ZnJhbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5mcmFtZSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sdGhpcylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubXljbG91ZC5saWZlPjApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkTGlmZUhhbmRsZXIoLS10aGlzLm15Y2xvdWQubGlmZSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhaWxDcnVzaGVkOiBmdW5jdGlvbih4LHksc2NhbGUsc2l6ZSl7XHJcbiAgICAgICAgdmFyIGZhbGxpbmdPYmplY3QgPSAoc2l6ZT09PSdiaWcnKT8nYmlnaGFpbCc6J2hhaWwnXHJcbiAgICAgICAgdmFyIGFuY2hvclkgPSAwLjVcclxuICAgICAgICB2YXIgY3J1c2ggPSB0aGlzLmhhaWxjcnVzaGVzLmdldEZpcnN0RXhpc3RzKGZhbHNlLHRydWUseCx5LGZhbGxpbmdPYmplY3QpXHJcbiAgICAgICAgY3J1c2guYW5jaG9yLnNldFRvKDAuNSxhbmNob3JZKVxyXG4gICAgICAgIGNydXNoLnNjYWxlLnNldFRvKHNjYWxlKVxyXG5cclxuICAgICAgICB2YXIgYW5pbSA9IGNydXNoLmFuaW1hdGlvbnMuYWRkKGZhbGxpbmdPYmplY3QpO1xyXG4gICAgICAgIGFuaW0ucGxheSg2MCxmYWxzZSxmYWxzZSlcclxuICAgICAgICBhbmltLm9uQ29tcGxldGUuYWRkT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjcnVzaC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH0sXHJcblxyXG4gICAgbXljbG91ZExpZmVIYW5kbGVyOiBmdW5jdGlvbihsaWZlKXtcclxuXHJcbiAgICAgICAgaWYobGlmZT4wKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBoZWFydHMgPSBbXVxyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8MzsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGhlYXJ0c1tpXSA9IGk8PWxpZmUtMT8ncmVkaGVhcnQnOidibGFja2hlYXJ0J1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhlYXJ0bWFrZXIoaGVhcnRzKVxyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTXVzaWNDb250cm9sZXIoJ3N0b3AnKSAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdPdmVyJywgdHJ1ZSwgZmFsc2UsIHRoaXMubGV2ZWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXR0aW5nRGlhbG9ndWU6IGZ1bmN0aW9uKHgseSx3b3Jkcyl7XHJcblxyXG4gICAgICAgIHZhciBkaWFsb2d1ZUltZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoeCx5LCAnZGlhbG9ndWUnKSBcclxuICAgICAgICBkaWFsb2d1ZUltZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuOFxyXG4gICAgICAgIGRpYWxvZ3VlSW1nLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgKiAwLjJcclxuICAgICAgICBkaWFsb2d1ZUltZy5hbmNob3Iuc2V0VG8oMC41LDAuNSlcclxuXHJcbiAgICAgICAgdmFyIGRpYWxvZ3VlID0ge31cclxuICAgICAgICBkaWFsb2d1ZS5pbWcgPSBkaWFsb2d1ZUltZ1xyXG4gICAgICAgIGRpYWxvZ3VlLmNvbnRlbnQgPSB3b3Jkc1xyXG5cclxuICAgICAgICBpZihkaWFsb2d1ZS5jb250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5teWNsb3VkU3BlYWtpbmcoZGlhbG9ndWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlhbG9ndWVcclxuICAgIH0sXHJcblxyXG4gICAgdHlwZXdyaXRlcjogZnVuY3Rpb24oeCx5LGRpYWxvZ3VlKXtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZGlhbG9ndWUuY29udGVudFxyXG5cclxuICAgICAgICB0aGlzLmxpbmUgPSBbXVxyXG4gICAgICAgIHRoaXMud29yZEluZGV4ID0gMFxyXG4gICAgICAgIHRoaXMubGluZUluZGV4ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLndvcmREZWxheSA9IDEwMDtcclxuICAgICAgICB0aGlzLmxpbmVEZWxheSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZWZpbmlzaGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gZGlhbG9ndWUuc3R5bGUgfHx7IGZvbnQ6IFwiMTZweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCIgfVxyXG5cclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoeCwgeSwgJycsIHN0eWxlKTtcclxuICAgICAgICB0aGlzLm5leHRMaW5lKClcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dExpbmU6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpbmVJbmRleCA9PT0gdGhpcy5jb250ZW50Lmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vICBXZSdyZSBmaW5pc2hlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlZmluaXNoZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMudHlwZWZpbmlzaGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICAvLyB9LHRoaXMpXHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgU3BsaXQgdGhlIGN1cnJlbnQgbGluZSBvbiBzcGFjZXMsIHNvIG9uZSB3b3JkIHBlciBhcnJheSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5saW5lID0gdGhpcy5jb250ZW50W3RoaXMubGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG5cclxuICAgICAgICAvLyAgUmVzZXQgdGhlIHdvcmQgaW5kZXggdG8gemVybyAodGhlIGZpcnN0IHdvcmQgaW4gdGhlIGxpbmUpXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvLyAgQ2FsbCB0aGUgJ25leHRXb3JkJyBmdW5jdGlvbiBvbmNlIGZvciBlYWNoIHdvcmQgaW4gdGhlIGxpbmUgKGxpbmUubGVuZ3RoKVxyXG4gICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5yZXBlYXQodGhpcy53b3JkRGVsYXksIHRoaXMubGluZS5sZW5ndGgsIHRoaXMubmV4dFdvcmQsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0byB0aGUgbmV4dCBsaW5lXHJcbiAgICAgICAgdGhpcy5saW5lSW5kZXgrKztcclxuICAgIH0sXHJcblxyXG4gICAgbmV4dFdvcmQ6IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIC8vICBBZGQgdGhlIG5leHQgd29yZCBvbnRvIHRoZSB0ZXh0IHN0cmluZywgZm9sbG93ZWQgYnkgYSBzcGFjZVxyXG4gICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KHRoaXMubGluZVt0aGlzLndvcmRJbmRleF0pO1xyXG5cclxuICAgICAgICAvLyAgQWR2YW5jZSB0aGUgd29yZCBpbmRleCB0byB0aGUgbmV4dCB3b3JkIGluIHRoZSBsaW5lXHJcbiAgICAgICAgdGhpcy53b3JkSW5kZXgrKztcclxuXHJcbiAgICAgICAgLy8gIExhc3Qgd29yZD9cclxuICAgICAgICBpZiAodGhpcy53b3JkSW5kZXggPT09IHRoaXMubGluZS5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgQWRkIGEgY2FycmlhZ2UgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMudGV4dC50ZXh0ID0gdGhpcy50ZXh0LnRleHQuY29uY2F0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gIEdldCB0aGUgbmV4dCBsaW5lIGFmdGVyIHRoZSBsaW5lRGVsYXkgYW1vdW50IG9mIG1zIGhhcyBlbGFwc2VkXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQodGhpcy5saW5lRGVsYXksIHRoaXMubmV4dExpbmUsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdHlwZUZpbmlzaGVkOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMudHlwZWZpbmlzaGVkKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5UmVzdW1lZCgpXHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmxldmVsX2FyZyE9PSdwbGF5Jyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhaWxpbmdUaW1lci5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZWZpbmlzaGVkID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGJhY2tncm91bmRNdXNpY0NvbnRyb2xlcjogZnVuY3Rpb24ob3B0aW9uKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihvcHRpb249PT0ncGxheScpe1xyXG4gICAgICAgICAgICAvL+iBsumfs+WHuumMr+S4jeW9semfv1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnc291bmQucGxheSgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2UgaWYob3B0aW9uPT09J3N0b3AnKXtcclxuXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdzb3VuZC5zdG9wKClcclxuICAgICAgICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ZWxzZSBpZihvcHRpb249PT0ncGF1c2UnKXtcclxuXHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdzb3VuZC5wYXVzZSgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2UgaWYob3B0aW9uPT09J3Jlc3VtZScpe1xyXG5cclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZ3NvdW5kLnJlc3VtZSgpXHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQbGF5U3RhdGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlcy9wbGF5LmpzIiwibGV0IE92ZXJTdGF0ZSA9IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGFyZ3VtZW50c1swXVxyXG4gICAgICAgIC8vIHRoaXMubGV2ZWxfYXJnID0gYXJndW1lbnRzWzFdXHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuRVhBQ1RfRklUXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZW5hYmxlZCA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lLnN0YWdlLmJhY2tncm91bmRDb2xvciA9ICcjMDAwJ1xyXG4gICAgICAgIHZhciBiZyA9IHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwwLCdmYWlsX2JnJylcclxuICAgICAgICBiZy53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aFxyXG4gICAgICAgIGJnLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHRcclxuXHJcbiAgICAgICAgLy9mYWlsY2xvdWRcclxuICAgICAgICB2YXIgZmFpbGNsb3VkID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsIHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCdmYWlsY2xvdWQnKVxyXG4gICAgICAgIGZhaWxjbG91ZC5zY2FsZS5zZXRUbygwLjUpXHJcbiAgICAgICAgZmFpbGNsb3VkLmFuY2hvci5zZXRUbygwLjUpXHJcbiAgICAgICAgdmFyIGZhaWxBbmltID0gZmFpbGNsb3VkLmFuaW1hdGlvbnMuYWRkKCdmYWlsY2xvdWQnKTtcclxuICAgICAgICBmYWlsQW5pbS5wbGF5KDUsZmFsc2UsZmFsc2UpO1xyXG5cclxuICAgICAgICAvL3dvcmRzXHJcbiAgICAgICAgdmFyIHN0eWxlID0ge2ZvbnQ6IFwiMjJweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmZjAwXCJ9XHJcbiAgICAgICAgdmFyIGZhaWx3b3JkcyA9IHRoaXMuZ2FtZS5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCwgZmFpbGNsb3VkLnktZmFpbGNsb3VkLmhlaWdodC8yLCAn5aSx5pWXficsIHN0eWxlKVxyXG4gICAgICAgIGZhaWx3b3Jkcy5hbmNob3Iuc2V0VG8oMC41KVxyXG5cclxuICAgICAgICB0aGlzLnJlcGxheWJ1dHRvbiA9IHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMV8xJywn5YaN6Kmm5LiA5qyhJywgMSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5sb25nZm9ybWJ1dHRvbiA9IHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fMl8xJywn6KeA55yL5bCI6aGMJywgMiwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zaGFyZWJ1dHRvbiA9IHRoaXMuYnRuR2VuZXJhdG9yKCdidG5fc2hhcmUnLCfliIbkuqvlh7rljrvlkKchJywgMCwgZmFsc2UpXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBidG5HZW5lcmF0b3I6IGZ1bmN0aW9uKGJ0blN0eWxlLCB2YWx1ZSwgcG9zaXRpb24sIGlzQ2xpY2spe1xyXG4gICAgICAgIC8vcG9zaXRpb246IDAo5pyA5LiK6Z2iKSwxKOW3puS4iyksMijlj7PkuIspXHJcblxyXG4gICAgICAgIGlmKHBvc2l0aW9uPT09MCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjlcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWFxyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnJlcGxheWJ1dHRvbi55IC0gdGhpcy5yZXBsYXlidXR0b24uaGVpZ2h0KjEuMlxyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvcl94ID0gMC41XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb249PT0xKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNDNcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjI1XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC45XHJcbiAgICAgICAgICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjQ1XHJcbiAgICAgICAgfWVsc2UgaWYocG9zaXRpb249PT0yKXtcclxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNDNcclxuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgICAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQud2lkdGgqIDAuNzVcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodCowLjlcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JfeCA9IDAuNTVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN3aXRjaChwb3NpdGlvbil7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgMDpcclxuICAgICAgICAvLyAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuOVxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIGhlaWdodCA9IDQ4XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgeCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgeSA9IHRoaXMucmVwbGF5YnV0dG9uLnkgLSB0aGlzLnJlcGxheWJ1dHRvbi5oZWlnaHQqMS4yXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjVcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgLy8gICAgIGNhc2UgMTpcclxuICAgICAgICAvLyAgICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAqIDAuNDNcclxuICAgICAgICAvLyAgICAgICAgIHZhciBoZWlnaHQgPSA0OFxyXG4gICAgICAgIC8vICAgICAgICAgdmFyIHggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjI1XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC45XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjQ1XHJcbiAgICAgICAgLy8gICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICBjYXNlIDI6XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGggKiAwLjQzXHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgaGVpZ2h0ID0gNDhcclxuICAgICAgICAvLyAgICAgICAgIHZhciB4ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoKiAwLjc1XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgeSA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQqMC45XHJcbiAgICAgICAgLy8gICAgICAgICB2YXIgYW5jaG9yX3ggPSAwLjU1XHJcbiAgICAgICAgLy8gICAgICAgICBicmVha1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdmFyIGFuY2hvcl95ID0gMC4yXHJcbiAgICAgICAgdmFyIHR4dF9hbmNob3JfeSA9IDBcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlID0gaXNDbGljaz9idG5TdHlsZSsnX2NsaWNrJzpidG5TdHlsZVxyXG5cclxuICAgICAgICB2YXIgYnV0dG9uID0gdGhpcy5nYW1lLmFkZC5idXR0b24oeCwgeSwgc3R5bGUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkdlbmVyYXRvcihzdHlsZSwgdmFsdWUsIHBvc2l0aW9uLCB0cnVlKVxyXG4gICAgICAgIH0sIHRoaXMsIDEsMSwwKVxyXG5cclxuICAgICAgICBidXR0b24uYW5jaG9yLnNldFRvKGFuY2hvcl94LGFuY2hvcl95KVxyXG4gICAgICAgIGJ1dHRvbi53aWR0aCA9IHdpZHRoXHJcbiAgICAgICAgYnV0dG9uLmhlaWdodCA9IGhlaWdodFxyXG5cclxuICAgICAgICB2YXIgdHh0X3N0eWxlID0ge2ZvbnQ6IFwiMjJweCBNaWNyb3NvZnQgSmhlbmdIZWlcIiwgZmlsbDogXCIjZmZmXCJ9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5idXR0b25fdHh0ID0gdGhpcy5nYW1lLmFkZC50ZXh0KHgsIHksIHZhbHVlLCB0eHRfc3R5bGUpXHJcbiAgICAgICAgYnV0dG9uLmJ1dHRvbl90eHQuYW5jaG9yLnNldFRvKGFuY2hvcl94LHR4dF9hbmNob3JfeSlcclxuXHJcbiAgICAgICAgaWYoaXNDbGljayl7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVDaGFuZ2VyKHZhbHVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGJ1dHRvblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGF0ZUNoYW5nZXI6IGZ1bmN0aW9uKHZhbHVlKXtcclxuXHJcbiAgICAgICAgc3dpdGNoKHZhbHVlKXtcclxuICAgICAgICAgICAgY2FzZSAn5YaN6Kmm5LiA5qyhJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnUGxheScsIHRydWUsIGZhbHNlLCAnbGV2ZWwxJywncGxheScpXHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBjYXNlICfop4DnnIvlsIjpoYwnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvbmdmb3JtJylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgJ+WIhuS6q+WHuuWOu+WQpyEnOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NoYXJlIEZCJylcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBPdmVyU3RhdGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGVzL292ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9