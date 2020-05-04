webpackHotUpdate("static/development/pages/Burger.js",{

/***/ "./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx":
/*!********************************************************************************************!*\
  !*** ./src/components/features/Burger/organism/BurgerBuilder/views/BurgerBuilder.view.jsx ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BurgerIngredient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BurgerIngredient */ "./src/components/features/Burger/organism/BurgerIngredient/index.js");
/* harmony import */ var _common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../common/hoc/withStyle */ "./src/components/common/hoc/withStyle.jsx");
/* harmony import */ var _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style/BurgerBuilder.style */ "./src/components/features/Burger/organism/BurgerBuilder/style/BurgerBuilder.style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var BurgerBuilder = function BurgerBuilder(_ref) {
  var className = _ref.className,
      ingredients = _ref.ingredients;
  //   console.log(ingredients);
  var renderBurgerIngredients = Object.keys(ingredients).map(function (key) {
    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(ingredients[key])).map(function (_, i) {
      return __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: key + i,
        ingredientName: "BreadTop"
      });
    });
  });
  console.log(renderBurgerIngredients);
  return __jsx("div", {
    className: className
  }, __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ingredientName: "BreadTop"
  }), __jsx(_BurgerIngredient__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ingredientName: "BreadBottom"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_hoc_withStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(BurgerBuilder, _style_BurgerBuilder_style__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ })

})
//# sourceMappingURL=Burger.js.e7be0bd2c1bab98e04f4.hot-update.js.map