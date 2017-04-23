webpackJsonp([1,4],{

/***/ 129:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 129;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(144);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(203),
        styles: [__webpack_require__(198)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orbit_orbit_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stargaze_stargaze_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stardata_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startable_startable_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stargaze_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orbit_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__orbit_orbit_component__["a" /* OrbitComponent */],
            __WEBPACK_IMPORTED_MODULE_6__stargaze_stargaze_component__["a" /* StargazeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__startable_startable_component__["a" /* StartableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__stardata_service__["a" /* StardataService */], __WEBPACK_IMPORTED_MODULE_9__stargaze_service__["a" /* StargazeService */], __WEBPACK_IMPORTED_MODULE_10__orbit_service__["a" /* OrbitService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExoplanetArchiveAPI; });
var ExoplanetArchiveAPI = (function () {
    function ExoplanetArchiveAPI() {
    }
    ExoplanetArchiveAPI.BuildStarDataURL = function () {
        return this.BuildApiURL(this.TABLE_CONFIRMED_PLANETS, [this.FIELD_STAR_NAME,
            this.FIELD_NUMBER_OF_PLANETS,
            this.FIELD_ELIPTIC_LONGITUDE,
            this.FIELD_ELIPTIC_LATITUDE], true);
    };
    ExoplanetArchiveAPI.BuildApiURL = function (table, fields, distinct) {
        // api base url
        var url = this.API_BASE_URL;
        // table
        url += this.ARGUMENT_TABLE + '=' + table;
        // select
        if (fields.length > 0) {
            url += '&' + this.ARGUMENT_SELECT + ((distinct) ? '=' + this.PREDICATE_DISTINCT + ' ' : '');
            fields.forEach(function (field, index) {
                if (index > 0) {
                    url += ',';
                }
                ;
                url += field;
            });
        }
        // format
        url += '&' + this.ARGUMENT_FORMAT + '=' + this.VALUE_PIPED;
        return url;
    };
    return ExoplanetArchiveAPI;
}());

ExoplanetArchiveAPI.API_BASE_URL = 'http://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?';
ExoplanetArchiveAPI.ARGUMENT_TABLE = 'table';
ExoplanetArchiveAPI.ARGUMENT_SELECT = 'select';
ExoplanetArchiveAPI.ARGUMENT_FORMAT = 'format';
ExoplanetArchiveAPI.VALUE_PIPED = 'pipe';
ExoplanetArchiveAPI.PREDICATE_DISTINCT = 'distinct';
ExoplanetArchiveAPI.TABLE_CONFIRMED_PLANETS = 'exoplanets';
ExoplanetArchiveAPI.FIELD_STAR_NAME = 'pl_hostname';
ExoplanetArchiveAPI.FIELD_NUMBER_OF_PLANETS = 'pl_pnum';
ExoplanetArchiveAPI.FIELD_ELIPTIC_LONGITUDE = 'st_elon';
ExoplanetArchiveAPI.FIELD_ELIPTIC_LATITUDE = 'st_elat';
//# sourceMappingURL=ExoplanetArchiveAPI.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babylonjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GazedStar; });

var GazedStar = (function () {
    function GazedStar(star, renderEngine) {
        this.DRAWN_DISTANCE = 220;
        this.BILLBOARD_DIAMETER = 8;
        this.SPHERE_DIAMETER = 1.5;
        this.star = star;
        this.renderEngine = renderEngine;
        this.computeParameters();
        this.billboard = this.renderEngine.addBillboard(this.star.StarName, this.BILLBOARD_DIAMETER, this.position, './assets/StarBillboardTexture.png');
        this.sphere = this.renderEngine.addSphere(this.star.StarName, this.position, this.SPHERE_DIAMETER);
    }
    GazedStar.prototype.computeParameters = function () {
        this.computePosition();
    };
    GazedStar.prototype.computePosition = function () {
        var r = this.DRAWN_DISTANCE;
        var y = r * Math.sin(this.star.ElipticLatitude);
        var r2 = r * Math.cos(this.star.ElipticLatitude);
        var x = r2 * Math.sin(this.star.ElipticLongitude);
        var z = r2 * Math.cos(this.star.ElipticLongitude);
        this.position = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](x, y, z);
    };
    return GazedStar;
}());

//# sourceMappingURL=gazedStar.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Star; });
var Star = (function () {
    function Star(starName, numberOfPlanets, elipticLongitude, elipticLatitude) {
        this.StarName = starName;
        this.NumberOfPlanets = numberOfPlanets;
        this.ElipticLongitude = elipticLongitude;
        this.ElipticLatitude = elipticLatitude;
    }
    return Star;
}());

//# sourceMappingURL=star.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrbitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrbitComponent = (function () {
    function OrbitComponent(orbitService) {
        this.orbitService = orbitService;
    }
    OrbitComponent.prototype.ngOnInit = function () { };
    OrbitComponent.prototype.ngAfterViewInit = function () {
        this.orbitService.init(this.renderCanvas.nativeElement);
    };
    OrbitComponent.prototype.ngOnDestroy = function () {
    };
    return OrbitComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('renderCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], OrbitComponent.prototype, "renderCanvas", void 0);
OrbitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-orbit',
        template: __webpack_require__(204),
        styles: [__webpack_require__(199)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__orbit_service__["a" /* OrbitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__orbit_service__["a" /* OrbitService */]) === "function" && _b || Object])
], OrbitComponent);

