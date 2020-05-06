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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/common/hoc/withStyle.jsx":
/*!*************************************************!*\
  !*** ./src/components/common/hoc/withStyle.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((wrapperComponent, styles) => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(wrapperComponent).withConfig({
  displayName: "withStyle",
  componentId: "sc-1y71933-0"
})(["", ";"], styles));

/***/ }),

/***/ "./src/components/features/Burger/container/Burger.container.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/features/Burger/container/Burger.container.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views */ "./src/components/features/Burger/views/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Burger extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "ingredientsHandler", (name, action) => {
      if (action === "More") {
        const ingredients = _objectSpread({}, this.state.ingredients);

        ingredients[name] = ingredients[name] + 1;
        this.setState({
          ingredients
        });
      } else {
        const ingredients = _objectSpread({}, this.state.ingredients);

        ingredients[name] = ingredients[name] > 0 ? ingredients[name] - 1 : ingredients[name] = 0;
        this.setState({
          ingredients
        });
      } // console.log(this.state);

    });

    this.state = {
      ingredients: {
        Meat: 0,
        Cheese: 0,
        Salad: 0,
        Bacon: 0
      }
    };
  }

  render() {
    return __jsx(_views__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ingredients: this.state.ingredients,
      ingredientsHandler: this.ingredientsHandler
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/features/Burger/container/index.js":
/*!***********************************************************!*\
  !*** ./src/components/features/Burger/container/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Burger_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Burger.container */ "./src/components/features/Burger/container/Burger.container.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Burger_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/index.js":
/*!*************************************************!*\
  !*** ./src/components/features/Burger/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/components/features/Burger/container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BuildControl/index.js":
/*!***********************************************************************!*\
  !*** ./src/components/features/Burger/organism/BuildControl/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/features/Burger/organism/BuildControl/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BuildControl/style/BuildControl.style.js":
/*!******************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BuildControl/style/BuildControl.style.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([".labelStyle{width:50px;display:inline-block;padding:5px;}button{background-color:transparent;color:", ";}"], props => props.theme.fontColor));

/***/ }),

