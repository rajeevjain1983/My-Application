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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/components/common/atoms/Button/index.js":
/*!*****************************************************!*\
  !*** ./src/components/common/atoms/Button/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/common/atoms/Button/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/Button/style/button.style.js":
/*!******************************************************************!*\
  !*** ./src/components/common/atoms/Button/style/button.style.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid ${props => props.theme.colors.common["black"]};
  border-radius: 5px;
`);

/***/ }),

/***/ "./src/components/common/atoms/Button/views/Button.view.jsx":
/*!******************************************************************!*\
  !*** ./src/components/common/atoms/Button/views/Button.view.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/button.style */ "./src/components/common/atoms/Button/style/button.style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _style_button_style__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/Button/views/index.js":
/*!***********************************************************!*\
  !*** ./src/components/common/atoms/Button/views/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.view */ "./src/components/common/atoms/Button/views/Button.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/Input/index.js":
/*!****************************************************!*\
  !*** ./src/components/common/atoms/Input/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/common/atoms/Input/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/Input/style/Input.style.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/common/atoms/Input/style/Input.style.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])([".error{color:red;}"]));

/***/ }),

/***/ "./src/components/common/atoms/Input/views/Input.view.jsx":
/*!****************************************************************!*\
  !*** ./src/components/common/atoms/Input/views/Input.view.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _style_Input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Input.style */ "./src/components/common/atoms/Input/style/Input.style.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Input = (_ref) => {
  let {
    className,
    label,
    type,
    input,
    meta: {
      touched,
      error
    }
  } = _ref,
      restProps = _objectWithoutProperties(_ref, ["className", "label", "type", "input", "meta"]);

  return __jsx("div", {
    className: className
  }, __jsx("label", null, label), __jsx("input", _extends({
    type: type
  }, input, {
    placeholder: label
  }, restProps)), touched && error && __jsx("span", {
    className: "error"
  }, error));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(Input, _style_Input_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/common/atoms/Input/views/index.js":
/*!**********************************************************!*\
  !*** ./src/components/common/atoms/Input/views/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.view */ "./src/components/common/atoms/Input/views/Input.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/ToggleButton/index.js":
/*!***********************************************************!*\
  !*** ./src/components/common/atoms/ToggleButton/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/components/common/atoms/ToggleButton/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/ToggleButton/style/ToggleButton.style.js":
/*!******************************************************************************!*\
  !*** ./src/components/common/atoms/ToggleButton/style/ToggleButton.style.js ***!
  \******************************************************************************/
/*! exports provided: ToggleWrapper, Notch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleWrapper", function() { return ToggleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notch", function() { return Notch; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ToggleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ToggleButtonstyle__ToggleWrapper",
  componentId: "sc-1crishg-0"
})(["width:50px;min-width:50px;height:25px;border-radius:25px;border:1px solid #666;display:flex;background-image:linear-gradient( to bottom,", ",", " );"], props => props.theme.primaryColor, props => props.theme.secondaryColor);
const Notch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ToggleButtonstyle__Notch",
  componentId: "sc-1crishg-1"
})(["width:21px;height:21px;border:1px solid #666;margin-top:1px;background:white;border-radius:50%;transition:transform 0.1s linear;transform:translate(", ");"], props => props.active ? "26px" : "1px");

/***/ }),