var _a, _b;
//# sourceMappingURL=orbit.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stardata_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stargaze_service__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StargazeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StargazeComponent = (function () {
    function StargazeComponent(stargazeService, stardataService) {
        this.stargazeService = stargazeService;
        this.stardataService = stardataService;
    }
    StargazeComponent.prototype.ngOnInit = function () {
        this.stars = this.stardataService.getStars();
    };
    StargazeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stars.subscribe(function (stars) { _this.stargazeService.init(_this.renderCanvas.nativeElement, stars); });
    };
    StargazeComponent.prototype.ngOnDestroy = function () {
    };
    return StargazeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('renderCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], StargazeComponent.prototype, "renderCanvas", void 0);
StargazeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-stargaze',
        template: __webpack_require__(205),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stargaze_service__["a" /* StargazeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stargaze_service__["a" /* StargazeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */]) === "function" && _c || Object])
], StargazeComponent);

var _a, _b, _c;
//# sourceMappingURL=stargaze.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stardata_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartableComponent = (function () {
    function StartableComponent(stardataService) {
        this.stardataService = stardataService;
    }
    StartableComponent.prototype.ngOnInit = function () {
        this.stars = this.stardataService.getStars();
    };
    return StartableComponent;
}());
StartableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-startable',
        template: __webpack_require__(206),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */]) === "function" && _a || Object])
], StartableComponent);

var _a;
//# sourceMappingURL=startable.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "body\r\n{\r\n    margin:0; \r\n    padding:0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".renderCanvas \r\n{\r\n    width: 100%;\r\n    height: 100%;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, ".renderCanvas \r\n{\r\n    width: 100%;\r\n    height: 100%;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "<app-stargaze></app-stargaze>\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "<canvas #renderCanvas class=\"renderCanvas\"></canvas>"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<canvas #renderCanvas class=\"renderCanvas\"></canvas>"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let star of stars |async\">{{star|json}}</div>"

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_star__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_ExoplanetArchiveAPI__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StardataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StardataService = (function () {
    function StardataService(http) {
        this.http = http;
    }
    StardataService.prototype.getStars = function () {
        var _this = this;
        if (this.starsObservable == null) {
            this.starsObservable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__classes_ExoplanetArchiveAPI__["a" /* ExoplanetArchiveAPI */].BuildStarDataURL()).map(function (response) { return _this.mapStarData(response.text()); });
        }
        return this.starsObservable;
    };
    StardataService.prototype.mapStarData = function (starData) {
        var _this = this;
        return this.splitPipedData(starData).map(function (row) { return _this.mapStarRow(row); });
    };
    StardataService.prototype.mapStarRow = function (starRow) {
        return new __WEBPACK_IMPORTED_MODULE_2__classes_star__["a" /* Star */](starRow[0], Number(starRow[1]), Number(starRow[2]), Number(starRow[3]));
    };
    StardataService.prototype.splitPipedData = function (textData) {
        var data = [];
        var rows = textData.split('\n');
        rows.forEach(function (row, index) { if (index > 0) {
            data.push(row.split('|'));
        } });
        if (rows.length > 0) {
            rows = rows.splice(0, 1);
        }
        return data;
    };
    return StardataService;
}());
StardataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StardataService);

