webpackJsonp([1],{215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n(95),s=n(216);r.enableProdMode(),o.platformBrowserDynamic().bootstrapModule(s.AppModule)},216:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var o=n(40),s=n(41),i=n(5),a=n(217),l=n(220),c=n(224),u=n(227),p=n(230),d=n(233),h=n(234),f=n(237),m=function(){function AppModule(){}return AppModule=r([i.NgModule({bootstrap:[a.AppComponent],imports:[o.BrowserModule,s.HttpClientModule,d.SharedModule],declarations:[a.AppComponent,l.CanvasComponent,c.FooterComponent,u.HeaderComponent,p.RhymesComponent,h.SynonymsComponent,f.ThemeSwitcherComponent]})],AppModule)}();t.AppModule=m},217:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=function(){function AppComponent(){}return AppComponent=r([s.Component({selector:"my-app",styles:[n(218)],template:n(219)}),o("design:paramtypes",[])],AppComponent)}();t.AppComponent=i},218:function(e,t){e.exports=':host {\n  color: #121212;\n  display: block ;\n  font-family: "Open Sans", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300 ;\n  line-height: 1.5;\n  margin: 0px auto 0px auto ;\n  width: 1100px ;\n}\n.header {\n  margin-top: 25px ;\n}\n.canvas {\n  margin: 25px 0px 30px 0px ;\n}\n.tools {\n  display: flex ;\n  justify-content: space-between;\n}\n.tools__rhymes {\n  flex: 1 1 50% ;\n  margin-right: 50px ;\n}\n.tools__synonyms {\n  flex: 1 1 50% ;\n}\n.footer {\n  margin-bottom: 50px ;\n  margin-top: 40px ;\n}\n'},219:function(e,t){e.exports='\n<bsp-header class="header"></bsp-header>\n<bsp-canvas class="canvas"></bsp-canvas>\n<div class="tools">\n\t<div class="tools__rhymes">\n\t\t<bsp-rhymes></bsp-rhymes>\n\t</div>\n\t<div class="tools__synonyms">\n\t\t<bsp-synonyms></bsp-synonyms>\n\t</div>\n</div>\n<bsp-theme-switcher></bsp-theme-switcher>\n<bsp-footer class="footer"></bsp-footer>\n'},220:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(5),a=n(96),l=n(59),c=n(97),u=function(){function CanvasComponent(e,t,n,r){this.errorHandler=e,this.storageService=t,this.themeService=n,this.wordService=r,this.poem="",this.shouldPersistPoem=!1,this.syllableCounts=[],this.syllableTimer=0}return CanvasComponent.prototype.handlePersistenceChange=function(){this.shouldPersistPoem?(this.storageService.setItem("save-poem",!0),this.storageService.setItem("poem",this.poem)):(this.storageService.setItem("save-poem",!1),this.storageService.setItem("poem",""))},CanvasComponent.prototype.handlePoemChanged=function(){this.shouldPersistPoem&&this.storageService.setItem("poem",this.poem),this.scheduleSyllableCountUpdate()},CanvasComponent.prototype.ngOnInit=function(){var e=this;switch(this.themeSubscription=this.themeService.darkTheme$.subscribe(function(t){return e.isDarkTheme=t}),this.storageService.getItem("save-poem")){case void 0:this.shouldPersistPoem=!0,this.storageService.setItem("save-poem",!0);break;case!0:this.shouldPersistPoem=!0,this.poem=this.storageService.getItem("poem")||"";break;case!1:this.shouldPersistPoem=!1}this.updateSyllableCounts()},CanvasComponent.prototype.ngOnDestroy=function(){this.themeSubscription.unsubscribe()},CanvasComponent.prototype.extractLines=function(e){return e.trim().split(/\r\n?|\n/g)},CanvasComponent.prototype.extractUniqueWords=function(e){for(var t=Object.create(null),n=0,r=this.extractWords(e);n<r.length;n++){t[r[n]]=!0}return Object.keys(t)},CanvasComponent.prototype.extractWords=function(e){return e.trim().match(/\S+/g)||[]},CanvasComponent.prototype.normalizePoemText=function(e){return e.toLowerCase().replace(/['"]+/g,"").replace(/[^a-z0-9\s]/gi," ").trim()},CanvasComponent.prototype.scheduleSyllableCountUpdate=function(){var e=this;clearTimeout(this.syllableTimer),this.syllableTimer=setTimeout(function(){e.updateSyllableCounts()},500)},CanvasComponent.prototype.updateSyllableCounts=function(){var e=this,t=this.poem,n=this.normalizePoemText(t),r=this.extractUniqueWords(n);this.wordService.getSyllableCounts(r).then(function(r){t===e.poem&&(e.syllableCounts=e.extractLines(n).map(function(t){var n=e.extractWords(t);return n?n.reduce(function(e,t){return e+(r[t]||1)},0):0}))}).catch(function(t){e.errorHandler.handleError(t)})},CanvasComponent=r([s.Component({selector:"bsp-canvas",styles:[n(222)],template:n(223)}),o("design:paramtypes",[i.ErrorHandler,a.StorageService,c.ThemeSwitcherService,l.WordService])],CanvasComponent)}();t.CanvasComponent=u},221:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r.throw(e))}catch(e){s(e)}}function step(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function verb(e){return function(t){return step([e,t])}}function step(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var a=n(41),l=n(5),c=function(){function DatamuseClient(e){this.httpClient=e}return DatamuseClient.prototype.getSuggestions=function(e){return s(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this.makeRequest("sug",e)];case 1:return[2,t.sent()]}})})},DatamuseClient.prototype.getWords=function(e){return s(this,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return[4,this.makeRequest("words",e)];case 1:return[2,t.sent()]}})})},DatamuseClient.prototype.makeRequest=function(e,t){return s(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return[4,this.httpClient.get("https://api.datamuse.com/"+e,{params:this.makeRequestParams(t),withCredentials:!0}).toPromise()];case 1:return n=r.sent(),[2,n]}})})},DatamuseClient.prototype.makeRequestParams=function(e){for(var t={max:"10"},n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];t[o]=e[o].toString()}return t},DatamuseClient=r([l.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],DatamuseClient)}();t.DatamuseClient=c},222:function(e,t){e.exports=':host {\n  display: block ;\n}\n.canvas {\n  border: 3px solid #cccccc;\n  border-radius: 4px 4px 4px 4px ;\n  display: flex ;\n  font-family: "Open Sans";\n  min-height: 300px ;\n}\n.canvas__input,\n.canvas__syllables {\n  border: 0px ;\n  font-size: 20px ;\n  line-height: 29px ;\n  padding: 20px 22px 20px 22px ;\n}\n.canvas__input {\n  background-color: #fafafa;\n  flex: 1 1 100% ;\n  font-family: inherit ;\n  font-weight: 400 ;\n}\n.canvas__input:active,\n.canvas__input:focus {\n  outline: 0 ;\n}\n.canvas__input--dark {\n  background-color: #222;\n  color: #FAFAFA;\n}\n.canvas__syllables {\n  background-color: #eaeaea;\n  color: #999999;\n  flex: 0 1 70px ;\n  font-weight: 400 ;\n  list-style-type: none ;\n  margin: 0px 0px 0px 0px ;\n  padding-bottom: 60px ;\n  padding-left: 18px ;\n  padding-right: 18px ;\n  overflow: hidden ;\n  text-align: center ;\n}\n.canvas__syllable {\n  margin: 0px 0px 0px 0px ;\n  padding: 0px 0px 0px 0px ;\n}\n.canvas__syllable--none {\n  visibility: hidden ;\n}\n.persistence {\n  margin-top: 4px ;\n}\n.persistence__label {\n  color: #888888;\n  cursor: pointer ;\n  font-size: 13px ;\n}\n.persistence__label:hover {\n  color: #000000;\n}\n.persistence__input {\n  font-size: 13px ;\n}\n'},223:function(e,t){e.exports='\n<div class="canvas">\n\t<textarea\n\t\t[(ngModel)]="poem"\n\t\t(ngModelChange)="handlePoemChanged()"\n\t\tclass="canvas__input"\n\t\t[class.canvas__input--dark]="isDarkTheme"\n\t></textarea>\t\n\t<ul class="canvas__syllables">\n\t\t<li\n\t\t\t*ngFor="let count of syllableCounts"\n\t\t\tclass="canvas__syllable"\n\t\t\t[class.canvas__syllable--none]="( count === 0 )">\n\t\t\t{{ count }}\n\t\t</li>\n\t</ul>\n</div>\n\n<div class="persistence">\n\t<label for="shouldPersistPoem" class="persistence__label">\n\t\t<input\n\t\t\ttype="checkbox"\n\t\t\tid="shouldPersistPoem"\n\t\t\tname="shouldPersistPoem"\n\t\t\t[(ngModel)]="shouldPersistPoem"\n\t\t\t(ngModelChange)="handlePersistenceChange()"\n\t\t\tclass="persistence__input"\n\t\t/>\n\t\tSave poem in browser ( so that it persists across page refreshes ).\n\t</label>\n</div>\n'},224:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=function(){function FooterComponent(){this.copyright=(new Date).getFullYear()}return FooterComponent=r([s.Component({selector:"bsp-footer",styles:[n(225)],template:n(226)}),o("design:paramtypes",[])],FooterComponent)}();t.FooterComponent=i},225:function(e,t){e.exports=":host {\n  display: block ;\n}\n.footer {\n  border-top: 2px solid #c8c8c8;\n  color: #999999;\n  font-size: 14px ;\n  justify-content: space-between;\n  padding-top: 10px ;\n}\n.footer a {\n  color: inherit ;\n}\n.footer a:hover {\n  color: #000000;\n}\n.footer__bigsexy {\n  margin-bottom: 15px ;\n}\n.bigsexy {\n  font-size: 14px ;\n}\n.bigsexy__label {\n  color: #666666;\n  font-weight: 700 ;\n}\n.bigsexy__meta {\n  color: #aaaaaa;\n  display: inline-block;\n  font-style: italic ;\n  font-weight: 400 ;\n  margin-left: 8px ;\n}\n.bigsexy__dash {\n  display: inline-block;\n  margin-left: 8px ;\n  margin-right: 8px ;\n}\n"},226:function(e,t){e.exports='\n<footer class="footer">\n\t<div class="footer__bigsexy bigsexy">\n\t\t<strong class="bigsexy__label">BigSexy :</strong>\n\t\t<span class="bigsexy__meta">( /biɡ ˈseksē/ ) noun.</span>\n\t\t<span class="bigsexy__dash">—</span>\n\t\t<span class="bigsexy__definition">Your muse. Your inspiration. The part of your soul that feels deeply, lives with abandon, and loves without limits.</span> \n\t</div>\n\n\t<span class="footer__sources">\n\t\tRhymes, synonyms, and syllable counts are provided by\n\t\t<a href="https://www.datamuse.com/" target="_blank">Datamuse</a>,\n\t\twhich is awesome!\n\t\tMaintained by <a href="https://www.bennadel.com" target="_blank">Ben Nadel</a>\n\t\t&copy;\n\t\t{{ copyright }}\n\t</span>\n</footer>\n\n\n'},227:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=function(){function HeaderComponent(){this.inspiration="beauty",this.lastRotatedAt=Date.now(),this.sources=["anger","awe","beauty","bliss","blood","devotion","desire","excitement","fate","fury","grace","heartache","honor","instinct","joy","laughter","life","love","lust","pain","passion","pleasure","sex","wonder"]}return HeaderComponent.prototype.handleMousemove=function(){var e=Date.now();e-this.lastRotatedAt>250&&(this.rotateInspiration(),this.lastRotatedAt=e)},HeaderComponent.prototype.rotateInspiration=function(){for(var e=this.inspiration;e===this.inspiration;)e=this.sources[Math.floor(Math.random()*this.sources.length)];this.inspiration=e},HeaderComponent=r([s.Component({selector:"bsp-header",styles:[n(228)],template:n(229)}),o("design:paramtypes",[])],HeaderComponent)}();t.HeaderComponent=i},228:function(e,t){e.exports=':host {\n  display: block ;\n}\n.header {\n  display: flex ;\n  font-family: "Roboto";\n  font-size: 36px ;\n  height: 50px ;\n  line-height: 50px ;\n}\n.header__name {\n  color: #121212;\n  display: flex ;\n  flex: 0 1 auto ;\n  padding-right: 30px ;\n}\n.header__message {\n  border-left: 2px solid #c8c8c8;\n  color: #666666;\n  flex: 1 1 auto ;\n  font-weight: 100 ;\n  padding-left: 30px ;\n}\n.header__bigsexy {\n  font-weight: 900 ;\n}\n.header__poems {\n  font-weight: 300 ;\n}\n'},229:function(e,t){e.exports='\n<header (mousemove)="handleMousemove()" class="header">\n\t<div class="header__name">\n\t\t<span class="header__bigsexy">BigSexy</span>\n\t\t<span class="header__poems">Poems</span>\n\t</div>\n\t<div class="header__message">\n\t\tInspired by <span class="header__inspiration">{{ inspiration }}</span>.\n\t</div>\n</header>\n'},230:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(5),a=n(59),l=function(){function RhymesComponent(e,t){this.errorHandler=e,this.wordService=t,this.isLoading=!1,this.query="",this.results=null}return RhymesComponent.prototype.handleSubmit=function(){var e=this;this.query&&(this.isLoading=!0,this.results=null,this.wordService.getRhymes(this.query).then(function(t){e.isLoading=!1,e.results={count:t.words.length,groups:[{label:"1 Syllable",words:[]},{label:"2 Syllables",words:[]},{label:"3 Syllables",words:[]},{label:"4 Syllables",words:[]},{label:"5 Syllables",words:[]},{label:"6 Syllables",words:[]}]},t.words.sort(function(e,t){return e.value<t.value?-1:1});for(var n=0,r=t.words;n<r.length;n++){var o=r[n];o.syllableCount>6||o.syllableCount<1||e.results.groups[o.syllableCount-1].words.push({value:o.value,isStrongMatch:o.isStrongMatch})}e.results.groups=e.results.groups.filter(function(e){return!!e.words.length})}).catch(function(t){e.isLoading=!1,e.results=null,e.errorHandler.handleError(t)}))},RhymesComponent=r([s.Component({selector:"bsp-rhymes",styles:[n(231)],template:n(232)}),o("design:paramtypes",[i.ErrorHandler,a.WordService])],RhymesComponent)}();t.RhymesComponent=l},231:function(e,t){e.exports=':host {\n  display: block ;\n}\n.header {\n  margin-bottom: 15px ;\n}\n.header__title {\n  font-family: "Roboto";\n  font-size: 22px ;\n  line-height: 27px ;\n  margin-bottom: 5px ;\n}\n.header__description {\n  font-size: 16px ;\n  line-height: 21px ;\n}\n.title {\n  display: flex ;\n}\n.title__bigsexy {\n  font-weight: 300 ;\n}\n.title__rhymes {\n  font-weight: 900 ;\n}\n.body {\n  background-color: #f0f0f0;\n  border-radius: 4px 4px 4px 4px ;\n  padding: 22px 22px 22px 22px ;\n}\n.search {\n  display: flex ;\n  margin: 0px 0px 0px 0px ;\n}\n.search__input {\n  border: 1px solid #cccccc;\n  border-radius: 3px ;\n  flex: 1 1 auto ;\n  font-size: 18px ;\n  padding: 8px 5px 7px 10px ;\n}\n.search__submit {\n  background-color: #f0f0f0;\n  border: 1px solid #bababa;\n  border-radius: 3px ;\n  flex: 0 1 auto ;\n  font-size: 18px ;\n  margin-left: 10px ;\n  padding-left: 15px ;\n  padding-right: 15px ;\n}\n.loading,\n.no-results {\n  color: #aaaaaa;\n  font-style: italic ;\n  margin: 50px 0px 40px 0px ;\n  text-align: center ;\n}\n.results__group {\n  font-size: 16px ;\n  line-height: 21px ;\n  margin-top: 20px ;\n}\n.results__label {\n  font-weight: 600 ;\n  margin-bottom: 6px ;\n}\n.results__value {\n  display: flex ;\n  flex-wrap: wrap ;\n  line-height: 25px ;\n}\n.results__token {\n  letter-spacing: 0.5px;\n  margin-right: 8px ;\n}\n.results__token--emphasize {\n  font-weight: 600 ;\n}\n'},232:function(e,t){e.exports='\n<header class="header">\n\t<div class="header__title title">\n\t\t<span class="title__bigsexy">BigSexy</span>\n\t\t<span class="title__rhymes">Rhymes</span>\n\t</div>\n\n\t<div class="header__description">\n\t\tFind words that rhyme well with each other.\n\t</div>\n</header>\n\n<div class="body">\n\n\t<form (submit)="handleSubmit()" class="search">\n\t\t<input type="text" name="query" [(ngModel)]="query" autocomplete="off" class="search__input" />\n\t\t<button type="submit" class="search__submit">\n\t\t\tSearch\n\t\t</button>\n\t</form>\n\n\t\x3c!-- BEGIN: Loading Indicator. --\x3e\n\t<div *ngIf="isLoading" class="loading">\n\t\tLoading...\n\t</div>\n\t\x3c!-- END: Loading Indicator. --\x3e\n\n\t\x3c!-- BEGIN: No Results. --\x3e\n\t<div *ngIf="( ! isLoading && results && ! results.count )" class="no-results">\n\t\tSorry, no rhymes found.\n\t</div>\n\t\x3c!-- END: No Results. --\x3e\n\n\t\x3c!-- BEGIN: Results. --\x3e\n\t<div *ngIf="( ! isLoading && results && results.count )" class="results">\n\t\t\n\t\t<div *ngFor="let group of results.groups" class="results__group">\n\t\t\t<div class="results__label">\n\t\t\t\t{{ group.label }}\n\t\t\t</div>\n\n\t\t\t<div class="results__value">\n\t\t\t\t<span\n\t\t\t\t\t*ngFor="let word of group.words; last as isLast;"\n\t\t\t\t\tclass="results__token"\n\t\t\t\t\t[class.results__token--emphasize]="word.isStrongMatch">\n\t\t\t\t\t{{ word.value }}<ng-template [ngIf]="! isLast">,</ng-template>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\x3c!-- END: Results. --\x3e\n\n</div>\n'},233:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i};Object.defineProperty(t,"__esModule",{value:!0});var o=n(39),s=n(94),i=n(5),a=function(){function SharedModule(){}return SharedModule=r([i.NgModule({imports:[o.CommonModule,s.FormsModule],exports:[o.CommonModule,s.FormsModule],declarations:[]})],SharedModule)}();t.SharedModule=a},234:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(5),a=n(59),l=function(){function SynonymsComponent(e,t){this.errorHandler=e,this.wordService=t,this.isLoading=!1,this.query="",this.results=null}return SynonymsComponent.prototype.handleSubmit=function(){var e=this;this.query&&(this.isLoading=!0,this.results=null,this.wordService.getMeansLikes(this.query).then(function(t){e.isLoading=!1,e.results={count:t.words.length,groups:[{label:"Adjectives",words:[]},{label:"Adverbs",words:[]},{label:"Nouns",words:[]},{label:"Verbs",words:[]}]};for(var n=0,r=t.words;n<r.length;n++){var o=r[n];switch(o.typeOfSpeech){case"adjective":e.results.groups[0].words.push({value:o.value,isStrongMatch:o.isStrongMatch});break;case"adverb":e.results.groups[1].words.push({value:o.value,isStrongMatch:o.isStrongMatch});break;case"noun":e.results.groups[2].words.push({value:o.value,isStrongMatch:o.isStrongMatch});break;case"verb":e.results.groups[3].words.push({value:o.value,isStrongMatch:o.isStrongMatch})}}e.results.groups.sort(function(e,t){var n=e.words.filter(function(e){return e.isStrongMatch}),r=t.words.filter(function(e){return e.isStrongMatch});return n.length>r.length?-1:r.length>n.length?1:e.words.length>t.words.length?-1:t.words.length>e.words.length?1:0})}).catch(function(t){e.isLoading=!1,e.results=null,e.errorHandler.handleError(t)}))},SynonymsComponent=r([s.Component({selector:"bsp-synonyms",styles:[n(235)],template:n(236)}),o("design:paramtypes",[i.ErrorHandler,a.WordService])],SynonymsComponent)}();t.SynonymsComponent=l},235:function(e,t){e.exports=':host {\n  display: block ;\n}\n.header {\n  margin-bottom: 15px ;\n}\n.header__title {\n  font-family: "Roboto";\n  font-size: 22px ;\n  line-height: 27px ;\n  margin-bottom: 5px ;\n}\n.header__description {\n  font-size: 16px ;\n  line-height: 21px ;\n}\n.title {\n  display: flex ;\n}\n.title__bigsexy {\n  font-weight: 300 ;\n}\n.title__synonyms {\n  font-weight: 900 ;\n}\n.body {\n  background-color: #f0f0f0;\n  border-radius: 4px 4px 4px 4px ;\n  padding: 22px 22px 22px 22px ;\n}\n.search {\n  display: flex ;\n  margin: 0px 0px 0px 0px ;\n}\n.search__input {\n  border: 1px solid #cccccc;\n  border-radius: 3px ;\n  flex: 1 1 auto ;\n  font-size: 18px ;\n  padding: 8px 5px 7px 10px ;\n}\n.search__submit {\n  background-color: #f0f0f0;\n  border: 1px solid #bababa;\n  border-radius: 3px ;\n  flex: 0 1 auto ;\n  font-size: 18px ;\n  margin-left: 10px ;\n  padding-left: 15px ;\n  padding-right: 15px ;\n}\n.loading,\n.no-results {\n  color: #aaaaaa;\n  font-style: italic ;\n  margin: 50px 0px 40px 0px ;\n  text-align: center ;\n}\n.results__group {\n  font-size: 16px ;\n  line-height: 21px ;\n  margin-top: 20px ;\n}\n.results__label {\n  font-weight: 600 ;\n  margin-bottom: 6px ;\n}\n.results__value {\n  display: flex ;\n  flex-wrap: wrap ;\n  line-height: 25px ;\n}\n.results__token {\n  font-weight: 300 ;\n  letter-spacing: 0.5px;\n  margin-right: 8px ;\n}\n.results__token--emphasize {\n  font-weight: 600 ;\n}\n'},236:function(e,t){e.exports='\n<header class="header">\n\t<div class="header__title title">\n\t\t<span class="title__bigsexy">BigSexy</span>\n\t\t<span class="title__synonyms">Synonyms</span>\n\t</div>\n\n\t<div class="header__description">\n\t\tFind words that mean roughly the same thing.\n\t</div>\n</header>\n\n<div class="body">\n\n\t<form (submit)="handleSubmit()" class="search">\n\t\t<input type="text" name="query" [(ngModel)]="query" autocomplete="off" class="search__input" />\n\t\t<button type="submit" class="search__submit">\n\t\t\tSearch\n\t\t</button>\n\t</form>\n\n\t\x3c!-- BEGIN: Loading Indicator. --\x3e\n\t<div *ngIf="isLoading" class="loading">\n\t\tLoading...\n\t</div>\n\t\x3c!-- END: Loading Indicator. --\x3e\n\n\t\x3c!-- BEGIN: No Results. --\x3e\n\t<div *ngIf="( ! isLoading && results && ! results.count )" class="no-results">\n\t\tSorry, no synonyms found.\n\t</div>\n\t\x3c!-- END: No Results. --\x3e\n\n\t\x3c!-- BEGIN: Results. --\x3e\n\t<div *ngIf="( ! isLoading && results && results.count )" class="results">\n\n\t\t<div *ngFor="let group of results.groups" class="results__group">\n\t\t\t<div class="results__label">\n\t\t\t\t{{ group.label }}:\n\t\t\t</div>\n\n\t\t\t<div class="results__value">\n\t\t\t\t<span\n\t\t\t\t\t*ngFor="let word of group.words; last as isLast;"\n\t\t\t\t\tclass="results__token"\n\t\t\t\t\t[class.results__token--emphasize]="word.isStrongMatch">\n\t\t\t\t\t{{ word.value }}<ng-template [ngIf]="! isLast">,</ng-template>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t\x3c!-- END: Results. --\x3e\n\n</div>\n'},237:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(97),a=function(){function ThemeSwitcherComponent(e){this.themeService=e,this.isDarkTheme=!1}return ThemeSwitcherComponent.prototype.switchTheme=function(){this.isDarkTheme=!this.isDarkTheme,this.themeService.darkTheme.next(this.isDarkTheme)},ThemeSwitcherComponent=r([s.Component({selector:"bsp-theme-switcher",styles:[n(238)],template:n(239)}),o("design:paramtypes",[i.ThemeSwitcherService])],ThemeSwitcherComponent)}();t.ThemeSwitcherComponent=a},238:function(e,t){e.exports=":host {\n  display: block ;\n}\n.theme-switcher__wrapper {\n  margin-top: 1em;\n  display: flex ;\n  flex-flow: row-reverse;\n}\n.theme-switcher__button {\n  padding: 2px 4px ;\n  font-size: 10px ;\n  font-weight: 400 ;\n  line-height: 1.4;\n  text-align: center ;\n  white-space: nowrap ;\n  -ms-touch-action: manipulation ;\n  touch-action: manipulation ;\n  cursor: pointer ;\n  border-radius: 4px ;\n}\n.theme-switcher__button--dark {\n  background-color: #222;\n  color: #FAFAFA;\n}\n.theme-switcher__button--light {\n  background-color: #FAFAFA;\n  color: #222;\n}\n.theme-switcher__button:focus {\n  outline: 0 ;\n}\n"},239:function(e,t){e.exports='<div class="theme-switcher__wrapper">\n    <button class="theme-switcher__button"\n        [ngClass]="isDarkTheme ? \'theme-switcher__button--light\' : \'theme-switcher__button--dark\'"\n        (click)="switchTheme($event)"\n        >toggle theme\n    </button>\n</div>    \n'},59:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function fulfilled(e){try{step(r.next(e))}catch(e){s(e)}}function rejected(e){try{step(r.throw(e))}catch(e){s(e)}}function step(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){function verb(e){return function(t){return step([e,t])}}function step(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),l=n(5),c=n(221),u=n(96),p=function(){function WordService(e,t,n){this.datamuseClient=e,this.errorHandler=t,this.storageService=n,this.syllableCountCache=Object.create(null),this.loadFromStorage()}return WordService.prototype.getMeansLikes=function(e){return s(this,void 0,void 0,function(){var t,n,r,o,s=this;return i(this,function(i){switch(i.label){case 0:return[4,this.datamuseClient.getWords({ml:e,qe:"ml",md:"ps",max:500})];case 1:return t=i.sent(),t=this.filterOutScoreless(t),t=this.filterOutTagless(t),t=this.filterOutAntonyms(t),t=this.filterOutProperNouns(t),n="unknown",t.length&&t[0].word===e&&(r=t[0],t=t.slice(1),n=this.getTypeOfSpeech(r.tags)),o=t.map(function(e,t,n){s.cacheSyllableCountMetadata(e.word,e.numSyllables);var r=s.getTypeOfSpeech(e.tags),o=s.isSynonym(e.tags);return{value:e.word,syllableCount:e.numSyllables||0,typeOfSpeech:r,isStrongMatch:o}}),[2,{query:e,typeOfSpeech:n,words:o}]}})})},WordService.prototype.getRhymes=function(e){return s(this,void 0,void 0,function(){var t,n,r=this;return i(this,function(o){switch(o.label){case 0:return[4,this.datamuseClient.getWords({rel_rhy:e,md:"ps",max:500})];case 1:return t=o.sent(),n=this.filterOutScoreless(t).map(function(e,t,n){if(r.cacheSyllableCountMetadata(e.word,e.numSyllables),e.score<100)var o=!1;else var o=t<=Math.max(.8*n.length);var s=r.getTypeOfSpeech(e.tags);return{value:e.word,syllableCount:e.numSyllables||0,typeOfSpeech:s,isStrongMatch:o}}),[2,{query:e,words:n}]}})})},WordService.prototype.getSyllableCounts=function(e){return s(this,void 0,void 0,function(){var t,n,r,o=this;return i(this,function(a){switch(a.label){case 0:return t=e.filter(function(e){return!(e in o.syllableCountCache)}),t.length?(n=t.map(function(e){return s(o,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.datamuseClient.getWords({sp:e,qe:"sp",md:"s",max:1})];case 1:return t=r.sent(),t.length&&(t[0].word!==e?this.syllableCountCache[e]=0:t[0].numSyllables&&(this.syllableCountCache[e]=t[0].numSyllables)),[3,3];case 2:return n=r.sent(),this.errorHandler.handleError(n),[3,3];case 3:return[2]}})})}),[4,Promise.all(n)]):[3,2];case 1:a.sent(),this.saveToStorage(),a.label=2;case 2:return r=e.reduce(function(e,t){return e[t]=o.syllableCountCache[t]||0,e},Object.create(null)),[2,r]}})})},WordService.prototype.arrayContains=function(e,t){return!!e.find(function(e){return e===t})},WordService.prototype.cacheSyllableCountMetadata=function(e,t){t&&(e in this.syllableCountCache||e.includes(" ")||(this.syllableCountCache[e]=t,this.saveToStorage()))},WordService.prototype.filterOutAntonyms=function(e){var t=this;return e.filter(function(e){return!t.arrayContains(e.tags,"ant")})},WordService.prototype.filterOutProperNouns=function(e){var t=this;return e.filter(function(e){var n=t.arrayContains(e.tags,"n"),r=t.arrayContains(e.tags,"prop");return!(n&&r)})},WordService.prototype.filterOutScoreless=function(e){return e.filter(function(e){return"score"in e})},WordService.prototype.filterOutTagless=function(e){return e.filter(function(e){return"tags"in e})},WordService.prototype.getTypeOfSpeech=function(e){if(!e)return"unknown";switch(e.find(function(e){return"n"===e||"v"===e||"adj"===e||"adv"===e||"u"===e})){case"n":return"noun";case"v":return"verb";case"adj":return"adjective";case"adv":return"adverb";default:return"unknown"}},WordService.prototype.isSynonym=function(e){return!!e.find(function(e){return"syn"===e})},WordService.prototype.loadFromStorage=function(){Object.assign(this.syllableCountCache,this.storageService.getItem("syllable-counts"))},WordService.prototype.saveToStorage=function(){this.storageService.setItem("syllable-counts",this.syllableCountCache)},WordService=r([l.Injectable({providedIn:"root"}),o("design:paramtypes",[c.DatamuseClient,a.ErrorHandler,u.StorageService])],WordService)}();t.WordService=p},96:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(5),a=function(){function StorageService(e){var t=this;this.errorHandler=e,this.pendingWrites=Object.create(null),this.timer=null,this.timerDuration=1e4,window.addEventListener("beforeunload",function(){t.flushPendingWrites()})}return StorageService.prototype.getItem=function(e){try{var t=this.normalizeKey(e);if(t in this.pendingWrites)var n=this.pendingWrites[t];else var n=window.localStorage.getItem(t);return JSON.parse(n)}catch(e){return void this.errorHandler.handleError(e)}},StorageService.prototype.setItem=function(e,t){try{this.pendingWrites[this.normalizeKey(e)]=JSON.stringify(t),this.scheduledPendingWrites()}catch(e){this.errorHandler.handleError(e)}},StorageService.prototype.flushPendingWrites=function(){for(var e=0,t=Object.keys(this.pendingWrites);e<t.length;e++){var n=t[e];window.localStorage.setItem(n,this.pendingWrites[n]),delete this.pendingWrites[n]}},StorageService.prototype.normalizeKey=function(e){return"big-sexy-poems:"+e.toLowerCase()},StorageService.prototype.scheduledPendingWrites=function(){var e=this;window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){e.flushPendingWrites()},this.timerDuration)},StorageService=r([i.Injectable({providedIn:"root"}),o("design:paramtypes",[s.ErrorHandler])],StorageService)}();t.StorageService=a},97:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(i=(s<3?o(i):s>3?o(t,n,i):o(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(29),a=function(){function ThemeSwitcherService(){this.darkTheme=new i.BehaviorSubject(!1),this.darkTheme$=this.darkTheme.asObservable()}return ThemeSwitcherService=r([s.Injectable({providedIn:"root"}),o("design:paramtypes",[])],ThemeSwitcherService)}();t.ThemeSwitcherService=a}},[215]);