/***/ "./src/components/common/atoms/ToggleButton/views/ToggleButton.view.jsx":
/*!******************************************************************************!*\
  !*** ./src/components/common/atoms/ToggleButton/views/ToggleButton.view.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_ToggleButton_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/ToggleButton.style */ "./src/components/common/atoms/ToggleButton/style/ToggleButton.style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ToggleButton = (_ref) => {
  let {
    active,
    onToggle,
    children,
    disabled,
    className,
    fullWidth
  } = _ref,
      otherProps = _objectWithoutProperties(_ref, ["active", "onToggle", "children", "disabled", "className", "fullWidth"]);

  return __jsx(_style_ToggleButton_style__WEBPACK_IMPORTED_MODULE_1__["ToggleWrapper"], {
    onClick: onToggle
  }, __jsx(_style_ToggleButton_style__WEBPACK_IMPORTED_MODULE_1__["Notch"], {
    active: active
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./src/components/common/atoms/ToggleButton/views/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/common/atoms/ToggleButton/views/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleButton_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleButton.view */ "./src/components/common/atoms/ToggleButton/views/ToggleButton.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ToggleButton_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/common/atoms/index.js":
/*!**********************************************!*\
  !*** ./src/components/common/atoms/index.js ***!
  \**********************************************/
/*! exports provided: ToggleButton, Button, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleButton */ "./src/components/common/atoms/ToggleButton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return _ToggleButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/common/atoms/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/components/common/atoms/Input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/components/common/constants/index.js":
/*!**************************************************!*\
  !*** ./src/components/common/constants/index.js ***!
  \**************************************************/
/*! exports provided: OrderHistoryConstants, BurgerConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryConstants", function() { return OrderHistoryConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerConstants", function() { return BurgerConstants; });
const OrderHistoryConstants = {
  OrderHistoryReducerKey: "OrderHistoryData",
  GetOrderHistory: "GET_ORDER_HISTORY",
  SetOrderHistory: "SET_ORDER_HISTORY"
};
const BurgerConstants = {
  BurgerReducerKey: "BurgerData",
  GetBurgerIngredients: "GET_BURGER_INGREDIENTS",
  SetBurgerIngredients: "SET_BURGER_INGREDIENTS"
};

/***/ }),

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

/***/ "./src/components/features/Burger/container/Burger.Reducer.js":
/*!********************************************************************!*\
  !*** ./src/components/features/Burger/container/Burger.Reducer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  ingredients: null
});

const BurgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["BurgerConstants"].SetBurgerIngredients:
      return state.set("ingredients", action.payload);

    default:
      if (state instanceof Object) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(state);
      }

    // return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BurgerReducer);

/***/ }),

/***/ "./src/components/features/Burger/container/Burger.actions.js":
/*!********************************************************************!*\
  !*** ./src/components/features/Burger/container/Burger.actions.js ***!
  \********************************************************************/
/*! exports provided: getBurgerIngredients, setBurgerIngredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBurgerIngredients", function() { return getBurgerIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBurgerIngredients", function() { return setBurgerIngredients; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");

const getBurgerIngredients = () => {
  return {
    type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["BurgerConstants"].GetBurgerIngredients
  };
};
const setBurgerIngredients = payload => {
  return {
    type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["BurgerConstants"].SetBurgerIngredients,
    payload
  };
};

/***/ }),

/***/ "./src/components/features/Burger/container/Burger.saga.js":
/*!*****************************************************************!*\
  !*** ./src/components/features/Burger/container/Burger.saga.js ***!
  \*****************************************************************/
/*! exports provided: getIngredients, BurgerIngredients, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIngredients", function() { return getIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerIngredients", function() { return BurgerIngredients; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_axios_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../service/axios_order */ "./src/service/axios_order.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");
/* harmony import */ var _Burger_container_Burger_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Burger/container/Burger.actions */ "./src/components/features/Burger/container/Burger.actions.js");




function* getIngredients() {
  try {
    const response = yield _service_axios_order__WEBPACK_IMPORTED_MODULE_1__["default"].get("/ingredients.json");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_Burger_container_Burger_actions__WEBPACK_IMPORTED_MODULE_3__["setBurgerIngredients"])(response.data));
  } catch (ex) {
    console.log("Error", ex);
  }
}
function* BurgerIngredients() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_common_constants__WEBPACK_IMPORTED_MODULE_2__["BurgerConstants"].GetBurgerIngredients, getIngredients);
}
/* harmony default export */ __webpack_exports__["default"] = (BurgerIngredients);

