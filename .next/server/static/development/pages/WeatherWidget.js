module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/WeatherWidget/components/NotFound.js":
/*!****************************************************!*\
  !*** ./pages/WeatherWidget/components/NotFound.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/types */ "@babel/types");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\WeatherWidget\\components\\NotFound.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function NotFound(props) {
  return __jsx("div", {
    className: "jsx-92123339" + " " + "notFound",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "92123339",
    __self: this
  }, ".notFound{display:block;width:150px;height:150px;position:fixed;background-color:#33414E;text-align:center;bottom:calc(50% - 75px);left:calc(50% - 75px);box-shadow:9px 10px 16px -12px rgba(0,0,0,0.75);}.notFound p{margin:calc(50% - 15px) 10px;}.delSpan{cursor:pointer;position:absolute;display:inline-block;width:30px;height:30px;overflow:hidden;color:rgba(0,0,0,0);top:10px;right:10px;}.delSpan::before,.delSpan::after{content:'';position:absolute;height:1px;width:100%;top:50%;left:0;margin-top:-1px;background:#000;}.delSpan::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.delSpan::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcV2VhdGhlcldpZGdldFxcY29tcG9uZW50c1xcTm90Rm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3NELEFBRzJCLEFBY2UsQUFJZCxBQVlKLEFBV2MsQUFHQyxXQWJSLEdBOUJOLENBa0JNLFdBakJMLEdBYWpCLEFBaUJlLElBWlUsTUFqQk4sQ0E4QkosV0FDSCxHQTdCaUIsQUFnQmQsS0FjSixNQWJLLENBZUksV0FkQSxFQWpCRSxHQWdDRixFQUlsQixHQUdBLE1BckJzQixJQWpCSSxDQWdDMUIsZUFkVyxRQWpCYSxDQWtCWCxXQUVmLFVBbkJvRCxnREFDcEQiLCJmaWxlIjoiRDpcXG5vZGUtcHJvamVjdHNcXG15LXBhZ2VcXHBhZ2VzXFxXZWF0aGVyV2lkZ2V0XFxjb21wb25lbnRzXFxOb3RGb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IHRzUHJvcGVydHlTaWduYXR1cmUgfSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gTm90Rm91bmQgKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90Rm91bmRcIj4gPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAubm90Rm91bmQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNEU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm90dG9tOiBjYWxjKDUwJSAtIDc1cHgpO1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDc1cHgpOyAgIFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA5cHggMTBweCAxNnB4IC0xMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5ub3RGb3VuZCBwIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiBjYWxjKDUwJSAtIDE1cHgpIDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kZWxTcGFuIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWxTcGFuOjpiZWZvcmUsIC5kZWxTcGFuOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlbFNwYW46OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVsU3Bhbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8cD7Qk9C+0YDQvtC0INC90LUg0L3QsNC50LTQtdC9PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxTcGFuXCIgb25DbGljaz17cHJvcHMub25DbG9zZX0+WDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kICJdfQ== */\n/*@ sourceURL=D:\\\\node-projects\\\\my-page\\\\pages\\\\WeatherWidget\\\\components\\\\NotFound.js */"), __jsx("p", {
    className: "jsx-92123339",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u0413\u043E\u0440\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"), __jsx("span", {
    onClick: props.onClose,
    className: "jsx-92123339" + " " + "delSpan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "X"));
}

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./pages/WeatherWidget/components/OneCity.js":
/*!***************************************************!*\
  !*** ./pages/WeatherWidget/components/OneCity.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\WeatherWidget\\components\\OneCity.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function OneCity(props) {
  const APIKEY = "b6907d289e10d714a6e88b30761fae22";
  const APIURL = "http://localhost:8010/proxy/data/2.5/weather";
  const cityName = props.data;
  const {
    0: weather,
    1: setWeather
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    temp: "(скоро будет)",
    humidity: "(скоро будет)"
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(APIURL, {
      params: {
        'q': cityName,
        'appid': APIKEY
      }
    }).then(response => {
      setWeather({
        temp: response.data.main.temp,
        humidity: response.data.main.humidity
      });
    }).catch(err => {
      props.onNotFound();
      props.onDelete(cityName);
    });
  }, [cityName]);
  return __jsx("div", {
    className: "jsx-2530886791" + " " + "smallDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2530886791",
    __self: this
  }, ".smallDiv{width:250px;height:250px;margin:30px;padding:20px;position:relative;display:inline-block;box-shadow:9px 10px 16px -12px rgba(0,0,0,0.75);background-color:#33414E;}.smallDiv::after{position:absolute;content:' ';width:50px;display:block;height:50px;right:10px;bottom:10px;background:center / contain no-repeat url(\"/cloud.png\");z-index:100;}.delSpan{cursor:pointer;position:absolute;display:inline-block;width:30px;height:30px;overflow:hidden;color:rgba(0,0,0,0);top:10px;right:10px;}.delSpan::before,.delSpan::after{content:'';position:absolute;height:2px;width:100%;top:50%;left:0;margin-top:-1px;background:#000;}.delSpan::before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.delSpan::after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcV2VhdGhlcldpZGdldFxcY29tcG9uZW50c1xcT25lQ2l0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzJELEFBSW1CLEFBV00sQUFhSCxBQVlKLEFBV2MsQUFHQyxXQWJSLENBcENMLEdBd0JLLEdBYk4sT0FWQSxJQW9DRCxDQXpCQSxHQWFVLElBdkJSLEdBb0NGLENBeEJHLFNBWEksQ0FvQ1YsR0FiRyxDQVhDLElBeUJMLE1BYkssQ0FlSSxDQTFCTCxDQVpVLFNBd0JMLENBWEosSUEwQkksRUFJbEIsR0FHQSxFQTdDa0QsQ0FhUSxHQVdwQyxLQWV0QixlQWRXLFNBQ0UsV0FFZixJQTNCNkIsU0FhYixZQUNoQixJQWJBIiwiZmlsZSI6IkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcV2VhdGhlcldpZGdldFxcY29tcG9uZW50c1xcT25lQ2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gT25lQ2l0eSAocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgQVBJS0VZID0gXCJiNjkwN2QyODllMTBkNzE0YTZlODhiMzA3NjFmYWUyMlwiO1xyXG4gIGNvbnN0IEFQSVVSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDEwL3Byb3h5L2RhdGEvMi41L3dlYXRoZXJcIjtcclxuICAgXHJcbiAgY29uc3QgY2l0eU5hbWUgPSBwcm9wcy5kYXRhO1xyXG5cclxuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0ZW1wIDogXCIo0YHQutC+0YDQviDQsdGD0LTQtdGCKVwiLFxyXG4gICAgaHVtaWRpdHkgOiBcIijRgdC60L7RgNC+INCx0YPQtNC10YIpXCIsXHJcbn0pO1xyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdCAoXHJcbiAgICBmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgICBcclxuICAgICAgICBheGlvcy5nZXQoQVBJVVJMLCB7IFxyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICdxJyA6IGNpdHlOYW1lLCBcclxuICAgICAgICAgICAgJ2FwcGlkJyA6IEFQSUtFWVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgc2V0V2VhdGhlcih7XHJcbiAgICAgICAgICAgIHRlbXA6IHJlc3BvbnNlLmRhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgICAgICBodW1pZGl0eTogcmVzcG9uc2UuZGF0YS5tYWluLmh1bWlkaXR5XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIHByb3BzLm9uTm90Rm91bmQoKTtcclxuICAgICAgICAgIHByb3BzLm9uRGVsZXRlKGNpdHlOYW1lKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIH0sIFtjaXR5TmFtZV0pO1xyXG4gICAgICBcclxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzbWFsbERpdlwiPiA8c3R5bGUganN4IGdsb2JhbD4ge2BcclxuICAgIC5zbWFsbERpdiB7XHJcbiAgICBcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3gtc2hhZG93OiA5cHggMTBweCAxNnB4IC0xMnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNEU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbERpdjo6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgXHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0IHVybChcIi9jbG91ZC5wbmdcIik7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcbiAgXHJcbiAgLmRlbFNwYW4ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBjb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICBcclxuICB9XHJcbiAgLmRlbFNwYW46OmJlZm9yZSwgLmRlbFNwYW46OmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgXHJcbiAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICB9XHJcbiAgICAuZGVsU3Bhbjo6YmVmb3JlIHtcclxuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgIC5kZWxTcGFuOjphZnRlciB7XHJcbiAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8cD7Qk9C+0YDQvtC0OiB7cHJvcHMuZGF0YX08L3A+XHJcbiAgICAgICAgICAgIDxwPtCi0LXQvNC/0LXRgNCw0YLRg9GA0LA6IHt3ZWF0aGVyLnRlbXB9IEM8L3A+XHJcbiAgICAgICAgICAgIDxwPtCS0LvQsNC20L3QvtGB0YLRjDoge3dlYXRoZXIuaHVtaWRpdHl9PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZWxTcGFuXCIgb25DbGljaz17KCkgPT4gcHJvcHMub25EZWxldGUoY2l0eU5hbWUpfT5YPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT25lQ2l0eTsiXX0= */\n/*@ sourceURL=D:\\\\node-projects\\\\my-page\\\\pages\\\\WeatherWidget\\\\components\\\\OneCity.js */"), __jsx("p", {
    className: "jsx-2530886791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u0413\u043E\u0440\u043E\u0434: ", props.data), __jsx("p", {
    className: "jsx-2530886791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ", weather.temp, " C"), __jsx("p", {
    className: "jsx-2530886791",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u0412\u043B\u0430\u0436\u043D\u043E\u0441\u0442\u044C: ", weather.humidity), __jsx("span", {
    onClick: () => props.onDelete(cityName),
    className: "jsx-2530886791" + " " + "delSpan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "X"));
}

/* harmony default export */ __webpack_exports__["default"] = (OneCity);

/***/ }),

/***/ "./pages/WeatherWidget/components/Widget.js":
/*!**************************************************!*\
  !*** ./pages/WeatherWidget/components/Widget.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OneCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneCity */ "./pages/WeatherWidget/components/OneCity.js");
