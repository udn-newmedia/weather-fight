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

var _start = __webpack_require__(50);

var _start2 = _interopRequireDefault(_start);

var _play = __webpack_require__(51);

var _play2 = _interopRequireDefault(_play);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Weather = Weather || {};

Weather.game = new _phaser2.default.Game('100%', '100%', _phaser2.default.AUTO, 'root');

Weather.BootState = _boot2.default;
Weather.LoadState = _load2.default;
Weather.StartState = _start2.default;
Weather.PlayState = _play2.default;

Weather.game.state.add('Boot', Weather.BootState);
Weather.game.state.add('Load', Weather.LoadState);
Weather.game.state.add('Start', Weather.StartState);
Weather.game.state.add('Play', Weather.PlayState);

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

var _ice_break = __webpack_require__(37);

var _ice_break2 = _interopRequireDefault(_ice_break);

var _cloud_ = __webpack_require__(38);

var _cloud_2 = _interopRequireDefault(_cloud_);

var _bigcloud_anger = __webpack_require__(39);

var _bigcloud_anger2 = _interopRequireDefault(_bigcloud_anger);

var _bigcloud_anger3 = __webpack_require__(40);

var _bigcloud_anger4 = _interopRequireDefault(_bigcloud_anger3);

var _cow_1_ = __webpack_require__(41);

var _cow_1_2 = _interopRequireDefault(_cow_1_);

var _bigice_ = __webpack_require__(42);

var _bigice_2 = _interopRequireDefault(_bigice_);

var _icecloud = __webpack_require__(43);

var _icecloud2 = _interopRequireDefault(_icecloud);

var _mr_wang = __webpack_require__(44);

var _mr_wang2 = _interopRequireDefault(_mr_wang);

var _bg_game3 = __webpack_require__(45);

var _bg_game4 = _interopRequireDefault(_bg_game3);

var _people_1_ = __webpack_require__(46);

var _people_1_2 = _interopRequireDefault(_people_1_);

var _people_2_ = __webpack_require__(47);

var _people_2_2 = _interopRequireDefault(_people_2_);

var _people_3_ = __webpack_require__(48);

var _people_3_2 = _interopRequireDefault(_people_3_);

var _darksky_3 = __webpack_require__(49);

var _darksky_4 = _interopRequireDefault(_darksky_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        this.game.load.image('ice_break', _ice_break2.default);
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

        this.game.load.onFileComplete.add(function (progress) {
            // console.log(progress);
        });
    },

    create: function create() {

        if (this.finished && this.game.state.current === "Load") {
            this.game.state.start('Start', true, false, 'startpage');
        }
    },

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

//level2

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