/***/ }),

/***/ "./src/components/features/OrderHistory/container/OrderHistory.actions.js":
/*!********************************************************************************!*\
  !*** ./src/components/features/OrderHistory/container/OrderHistory.actions.js ***!
  \********************************************************************************/
/*! exports provided: getOrderHistory, setOrderHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderHistory", function() { return getOrderHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOrderHistory", function() { return setOrderHistory; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");

const getOrderHistory = payload => {
  return {
    type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["OrderHistoryConstants"].GetOrderHistory,
    payload
  };
};
const setOrderHistory = payload => {
  return {
    type: _common_constants__WEBPACK_IMPORTED_MODULE_0__["OrderHistoryConstants"].SetOrderHistory,
    payload
  };
};

/***/ }),

/***/ "./src/components/features/OrderHistory/container/OrderHistory.reducer.js":
/*!********************************************************************************!*\
  !*** ./src/components/features/OrderHistory/container/OrderHistory.reducer.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  orderHistory: null
});

const OrderHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case _common_constants__WEBPACK_IMPORTED_MODULE_1__["OrderHistoryConstants"].SetOrderHistory:
      return state.set("orderHistory", action.payload);

    default:
      if (state instanceof Object) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(state);
      }

      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (OrderHistoryReducer);

/***/ }),

/***/ "./src/components/features/OrderHistory/container/OrderHistory.saga.js":
/*!*****************************************************************************!*\
  !*** ./src/components/features/OrderHistory/container/OrderHistory.saga.js ***!
  \*****************************************************************************/
/*! exports provided: getOrderHistory, OrderHistory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrderHistory", function() { return getOrderHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistory", function() { return OrderHistory; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/constants */ "./src/components/common/constants/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_axios_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../service/axios_order */ "./src/service/axios_order.js");
/* harmony import */ var _container_OrderHistory_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/OrderHistory.actions */ "./src/components/features/OrderHistory/container/OrderHistory.actions.js");




function* getOrderHistory({
  payload
}) {
  console.log("getOrderHistory saga 2");

  try {
    const response = yield _service_axios_order__WEBPACK_IMPORTED_MODULE_2__["default"].get("/orders.json");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(_container_OrderHistory_actions__WEBPACK_IMPORTED_MODULE_3__["setOrderHistory"])(response.data));
  } catch (ex) {
    console.log("Error:", ex);
  }
}
function* OrderHistory() {
  console.log("getOrderHistory saga");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_common_constants__WEBPACK_IMPORTED_MODULE_0__["OrderHistoryConstants"].GetOrderHistory, getOrderHistory);
}
/* harmony default export */ __webpack_exports__["default"] = (OrderHistory);

/***/ }),

/***/ "./src/components/features/content/Footer/container/Footer.container.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/features/content/Footer/container/Footer.container.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views */ "./src/components/features/content/Footer/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Footer/container/index.js":
/*!*******************************************************************!*\
  !*** ./src/components/features/content/Footer/container/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.container */ "./src/components/features/content/Footer/container/Footer.container.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Footer/index.js":
