webpackJsonp([1],{135:function(l,n){function e(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}e.keys=function(){return[]},e.resolve=e,l.exports=e,e.id=135},168:function(l,n,e){function t(l){var n=u[l];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var u={"../pages/home/home.module.ngfactory":[249,0]};t.keys=function(){return Object.keys(u)},t.id=168,l.exports=t},193:function(l,n,e){"use strict";e.d(n,"a",function(){return i});var t=e(3),u=e(0),a=e(38),o=e(96),r=e(65),i=function(){function l(l,n,e,t,u){this.navCtrl=l,this.events=n,this.restProvider=e,this.el=t,this.params=u,this.imageURL="",this.country="",this.doneLoading=!1,this.currentListSlideIndex=0,this.graphInit=!1}return l.prototype.ngOnInit=function(){var l=this;this.restProvider.getData(this.params.get("token")),this.events.subscribe("user:login",function(){l.displayName=l.restProvider.userData.displayName,l.imageURL=l.restProvider.userData.imageURL,l.country=l.restProvider.userData.country,l.countryAverageScore=l.restProvider.userData.averageScore,l.obscurifyScore=l.restProvider.userData.obscurifyScore,l.recentObscurifyScore=l.restProvider.userData.recentObscurifyScore,l.globalAverageScore=Math.round(l.restProvider.userData.globalAverageScore),l.percentileByCountry=Math.round(l.restProvider.userData.percentileByCountry),l.userCountByCountry=l.restProvider.userData.userCountByCountry,l.totalUserCount=l.restProvider.userData.totalUserCount,l.topGenres=l.restProvider.userData.topGenres,l.doneLoading=l.restProvider.doneLoading,l.graphData={allTimeObscurifyScore:l.restProvider.userData.obscurifyScore,recentObscurifyScore:l.restProvider.userData.recentObscurifyScore,globalAverageScore:Math.round(l.restProvider.userData.globalAverageScore),countryAverageScore:Math.round(l.restProvider.userData.averageScore),label:l.country,userCount:l.totalUserCount},l.percentileData={percentileByCountry:l.percentileByCountry,userCountByCountry:l.userCountByCountry,label:l.country}}),this.events.subscribe("user:error",function(){l.navCtrl.push(r.a)}),this.events.subscribe("scrollToMusicTop",function(){l.scrollToMusicTop()})},l.prototype.slideChanged=function(){this.events.publish("graphInit")},l.prototype.openAboutPage=function(){this.navCtrl.push(o.a)},l.prototype.scrollToMusicTop=function(){this.content.scrollTo(0,this.myMusic.nativeElement.offsetTop)},l.prototype.scrollToBottom=function(){this.content.scrollToBottom()},Object(t.__decorate)([Object(u.Input)(),Object(u.ViewChild)(a.a),Object(t.__metadata)("design:type",a.a)],l.prototype,"content",void 0),l}()},206:function(l,n,e){"use strict";function t(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,2,"ion-nav",[],null,null,null,A.b,A.a)),r["ɵprd"](6144,null,S.a,null,[O.a]),r["ɵdid"](2,4374528,null,0,O.a,[[2,N.a],[2,j.a],L.a,_.a,x.a,r.ElementRef,r.NgZone,r.Renderer,r.ComponentFactoryResolver,E.l,M.a,[2,F.a],B.a,r.ErrorHandler],{root:[0,"root"]},null),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){l(n,2,0,n.component.rootPage)},null)}function u(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,109,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),r["ɵdid"](1,4374528,null,0,H.a,[_.a,x.a,B.a,r.ElementRef,r.Renderer,L.a,z.a,r.NgZone,[2,N.a],[2,j.a]],null,null),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](3,0,null,1,21,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,W.b,W.a)),r["ɵdid"](4,49152,null,0,G.a,[L.a,[2,N.a],[2,j.a],_.a,r.ElementRef,r.Renderer],null,null),(l()(),r["ɵted"](-1,3,["\n    "])),(l()(),r["ɵeld"](6,0,null,2,17,"ion-buttons",[["end",""]],null,null,null,null,null)),r["ɵdid"](7,16384,null,1,V.a,[_.a,r.ElementRef,r.Renderer,[2,X.a],[2,G.a]],null,null),r["ɵqud"](603979776,1,{_buttons:1}),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](10,0,null,null,5,"a",[["href","https://github.com/alexolivero/Obscurify"],["icon-only",""],["ion-button",""]],null,null,null,K.b,K.a)),r["ɵdid"](11,1097728,[[1,4]],0,J.a,[[8,""],_.a,r.ElementRef,r.Renderer],null,null),(l()(),r["ɵted"](-1,0,["\n        "])),(l()(),r["ɵeld"](13,0,null,0,1,"ion-icon",[["name","logo-github"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](14,147456,null,0,Q.a,[_.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(l()(),r["ɵted"](-1,0,["\n      "])),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](17,0,null,null,5,"a",[["href","mailto:oliveroalex@gmail.com"],["icon-only",""],["ion-button",""]],null,null,null,K.b,K.a)),r["ɵdid"](18,1097728,[[1,4]],0,J.a,[[8,""],_.a,r.ElementRef,r.Renderer],null,null),(l()(),r["ɵted"](-1,0,["\n        "])),(l()(),r["ɵeld"](20,0,null,0,1,"ion-icon",[["name","mail"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r["ɵdid"](21,147456,null,0,Q.a,[_.a,r.ElementRef,r.Renderer],{name:[0,"name"]},null),(l()(),r["ɵted"](-1,0,["\n      "])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,3,["\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](26,0,null,1,1,"a",[["class","logout"],["href","https://obscurifymusic.com/logout"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Logout"])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](29,0,null,1,1,"h2",[["class","about-header"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    About\n  "])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](32,0,null,1,4,"p",[["class","about-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    The goal of Obscurify is to help you better understand your own music taste. It uses\n    Spotify's "])),(l()(),r["ɵeld"](34,0,null,null,1,"a",[["href","https://developer.spotify.com/web-api/"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Web API"])),(l()(),r["ɵted"](-1,null,[" to display your listening history, define\n    your top genres, and to recommend under-the-radar songs you might like.\n  "])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](38,0,null,1,1,"p",[["class","about-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    The global popularity ratings of the artists in your lists are aggregated to result in an Obscurity score\n    which is compared to the Obscurify users in your country to show how unique (or energetic, danceable, and happy) a music taste you have.\n  "])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](41,0,null,1,1,"p",[["class","about-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    Obscurify can also make playlists of the music in your track lists and place them in your Spotify library - including the historical snapshots\n    that are saved when you view your Obscurify profile each month.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](44,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Us"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](47,0,null,1,7,"p",[["class","about-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    Obscurify was birthed in the winter of '16 by full-stack developer\n    "])),(l()(),r["ɵeld"](49,0,null,null,1,"a",[["href","mailto:oliveroalex@gmail.com"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Alex Olivero"])),(l()(),r["ɵted"](-1,null,[". Come fall '17, he would cross paths with the\n    enterprising "])),(l()(),r["ɵeld"](52,0,null,null,1,"a",[["href","mailto:npatel663@gmail.com"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Nirmal Patel"])),(l()(),r["ɵted"](-1,null,[", a front-end dev/UX designer\n    who would catalyze the site redesign that launched soon after.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n\n\n\n\n  "])),(l()(),r["ɵeld"](56,0,null,1,1,"h2",[["class","faq-header"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["F.A.Q."])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](59,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["How is my data used?"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](62,0,null,1,1,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    To use Obscurify, you'll need to allow the app to have access to some of your account information -\n    that being your username, the country your account is registered to, and the artists/tracks\n    that appear on your lists.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](65,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Where does the artist and track ranking come from?"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](68,0,null,1,4,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n  The content and order of your lists come directly from "])),(l()(),r["ɵeld"](70,0,null,null,1,"a",[["href","https://developer.spotify.com/web-api/"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Spotify's API"])),(l()(),r["ɵted"](-1,null,[".\n  Popularity, genres, and musical traits are all determined by Spotify.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](74,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Why are there no (or few) results showing up in my All-Time and Current lists?"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](77,0,null,1,1,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n  If you listen in Private Mode, those songs will not be recorded and won't be reflected in either list.\n  If your account is fairly new, it is normal for your All-Time list to be short, as it takes some time for Spotify to update their information.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](80,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Some of the genres seem a little off..."])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](83,0,null,1,1,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,['\n  Spotify can attribute some artists with a few dozen genres. These range from very general (like "rock") to a little\n  more interesting (like "escape room").\n  '])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](86,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["My lists aren't updating"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](89,0,null,1,1,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n  There is no defined schedule for when Spotify updates the data in your lists - it's normal for delays, but expect an average of one to two weeks.\n  "])),(l()(),r["ɵted"](-1,1,["\n\n  "])),(l()(),r["ɵeld"](92,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["I have some other issue (or concern, compliment, maybe a suggestion)"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](95,0,null,1,4,"p",[["class","faq-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    I'd like to know about it! "])),(l()(),r["ɵeld"](97,0,null,null,1,"a",[["href","mailto:oliveroalex@gmail.com"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Send me an email!"])),(l()(),r["ɵted"](-1,null,["\n  "])),(l()(),r["ɵted"](-1,1,["\n\n\n  "])),(l()(),r["ɵeld"](101,0,null,1,1,"h5",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Credit"])),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](104,0,null,1,4,"p",[["class","about-text"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    Vinyl Icon credited to Aleksandr Vector.  Found on "])),(l()(),r["ɵeld"](106,0,null,null,1,"a",[["href","https://thenounproject.com/search/?q=vinyl&i=1324878"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Noun Project"])),(l()(),r["ɵted"](-1,null,[".\n  "])),(l()(),r["ɵted"](-1,1,["\n\n\n\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],function(l,n){l(n,14,0,"logo-github");l(n,21,0,"mail")},function(l,n){l(n,0,0,r["ɵnov"](n,1).statusbarPadding,r["ɵnov"](n,1)._hasRefresher);l(n,3,0,r["ɵnov"](n,4)._hidden,r["ɵnov"](n,4)._sbPadding);l(n,13,0,r["ɵnov"](n,14)._hidden);l(n,20,0,r["ɵnov"](n,21)._hidden)})}function a(l){return r["ɵvid"](0,[(l()(),r["ɵted"](-1,null,["\n\n"])),(l()(),r["ɵeld"](1,0,null,null,19,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Z.b,Z.a)),r["ɵdid"](2,4374528,null,0,H.a,[_.a,x.a,B.a,r.ElementRef,r.Renderer,L.a,z.a,r.NgZone,[2,N.a],[2,j.a]],null,null),(l()(),r["ɵted"](-1,1,["\n  "])),(l()(),r["ɵeld"](4,0,null,1,15,"div",[["class","login-btn-container"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](6,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Obscurify"])),(l()(),r["ɵeld"](8,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["."])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["Learn more about your music taste and compare it to others' with Obscurify."])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵeld"](14,0,null,null,4,"div",[["class","login"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n      "])),(l()(),r["ɵeld"](16,0,null,null,1,"a",[["class","login-btn"],["href","https://obscurifymusic.com/mobile_login"]],null,null,null,null,null)),(l()(),r["ɵted"](-1,null,["\n        Log in with Spotify\n      "])),(l()(),r["ɵted"](-1,null,["\n    "])),(l()(),r["ɵted"](-1,null,["\n  "])),(l()(),r["ɵted"](-1,1,["\n"])),(l()(),r["ɵted"](-1,null,["\n"]))],null,function(l,n){l(n,1,0,r["ɵnov"](n,2).statusbarPadding,r["ɵnov"](n,2)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var o=e(22),r=e(0),i=(e(3),e(136)),s=(e(38),e(98)),d=e(71),c=e(72),p=e(65),m=function(){return function(l,n,e){this.rootPage=p.a,l.ready().then(function(){})}}(),h=e(96),f=e(73),y=e(66),g=function(){return function(){}}(),b=e(46),v=e(194),D=e(195),P=e(196),k=e(197),C=e(199),T=e(200),w=e(201),R=e(202),I=e(204),A=e(247),S=e(37),O=e(51),N=e(5),j=e(15),L=e(8),_=e(1),x=e(4),E=e(7),M=e(30),F=e(14),B=e(9),U=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),q=r["ɵccf"]("ng-component",m,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"ng-component",[],null,null,null,t,U)),r["ɵdid"](1,49152,null,0,m,[x.a,d.a,c.a],null,null)],null,null)},{},{},[]),Z=e(123),H=e(21),z=e(23),W=e(205),G=e(34),V=e(77),X=e(44),K=e(35),J=e(19),Q=e(33),Y=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),$=r["ɵccf"]("page-about",h.a,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-about",[],null,null,null,u,Y)),r["ɵdid"](1,49152,null,0,h.a,[j.a],null,null)],null,null)},{},{},[]),ll=e(10),nl=r["ɵcrt"]({encapsulation:2,styles:[],data:{}}),el=r["ɵccf"]("page-login",p.a,function(l){return r["ɵvid"](0,[(l()(),r["ɵeld"](0,0,null,null,1,"page-login",[],null,null,null,a,nl)),r["ɵdid"](1,49152,null,0,p.a,[o.b,j.a,ll.a,y.a,o.c],null,null)],null,null)},{},{},[]),tl=e(13),ul=e(99),al=e(18),ol=e(87),rl=e(89),il=e(75),sl=e(16),dl=e(32),cl=e(94),pl=e(124),ml=e(48),hl=e(39),fl=e(103),yl=e(58),gl=e(107),bl=e(101),vl=e(114),Dl=e(192),Pl=e(100),kl=e(28),Cl=e(95),Tl=e(102),wl=r["ɵcmf"](g,[b.b],function(l){return r["ɵmod"]([r["ɵmpd"](512,r.ComponentFactoryResolver,r["ɵCodegenComponentFactoryResolver"],[[8,[v.a,D.a,P.a,k.a,C.a,T.a,w.a,R.a,I.a,q,$,el]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["ɵmpd"](4608,s.i,s.o,[tl.c,r.PLATFORM_ID,s.m]),r["ɵmpd"](4608,s.p,s.p,[s.i,s.n]),r["ɵmpd"](5120,s.a,function(l){return[l]},[s.p]),r["ɵmpd"](4608,s.l,s.l,[]),r["ɵmpd"](6144,s.j,null,[s.l]),r["ɵmpd"](4608,s.h,s.h,[s.j]),r["ɵmpd"](6144,s.b,null,[s.h]),r["ɵmpd"](4608,s.f,s.k,[s.b,r.Injector]),r["ɵmpd"](4608,s.c,s.c,[s.f]),r["ɵmpd"](5120,r.LOCALE_ID,r["ɵq"],[[3,r.LOCALE_ID]]),r["ɵmpd"](4608,tl.l,tl.k,[r.LOCALE_ID,[2,tl.v]]),r["ɵmpd"](5120,r.APP_ID,r["ɵi"],[]),r["ɵmpd"](5120,r.IterableDiffers,r["ɵn"],[]),r["ɵmpd"](5120,r.KeyValueDiffers,r["ɵo"],[]),r["ɵmpd"](4608,o.c,o.q,[tl.c]),r["ɵmpd"](6144,r.Sanitizer,null,[o.c]),r["ɵmpd"](4608,o.f,ul.a,[]),r["ɵmpd"](5120,o.d,function(l,n,e,t,u){return[new o.k(l,n),new o.o(e),new o.n(t,u)]},[tl.c,r.NgZone,tl.c,tl.c,o.f]),r["ɵmpd"](4608,o.e,o.e,[o.d,r.NgZone]),r["ɵmpd"](135680,o.m,o.m,[tl.c]),r["ɵmpd"](4608,o.l,o.l,[o.e,o.m]),r["ɵmpd"](6144,r.RendererFactory2,null,[o.l]),r["ɵmpd"](6144,o.p,null,[o.m]),r["ɵmpd"](4608,r.Testability,r.Testability,[r.NgZone]),r["ɵmpd"](4608,o.h,o.h,[tl.c]),r["ɵmpd"](4608,o.i,o.i,[tl.c]),r["ɵmpd"](4608,al.p,al.p,[]),r["ɵmpd"](4608,al.d,al.d,[]),r["ɵmpd"](4608,ol.a,ol.a,[L.a,_.a]),r["ɵmpd"](4608,rl.a,rl.a,[L.a,_.a]),r["ɵmpd"](4608,il.a,il.a,[]),r["ɵmpd"](4608,sl.a,sl.a,[]),r["ɵmpd"](4608,dl.a,dl.a,[x.a]),r["ɵmpd"](4608,z.a,z.a,[_.a,x.a,r.NgZone,B.a]),r["ɵmpd"](4608,cl.a,cl.a,[L.a,_.a]),r["ɵmpd"](5120,tl.g,pl.c,[tl.r,[2,tl.a],_.a]),r["ɵmpd"](4608,tl.f,tl.f,[tl.g]),r["ɵmpd"](5120,ml.b,ml.d,[L.a,ml.a]),r["ɵmpd"](5120,F.a,F.b,[L.a,ml.b,tl.f,hl.b,r.ComponentFactoryResolver]),r["ɵmpd"](4608,fl.a,fl.a,[L.a,_.a,F.a]),r["ɵmpd"](4608,yl.a,yl.a,[L.a,_.a]),r["ɵmpd"](4608,gl.a,gl.a,[L.a,_.a,F.a]),r["ɵmpd"](4608,bl.a,bl.a,[_.a,x.a,B.a,L.a,E.l]),r["ɵmpd"](4608,vl.a,vl.a,[L.a,_.a]),r["ɵmpd"](4608,M.a,M.a,[x.a,_.a]),r["ɵmpd"](4608,d.a,d.a,[]),r["ɵmpd"](4608,c.a,c.a,[]),r["ɵmpd"](4608,f.a,f.a,[s.c,x.a,il.a,rl.a]),r["ɵmpd"](4608,y.a,y.a,[]),r["ɵmpd"](512,s.e,s.e,[]),r["ɵmpd"](512,s.d,s.d,[]),r["ɵmpd"](512,tl.b,tl.b,[]),r["ɵmpd"](512,r.ErrorHandler,Dl.a,[]),r["ɵmpd"](256,_.b,{},[]),r["ɵmpd"](1024,Pl.a,Pl.b,[]),r["ɵmpd"](1024,x.a,x.b,[o.b,Pl.a,r.NgZone]),r["ɵmpd"](1024,_.a,_.c,[_.b,x.a]),r["ɵmpd"](512,B.a,B.a,[x.a]),r["ɵmpd"](512,kl.a,kl.a,[]),r["ɵmpd"](512,L.a,L.a,[_.a,x.a,[2,kl.a]]),r["ɵmpd"](512,E.l,E.l,[L.a]),r["ɵmpd"](256,ml.a,{links:[{loadChildren:"../pages/home/home.module.ngfactory#HomePageModuleNgFactory",name:"page-home",segment:"home/:token",priority:"low",defaultHistory:[]}]},[]),r["ɵmpd"](512,r.Compiler,r.Compiler,[]),r["ɵmpd"](512,Cl.a,Cl.a,[r.Compiler]),r["ɵmpd"](1024,hl.b,hl.c,[Cl.a,r.Injector]),r["ɵmpd"](1024,r.APP_INITIALIZER,function(l,n,e,t,u,a,r,i,s,d,c,p,m){return[o.s(l),Tl.a(n),il.b(e,t),bl.b(u,a,r,i,s),hl.d(d,c,p,m)]},[[2,r.NgProbeToken],_.a,x.a,B.a,_.a,x.a,B.a,L.a,E.l,_.a,ml.a,hl.b,r.NgZone]),r["ɵmpd"](512,r.ApplicationInitStatus,r.ApplicationInitStatus,[[2,r.APP_INITIALIZER]]),r["ɵmpd"](131584,r.ApplicationRef,r.ApplicationRef,[r.NgZone,r["ɵConsole"],r.Injector,r.ErrorHandler,r.ComponentFactoryResolver,r.ApplicationInitStatus]),r["ɵmpd"](512,r.ApplicationModule,r.ApplicationModule,[r.ApplicationRef]),r["ɵmpd"](512,o.a,o.a,[[3,o.a]]),r["ɵmpd"](512,i.Ng2TrackScrollModule,i.Ng2TrackScrollModule,[]),r["ɵmpd"](512,al.n,al.n,[]),r["ɵmpd"](512,al.e,al.e,[]),r["ɵmpd"](512,al.m,al.m,[]),r["ɵmpd"](512,pl.a,pl.a,[]),r["ɵmpd"](512,g,g,[]),r["ɵmpd"](256,s.m,"XSRF-TOKEN",[]),r["ɵmpd"](256,s.n,"X-XSRF-TOKEN",[]),r["ɵmpd"](256,b.a,m,[]),r["ɵmpd"](256,tl.a,"/",[])])});e(248);Object(r.enableProdMode)(),Object(o.j)().bootstrapModuleFactory(wl)},65:function(l,n,e){"use strict";e.d(n,"a",function(){return r});var t=e(3),u=e(0),a=(e(38),e(66),e(193)),o=e(22),r=function(){function l(l,n,e,t,u){this.document=l,this.navCtrl=n,this.navParams=e,this.deeplinks=t,this.sanitizer=u,this.deeplinks.routeWithNavController(this.navCtrl,{"/home/:token":a.a}).subscribe(function(l){console.log("Successfully matched route",l)},function(l){console.error("Got a deeplink that didn't match",l)})}return l=Object(t.__decorate)([Object(t.__param)(0,Object(u.Inject)(o.b))],l)}()},73:function(l,n,e){"use strict";e.d(n,"a",function(){return u});e(3);var t=e(98),u=(e(38),function(){function l(l,n,e,t){this.http=l,this.platform=n,this.events=e,this.alertCtrl=t,this.token="",this.doneLoading=!1,this.userData={displayName:"",imageURL:"",country:"",longTermArtists:[],shortTermArtists:[],longTermTracks:[],shortTermTracks:[],obscurifyScore:-1,recentObscurifyScore:-1,globalAverageScore:-1,averageScore:1,recommendedTracks:[],percentileByCountry:-1,userCountByCountry:-1,totalUserCount:-1,topGenres:[],userID:"",userHistory:[],longTermAudioFeatures:{},shortTermAudioFeatures:{},audioFeatureAverages:{}}}return l.prototype.getData=function(l){var n=this;return this.token=l,new Promise(function(e){n.http.get("https://obscurifymusic.com/spotifyData/"+l+"/getUserData").subscribe(function(l){e(l),n.userData=l,null!=n.userData.displayName&&n.userData.displayName.indexOf(" ")>0?n.userData.displayName=" "+n.userData.displayName.substring(0,n.userData.displayName.indexOf(" ")):null==n.userData.displayName&&(n.userData.displayName=""),n.userData.imageURL=n.userData.imageURL.length>0?n.userData.imageURL[0].url:null,n.doneLoading=!0,n.events.publish("user:login")},function(l){console.log("rest.ts",l),n.events.publish("user:error")})})},l.prototype.getRecommendations=function(l,n){var e=this,t="https://obscurifymusic.com/spotifyData/getRecommendations?country="+this.userData.country+"&accessToken="+this.token+"&artistID="+l+"&desiredObscurity="+n;return new Promise(function(l){e.http.get(t).subscribe(function(n){l(n),e.userData.recommendedTracks=n.recommendedTracks},function(l){console.log("rest.ts",l)})})},l.prototype.makePlaylist=function(l,n){var e=this,u="https://api.spotify.com/v1/users/"+this.userData.userID+"/playlists",a=(new t.g).set("Authorization","Bearer "+this.token).set("Accept","application/json"),o=this;return new Promise(function(t){e.http.post(u,{name:n},{headers:a}).subscribe(function(e){t(e);for(var u=[],a=e.id,r=0;r<l.length;r++)u.push(l[r].uri);o.fillPlaylistWithTracks(u,a,n)},function(l){console.log("rest.ts",l)})})},l.prototype.fillPlaylistWithTracks=function(l,n,e){var u=this,a="https://api.spotify.com/v1/users/"+this.userData.userID+"/playlists/"+n+"/tracks",o=(new t.g).set("Authorization","Bearer "+this.token).set("Accept","application/json");return new Promise(function(n){u.http.post(a,{uris:l},{headers:o}).subscribe(function(l){n(l);u.alertCtrl.create({title:"Playlist created",subTitle:'"'+e+'" was created in your Spotify library!',buttons:["Great!"]}).present()},function(l){console.log("rest.ts",l)})})},l.prototype.getHistoryItems=function(l){var n=this,e="https://obscurifymusic.com/spotifyData/getHistoryItems?artistIDs="+l.shortTermArtistIDs.join()+"&trackIDs="+l.shortTermTrackIDs.join()+"&accessToken="+this.token;return new Promise(function(l){n.http.get(e).subscribe(function(n){l(n)},function(l){console.log("rest.ts",l)})})},l}())},96:function(l,n,e){"use strict";e.d(n,"a",function(){return t});e(3),e(38);var t=function(){return function(l){this.navCtrl=l}}()}},[206]);