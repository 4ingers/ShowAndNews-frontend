webpackHotUpdate_N_E("pages/category/[id]",{

/***/ "./components/body/Category.js":
/*!*************************************!*\
  !*** ./components/body/Category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _feed_PostsMasonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/PostsMasonry */ "./components/body/feed/PostsMasonry/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\body\\Category.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query postsByCategory($category_id: Int){\n    getPostsByCategory(category_id: $category_id) {\n      id\n      image\n      title\n      created_at\n      category\n      description\n      author\n      tags\n      path\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

var Category = function Category(props) {
  _s();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(QUERY, {
    variables: {
      category_id: props.category_id
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
  var fetchedPosts = data.getPostsByCategory.map(function (post) {
    return {
      title: post.title,
      datetime: post.created_at,
      category: post.category,
      tags: post.tags,
      image: post.image,
      path: post.path
    };
  });
  return __jsx("main", {
    className: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "featured-posts-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_feed_PostsMasonry__WEBPACK_IMPORTED_MODULE_4__["default"], {
    posts: fetchedPosts,
    columns: 2,
    tagsOnTop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })))));
};

_s(Category, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Category;
/* harmony default export */ __webpack_exports__["default"] = (Category);

var _c;

$RefreshReg$(_c, "Category");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5L0NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlFVRVJZIiwiZ3FsIiwiQ2F0ZWdvcnkiLCJwcm9wcyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiY2F0ZWdvcnlfaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZmV0Y2hlZFBvc3RzIiwiZ2V0UG9zdHNCeUNhdGVnb3J5IiwibWFwIiwicG9zdCIsInRpdGxlIiwiZGF0ZXRpbWUiLCJjcmVhdGVkX2F0IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiaW1hZ2UiLCJwYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxLQUFLLEdBQUdDLHdEQUFILG1CQUFYOztBQWlCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDT0Msb0VBQVEsQ0FBQ0osS0FBRCxFQUFRO0FBQy9DSyxhQUFTLEVBQUU7QUFDVEMsaUJBQVcsRUFBRUgsS0FBSyxDQUFDRztBQURWO0FBRG9DLEdBQVIsQ0FEZjtBQUFBLE1BQ2xCQyxPQURrQixhQUNsQkEsT0FEa0I7QUFBQSxNQUNUQyxLQURTLGFBQ1RBLEtBRFM7QUFBQSxNQUNGQyxJQURFLGFBQ0ZBLElBREU7O0FBTTFCLE1BQUlELEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFYixNQUFNRyxZQUFZLEdBQUdELElBQUksQ0FBQ0Usa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQUFDLElBQUk7QUFBQSxXQUNuRDtBQUNFQyxXQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FEZDtBQUVFQyxjQUFRLEVBQUVGLElBQUksQ0FBQ0csVUFGakI7QUFHRUMsY0FBUSxFQUFFSixJQUFJLENBQUNJLFFBSGpCO0FBSUVDLFVBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUpiO0FBS0VDLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUxkO0FBTUVDLFVBQUksRUFBRVAsSUFBSSxDQUFDTztBQU5iLEtBRG1EO0FBQUEsR0FBaEMsQ0FBckI7QUFXQSxTQUNFO0FBQU0sYUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUMsMEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQWMsU0FBSyxFQUFFVixZQUFyQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBK0MsYUFBUyxFQUFFLElBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixDQURGO0FBV0QsQ0EvQkQ7O0dBQU1SLFE7VUFDNkJFLDREOzs7S0FEN0JGLFE7QUFpQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhdGVnb3J5L1tpZF0uNDUxNGQ4NjY4ZjkzNzkyYTdmZTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5cclxuaW1wb3J0IFBvc3RzTWFzb25yeSBmcm9tICcuL2ZlZWQvUG9zdHNNYXNvbnJ5J1xyXG5cclxuXHJcbmNvbnN0IFFVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHBvc3RzQnlDYXRlZ29yeSgkY2F0ZWdvcnlfaWQ6IEludCl7XHJcbiAgICBnZXRQb3N0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlfaWQ6ICRjYXRlZ29yeV9pZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBpbWFnZVxyXG4gICAgICB0aXRsZVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIGNhdGVnb3J5XHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGF1dGhvclxyXG4gICAgICB0YWdzXHJcbiAgICAgIHBhdGhcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgY2F0ZWdvcnlfaWQ6IHByb3BzLmNhdGVnb3J5X2lkXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yPC9oMT5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XHJcblxyXG4gIGNvbnN0IGZldGNoZWRQb3N0cyA9IGRhdGEuZ2V0UG9zdHNCeUNhdGVnb3J5Lm1hcChwb3N0ID0+IChcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXHJcbiAgICAgIGRhdGV0aW1lOiBwb3N0LmNyZWF0ZWRfYXQsXHJcbiAgICAgIGNhdGVnb3J5OiBwb3N0LmNhdGVnb3J5LFxyXG4gICAgICB0YWdzOiBwb3N0LnRhZ3MsXHJcbiAgICAgIGltYWdlOiBwb3N0LmltYWdlLFxyXG4gICAgICBwYXRoOiBwb3N0LnBhdGhcclxuICAgIH1cclxuICApKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtcG9zdHMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxQb3N0c01hc29ucnkgcG9zdHM9e2ZldGNoZWRQb3N0c30gY29sdW1ucz17Mn0gdGFnc09uVG9wPXt0cnVlfSAvPlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=