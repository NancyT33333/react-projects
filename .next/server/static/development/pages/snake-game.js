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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/snake-game/components/Board.js":
/*!**********************************************!*\
  !*** ./pages/snake-game/components/Board.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pixel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pixel */ "./pages/snake-game/components/Pixel.js");
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\components\\Board.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Board(props) {
  const isEqual = function (a, b) {
    // if length is not equal 
    if (a.length != b.length) {
      return false;
    } else {
      // comapring each element of array 
      for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
      }

      return true;
    }
  };

  const showPixels = function () {
    return props.state.board.map(function (el, index) {
      const coord = [Math.floor(index / 10), index % 10]; // проверка в apples наличия el, штриховка красным 

      if (isEqual(props.state.apples, coord)) {
        return __jsx(_Pixel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          el: index,
          className: "apple",
          key: index,
          coord: coord,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        });
      } // проверка в rocks наличия el, штриховка черным 


      if (props.state.rocks.find(el => {
        return isEqual(el, coord);
      })) {
        return __jsx(_Pixel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          el: index,
          className: "rock",
          key: index,
          coord: coord,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      }

      if (props.state.snake.find(el => {
        return isEqual(el, coord);
      })) {
        return __jsx(_Pixel__WEBPACK_IMPORTED_MODULE_1__["default"], {
          el: index,
          className: "snake",
          key: index,
          coord: coord,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        });
      }

      return __jsx(_Pixel__WEBPACK_IMPORTED_MODULE_1__["default"], {
        el: index,
        key: index,
        coord: coord,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      });
    });
  };

  return __jsx("div", {
    className: "Board",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, showPixels());
}

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./pages/snake-game/components/Keyboard.js":
/*!*************************************************!*\
  !*** ./pages/snake-game/components/Keyboard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\components\\Keyboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Keyboard(props) {
  const handleClick = function (dir) {
    props.dir.setDirection(dir);
  };

  return __jsx("div", {
    className: "keyboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    type: "button",
    className: "keyboard-inner-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("button", {
    className: "btn-arrow",
    onClick: () => {
      handleClick('up');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " \u2191 ")), __jsx("div", {
    className: "keyboard-inner-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "btn-arrow ",
    onClick: () => {
      handleClick('left');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "  \u2190 "), __jsx("button", {
    type: "button",
    className: "btn-arrow ",
    onClick: () => {
      handleClick('right');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, " \u2192 ")), __jsx("div", {
    className: "keyboard-inner-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    onClick: () => {
      handleClick('down');
    },
    className: "btn-arrow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, " \u2193 ")));
}

/***/ }),

/***/ "./pages/snake-game/components/LostWindow.js":
/*!***************************************************!*\
  !*** ./pages/snake-game/components/LostWindow.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LostWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\components\\LostWindow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function LostWindow(props) {
  return __jsx("div", {
    className: "lost-window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("button", {
    onClick: props.onPressStartAgain,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ }),

/***/ "./pages/snake-game/components/Pixel.js":
/*!**********************************************!*\
  !*** ./pages/snake-game/components/Pixel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\components\\Pixel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Pixel(props) {
  const cssClass = "Pixel " + props.className;
  return __jsx("div", {
    className: cssClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Pixel);

/***/ }),

/***/ "./pages/snake-game/components/Start.js":
/*!**********************************************!*\
  !*** ./pages/snake-game/components/Start.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartGame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\components\\Start.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function StartGame(props) {
  return __jsx("button", {
    className: "start-button",
    type: "button",
    onClick: props.onStart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Start the Game");
}

/***/ }),

/***/ "./pages/snake-game/index.jsx":
/*!************************************!*\
  !*** ./pages/snake-game/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ "./pages/snake-game/components/Board.js");
/* harmony import */ var _components_Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Keyboard */ "./pages/snake-game/components/Keyboard.js");
/* harmony import */ var _components_Start__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Start */ "./pages/snake-game/components/Start.js");
/* harmony import */ var _components_LostWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LostWindow */ "./pages/snake-game/components/LostWindow.js");
var _jsxFileName = "D:\\node-projects\\my-page\\pages\\snake-game\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import './App.css';