module.exports = __webpack_require__.p + "image/fb6882219ef23d471bc41464c23bcdc6.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/17acd07aed2ec72bf76f6a15d6c832c8.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1efbefbfb2613ab91d81aaefcdae5640.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/1a9f6cd8080861d27f64036b9cbba5c3.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/78408e16dfdc1f3c8621359d11995933.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/116b00c9f89f06056506987573857745.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/761c906a7bac93bd0cd51a03eafd1131.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/be66e5214bd86cf09b89b4c09f3a769b.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/0e1ad62d5221322e37c743c55ff2f5fc.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6691e9811516ed5c1fb5a1babf1aca16.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/ec4aec8e9ad879782106eefcf8107e01.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/6ba6c2276cf9af55588757bfff821958.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "image/e6fd6ac91700050dbe1bec1ca1ace468.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StartState = {

    init: function init(beginning) {

        this.beginning = beginning;
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },

    create: function create() {

        if (this.beginning === "startpage") {

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
        var mycloud_y = y || this.game.world.height * 0.65;
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
                    this.game.state.start('Play', true, false, 'level1');
                    break;
                case '下一步':
                    // console.log("next")
                    if (this.beginning === "intro1") {
                        this.game.state.start('Play', true, false, 'trial1');
                    } else if (this.beginning === "intro2") {
                        this.game.state.start('Play', true, false, 'trial2');
                    }
                    break;
            }
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PlayState = {

        init: function init(game_level) {

                this.level = game_level;
                this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        },

        create: function create() {

                this.game.physics.startSystem(Phaser.Physics.ARCADE);
                this.scenesFactory(this.level);
                this.mycloudEmitter = this.emitterGenerator();
        },

        update: function update() {
                this.game.physics.arcade.overlap(this.hails, this.mycloud, this.hitmyCloud, null, this);
                this.game.physics.arcade.overlap(this.hails, this.corns, this.hitCorn, null, this);
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
                hail.kill();

                var maxframe;

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

                this.corns.children.forEach(function (ele) {
                        console.log(ele.frame);
                }, this);

                this.mycloudLifeHandler(--this.mycloud.life);

                if (this.level === 'trial2') {

                        this.game.time.events.add(Phaser.Timer.SECOND * 1, function () {
                                this.settingmask();
                                // this.game.state.start('over');
                        }, this);
                }
        },

        hitmyCloud: function hitmyCloud(mycloud, hail) {

                hail.kill();

                this.hailCrushed(hail.x, hail.y, hail.scale.x, hail.size);

                //接到冰雹
                var catchTween = this.game.add.tween(mycloud);
                catchTween.to({ tint: 0x9CD9EB }, 200);
                catchTween.onComplete.add(function () {
                        mycloud.tint = 0xFFFFFF;
                }, this);
                catchTween.start();

                if (hail.size === 'big' && !this.mycloud.isfreezing) {
                        this.hitbyBighail(hail);
                }

                if (this.level === 'trial1') {
                        this.game.state.start('Start', true, false, 'intro2');
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
                } else if (this.level === 'level3') {}

                this.corns = this.game.add.group();
                this.corns.enableBody = true;

                var cornSize = this.game.cache.getImage('corn').width / 4;
                var corn_y = this.game.height * 0.785;
                var left_corn_x = this.game.width * 1 / 6;
                var middle_corn_x = this.game.width * 1 / 2;
                var right_corn_x = this.game.width * 5 / 6;

                this.left_corn = this.game.add.sprite(left_corn_x, corn_y, target_left);
                this.left_corn.frame = 0;
                this.left_corn.scale.setTo(0.5, 0.5);
                this.left_corn.anchor.setTo(0.5, 0);
                this.left_corn.life = 3;
                this.corns.add(this.left_corn);
                this.game.physics.arcade.enable(this.left_corn);

                this.middle_corn = this.game.add.sprite(middle_corn_x, corn_y, target_middle);
                this.middle_corn.frame = 0;
                this.middle_corn.scale.setTo(0.5, 0.5);
                this.middle_corn.anchor.setTo(0.5, 0);
                this.middle_corn.life = 3;
                this.corns.add(this.middle_corn);
                this.game.physics.arcade.enable(this.middle_corn);

                this.right_corn = this.game.add.sprite(right_corn_x, corn_y, target_right);
                this.right_corn.frame = 0;
                this.right_corn.scale.setTo(0.5, 0.5);
                this.right_corn.anchor.setTo(0.5, 0);
                this.right_corn.life = 3;
                this.corns.add(this.right_corn);
                this.game.physics.arcade.enable(this.right_corn);
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

        scenesFactory: function scenesFactory(level) {

                //background
                if (level === 'level1') {
                        var bg = this.game.add.image(0, 0, 'firstbg');
                        bg.width = this.game.world.width;
                        bg.height = this.game.world.height;

                        this.cornInitialize(); //left,middle,right

                        //darksky and cloud animation
                        var darksky = this.game.add.image(0, -100, 'darksky1');
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

                        //cow
                        var cow = this.game.add.sprite(this.game.world.width * 0.1, this.game.world.height * 0.75, 'cow');
                        cow.scale.setTo(0.6, 0.6);
                        cow.anchor.setTo(0.5, 0.5);
                        var cowAnim = cow.animations.add('cow');
                        cowAnim.play(10, true);

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

                        this.settingMyCloud();
                } else if (level === 'level2') {
                        var bg = this.game.add.image(0, 0, 'secondbg');
                        bg.width = this.game.world.width;
                        bg.height = this.game.world.height;

                        this.cornInitialize();

                        //darksky and cloud animation
                        var darksky = this.game.add.image(0, -100, 'darksky2');
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

                        this.settingMyCloud();
                } else if (level === 'level3') {} else if (level === 'trial1') {

                        this.game.stage.backgroundColor = '#fff';
                        this.settingBigcloudReady();
                        this.heartmaker(['redheart', 'redheart', 'redheart']);
                        this.settingmask();

                        this.hails = this.game.add.group();
                        this.hails.enableBody = true;
                        this.hailcrushes = this.game.add.group();

                        this.settingMyCloud(this.game.world.width * 0.85, this.game.world.height * 0.6);

                        this.game.time.events.add(Phaser.Timer.SECOND * 1, this.hailing, this);
                        this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.hailing, this);
                } else if (level === 'trial2') {

                        this.game.stage.backgroundColor = '#fff';
                        this.settingBigcloudReady();
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

        //No animation big cloud
        settingBigcloudReady: function settingBigcloudReady() {

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

        settingmask: function settingmask() {

                this.game.paused = true;
                var bmd = this.game.make.bitmapData(this.game.world.width, this.game.world.height);
                bmd.addToWorld();
                bmd.rect(0, 0, this.game.world.width, this.game.world.height, 'rgba(0,0,0,0.6)');
                bmd.dirty = true;

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

                //button
                var startbtn = this.btnGenerator('btn_1_1', '遊戲開始', false);

                this.startbtn = startbtn;
                taskwindowGroup.add(startbtn);
                taskwindowGroup.add(startbtn.button_txt);

                if (this.level === 'level1') {

                        //Mr.Wang
                        var wangSize = this.game.cache.getImage('wang').height;
                        var wang = this.game.add.image(this.game.world.centerX, startbtn.y - wangSize * 0.4, 'wang');
                        wang.anchor.setTo(0.5);
                        wang.scale.setTo(0.5);

                        taskwindowGroup.add(wang);

                        //words
                        var words = "正在玉米田裡忙碌的王爺爺，\n卻收到了冰雹警報，想起過去\n曾有冰雹造成農損的例子，若\n沒有及時阻止冰雹落下，他的\n心血就要泡湯了......";

                        var style = { font: "20px Microsoft JhengHei", fill: "#000",
                                boundsAlignH: "center", boundsAlignV: "middle",
                                wordWrap: true, wordWrapWidth: window.width * 0.8 };

                        var text = this.game.add.text(this.game.world.centerX, wang.y - wang.height, words, style);
                        text.anchor.setTo(0.5, 1);

                        taskwindowGroup.add(text);
                } else if (this.level === 'level2') {

                        //People
                        var peopleSize = this.game.cache.getImage('people1').height;
                        var people = this.game.add.sprite(this.game.world.centerX, startbtn.y - peopleSize * 0.4, 'people1');
                        people.anchor.setTo(0.5);
                        people.scale.setTo(0.5);

                        taskwindowGroup.add(people);

                        //words
                        // var words = "正在玉米田裡忙碌的王爺爺，\n卻收到了冰雹警報，想起過去\n曾有冰雹造成農損的例子，若\n沒有及時阻止冰雹落下，他的\n心血就要泡湯了......"
                        var words = "離開了玉米田，雲朵人來到了\n繁華的台北市，路上車水馬龍\n，沒想到過了中午，晴朗的天\n氣開始變糟......";

                        var style = { font: "20px Microsoft JhengHei", fill: "#000",
                                boundsAlignH: "center", boundsAlignV: "middle",
                                wordWrap: true, wordWrapWidth: window.width * 0.8 };

                        var text = this.game.add.text(this.game.world.centerX, people.y - people.height, words, style);
                        text.anchor.setTo(0.5, 1);

                        taskwindowGroup.add(text);
                }

                return taskwindowGroup;
        },

        unpauseToStart: function unpauseToStart(event) {

                var startbtnIsClicked = false;

                if (event.x > this.startbtn.x - this.startbtn.width / 2 && event.x < this.startbtn.x + this.startbtn.width / 2 && event.y > this.startbtn.y - this.startbtn.height / 2 && event.y < this.startbtn.y + this.startbtn.height / 2) {
                        startbtnIsClicked = true;
                }

                if (this.game.paused && startbtnIsClicked) {
                        this.game.paused = false;
                        this.mask.cls();
                        this.taskWindowGroup.destroy();
                        this.onPlay();
                }
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
                this.mycloudLifeHandler(this.mycloud.life);

                //time setting
                this.passedTimer();

                //task1
                this.mask = this.settingmask();
                this.taskWindowGroup = this.settingtaskWindow();

                //listener to unpause
                this.game.input.onDown.add(this.unpauseToStart, this);
        },

        passedTimer: function passedTimer() {
                var counter = 5;
                var style1 = { font: "bold 22px Microsoft JhengHei", fill: "#ffffff", align: "left" };
                var text1 = this.game.add.text(this.game.world.width * 0.55, this.heart3.y, '剩餘時間 : ', style1);
                text1.anchor.setTo(0, 0);

                var style2 = { font: "bold 50px Arial", fill: "#FFAA33", align: "center" };
                var text2 = this.game.add.text(text1.x + text1.width * 1.25, this.heart3.y, counter, style2);
                text2.anchor.setTo(0.5, 0.25);

                this.game.time.events.loop(Phaser.Timer.SECOND, function () {

                        if (counter === 0) {
                                // console.log("time's up")
                                var nextlevel;
                                if (this.level === 'level1') {
                                        nextlevel = 'level2';
                                        this.game.state.start('Play', true, false, nextlevel);
                                } else if (this.level === 'level2') {
                                        nextlevel = 'level3';
                                        // this.game.state.start('Play', true, false, nextlevel)
                                } else if (this.level === 'level3') {
                                        console.log('YOU WIN');
                                }
                        } else {
                                text2.setText(--counter);
                        }
                }, this);
        },

        onPlay: function onPlay() {
                //create group for hail
                this.hails = this.game.add.group();
                this.hails.enableBody = true;
                this.hailcrushes = this.game.add.group();

                //create hailing timer
                this.hailingTimer = this.game.time.create(false);
                this.hailingTimer.loop(Phaser.Timer.SECOND * 2, this.hailing, this);
                this.hailingTimer.start();

                //create group for big hail 
                // this.bighails = this.game.add.group()
                // this.bighails.enableBody = true

                //create big hail appearence timer
                // this.bighailAppearTimer = this.game.time.create(false)
                // this.bighailAppearTimer.loop(Phaser.Timer.SECOND*5, this.hailing, this, "big")
                // this.bighailAppearTimer.start()
        },

        heartmaker: function heartmaker(hearts) {

                var heart_3 = hearts[0];
                var heart_2 = hearts[1];
                var heart_1 = hearts[2];

                var heartscale = 0.6;
                this.heart3 = this.game.add.image(10, 20, heart_3);
                this.heart2 = this.game.add.image(this.heart3.x + this.heart3.width * heartscale, 20, heart_2);
                this.heart1 = this.game.add.image(this.heart2.x + this.heart2.width * heartscale, 20, heart_1);
                this.heart3.scale.setTo(heartscale);
                this.heart2.scale.setTo(heartscale);
                this.heart1.scale.setTo(heartscale);
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

                // if(isClick){
                //     console.log('click')
                //     this.mask.cls()
                //     this.taskWindowGroup.destroy()
                // }

                return button;
        },

        bighailAppear: function bighailAppear() {
                this.bighailAppearTimer.pause();
                var hailSize = this.game.cache.getImage('hail').width / 3;

                var x = this.game.world.centerX;
                var y = this.game.height / 2;

                var bighail = this.bighails.getFirstExists(false, true, x, y, 'hail');
                bighail.scale.setTo(1.5, 1.5);
                bighail.anchor.setTo(0.5, 1);

                bighail.clickTimes = 0;
                bighail.inputEnabled = true;
                bighail.body.setSize(hailSize * 0.6, hailSize * 0.6, hailSize * 0.2, hailSize * 0.2);

                //clear the alive hails in group hails       
                this.clearhails();

                this.onclickEmitter(bighail);

                //set the timer for big hail mode
                this.game.time.events.add(Phaser.Timer.SECOND * 5, this.fightbighail, this, bighail);
        },

        emitterGenerator: function emitterGenerator() {

                var emitter = this.game.add.emitter(0, 0, 500);
                emitter.makeParticles('ice_break');

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

        fightbighail: function fightbighail(bighail) {

                if (bighail.clickTimes > 10) {
                        //冰雹爆炸
                        // console.log(bighail.x,bighail.y,bighail.scale.x)
                        bighail.destroy();
                        this.hailCrushed(bighail.x, bighail.y, bighail.scale.x, bighail.anchor.y);

                        //Reset the timers
                        this.hailingTimer = this.game.time.create(true);
                        this.hailingTimer.loop(Phaser.Timer.SECOND * 1, this.hailing, this);
                        this.hailingTimer.start();
                        this.bighailAppearTimer.resume();
                } else {
                        var bighailfade = this.game.add.tween(bighail).to({ alpha: 0.5 }, 500, Phaser.Easing.Linear.None, true);
                        bighailfade.start();
                        bighailfade.onComplete.add(function () {
                                bighail.destroy();

                                //Reset the timers
                                this.hailingTimer = this.game.time.create(true);
                                this.hailingTimer.loop(Phaser.Timer.SECOND * 0.1, this.hailing, this);
                                this.hailingTimer.start();
                                this.bighailAppearTimer.resume();
                        }, this);
                }

                this.bighailAppearTimer.resume();
        },

        clearhails: function clearhails() {
                this.hailingTimer.pause();
                this.bighailAppearTimer.pause();
                this.hails.forEachAlive(function (hail) {
                        hail.kill();
                }, this);
        },

        hailing: function hailing(size, positionX) {
                var hailSize = this.game.cache.getImage('hail').width / 3;
                var bighailSize = this.game.cache.getImage('bighail').width / 3;

                var x = positionX || this.game.rnd.integerInRange(0, this.game.width - hailSize);
                var y = this.bigcloud.y + this.bigcloud.height;
                var fallingObject = this.game.rnd.integerInRange(0, 10) > 7 ? 'bighail' : 'hail';

                var hail = this.hails.getFirstExists(false, true, x, y, fallingObject);
                hail.scale.setTo(0.5);

                // this.hails.smallsizeScale = 0.5
                // this.hails.bigsizeScale = 1.5
                // if(size==="big"){
                //     hail.scale.setTo(this.hails.bigsizeScale)
                // }else{
                //     hail.scale.setTo(this.hails.smallsizeScale)
                // }

                this.game.physics.arcade.enable(hail);
                hail.body.setSize(hailSize * 0.6, hailSize * 0.6, hailSize * 0.2, hailSize * 0.3);
                hail.body.velocity.y = 300;
                hail.outOfBoundsKill = true;
                hail.checkWorldBounds = true;
                hail.size = fallingObject === 'bighail' ? 'big' : 'small';
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
                var hearts = [];

                for (var i = 0; i < 3; i++) {
                        hearts[i] = i <= life - 1 ? 'redheart' : 'blackheart';
                }

                this.heartmaker(hearts);
        }
};

module.exports = PlayState;

/***/ })
],[1]);