var _a;
//# sourceMappingURL=stardata.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babylonjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderEngine; });

var RenderEngine = (function () {
    function RenderEngine(canvas) {
        var _this = this;
        this.canvas = canvas;
        this.engine = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Engine"](this.canvas);
        this.createScene();
        this.engine.runRenderLoop(function () { _this.scene.render(); });
    }
    RenderEngine.prototype.createScene = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Scene"](this.engine);
        this.scene.clearColor = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Color4"](0, 0, 0, 1);
    };
    RenderEngine.prototype.createFreeCamera = function () {
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["FreeCamera"]('camera1', new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](0, 0, 0), this.scene);
        this.camera.setTarget(new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](0, 0, 1));
        this.camera.attachControl(this.canvas, false);
    };
    RenderEngine.prototype.createHemisphericLight = function () {
        this.light = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["HemisphericLight"]('hemisphericLight', new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](0, 1, 0), this.scene);
    };
    RenderEngine.prototype.createPointLight = function (position) {
        this.light = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["PointLight"]('pointLight', position, this.scene);
    };
    RenderEngine.prototype.addBillboard = function (name, size, position, pathToTexture) {
        // mesh
        var billboard = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["MeshBuilder"].CreatePlane(name, { size: size }, this.scene);
        billboard.billboardMode = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Mesh"].BILLBOARDMODE_ALL;
        billboard.position = position;
        // material
        var material = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["StandardMaterial"](name + "_material", this.scene);
        material.diffuseTexture = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Texture"](pathToTexture, this.scene);
        material.opacityTexture = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Texture"](pathToTexture, this.scene);
        material.specularColor = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Color3"](0, 0, 0);
        material.specularPower = 0;
        billboard.material = material;
        return billboard;
    };
    RenderEngine.prototype.addSphere = function (name, position, diameter) {
        var sphere = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["MeshBuilder"].CreateSphere(name, { segments: 16, diameter: diameter, updatable: true }, this.scene);
        sphere.position = position;
        return sphere;
    };
    return RenderEngine;
}());

//# sourceMappingURL=RenderEngine.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrbitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrbitService = (function () {
    function OrbitService() {
    }
    OrbitService.prototype.init = function (canvas) {
        this.engine = new __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__["a" /* RenderEngine */](canvas);
    };
    return OrbitService;
}());
OrbitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OrbitService);

//# sourceMappingURL=orbit.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_gazedStar__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babylonjs__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babylonjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babylonjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StargazeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StargazeService = (function () {
    function StargazeService() {
    }
    StargazeService.prototype.init = function (canvas, stars) {
        this.engine = new __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__["a" /* RenderEngine */](canvas);
        this.setupScene(stars);
    };
    StargazeService.prototype.setupScene = function (stars) {
        var _this = this;
        this.engine.createFreeCamera();
        this.engine.createPointLight(new __WEBPACK_IMPORTED_MODULE_3_babylonjs__["Vector3"](0, 0, 0));
        var gazedStars = [];
        stars.forEach(function (star) { return gazedStars.push(new __WEBPACK_IMPORTED_MODULE_2__classes_gazedStar__["a" /* GazedStar */](star, _this.engine)); });
        this.gazedStars = gazedStars;
    };
    return StargazeService;
}());
StargazeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StargazeService);

//# sourceMappingURL=stargaze.service.js.map

/***/ })

},[480]);
//# sourceMappingURL=main.bundle.js.map