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
  console.log();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL1Bvc3RMYXlvdXQvaW5kZXguanMiXSwibmFtZXMiOlsiR0VUX1BPU1QiLCJncWwiLCJQb3N0TGF5b3V0Iiwic2x1ZyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwicG9zdFNsdWciLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoZWRQb3N0IiwiZ2V0UG9zdEJ5U2x1ZyIsImNsYXNzbmFtZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBR0Msd0RBQUgsbUJBQWQ7O0FBZ0JBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ0VDLG9FQUFRLENBQUNKLFFBQUQsRUFBVztBQUNsREssYUFBUyxFQUFFO0FBQ1RDLGNBQVEsRUFBRUg7QUFERDtBQUR1QyxHQUFYLENBRFY7QUFBQSxNQUN2QkksT0FEdUIsYUFDdkJBLE9BRHVCO0FBQUEsTUFDZEMsS0FEYyxhQUNkQSxLQURjO0FBQUEsTUFDUEMsSUFETyxhQUNQQSxJQURPOztBQU0vQixNQUFJRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJRCxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRWJHLFNBQU8sQ0FBQ0MsR0FBUjtBQUVBLE1BQU1DLFdBQVcsR0FBR0gsSUFBSSxDQUFDSSxhQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLGlEQUFVLENBQUNDLDBEQUFNLENBQUNDLFNBQVIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sV0FBZixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQURILENBREY7QUFLRCxDQWxCRDs7R0FBTVYsVTtVQUM2QkUsNEQ7OztLQUQ3QkYsVTtBQW9CU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMDRhODM1OTg4OWU2MGY1ODE5N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuXHJcblxyXG5jb25zdCBHRVRfUE9TVCA9IGdxbGBcclxuICBxdWVyeSBnZXRQb3N0QnlTbHVnKCRwb3N0U2x1ZzogU3RyaW5nKSB7XHJcbiAgICBnZXRQb3N0QnlTbHVnKHBvc3RTbHVnOiAkcG9zdFNsdWcpIHtcclxuICAgICAgdGl0bGVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgY29udGVudFxyXG4gICAgICBpbWFnZVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgICMgY2F0X25hbWVcclxuICAgICAgIyBjYXRfc2x1Z1xyXG4gICAgICAjIHRhZ3NfbmFtZXNcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBQb3N0TGF5b3V0ID0gKHsgc2x1ZyB9KSA9PiB7ICBcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUE9TVCwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHBvc3RTbHVnOiBzbHVnXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I8L2gxPlxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxyXG5cclxuICBjb25zb2xlLmxvZygpO1xyXG5cclxuICBjb25zdCBmZXRjaGVkUG9zdCA9IGRhdGEuZ2V0UG9zdEJ5U2x1Z1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRhaW5lcil9PlxyXG4gICAgICB7SlNPTi5zdHJpbmdpZnkoZmV0Y2hlZFBvc3QsIG51bGwsIDIpfVxyXG4gICAgPC9wcmU+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==