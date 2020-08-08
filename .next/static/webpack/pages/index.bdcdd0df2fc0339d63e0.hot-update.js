webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layouts/pages/IndexLayout/index.js":
/*!*******************************************************!*\
  !*** ./components/layouts/pages/IndexLayout/index.js ***!
  \*******************************************************/
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/layouts/pages/IndexLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_sliders_IndexSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/sliders/IndexSlider */ "./components/sliders/IndexSlider/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\layouts\\pages\\IndexLayout\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getPostsByType($type: String, $limit: Int) {\n    getPostsByType(type: $type, limit: $limit) {\n      title\n      description\n      content\n      image\n      createdAt\n      slug\n      category\n      tagsName\n      tagsSlug\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GET_RECENT_POSTS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var IndexLayout = function IndexLayout() {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_RECENT_POSTS, {
    variables: {
      type: 'slider',
      limit: 3
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Error");
  if (loading) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 23
    }
  }, "Loading...");
  var fetchedPosts = data.getPostsByType;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_sliders_IndexSlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: fetchedPosts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }));
};

_s(IndexLayout, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = IndexLayout;
/* harmony default export */ __webpack_exports__["default"] = (IndexLayout);

var _c;

$RefreshReg$(_c, "IndexLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL0luZGV4TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9SRUNFTlRfUE9TVFMiLCJncWwiLCJJbmRleExheW91dCIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwidHlwZSIsImxpbWl0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImZldGNoZWRQb3N0cyIsImdldFBvc3RzQnlUeXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLGdCQUFnQixHQUFHQyx3REFBSCxtQkFBdEI7O0FBaUJBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msb0VBQVEsQ0FBQ0gsZ0JBQUQsRUFBbUI7QUFDMURJLGFBQVMsRUFBRTtBQUNUQyxVQUFJLEVBQUUsUUFERztBQUVUQyxXQUFLLEVBQUU7QUFGRTtBQUQrQyxHQUFuQixDQURqQjtBQUFBLE1BQ2hCQyxPQURnQixhQUNoQkEsT0FEZ0I7QUFBQSxNQUNQQyxLQURPLGFBQ1BBLEtBRE87QUFBQSxNQUNBQyxJQURBLGFBQ0FBLElBREE7O0FBT3hCLE1BQUlELEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFYixNQUFNRyxZQUFZLEdBQUdELElBQUksQ0FBQ0UsY0FBMUI7QUFFQSxTQUFPLG1FQUNMLE1BQUMsdUVBQUQ7QUFBZ0IsU0FBSyxFQUFFRCxZQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssQ0FBUDtBQUdELENBZkQ7O0dBQU1SLFc7VUFDNkJDLDREOzs7S0FEN0JELFc7QUFpQlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJkY2RkMGRmMmZjMDMzOWQ2M2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBBdXRvUGxheVNsaWRlciBmcm9tICdAL2NvbXBvbmVudHMvc2xpZGVycy9JbmRleFNsaWRlcidcclxuXHJcbmNvbnN0IEdFVF9SRUNFTlRfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UG9zdHNCeVR5cGUoJHR5cGU6IFN0cmluZywgJGxpbWl0OiBJbnQpIHtcclxuICAgIGdldFBvc3RzQnlUeXBlKHR5cGU6ICR0eXBlLCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgaW1hZ2VcclxuICAgICAgY3JlYXRlZEF0XHJcbiAgICAgIHNsdWdcclxuICAgICAgY2F0ZWdvcnlcclxuICAgICAgdGFnc05hbWVcclxuICAgICAgdGFnc1NsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBJbmRleExheW91dCA9ICgpID0+IHsgIFxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRUNFTlRfUE9TVFMsIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB0eXBlOiAnc2xpZGVyJyxcclxuICAgICAgbGltaXQ6IDNcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvcjwvaDE+XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblxyXG4gIGNvbnN0IGZldGNoZWRQb3N0cyA9IGRhdGEuZ2V0UG9zdHNCeVR5cGVcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgICA8QXV0b1BsYXlTbGlkZXIgcG9zdHM9e2ZldGNoZWRQb3N0c30vPlxyXG4gIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=