function App() {
  const {
    0: apples,
    1: setApples
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([1, 8]);
  const {
    0: rocks,
    1: setRocks
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([[0, 1]]);
  const {
    0: snake,
    1: setSnake
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([[1, 2], [1, 3], [1, 4]]);
  const {
    0: direction,
    1: setDirection
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("right");
  const {
    0: bLost,
    1: setBLost
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const snakeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(snake);
  snakeRef.current = snake;
  const dirRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(direction);
  dirRef.current = direction;
  const applesRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(apples);
  applesRef.current = apples;
  const {
    0: fieldWidth,
    1: setFieldWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(10);

  const bArrEqual = function (a, b) {
    // if length is not equal 
    if (a.length != b.length) {
      return false;
    } else {
      // comparing each element of array 
      for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
      }

      return true;
    }
  }; //============================================================================


  const onStart = function () {
    let timerId = setTimeout(function move() {
      //=============================start of move======================================
      let tmp_snake, nextStep;
      let snake = snakeRef.current;
      setSnake([[1, 2], [1, 3], [1, 4]]); // resetting to default value
      //============================start of check collision==============================

      const checkCollison = function () {
        // returns true if collision
        switch (dirRef.current) {
          case "right":
            nextStep = [snake[snake.length - 1][0], snake[snake.length - 1][1] + 1];

            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep)) {
                return true;
              }
            }

            return checkForSelfCollision(nextStep) ? true : false;

          case "down":
            nextStep = [snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]];

            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep)) {
                return true;
              }
            }

            return checkForSelfCollision(nextStep) ? true : false;

          case "left":
            nextStep = [snake[snake.length - 1][0], snake[snake.length - 1][1] - 1];

            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep)) {
                return true;
              }
            }

            return checkForSelfCollision(nextStep) ? true : false;

          case "up":
            nextStep = [snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]];

            for (let i = 0; i < rocks.length; i++) {
              if (bArrEqual(rocks[i], nextStep)) {
                return true;
              }
            }

            return checkForSelfCollision(nextStep) ? true : false;
        }
      };

      const checkForSelfCollision = function (nextStep) {
        for (let j = 0; j < snake.length; j++) {
          if (bArrEqual(nextStep, snake[j])) {
            return true;
          }

          ;
        }

        return false;
      }; //===========================end of check for collision===========================


      switch (dirRef.current) {
        case "right":
          if (snake[snake.length - 1][1] + 1 !== fieldWidth && !checkCollison()) {
            tmp_snake = snake.slice(1);
            tmp_snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] + 1]);
            setSnake(tmp_snake);
            timerId = setTimeout(move, 500);
            break;
          } else {
            alert("you loose!"); // setBLost(true);

            return;
          }

        case "down":
          if (snake[snake.length - 1][0] + 1 !== fieldWidth && !checkCollison()) {
            tmp_snake = snake.slice(1);
            tmp_snake.push([snake[snake.length - 1][0] + 1, snake[snake.length - 1][1]]);
            setSnake(tmp_snake);
            timerId = setTimeout(move, 500);
            break;
          } else {
            alert("you loose!"); // setBLost(true);

            return;
          }

        case "left":
          if (snake[snake.length - 1][1] - 1 !== -1 && !checkCollison()) {
            tmp_snake = snake.slice(1);
            tmp_snake.push([snake[snake.length - 1][0], snake[snake.length - 1][1] - 1]);
            setSnake(tmp_snake);
            timerId = setTimeout(move, 500);
            break;
          } else {
            alert("you loose!"); // setBLost(true);

            return;
          }

        case 'up':
          if (snake[snake.length - 1][0] - 1 !== -1 && !checkCollison()) {
            // const next_step = ...; checkCollision(next_step), checkApple(next_step)
            tmp_snake = snake.slice(1);
            tmp_snake.push([snake[snake.length - 1][0] - 1, snake[snake.length - 1][1]]);
            setSnake(tmp_snake);
            timerId = setTimeout(move, 500);
            break;
          } else {
            alert("you loose!"); // setBLost(true);

            return;
          }

      } //=====================logic for eating apples==============================


      const lastAddedPixel = [tmp_snake[tmp_snake.length - 1][0], tmp_snake[tmp_snake.length - 1][1]];

      if (bArrEqual(applesRef.current, lastAddedPixel)) {
        //if last added pixel was an apple - grow          
        setSnake([snake[0], ...tmp_snake]); // !! 

        function createApple() {
          const x = random(0, 9);
          const y = random(0, 9);
          setApples([x, y]);
          tmp_snake.concat(rocks).forEach(function isAppleOnSnake(part) {
            const foodIsOnSnake = part[0] == applesRef.current[0] && part[1] == applesRef.current[1];

            if (foodIsOnSnake) {
              createApple();
            }

            ;
          });
        }

        createApple();
      } //====================end of move================================

    }, 500);
  };

  function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function showLostWindow() {
    return bLost ? __jsx(_components_LostWindow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onPressStartAgain: () => {
        setBLost(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }) : null;
  }

  function onKeyPressed(key) {
    switch (key) {
      case 'ArrowUp':
        return 'up';

      case 'ArrowDown':
        return 'down';

      case 'ArrowLeft':
        return 'left';

      case 'ArrowRight':
        return 'right';
    }
  }

  return __jsx("div", {
    onKeyDown: e => setDirection(onKeyPressed(e.key)),
    tabIndex: "0",
    className: "jsx-2979291694" + " " + "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2979291694",
    __self: this
  }, ".App{text-align:center;display:block;}body{margin:0;font-family:'VT323',monospace;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background:black;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\", monospace;}.Pixel{width:10px;height:10px;border:1.5px solid white;display:inline-block;margin:0px;}.apple{background-color:#F20505;border-radius:50%;}.rock{background-color:gray;border-radius:50%;}.snake{background-color:#15ff00;}.Board{width:130px;height:130px;display:block;margin:13vh auto 5vh;line-height:0%;}.white{background:white;}.keyboard{position:fixed;left:0;top:50%;width:100%;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.keyboard-inner-box{width:135px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.keyboard-inner-box:nth-of-type(2){-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.btn-arrow{padding:0 20px;font-family:'VT323',monospace;font-size:1.5rem;color:#A9A9A9;width:35px;height:44px;border-radius:0%;text-indent:-8px;}.start-button{color:#03FE03;font-size:2em;font-family:'VT323',monospace;-webkit-text-decoration:underline;text-decoration:underline;background-color:rgba(0,0,0,0);}.lost-window{display:block;width:150px;height:150px;position:fixed;background-color:#33414E;text-align:center;bottom:calc(50% - 75px);left:calc(50% - 75px);box-shadow:9px 10px 16px -12px rgba(0,0,0,0.75);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcc25ha2UtZ2FtZVxcaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStNNEIsQUFHMkIsQUFLVCxBQWNFLEFBSUEsQUFRYyxBQUtILEFBTUcsQUFJYixBQVVLLEFBS0YsQUFnQkgsQUFPa0IsQUFJZixBQVlELEFBU0UsU0FuR2lCLEVBY3JCLENBdUJDLEFBK0JBLEVBdUJDLEFBU0EsQ0FoRFAsQUEyQndCLEVBaENqQyxDQXhEZ0IsSUFvQ0ksQUEwQlYsQ0F0Q2lCLEVBT1AsQUFXcEIsQUFNZ0IsQ0E4REMsRUFUZ0IsRUF0Q3BCLEVBN0RiLE9BU3FDLEFBc0NkLEFBOERKLENBekVuQixDQTJCZ0IsRUFqQ2hCLEVBeURtQixHQWhFSSxNQXdGTSxDQS9DZCxHQW9DYSxFQXBEWCxFQXdDQSxPQWhFSixLQWR1QixDQU9wQyxBQWlDQSxDQXVDYSxHQXVCUyxDQXZGdEIsTUFtRHlCLENBY1gsVUF1QmMsRUF0QlQsU0FoRkEsT0F1RW5CLENBVW1CLEVBU2MsR0FhUCxJQXRHMUIsSUFxRHlCLElBNkJ6QixVQXFCb0QsTUFicEQsb0NBeEJBLE1Bc0NBLHFDQWxEd0IsOEVBQ0gsNkZBR3JCIiwiZmlsZSI6IkQ6XFxub2RlLXByb2plY3RzXFxteS1wYWdlXFxwYWdlc1xcc25ha2UtZ2FtZVxcaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgJy4vQXBwLmNzcyc7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL0JvYXJkJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvS2V5Ym9hcmQnO1xuaW1wb3J0IFN0YXJ0R2FtZSBmcm9tICcuL2NvbXBvbmVudHMvU3RhcnQnO1xuaW1wb3J0IExvc3RXaW5kb3cgZnJvbSAnLi9jb21wb25lbnRzL0xvc3RXaW5kb3cnO1xuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgXG4gIGNvbnN0IFthcHBsZXMsIHNldEFwcGxlc10gPSB1c2VTdGF0ZShbMSw4XSk7XG4gIGNvbnN0IFtyb2Nrcywgc2V0Um9ja3NdID0gdXNlU3RhdGUoW1swLDFdXSk7XG4gIGNvbnN0IFtzbmFrZSwgc2V0U25ha2VdID0gIHVzZVN0YXRlKFtbMSwyXSwgWzEsM10sIFsxLDRdXSk7XG4gIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZSAoXCJyaWdodFwiKTtcbiAgY29uc3QgW2JMb3N0LCBzZXRCTG9zdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNuYWtlUmVmID0gdXNlUmVmKHNuYWtlKTtcbiAgc25ha2VSZWYuY3VycmVudCA9IHNuYWtlO1xuICBjb25zdCBkaXJSZWYgPSB1c2VSZWYoZGlyZWN0aW9uKTtcbiAgZGlyUmVmLmN1cnJlbnQgPSBkaXJlY3Rpb247XG4gIGNvbnN0IGFwcGxlc1JlZiA9IHVzZVJlZihhcHBsZXMpO1xuICBhcHBsZXNSZWYuY3VycmVudCA9IGFwcGxlcztcbiAgY29uc3QgW2ZpZWxkV2lkdGgsIHNldEZpZWxkV2lkdGhdID0gdXNlU3RhdGUoMTApOyAgXG5cbiAgY29uc3QgYkFyckVxdWFsID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBpZiBsZW5ndGggaXMgbm90IGVxdWFsIFxuICAgIGlmKCBhLmxlbmd0aCAhPSBiLmxlbmd0aCApIHtcbiAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgICB9XG4gICAgZWxzZVxuICAgIHsgXG4gICAgLy8gY29tcGFyaW5nIGVhY2ggZWxlbWVudCBvZiBhcnJheSBcbiAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICBpZiggYVtpXSAhPSBiW2ldICkgXG4gICAgICAgICAgcmV0dXJuIGZhbHNlOyBcbiAgICAgICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTsgXG4gICAgfSBcbiAgfVxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7ICBcbiAgICBsZXQgdGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gbW92ZSAoKSB7XG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PXN0YXJ0IG9mIG1vdmU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgbGV0IHRtcF9zbmFrZSwgbmV4dFN0ZXAgO1xuICAgICAgbGV0IHNuYWtlID0gc25ha2VSZWYuY3VycmVudDtcbiAgICAgIHNldFNuYWtlKFtbMSwyXSwgWzEsM10sIFsxLDRdXSk7ICAvLyByZXNldHRpbmcgdG8gZGVmYXVsdCB2YWx1ZVxuXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT1zdGFydCBvZiBjaGVjayBjb2xsaXNpb249PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGNvbnN0IGNoZWNrQ29sbGlzb24gPSBmdW5jdGlvbiAoKSB7IC8vIHJldHVybnMgdHJ1ZSBpZiBjb2xsaXNpb25cbiAgICAgICAgc3dpdGNoIChkaXJSZWYuY3VycmVudCkge1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgbmV4dFN0ZXAgPSBbc25ha2Vbc25ha2UubGVuZ3RoLTFdWzBdLCBzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMV0rMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChiQXJyRXF1YWwocm9ja3NbaV0sIG5leHRTdGVwICkpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWUgXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrRm9yU2VsZkNvbGxpc2lvbihuZXh0U3RlcCkgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgIGNhc2UgXCJkb3duXCI6ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIG5leHRTdGVwID0gW3NuYWtlW3NuYWtlLmxlbmd0aC0xXVswXSsxLCBzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMV1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBpZiAoYkFyckVxdWFsKHJvY2tzW2ldLCBuZXh0U3RlcCApKSB7XG4gICAgICAgICAgICAgICAgIHJldHVybiB0cnVlIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrRm9yU2VsZkNvbGxpc2lvbihuZXh0U3RlcCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgY2FzZSBcImxlZnRcIjogICAgICAgICAgICBcblxuICAgICAgICAgICAgbmV4dFN0ZXAgPSBbc25ha2Vbc25ha2UubGVuZ3RoLTFdWzBdLCBzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMV0tMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChiQXJyRXF1YWwocm9ja3NbaV0sIG5leHRTdGVwICkpIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWUgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrRm9yU2VsZkNvbGxpc2lvbihuZXh0U3RlcCkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgY2FzZSBcInVwXCI6ICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBuZXh0U3RlcCA9IFtzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMF0tMSwgc25ha2Vbc25ha2UubGVuZ3RoLTFdWzFdXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9ja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGJBcnJFcXVhbChyb2Nrc1tpXSwgbmV4dFN0ZXAgKSkge1xuICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjaGVja0ZvclNlbGZDb2xsaXNpb24obmV4dFN0ZXApID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjaGVja0ZvclNlbGZDb2xsaXNpb24gPSBmdW5jdGlvbiAobmV4dFN0ZXApIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzbmFrZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGlmIChiQXJyRXF1YWwobmV4dFN0ZXAsIHNuYWtlW2pdKSkgeyByZXR1cm4gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH07XG5cbiAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09ZW5kIG9mIGNoZWNrIGZvciBjb2xsaXNpb249PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIHN3aXRjaCAoZGlyUmVmLmN1cnJlbnQpIHtcbiAgICAgIFxuICAgICAgICBjYXNlIFwicmlnaHRcIjogICAgIFxuICAgICAgICAgICAgaWYgKChzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMV0rMSAhPT0gZmllbGRXaWR0aCkgJiYgKCFjaGVja0NvbGxpc29uKCkpKSB7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRtcF9zbmFrZSA9IHNuYWtlLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB0bXBfc25ha2UucHVzaChbc25ha2Vbc25ha2UubGVuZ3RoLTFdWzBdLCBzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMV0rMV0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICBzZXRTbmFrZSh0bXBfc25ha2UpOyAgICAgICAgICAgXG4gICAgICAgICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KG1vdmUsIDUwMCk7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwieW91IGxvb3NlIVwiKTtcbiAgICAgICAgICAgIC8vIHNldEJMb3N0KHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgIGlmICgoc25ha2Vbc25ha2UubGVuZ3RoLTFdWzBdKzEgIT09IGZpZWxkV2lkdGgpICYmICghY2hlY2tDb2xsaXNvbigpKSkgeyAgICAgICAgICAgIFxuICAgICAgICAgICAgdG1wX3NuYWtlID0gc25ha2Uuc2xpY2UoMSk7XG4gICAgICAgICAgICB0bXBfc25ha2UucHVzaChbc25ha2Vbc25ha2UubGVuZ3RoLTFdWzBdKzEsIHNuYWtlW3NuYWtlLmxlbmd0aC0xXVsxXV0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0U25ha2UodG1wX3NuYWtlKTsgICAgICAgICAgIFxuICAgICAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQobW92ZSwgNTAwKTsgICAgICAgICAgIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJ5b3UgbG9vc2UhXCIpO1xuICAgICAgICAgIC8vIHNldEJMb3N0KHRydWUpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgIGlmICggKHNuYWtlW3NuYWtlLmxlbmd0aC0xXVsxXS0xICE9PSAtMSkgJiYgIWNoZWNrQ29sbGlzb24oKSApIHsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdG1wX3NuYWtlID0gc25ha2Uuc2xpY2UoMSk7XG4gICAgICAgICAgICAgIHRtcF9zbmFrZS5wdXNoKFtzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMF0sIHNuYWtlW3NuYWtlLmxlbmd0aC0xXVsxXS0xXSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNldFNuYWtlKHRtcF9zbmFrZSk7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQobW92ZSwgNTAwKTsgICAgICAgICAgIFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJ5b3UgbG9vc2UhXCIpO1xuICAgICAgICAgICAgLy8gc2V0Qkxvc3QodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICAgIGlmICggKHNuYWtlW3NuYWtlLmxlbmd0aC0xXVswXS0xICE9PSAtMSkgJiYgKCFjaGVja0NvbGxpc29uKCkpICkgeyAgIFxuICAgICAgICAgICAgICAvLyBjb25zdCBuZXh0X3N0ZXAgPSAuLi47IGNoZWNrQ29sbGlzaW9uKG5leHRfc3RlcCksIGNoZWNrQXBwbGUobmV4dF9zdGVwKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgdG1wX3NuYWtlID0gc25ha2Uuc2xpY2UoMSk7XG4gICAgICAgICAgICAgIHRtcF9zbmFrZS5wdXNoKFtzbmFrZVtzbmFrZS5sZW5ndGgtMV1bMF0tMSwgc25ha2Vbc25ha2UubGVuZ3RoLTFdWzFdXSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNldFNuYWtlKHRtcF9zbmFrZSk7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQobW92ZSwgNTAwKTsgICAgICAgICAgIFxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJ5b3UgbG9vc2UhXCIpO1xuICAgICAgICAgICAgLy8gc2V0Qkxvc3QodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgIH1cbiAgICAgIC8vPT09PT09PT09PT09PT09PT09PT09bG9naWMgZm9yIGVhdGluZyBhcHBsZXM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgIGNvbnN0IGxhc3RBZGRlZFBpeGVsID0gW3RtcF9zbmFrZVt0bXBfc25ha2UubGVuZ3RoLTFdWzBdLCB0bXBfc25ha2VbdG1wX3NuYWtlLmxlbmd0aC0xXVsxXV07XG4gICAgIFxuICAgICAgICBpZiAoYkFyckVxdWFsKGFwcGxlc1JlZi5jdXJyZW50LCBsYXN0QWRkZWRQaXhlbCkpIHsgICAgICAgICAgICAvL2lmIGxhc3QgYWRkZWQgcGl4ZWwgd2FzIGFuIGFwcGxlIC0gZ3JvdyAgICAgICAgICBcbiAgICAgICAgICAgIHNldFNuYWtlKFtzbmFrZVswXSwgLi4udG1wX3NuYWtlXSk7ICAgLy8gISEgXG4gICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcHBsZSgpIHsgIFxuICAgICAgICAgICAgICBjb25zdCB4ID0gcmFuZG9tKDAsIDkpO1xuICAgICAgICAgICAgICBjb25zdCB5ID0gcmFuZG9tKDAsIDkpOyAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHNldEFwcGxlcyggW3gseV0pO1xuICAgICAgICAgICAgICB0bXBfc25ha2UuY29uY2F0KHJvY2tzKS5mb3JFYWNoKGZ1bmN0aW9uIGlzQXBwbGVPblNuYWtlKHBhcnQpIHsgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZm9vZElzT25TbmFrZSA9IHBhcnRbMF0gPT0gYXBwbGVzUmVmLmN1cnJlbnRbMF0gJiYgcGFydFsxXSA9PSBhcHBsZXNSZWYuY3VycmVudFsxXSA7IFxuICAgICAgICAgICAgICAgICBpZiAoZm9vZElzT25TbmFrZSkgICB7ICAgY3JlYXRlQXBwbGUoKTsgIH07XG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgY3JlYXRlQXBwbGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIFxuXG4gICAgICAvLz09PT09PT09PT09PT09PT09PT09ZW5kIG9mIG1vdmU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIH0sIDUwMCk7XG4gIH1cbiAgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7IFxuICAgIHJldHVybiBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogKG1heC1taW4pICsgbWluKSk7XG4gIH1cblxuIFxuIFxuXG4gIGZ1bmN0aW9uIHNob3dMb3N0V2luZG93ICgpIHtcbiAgICByZXR1cm4gYkxvc3QgPyA8TG9zdFdpbmRvdyBvblByZXNzU3RhcnRBZ2Fpbj17KCk9PntzZXRCTG9zdChmYWxzZSl9fT48L0xvc3RXaW5kb3c+IDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5UHJlc3NlZChrZXkpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIHJldHVybiAndXAnO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICByZXR1cm4gJ3JpZ2h0JztcbiAgICB9XG4gIH1cblxuICBcbiAgcmV0dXJuIChcbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCIgb25LZXlEb3duID0geyhlKSA9PiBzZXREaXJlY3Rpb24ob25LZXlQcmVzc2VkKGUua2V5KSl9IHRhYkluZGV4PVwiMFwiPlxuICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIC5BcHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgXG4gICAgICB9XG4gICAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAvKiBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsXG4gICAgICAgICAgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICAgICAgICBzYW5zLXNlcmlmOyAqL1xuICAgICAgXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdWVDMyMycsIG1vbm9zcGFjZTtcbiAgICAgIFxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvZGUge1xuICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLFxuICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLlBpeGVsIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmFwcGxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyMDUwNTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucm9jayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zbmFrZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNWZmMDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5Cb2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDEzdmggYXV0byA1dmg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwJTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAud2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmtleWJvYXJkIHtcbiAgICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAua2V5Ym9hcmQtaW5uZXItYm94IHtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiAxMzVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAua2V5Ym9hcmQtaW5uZXItYm94Om50aC1vZi10eXBlKDIpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuLWFycm93IHtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1ZUMzIzJywgbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IFx0I0E5QTlBOTtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCU7XG4gICAgICAgIHRleHQtaW5kZW50OiAtOHB4O1xuICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zdGFydC1idXR0b24ge1xuICAgICAgICBjb2xvcjogIzAzRkUwMztcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVlQzMjMnLCBtb25vc3BhY2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgfVxuICAgICAgXG4gICAgICAubG9zdC13aW5kb3cge1xuICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM0MTRFO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3R0b206IGNhbGMoNTAlIC0gNzVweCk7XG4gICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSA3NXB4KTsgICBcbiAgICAgICAgICBib3gtc2hhZG93OiA5cHggMTBweCAxNnB4IC0xMnB4IHJnYmEoMCwwLDAsMC43NSk7XG4gICAgICB9XG4gICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8U3RhcnRHYW1lIG9uU3RhcnQ9e29uU3RhcnR9PjwvU3RhcnRHYW1lPlxuICAgICAgICAgIDxCb2FyZCBzdGF0ZT17e2JvYXJkOiBBcnJheSgxMDApLmZpbGwoMCksXG4gICAgICAgICAgICAgIGFwcGxlcyxcbiAgICAgICAgICAgICAgcm9ja3MsXG4gICAgICAgICAgICAgIHNuYWtlLFxuICAgICAgICAgICAgICBzZXRBcHBsZXMsXG4gICAgICAgICAgICAgIHNldFJvY2tzLFxuICAgICAgICAgICAgICBzZXRTbmFrZSwgZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25cbiAgICAgICAgICAgICAgfX0gPiAgPC9Cb2FyZD5cblxuICAgICAgICAgICAgPEtleWJvYXJkIGRpcj17e2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9ufX0gIC8+XG5cbiAgICAgICAgICAgIHtzaG93TG9zdFdpbmRvdygpfSAgey8qIGlzIGl0IGxlZ2FsPyAqL31cbiAgICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=D:\\\\node-projects\\\\my-page\\\\pages\\\\snake-game\\\\index.jsx */"), __jsx(_components_Start__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onStart: onStart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }), __jsx(_components_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    state: {
      board: Array(100).fill(0),
      apples,
      rocks,
      snake,
      setApples,
      setRocks,
      setSnake,
      direction,
      setDirection
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "  "), __jsx(_components_Keyboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dir: {
      direction,
      setDirection
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }), showLostWindow(), "  ");
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./pages/snake-game/index.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\node-projects\my-page\pages\snake-game\index.jsx */"./pages/snake-game/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=snake-game.js.map