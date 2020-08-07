webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/layouts/pages/PostLayout/index.js":
/*!******************************************************!*\
  !*** ./components/layouts/pages/PostLayout/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/layouts/pages/PostLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\layouts\\pages\\PostLayout\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getPostBySlug($postSlug: String) {\n    getPostBySlug(postSlug: $postSlug) {\n      title\n      description\n      content\n      image\n      created_at\n      # cat_name\n      # cat_slug\n      # tags_names\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_POST = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var PostLayout = function PostLayout(_ref) {
  _s();

  var slug = _ref.slug;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_POST, {
    variables: {
      postSlug: slug
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Error");
  if (loading) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }, "Loading...");
  console.log(data.getPostBySlug);
  var fetchedPost = data.getPostBySlug;
  return __jsx("pre", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, JSON.stringify(fetchedPost, null, 2));
};

_s(PostLayout, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = PostLayout;
/* harmony default export */ __webpack_exports__["default"] = (PostLayout);

var _c;

$RefreshReg$(_c, "PostLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL1Bvc3RMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiR0VUX1BPU1QiLCJncWwiLCJQb3N0TGF5b3V0Iiwic2x1ZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicG9zdFNsdWciLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFBvc3RCeVNsdWciLCJmZXRjaGVkUG9zdCIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBR0Msd0RBQUgsbUJBQWQ7O0FBZ0JBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0VDLG9FQUFRLENBQUNKLFFBQUQsRUFBVztBQUNsREssYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRUg7QUFERDtBQUR1QyxHQUFYLENBRFY7QUFBQSxNQUN2QkksT0FEdUIsYUFDdkJBLE9BRHVCO0FBQUEsTUFDZEMsS0FEYyxhQUNkQSxLQURjO0FBQUEsTUFDUEMsSUFETyxhQUNQQSxJQURPOztBQU0vQixNQUFJRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJRCxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRWJHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNHLGFBQWpCO0FBRUEsTUFBTUMsV0FBVyxHQUFHSixJQUFJLENBQUNHLGFBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRUUsaURBQVUsQ0FBQ0MsMERBQU0sQ0FBQ0MsU0FBUixDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxXQUFmLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBREgsQ0FERjtBQUtELENBbEJEOztHQUFNWCxVO1VBQzZCRSw0RDs7O0tBRDdCRixVO0FBb0JTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS45YzE4YWJjMDdlYTdmYzk1ZDFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuXHJcbmNvbnN0IEdFVF9QT1NUID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFBvc3RCeVNsdWcoJHBvc3RTbHVnOiBTdHJpbmcpIHtcclxuICAgIGdldFBvc3RCeVNsdWcocG9zdFNsdWc6ICRwb3N0U2x1Zykge1xyXG4gICAgICB0aXRsZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBjb250ZW50XHJcbiAgICAgIGltYWdlXHJcbiAgICAgIGNyZWF0ZWRfYXRcclxuICAgICAgIyBjYXRfbmFtZVxyXG4gICAgICAjIGNhdF9zbHVnXHJcbiAgICAgICMgdGFnc19uYW1lc1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuXHJcbmNvbnN0IFBvc3RMYXlvdXQgPSAoeyBzbHVnIH0pID0+IHsgIFxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QT1NULCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgcG9zdFNsdWc6IHNsdWdcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvcjwvaDE+XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblxyXG4gIGNvbnNvbGUubG9nKGRhdGEuZ2V0UG9zdEJ5U2x1Zyk7XHJcblxyXG4gIGNvbnN0IGZldGNoZWRQb3N0ID0gZGF0YS5nZXRQb3N0QnlTbHVnXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8cHJlIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuY29udGFpbmVyKX0+XHJcbiAgICAgIHtKU09OLnN0cmluZ2lmeShmZXRjaGVkUG9zdCwgbnVsbCwgMil9XHJcbiAgICA8L3ByZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9