/*!*********************************************************!*\
  !*** ./src/components/features/content/Footer/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/components/features/content/Footer/container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Footer/styles/footer.style.js":
/*!***********************************************************************!*\
  !*** ./src/components/features/content/Footer/styles/footer.style.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-image:linear-gradient( to right,", ",", " );color:", ";margin:50px;justify-content:center;display:flex;border:1px solid green;"], props => props.theme.primaryColor, props => props.theme.secondaryColor, props => props.theme.secondaryColor);
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/features/content/Footer/views/Footer.view.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/features/content/Footer/views/Footer.view.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _styles_footer_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/footer.style */ "./src/components/features/content/Footer/styles/footer.style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Footer = props => {
  return __jsx("div", {
    className: props.className
  }, __jsx("p", null, "Footer"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, _styles_footer_style__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./src/components/features/content/Footer/views/index.js":
/*!***************************************************************!*\
  !*** ./src/components/features/content/Footer/views/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.view */ "./src/components/features/content/Footer/views/Footer.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Header/container/header.container.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/features/content/Header/container/header.container.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views */ "./src/components/features/content/Header/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Header/container/index.js":
/*!*******************************************************************!*\
  !*** ./src/components/features/content/Header/container/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.container */ "./src/components/features/content/Header/container/header.container.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _header_container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Header/index.js":
/*!*********************************************************!*\
  !*** ./src/components/features/content/Header/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/components/features/content/Header/container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/Header/styles/header.style.js":
/*!***********************************************************************!*\
  !*** ./src/components/features/content/Header/styles/header.style.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background-image:linear-gradient( to right,", ",", " );color:", ";padding:10px;justify-content:flex-end;display:flex;align-items:\"center\";.buttonStyle{border:1px solid ", ";border-radius:30px;padding:5px 10px;}.linkStyle{padding:5px;color:", ";}button{background-color:transparent;border:none;color:", ";font-size:12px;}"], props => props.theme.primaryColor, props => props.theme.secondaryColor, props => props.theme.secondaryColor, props => props.theme.primaryColor, props => props.theme.fontColor, props => props.theme.fontColor);
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/components/features/content/Header/views/Header.view.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/features/content/Header/views/Header.view.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _styles_header_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/header.style */ "./src/components/features/content/Header/styles/header.style.js");
/* harmony import */ var _common_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/atoms */ "./src/components/common/atoms/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Header = props => {
  const theme = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeContext"]);

  const nav_click = event => {
    if (event.target.innerText === "Home") {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    } else if (event.target.innerText === "Order History") {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/orderHistory");
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/burger");
    }
  };

  return __jsx("div", {
    className: props.className
  }, __jsx("button", {
    onClick: nav_click
  }, "Home"), __jsx("button", {
    onClick: nav_click
  }, "Order History"), __jsx("button", {
    onClick: nav_click
  }, "Burger"), __jsx(_common_atoms__WEBPACK_IMPORTED_MODULE_5__["ToggleButton"], {
    active: theme.name === "darkTheme",
    onToggle: props.toggleTheme
  }, "Toggle Theme"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _styles_header_style__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ }),

/***/ "./src/components/features/content/Header/views/index.js":
/*!***************************************************************!*\
  !*** ./src/components/features/content/Header/views/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_Header_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Header.view */ "./src/components/features/content/Header/views/Header.view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _views_Header_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/features/content/index.js":
/*!**************************************************!*\
  !*** ./src/components/features/content/index.js ***!
  \**************************************************/
/*! exports provided: Header, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/features/content/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./src/components/features/content/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_features_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/features/content */ "./src/components/features/content/index.js");
/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/themes */ "./styles/themes/index.js");
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/globalStyles */ "./styles/globalStyles/index.js");
/* harmony import */ var _reduxStore_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reduxStore/store */ "./src/reduxStore/store/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class burger_app extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.state = {
      theme: _styles_themes__WEBPACK_IMPORTED_MODULE_5__["DarKTheme"]
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    if (this.state.theme.name === "lightTheme") {
      this.setState({
        theme: _styles_themes__WEBPACK_IMPORTED_MODULE_5__["DarKTheme"]
      });
    } else {
      this.setState({
        theme: _styles_themes__WEBPACK_IMPORTED_MODULE_5__["LightTheme"]
      });
    }
  }

  render() {
    console.log("Render burger_app!!");
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: this.state.theme
    }, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: _reduxStore_store__WEBPACK_IMPORTED_MODULE_7__["default"]
    }, __jsx(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx("title", null, "My Burger App"), __jsx(_components_features_content__WEBPACK_IMPORTED_MODULE_4__["Header"], {
      toggleTheme: this.toggleTheme
    }), __jsx(Component, pageProps)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (burger_app);

/***/ }),

