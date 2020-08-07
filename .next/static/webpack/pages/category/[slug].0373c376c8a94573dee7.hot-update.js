webpackHotUpdate_N_E("pages/category/[slug]",{

/***/ "./components/layouts/pages/CategoryLayout/index.js":
/*!**********************************************************!*\
  !*** ./components/layouts/pages/CategoryLayout/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./components/layouts/pages/CategoryLayout/hooks.js");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.scss */ "./components/layouts/pages/CategoryLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_feed_PostsGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/feed/PostsGrid */ "./components/feed/PostsGrid/index.js");


var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\layouts\\pages\\CategoryLayout\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getPostsByCategory($catSlug: String, $offset: Int, $limit: Int) {\n    getPostCount\n    getPostsByCategory(catSlug: $catSlug, offset: $offset, limit: $limit) {\n      id\n      image\n      title\n      content\n      created_at\n      category\n      description\n      author\n      tags\n      slug\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var GET_POSTS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var CategoryLayout = function CategoryLayout(_ref) {
  _s();

  var catSlug = _ref.slug;
  var ageSize = 9;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultPageSize),
      pageSize = _useState[0],
      setPageSize = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      currentPage = _useState2[0],
      setCurrent = _useState2[1];

  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage, pageSize]);

  var onShowSizeChange = function onShowSizeChange(_, pageSize) {
    setCurrent(1);
    setPageSize(pageSize);
  };

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_POSTS, {
    variables: {
      catSlug: catSlug,
      offset: (currentPage - 1) * pageSize,
      limit: pageSize
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "\u041E\u0448\u0438\u0431\u043A\u0430!");
  if (loading) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 23
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
  var posts = data.getPostsByCategory.map(function (post) {
    return {
      title: post.title,
      description: post.description,
      content: post.content,
      datetime: post.created_at,
      category: post.category,
      tags: post.tags,
      image: post.image,
      slug: post.slug
    };
  });
  return __jsx("section", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.row,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.featuredPostsContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_components_feed_PostsGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    posts: posts,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Pagination"], {
    showSizeChanger: true,
    onShowSizeChange: onShowSizeChange,
    pageSize: pageSize,
    total: data.getPostCount,
    defaultCurrent: currentPage,
    onChange: setCurrent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))));
};

