webpackHotUpdate("static/development/pages/Burger.js",{

/***/ "./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx":
/*!********************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BurgerIngredient */ "./src/components/features/Burger/organism/BurgerIngredient/index.js");
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/BurgerBuilder.style */ "./src/components/features/Burger/organism/BurgerBuilder/style/BurgerBuilder.style.js");
var _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BurgerBuilder = function BurgerBuilder(_ref) {
  var className = _ref.className,
      ingredients = _ref.ingredients;

  //   console.log(ingredients);
  var renderBurgerIngredients = function renderBurgerIngredients() {
    Object.keys(ingredients).map(function (key) {
      console.log(key);
      return __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ingredientName: "'".concat(key, "'")
      });
    });
  };

  return __jsx("div", {
    className: className
  }, __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ingredientName: "BreadTop"
  }), __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ingredientName: "BreadBottom"
  }), _this.renderBurgerIngredients);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(BurgerBuilder, _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_3__["default"]));

/***/ })

})
//# sourceMappingURL=Burger.js.fb4ba33c89cd2caa9735.hot-update.js.map