webpackJsonp([0],[,function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e(2),e(4);var h=e(6),s=a(h);e(9);var d=e(11),o=a(d),g=e(14),n=a(g),l=e(58),r=a(l),c=e(59),m=a(c),u=u||{};u.game=new s.default.Game("100%","100%",s.default.AUTO,"root"),u.BootState=o.default,u.LoadState=n.default,u.StartState=r.default,u.PlayState=m.default,u.game.state.add("Boot",u.BootState),u.game.state.add("Load",u.LoadState),u.game.state.add("Start",u.StartState),u.game.state.add("Play",u.PlayState),u.game.state.start("Boot")},,,,,,,,function(t,i){},,function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var h=e(12),s=a(h),d=e(13),o=a(d),g={init:function(){this.game.stage.backgroundColor="#000",this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0},preload:function(){this.game.load.image("preload",s.default),this.game.load.spritesheet("mycloud",o.default,248,240)},create:function(){this.game.state.start("Load")}};t.exports=g},function(t,i,e){t.exports=e.p+"image/57ca1a2085d82f0574e3ef740b9a5ead.gif"},function(t,i,e){t.exports=e.p+"image/d8c27ec89099c52ac6784fb39a1e6b9c.png"},function(t,i,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var h=e(15),s=a(h),d=e(16),o=a(d),g=e(17),n=a(g),l=e(18),r=a(l),c=e(19),m=a(c),u=e(20),f=a(u),b=e(21),p=a(b),w=e(22),y=a(w),x=e(23),v=a(x),_=e(24),T=a(_),k=e(25),I=a(k),S=e(26),E=a(S),P=e(27),C=a(P),M=e(28),D=a(M),B=e(29),A=a(B),W=e(30),L=a(W),X=e(31),O=a(X),H=e(32),z=a(H),G=e(33),R=a(G),F=e(34),J=a(F),N=e(35),Y=a(N),V=e(36),j=a(V),Q=e(37),U=a(Q),K=e(38),q=a(K),Z=e(39),$=a(Z),tt=e(40),it=a(tt),et=e(41),at=a(et),ht=e(42),st=a(ht),dt=e(43),ot=a(dt),gt=e(44),nt=a(gt),lt=e(45),rt=a(lt),ct=e(46),mt=a(ct),ut=e(47),ft=a(ut),bt=e(48),pt=a(bt),wt=e(49),yt=a(wt),xt=e(50),vt=a(xt),_t=e(51),Tt=a(_t),kt=e(52),It=a(kt),St=e(53),Et=a(St),Pt=e(54),Ct=a(Pt),Mt=e(55),Dt=a(Mt),Bt=e(56),At=a(Bt),Wt=e(57),Lt=a(Wt),Xt={init:function(){this.game.stage.backgroundColor="#000",this.mycloud=this.game.add.sprite(this.game.world.centerX,this.game.world.height/2,"mycloud"),this.mycloud.anchor.setTo(.5,.5),this.mycloud.spritescale=.5,this.mycloud.scale.setTo(this.mycloud.spritescale),this.mycloud.animations.add("run",[5,4,5,6,7,6],10,!0),this.mycloud.animations.play("run");var t=["每 到 夏 天 ， 除 了 颱 風 外 ， 對 流 旺 ","盛 也 常 帶 來 冰 雹 等 災 害 性 天 氣 ， ","現 在 你 有 機 會 拯 救 台 灣 不 受 冰 雹 ","侵 襲 ， 你 準 備 好 了 嗎 ？ _ "],i={};i.content=t,this.typewriter(.21*this.game.world.width,this.mycloud.y-2*this.mycloud.height,i)},preload:function(){var t=this.game.add.sprite(this.game.width/2-110,this.mycloud.y+this.mycloud.height/2,"preload");this.game.load.setPreloadSprite(t),this.game.load.image("dialogue",s.default),this.game.load.image("bg",o.default),this.game.load.image("longform_btn_click",n.default),this.game.load.image("longform_btn",r.default),this.game.load.image("startgame_btn_click",m.default),this.game.load.image("startgame_btn",f.default),this.game.load.image("title",p.default),this.game.load.image("btn_1_1",y.default),this.game.load.image("btn_1_1_click",v.default),this.game.load.image("btn_2_1",T.default),this.game.load.image("btn_2_1_click",I.default),this.game.load.image("btn_3_1",E.default),this.game.load.image("btn_3_1_click",C.default),this.game.load.image("firstbg",D.default),this.game.load.image("darksky1",A.default),this.game.load.image("blackcloud1",L.default),this.game.load.image("blackcloud2",O.default),this.game.load.image("bigcloud",z.default),this.game.load.spritesheet("hail",R.default,93,93),this.game.load.spritesheet("corn",J.default,240,189),this.game.load.image("redheart",Y.default),this.game.load.image("blackheart",j.default),this.game.load.image("ice_break",U.default),this.game.load.image("cloud",q.default),this.game.load.image("icecloud",ot.default),this.game.load.image("bigcloud_anger1",$.default),this.game.load.image("bigcloud_anger2",it.default),this.game.load.spritesheet("cow",at.default,70,60),this.game.load.spritesheet("bighail",st.default,557/3,187),this.game.load.image("wang",nt.default),this.game.load.image("secondbg",rt.default),this.game.load.spritesheet("people1",mt.default,240,196),this.game.load.spritesheet("people2",ft.default,240,196),this.game.load.spritesheet("people3",pt.default,240,196),this.game.load.image("darksky2",yt.default),this.game.load.image("thirdbg",vt.default),this.game.load.spritesheet("car1",Tt.default,240,150),this.game.load.spritesheet("car2",It.default,240,150),this.game.load.spritesheet("car3",Et.default,240,150),this.game.load.spritesheet("car4",Ct.default,240,150),this.game.load.spritesheet("iceground",At.default,240,170),this.game.load.image("darksky3",Dt.default),this.game.load.image("police",Lt.default),this.game.load.onFileComplete.add(function(t){})},create:function(){this.finished&&"Load"===this.game.state.current&&this.game.state.start("Start",!0,!1,"startpage")},update:function(){this.game.state.start("Start",!0,!1,"startpage")},typewriter:function(t,i,e){this.content=e.content,this.line=[],this.wordIndex=0,this.lineIndex=0,this.wordDelay=100,this.lineDelay=0,this.finished=!1;var a=e.style||{font:"16px Microsoft JhengHei",fill:"#fff"};this.text=this.game.add.text(t,i,"",a),this.nextLine()},nextLine:function(){if(this.lineIndex===this.content.length)return void this.game.time.events.add(2*Phaser.Timer.SECOND,function(){this.finished=!0},this);this.line=this.content[this.lineIndex].split(" "),this.wordIndex=0,this.game.time.events.repeat(this.wordDelay,this.line.length,this.nextWord,this),this.lineIndex++},nextWord:function(){this.text.text=this.text.text.concat(this.line[this.wordIndex]),++this.wordIndex===this.line.length&&(this.text.text=this.text.text.concat("\n"),this.game.time.events.add(this.lineDelay,this.nextLine,this))}};t.exports=Xt},function(t,i,e){t.exports=e.p+"image/477bdfc746b6ebf74c15d743ef356f8f.png"},function(t,i,e){t.exports=e.p+"image/8acfc93fdbf97cabd8ff50d98cf2c770.jpg"},function(t,i,e){t.exports=e.p+"image/80ff2d08a47ab73700af4256b384423f.png"},function(t,i,e){t.exports=e.p+"image/efe42e1bf0851a292148c3c4c058d173.png"},function(t,i,e){t.exports=e.p+"image/32b44ebaad908e963b4b13d2487b0692.png"},function(t,i,e){t.exports=e.p+"image/fa17377be651a8507dcfc594b039592c.png"},function(t,i,e){t.exports=e.p+"image/92d3961850f918db6308e255f48d7507.png"},function(t,i,e){t.exports=e.p+"image/c3e2db495a61f31715b1431eedab9a22.png"},function(t,i,e){t.exports=e.p+"image/2dd86720c7791b1ed33a6fc3e447f80c.png"},function(t,i,e){t.exports=e.p+"image/98d56e11ed509f0f1169ac29715f59cc.png"},function(t,i,e){t.exports=e.p+"image/a005b67358273d2229cd40e6af77509c.png"},function(t,i,e){t.exports=e.p+"image/b7548773a9ad3a002a01fa000557b8a0.png"},function(t,i,e){t.exports=e.p+"image/cda0c9c3742a7b28ed5be5b955e28583.png"},function(t,i,e){t.exports=e.p+"image/32e811048ebfdec90502dcecd9936b81.jpg"},function(t,i,e){t.exports=e.p+"image/551ba1d984cae4c1c00500d6d223aeb9.png"},function(t,i,e){t.exports=e.p+"image/c511e3775ef5501d83e01951b7da2bdb.png"},function(t,i,e){t.exports=e.p+"image/943dd14a36d2fa331fd0a2b82deddd44.png"},function(t,i,e){t.exports=e.p+"image/8457c4ec8c7bbfd20206858b1e5848b8.png"},function(t,i,e){t.exports=e.p+"image/73fa7200f3778acadcf517b43d03f2bc.png"},function(t,i,e){t.exports=e.p+"image/13274755cb99d12a9984a2e1e25a2d1b.png"},function(t,i,e){t.exports=e.p+"image/d4e7167d0f06efd370f57d29ac790ed9.png"},function(t,i,e){t.exports=e.p+"image/953dc0d8aecec3d88267c9044f1eaeaa.png"},function(t,i,e){t.exports=e.p+"image/fb6882219ef23d471bc41464c23bcdc6.png"},function(t,i,e){t.exports=e.p+"image/17acd07aed2ec72bf76f6a15d6c832c8.png"},function(t,i,e){t.exports=e.p+"image/1efbefbfb2613ab91d81aaefcdae5640.png"},function(t,i,e){t.exports=e.p+"image/1a9f6cd8080861d27f64036b9cbba5c3.png"},function(t,i,e){t.exports=e.p+"image/78408e16dfdc1f3c8621359d11995933.png"},function(t,i,e){t.exports=e.p+"image/116b00c9f89f06056506987573857745.png"},function(t,i,e){t.exports=e.p+"image/761c906a7bac93bd0cd51a03eafd1131.png"},function(t,i,e){t.exports=e.p+"image/be66e5214bd86cf09b89b4c09f3a769b.png"},function(t,i,e){t.exports=e.p+"image/0e1ad62d5221322e37c743c55ff2f5fc.jpg"},function(t,i,e){t.exports=e.p+"image/6691e9811516ed5c1fb5a1babf1aca16.png"},function(t,i,e){t.exports=e.p+"image/ec4aec8e9ad879782106eefcf8107e01.png"},function(t,i,e){t.exports=e.p+"image/6ba6c2276cf9af55588757bfff821958.png"},function(t,i,e){t.exports=e.p+"image/e6fd6ac91700050dbe1bec1ca1ace468.png"},function(t,i,e){t.exports=e.p+"image/32dbbd7b62ee91131ac6042e6b0ee43f.jpg"},function(t,i,e){t.exports=e.p+"image/286aa1f8713dacd55d7c25a8dd468fef.png"},function(t,i,e){t.exports=e.p+"image/1cb0c518f75972cfd7102a42ca3bf165.png"},function(t,i,e){t.exports=e.p+"image/f49ec65556484eb42dc67df70112621f.png"},function(t,i,e){t.exports=e.p+"image/0a3fa150a53904b5b4ef72509e03e9d3.png"},function(t,i,e){t.exports=e.p+"image/4166c8e2068e0b976a4f00c4588adf52.png"},function(t,i,e){t.exports=e.p+"image/b2960817f6d32efc3232314758fe4150.png"},function(t,i,e){t.exports=e.p+"image/ce6014dde4b0beb6941eaea040a6226c.png"},function(t,i,e){"use strict";var a={init:function(t){this.beginning=t,this.game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT},create:function(){if("startpage"===this.beginning){var t=this.game.add.image(0,0,"bg");t.width=this.game.world.width,t.height=this.game.world.height;var i=this.game.add.image(0,-100,"title");i.width=1.1*this.game.world.width,i.height=.6*this.game.world.height;this.game.add.tween(i).to({y:0},1e3,Phaser.Easing.Bounce.Out,!0).start(),this.btnGenerator("btn_1_1","開始遊戲",0,!1),this.btnGenerator("btn_2_1","觀看專題",1,!1)}else if("mycloudOS"===this.beginning){this.game.stage.backgroundColor="#000",this.settingmycloud(this.game.world.centerX,this.game.world.centerY,.5,.5);var e=["我 來 自 雲 端 ， 看 不 慣 雲 朵 製 造 冰 ","雹 危 害 人 類 ， 要 拯 救 地 球 不 受 冰 ","雹 攻 擊 。 _"],a=this.settingDialogue(this.game.world.centerX,this.mycloud.y-1.2*this.mycloud.height);a.content=e,a.style={font:"16px Microsoft JhengHei",fill:"#000"},this.typewriter(a.img.x-.8*a.img.width/2,a.img.y-.8*a.img.height/2,a),this.btnGenerator("btn_3_1","直接開始",0,!1)}else if("intro1"===this.beginning){this.game.stage.backgroundColor="#fff",this.settingBigcloud(),this.settinghearts(["redheart","redheart","redheart"]),this.settingmask(),this.settingmycloud(.85*this.game.world.width,.6*this.game.world.height);var e=["在 時 間 內 使 用 手 指 拖 曳 移 動 雲 朵 ","防 止 冰 雹 落 下 _"],a=this.settingDialogue(this.game.world.centerX,this.mycloud.y-1.2*this.mycloud.height);a.content=e,a.style={font:"16px Microsoft JhengHei",fill:"#000"},this.typewriter(a.img.x-.8*a.img.width/2,a.img.y-.8*a.img.height/2,a),this.btnGenerator("btn_1_1","下一步",0,!1),this.btnGenerator("btn_3_1","直接開始",1,!1)}else if("intro2"===this.beginning){this.game.stage.backgroundColor="#fff",this.settingBigcloud(),this.settingmask(),this.settinghearts(["redheart","redheart","redheart"]),this.settingmycloud(.85*this.game.world.width,.6*this.game.world.height);var e=["若 冰 雹 打 中 目 標 物 ， 則 會 損 失 一 ","個 愛 心 ， 當 三 顆 愛 心 歸 零 則 遊 戲","結 束 。"],a=this.settingDialogue(this.game.world.centerX,this.mycloud.y-1.2*this.mycloud.height);a.content=e,a.style={font:"16px Microsoft JhengHei",fill:"#000"},this.typewriter(a.img.x-.8*a.img.width/2,a.img.y-.8*a.img.height/2,a);var h=this.game.add.tween(this.hearts).to({alpha:0},500,"Linear",!0);h.yoyo(!0,500),h.repeat(10,1e3),this.btnGenerator("btn_1_1","下一步",0,!1),this.btnGenerator("btn_3_1","直接開始",1,!1)}},settingDialogue:function(t,i,e){var a=this.game.add.image(t,i,"dialogue");a.width=.8*this.game.world.width,a.height=.2*this.game.world.height,a.anchor.setTo(.5,.5);var h={};return h.img=a,h.content=e,h.content&&this.mycloudSpeaking(h),h},settingmycloud:function(t,i,e,a){var h=t||this.game.world.centerX,s=i||.65*this.game.world.height,d=e||.5,o=a||.5;this.mycloud=this.game.add.sprite(h,s,"mycloud"),this.mycloud.anchor.setTo(d,o),this.mycloud.spritescale=.4,this.mycloud.scale.setTo(this.mycloud.spritescale),this.mycloud.animations.add("static",[0,1,0,2,0,1,0,3],10,!0),this.mycloud.animations.play("static")},settinghearts:function(t){var i=t[0],e=t[1],a=t[2],h=this.game.add.image(10,20,i),s=this.game.add.image(h.x+.6*h.width,20,e),d=this.game.add.image(s.x+.6*s.width,20,a);h.scale.setTo(.6),s.scale.setTo(.6),d.scale.setTo(.6),this.hearts=this.game.add.group(),this.hearts.add(d),this.hearts.add(s),this.hearts.add(h)},settingmask:function(){var t=this.game.make.bitmapData(this.game.world.width,this.game.world.height);t.addToWorld(),t.rect(0,0,this.game.world.width,this.game.world.height,"rgba(0,0,0,0.6)")},settingBigcloud:function(){this.bigcloud=this.game.add.image(this.game.world.centerX,10,"bigcloud"),this.bigcloud.anchor.setTo(.5,0);var t=this.game.cache.getImage("bigcloud");this.bigcloud.width=this.game.world.width,this.bigcloud.height=this.bigcloud.width/t.width*t.height,this.bigcloud_anger1=this.game.add.image(.7*this.bigcloud.width,.55*this.bigcloud.height,"bigcloud_anger1"),this.bigcloud_anger1.anchor.setTo(.5,.5),this.bigcloud_anger1.width=this.bigcloud.width/20,this.bigcloud_anger1.height=this.bigcloud.width/20,this.bigcloud_anger2=this.game.add.image(.15*this.bigcloud.width,.8*this.bigcloud.height,"bigcloud_anger2"),this.bigcloud_anger2.anchor.setTo(.5,.5),this.bigcloud_anger2.width=this.bigcloud.width/20,this.bigcloud_anger2.height=this.bigcloud.width/20},mycloudSpeaking:function(t){var i={font:"16px Microsoft JhengHei",fill:"#000",boundsAlignH:"center",boundsAlignV:"middle",wordWrap:!0,wordWrapWidth:.6*t.width};this.game.add.text(t.img.x,t.img.y,t.content,i).anchor.setTo(.5,.5)},btnGenerator:function(t,i,e,a){var h=this.game.world.centerX,s=.9*this.game.world.height,d=s-72,o=0==e?d:s,g=0==e?.2:.4,n=0==e?0:.3,l=a?t+"_click":t,r=this.game.add.button(h,o,l,function(){this.btnGenerator(l,i,e,!0)},this,1,1,0);r.anchor.setTo(.5,g),r.width=150,r.height=48;var c={font:"22px Microsoft JhengHei",fill:"#fff"};if(this.game.add.text(h,o,i,c).anchor.setTo(.5,n),a)switch(i){case"開始遊戲":this.game.state.start("Start",!0,!1,"mycloudOS");break;case"觀看專題":console.log("longform");break;case"遊戲說明":this.game.state.start("Start",!0,!1,"intro1");break;case"直接開始":this.game.state.start("Play",!0,!1,"level1");break;case"下一步":"intro1"===this.beginning?this.game.state.start("Play",!0,!1,"trial1"):"intro2"===this.beginning&&this.game.state.start("Play",!0,!1,"trial2")}},typewriter:function(t,i,e){this.content=e.content,this.line=[],this.wordIndex=0,this.lineIndex=0,this.wordDelay=100,this.lineDelay=0,this.finished=!1;var a=e.style||{font:"16px Microsoft JhengHei",fill:"#fff"};this.text=this.game.add.text(t,i,"",a),this.nextLine()},nextLine:function(){if(this.lineIndex===this.content.length)return void this.game.time.events.add(2*Phaser.Timer.SECOND,function(){this.finished=!0},this);this.line=this.content[this.lineIndex].split(" "),this.wordIndex=0,this.game.time.events.repeat(this.wordDelay,this.line.length,this.nextWord,this),this.lineIndex++},nextWord:function(){this.text.text=this.text.text.concat(this.line[this.wordIndex]),++this.wordIndex===this.line.length&&(this.text.text=this.text.text.concat("\n"),this.game.time.events.add(this.lineDelay,this.nextLine,this))}};t.exports=a},function(t,i,e){"use strict";var a={init:function(t){this.level=t,this.game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT},create:function(){this.game.physics.startSystem(Phaser.Physics.ARCADE),this.scenesFactory(this.level),this.mycloudEmitter=this.emitterGenerator()},update:function(){this.game.physics.arcade.overlap(this.hails,this.mycloud,this.hitmyCloud,null,this),this.game.physics.arcade.overlap(this.hails,this.corns,this.hitCorn,null,this)},render:function(){},hitCorn:function(t,i){var e;t.kill(),"level1"===this.level?e=3:"level2"===this.level&&(e=2),"level3"!==this.level?3===i.life?(i.frame=1,this.corns.children.forEach(function(t){t.life--},this)):this.corns.children.forEach(function(t){t.frame<e&&t.frame++,t.life--},this):i.frame<1&&(i.frame++,i.body.velocity.y=this.game.rnd.integerInRange(-30,30)),this.mycloudLifeHandler(--this.mycloud.life),"trial2"===this.level&&this.game.time.events.add(1*Phaser.Timer.SECOND,function(){this.settingmask()},this)},hitmyCloud:function(t,i){i.kill(),this.hailCrushed(i.x,i.y,i.scale.x,i.size);var e=this.game.add.tween(t);e.to({tint:10279403},200),e.onComplete.add(function(){t.tint=16777215},this),e.start(),"big"!==i.size||this.mycloud.isfreezing||this.hitbyBighail(i),"trial1"===this.level&&this.game.state.start("Start",!0,!1,"intro2")},hitbyBighail:function(t){this.mycloud.clickTimes=0,this.mycloud.body.velocity.x=0,this.mycloud.isfreezing=!0,this.mycloud.animations.play("frozen")},cornInitialize:function(){var t,i,e;"level1"===this.level?(t="corn",i="corn",e="corn"):"level2"===this.level?(t="people1",i="people2",e="people3"):"level3"===this.level&&(t="car1",i="car2",e="car3"),this.corns=this.game.add.group(),this.corns.enableBody=!0;var a=(this.game.cache.getImage("corn").width,.785*this.game.height),h=1*this.game.width/6,s=1*this.game.width/2,d=5*this.game.width/6;this.left_corn=this.game.add.sprite(h,a,t),this.left_corn.frame=0,this.left_corn.scale.setTo(.5,.5),this.left_corn.anchor.setTo(.5,0),this.left_corn.life=3,this.corns.add(this.left_corn),this.game.physics.arcade.enable(this.left_corn),this.middle_corn=this.game.add.sprite(s,a,i),this.middle_corn.frame=0,this.middle_corn.scale.setTo(.5,.5),this.middle_corn.anchor.setTo(.5,0),this.middle_corn.life=3,this.corns.add(this.middle_corn),this.game.physics.arcade.enable(this.middle_corn),this.right_corn=this.game.add.sprite(d,a,e),this.right_corn.frame=0,this.right_corn.scale.setTo(.5,.5),this.right_corn.anchor.setTo(.5,0),this.right_corn.life=3,this.corns.add(this.right_corn),this.game.physics.arcade.enable(this.right_corn)},carRunning:function(){this.corns=this.game.add.group(),this.corns.enableBody=!0;var t=(this.game.cache.getImage("car1").width,.5*this.game.cache.getImage("car1").height),i=["car1","car2","car3","car4"];this.game.time.events.loop(1*Phaser.Timer.SECOND,function(){var e=this.game.rnd.integerInRange(this.game.world.height-t,this.game.world.height),a=i[Math.floor(Math.random()*i.length)],h=this.corns.getFirstExists(!1,!0,0,e,a);h.anchor.setTo(.5,1),h.scale.setTo(.5),this.game.physics.arcade.enable(h),h.body.velocity.x=200,h.outOfBoundsKill=!0,h.checkWorldBounds=!0},this)},settingMyCloud:function(t,i,e,a){var h=t||this.game.world.centerX,s=i||.65*this.game.world.height,d=e||.5,o=a||.5;this.mycloud=this.game.add.sprite(h,s,"mycloud"),this.mycloud.anchor.setTo(d,o),this.mycloud.life=3,this.mycloud.spritescale=.4,this.mycloud.scale.setTo(this.mycloud.spritescale);var g=this.game.cache.getImage("mycloud").width/10;this.mycloud.animations.add("run",[5,4,5,6,7,6],10,!0),this.mycloud.animations.add("static",[0,1,0,2,0,1,0,3],10,!0),this.mycloud.animations.add("frozen",[8,8,8,8,8,9,8],10,!0),this.mycloud.animations.play("static"),this.game.physics.arcade.enable(this.mycloud),this.mycloud.body.collideWorldBounds=!0,this.mycloud.body.setSize(.8*g,.8*g,.1*g,.1*g),this.mycloud.touching=!1,this.mycloud.inputEnabled=!0,this.mycloud.isfreezing=!1,this.onclickEmitter(this.mycloud),"trial2"!==this.level&&this.mycloudMove()},mycloudMove:function(){var t=this.mycloud.spritescale;this.mycloud.events.onInputDown.add(function(){this.mycloud.touching=!0},this),this.mycloud.events.onInputUp.add(function(){this.mycloud.touching=!1},this),this.game.input.onUp.add(function(){this.mycloud.isfreezing||(this.mycloud.body.velocity.x=0,this.mycloud.animations.play("static"))},this),this.game.device.desktop?this.game.input.addMoveCallback(function(i,e,a,h){this.mycloud.isfreezing||(e>this.mycloud.x?this.mycloud.scale.setTo("-"+t,t):this.mycloud.scale.setTo(t,t),this.mycloud.x=e,this.mycloud.animations.play("run"))},this):this.game.input.addMoveCallback(function(i,e,a,h){this.mycloud.isfreezing||(this.mycloud.touching?(this.mycloud.body.velocity.x=0,e>this.mycloud.x?this.mycloud.scale.setTo("-"+t,t):this.mycloud.scale.setTo(t,t),this.mycloud.x=e):e>this.mycloud.x+this.mycloud.width/2?(this.mycloud.scale.setTo("-"+t,t),this.mycloud.body.velocity.x=200):e<this.mycloud.x-this.mycloud.width/2?(this.mycloud.scale.setTo(t,t),this.mycloud.body.velocity.x=-200):this.mycloud.body.velocity.x=0,this.mycloud.animations.play("run"))},this)},scenesFactory:function(t){if("level1"===t){var i=this.game.add.image(0,0,"firstbg");i.width=this.game.world.width,i.height=this.game.world.height,this.cornInitialize();var e=this.game.add.image(0,-100,"darksky1");e.width=this.game.world.width,e.height=.35*this.game.world.height;var a=this.game.add.image(-150,0,"blackcloud1"),h=this.game.cache.getImage("blackcloud1");a.width=.5*this.game.world.width,a.height=a.width/h.width*h.height;var s=this.game.add.image(300,0,"blackcloud2"),d=this.game.cache.getImage("blackcloud2");s.width=.65*this.game.world.width,s.height=s.width/d.width*d.height;var o=this.game.add.image(-30,this.game.world.height/2,"cloud"),g=this.game.cache.getImage("cloud");o.width=1.2*this.game.world.width,o.height=o.width/g.width*g.height;var n=this.game.add.sprite(.1*this.game.world.width,.75*this.game.world.height,"cow");n.scale.setTo(.6,.6),n.anchor.setTo(.5,.5);n.animations.add("cow").play(10,!0),this.bigcloud=this.game.add.image(this.game.world.centerX,-200,"bigcloud"),this.bigcloud.anchor.setTo(.5,0);var l=this.game.cache.getImage("bigcloud");this.bigcloud.width=this.game.world.width,this.bigcloud.height=this.bigcloud.width/l.width*l.height;var r=this.game.add.tween(e).to({y:0},1e3,Phaser.Easing.Bounce.In,!0);r.start();var c=this.game.add.tween(a).to({x:-50},500,Phaser.Easing.Linear.In,!0,1e3);c.start();var m=this.game.add.tween(s).to({x:200},500,Phaser.Easing.Linear.In,!0,1200);m.start(),this.bigcloud.Yposition=10;var u=this.game.add.tween(this.bigcloud).to({y:this.bigcloud.Yposition},700,Phaser.Easing.Sinusoidal.InOut,!0,1700);u.start(),u.onComplete.add(this.onStart,this),this.settingMyCloud()}else if("level2"===t){var i=this.game.add.image(0,0,"secondbg");i.width=this.game.world.width,i.height=this.game.world.height,this.cornInitialize();var e=this.game.add.image(0,-100,"darksky2");e.width=this.game.world.width,e.height=.35*this.game.world.height;var a=this.game.add.image(-150,0,"blackcloud1"),h=this.game.cache.getImage("blackcloud1");a.width=.5*this.game.world.width,a.height=a.width/h.width*h.height;var s=this.game.add.image(300,0,"blackcloud2"),d=this.game.cache.getImage("blackcloud2");s.width=.65*this.game.world.width,s.height=s.width/d.width*d.height;var o=this.game.add.image(-30,this.game.world.height/2,"cloud"),g=this.game.cache.getImage("cloud");o.width=1.2*this.game.world.width,o.height=o.width/g.width*g.height,this.bigcloud=this.game.add.image(this.game.world.centerX,-200,"bigcloud"),this.bigcloud.anchor.setTo(.5,0);var l=this.game.cache.getImage("bigcloud");this.bigcloud.width=this.game.world.width,this.bigcloud.height=this.bigcloud.width/l.width*l.height;var r=this.game.add.tween(e).to({y:0},1e3,Phaser.Easing.Bounce.In,!0);r.start();var c=this.game.add.tween(a).to({x:-50},500,Phaser.Easing.Linear.In,!0,1e3);c.start();var m=this.game.add.tween(s).to({x:200},500,Phaser.Easing.Linear.In,!0,1200);m.start(),this.bigcloud.Yposition=10;var u=this.game.add.tween(this.bigcloud).to({y:this.bigcloud.Yposition},700,Phaser.Easing.Sinusoidal.InOut,!0,1700);u.start(),u.onComplete.add(this.onStart,this),this.settingMyCloud()}else if("level3"===t){var i=this.game.add.image(0,0,"thirdbg");i.width=this.game.world.width,i.height=this.game.world.height,this.carRunning();var e=this.game.add.image(0,-100,"darksky3");e.width=this.game.world.width,e.height=.35*this.game.world.height;var a=this.game.add.image(-150,0,"blackcloud1"),h=this.game.cache.getImage("blackcloud1");a.width=.5*this.game.world.width,a.height=a.width/h.width*h.height;var s=this.game.add.image(300,0,"blackcloud2"),d=this.game.cache.getImage("blackcloud2");s.width=.65*this.game.world.width,s.height=s.width/d.width*d.height;var o=this.game.add.image(-30,.4*this.game.world.height,"cloud"),g=this.game.cache.getImage("cloud");o.width=1.2*this.game.world.width,o.height=o.width/g.width*g.height,this.bigcloud=this.game.add.image(this.game.world.centerX,-200,"bigcloud"),this.bigcloud.anchor.setTo(.5,0);var l=this.game.cache.getImage("bigcloud");this.bigcloud.width=this.game.world.width,this.bigcloud.height=this.bigcloud.width/l.width*l.height;var r=this.game.add.tween(e).to({y:0},1e3,Phaser.Easing.Bounce.In,!0);r.start();var c=this.game.add.tween(a).to({x:-50},500,Phaser.Easing.Linear.In,!0,1e3);c.start();var m=this.game.add.tween(s).to({x:200},500,Phaser.Easing.Linear.In,!0,1200);m.start(),this.bigcloud.Yposition=10;var u=this.game.add.tween(this.bigcloud).to({y:this.bigcloud.Yposition},700,Phaser.Easing.Sinusoidal.InOut,!0,1700);u.start(),u.onComplete.add(this.onStart,this),this.settingMyCloud()}else if("trial1"===t)this.game.stage.backgroundColor="#fff",this.settingBigcloudReady(),this.heartmaker(["redheart","redheart","redheart"]),this.settingmask(),this.hails=this.game.add.group(),this.hails.enableBody=!0,this.hailcrushes=this.game.add.group(),this.settingMyCloud(.85*this.game.world.width,.6*this.game.world.height),this.game.time.events.add(1*Phaser.Timer.SECOND,this.hailing,this),this.game.time.events.loop(5*Phaser.Timer.SECOND,this.hailing,this);else if("trial2"===t){this.game.stage.backgroundColor="#fff",this.settingBigcloudReady(),this.heartmaker(["redheart","redheart","redheart"]),this.settingmask(),this.hails=this.game.add.group(),this.hails.enableBody=!0,this.hailcrushes=this.game.add.group();var f=.85*this.game.world.width,b=.65*this.game.world.height;this.settingMyCloud(f,b),this.hailing("small",this.bigcloud.x),this.corns=this.game.add.group(),this.corns.enableBody=!0;var p=(this.game.cache.getImage("corn").width,this.game.world.centerX),w=.785*this.game.height,y=this.game.add.sprite(p,w,"corn");y.frame=0,y.scale.setTo(.5,.5),y.anchor.setTo(.5,0),y.life=3,this.corns.add(y),this.game.physics.arcade.enable(y)}},settingBigcloudReady:function(){this.bigcloud=this.game.add.image(this.game.world.centerX,10,"bigcloud"),this.bigcloud.anchor.setTo(.5,0);var t=this.game.cache.getImage("bigcloud");this.bigcloud.width=this.game.world.width,this.bigcloud.height=this.bigcloud.width/t.width*t.height,this.bigcloud_anger1=this.game.add.image(.7*this.bigcloud.width,.55*this.bigcloud.height,"bigcloud_anger1"),this.bigcloud_anger1.anchor.setTo(.5,.5),this.bigcloud_anger1.width=this.bigcloud.width/20,this.bigcloud_anger1.height=this.bigcloud.width/20,this.bigcloud_anger2=this.game.add.image(.15*this.bigcloud.width,.8*this.bigcloud.height,"bigcloud_anger2"),this.bigcloud_anger2.anchor.setTo(.5,.5),this.bigcloud_anger2.width=this.bigcloud.width/20,this.bigcloud_anger2.height=this.bigcloud.width/20},settingmask:function(){this.game.paused=!0;var t=this.game.make.bitmapData(this.game.world.width,this.game.world.height);return t.addToWorld(),t.rect(0,0,this.game.world.width,this.game.world.height,"rgba(0,0,0,0.6)"),t.dirty=!0,t},settingtaskWindow:function(){var t=this.game.add.group(),i=this.game.add.graphics(0,0);i.alignIn(i,Phaser.CENTER,.1*this.game.world.width,.15*this.game.world.height),i.beginFill(16777215),i.drawRoundedRect(0,0,.8*this.game.world.width,.7*this.game.world.height),i.endFill(),t.add(i);var e=this.btnGenerator("btn_1_1","遊戲開始",!1);if(this.startbtn=e,t.add(e),t.add(e.button_txt),"level1"===this.level){var a=this.game.cache.getImage("wang").height,h=this.game.add.image(this.game.world.centerX,e.y-.4*a,"wang");h.anchor.setTo(.5),h.scale.setTo(.5),t.add(h);var s="正在玉米田裡忙碌的王爺爺，\n卻收到了冰雹警報，想起過去\n曾有冰雹造成農損的例子，若\n沒有及時阻止冰雹落下，他的\n心血就要泡湯了......",d={font:"20px Microsoft JhengHei",fill:"#000",boundsAlignH:"center",boundsAlignV:"middle",wordWrap:!0,wordWrapWidth:.8*i.width},o=this.game.add.text(this.game.world.centerX,h.y-h.height,s,d);o.anchor.setTo(.5,1),t.add(o)}else if("level2"===this.level){var g=this.game.cache.getImage("people1").height,n=this.game.add.sprite(this.game.world.centerX,e.y-.4*g,"people1");n.anchor.setTo(.5),n.scale.setTo(.5),t.add(n);var s="離開了玉米田，雲朵人來到了\n繁華的台北市，路上車水馬龍\n，沒想到過了中午，晴朗的天\n氣開始變糟......",d={font:"20px Microsoft JhengHei",fill:"#000",boundsAlignH:"center",boundsAlignV:"middle",wordWrap:!0,wordWrapWidth:.8*i.width},o=this.game.add.text(this.game.world.centerX,n.y-n.height,s,d);o.anchor.setTo(.5,1),t.add(o)}else if("level3"===this.level){var l=this.game.cache.getImage("police").height,r=this.game.add.image(this.game.world.centerX,e.y-.4*l,"police");r.anchor.setTo(.5),r.scale.setTo(.5),t.add(r);var s="幫助台北市度過危機後，雲朵\n人來到了高速公路，氣象單位\n卻突然發布冰雹預警！若冰雹\n落在高速公路造成車輛打滑就\n不好了......",d={font:"20px Microsoft JhengHei",fill:"#000",boundsAlignH:"center",boundsAlignV:"middle",wordWrap:!0,wordWrapWidth:.8*i.width},o=this.game.add.text(this.game.world.centerX,r.y-r.height,s,d);o.anchor.setTo(.5,1),t.add(o)}return t},unpauseToStart:function(t){var i=!1;t.x>this.startbtn.x-this.startbtn.width/2&&t.x<this.startbtn.x+this.startbtn.width/2&&t.y>this.startbtn.y-this.startbtn.height/2&&t.y<this.startbtn.y+this.startbtn.height/2&&(i=!0),this.game.paused&&i&&(this.game.paused=!1,this.mask.cls(),this.taskWindowGroup.destroy(),this.onPlay())},onStart:function(){this.bigcloud_anger1=this.game.add.image(.7*this.bigcloud.width,.55*this.bigcloud.height,"bigcloud_anger1"),this.bigcloud_anger1.anchor.setTo(.5,.5),this.bigcloud_anger1.width=this.bigcloud.width/20,this.bigcloud_anger1.height=this.bigcloud.width/20,this.bigcloud_anger2=this.game.add.image(.15*this.bigcloud.width,.8*this.bigcloud.height,"bigcloud_anger2"),this.bigcloud_anger2.anchor.setTo(.5,.5),this.bigcloud_anger2.width=this.bigcloud.width/20,this.bigcloud_anger2.height=this.bigcloud.width/20,this.mycloudLifeHandler(this.mycloud.life),"level3"!==this.level&&this.passedTimer(),this.mask=this.settingmask(),this.taskWindowGroup=this.settingtaskWindow(),this.game.input.onDown.add(this.unpauseToStart,this)},passedTimer:function(){var t=2,i={font:"bold 22px Microsoft JhengHei",fill:"#ffffff",align:"left"},e=this.game.add.text(.55*this.game.world.width,this.heart3.y,"剩餘時間 : ",i);e.anchor.setTo(0,0);var a={font:"bold 50px Arial",fill:"#FFAA33",align:"center"},h=this.game.add.text(e.x+1.25*e.width,this.heart3.y,t,a);h.anchor.setTo(.5,.25),this.game.time.events.loop(Phaser.Timer.SECOND,function(){if(0===t){var i;"level1"===this.level?(i="level2",this.game.state.start("Play",!0,!1,i)):"level2"===this.level?(i="level3",this.game.state.start("Play",!0,!1,i)):this.level}else h.setText(--t)},this)},onPlay:function(){this.hails=this.game.add.group(),this.hails.enableBody=!0,this.hailcrushes=this.game.add.group(),this.hailingTimer=this.game.time.create(!1),this.hailingTimer.loop(2*Phaser.Timer.SECOND,this.hailing,this),this.hailingTimer.start()},heartmaker:function(t){var i=t[0],e=t[1],a=t[2];this.heart3=this.game.add.image(10,20,i),this.heart2=this.game.add.image(this.heart3.x+.6*this.heart3.width,20,e),this.heart1=this.game.add.image(this.heart2.x+.6*this.heart2.width,20,a),this.heart3.scale.setTo(.6),this.heart2.scale.setTo(.6),this.heart1.scale.setTo(.6)},btnGenerator:function(t,i,e){var a=this.game.world.centerX,h=.75*this.game.world.height,s=e?t+"_click":t,d=this.game.add.button(a,h,s,function(){this.btnGenerator(s,i,!0)},this,1,1,0);d.anchor.setTo(.5,.2),d.width=150,d.height=48;var o={font:"22px Microsoft JhengHei",fill:"#fff"};return d.button_txt=this.game.add.text(a,h,i,o),d.button_txt.anchor.setTo(.5,0),d},bighailAppear:function(){this.bighailAppearTimer.pause();var t=this.game.cache.getImage("hail").width/3,i=this.game.world.centerX,e=this.game.height/2,a=this.bighails.getFirstExists(!1,!0,i,e,"hail");a.scale.setTo(1.5,1.5),a.anchor.setTo(.5,1),a.clickTimes=0,a.inputEnabled=!0,a.body.setSize(.6*t,.6*t,.2*t,.2*t),this.clearhails(),this.onclickEmitter(a),this.game.time.events.add(5*Phaser.Timer.SECOND,this.fightbighail,this,a)},emitterGenerator:function(){var t=this.game.add.emitter(0,0,500);return t.makeParticles("ice_break"),t.minParticleSpeed.set(-1e3,-500),t.maxParticleSpeed.set(1e3,500),t.gravity=0,t.setRotation(10,50),t.setScale(.5,.5,1,1,0,Phaser.Easing.Quintic.Out),t},onclickEmitter:function(t){this.clickEmitter=t.events.onInputDown.add(function(t){this.mycloud.isfreezing&&(this.mycloud.clickTimes++,this.mycloud.clickTimes>=5?(this.mycloud.clickTimes=0,this.mycloud.isfreezing=!1,this.mycloud.animations.play("static")):(this.mycloudEmitter.x=t.x,this.mycloudEmitter.y=t.y,this.mycloudEmitter.start(!0,2e3,null,10),this.addQuake()))},this)},addQuake:function(){this.game.camera.shake(.01,500)},fightbighail:function(t){if(t.clickTimes>10)t.destroy(),this.hailCrushed(t.x,t.y,t.scale.x,t.anchor.y),this.hailingTimer=this.game.time.create(!0),this.hailingTimer.loop(1*Phaser.Timer.SECOND,this.hailing,this),this.hailingTimer.start(),this.bighailAppearTimer.resume();else{var i=this.game.add.tween(t).to({alpha:.5},500,Phaser.Easing.Linear.None,!0);i.start(),i.onComplete.add(function(){t.destroy(),this.hailingTimer=this.game.time.create(!0),this.hailingTimer.loop(.1*Phaser.Timer.SECOND,this.hailing,this),this.hailingTimer.start(),this.bighailAppearTimer.resume()},this)}this.bighailAppearTimer.resume()},clearhails:function(){this.hailingTimer.pause(),this.bighailAppearTimer.pause(),this.hails.forEachAlive(function(t){t.kill()},this)},hailing:function(t,i){var e=this.game.cache.getImage("hail").width/3,a=(this.game.cache.getImage("bighail").width,i||this.game.rnd.integerInRange(0,this.game.width-e)),h=this.bigcloud.y+this.bigcloud.height,s=this.game.rnd.integerInRange(0,10)>7?"bighail":"hail",d=this.hails.getFirstExists(!1,!0,a,h,s);d.scale.setTo(.5),this.game.physics.arcade.enable(d),d.body.setSize(.6*e,.6*e,.2*e,.3*e),d.body.velocity.y=300,d.size="bighail"===s?"big":"small",d.outOfBoundsKill=!0,d.checkWorldBounds=!0},hailCrushed:function(t,i,e,a){var h="big"===a?"bighail":"hail",s=this.hailcrushes.getFirstExists(!1,!0,t,i,h);s.anchor.setTo(.5,.5),s.scale.setTo(e);var d=s.animations.add(h);d.play(60,!1,!1),d.onComplete.addOnce(function(){s.destroy()},this)},mycloudLifeHandler:function(t){for(var i=[],e=0;e<3;e++)i[e]=e<=t-1?"redheart":"blackheart";this.heartmaker(i)}};t.exports=a}],[1]);