_s(CategoryLayout, "tEAKt1uvI+JQu6LfKv/jeJoGZPg=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_5__["default"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = CategoryLayout;
/* harmony default export */ __webpack_exports__["default"] = (CategoryLayout);

var _c;

$RefreshReg$(_c, "CategoryLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL0NhdGVnb3J5TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9QT1NUUyIsImdxbCIsIkNhdGVnb3J5TGF5b3V0IiwiY2F0U2x1ZyIsInNsdWciLCJhZ2VTaXplIiwidXNlU3RhdGUiLCJkZWZhdWx0UGFnZVNpemUiLCJwYWdlU2l6ZSIsInNldFBhZ2VTaXplIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50IiwidXNlVXBkYXRlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJvblNob3dTaXplQ2hhbmdlIiwiXyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwib2Zmc2V0IiwibGltaXQiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicG9zdHMiLCJnZXRQb3N0c0J5Q2F0ZWdvcnkiLCJtYXAiLCJwb3N0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJkYXRldGltZSIsImNyZWF0ZWRfYXQiLCJjYXRlZ29yeSIsInRhZ3MiLCJpbWFnZSIsInN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImZlYXR1cmVkUG9zdHNDb250YWluZXIiLCJnZXRQb3N0Q291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFNBQVMsR0FBR0Msd0RBQUgsbUJBQWY7O0FBbUJBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBdUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQXBCQyxJQUFvQjtBQUM1QyxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7O0FBRDRDLGtCQUdaQyxzREFBUSxDQUFDQyxlQUFELENBSEk7QUFBQSxNQUdyQ0MsUUFIcUM7QUFBQSxNQUczQkMsV0FIMkI7O0FBQUEsbUJBSVZILHNEQUFRLENBQUMsQ0FBRCxDQUpFO0FBQUEsTUFJckNJLFdBSnFDO0FBQUEsTUFJeEJDLFVBSndCOztBQU01Q0Msd0RBQWUsQ0FBQyxZQUFNO0FBQ3BCQyxVQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFQyxTQUFHLEVBQUUsQ0FBUDtBQUFVQyxjQUFRLEVBQUU7QUFBcEIsS0FBZDtBQUNELEdBRmMsRUFFWixDQUFDTixXQUFELEVBQWNGLFFBQWQsQ0FGWSxDQUFmOztBQUlBLE1BQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFJVixRQUFKLEVBQWlCO0FBQ3hDRyxjQUFVLENBQUMsQ0FBRCxDQUFWO0FBQ0FGLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsR0FIRDs7QUFWNEMsa0JBZVhXLG9FQUFRLENBQUNuQixTQUFELEVBQVk7QUFDbkRvQixhQUFTLEVBQUU7QUFDVGpCLGFBQU8sRUFBUEEsT0FEUztBQUVUa0IsWUFBTSxFQUFFLENBQUNYLFdBQVcsR0FBRyxDQUFmLElBQW9CRixRQUZuQjtBQUdUYyxXQUFLLEVBQUVkO0FBSEU7QUFEd0MsR0FBWixDQWZHO0FBQUEsTUFlcENlLE9BZm9DLGFBZXBDQSxPQWZvQztBQUFBLE1BZTNCQyxLQWYyQixhQWUzQkEsS0FmMkI7QUFBQSxNQWVwQkMsSUFmb0IsYUFlcEJBLElBZm9COztBQXNCNUMsTUFBSUQsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FBUDtBQUNYLE1BQUlELE9BQUosRUFBYSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkRBQVA7QUFFYixNQUFNRyxLQUFLLEdBQUdELElBQUksQ0FBQ0Usa0JBQUwsQ0FBd0JDLEdBQXhCLENBQTRCLFVBQUNDLElBQUQ7QUFBQSxXQUFXO0FBQ25EQyxXQUFLLEVBQUVELElBQUksQ0FBQ0MsS0FEdUM7QUFFbkRDLGlCQUFXLEVBQUVGLElBQUksQ0FBQ0UsV0FGaUM7QUFHbkRDLGFBQU8sRUFBRUgsSUFBSSxDQUFDRyxPQUhxQztBQUluREMsY0FBUSxFQUFFSixJQUFJLENBQUNLLFVBSm9DO0FBS25EQyxjQUFRLEVBQUVOLElBQUksQ0FBQ00sUUFMb0M7QUFNbkRDLFVBQUksRUFBRVAsSUFBSSxDQUFDTyxJQU53QztBQU9uREMsV0FBSyxFQUFFUixJQUFJLENBQUNRLEtBUHVDO0FBUW5EakMsVUFBSSxFQUFFeUIsSUFBSSxDQUFDekI7QUFSd0MsS0FBWDtBQUFBLEdBQTVCLENBQWQ7QUFXQSxTQUNFO0FBQVMsYUFBUyxFQUFFa0MsMERBQU0sQ0FBQ0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCwwREFBTSxDQUFDRSxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUyxhQUFTLEVBQUVGLDBEQUFNLENBQUNHLHNCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrRUFBRDtBQUFXLFNBQUssRUFBRWYsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQywrQ0FBRDtBQUNFLG1CQUFlLE1BRGpCO0FBRUUsb0JBQWdCLEVBQUVULGdCQUZwQjtBQUdFLFlBQVEsRUFBRVQsUUFIWjtBQUlFLFNBQUssRUFBRWlCLElBQUksQ0FBQ2lCLFlBSmQ7QUFLRSxrQkFBYyxFQUFFaEMsV0FMbEI7QUFNRSxZQUFRLEVBQUVDLFVBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixDQURGO0FBaUJELENBckREOztHQUFNVCxjO1VBTUpVLDhDLEVBU2lDTyw0RDs7O0tBZjdCakIsYztBQXVEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcnkvW3NsdWddLjAzNzNjMzc2YzhhOTQ1NzNkZWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgZ3FsIH0gZnJvbSAnYXBvbGxvLWJvb3N0J1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCdcclxuXHJcbmltcG9ydCB1c2VVcGRhdGVFZmZlY3QgZnJvbSAnLi9ob29rcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IFBvc3RzR3JpZCBmcm9tICdAL2NvbXBvbmVudHMvZmVlZC9Qb3N0c0dyaWQnXHJcblxyXG5cclxuY29uc3QgR0VUX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFBvc3RzQnlDYXRlZ29yeSgkY2F0U2x1ZzogU3RyaW5nLCAkb2Zmc2V0OiBJbnQsICRsaW1pdDogSW50KSB7XHJcbiAgICBnZXRQb3N0Q291bnRcclxuICAgIGdldFBvc3RzQnlDYXRlZ29yeShjYXRTbHVnOiAkY2F0U2x1Zywgb2Zmc2V0OiAkb2Zmc2V0LCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICBjYXRlZ29yeVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBhdXRob3JcclxuICAgICAgdGFnc1xyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcnlMYXlvdXQgPSAoeyBzbHVnOiBjYXRTbHVnIH0pID0+IHtcclxuICBjb25zdCBhZ2VTaXplID0gOVxyXG4gIFxyXG4gIGNvbnN0IFtwYWdlU2l6ZSwgc2V0UGFnZVNpemVdID0gdXNlU3RhdGUoZGVmYXVsdFBhZ2VTaXplKVxyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgxKVxyXG4gIFxyXG4gIHVzZVVwZGF0ZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcclxuICB9LCBbY3VycmVudFBhZ2UsIHBhZ2VTaXplXSlcclxuICBcclxuICBjb25zdCBvblNob3dTaXplQ2hhbmdlID0gKF8sIHBhZ2VTaXplKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KDEpXHJcbiAgICBzZXRQYWdlU2l6ZShwYWdlU2l6ZSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1BPU1RTLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgY2F0U2x1ZyxcclxuICAgICAgb2Zmc2V0OiAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplLFxyXG4gICAgICBsaW1pdDogcGFnZVNpemVcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxoMT7QntGI0LjQsdC60LAhPC9oMT5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9oMT5cclxuICBcclxuICBjb25zdCBwb3N0cyA9IGRhdGEuZ2V0UG9zdHNCeUNhdGVnb3J5Lm1hcCgocG9zdCkgPT4gKHtcclxuICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHBvc3QuZGVzY3JpcHRpb24sXHJcbiAgICBjb250ZW50OiBwb3N0LmNvbnRlbnQsXHJcbiAgICBkYXRldGltZTogcG9zdC5jcmVhdGVkX2F0LFxyXG4gICAgY2F0ZWdvcnk6IHBvc3QuY2F0ZWdvcnksXHJcbiAgICB0YWdzOiBwb3N0LnRhZ3MsXHJcbiAgICBpbWFnZTogcG9zdC5pbWFnZSxcclxuICAgIHNsdWc6IHBvc3Quc2x1Z1xyXG4gIH0pKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmZlYXR1cmVkUG9zdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgPFBvc3RzR3JpZCBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXJcclxuICAgICAgICAgICAgb25TaG93U2l6ZUNoYW5nZT17b25TaG93U2l6ZUNoYW5nZX1cclxuICAgICAgICAgICAgcGFnZVNpemU9e3BhZ2VTaXplfVxyXG4gICAgICAgICAgICB0b3RhbD17ZGF0YS5nZXRQb3N0Q291bnR9XHJcbiAgICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXtjdXJyZW50UGFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldEN1cnJlbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=