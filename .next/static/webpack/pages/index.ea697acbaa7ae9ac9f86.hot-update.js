webpackHotUpdate_N_E("pages/index",{

/***/ "./components/body/CategoryPage.js":
/*!*****************************************!*\
  !*** ./components/body/CategoryPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-apollo */ "./node_modules/next-apollo/dist/index.js");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Site\\showandnews\\components\\body\\CategoryPage.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  {\n    getPostsByCategory(category_id: $id) {\n      id\n      image\n      title\n      created_at\n      category\n      description\n      author\n      tags\n      path\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

function CategoryPage(props) {
  _s();

  var _this = this;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(QUERY, {
    variables: {
      category_id: props.category_id
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Error");
  if (loading) return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
  return; // <main className="home">
  //   <section className="container">
  //     <div className="row">
  //       <section className="featured-posts-container">
  //         <PostMasonry posts={fetchedPosts} columns={2} tagsOnTop={true} />
  //       </section>
  //     </div>
  //   </section>
  // </main>

  __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, fetchedPosts.map(function (post) {
    return __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, post.title);
  }));
} // export default withApollo({ ssr: true })(CategoryPage)


_s(CategoryPage, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = CategoryPage;
/* harmony default export */ __webpack_exports__["default"] = (CategoryPage);

var _c;

$RefreshReg$(_c, "CategoryPage");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_body_CategoryPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/body/CategoryPage */ "./components/body/CategoryPage.js");
var _jsxFileName = "D:\\Site\\showandnews\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Index() {
  // const {categoryId, setCategoryId} = useState(0)
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Hello"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }));
}

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_1__["default"])({
  ssr: true
})(Index)); // export default Index

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5L0NhdGVnb3J5UGFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUVVFUlkiLCJncWwiLCJDYXRlZ29yeVBhZ2UiLCJwcm9wcyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwiY2F0ZWdvcnlfaWQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZmV0Y2hlZFBvc3RzIiwiZ2V0UG9zdHNCeUNhdGVnb3J5IiwibWFwIiwicG9zdCIsInRpdGxlIiwiZGF0ZXRpbWUiLCJjcmVhdGVkX2F0IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiaW1hZ2UiLCJwYXRoIiwiSW5kZXgiLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0Msd0RBQUgsbUJBQVg7O0FBZ0JBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ01DLG9FQUFRLENBQUNKLEtBQUQsRUFBUTtBQUMvQ0ssYUFBUyxFQUFFO0FBQ1RDLGlCQUFXLEVBQUVILEtBQUssQ0FBQ0c7QUFEVjtBQURvQyxHQUFSLENBRGQ7QUFBQSxNQUNuQkMsT0FEbUIsYUFDbkJBLE9BRG1CO0FBQUEsTUFDVkMsS0FEVSxhQUNWQSxLQURVO0FBQUEsTUFDSEMsSUFERyxhQUNIQSxJQURHOztBQU0zQixNQUFJRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJRCxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRWIsTUFBTUcsWUFBWSxHQUFHRCxJQUFJLENBQUNFLGtCQUFMLENBQXdCQyxHQUF4QixDQUE0QixVQUFBQyxJQUFJO0FBQUEsV0FDbkQ7QUFDRUMsV0FBSyxFQUFFRCxJQUFJLENBQUNDLEtBRGQ7QUFFRUMsY0FBUSxFQUFFRixJQUFJLENBQUNHLFVBRmpCO0FBR0VDLGNBQVEsRUFBRUosSUFBSSxDQUFDSSxRQUhqQjtBQUlFQyxVQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFKYjtBQUtFQyxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FMZDtBQU1FQyxVQUFJLEVBQUVQLElBQUksQ0FBQ087QUFOYixLQURtRDtBQUFBLEdBQWhDLENBQXJCO0FBV0EsU0FwQjJCLENBcUJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVixZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLFdBQ3BCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0EsSUFBSSxDQUFDQyxLQUFWLENBRG9CO0FBQUEsR0FBckIsQ0FESDtBQU1ILEMsQ0FFRDs7O0dBdENTWixZO1VBQzBCRSw0RDs7O0tBRDFCRixZO0FBdUNNQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLFNBQVNtQixLQUFULEdBQWlCO0FBQ2Y7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FERjtBQVlEOztLQWZRQSxLO0FBaUJNQywwSEFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQkYsS0FBMUIsQ0FBZixFLENBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWE2OTdhY2JhYTdhZTlhYzlmODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHt3aXRoQXBvbGxvfSBmcm9tICduZXh0LWFwb2xsbydcclxuXHJcbmNvbnN0IFFVRVJZID0gZ3FsYFxyXG4gIHtcclxuICAgIGdldFBvc3RzQnlDYXRlZ29yeShjYXRlZ29yeV9pZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNyZWF0ZWRfYXRcclxuICAgICAgY2F0ZWdvcnlcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgYXV0aG9yXHJcbiAgICAgIHRhZ3NcclxuICAgICAgcGF0aFxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBjYXRlZ29yeV9pZDogcHJvcHMuY2F0ZWdvcnlfaWRcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I8L2gxPlxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcclxuXHJcbiAgY29uc3QgZmV0Y2hlZFBvc3RzID0gZGF0YS5nZXRQb3N0c0J5Q2F0ZWdvcnkubWFwKHBvc3QgPT4gKFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogcG9zdC50aXRsZSxcclxuICAgICAgZGF0ZXRpbWU6IHBvc3QuY3JlYXRlZF9hdCxcclxuICAgICAgY2F0ZWdvcnk6IHBvc3QuY2F0ZWdvcnksXHJcbiAgICAgIHRhZ3M6IHBvc3QudGFncyxcclxuICAgICAgaW1hZ2U6IHBvc3QuaW1hZ2UsXHJcbiAgICAgIHBhdGg6IHBvc3QucGF0aFxyXG4gICAgfVxyXG4gICkpXHJcblxyXG4gIHJldHVybiBcclxuICAgIC8vIDxtYWluIGNsYXNzTmFtZT1cImhvbWVcIj5cclxuICAgIC8vICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIC8vICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVkLXBvc3RzLWNvbnRhaW5lclwiPlxyXG4gICAgLy8gICAgICAgICA8UG9zdE1hc29ucnkgcG9zdHM9e2ZldGNoZWRQb3N0c30gY29sdW1ucz17Mn0gdGFnc09uVG9wPXt0cnVlfSAvPlxyXG4gICAgLy8gICAgICAgPC9zZWN0aW9uPlxyXG4gICAgLy8gICAgIDwvZGl2PlxyXG4gICAgLy8gICA8L3NlY3Rpb24+XHJcbiAgICAvLyA8L21haW4+XHJcbiAgICA8ZGl2PlxyXG4gICAgICB7ZmV0Y2hlZFBvc3RzLm1hcChwb3N0ID0+IChcclxuICAgICAgICA8aDI+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICBcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShDYXRlZ29yeVBhZ2UpXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UGFnZSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJy4uL2xpYi9hcG9sbG8nXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IENhdGVnb3J5UGFnZSBmcm9tICcuLi9jb21wb25lbnRzL2JvZHkvQ2F0ZWdvcnlQYWdlJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIC8vIGNvbnN0IHtjYXRlZ29yeUlkLCBzZXRDYXRlZ29yeUlkfSA9IHVzZVN0YXRlKDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEhlbGxvXHJcbiAgICAgICAgey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyBvbkNoYW5nZT17ZSA9PiBzZXRDYXRlZ29yeUlkKGUudGFyZ2V0LnZhbHVlKX0vPiAqL31cclxuICAgICAgICB7LyogPGlucHV0IHR5cGU9J3RleHQnIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7LyogPENhdGVnb3J5UGFnZSBjYXRlZ29yeV9pZD17Y2F0ZWdvcnlJZH0gLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKEluZGV4KVxyXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=