/* harmony import */ var _NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotFound */ "./pages/WeatherWidget/components/NotFound.js");
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\WeatherWidget\\components\\Widget.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Widget() {
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Nizhny Novgorod');
  const {
    0: aCities,
    1: setACities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: b404,
    1: setB404
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function addCity() {
    if (!isCityinList()) {
      let aNewCities = aCities.concat(city);
      setACities(aNewCities);
    } else alert("Город уже есть!");
  }

  ;

  function isCityinList() {
    return aCities.lastIndexOf(city) < 0 ? false : true;
  }

  const deleteItem = function (cityKey) {
    setACities(aCities.slice(0, aCities.lastIndexOf(cityKey)).concat(aCities.slice(aCities.lastIndexOf(cityKey) + 1)));
  };

  const show404Banner = function () {
    return b404 ? __jsx(_NotFound__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClose: () => setB404(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }) : undefined;
  };

  function showCitiesDivs(aCities) {
    return aCities.map(sCityName => __jsx(_OneCity__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: sCityName,
      key: sCityName,
      onDelete: cityKey => deleteItem(cityKey),
      onNotFound: () => setB404(true),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  }

  ;
  return __jsx("div", {
    className: "outerDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Weather widget"), __jsx("p", {
    className: "p_pseudoForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    value: city,
    onChange: event => {
      setCity(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    value: "Add city",
    onClick: addCity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, showCitiesDivs(aCities)), show404Banner());
}

/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./pages/WeatherWidget/index.js":
/*!**************************************!*\
  !*** ./pages/WeatherWidget/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Widget */ "./pages/WeatherWidget/components/Widget.js");
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\WeatherWidget\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function App() {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["HashRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2918699333",
    __self: this
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\", \"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#071421;color:rgb(162,175,187);}.App{text-align:center;}.outerDiv{position:relative;}.p_pseudoForm{margin:0px calc(30vw);width:40vw;}.p_pseudoForm input{border:1px solid #555;background-color:rgb(159,172,185);padding:5px;box-shadow:9px 10px 16px -12px rgba(0,0,0,0.75);color:#11212F;font-family:inherit;}.p_pseudoForm input:nth-of-type(1){width:80%;}.p_pseudoForm input:nth-of-type(2){background-color:#AB9576;color:#493517;}.outerDiv h1{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcV2VhdGhlcldpZGdldFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU21CLEFBR1ksQUFXUyxBQU9BLEFBSUksQUFLQSxBQVNaLEFBTWUsQUFLUCxTQTVDTixDQW1DZCxRQTFCQSxBQU9BLEFBNkJBLElBekJhLEFBS3lCLEdBZXRCLFFBbkJoQixNQXFCQSxpQkFoQmMsWUFDb0MsZ0RBQ2xDLGNBQ00sb0JBRXRCLFNBOUJxQyxtQ0FDRCxrQ0FDVCx5QkFDQSx1QkFDM0IiLCJmaWxlIjoiRDpcXG5vZGUtcHJvamVjdHNcXG15LXBhZ2VcXHBhZ2VzXFxXZWF0aGVyV2lkZ2V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL2NvbXBvbmVudHMvV2lkZ2V0XCI7IFxuXG5mdW5jdGlvbiBBcHAoKSB7IFxuXG4gIHJldHVybiAoXG4gICAgPEhhc2hSb3V0ZXI+ICAgXG48c3R5bGUgZ2xvYmFsIGpzeD57YFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLFxuICAgIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsXG4gICAgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzE0MjE7XG4gIGNvbG9yOiByZ2IoMTYyLCAxNzUsIDE4Nyk7XG59XG5cbi5BcHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG4ub3V0ZXJEaXYge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBfcHNldWRvRm9ybSB7XG4gIG1hcmdpbjogMHB4IGNhbGMoMzB2dyk7XG4gIHdpZHRoOiA0MHZ3O1xufVxuXG4ucF9wc2V1ZG9Gb3JtIGlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1OSwgMTcyLCAxODUpO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDlweCAxMHB4IDE2cHggLTEycHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgY29sb3I6ICMxMTIxMkY7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBcbn1cbi5wX3BzZXVkb0Zvcm0gaW5wdXQ6bnRoLW9mLXR5cGUoMSkge1xuICB3aWR0aDogODAlO1xuXG59XG5cblxuLnBfcHNldWRvRm9ybSBpbnB1dDpudGgtb2YtdHlwZSgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQjk1NzY7XG4gIGNvbG9yOiAjNDkzNTE3O1xuXG59XG4ub3V0ZXJEaXYgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmB9PC9zdHlsZT4gICAgICAgIFxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtXaWRnZXR9IC8+ICAgICBcbiAgICA8L0hhc2hSb3V0ZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=D:\\\\node-projects\\\\my-page\\\\pages\\\\WeatherWidget\\\\index.js */"), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _components_Widget__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./pages/WeatherWidget/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\node-projects\my-page\pages\WeatherWidget\index.js */"./pages/WeatherWidget/index.js");


/***/ }),

/***/ "@babel/types":
/*!*******************************!*\
  !*** external "@babel/types" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/types");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=WeatherWidget.js.map