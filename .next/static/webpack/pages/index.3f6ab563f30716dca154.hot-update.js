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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query postsByCategory($category_id: Int){\n    getPostsByCategory(category_id: $category_id) {\n      id\n      image\n      title\n      created_at\n      category\n      description\n      author\n      tags\n      path\n    }\n  }\n"]);

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
  return (// <main className="home">
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
        key: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, post.title);
    }))
  );
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2R5L0NhdGVnb3J5UGFnZS5qcyJdLCJuYW1lcyI6WyJRVUVSWSIsImdxbCIsIkNhdGVnb3J5UGFnZSIsInByb3BzIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJjYXRlZ29yeV9pZCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJmZXRjaGVkUG9zdHMiLCJnZXRQb3N0c0J5Q2F0ZWdvcnkiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJkYXRldGltZSIsImNyZWF0ZWRfYXQiLCJjYXRlZ29yeSIsInRhZ3MiLCJpbWFnZSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQyx3REFBSCxtQkFBWDs7QUFnQkEsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTUMsb0VBQVEsQ0FBQ0osS0FBRCxFQUFRO0FBQy9DSyxhQUFTLEVBQUU7QUFDVEMsaUJBQVcsRUFBRUgsS0FBSyxDQUFDRztBQURWO0FBRG9DLEdBQVIsQ0FEZDtBQUFBLE1BQ25CQyxPQURtQixhQUNuQkEsT0FEbUI7QUFBQSxNQUNWQyxLQURVLGFBQ1ZBLEtBRFU7QUFBQSxNQUNIQyxJQURHLGFBQ0hBLElBREc7O0FBTTNCLE1BQUlELEtBQUosRUFBVyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQVA7QUFFYixNQUFNRyxZQUFZLEdBQUdELElBQUksQ0FBQ0Usa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQUFDLElBQUk7QUFBQSxXQUNuRDtBQUNFQyxXQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FEZDtBQUVFQyxjQUFRLEVBQUVGLElBQUksQ0FBQ0csVUFGakI7QUFHRUMsY0FBUSxFQUFFSixJQUFJLENBQUNJLFFBSGpCO0FBSUVDLFVBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUpiO0FBS0VDLFdBQUssRUFBRU4sSUFBSSxDQUFDTSxLQUxkO0FBTUVDLFVBQUksRUFBRVAsSUFBSSxDQUFDTztBQU5iLEtBRG1EO0FBQUEsR0FBaEMsQ0FBckI7QUFXQSxTQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1YsWUFBWSxDQUFDRSxHQUFiLENBQWlCLFVBQUFDLElBQUk7QUFBQSxhQUNwQjtBQUFJLFdBQUcsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVNBLElBQUksQ0FBQ0MsS0FBZCxDQURvQjtBQUFBLEtBQXJCLENBREg7QUFWRjtBQWdCRCxDLENBRUQ7OztHQXRDU1osWTtVQUMwQkUsNEQ7OztLQUQxQkYsWTtBQXVDTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2Y2YWI1NjNmMzA3MTZkY2ExNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHt3aXRoQXBvbGxvfSBmcm9tICduZXh0LWFwb2xsbydcclxuXHJcbmNvbnN0IFFVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHBvc3RzQnlDYXRlZ29yeSgkY2F0ZWdvcnlfaWQ6IEludCl7XHJcbiAgICBnZXRQb3N0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnlfaWQ6ICRjYXRlZ29yeV9pZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBpbWFnZVxyXG4gICAgICB0aXRsZVxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIGNhdGVnb3J5XHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGF1dGhvclxyXG4gICAgICB0YWdzXHJcbiAgICAgIHBhdGhcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KFFVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgY2F0ZWdvcnlfaWQ6IHByb3BzLmNhdGVnb3J5X2lkXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yPC9oMT5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT47XHJcblxyXG4gIGNvbnN0IGZldGNoZWRQb3N0cyA9IGRhdGEuZ2V0UG9zdHNCeUNhdGVnb3J5Lm1hcChwb3N0ID0+IChcclxuICAgIHtcclxuICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXHJcbiAgICAgIGRhdGV0aW1lOiBwb3N0LmNyZWF0ZWRfYXQsXHJcbiAgICAgIGNhdGVnb3J5OiBwb3N0LmNhdGVnb3J5LFxyXG4gICAgICB0YWdzOiBwb3N0LnRhZ3MsXHJcbiAgICAgIGltYWdlOiBwb3N0LmltYWdlLFxyXG4gICAgICBwYXRoOiBwb3N0LnBhdGhcclxuICAgIH1cclxuICApKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPG1haW4gY2xhc3NOYW1lPVwiaG9tZVwiPlxyXG4gICAgLy8gICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZWQtcG9zdHMtY29udGFpbmVyXCI+XHJcbiAgICAvLyAgICAgICAgIDxQb3N0TWFzb25yeSBwb3N0cz17ZmV0Y2hlZFBvc3RzfSBjb2x1bW5zPXsyfSB0YWdzT25Ub3A9e3RydWV9IC8+XHJcbiAgICAvLyAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAvLyAgIDwvc2VjdGlvbj5cclxuICAgIC8vIDwvbWFpbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIHtmZXRjaGVkUG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgIDxoMiBrZXk+e3Bvc3QudGl0bGV9PC9oMj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkoQ2F0ZWdvcnlQYWdlKVxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9