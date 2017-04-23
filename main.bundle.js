webpackJsonp([1,4],{

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 157;


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fetchingdata_fetchingdata_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stargaze_stargaze_component__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'fetching',
        component: __WEBPACK_IMPORTED_MODULE_2__fetchingdata_fetchingdata_component__["a" /* FetchingdataComponent */]
    },
    {
        path: 'stargaze',
        component: __WEBPACK_IMPORTED_MODULE_3__stargaze_stargaze_component__["a" /* StargazeComponent */]
    },
    { path: '', redirectTo: '/fetching', pathMatch: 'full' }
];
var AppRoutingRoutingModule = (function () {
    function AppRoutingRoutingModule() {
    }
    return AppRoutingRoutingModule;
}());
AppRoutingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingRoutingModule);

//# sourceMappingURL=app-routing-routing.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(236),
        styles: [__webpack_require__(229)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__orbit_orbit_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stargaze_stargaze_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stardata_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startable_startable_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stargaze_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__orbit_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_app_routing_routing_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__fetchingdata_fetchingdata_component__ = __webpack_require__(90);
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
            __WEBPACK_IMPORTED_MODULE_8__startable_startable_component__["a" /* StartableComponent */],
            __WEBPACK_IMPORTED_MODULE_15__fetchingdata_fetchingdata_component__["a" /* FetchingdataComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing_app_routing_routing_module__["a" /* AppRoutingRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__stardata_service__["a" /* StardataService */], __WEBPACK_IMPORTED_MODULE_9__stargaze_service__["a" /* StargazeService */], __WEBPACK_IMPORTED_MODULE_10__orbit_service__["a" /* OrbitService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 169:
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
            this.FIELD_ELIPTIC_LATITUDE,
            this.FIELD_BRIGHTNESS], true);
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

ExoplanetArchiveAPI.API_BASE_URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?';
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
ExoplanetArchiveAPI.FIELD_BRIGHTNESS = 'st_wise1';
//# sourceMappingURL=ExoplanetArchiveAPI.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babylonjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GazedStar; });

var GazedStar = (function () {
    function GazedStar(star, renderEngine) {
        this.DRAWN_DISTANCE = 220;
        this.BILLBOARD_DIAMETER = 6; //8
        this.SPHERE_DIAMETER = 1; // 1.5
        this.MINIMUM_INTENSITY = 0.2;
        this.BILLBOARD_IMAGE_PATH = './assets/StarBillboardTexture.png';
        this.star = star;
        this.renderEngine = renderEngine;
        this.computeParameters();
        this.billboard = this.renderEngine.addBillboard(this.star.StarName, this.BILLBOARD_DIAMETER, this.position, this.BILLBOARD_IMAGE_PATH, this.intensity);
        this.sphere = this.renderEngine.addSphere(this.star.StarName, this.position, this.SPHERE_DIAMETER, new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Color3"](1, 1, 1), this.intensity);
    }
    GazedStar.prototype.computeParameters = function () {
        this.computePosition();
        this.computeIntensity();
    };
    GazedStar.prototype.computePosition = function () {
        var r = this.DRAWN_DISTANCE;
        var y = r * Math.sin(this.star.ElipticLatitude);
        var r2 = r * Math.cos(this.star.ElipticLatitude);
        var x = r2 * Math.sin(this.star.ElipticLongitude);
        var z = r2 * Math.cos(this.star.ElipticLongitude);
        this.position = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](x, y, z);
    };
    GazedStar.prototype.computeIntensity = function () {
        this.intensity = this.MINIMUM_INTENSITY + ((this.star.Brightness) * (1 - this.MINIMUM_INTENSITY));
    };
    GazedStar.prototype.enlarge = function () {
        this.billboard.scaling = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](3, 3, 3);
    };
    GazedStar.prototype.resetSize = function () {
        this.billboard.scaling = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Vector3"](1, 1, 1);
    };
    return GazedStar;
}());

//# sourceMappingURL=gazedStar.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Star; });
var Star = (function () {
    function Star(starName, numberOfPlanets, elipticLongitude, elipticLatitude, brightness) {
        this.StarName = starName;
        this.NumberOfPlanets = numberOfPlanets;
        this.ElipticLongitude = elipticLongitude;
        this.ElipticLatitude = elipticLatitude;
        this.Brightness = brightness;
    }
    return Star;
}());

//# sourceMappingURL=star.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__orbit_service__ = __webpack_require__(91);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('renderCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], OrbitComponent.prototype, "renderCanvas", void 0);
OrbitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-orbit',
        template: __webpack_require__(238),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__orbit_service__["a" /* OrbitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__orbit_service__["a" /* OrbitService */]) === "function" && _b || Object])
], OrbitComponent);