/***/ "./src/components/features/Burger/organism/BuildControl/views/BuildControl.view.jsx":
/*!******************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BuildControl/views/BuildControl.view.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _style_BuildControl_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/BuildControl.style */ "./src/components/features/Burger/organism/BuildControl/style/BuildControl.style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BuildControl = ({
  className,
  label,
  ingredientsHandler
}) => {
  return __jsx("div", {
    className: className
  }, __jsx("label", {
    className: "labelStyle"
  }, label, ":"), __jsx("button", {
    onClick: () => ingredientsHandler(label, "More")
  }, "More"), __jsx("button", {
    onClick: () => ingredientsHandler(label, "Less")
  }, "Less"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(BuildControl, _style_BuildControl_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/features/Burger/organism/BuildControl/views/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BuildControl/views/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuildControl_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildControl.view */ "./src/components/features/Burger/organism/BuildControl/views/BuildControl.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BuildControl_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuildControls/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuildControls/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/features/Burger/organism/BurgerBuildControls/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuildControls/style/BurgerBuildControl.style.js":
/*!*******************************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuildControls/style/BurgerBuildControl.style.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;background-color:", ";margin-bottom:100px;text-align:center;padding:10px;.buildControl{width:200px;margin:0 auto;}"], props => props.theme.colors.orange["1000"]));

/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuildControls/views/BurgerBuildControls.view.jsx":
/*!********************************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuildControls/views/BurgerBuildControls.view.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_BurgerBuildControl_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/BurgerBuildControl.style */ "./src/components/features/Burger/organism/BurgerBuildControls/style/BurgerBuildControl.style.js");
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _BuildControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BuildControl */ "./src/components/features/Burger/organism/BuildControl/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BurgerBuildControls = ({
  className,
  ingredients,
  ingredientsHandler
}) => {
  const controls = Object.keys(ingredients).map((key, index) => {
    // console.log(index);
    return __jsx(_BuildControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: `${key}+${index}`,
      label: key,
      ingredientsHandler: ingredientsHandler
    });
  });
  return __jsx("div", {
    className: className
  }, __jsx("div", {
    className: "buildControl"
  }, controls));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(BurgerBuildControls, _style_BurgerBuildControl_style__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuildControls/views/index.js":
/*!************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuildControls/views/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurgerBuildControls_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurgerBuildControls.view */ "./src/components/features/Burger/organism/BurgerBuildControls/views/BurgerBuildControls.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BurgerBuildControls_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuilder/index.js":
/*!************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/features/Burger/organism/BurgerBuilder/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuilder/style/BurgerBuilder.style.js":
/*!********************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/style/BurgerBuilder.style.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["height:350px;width:60%;margin:10px auto;text-align:center;.BreadBottom{height:13%;width:80%;background:linear-gradient(#f08e4a,#e27b36);border-radius:0 0 30px 30px;box-shadow:inset -15px 0 #c15711;margin:2% auto;overflow:scroll;}.BreadTop{height:20%;width:80%;background:linear-gradient(#bc581e,#e27b36);border-radius:50% 50% 0 0;box-shadow:inset -15px 0 #c15711;margin:2% auto;position:relative;}.Seeds1{width:10%;height:15%;position:absolute;background-color:white;left:30%;top:50%;border-radius:40%;transform:rotate(-20deg);box-shadow:inset -2px -3px #c9c9c9;}.Seeds1:after{content:\"\";width:100%;height:100%;position:absolute;background-color:white;left:-170%;top:-260%;border-radius:40%;transform:rotate(60deg);box-shadow:inset -1px 2px #c9c9c9;}.Seeds1:before{content:\"\";width:100%;height:100%;position:absolute;background-color:white;left:180%;top:-50%;border-radius:40%;transform:rotate(60deg);box-shadow:inset -1px -3px #c9c9c9;}.Seeds2{width:10%;height:15%;position:absolute;background-color:white;left:64%;top:50%;border-radius:40%;transform:rotate(10deg);box-shadow:inset -3px 0 #c9c9c9;}.Seeds2:before{content:\"\";width:100%;height:100%;position:absolute;background-color:white;left:150%;top:-130%;border-radius:40%;transform:rotate(90deg);box-shadow:inset 1px 3px #c9c9c9;}.Meat{width:80%;height:8%;background:linear-gradient(#7f3608,#702e05);margin:2% auto;border-radius:15px;}.Cheese{width:90%;height:4.5%;margin:2% auto;background:linear-gradient(#f4d004,#d6bb22);border-radius:20px;}.Salad{width:85%;height:7%;margin:2% auto;background:linear-gradient(#228c1d,#91ce50);border-radius:20px;}.Bacon{width:80%;height:3%;background:linear-gradient(#bf3813,#c45e38);margin:2% auto;}"]));

/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx":
/*!********************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BurgerIngredient */ "./src/components/features/Burger/organism/BurgerIngredient/index.js");
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/BurgerBuilder.style */ "./src/components/features/Burger/organism/BurgerBuilder/style/BurgerBuilder.style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BurgerBuilder = ({
  className,
  ingredients
}) => {
  let transFormedIngredients = Object.keys(ingredients).map(key => {
    return [...Array(ingredients[key])].map((_, i) => {
      return __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: key + i,
        ingredientName: key
      });
    });
  }).reduce((arr, ele) => {
    return arr.concat(ele);
  }, []);

  if (transFormedIngredients.length === 0) {
    transFormedIngredients = __jsx("p", null, "Please start ingredients...");
  }

  return __jsx("div", {
    className: className
  }, __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ingredientName: "BreadTop"
  }), transFormedIngredients, __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ingredientName: "BreadBottom"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(BurgerBuilder, _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerBuilder/views/index.js":
/*!******************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/views/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurgerBuilder_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurgerBuilder.view */ "./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BurgerBuilder_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerIngredient/index.js":
/*!***************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerIngredient/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/features/Burger/organism/BurgerIngredient/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerIngredient/views/BurgerIngredient.view.jsx":
/*!**************************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerIngredient/views/BurgerIngredient.view.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BurgerIngredient = props => {
  return __jsx("div", {
    className: props.ingredientName
  });
};

BurgerIngredient.propTypes = {
  ingredientName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BurgerIngredient);

/***/ }),

/***/ "./src/components/features/Burger/organism/BurgerIngredient/views/index.js":
/*!*********************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerIngredient/views/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BurgerIngredient_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BurgerIngredient.view */ "./src/components/features/Burger/organism/BurgerIngredient/views/BurgerIngredient.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BurgerIngredient_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/Burger/views/burger.view.jsx":
/*!**************************************************************!*\
  !*** ./src/components/features/Burger/views/burger.view.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _organism_BurgerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../organism/BurgerBuilder */ "./src/components/features/Burger/organism/BurgerBuilder/index.js");
/* harmony import */ var _organism_BurgerBuildControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organism/BurgerBuildControls */ "./src/components/features/Burger/organism/BurgerBuildControls/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Burger = ({
  ingredients,
  ingredientsHandler
}) => {
  return __jsx("div", null, __jsx(_organism_BurgerBuilder__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ingredients: ingredients
  }), __jsx(_organism_BurgerBuildControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ingredients: ingredients,
    ingredientsHandler: ingredientsHandler
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/features/Burger/views/index.js":
/*!*******************************************************!*\
  !*** ./src/components/features/Burger/views/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.view */ "./src/components/features/Burger/views/burger.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _burger_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/burger/index.js":
/*!***********************************!*\
  !*** ./src/pages/burger/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_features_Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/features/Burger */ "./src/components/features/Burger/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_features_Burger__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ 6:
/*!*****************************************!*\
  !*** multi ./src/pages/burger/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rajjain0/MyComputer/MyPOCs/ReactJS/modern-burger-builder/src/pages/burger/index.js */"./src/pages/burger/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=burger.js.map