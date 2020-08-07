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
  var defaultPageSize = 9;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL0NhdGVnb3J5TGF5b3V0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkdFVF9QT1NUUyIsImdxbCIsIkNhdGVnb3J5TGF5b3V0IiwiY2F0U2x1ZyIsInNsdWciLCJkZWZhdWx0UGFnZVNpemUiLCJ1c2VTdGF0ZSIsInBhZ2VTaXplIiwic2V0UGFnZVNpemUiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnQiLCJ1c2VVcGRhdGVFZmZlY3QiLCJ3aW5kb3ciLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsIm9uU2hvd1NpemVDaGFuZ2UiLCJfIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJvZmZzZXQiLCJsaW1pdCIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJwb3N0cyIsImdldFBvc3RzQnlDYXRlZ29yeSIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImRhdGV0aW1lIiwiY3JlYXRlZF9hdCIsImNhdGVnb3J5IiwidGFncyIsImltYWdlIiwic3R5bGVzIiwiY29udGFpbmVyIiwicm93IiwiZmVhdHVyZWRQb3N0c0NvbnRhaW5lciIsImdldFBvc3RDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx3REFBSCxtQkFBZjs7QUFtQkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF1QjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBcEJDLElBQW9CO0FBQzVDLE1BQU1DLGVBQWUsR0FBRyxDQUF4Qjs7QUFENEMsa0JBR1pDLHNEQUFRLENBQUNELGVBQUQsQ0FISTtBQUFBLE1BR3JDRSxRQUhxQztBQUFBLE1BRzNCQyxXQUgyQjs7QUFBQSxtQkFJVkYsc0RBQVEsQ0FBQyxDQUFELENBSkU7QUFBQSxNQUlyQ0csV0FKcUM7QUFBQSxNQUl4QkMsVUFKd0I7O0FBTTVDQyx3REFBZSxDQUFDLFlBQU07QUFDcEJDLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQUVDLFNBQUcsRUFBRSxDQUFQO0FBQVVDLGNBQVEsRUFBRTtBQUFwQixLQUFkO0FBQ0QsR0FGYyxFQUVaLENBQUNOLFdBQUQsRUFBY0YsUUFBZCxDQUZZLENBQWY7O0FBSUEsTUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQUlWLFFBQUosRUFBaUI7QUFDeENHLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDQUYsZUFBVyxDQUFDRCxRQUFELENBQVg7QUFDRCxHQUhEOztBQVY0QyxrQkFlWFcsb0VBQVEsQ0FBQ2xCLFNBQUQsRUFBWTtBQUNuRG1CLGFBQVMsRUFBRTtBQUNUaEIsYUFBTyxFQUFQQSxPQURTO0FBRVRpQixZQUFNLEVBQUUsQ0FBQ1gsV0FBVyxHQUFHLENBQWYsSUFBb0JGLFFBRm5CO0FBR1RjLFdBQUssRUFBRWQ7QUFIRTtBQUR3QyxHQUFaLENBZkc7QUFBQSxNQWVwQ2UsT0Fmb0MsYUFlcENBLE9BZm9DO0FBQUEsTUFlM0JDLEtBZjJCLGFBZTNCQSxLQWYyQjtBQUFBLE1BZXBCQyxJQWZvQixhQWVwQkEsSUFmb0I7O0FBc0I1QyxNQUFJRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUFQO0FBQ1gsTUFBSUQsT0FBSixFQUFhLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFBUDtBQUViLE1BQU1HLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxrQkFBTCxDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsSUFBRDtBQUFBLFdBQVc7QUFDbkRDLFdBQUssRUFBRUQsSUFBSSxDQUFDQyxLQUR1QztBQUVuREMsaUJBQVcsRUFBRUYsSUFBSSxDQUFDRSxXQUZpQztBQUduREMsYUFBTyxFQUFFSCxJQUFJLENBQUNHLE9BSHFDO0FBSW5EQyxjQUFRLEVBQUVKLElBQUksQ0FBQ0ssVUFKb0M7QUFLbkRDLGNBQVEsRUFBRU4sSUFBSSxDQUFDTSxRQUxvQztBQU1uREMsVUFBSSxFQUFFUCxJQUFJLENBQUNPLElBTndDO0FBT25EQyxXQUFLLEVBQUVSLElBQUksQ0FBQ1EsS0FQdUM7QUFRbkRoQyxVQUFJLEVBQUV3QixJQUFJLENBQUN4QjtBQVJ3QyxLQUFYO0FBQUEsR0FBNUIsQ0FBZDtBQVdBLFNBQ0U7QUFBUyxhQUFTLEVBQUVpQywwREFBTSxDQUFDQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVELDBEQUFNLENBQUNFLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFTLGFBQVMsRUFBRUYsMERBQU0sQ0FBQ0csc0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFEO0FBQVcsU0FBSyxFQUFFZixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLCtDQUFEO0FBQ0UsbUJBQWUsTUFEakI7QUFFRSxvQkFBZ0IsRUFBRVQsZ0JBRnBCO0FBR0UsWUFBUSxFQUFFVCxRQUhaO0FBSUUsU0FBSyxFQUFFaUIsSUFBSSxDQUFDaUIsWUFKZDtBQUtFLGtCQUFjLEVBQUVoQyxXQUxsQjtBQU1FLFlBQVEsRUFBRUMsVUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQURGLENBREY7QUFpQkQsQ0FyREQ7O0dBQU1SLGM7VUFNSlMsOEMsRUFTaUNPLDREOzs7S0FmN0JoQixjO0FBdURTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uMzgzMDA4NTc5Zjk4ODMxMmQzNTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnXHJcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICdhbnRkJ1xyXG5cclxuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL2hvb2tzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUG9zdHNHcmlkIGZyb20gJ0AvY29tcG9uZW50cy9mZWVkL1Bvc3RzR3JpZCdcclxuXHJcblxyXG5jb25zdCBHRVRfUE9TVFMgPSBncWxgXHJcbiAgcXVlcnkgZ2V0UG9zdHNCeUNhdGVnb3J5KCRjYXRTbHVnOiBTdHJpbmcsICRvZmZzZXQ6IEludCwgJGxpbWl0OiBJbnQpIHtcclxuICAgIGdldFBvc3RDb3VudFxyXG4gICAgZ2V0UG9zdHNCeUNhdGVnb3J5KGNhdFNsdWc6ICRjYXRTbHVnLCBvZmZzZXQ6ICRvZmZzZXQsIGxpbWl0OiAkbGltaXQpIHtcclxuICAgICAgaWRcclxuICAgICAgaW1hZ2VcclxuICAgICAgdGl0bGVcclxuICAgICAgY29udGVudFxyXG4gICAgICBjcmVhdGVkX2F0XHJcbiAgICAgIGNhdGVnb3J5XHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGF1dGhvclxyXG4gICAgICB0YWdzXHJcbiAgICAgIHNsdWdcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yeUxheW91dCA9ICh7IHNsdWc6IGNhdFNsdWcgfSkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRQYWdlU2l6ZSA9IDlcclxuICBcclxuICBjb25zdCBbcGFnZVNpemUsIHNldFBhZ2VTaXplXSA9IHVzZVN0YXRlKGRlZmF1bHRQYWdlU2l6ZSlcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMSlcclxuICBcclxuICB1c2VVcGRhdGVFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbCh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXHJcbiAgfSwgW2N1cnJlbnRQYWdlLCBwYWdlU2l6ZV0pXHJcbiAgXHJcbiAgY29uc3Qgb25TaG93U2l6ZUNoYW5nZSA9IChfLCBwYWdlU2l6ZSkgPT4ge1xyXG4gICAgc2V0Q3VycmVudCgxKVxyXG4gICAgc2V0UGFnZVNpemUocGFnZVNpemUpXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QT1NUUywge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIGNhdFNsdWcsXHJcbiAgICAgIG9mZnNldDogKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZSxcclxuICAgICAgbGltaXQ6IHBhZ2VTaXplXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAoZXJyb3IpIHJldHVybiA8aDE+0J7RiNC40LHQutCwITwvaDE+XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+0JfQsNCz0YDRg9C30LrQsC4uLjwvaDE+XHJcbiAgXHJcbiAgY29uc3QgcG9zdHMgPSBkYXRhLmdldFBvc3RzQnlDYXRlZ29yeS5tYXAoKHBvc3QpID0+ICh7XHJcbiAgICB0aXRsZTogcG9zdC50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBwb3N0LmRlc2NyaXB0aW9uLFxyXG4gICAgY29udGVudDogcG9zdC5jb250ZW50LFxyXG4gICAgZGF0ZXRpbWU6IHBvc3QuY3JlYXRlZF9hdCxcclxuICAgIGNhdGVnb3J5OiBwb3N0LmNhdGVnb3J5LFxyXG4gICAgdGFnczogcG9zdC50YWdzLFxyXG4gICAgaW1hZ2U6IHBvc3QuaW1hZ2UsXHJcbiAgICBzbHVnOiBwb3N0LnNsdWdcclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlZFBvc3RzQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxQb3N0c0dyaWQgcG9zdHM9e3Bvc3RzfSAvPlxyXG4gICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXHJcbiAgICAgICAgICAgIG9uU2hvd1NpemVDaGFuZ2U9e29uU2hvd1NpemVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBhZ2VTaXplPXtwYWdlU2l6ZX1cclxuICAgICAgICAgICAgdG90YWw9e2RhdGEuZ2V0UG9zdENvdW50fVxyXG4gICAgICAgICAgICBkZWZhdWx0Q3VycmVudD17Y3VycmVudFBhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDdXJyZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9