var _a, _b;
//# sourceMappingURL=orbit.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stardata_service__ = __webpack_require__(42);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-startable',
        template: __webpack_require__(240),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */]) === "function" && _a || Object])
], StartableComponent);

var _a;
//# sourceMappingURL=startable.component.js.map

/***/ }),

/***/ 174:
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

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "body\r\n{\r\n    margin:0; \r\n    padding:0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".maindiv\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    background-image: url(" + __webpack_require__(490) + ");\r\n}\r\n\r\n.center\r\n{\r\n    position: relative;\r\n    left: 0;\r\n    top: 30%;\r\n}\r\n\r\n.centeredDiv\r\n{\r\n    padding-left: 10%;\r\n    padding-right: 10%;\r\n    text-align: center;\r\n}\r\n\r\n.fecthing\r\n{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-style: italic;\r\n    font-size: 16px;\r\n}\r\n\r\n.heading\r\n{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.creditsdiv\r\n{\r\n    margin-top: 30px;\r\n}\r\n\r\n.credits\r\n{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-style: normal;\r\n    font-size: 14px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".renderCanvas \r\n{\r\n    width: 100%;\r\n    height: 100%;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".renderCanvas \r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.featchingData\r\n{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<app-fetchingdata></app-fetchingdata>-->\n<!--<app-stargaze></app-stargaze>-->\n<!--<button md-raised-button color=\"primary\">Raised button</button>-->\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"maindiv\">\n  <div class=\"center\">\n    <div class=\"centeredDiv\">\n      <md-card class=\"mat-card\">\n        <p class=\"heading\">Exoplanetary Explorer</p>\n        <p class=\"fecthing\">{{messageToDisplay}}</p>\n        <md-progress-bar mode=\"indeterminate\" color=\"#000000\" class=\"mat-progress-bar\"></md-progress-bar>\n        <div class=\"creditsdiv\">\n          <p class=\"credits\">Data obtained via the NASA Exoplanet Archive API: <a href=\"http://exoplanetarchive.ipac.caltech.edu/index.html\" target=\"_blank\">NASA Exoplanet Archives</a></p>          \n        </div>\n      </md-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<canvas #renderCanvas class=\"renderCanvas\"></canvas>"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"featchingData\" *ngIf=\"featchingDataVisible\">\r\n  <app-fetchingdata [displaymessage]=\"'Procesing data, hold on for a short while ...'\" [navigateToStarGaze]=\"false\"></app-fetchingdata>\r\n</div>\r\n<canvas #renderCanvas class=\"renderCanvas\" (mousemove)=\"mousemove($event)\"></canvas>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let star of stars |async\">{{star|json}}</div>"

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_star__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_ExoplanetArchiveAPI__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(242);
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
        var stars = this.splitPipedData(starData).map(function (row) { return _this.mapStarRow(row); });
        this.normalizeBrightness(stars);
        return stars;
    };
    StardataService.prototype.normalizeBrightness = function (stars) {
        if (stars.length > 0) {
            var min_1 = stars[0].Brightness;
            var max_1 = stars[0].Brightness;
            stars.forEach(function (star) {
                var brightness = star.Brightness;
                if (brightness < min_1) {
                    min_1 = brightness;
                }
                if (brightness > max_1) {
                    max_1 = brightness;
                }
            });
            var delta_1 = Math.abs(max_1 - min_1);
            stars.forEach(function (star) {
                star.Brightness = (!isNaN(star.Brightness) ? ((star.Brightness - min_1) / delta_1) : 0);
            });
        }
    };
    StardataService.prototype.mapStarRow = function (starRow) {
        return new __WEBPACK_IMPORTED_MODULE_2__classes_star__["a" /* Star */](starRow[0], Number(starRow[1]), Number(starRow[2]), Number(starRow[3]), Number(starRow[4]));
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

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "starwall.66254883b51ac306ae43.jpg";

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(158);


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babylonjs__ = __webpack_require__(59);
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
    RenderEngine.prototype.addBillboard = function (name, size, position, pathToTexture, alpha) {
        // mesh
        var billboard = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["MeshBuilder"].CreatePlane(name, { size: size }, this.scene);
        billboard.billboardMode = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Mesh"].BILLBOARDMODE_ALL;
        billboard.position = position;
        // material
        var material = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["StandardMaterial"](name + "_material", this.scene);
        material.diffuseTexture = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Texture"](pathToTexture, this.scene);
        material.opacityTexture = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Texture"](pathToTexture, this.scene);
        material.alpha = alpha;
        material.specularColor = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Color3"](0, 0, 0);
        material.specularPower = 0;
        billboard.material = material;
        return billboard;
    };
    RenderEngine.prototype.addSphere = function (name, position, diameter, diffuseColor, alpha) {
        // mesh
        var sphere = __WEBPACK_IMPORTED_MODULE_0_babylonjs__["MeshBuilder"].CreateSphere(name, { segments: 16, diameter: diameter, updatable: true }, this.scene);
        sphere.position = position;
        // material
        var material = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["StandardMaterial"](name + "_material", this.scene);
        material.diffuseColor = diffuseColor;
        material.alpha = alpha;
        material.specularColor = new __WEBPACK_IMPORTED_MODULE_0_babylonjs__["Color3"](0, 0, 0);
        sphere.material = material;
        return sphere;
    };
    return RenderEngine;
}());

//# sourceMappingURL=RenderEngine.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stardata_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchingdataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchingdataComponent = (function () {
    function FetchingdataComponent(stardataService, router) {
        this.stardataService = stardataService;
        this.router = router;
        this.navigateToStarGaze = true;
        this.displaymessage = 'Fecthing data, hold on for a short while ...';
    }
    FetchingdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageToDisplay = this.displaymessage;
        if (this.navigateToStarGaze) {
            this.stardataService.getStars().subscribe(function (stars) { _this.router.navigate(['stargaze']); });
        }
    };
    return FetchingdataComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Boolean)
], FetchingdataComponent.prototype, "navigateToStarGaze", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], FetchingdataComponent.prototype, "displaymessage", void 0);
FetchingdataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-fetchingdata',
        template: __webpack_require__(237),
        styles: [__webpack_require__(230)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FetchingdataComponent);

