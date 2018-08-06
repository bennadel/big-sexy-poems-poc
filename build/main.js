webpackJsonp([1],{

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var platform_browser_dynamic_1 = __webpack_require__(95);
// Import the root module for bootstrapping.
var app_module_1 = __webpack_require__(215);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var platform_browser_1 = __webpack_require__(39);
var http_1 = __webpack_require__(40);
var core_1 = __webpack_require__(5);
// Import the application components and services.
var app_component_1 = __webpack_require__(216);
var canvas_component_1 = __webpack_require__(219);
var footer_component_1 = __webpack_require__(223);
var header_component_1 = __webpack_require__(226);
var rhymes_component_1 = __webpack_require__(229);
var shared_module_1 = __webpack_require__(232);
var synonyms_component_1 = __webpack_require__(233);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                canvas_component_1.CanvasComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                rhymes_component_1.RhymesComponent,
                synonyms_component_1.SynonymsComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var AppComponent = /** @class */ (function () {
    // I initialize the app-component.
    function AppComponent() {
        // ...
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            styles: [__webpack_require__(217)],
            template: __webpack_require__(218)
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = ":host {\n  color: #121212;\n  display: block ;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 1.2rem;\n  font-weight: 300 ;\n  line-height: 1.5;\n  margin: 0px auto 0px auto ;\n  width: 1100px ;\n}\n.header {\n  margin-top: 25px ;\n}\n.canvas {\n  margin: 25px 0px 30px 0px ;\n}\n.tools {\n  display: flex ;\n  justify-content: space-between;\n}\n.tools__rhymes {\n  flex: 1 1 50% ;\n  margin-right: 50px ;\n}\n.tools__synonyms {\n  flex: 1 1 50% ;\n}\n.footer {\n  margin-bottom: 50px ;\n  margin-top: 40px ;\n}\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "\n<bsp-header class=\"header\"></bsp-header>\n<bsp-canvas class=\"canvas\"></bsp-canvas>\n\n<div class=\"tools\">\n\t<div class=\"tools__rhymes\">\n\t\t<bsp-rhymes></bsp-rhymes>\n\t</div>\n\t<div class=\"tools__synonyms\">\n\t\t<bsp-synonyms></bsp-synonyms>\n\t</div>\n</div>\n\n<bsp-footer class=\"footer\"></bsp-footer>\n\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
var core_2 = __webpack_require__(5);
// Import the application components and services.
var storage_service_1 = __webpack_require__(96);
var word_service_1 = __webpack_require__(59);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var CanvasComponent = /** @class */ (function () {
    // I initialize the canvas-component.
    function CanvasComponent(errorHandler, storageService, wordService) {
        this.errorHandler = errorHandler;
        this.storageService = storageService;
        this.wordService = wordService;
        this.poem = "";
        this.shouldPersistPoem = false;
        this.syllableCounts = [];
        this.syllableTimer = 0;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    CanvasComponent.prototype.handlePersistenceChange = function () {
        if (this.shouldPersistPoem) {
            this.storageService.setItem("save-poem", true);
            this.storageService.setItem("poem", this.poem);
        }
        else {
            this.storageService.setItem("save-poem", false);
            this.storageService.setItem("poem", "");
        }
    };
    CanvasComponent.prototype.handlePoemChanged = function () {
        var _this = this;
        if (this.shouldPersistPoem) {
            this.storageService.setItem("poem", this.poem);
        }
        clearTimeout(this.syllableTimer);
        this.syllableTimer = setTimeout(function () {
            _this.updateSyllableCounts();
        }, 500);
    };
    CanvasComponent.prototype.ngOnInit = function () {
        switch (this.storageService.getItem("save-poem")) {
            case undefined:
                this.shouldPersistPoem = true;
                this.storageService.setItem("save-poem", true);
                break;
            case true:
                this.shouldPersistPoem = true;
                this.poem = (this.storageService.getItem("poem") || "");
                break;
            case false:
                this.shouldPersistPoem = false;
                break;
        }
        this.updateSyllableCounts();
    };
    // ---
    // PRIVATE METHODS.
    // ---
    CanvasComponent.prototype.extractLines = function (value) {
        return (value.trim().split(/\r\n?|\n/g));
    };
    CanvasComponent.prototype.extractUniqueWords = function (value) {
        var words = this.extractWords(value)
            .reduce(function (reduction, word) {
            reduction[word] = true;
            return (reduction);
        }, Object.create(null) // Initial value.
        );
        return (Object.keys(words));
    };
    CanvasComponent.prototype.extractWords = function (value) {
        return (value.trim().match(/\S+/g) || []);
    };
    CanvasComponent.prototype.normalizePoemText = function (poem) {
        var normalizedPoem = poem
            .toLowerCase()
            // Replace any string of word-delimiters with a space.
            .replace(/[ _:\u2014\u2013-]+/g, " ")
            // Strip out any constructs that don't directly influence the way in which
            // the poem can be read out-loud.
            .replace(/[^a-z0-9\s]/gi, "");
        return (normalizedPoem);
    };
    CanvasComponent.prototype.updateSyllableCounts = function () {
        var _this = this;
        var poemSnapshot = this.poem;
        var text = this.normalizePoemText(poemSnapshot);
        var words = this.extractUniqueWords(text);
        this.wordService
            .getSyllableCounts(words)
            .then(function (counts) {
            // If the poem changed while we were fetching syllable counts, then
            // let's return-out. There will be some parallel request that is
            // currently processing the newer state of the poem text.
            if (poemSnapshot !== _this.poem) {
                return;
            }
            // At this point, we should be guaranteed that there is a syllable
            // count for every word token in the normalized poem. As such, we
            // should be able to break the poem into lines and then count the
            // syllables in each line.
            _this.syllableCounts = _this
                .extractLines(text)
                .map(function (line) {
                var tokens = _this.extractWords(line);
                if (!tokens) {
                    return (0);
                }
                var count = tokens.reduce(function (reduction, token) {
                    // If the word-service didn't recognize the given
                    // word token (or failed to return a response),
                    // then it will return ZERO for the syllable
                    // count. In such a case, we'll default to using
                    // ONE syllable so that the token takes some
                    // degree of auditory space.
                    // --
                    // TODO: Possibly add some sort of fall-back for
                    // calculating syllable count on the client.
                    return (reduction + (counts[token] || 1));
                }, 0 // Initial value.
                );
                return (count);
            });
        })
            .catch(function (error) {
            _this.errorHandler.handleError(error);
        });
    };
    CanvasComponent = __decorate([
        core_1.Component({
            selector: "bsp-canvas",
            styles: [__webpack_require__(221)],
            template: __webpack_require__(222)
        }),
        __metadata("design:paramtypes", [core_2.ErrorHandler,
            storage_service_1.StorageService,
            word_service_1.WordService])
    ], CanvasComponent);
    return CanvasComponent;
}());
exports.CanvasComponent = CanvasComponent;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var http_1 = __webpack_require__(40);
var core_1 = __webpack_require__(5);
var DatamuseClient = /** @class */ (function () {
    // I initialize the datamuse client.
    function DatamuseClient(httpClient) {
        this.httpClient = httpClient;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I get Datamuse suggestions based on the given configuration.
    DatamuseClient.prototype.getSuggestions = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeRequest("sug", config)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    // I get Datamuse words based on the given configuration.
    DatamuseClient.prototype.getWords = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeRequest("words", config)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // I make the HTTP request to the Datamuse API.
    DatamuseClient.prototype.makeRequest = function (resource, config) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient
                            .get("https://api.datamuse.com/" + resource, {
                            params: this.makeRequestParams(config),
                            withCredentials: true
                        })
                            .toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, (result)];
                }
            });
        });
    };
    // I take the various configuration objects and normalize them into a set of request
    // parameters that can be used with the HttpClient.
    DatamuseClient.prototype.makeRequestParams = function (config) {
        var params = {
            max: "10"
        };
        for (var _i = 0, _a = Object.keys(config); _i < _a.length; _i++) {
            var key = _a[_i];
            params[key] = config[key].toString();
        }
        return (params);
    };
    DatamuseClient = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DatamuseClient);
    return DatamuseClient;
}());
exports.DatamuseClient = DatamuseClient;


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block ;\n}\n.canvas {\n  border: 3px solid #CCCCCC;\n  display: flex ;\n  font-family: \"Open Sans\";\n  min-height: 300px ;\n}\n.canvas__input,\n.canvas__syllables {\n  border: 0px ;\n  font-size: 20px ;\n  line-height: 29px ;\n  padding: 20px 22px 20px 22px ;\n}\n.canvas__input {\n  background-color: #FAFAFA;\n  flex: 1 1 100% ;\n  font-family: inherit ;\n  font-weight: 400 ;\n}\n.canvas__input:active,\n.canvas__input:focus {\n  outline: 0 ;\n}\n.canvas__syllables {\n  background-color: #EAEAEA;\n  color: #999999;\n  flex: 0 1 70px ;\n  font-weight: 400 ;\n  list-style-type: none ;\n  margin: 0px 0px 0px 0px ;\n  overflow: hidden ;\n  text-align: center ;\n}\n.canvas__syllable {\n  margin: 0px 0px 0px 0px ;\n  padding: 0px 0px 0px 0px ;\n}\n.canvas__syllable--none {\n  visibility: hidden ;\n}\n.persistence {\n  margin-top: 4px ;\n}\n.persistence__label {\n  color: #888888;\n  cursor: pointer ;\n  font-size: 13px ;\n}\n.persistence__label:hover {\n  color: #000000;\n}\n.persistence__input {\n  font-size: 13px ;\n}\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"canvas\">\n\t<textarea\n\t\t[(ngModel)]=\"poem\"\n\t\t(ngModelChange)=\"handlePoemChanged()\"\n\t\tclass=\"canvas__input\"\n\t></textarea>\n\t<ul class=\"canvas__syllables\">\n\t\t<li\n\t\t\t*ngFor=\"let count of syllableCounts\"\n\t\t\tclass=\"canvas__syllable\"\n\t\t\t[class.canvas__syllable--none]=\"( count === 0 )\">\n\t\t\t{{ count }}\n\t\t</li>\n\t</ul>\n</div>\n\n<div class=\"persistence\">\n\t<label for=\"shouldPersistPoem\" class=\"persistence__label\">\n\t\t<input\n\t\t\ttype=\"checkbox\"\n\t\t\tid=\"shouldPersistPoem\"\n\t\t\tname=\"shouldPersistPoem\"\n\t\t\t[(ngModel)]=\"shouldPersistPoem\"\n\t\t\t(ngModelChange)=\"handlePersistenceChange()\"\n\t\t\tclass=\"persistence__input\"\n\t\t/>\n\t\tSave poem in browser ( so that it persists across page refreshes ).\n\t</label>\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var FooterComponent = /** @class */ (function () {
    // I initialize the footer-component.
    function FooterComponent() {
        this.copyright = (new Date()).getFullYear();
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: "bsp-footer",
            styles: [__webpack_require__(224)],
            template: __webpack_require__(225)
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block ;\n}\n.footer {\n  border-top: 2px solid #c8c8c8;\n  color: #999999;\n  font-size: 14px ;\n  font-weight: 100 ;\n  justify-content: space-between;\n  padding-top: 10px ;\n}\n.footer a {\n  color: inherit ;\n}\n.footer a:hover {\n  color: #000000;\n}\n.footer__bigsexy {\n  margin-bottom: 15px ;\n}\n.bigsexy {\n  font-size: 14px ;\n}\n.bigsexy__label {\n  color: #666666;\n  font-weight: 700 ;\n}\n.bigsexy__meta {\n  color: #aaaaaa;\n  display: inline-block;\n  font-style: italic ;\n  font-weight: 400 ;\n  margin-left: 8px ;\n}\n.bigsexy__dash {\n  display: inline-block;\n  margin-left: 8px ;\n  margin-right: 8px ;\n}\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"footer\">\n\t<div class=\"footer__bigsexy bigsexy\">\n\t\t<strong class=\"bigsexy__label\">BigSexy:</strong>\n\t\t<span class=\"bigsexy__meta\">( /biɡ ˈseksē/ ) noun.</span>\n\t\t<span class=\"bigsexy__dash\">—</span>\n\t\t<span class=\"bigsexy__definition\">Your muse. Your inspiration. The part of your soul that feels deeply, lives with abandon, and loves without limits.</span> \n\t</div>\n\n\t<span class=\"footer__sources\">\n\t\tRhymes, synonyms, and syllable counts are provided by\n\t\t<a href=\"https://www.datamuse.com/\" target=\"_blank\">Datamuse</a>,\n\t\twhich is awesome!\n\t\tMaintained by <a href=\"https://www.bennadel.com\" target=\"_blank\">Ben Nadel</a>\n\t\t&copy;\n\t\t{{ copyright }}\n\t</span>\n</footer>\n\n\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var HeaderComponent = /** @class */ (function () {
    // I initialize the header-component.
    function HeaderComponent() {
        this.inspiration = "beauty";
        this.lastRotatedAt = Date.now();
        this.sources = [
            "anger",
            "awe",
            "beauty",
            "bliss",
            "blood",
            "devotion",
            "desire",
            "excitement",
            "fate",
            "fury",
            "grace",
            "heartache",
            "honor",
            "instinct",
            "joy",
            "laughter",
            "life",
            "love",
            "lust",
            "pain",
            "passion",
            "pleasure",
            "sex",
            "wonder"
        ];
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle the mousemove event on the header, rotating the source of inspiration
    // in response to the user interaction.
    HeaderComponent.prototype.handleMousemove = function () {
        var now = Date.now();
        var delta = (now - this.lastRotatedAt);
        if (delta > 250) {
            this.rotateInspiration();
            this.lastRotatedAt = now;
        }
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // I rotate the inspiration, selecting the next source at random.
    HeaderComponent.prototype.rotateInspiration = function () {
        var nextInspiration = this.inspiration;
        while (nextInspiration === this.inspiration) {
            nextInspiration = this.sources[Math.floor(Math.random() * this.sources.length)];
        }
        this.inspiration = nextInspiration;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "bsp-header",
            styles: [__webpack_require__(227)],
            template: __webpack_require__(228)
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block ;\n}\n.header {\n  display: flex ;\n  font-family: \"Roboto\";\n  font-size: 36px ;\n  height: 50px ;\n  line-height: 50px ;\n}\n.header__name {\n  color: #121212;\n  display: flex ;\n  flex: 0 1 auto ;\n  padding-right: 30px ;\n}\n.header__message {\n  border-left: 2px solid #C8C8C8;\n  color: #666666;\n  flex: 1 1 auto ;\n  font-weight: 100 ;\n  padding-left: 30px ;\n}\n.header__bigsexy {\n  font-weight: 900 ;\n}\n.header__poems {\n  font-weight: 300 ;\n}\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "\n<header (mousemove)=\"handleMousemove()\" class=\"header\">\n\t<div class=\"header__name\">\n\t\t<span class=\"header__bigsexy\">BigSexy</span>\n\t\t<span class=\"header__poems\">Poems</span>\n\t</div>\n\t<div class=\"header__message\">\n\t\tInspired by <span class=\"header__inspiration\">{{ inspiration }}</span>.\n\t</div>\n</header>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
var core_2 = __webpack_require__(5);
var word_service_1 = __webpack_require__(59);
var RhymesComponent = /** @class */ (function () {
    // I initialize the rhymes component.
    function RhymesComponent(errorHandler, wordService) {
        this.errorHandler = errorHandler;
        this.wordService = wordService;
        this.isLoading = false;
        this.query = "";
        this.results = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle the submission of the search form.
    RhymesComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (!this.query) {
            return;
        }
        this.isLoading = true;
        this.results = null;
        this.wordService
            .getRhymes(this.query)
            .then(function (response) {
            _this.isLoading = false;
            // Prepare the data structure that we're going to use to display the
            // results (broken down by syllable count).
            _this.results = {
                count: response.words.length,
                groups: [
                    { syllableCount: 1, rhymes: [] },
                    { syllableCount: 2, rhymes: [] },
                    { syllableCount: 3, rhymes: [] },
                    { syllableCount: 4, rhymes: [] },
                    { syllableCount: 5, rhymes: [] },
                    { syllableCount: 6, rhymes: [] }
                ]
            };
            // The words are returned in score-order. However, we want to display
            // them in alphabetical order. As such, let's sort them before we
            // divide them into groups so that we know the groups are implicitly
            // sorted as they are created.
            response.words.sort(function (a, b) {
                var wordA = a.value.toLowerCase();
                var wordB = b.value.toLowerCase();
                return ((wordA < wordB) ? -1 : 1);
            });
            // Move each word into its appropriate results group.
            for (var _i = 0, _a = response.words; _i < _a.length; _i++) {
                var word = _a[_i];
                // Our results data structure only accounts for a set number of
                // syllable groups. If this word falls outside of that set, just
                // ignore it.
                if ((word.syllableCount > 6) || (word.syllableCount < 1)) {
                    continue;
                }
                _this.results.groups[word.syllableCount - 1].rhymes.push({
                    word: word.value,
                    isStrongMatch: word.isStrongMatch
                });
            }
            // Remove any results group that had no words added to it.
            _this.results.groups = _this.results.groups.filter(function (group) {
                return (group.rhymes.length);
            });
        })
            .catch(function (error) {
            _this.isLoading = false;
            _this.errorHandler.handleError(error);
        });
    };
    RhymesComponent = __decorate([
        core_1.Component({
            selector: "bsp-rhymes",
            styles: [__webpack_require__(230)],
            template: __webpack_require__(231)
        }),
        __metadata("design:paramtypes", [core_2.ErrorHandler,
            word_service_1.WordService])
    ], RhymesComponent);
    return RhymesComponent;
}());
exports.RhymesComponent = RhymesComponent;


/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block ;\n}\n.header {\n  margin-bottom: 15px ;\n}\n.header__title {\n  font-family: \"Roboto\";\n  font-size: 22px ;\n  line-height: 27px ;\n  margin-bottom: 5px ;\n}\n.header__description {\n  font-size: 16px ;\n  line-height: 21px ;\n}\n.title {\n  display: flex ;\n}\n.title__bigsexy {\n  font-weight: 300 ;\n}\n.title__rhymes {\n  font-weight: 900 ;\n}\n.body {\n  background-color: #F0F0F0;\n  padding: 22px 22px 22px 22px ;\n}\n.search {\n  display: flex ;\n  margin: 0px 0px 0px 0px ;\n}\n.search__input {\n  flex: 1 1 auto ;\n  font-size: 18px ;\n  padding: 8px 5px 7px 10px ;\n}\n.search__submit {\n  flex: 0 1 auto ;\n  font-size: 18px ;\n  margin-left: 10px ;\n  padding-left: 15px ;\n  padding-right: 15px ;\n}\n.loading,\n.no-results {\n  color: #AAAAAA;\n  font-style: italic ;\n  margin: 50px 0px 40px 0px ;\n  text-align: center ;\n}\n.results__group {\n  font-size: 16px ;\n  line-height: 21px ;\n  margin-top: 20px ;\n}\n.results__label {\n  font-weight: 600 ;\n  margin-bottom: 6px ;\n}\n.results__value {\n  display: flex ;\n  flex-wrap: wrap ;\n  line-height: 25px ;\n}\n.results__token {\n  letter-spacing: 0.5px;\n  margin-right: 8px ;\n}\n.results__token--emphasize {\n  font-weight: 600 ;\n}\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "\n<header class=\"header\">\n\t<div class=\"header__title title\">\n\t\t<span class=\"title__bigsexy\">BigSexy</span>\n\t\t<span class=\"title__rhymes\">Rhymes</span>\n\t</div>\n\n\t<div class=\"header__description\">\n\t\tFind words that rhyme well with each other.\n\t</div>\n</header>\n\n<div class=\"body\">\n\n\t<form (submit)=\"handleSubmit()\" class=\"search\">\n\t\t<input type=\"text\" name=\"query\" [(ngModel)]=\"query\" class=\"search__input\" />\n\t\t<button type=\"submit\" class=\"search__submit\">\n\t\t\tSearch\n\t\t</button>\n\t</form>\n\n\t<!-- BEGIN: Loading Indicator. -->\n\t<div *ngIf=\"isLoading\" class=\"loading\">\n\t\tLoading...\n\t</div>\n\t<!-- END: Loading Indicator. -->\n\n\t<!-- BEGIN: No Results. -->\n\t<div *ngIf=\"( results && ! results.count )\" class=\"no-results\">\n\t\tSorry, no rhymes found.\n\t</div>\n\t<!-- END: No Results. -->\n\n\t<!-- BEGIN: Results. -->\n\t<div *ngIf=\"( results && results.count )\" class=\"results\">\n\t\t\n\t\t<div *ngFor=\"let group of results.groups\" class=\"results__group\">\n\t\t\t<div class=\"results__label\">\n\t\t\t\t{{ group.syllableCount }}\n\t\t\t\t<ng-template [ngIf]=\"( group.syllableCount === 1 )\">Syllable:</ng-template>\n\t\t\t\t<ng-template [ngIf]=\"( group.syllableCount > 1 )\">Syllables:</ng-template>\n\t\t\t</div>\n\n\t\t\t<div class=\"results__value\">\n\t\t\t\t<span\n\t\t\t\t\t*ngFor=\"let rhyme of group.rhymes; last as isLast;\"\n\t\t\t\t\tclass=\"results__token\"\n\t\t\t\t\t[class.results__token--emphasize]=\"rhyme.isStrongMatch\">\n\t\t\t\t\t{{ rhyme.word }}<ng-template [ngIf]=\"! isLast\">,</ng-template>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!-- END: Results. -->\n\n</div>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var common_1 = __webpack_require__(38);
var forms_1 = __webpack_require__(94);
var core_1 = __webpack_require__(5);
// Import the application components and services.
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// The goal of the SharedModule is to organize declarations and other modules that will
// be imported into other modules (for rendering). This module should NOT contain any
// service providers (those are provided via "providedIn: root" semantics).
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
var core_2 = __webpack_require__(5);
var word_service_1 = __webpack_require__(59);
var SynonymsComponent = /** @class */ (function () {
    // I initialize the synonyms component.
    function SynonymsComponent(errorHandler, wordService) {
        this.errorHandler = errorHandler;
        this.wordService = wordService;
        this.isLoading = false;
        this.query = "";
        this.results = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle the submission of the search form.
    SynonymsComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (!this.query) {
            return;
        }
        this.isLoading = true;
        this.results = null;
        this.wordService
            .getMeansLikes(this.query)
            .then(function (response) {
            _this.isLoading = false;
            _this.results = {
                count: response.words.length,
                groups: [
                    { partOfSpeech: "Adjective", synonyms: [] },
                    { partOfSpeech: "Adverb", synonyms: [] },
                    { partOfSpeech: "Noun", synonyms: [] },
                    { partOfSpeech: "Verbs", synonyms: [] }
                ]
            };
            for (var _i = 0, _a = response.words; _i < _a.length; _i++) {
                var word = _a[_i];
                switch (word.typeOfSpeech) {
                    case "adjective":
                        _this.results.groups[0].synonyms.push({
                            word: word.value,
                            isStrongMatch: word.isStrongMatch
                        });
                        break;
                    case "adverb":
                        _this.results.groups[1].synonyms.push({
                            word: word.value,
                            isStrongMatch: word.isStrongMatch
                        });
                        break;
                    case "noun":
                        _this.results.groups[2].synonyms.push({
                            word: word.value,
                            isStrongMatch: word.isStrongMatch
                        });
                        break;
                    case "verb":
                        _this.results.groups[3].synonyms.push({
                            word: word.value,
                            isStrongMatch: word.isStrongMatch
                        });
                        break;
                }
            }
            _this.results.groups.sort(function (a, b) {
                var aStrongMatches = a.synonyms.filter(function (item) {
                    return (item.isStrongMatch);
                });
                var bStrongMatches = b.synonyms.filter(function (item) {
                    return (item.isStrongMatch);
                });
                if (aStrongMatches.length > bStrongMatches.length) {
                    return (-1);
                }
                else if (bStrongMatches.length > aStrongMatches.length) {
                    return (1);
                }
                else if (a.synonyms.length > b.synonyms.length) {
                    return (-1);
                }
                else if (b.synonyms.length > a.synonyms.length) {
                    return (1);
                }
                else {
                    return (0);
                }
            });
        })
            .catch(function (error) {
            _this.isLoading = false;
            _this.results = null;
            _this.errorHandler.handleError(error);
        });
    };
    SynonymsComponent = __decorate([
        core_1.Component({
            selector: "bsp-synonyms",
            styles: [__webpack_require__(234)],
            template: __webpack_require__(235)
        }),
        __metadata("design:paramtypes", [core_2.ErrorHandler,
            word_service_1.WordService])
    ], SynonymsComponent);
    return SynonymsComponent;
}());
exports.SynonymsComponent = SynonymsComponent;


/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block ;\n}\n.header {\n  margin-bottom: 15px ;\n}\n.header__title {\n  font-family: \"Roboto\";\n  font-size: 22px ;\n  line-height: 27px ;\n  margin-bottom: 5px ;\n}\n.header__description {\n  font-size: 16px ;\n  line-height: 21px ;\n}\n.title {\n  display: flex ;\n}\n.title__bigsexy {\n  font-weight: 300 ;\n}\n.title__synonyms {\n  font-weight: 900 ;\n}\n.body {\n  background-color: #F0F0F0;\n  padding: 22px 22px 22px 22px ;\n}\n.search {\n  display: flex ;\n  margin: 0px 0px 0px 0px ;\n}\n.search__input {\n  flex: 1 1 auto ;\n  font-size: 18px ;\n  padding: 8px 5px 7px 10px ;\n}\n.search__submit {\n  flex: 0 1 auto ;\n  font-size: 18px ;\n  margin-left: 10px ;\n  padding-left: 15px ;\n  padding-right: 15px ;\n}\n.loading,\n.no-results {\n  color: #AAAAAA;\n  font-style: italic ;\n  margin: 50px 0px 40px 0px ;\n  text-align: center ;\n}\n.results__group {\n  font-size: 16px ;\n  line-height: 21px ;\n  margin-top: 20px ;\n}\n.results__label {\n  font-weight: 600 ;\n  margin-bottom: 6px ;\n}\n.results__value {\n  display: flex ;\n  flex-wrap: wrap ;\n  line-height: 25px ;\n}\n.results__token {\n  font-weight: 300 ;\n  letter-spacing: 0.5px;\n  margin-right: 8px ;\n}\n.results__token--emphasize {\n  font-weight: 600 ;\n}\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\n<header class=\"header\">\n\t<div class=\"header__title title\">\n\t\t<span class=\"title__bigsexy\">BigSexy</span>\n\t\t<span class=\"title__synonyms\">Synonyms</span>\n\t</div>\n\n\t<div class=\"header__description\">\n\t\tFind words that mean roughly the same thing.\n\t</div>\n</header>\n\n<div class=\"body\">\n\n\t<form (submit)=\"handleSubmit()\" class=\"search\">\n\t\t<input type=\"text\" name=\"query\" [(ngModel)]=\"query\" class=\"search__input\" />\n\t\t<button type=\"submit\" class=\"search__submit\">\n\t\t\tSearch\n\t\t</button>\n\t</form>\n\n\t<!-- BEGIN: Loading Indicator. -->\n\t<div *ngIf=\"isLoading\" class=\"loading\">\n\t\tLoading...\n\t</div>\n\t<!-- END: Loading Indicator. -->\n\n\t<!-- BEGIN: No Results. -->\n\t<div *ngIf=\"( results && ! results.count )\" class=\"no-results\">\n\t\tSorry, no synonyms found.\n\t</div>\n\t<!-- END: No Results. -->\n\n\t<!-- BEGIN: Results. -->\n\t<div *ngIf=\"( results && results.count )\" class=\"results\">\n\n\t\t<div *ngFor=\"let group of results.groups\" class=\"results__group\">\n\t\t\t<div class=\"results__label\">\n\t\t\t\t{{ group.partOfSpeech }}:\n\t\t\t</div>\n\n\t\t\t<div class=\"results__value\">\n\t\t\t\t<span\n\t\t\t\t\t*ngFor=\"let synonym of group.synonyms; last as isLast;\"\n\t\t\t\t\tclass=\"results__token\"\n\t\t\t\t\t[class.results__token--emphasize]=\"synonym.isStrongMatch\">\n\t\t\t\t\t{{ synonym.word }}<ng-template [ngIf]=\"! isLast\">,</ng-template>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t<!-- END: Results. -->\n\n</div>\n"

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
var core_2 = __webpack_require__(5);
// Import the application components and services.
var datamuse_client_1 = __webpack_require__(220);
var storage_service_1 = __webpack_require__(96);
var WordService = /** @class */ (function () {
    // I initialize the word service.
    function WordService(datamuseClient, errorHandler, storageService) {
        this.datamuseClient = datamuseClient;
        this.errorHandler = errorHandler;
        this.storageService = storageService;
        this.syllableCountCache = Object.create(null);
        this.loadFromStorage();
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I get words that generally mean the same thing as the given word.
    WordService.prototype.getMeansLikes = function (word) {
        return __awaiter(this, void 0, void 0, function () {
            var rawResults, queryTypeOfSpeech, echoResult, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.datamuseClient.getWords({
                            ml: word,
                            qe: "ml",
                            md: "ps",
                            max: 500
                        })];
                    case 1:
                        rawResults = _a.sent();
                        rawResults = this.filterOutScoreless(rawResults);
                        rawResults = this.filterOutTagless(rawResults);
                        rawResults = this.filterOutAntonyms(rawResults);
                        rawResults = this.filterOutProperNouns(rawResults);
                        queryTypeOfSpeech = "unknown";
                        // Since we are using "qe" (query echo), the first result should be the word that
                        // we are searching for, unless Datamuse didn't recognize it.
                        if (rawResults.length && (rawResults[0].word === word)) {
                            echoResult = rawResults[0];
                            rawResults = rawResults.slice(1);
                            queryTypeOfSpeech = this.getTypeOfSpeech(echoResult.tags);
                        }
                        results = rawResults.map(function (item, index, collection) {
                            // Take advantage of the syllable-count metadata that was returned with
                            // each of the word results. We can cache this in order to short-circuit
                            // future API calls.
                            _this.cacheSyllableCountMetadata(item.word, item.numSyllables);
                            var typeOfSpeech = _this.getTypeOfSpeech(item.tags);
                            var isStrongMatch = _this.isSynonym(item.tags);
                            return ({
                                value: item.word,
                                syllableCount: (item.numSyllables || 0),
                                typeOfSpeech: typeOfSpeech,
                                isStrongMatch: isStrongMatch
                            });
                        });
                        return [2 /*return*/, ({
                                query: word,
                                typeOfSpeech: queryTypeOfSpeech,
                                words: results
                            })];
                }
            });
        });
    };
    // I get words that rhyme with the given word.
    WordService.prototype.getRhymes = function (word) {
        return __awaiter(this, void 0, void 0, function () {
            var rawResults, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.datamuseClient.getWords({
                            rel_rhy: word,
                            md: "s",
                            max: 500
                        })];
                    case 1:
                        rawResults = _a.sent();
                        results = this.filterOutScoreless(rawResults).map(function (item, index, collection) {
                            // Take advantage of the syllable-count metadata that was returned with
                            // each of the word results. We can cache this in order to short-circuit
                            // future API calls.
                            _this.cacheSyllableCountMetadata(item.word, item.numSyllables);
                            // The score that is passed back from Datamuse is (documented as
                            // being) not interpretable as anything concrete - it is merely a way
                            // to rank results. As such, we're going to consider the first 80% of
                            // the results to be "strong" matches; with the caveat that anything
                            // less that 100 is not a strong match. Just making it up as we go
                            // here :D 
                            if (item.score < 100) {
                                var isStrongMatch = false;
                            }
                            else {
                                var isStrongMatch = (index <= Math.max(collection.length * 0.8));
                            }
                            return ({
                                value: item.word,
                                syllableCount: (item.numSyllables || 0),
                                typeOfSpeech: "unknown",
                                isStrongMatch: isStrongMatch
                            });
                        });
                        return [2 /*return*/, ({
                                query: word,
                                words: results
                            })];
                }
            });
        });
    };
    // I get the syllable counts for the given collection of words.
    // --
    // NOTE: Since this method makes parallel requests, it catches individual errors and
    // returns an object that may contain partially-degraded word results (ie, where the
    // syllable count is zero).
    WordService.prototype.getSyllableCounts = function (words) {
        return __awaiter(this, void 0, void 0, function () {
            var unknownWords, promises, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        unknownWords = words.filter(function (word) {
                            return (!(word in _this.syllableCountCache));
                        });
                        if (!unknownWords.length) return [3 /*break*/, 2];
                        promises = unknownWords.map(function (word) { return __awaiter(_this, void 0, void 0, function () {
                            var results, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, this.datamuseClient.getWords({
                                                sp: word,
                                                qe: "sp",
                                                md: "s",
                                                max: 1
                                            })];
                                    case 1:
                                        results = _a.sent();
                                        // At this point, even though the result came back successfully,
                                        // there's no guarantee that it's the word we were looking for.
                                        // Since we're using the "SP" spelling end-point, the result may
                                        // contain a "spelling suggestion", not the word that we were
                                        // searching for. As such, we need to check the results before we
                                        // attempt to cache them.
                                        if (results.length) {
                                            // If the word that came is NOT THE SAME WORD we requested,
                                            // it means the API doesn't understand the word we are
                                            // looking for. That will not change the next time. Let's
                                            // cache this as zero.
                                            if (results[0].word !== word) {
                                                this.syllableCountCache[word] = 0;
                                                // The word DOES MATCH and has a valid syllable count.
                                            }
                                            else if (results[0].numSyllables) {
                                                this.syllableCountCache[word] = results[0].numSyllables;
                                            }
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_1 = _a.sent();
                                        this.errorHandler.handleError(error_1);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        // Once the parallel requests come back, we should (may) have changes to the
                        // syllable count cache that we want to persist for next time.
                        this.saveToStorage();
                        _a.label = 2;
                    case 2:
                        results = words.reduce(function (reduction, word) {
                            // CAUTION: Even at this point, the cache may not have the word we are
                            // looking at (due to a network or API failure). As such, we're going to
                            // fall-back to "0".
                            reduction[word] = (_this.syllableCountCache[word] || 0);
                            return (reduction);
                        }, Object.create(null));
                        return [2 /*return*/, (results)];
                }
            });
        });
    };
    // ---
    // PRIVATE METHODS.
    // ---
    WordService.prototype.arrayContains = function (collection, value) {
        var foundItem = collection.find(function (item) {
            return (item === value);
        });
        return (!!foundItem);
    };
    // When we make calls to Datamuse, we are always asking for the number of syllables
    // to be returned in the response metadata. This will help us build out the cache of
    // syllable counts.
    WordService.prototype.cacheSyllableCountMetadata = function (word, numSyllables) {
        // If the syllable count was not available, there's nothing to cache.
        if (!numSyllables) {
            return;
        }
        // If the word is already cached, we can skip.
        if (word in this.syllableCountCache) {
            return;
        }
        // If the word contains a space, it's a turn-of-phrase. In such a case, we won't
        // know where the distribution of syllables falls in that phrase. As such, it's
        // not easy to cache.
        if (word.includes(" ")) {
            return;
        }
        this.syllableCountCache[word] = numSyllables;
        this.saveToStorage();
    };
    WordService.prototype.filterOutAntonyms = function (results) {
        var _this = this;
        var filteredResults = results.filter(function (result) {
            return (!_this.arrayContains(result.tags, "ant"));
        });
        return (filteredResults);
    };
    WordService.prototype.filterOutProperNouns = function (results) {
        var _this = this;
        var filteredResults = results.filter(function (result) {
            var isNoun = _this.arrayContains(result.tags, "n");
            var isProper = _this.arrayContains(result.tags, "prop");
            return (!(isNoun && isProper));
        });
        return (filteredResults);
    };
    // I remove any Datamuse matches that don't have a score. If there is no score, then
    // the word or phrase barely matches the query. It's probably not worth returning.
    WordService.prototype.filterOutScoreless = function (results) {
        var filteredResults = results.filter(function (result) {
            return ("score" in result);
        });
        return (filteredResults);
    };
    WordService.prototype.filterOutTagless = function (results) {
        var filteredResults = results.filter(function (result) {
            return ("tags" in result);
        });
        return (filteredResults);
    };
    WordService.prototype.getTypeOfSpeech = function (tags) {
        var tag = tags.find(function (tag) {
            return ((tag === "n") ||
                (tag === "v") ||
                (tag === "adj") ||
                (tag === "adv") ||
                (tag === "u"));
        });
        switch (tag) {
            case "n":
                return ("noun");
                break;
            case "v":
                return ("verb");
                break;
            case "adj":
                return ("adjective");
                break;
            case "adv":
                return ("adverb");
                break;
            default:
                return ("unknown");
                break;
        }
    };
    WordService.prototype.isSynonym = function (tags) {
        var value = tags.find(function (tag) {
            return (tag === "syn");
        });
        return (!!value);
    };
    // I try to update the cache using data from the storage service.
    WordService.prototype.loadFromStorage = function () {
        // NOTE: Object.assign() can handle anything that's not an object. As such, we
        // don't have to worry about the .getItem() coming back undefined - if it does,
        // the value will just be ignored, leaving our cache untouched.
        Object.assign(this.syllableCountCache, this.storageService.getItem("syllable-counts"));
    };
    // I try to save the current cache to the storage service.
    WordService.prototype.saveToStorage = function () {
        this.storageService.setItem("syllable-counts", this.syllableCountCache);
    };
    WordService = __decorate([
        core_2.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [datamuse_client_1.DatamuseClient,
            core_1.ErrorHandler,
            storage_service_1.StorageService])
    ], WordService);
    return WordService;
}());
exports.WordService = WordService;


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the core angular services.
var core_1 = __webpack_require__(5);
var core_2 = __webpack_require__(5);
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var StorageService = /** @class */ (function () {
    // I initialize the storage service.
    function StorageService(errorHandler) {
        this.errorHandler = errorHandler;
        this.timer = null;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I get the given item from storage. If the storage infrastructure is not available,
    // "undefined" is returned.
    StorageService.prototype.getItem = function (key) {
        try {
            var serializedValue = window.localStorage.getItem(this.getStorageKey(key));
            var value = JSON.parse(serializedValue);
            return (value);
        }
        catch (error) {
            this.errorHandler.handleError(error);
            return (undefined);
        }
    };
    // I store the given value at the given key.
    // --
    // CAUTION: The value will be serialized as a JSON string.
    StorageService.prototype.setItem = function (key, value) {
        var _this = this;
        window.clearTimeout(this.timer);
        // Since we don't need to return any value, let's do the actual write inside of
        // a timeout. Since localStorage is a synchronous API, this should help prevent
        // it from blocking the user experience (from the user's perceptive - the actual
        // write-operation will still be blocking).
        this.timer = window.setTimeout(function () {
            try {
                window.localStorage.setItem(_this.getStorageKey(key), JSON.stringify(value));
            }
            catch (error) {
                _this.errorHandler.handleError(error);
            }
        }, 5000 // 5-seconds.
        );
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // I return the normalized key for localStorage.
    StorageService.prototype.getStorageKey = function (key) {
        return ("big-sexy-poems:" + key.toLowerCase());
    };
    StorageService = __decorate([
        core_2.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [core_1.ErrorHandler])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;


/***/ })

},[214]);