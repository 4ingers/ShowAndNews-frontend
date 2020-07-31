webpackHotUpdate_N_E("pages/category/[slug]",{

/***/ "./components/Navigation/index.js":
/*!****************************************!*\
  !*** ./components/Navigation/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./components/Navigation/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Logo */ "./components/Logo/index.js");
/* harmony import */ var _services_getFilenameFromPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/getFilenameFromPath */ "./services/getFilenameFromPath.js");
var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\Navigation\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // === Hardcode ===

var navMenuCategories = [{
  title: 'Звёзды',
  slug: 'stars',
  id: 1
}, {
  title: 'Кино',
  slug: 'cinema',
  id: 2
}, {
  title: 'Мода',
  slug: 'fashion',
  id: 3
}, {
  title: 'Блогеры',
  slug: 'bloggers',
  id: 4
}];

var Navigation = function Navigation() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuActive = _useState[0],
      setMenuActive = _useState[1];

  var mobileNavMenuIcon = '/icons/mobile-navigation-menu-icon.png';
  var altMobileNavMenuIcon = Object(_services_getFilenameFromPath__WEBPACK_IMPORTED_MODULE_4__["default"])(mobileNavMenuIcon, false);
  return __jsx("nav", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navigation,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.topStripe,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "\u041D\u041E\u0412\u041E\u0421\u0422\u0418 \u0428\u041E\u0423-\u0411\u0418\u0417\u041D\u0415\u0421\u0410")), __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: menuActive ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainerActive : _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuList,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, navMenuCategories.map(function (item, index) {
    return __jsx("li", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuItem,
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/category/[slug]",
      as: "/category/".concat(item.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.menuItemLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, item.title)));
  }))), __jsx("img", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.navIcon,
    src: mobileNavMenuIcon,
    alt: altMobileNavMenuIcon,
    onClick: function onClick() {
      return setMenuActive(!menuActive);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }));
};

_s(Navigation, "qXd1yfUBuWwj4A+xwewe8jtNaK4=");

_c = Navigation;
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

var _c;

$RefreshReg$(_c, "Navigation");

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

/***/ "./components/Navigation/style.module.scss":
false,