/***/ "./src/reduxStore/reducers/index.js":
/*!******************************************!*\
  !*** ./src/reduxStore/reducers/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/constants */ "./src/components/common/constants/index.js");
/* harmony import */ var _components_features_OrderHistory_container_OrderHistory_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/features/OrderHistory/container/OrderHistory.reducer */ "./src/components/features/OrderHistory/container/OrderHistory.reducer.js");
/* harmony import */ var _components_features_Burger_container_Burger_Reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/features/Burger/container/Burger.Reducer */ "./src/components/features/Burger/container/Burger.Reducer.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  [_components_common_constants__WEBPACK_IMPORTED_MODULE_2__["OrderHistoryConstants"].OrderHistoryReducerKey]: _components_features_OrderHistory_container_OrderHistory_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  [_components_common_constants__WEBPACK_IMPORTED_MODULE_2__["BurgerConstants"].BurgerReducerKey]: _components_features_Burger_container_Burger_Reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"]
}));

/***/ }),

/***/ "./src/reduxStore/saga/index.js":
/*!**************************************!*\
  !*** ./src/reduxStore/saga/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var _components_features_OrderHistory_container_OrderHistory_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/features/OrderHistory/container/OrderHistory.saga */ "./src/components/features/OrderHistory/container/OrderHistory.saga.js");
/* harmony import */ var _components_features_Burger_container_Burger_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/features/Burger/container/Burger.saga */ "./src/components/features/Burger/container/Burger.saga.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(_components_features_OrderHistory_container_OrderHistory_saga__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_components_features_Burger_container_Burger_saga__WEBPACK_IMPORTED_MODULE_1__["default"])()]);
}

/***/ }),

/***/ "./src/reduxStore/store/index.js":
/*!***************************************!*\
  !*** ./src/reduxStore/store/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/reduxStore/reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../saga */ "./src/reduxStore/saga/index.js");





const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
const configureStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware)));
console.log("configured saga");
sagaMiddleware.run(_saga__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./src/service/axios_order.js":
/*!************************************!*\
  !*** ./src/service/axios_order.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosOrder = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://my-burger-22130.firebaseio.com"
});
/* harmony default export */ __webpack_exports__["default"] = (axiosOrder);

/***/ }),

/***/ "./styles/globalStyles/commonStyles.js":
/*!*********************************************!*\
  !*** ./styles/globalStyles/commonStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["body{font-family:\"Nunito,Arial, Helvetica, sans-serif\";overflow-x:hidden;width:100%;margin:0 auto;position:relative;background-color:", ";color:", ";}.right{float:right;}.left{float:left;}.clearfix{clear:both;}.textRight{text-align:right;}.textLeft{text-align:left;}.is-hidden{display:none !important;}.is-visible{display:block;}.overlay{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.6);z-index:2;}.disableBodyScroll{overflow:hidden;}img{max-width:100%;}.full-bleed{width:100%;}.margin-none{margin:0 !important;}.padding-none{padding:0 !important;}ul{padding:0px;margin:0px;}li{list-style-type:none;}h2,p{margin:0;}.line-height-0{line-height:0;}", " ", " .spacing{padding:0 ", ";}"], props => props.theme.bodyBackgroundColor, props => props.theme.fontColor, props => {
  return Object.keys(props.theme.spacing.ELEM_SPACING).map(key => {
    return `
      .elem-mt-${key} {
        margin-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mr-${key} {
        margin-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-mb-${key} {
        margin-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-ml-${key} {
        margin-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pt-${key} {
        padding-top: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pr-${key} {
        padding-right: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pb-${key} {
        padding-bottom: ${props.theme.spacing.ELEM_SPACING[key]}
      }
      .elem-pl-${key} {
        padding-left: ${props.theme.spacing.ELEM_SPACING[key]}
      }`;
  });
}, props => {
  return Object.keys(props.theme.spacing.LAYOUT_SPACING).map(key => {
    return `
      .layout-pt-${key} {
        padding-top: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pr-${key} {
        padding-right: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pb-${key} {
        padding-bottom: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }
      .layout-pl-${key} {
        padding-left: ${props.theme.spacing.LAYOUT_SPACING[key]}
      }`;
  });
}, props => props.theme.spacing.LAYOUT_SPACING.SM));

/***/ }),

