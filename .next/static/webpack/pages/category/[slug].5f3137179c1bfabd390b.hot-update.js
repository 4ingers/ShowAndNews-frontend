webpackHotUpdate_N_E("pages/category/[slug]",{

/***/ "./components/MainLayout/index.js":
/*!****************************************!*\
  !*** ./components/MainLayout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/MainLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navigation */ "./components/Navigation/index.js");
var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\MainLayout\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var MainLayout = function MainLayout(_ref) {
  var children = _ref.children,
      _ref$meta = _ref.meta,
      title = _ref$meta.title,
      keywords = _ref$meta.keywords,
      description = _ref$meta.description;
  return __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mainLayout,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, title && "".concat(title, " | "), "SHOW&NEWS"), __jsx("meta", {
    name: "keywords",
    content: keywords.join(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, children));
};

_c = MainLayout;
/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

var _c;

$RefreshReg$(_c, "MainLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/MainLayout/style.module.scss":
false,

/***/ "./components/MainLayout/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/MainLayout/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/MainLayout/styles.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/MainLayout/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/MainLayout/styles.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/MainLayout/style.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/MainLayout/styles.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/MainLayout/styles.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Playfair Display Black\";\n  src: url(\"/fonts/PlayfairDisplay-Black.ttf\") format(\"truetype\");\n}\n.styles_content__24_zI {\n  padding-top: 150px 0;\n}\n.styles_content__24_zI h1 {\n  width: 100%;\n  color: #444;\n  padding: 150px 0;\n}\n.styles_content__24_zI .styles_featured-posts-container__38f5J {\n  display: flex;\n}\n.styles_content__24_zI .styles_bg-white__1g2df {\n  background: white;\n}\n\n@media screen and (max-width: 900px) {\n  .styles_home__1vuQu {\n    -webkit-margin-before: 1.5em;\n            margin-block-start: 1.5em;\n    -webkit-margin-after: 1.5em;\n            margin-block-end: 1.5em;\n  }\n\n  .styles_featured-posts-container__38f5J {\n    flex-direction: column;\n  }\n}", "",{"version":3,"sources":["D:/Site/showandnews/styles/variables.scss","D:/Site/showandnews/components/MainLayout/styles.module.scss"],"names":[],"mappings":"AAAA;EACE,qCAAA;EACA,+DAAA;ACCF;AAAA;EACE,oBAAA;AAEF;AAAE;EACE,WAAA;EACA,WDDmB;ECEnB,gBAAA;AAEJ;AACE;EACE,aAAA;AACJ;AAEE;EACE,iBAAA;AAAJ;;AAIA;EACE;IACE,4BAAA;YAAA,yBAAA;IACA,2BAAA;YAAA,uBAAA;EADF;;EAIA;IACE,sBAAA;EADF;AACF","file":"styles.module.scss","sourcesContent":["@font-face {\r\n  font-family: 'Playfair Display Black';\r\n  src: url('/fonts/PlayfairDisplay-Black.ttf') format('truetype');\r\n}\r\n\r\n$showandnews-golden: rgb(183, 150, 79);\r\n$showandnews-burgundy: rgb(144, 26, 45);\r\n$showandnews-darkgrey: #444;\r\n\r\n$text-link: #2997ff;\r\n$text-color: $showandnews-darkgrey;\r\n$text-light: #999;\r\n\r\n$logo-background-color: $showandnews-golden;\r\n$logo-font: 'Playfair Display Black';\r\n\r\n$navigation-height: 150px;\r\n$navigation-height-mobile: 80px;\r\n\r\n$navigation-gradient-border-size: 1px;\r\n\r\n$navigation-menu-width-mobile: 240px;\r\n\r\n$background: #f8f9fa;\r\n$border: #ccc;\r\n\r\n$menu-item-color: $showandnews-burgundy;\r\n$menu-item-color-hover: $showandnews-golden;","@font-face {\n  font-family: \"Playfair Display Black\";\n  src: url(\"/fonts/PlayfairDisplay-Black.ttf\") format(\"truetype\");\n}\n.content {\n  padding-top: 150px 0;\n}\n.content h1 {\n  width: 100%;\n  color: #444;\n  padding: 150px 0;\n}\n.content .featured-posts-container {\n  display: flex;\n}\n.content .bg-white {\n  background: white;\n}\n\n@media screen and (max-width: 900px) {\n  .home {\n    margin-block-start: 1.5em;\n    margin-block-end: 1.5em;\n  }\n\n  .featured-posts-container {\n    flex-direction: column;\n  }\n}"]}]);
// Exports
exports.locals = {
	"content": "styles_content__24_zI",
	"featured-posts-container": "styles_featured-posts-container__38f5J",
	"bg-white": "styles_bg-white__1g2df",
	"home": "styles_home__1vuQu"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW5MYXlvdXQvc3R5bGVzLm1vZHVsZS5zY3NzP2Q2MjYiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbkxheW91dC9zdHlsZXMubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsImNoaWxkcmVuIiwibWV0YSIsInRpdGxlIiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsInN0eWxlcyIsIm1haW5MYXlvdXQiLCJqb2luIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMEQ7QUFBQSxNQUF2REMsUUFBdUQsUUFBdkRBLFFBQXVEO0FBQUEsdUJBQTdDQyxJQUE2QztBQUFBLE1BQXJDQyxLQUFxQyxhQUFyQ0EsS0FBcUM7QUFBQSxNQUE5QkMsUUFBOEIsYUFBOUJBLFFBQThCO0FBQUEsTUFBcEJDLFdBQW9CLGFBQXBCQSxXQUFvQjtBQUUzRSxTQUNFO0FBQUssYUFBUyxFQUFFQywwREFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRSixLQUFLLGNBQU9BLEtBQVAsUUFBYixjQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUVDLFFBQVEsQ0FBQ0ksSUFBVCxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRUgsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFO0FBQU0sYUFBUyxFQUFFQywwREFBTSxDQUFDRyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDUixRQUFsQyxDQVJGLENBREY7QUFZRCxDQWREOztLQUFNRCxVO0FBZ0JTQSx5RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBLFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsdWZBQWtTOztBQUVwVTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx1ZkFBa1M7QUFDeFM7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx1ZkFBa1M7O0FBRTVUOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsZUFBZSw0Q0FBNEMsd0VBQXdFLEdBQUcsMEJBQTBCLHlCQUF5QixHQUFHLDZCQUE2QixnQkFBZ0IsZ0JBQWdCLHFCQUFxQixHQUFHLGtFQUFrRSxrQkFBa0IsR0FBRyxrREFBa0Qsc0JBQXNCLEdBQUcsMENBQTBDLHlCQUF5QixtQ0FBbUMsd0NBQXdDLGtDQUFrQyxzQ0FBc0MsS0FBSywrQ0FBK0MsNkJBQTZCLEtBQUssR0FBRyxPQUFPLCtKQUErSixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxpRUFBaUUsNENBQTRDLHNFQUFzRSxLQUFLLCtDQUErQyw0Q0FBNEMsZ0NBQWdDLDRCQUE0Qix1Q0FBdUMsc0JBQXNCLG9EQUFvRCx5Q0FBeUMsa0NBQWtDLG9DQUFvQyw4Q0FBOEMsNkNBQTZDLDZCQUE2QixrQkFBa0IsZ0RBQWdELGdEQUFnRCxlQUFlLDRDQUE0Qyx3RUFBd0UsR0FBRyxZQUFZLHlCQUF5QixHQUFHLGVBQWUsZ0JBQWdCLGdCQUFnQixxQkFBcUIsR0FBRyxzQ0FBc0Msa0JBQWtCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLDBDQUEwQyxXQUFXLGdDQUFnQyw4QkFBOEIsS0FBSyxpQ0FBaUMsNkJBQTZCLEtBQUssR0FBRyxHQUFHO0FBQzk2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS41ZjMxMzcxNzljMWJmYWJkMzkwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL05hdmlnYXRpb24nXHJcblxyXG5cclxuY29uc3QgTWFpbkxheW91dCA9ICh7IGNoaWxkcmVuLCBtZXRhOiB7IHRpdGxlLCBrZXl3b3JkcywgZGVzY3JpcHRpb24gfSB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5MYXlvdXR9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlICYmIGAke3RpdGxlfSB8IGB9U0hPVyZORVdTPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3Jkcy5qb2luKCl9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgXHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PntjaGlsZHJlbn08L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXkgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9QbGF5ZmFpckRpc3BsYXktQmxhY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG4uc3R5bGVzX2NvbnRlbnRfXzI0X3pJIHtcXG4gIHBhZGRpbmctdG9wOiAxNTBweCAwO1xcbn1cXG4uc3R5bGVzX2NvbnRlbnRfXzI0X3pJIGgxIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBwYWRkaW5nOiAxNTBweCAwO1xcbn1cXG4uc3R5bGVzX2NvbnRlbnRfXzI0X3pJIC5zdHlsZXNfZmVhdHVyZWQtcG9zdHMtY29udGFpbmVyX18zOGY1SiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3R5bGVzX2NvbnRlbnRfXzI0X3pJIC5zdHlsZXNfYmctd2hpdGVfXzFnMmRmIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLnN0eWxlc19ob21lX18xdnVRdSB7XFxuICAgIC13ZWJraXQtbWFyZ2luLWJlZm9yZTogMS41ZW07XFxuICAgICAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjVlbTtcXG4gICAgLXdlYmtpdC1tYXJnaW4tYWZ0ZXI6IDEuNWVtO1xcbiAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNWVtO1xcbiAgfVxcblxcbiAgLnN0eWxlc19mZWF0dXJlZC1wb3N0cy1jb250YWluZXJfXzM4ZjVKIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRDovU2l0ZS9zaG93YW5kbmV3cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIkQ6L1NpdGUvc2hvd2FuZG5ld3MvY29tcG9uZW50cy9NYWluTGF5b3V0L3N0eWxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsK0RBQUE7QUNDRjtBQUFBO0VBQ0Usb0JBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFdERG1CO0VDRW5CLGdCQUFBO0FBRUo7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFJQTtFQUNFO0lBQ0UsNEJBQUE7WUFBQSx5QkFBQTtJQUNBLDJCQUFBO1lBQUEsdUJBQUE7RUFERjs7RUFJQTtJQUNFLHNCQUFBO0VBREY7QUFDRlwiLFwiZmlsZVwiOlwic3R5bGVzLm1vZHVsZS5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IEJsYWNrJztcXHJcXG4gIHNyYzogdXJsKCcvZm9udHMvUGxheWZhaXJEaXNwbGF5LUJsYWNrLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuJHNob3dhbmRuZXdzLWdvbGRlbjogcmdiKDE4MywgMTUwLCA3OSk7XFxyXFxuJHNob3dhbmRuZXdzLWJ1cmd1bmR5OiByZ2IoMTQ0LCAyNiwgNDUpO1xcclxcbiRzaG93YW5kbmV3cy1kYXJrZ3JleTogIzQ0NDtcXHJcXG5cXHJcXG4kdGV4dC1saW5rOiAjMjk5N2ZmO1xcclxcbiR0ZXh0LWNvbG9yOiAkc2hvd2FuZG5ld3MtZGFya2dyZXk7XFxyXFxuJHRleHQtbGlnaHQ6ICM5OTk7XFxyXFxuXFxyXFxuJGxvZ28tYmFja2dyb3VuZC1jb2xvcjogJHNob3dhbmRuZXdzLWdvbGRlbjtcXHJcXG4kbG9nby1mb250OiAnUGxheWZhaXIgRGlzcGxheSBCbGFjayc7XFxyXFxuXFxyXFxuJG5hdmlnYXRpb24taGVpZ2h0OiAxNTBweDtcXHJcXG4kbmF2aWdhdGlvbi1oZWlnaHQtbW9iaWxlOiA4MHB4O1xcclxcblxcclxcbiRuYXZpZ2F0aW9uLWdyYWRpZW50LWJvcmRlci1zaXplOiAxcHg7XFxyXFxuXFxyXFxuJG5hdmlnYXRpb24tbWVudS13aWR0aC1tb2JpbGU6IDI0MHB4O1xcclxcblxcclxcbiRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xcclxcbiRib3JkZXI6ICNjY2M7XFxyXFxuXFxyXFxuJG1lbnUtaXRlbS1jb2xvcjogJHNob3dhbmRuZXdzLWJ1cmd1bmR5O1xcclxcbiRtZW51LWl0ZW0tY29sb3ItaG92ZXI6ICRzaG93YW5kbmV3cy1nb2xkZW47XCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheSBCbGFja1xcXCI7XFxuICBzcmM6IHVybChcXFwiL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1CbGFjay50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAxNTBweCAwO1xcbn1cXG4uY29udGVudCBoMSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgcGFkZGluZzogMTUwcHggMDtcXG59XFxuLmNvbnRlbnQgLmZlYXR1cmVkLXBvc3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uY29udGVudCAuYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuaG9tZSB7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMS41ZW07XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDEuNWVtO1xcbiAgfVxcblxcbiAgLmZlYXR1cmVkLXBvc3RzLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJzdHlsZXNfY29udGVudF9fMjRfeklcIixcblx0XCJmZWF0dXJlZC1wb3N0cy1jb250YWluZXJcIjogXCJzdHlsZXNfZmVhdHVyZWQtcG9zdHMtY29udGFpbmVyX18zOGY1SlwiLFxuXHRcImJnLXdoaXRlXCI6IFwic3R5bGVzX2JnLXdoaXRlX18xZzJkZlwiLFxuXHRcImhvbWVcIjogXCJzdHlsZXNfaG9tZV9fMXZ1UXVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=