/***/ "./components/Navigation/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/styles.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Navigation/styles.module.scss");

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
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Navigation/styles.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./styles.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Navigation/styles.module.scss");

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Navigation/style.module.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Navigation/styles.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Navigation/styles.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Playfair Display Black\";\n  src: url(\"/fonts/PlayfairDisplay-Black.ttf\") format(\"truetype\");\n}\n.styles_navigation__ierWT {\n  height: 150px;\n  width: 100%;\n  background-color: white;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  border-top: 0;\n  border-bottom: 1px transparent;\n  border-style: solid none;\n  -o-border-image: linear-gradient(to right, transparent, #b7964f, transparent);\n     border-image: linear-gradient(to right, transparent, #b7964f, transparent);\n  border-image-slice: 1;\n}\n.styles_navigation__ierWT .styles_topStripe__pTXdS {\n  flex-direction: column;\n  width: 360px;\n  height: 24px;\n  font-size: 16px;\n  background-color: #b7964f;\n  color: white;\n  margin: 0 auto 12px auto;\n  display: flex;\n  text-align: center;\n}\n.styles_navigation__ierWT .styles_navIcon__3qNsH {\n  font-size: 36px;\n  align-items: center;\n  cursor: pointer;\n  display: none;\n}\n.styles_navigation__ierWT .styles_menuContainer__1eTug {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.styles_navigation__ierWT .styles_menuList__1T0WA {\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 12px;\n          margin-block-end: 12px;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style-type: none;\n  font-weight: 500;\n}\n.styles_navigation__ierWT .styles_menuList__1T0WA .styles_menuItemLink__3Y5Lp {\n  text-decoration: none;\n  padding: 0 10px 0 10px;\n  font-size: 16px;\n  color: #901a2d;\n}\n.styles_navigation__ierWT .styles_menuList__1T0WA .styles_menuItemLink__3Y5Lp:hover {\n  transition: ease 300ms;\n  color: #b7964f;\n}\n.styles_navigation__ierWT .styles_menuList__1T0WA .styles_menuItem__xpZFA:not(:last-of-type):after {\n  content: \"|\";\n  color: #901a2d;\n  position: relative;\n  top: -3px;\n  font-size: 80%;\n}\n\n@media screen and (max-width: 900px) {\n  .styles_navigation__ierWT {\n    height: 80px;\n    flex-direction: row-reverse;\n  }\n  .styles_navigation__ierWT .styles_menuContainerActive__TsF9m, .styles_navigation__ierWT .styles_menuContainer__1eTug {\n    width: 240px;\n    height: calc( 100% - 80px - 1px );\n    background-color: white;\n    position: fixed;\n    top: 81px;\n    transition: 300ms ease left;\n    align-items: flex-start;\n    justify-content: start;\n  }\n  .styles_navigation__ierWT .styles_menuContainer__1eTug {\n    left: -240px;\n  }\n  .styles_navigation__ierWT .styles_menuContainerActive__TsF9m {\n    left: 0px;\n  }\n  .styles_navigation__ierWT .styles_menuList__1T0WA {\n    padding: 20px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: 0;\n  }\n  .styles_navigation__ierWT .styles_menuList__1T0WA .styles_menuItem__xpZFA {\n    padding-bottom: 20px;\n  }\n  .styles_navigation__ierWT .styles_menuList__1T0WA .styles_menuItem__xpZFA:not(:last-of-type):after {\n    display: none;\n  }\n  .styles_navigation__ierWT .styles_topStripe__pTXdS {\n    display: none;\n  }\n  .styles_navigation__ierWT .styles_navIcon__3qNsH {\n    height: 40px;\n    display: block;\n    margin: auto 0;\n    margin-left: 20px;\n    float: left;\n  }\n}", "",{"version":3,"sources":["D:/Site/showandnews/styles/variables.scss","D:/Site/showandnews/components/Navigation/styles.module.scss"],"names":[],"mappings":"AAAA;EACE,qCAAA;EACA,+DAAA;ACCF;AADA;EACE,aDakB;ECZlB,WAAA;EACA,uBAAA;EACA,WDCqB;ECCrB,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,8BAAA;EAEA,eAAA;EACA,YAAA;EACA,MAAA;EAGA,aAAA;EACA,8BAAA;EACA,wBAAA;EACA,6EAAA;KAAA,0EAAA;EAMA,qBAAA;AANF;AAQE;EACE,sBAAA;EACA,YAAA;EACA,YAAA;EAEA,eAAA;EACA,yBD9BiB;EC+BjB,YAAA;EAEA,wBAAA;EAEA,aAAA;EACA,kBAAA;AATJ;AAYE;EACE,eAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;AAVJ;AAaE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;AAXJ;AAcE;EACE,wBAAA;UAAA,qBAAA;EACA,0BAAA;UAAA,sBAAA;EACA,wBAAA;UAAA,uBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;EACA,gBAAA;AAZJ;AAeM;EACE,qBAAA;EACA,sBAAA;EACA,eAAA;EACA,cDlEe;ACqDvB;AAeQ;EACE,sBAAA;EACA,cDvEW;AC0DrB;AAiBM;EACE,YAAA;EACA,cD5Ee;EC6Ef,kBAAA;EACA,SAAA;EACA,cAAA;AAfR;;AAqBA;EACE;IACE,YD5EuB;IC6EvB,2BAAA;EAlBF;EAoBE;IACE,YD5EyB;IC6EzB,iCAAA;IAGA,uBAAA;IACA,eAAA;IACA,SAAA;IACA,2BAAA;IACA,uBAAA;IACA,sBAAA;EApBJ;EAuBE;IAEE,YAAA;EAtBJ;EAwBI;IAEE,SAAA;EAvBN;EA2BE;IACE,aAAA;IACA,sBAAA;IACA,2BAAA;IACA,qBAAA;IACA,SAAA;EAzBJ;EA2BI;IACE,oBAAA;EAzBN;EA0BM;IACE,aAAA;EAxBR;EA6BE;IACE,aAAA;EA3BJ;EA8BE;IACE,YAAA;IACA,cAAA;IACA,cAAA;IACA,iBAAA;IACA,WAAA;EA5BJ;AACF","file":"styles.module.scss","sourcesContent":["@font-face {\r\n  font-family: 'Playfair Display Black';\r\n  src: url('/fonts/PlayfairDisplay-Black.ttf') format('truetype');\r\n}\r\n\r\n$showandnews-golden: rgb(183, 150, 79);\r\n$showandnews-burgundy: rgb(144, 26, 45);\r\n$showandnews-darkgrey: #444;\r\n\r\n$text-link: #2997ff;\r\n$text-color: $showandnews-darkgrey;\r\n$text-light: #999;\r\n\r\n$logo-background-color: $showandnews-golden;\r\n$logo-font: 'Playfair Display Black';\r\n\r\n$navigation-height: 150px;\r\n$navigation-height-mobile: 80px;\r\n\r\n$navigation-gradient-border-size: 1px;\r\n\r\n$navigation-menu-width-mobile: 240px;\r\n\r\n$background: #f8f9fa;\r\n$border: #ccc;\r\n\r\n$menu-item-color: $showandnews-burgundy;\r\n$menu-item-color-hover: $showandnews-golden;","@font-face {\n  font-family: \"Playfair Display Black\";\n  src: url(\"/fonts/PlayfairDisplay-Black.ttf\") format(\"truetype\");\n}\n.navigation {\n  height: 150px;\n  width: 100%;\n  background-color: white;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-between;\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  border-top: 0;\n  border-bottom: 1px transparent;\n  border-style: solid none;\n  border-image: linear-gradient(to right, transparent, #b7964f, transparent);\n  border-image-slice: 1;\n}\n.navigation .topStripe {\n  flex-direction: column;\n  width: 360px;\n  height: 24px;\n  font-size: 16px;\n  background-color: #b7964f;\n  color: white;\n  margin: 0 auto 12px auto;\n  display: flex;\n  text-align: center;\n}\n.navigation .navIcon {\n  font-size: 36px;\n  align-items: center;\n  cursor: pointer;\n  display: none;\n}\n.navigation .menuContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.navigation .menuList {\n  margin-block-start: 0;\n  margin-block-end: 12px;\n  padding-inline-start: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style-type: none;\n  font-weight: 500;\n}\n.navigation .menuList .menuItemLink {\n  text-decoration: none;\n  padding: 0 10px 0 10px;\n  font-size: 16px;\n  color: #901a2d;\n}\n.navigation .menuList .menuItemLink:hover {\n  transition: ease 300ms;\n  color: #b7964f;\n}\n.navigation .menuList .menuItem:not(:last-of-type):after {\n  content: \"|\";\n  color: #901a2d;\n  position: relative;\n  top: -3px;\n  font-size: 80%;\n}\n\n@media screen and (max-width: 900px) {\n  .navigation {\n    height: 80px;\n    flex-direction: row-reverse;\n  }\n  .navigation .menuContainerActive, .navigation .menuContainer {\n    width: 240px;\n    height: calc( 100% - 80px - 1px );\n    background-color: white;\n    position: fixed;\n    top: 81px;\n    transition: 300ms ease left;\n    align-items: flex-start;\n    justify-content: start;\n  }\n  .navigation .menuContainer {\n    left: -240px;\n  }\n  .navigation .menuContainerActive {\n    left: 0px;\n  }\n  .navigation .menuList {\n    padding: 20px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: baseline;\n    margin: 0;\n  }\n  .navigation .menuList .menuItem {\n    padding-bottom: 20px;\n  }\n  .navigation .menuList .menuItem:not(:last-of-type):after {\n    display: none;\n  }\n  .navigation .topStripe {\n    display: none;\n  }\n  .navigation .navIcon {\n    height: 40px;\n    display: block;\n    margin: auto 0;\n    margin-left: 20px;\n    float: left;\n  }\n}"]}]);
// Exports
exports.locals = {
	"navigation": "styles_navigation__ierWT",
	"topStripe": "styles_topStripe__pTXdS",
	"navIcon": "styles_navIcon__3qNsH",
	"menuContainer": "styles_menuContainer__1eTug",
	"menuList": "styles_menuList__1T0WA",
	"menuItemLink": "styles_menuItemLink__3Y5Lp",
	"menuItem": "styles_menuItem__xpZFA",
	"menuContainerActive": "styles_menuContainerActive__TsF9m"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24vc3R5bGVzLm1vZHVsZS5zY3NzPzk4OTUiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMubW9kdWxlLnNjc3MiXSwibmFtZXMiOlsibmF2TWVudUNhdGVnb3JpZXMiLCJ0aXRsZSIsInNsdWciLCJpZCIsIk5hdmlnYXRpb24iLCJ1c2VTdGF0ZSIsIm1lbnVBY3RpdmUiLCJzZXRNZW51QWN0aXZlIiwibW9iaWxlTmF2TWVudUljb24iLCJhbHRNb2JpbGVOYXZNZW51SWNvbiIsImdldEZpbGVuYW1lRnJvbVBhdGgiLCJzdHlsZXMiLCJuYXZpZ2F0aW9uIiwidG9wU3RyaXBlIiwibWVudUNvbnRhaW5lckFjdGl2ZSIsIm1lbnVDb250YWluZXIiLCJtZW51TGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIm1lbnVJdGVtIiwibWVudUl0ZW1MaW5rIiwibmF2SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0NBSUE7O0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsQ0FDeEI7QUFDRUMsT0FBSyxFQUFFLFFBRFQ7QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsSUFBRSxFQUFFO0FBSE4sQ0FEd0IsRUFNeEI7QUFDRUYsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLFFBRlI7QUFHRUMsSUFBRSxFQUFFO0FBSE4sQ0FOd0IsRUFXeEI7QUFDRUYsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsTUFBSSxFQUFFLFNBRlI7QUFHRUMsSUFBRSxFQUFFO0FBSE4sQ0FYd0IsRUFnQnhCO0FBQ0VGLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxVQUZSO0FBR0VDLElBQUUsRUFBRTtBQUhOLENBaEJ3QixDQUEx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QUcsMEJBQTBCLDJCQUEyQixpQkFBaUIsaUJBQWlCLG9CQUFvQiw4QkFBOEIsaUJBQWlCLDZCQUE2QixrQkFBa0IsdUJBQXVCLEdBQUcsd0JBQXdCLG9CQUFvQix3QkFBd0Isb0JBQW9CLGtCQUFrQixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHlCQUF5QiwwQkFBMEIsMkJBQTJCLDRCQUE0QixrQkFBa0IsNEJBQTRCLHdCQUF3QiwwQkFBMEIscUJBQXFCLEdBQUcsdUNBQXVDLDBCQUEwQiwyQkFBMkIsb0JBQW9CLG1CQUFtQixHQUFHLDZDQUE2QywyQkFBMkIsbUJBQW1CLEdBQUcsNERBQTRELG1CQUFtQixtQkFBbUIsdUJBQXVCLGNBQWMsbUJBQW1CLEdBQUcsMENBQTBDLGlCQUFpQixtQkFBbUIsa0NBQWtDLEtBQUssa0VBQWtFLG1CQUFtQix3Q0FBd0MsOEJBQThCLHNCQUFzQixnQkFBZ0Isa0NBQWtDLDhCQUE4Qiw2QkFBNkIsS0FBSyxnQ0FBZ0MsbUJBQW1CLEtBQUssc0NBQXNDLGdCQUFnQixLQUFLLDJCQUEyQixvQkFBb0IsNkJBQTZCLGtDQUFrQyw0QkFBNEIsZ0JBQWdCLEtBQUsscUNBQXFDLDJCQUEyQixLQUFLLDhEQUE4RCxvQkFBb0IsS0FBSyw0QkFBNEIsb0JBQW9CLEtBQUssMEJBQTBCLG1CQUFtQixxQkFBcUIscUJBQXFCLHdCQUF3QixrQkFBa0IsS0FBSyxHQUFHLEdBQUc7QUFDbDdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uYzU0YjlhYTdlZWE4N2E1MmJkMDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICdAL2NvbXBvbmVudHMvTG9nbyc7XHJcbmltcG9ydCBnZXRGaWxlbmFtZUZyb21QYXRoIGZyb20gJ0Avc2VydmljZXMvZ2V0RmlsZW5hbWVGcm9tUGF0aCdcclxuXHJcblxyXG4vLyA9PT0gSGFyZGNvZGUgPT09XHJcbmNvbnN0IG5hdk1lbnVDYXRlZ29yaWVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAn0JfQstGR0LfQtNGLJyxcclxuICAgIHNsdWc6ICdzdGFycycsXHJcbiAgICBpZDogMVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfQmtC40L3QvicsXHJcbiAgICBzbHVnOiAnY2luZW1hJyxcclxuICAgIGlkOiAyXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9Cc0L7QtNCwJyxcclxuICAgIHNsdWc6ICdmYXNoaW9uJyxcclxuICAgIGlkOiAzXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9CR0LvQvtCz0LXRgNGLJyxcclxuICAgIHNsdWc6ICdibG9nZ2VycycsXHJcbiAgICBpZDogNFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1vYmlsZU5hdk1lbnVJY29uID0gJy9pY29ucy9tb2JpbGUtbmF2aWdhdGlvbi1tZW51LWljb24ucG5nJ1xyXG4gIGNvbnN0IGFsdE1vYmlsZU5hdk1lbnVJY29uID0gZ2V0RmlsZW5hbWVGcm9tUGF0aChtb2JpbGVOYXZNZW51SWNvbiwgZmFsc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb259PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcFN0cmlwZX0+XHJcbiAgICAgICAgPHNwYW4+0J3QntCS0J7QodCi0Jgg0KjQntCjLdCR0JjQl9Cd0JXQodCQPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExvZ28gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVBY3RpdmUgPyBzdHlsZXMubWVudUNvbnRhaW5lckFjdGl2ZSA6IHN0eWxlcy5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWVudUxpc3R9PlxyXG4gICAgICAgICAge25hdk1lbnVDYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhdGVnb3J5L1tzbHVnXVwiIGFzPXtgL2NhdGVnb3J5LyR7aXRlbS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW1MaW5rfT57aXRlbS50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubmF2SWNvbn0gc3JjPXttb2JpbGVOYXZNZW51SWNvbn0gYWx0PXthbHRNb2JpbGVOYXZNZW51SWNvbn0gb25DbGljaz17KCkgPT4gc2V0TWVudUFjdGl2ZSghbWVudUFjdGl2ZSl9IC8+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb24iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZXMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXkgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9QbGF5ZmFpckRpc3BsYXktQmxhY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2llcldUIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkIG5vbmU7XFxuICAtby1ib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQsICNiNzk2NGYsIHRyYW5zcGFyZW50KTtcXG4gICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgI2I3OTY0ZiwgdHJhbnNwYXJlbnQpO1xcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfdG9wU3RyaXBlX19wVFhkUyB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDM2MHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3OTY0ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMCBhdXRvIDEycHggYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19uYXZJY29uX18zcU5zSCB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnN0eWxlc19uYXZpZ2F0aW9uX19pZXJXVCAuc3R5bGVzX21lbnVDb250YWluZXJfXzFlVHVnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19tZW51TGlzdF9fMVQwV0Ege1xcbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwO1xcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMTJweDtcXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMTJweDtcXG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcXG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnN0eWxlc19uYXZpZ2F0aW9uX19pZXJXVCAuc3R5bGVzX21lbnVMaXN0X18xVDBXQSAuc3R5bGVzX21lbnVJdGVtTGlua19fM1k1THAge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjOTAxYTJkO1xcbn1cXG4uc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfbWVudUxpc3RfXzFUMFdBIC5zdHlsZXNfbWVudUl0ZW1MaW5rX18zWTVMcDpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiBlYXNlIDMwMG1zO1xcbiAgY29sb3I6ICNiNzk2NGY7XFxufVxcbi5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19tZW51TGlzdF9fMVQwV0EgLnN0eWxlc19tZW51SXRlbV9feHBaRkE6bm90KDpsYXN0LW9mLXR5cGUpOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJ8XFxcIjtcXG4gIGNvbG9yOiAjOTAxYTJkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtM3B4O1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuc3R5bGVzX25hdmlnYXRpb25fX2llcldUIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB9XFxuICAuc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfbWVudUNvbnRhaW5lckFjdGl2ZV9fVHNGOW0sIC5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19tZW51Q29udGFpbmVyX18xZVR1ZyB7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gODBweCAtIDFweCApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDgxcHg7XFxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UgbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICB9XFxuICAuc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfbWVudUNvbnRhaW5lcl9fMWVUdWcge1xcbiAgICBsZWZ0OiAtMjQwcHg7XFxuICB9XFxuICAuc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfbWVudUNvbnRhaW5lckFjdGl2ZV9fVHNGOW0ge1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuICAuc3R5bGVzX25hdmlnYXRpb25fX2llcldUIC5zdHlsZXNfbWVudUxpc3RfXzFUMFdBIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19tZW51TGlzdF9fMVQwV0EgLnN0eWxlc19tZW51SXRlbV9feHBaRkEge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIH1cXG4gIC5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19tZW51TGlzdF9fMVQwV0EgLnN0eWxlc19tZW51SXRlbV9feHBaRkE6bm90KDpsYXN0LW9mLXR5cGUpOmFmdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc190b3BTdHJpcGVfX3BUWGRTIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zdHlsZXNfbmF2aWdhdGlvbl9faWVyV1QgLnN0eWxlc19uYXZJY29uX18zcU5zSCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkQ6L1NpdGUvc2hvd2FuZG5ld3Mvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJEOi9TaXRlL3Nob3dhbmRuZXdzL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQ0FBQTtFQUNBLCtEQUFBO0FDQ0Y7QUFEQTtFQUNFLGFEYWtCO0VDWmxCLFdBQUE7RUFDQSx1QkFBQTtFQUNBLFdEQ3FCO0VDQ3JCLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFHQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLDZFQUFBO0tBQUEsMEVBQUE7RUFNQSxxQkFBQTtBQU5GO0FBUUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLHlCRDlCaUI7RUMrQmpCLFlBQUE7RUFFQSx3QkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVZKO0FBYUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVhKO0FBY0U7RUFDRSx3QkFBQTtVQUFBLHFCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFaSjtBQWVNO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjRGxFZTtBQ3FEdkI7QUFlUTtFQUNFLHNCQUFBO0VBQ0EsY0R2RVc7QUMwRHJCO0FBaUJNO0VBQ0UsWUFBQTtFQUNBLGNENUVlO0VDNkVmLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFmUjs7QUFxQkE7RUFDRTtJQUNFLFlENUV1QjtJQzZFdkIsMkJBQUE7RUFsQkY7RUFvQkU7SUFDRSxZRDVFeUI7SUM2RXpCLGlDQUFBO0lBR0EsdUJBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtJQUNBLDJCQUFBO0lBQ0EsdUJBQUE7SUFDQSxzQkFBQTtFQXBCSjtFQXVCRTtJQUVFLFlBQUE7RUF0Qko7RUF3Qkk7SUFFRSxTQUFBO0VBdkJOO0VBMkJFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsMkJBQUE7SUFDQSxxQkFBQTtJQUNBLFNBQUE7RUF6Qko7RUEyQkk7SUFDRSxvQkFBQTtFQXpCTjtFQTBCTTtJQUNFLGFBQUE7RUF4QlI7RUE2QkU7SUFDRSxhQUFBO0VBM0JKO0VBOEJFO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBNUJKO0FBQ0ZcIixcImZpbGVcIjpcInN0eWxlcy5tb2R1bGUuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSBCbGFjayc7XFxyXFxuICBzcmM6IHVybCgnL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbiRzaG93YW5kbmV3cy1nb2xkZW46IHJnYigxODMsIDE1MCwgNzkpO1xcclxcbiRzaG93YW5kbmV3cy1idXJndW5keTogcmdiKDE0NCwgMjYsIDQ1KTtcXHJcXG4kc2hvd2FuZG5ld3MtZGFya2dyZXk6ICM0NDQ7XFxyXFxuXFxyXFxuJHRleHQtbGluazogIzI5OTdmZjtcXHJcXG4kdGV4dC1jb2xvcjogJHNob3dhbmRuZXdzLWRhcmtncmV5O1xcclxcbiR0ZXh0LWxpZ2h0OiAjOTk5O1xcclxcblxcclxcbiRsb2dvLWJhY2tncm91bmQtY29sb3I6ICRzaG93YW5kbmV3cy1nb2xkZW47XFxyXFxuJGxvZ28tZm9udDogJ1BsYXlmYWlyIERpc3BsYXkgQmxhY2snO1xcclxcblxcclxcbiRuYXZpZ2F0aW9uLWhlaWdodDogMTUwcHg7XFxyXFxuJG5hdmlnYXRpb24taGVpZ2h0LW1vYmlsZTogODBweDtcXHJcXG5cXHJcXG4kbmF2aWdhdGlvbi1ncmFkaWVudC1ib3JkZXItc2l6ZTogMXB4O1xcclxcblxcclxcbiRuYXZpZ2F0aW9uLW1lbnUtd2lkdGgtbW9iaWxlOiAyNDBweDtcXHJcXG5cXHJcXG4kYmFja2dyb3VuZDogI2Y4ZjlmYTtcXHJcXG4kYm9yZGVyOiAjY2NjO1xcclxcblxcclxcbiRtZW51LWl0ZW0tY29sb3I6ICRzaG93YW5kbmV3cy1idXJndW5keTtcXHJcXG4kbWVudS1pdGVtLWNvbG9yLWhvdmVyOiAkc2hvd2FuZG5ld3MtZ29sZGVuO1wiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXkgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9mb250cy9QbGF5ZmFpckRpc3BsYXktQmxhY2sudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG4ubmF2aWdhdGlvbiB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICB0b3A6IDA7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50LCAjYjc5NjRmLCB0cmFuc3BhcmVudCk7XFxuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XFxufVxcbi5uYXZpZ2F0aW9uIC50b3BTdHJpcGUge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzNjBweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzk2NGY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDAgYXV0byAxMnB4IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubmF2aWdhdGlvbiAubmF2SWNvbiB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm5hdmlnYXRpb24gLm1lbnVDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm5hdmlnYXRpb24gLm1lbnVMaXN0IHtcXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDEycHg7XFxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ubmF2aWdhdGlvbiAubWVudUxpc3QgLm1lbnVJdGVtTGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICM5MDFhMmQ7XFxufVxcbi5uYXZpZ2F0aW9uIC5tZW51TGlzdCAubWVudUl0ZW1MaW5rOmhvdmVyIHtcXG4gIHRyYW5zaXRpb246IGVhc2UgMzAwbXM7XFxuICBjb2xvcjogI2I3OTY0ZjtcXG59XFxuLm5hdmlnYXRpb24gLm1lbnVMaXN0IC5tZW51SXRlbTpub3QoOmxhc3Qtb2YtdHlwZSk6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcInxcXFwiO1xcbiAgY29sb3I6ICM5MDFhMmQ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0zcHg7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5uYXZpZ2F0aW9uIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICB9XFxuICAubmF2aWdhdGlvbiAubWVudUNvbnRhaW5lckFjdGl2ZSwgLm5hdmlnYXRpb24gLm1lbnVDb250YWluZXIge1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDgwcHggLSAxcHggKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA4MXB4O1xcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlIGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgfVxcbiAgLm5hdmlnYXRpb24gLm1lbnVDb250YWluZXIge1xcbiAgICBsZWZ0OiAtMjQwcHg7XFxuICB9XFxuICAubmF2aWdhdGlvbiAubWVudUNvbnRhaW5lckFjdGl2ZSB7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uIC5tZW51TGlzdCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuICAubmF2aWdhdGlvbiAubWVudUxpc3QgLm1lbnVJdGVtIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB9XFxuICAubmF2aWdhdGlvbiAubWVudUxpc3QgLm1lbnVJdGVtOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAubmF2aWdhdGlvbiAudG9wU3RyaXBlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5uYXZpZ2F0aW9uIC5uYXZJY29uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibmF2aWdhdGlvblwiOiBcInN0eWxlc19uYXZpZ2F0aW9uX19pZXJXVFwiLFxuXHRcInRvcFN0cmlwZVwiOiBcInN0eWxlc190b3BTdHJpcGVfX3BUWGRTXCIsXG5cdFwibmF2SWNvblwiOiBcInN0eWxlc19uYXZJY29uX18zcU5zSFwiLFxuXHRcIm1lbnVDb250YWluZXJcIjogXCJzdHlsZXNfbWVudUNvbnRhaW5lcl9fMWVUdWdcIixcblx0XCJtZW51TGlzdFwiOiBcInN0eWxlc19tZW51TGlzdF9fMVQwV0FcIixcblx0XCJtZW51SXRlbUxpbmtcIjogXCJzdHlsZXNfbWVudUl0ZW1MaW5rX18zWTVMcFwiLFxuXHRcIm1lbnVJdGVtXCI6IFwic3R5bGVzX21lbnVJdGVtX194cFpGQVwiLFxuXHRcIm1lbnVDb250YWluZXJBY3RpdmVcIjogXCJzdHlsZXNfbWVudUNvbnRhaW5lckFjdGl2ZV9fVHNGOW1cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=