/***/ "./styles/globalStyles/index.js":
/*!**************************************!*\
  !*** ./styles/globalStyles/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commonStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonStyles */ "./styles/globalStyles/commonStyles.js");


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${_commonStyles__WEBPACK_IMPORTED_MODULE_1__["default"]}
`);

/***/ }),

/***/ "./styles/themes/DarkTheme/index.js":
/*!******************************************!*\
  !*** ./styles/themes/DarkTheme/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./styles/themes/colors/index.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing */ "./styles/themes/spacing.js");
/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mediaQuery */ "./styles/themes/mediaQuery.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    red: _colors__WEBPACK_IMPORTED_MODULE_0__["red"],
    blue: _colors__WEBPACK_IMPORTED_MODULE_0__["blue"],
    common: _colors__WEBPACK_IMPORTED_MODULE_0__["common"],
    gray: _colors__WEBPACK_IMPORTED_MODULE_0__["gray"],
    green: _colors__WEBPACK_IMPORTED_MODULE_0__["green"],
    orange: _colors__WEBPACK_IMPORTED_MODULE_0__["orange"],
    pink: _colors__WEBPACK_IMPORTED_MODULE_0__["pink"],
    yellow: _colors__WEBPACK_IMPORTED_MODULE_0__["yellow"]
  },
  name: "darkTheme",
  primaryColor: _colors__WEBPACK_IMPORTED_MODULE_0__["common"].black,
  secondaryColor: _colors__WEBPACK_IMPORTED_MODULE_0__["blue"]["1000"],
  spacing: _spacing__WEBPACK_IMPORTED_MODULE_1__["default"],
  mediaQuery: _mediaQuery__WEBPACK_IMPORTED_MODULE_2__["mediaQuery"],
  bodyBackgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["common"].black,
  fontColor: _colors__WEBPACK_IMPORTED_MODULE_0__["common"].white
});

/***/ }),

/***/ "./styles/themes/LightTheme/index.js":
/*!*******************************************!*\
  !*** ./styles/themes/LightTheme/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./styles/themes/colors/index.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing */ "./styles/themes/spacing.js");
/* harmony import */ var _mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mediaQuery */ "./styles/themes/mediaQuery.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  colors: {
    red: _colors__WEBPACK_IMPORTED_MODULE_0__["red"],
    blue: _colors__WEBPACK_IMPORTED_MODULE_0__["blue"],
    common: _colors__WEBPACK_IMPORTED_MODULE_0__["common"],
    gray: _colors__WEBPACK_IMPORTED_MODULE_0__["gray"],
    green: _colors__WEBPACK_IMPORTED_MODULE_0__["green"],
    orange: _colors__WEBPACK_IMPORTED_MODULE_0__["orange"],
    pink: _colors__WEBPACK_IMPORTED_MODULE_0__["pink"],
    yellow: _colors__WEBPACK_IMPORTED_MODULE_0__["yellow"]
  },
  name: "lightTheme",
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
  spacing: _spacing__WEBPACK_IMPORTED_MODULE_1__["default"],
  mediaQuery: _mediaQuery__WEBPACK_IMPORTED_MODULE_2__["mediaQuery"],
  bodyBackgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["common"].white,
  fontColor: _colors__WEBPACK_IMPORTED_MODULE_0__["common"].black
});

/***/ }),

/***/ "./styles/themes/colors/blue.js":
/*!**************************************!*\
  !*** ./styles/themes/colors/blue.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const blue = {
  50: '#edf5fb',
  100: '#dbebf8',
  300: '#93c5ea',
  500: '#4b9fdd',
  600: '#1ba5e0',
  700: '#3c7fb0',
  800: '#254f6e',
  900: '#162f42',
  1000: '#439ad4',
  B100: '#00A7E0',
  A100: '#5e9ed6',
  C900: '#003057'
};
/* harmony default export */ __webpack_exports__["default"] = (blue);

/***/ }),

/***/ "./styles/themes/colors/common.js":
/*!****************************************!*\
  !*** ./styles/themes/colors/common.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const common = {
  white: '#fff',
  black: '#000',
  purple: '#b976cc',
  newpurple: '#C7389C',
  venmoBorder: '#2c2e2f'
};
/* harmony default export */ __webpack_exports__["default"] = (common);

/***/ }),

/***/ "./styles/themes/colors/gray.js":
/*!**************************************!*\
  !*** ./styles/themes/colors/gray.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const gray = {
  300: '#f3f3f3',
  400: '#4a4a4a',
  500: '#d8d8d8',
  600: '#9b9b9b',
  700: '#575757',
  800: '#595959',
  900: '#1a1a1a',
  1000: '#6d7278',
  1100: '#4a4a4a',
  1200: '#eeeeee',
  1300: '#9c9c9c',
  1400: '#90939b',
  1500: '#c3c3c3',
  1600: '#979797',
  1700: '#333333',
  1800: '#f1f0f0'
};
/* harmony default export */ __webpack_exports__["default"] = (gray);

/***/ }),

/***/ "./styles/themes/colors/green.js":
/*!***************************************!*\
  !*** ./styles/themes/colors/green.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const green = {
  300: '#7dc24c',
  400: '#4b742d',
  500: '#26762c'
};
/* harmony default export */ __webpack_exports__["default"] = (green);

/***/ }),

/***/ "./styles/themes/colors/index.js":
/*!***************************************!*\
  !*** ./styles/themes/colors/index.js ***!
  \***************************************/
/*! exports provided: red, blue, common, gray, green, orange, pink, yellow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _red__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./red */ "./styles/themes/colors/red.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "red", function() { return _red__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _blue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blue */ "./styles/themes/colors/blue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return _blue__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./styles/themes/colors/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "common", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _gray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gray */ "./styles/themes/colors/gray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _gray__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _green__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./green */ "./styles/themes/colors/green.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "green", function() { return _green__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _orange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orange */ "./styles/themes/colors/orange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return _orange__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pink */ "./styles/themes/colors/pink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pink", function() { return _pink__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _yellow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./yellow */ "./styles/themes/colors/yellow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return _yellow__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./styles/themes/colors/orange.js":
/*!****************************************!*\
  !*** ./styles/themes/colors/orange.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const orange = {
  50: "#fef4e8",
  100: "#fdead2",
  300: "#fbd5a5",
  500: "#fac078",
  700: "#f9b662",
  800: "#f7971f",
  900: "#c25621",
  1000: "#CF8F2E"
};
/* harmony default export */ __webpack_exports__["default"] = (orange);

/***/ }),

/***/ "./styles/themes/colors/pink.js":
/*!**************************************!*\
  !*** ./styles/themes/colors/pink.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pink = {
  400: '#f78cc6',
  500: '#df4b9a'
};
/* harmony default export */ __webpack_exports__["default"] = (pink);

/***/ }),

/***/ "./styles/themes/colors/red.js":
/*!*************************************!*\
  !*** ./styles/themes/colors/red.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const red = {
  100: '#f3d7d7',
  200: '#f3d7d7',
  300: '#c84747',
  400: '#f53d3d',
  500: '#c8102e',
  600: '#c01f1f',
  700: '#3f3356'
};
/* harmony default export */ __webpack_exports__["default"] = (red);

/***/ }),

/***/ "./styles/themes/colors/yellow.js":
/*!****************************************!*\
  !*** ./styles/themes/colors/yellow.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const yellow = {
  500: '#ffe700',
  600: '#f6d343'
};
/* harmony default export */ __webpack_exports__["default"] = (yellow);

/***/ }),

/***/ "./styles/themes/index.js":
/*!********************************!*\
  !*** ./styles/themes/index.js ***!
  \********************************/
/*! exports provided: DarKTheme, LightTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkTheme */ "./styles/themes/DarkTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarKTheme", function() { return _DarkTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _LightTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightTheme */ "./styles/themes/LightTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightTheme", function() { return _LightTheme__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./styles/themes/mediaQuery.js":
/*!*************************************!*\
  !*** ./styles/themes/mediaQuery.js ***!
  \*************************************/
/*! exports provided: breakpoints, mediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
const breakpoints = {
  small: "360px",
  smallMax: "767px",
  medium: "768px",
  mediumMax: "1199px",
  large: "1200px",
  largeMax: "1439px",
  xlarge: "1440px",
  maxWidth: 1440,
  keys: ["xs", "sm", "lg"],
  values: {
    xs: 0,
    sm: 768,
    lg: 1200
  }
};
const mediaQuery = {
  small: `(min-width: ${breakpoints.small})`,
  smallMax: `(max-width: ${breakpoints.smallMax})`,
  smallOnly: `
      (min-width: ${breakpoints.small})
      and
      (max-width: ${breakpoints.smallMax})
    `,
  medium: `(min-width: ${breakpoints.medium})`,
  mediumMax: `(max-width: ${breakpoints.mediumMax})`,
  mediumOnly: `
      (min-width: ${breakpoints.medium})
      and
      (max-width: ${breakpoints.mediumMax})
    `,
  large: `(min-width: ${breakpoints.large})`,
  largeMax: `(max-width: ${breakpoints.largeMax})`,
  largeOnly: `
      (min-width: ${breakpoints.large})
      and
      (max-width: ${breakpoints.largeMax})
    `,
  xlarge: `(min-width: ${breakpoints.xlarge})`
};

/***/ }),

/***/ "./styles/themes/spacing.js":
/*!**********************************!*\
  !*** ./styles/themes/spacing.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // SPACING
  // ELEM_SPACING - This spacing is defined from the mininum to maximum that can be used inside an individual
  // component for both padding and margin.
  // LAYOUT_SPACING - TThe layout scale is used for arranging components and other UI parts into a full page layout.
  // It has larger increments that are used to control the density of a design.
  // Use the smaller layout tokens to create more dense compositions and direct relationships.
  // Use the larger tokens to increase the amount of white space and to disassociate sections.
  // The spacing below are taken from the UI stylesheet. If you find you need a spacing that doesn't
  // exist here, it's likely the design should be updated to match an use spacing, or the spacing needs
  // to be added to the stylesheet. Please speak to a designer first before adding here and
  // PLEASE DO NOT JUST ADD SPACING BELOW BECAUSE IT'S IN A DESIGN :)
  ELEM_SPACING: {
    XXXS: "2px",
    XXS: "4px",
    XS: "8px",
    SM: "12px",
    MED: "16px",
    LRG: "24px",
    XL: "32px",
    XXL: "40px",
    XXXL: "48px"
  },
  LAYOUT_SPACING: {
    XXS: "16px",
    XS: "24px",
    SM: "32px",
    MED: "48px",
    LRG: "64px",
    LRGS: "110px",
    XL: "96px",
    XXL: "160px",
    XXXL: "320px"
  },
  MODAL_WIDTH: {
    SMALL: "458px",
    MEDIUM: "600px"
  },
  APP_LAYOUT_SPACING: {
    XXS: "10px",
    XS: "20px",
    SM: "30px"
  },
  MODULE_SPACING: {
    MED: "30px"
  },
  CREDIT_CARD_ICON_WIDTH: "50px",
  FORM_FIELD_HEIGHT: "70px"
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./src/pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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
//# sourceMappingURL=_app.js.map