var _a, _b;
//# sourceMappingURL=fetchingdata.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__ = __webpack_require__(89);
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_RenderEngine__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_gazedStar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babylonjs__ = __webpack_require__(59);
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
        this.hoveredStarChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.sceneReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
        this.sceneReady.emit(true);
    };
    StargazeService.prototype.updateHoveredStar = function (event) {
        var changed = false;
        var previouslyHoveredStar = this.hoveredStar;
        // update hovered star
        var pick = this.engine.scene.pick(event.clientX, event.clientY);
        if (pick.hit) {
            var hoveredStarName = pick.pickedMesh.name;
            if ((!this.hasHoveredStar) || (hoveredStarName != this.hoveredStarName)) {
                this.hasHoveredStar = true;
                this.hoveredStarName = hoveredStarName;
                this.hoveredStar = this.findGazedStar(hoveredStarName);
                changed = true;
            }
        }
        else if (this.hasHoveredStar) {
            this.hasHoveredStar = false;
            this.hoveredStarName = '';
            this.hoveredStar = null;
            changed = true;
        }
        // update for change
        if (changed) {
            if (previouslyHoveredStar) {
                previouslyHoveredStar.resetSize();
            }
            if (this.hoveredStar) {
                this.hoveredStar.enlarge();
            }
            this.hoveredStarChanged.emit(this.hoveredStar);
        }
    };
    StargazeService.prototype.findGazedStar = function (starName) {
        return this.gazedStars.find(function (gazedStar) { return gazedStar.star.StarName == starName; });
    };
    return StargazeService;
}());
StargazeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StargazeService);

//# sourceMappingURL=stargaze.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stardata_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stargaze_service__ = __webpack_require__(92);
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
        this.featchingDataVisible = true;
    }
    StargazeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stars = this.stardataService.getStars();
        this.stargazeService.sceneReady.subscribe(function (ready) { _this.hideProcessingIndicator(); });
    };
    StargazeComponent.prototype.hideProcessingIndicator = function () {
        this.featchingDataVisible = false;
    };
    StargazeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stars.subscribe(function (stars) { _this.stargazeService.init(_this.renderCanvas.nativeElement, stars); });
    };
    StargazeComponent.prototype.ngOnDestroy = function () {
    };
    StargazeComponent.prototype.mousemove = function (event) {
        this.stargazeService.updateHoveredStar(event);
    };
    return StargazeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('renderCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], StargazeComponent.prototype, "renderCanvas", void 0);
StargazeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-stargaze',
        template: __webpack_require__(239),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stargaze_service__["a" /* StargazeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stargaze_service__["a" /* StargazeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stardata_service__["a" /* StardataService */]) === "function" && _c || Object])
], StargazeComponent);

var _a, _b, _c;
//# sourceMappingURL=stargaze.component.js.map

/***/ })

},[492]);
//# sourceMappingURL=main.bundle.js.map