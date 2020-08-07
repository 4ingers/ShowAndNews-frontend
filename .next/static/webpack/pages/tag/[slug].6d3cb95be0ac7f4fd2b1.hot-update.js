webpackHotUpdate_N_E("pages/tag/[slug]",{

/***/ "./components/layouts/pages/TagLayout/index.js":
/*!*****************************************************!*\
  !*** ./components/layouts/pages/TagLayout/index.js ***!
  \*****************************************************/
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
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ "./components/layouts/pages/TagLayout/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "D:\\Site\\showandnews\\components\\layouts\\pages\\TagLayout\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getPostsByTag($tagSlug: String, $offset: Int, $limit: Int) {\n    getPostsByTag(tagSlug: $tagSlug, offset: $offset, limit: $limit) {\n      id\n      image\n      title\n      content\n      created_at\n      category\n      description\n      author\n      tags\n      slug\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // import PostsMasonry from '@/components/feed/PostsMasonry'

var GET_POSTS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());

var TagLayout = function TagLayout(_ref) {
  _s();

  var slug = _ref.slug,
      offset = _ref.offset,
      limit = _ref.limit;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(GET_POSTS, {
    variables: {
      tagSlug: slug,
      offset: offset,
      limit: limit
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (error) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Error");
  if (loading) return __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, "Loading...");
  var fetchedPosts = data.getPostsByTag.map(function (post) {
    return {
      id: post.id,
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
  return __jsx("pre", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.content),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, JSON.stringify(fetchedPosts, null, 2));
};

_s(TagLayout, "OQZiY3KqWoytFPIJWw/H9Hrmbok=", false, function () {
  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c = TagLayout;
/* harmony default export */ __webpack_exports__["default"] = (TagLayout);

var _c;

$RefreshReg$(_c, "TagLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXRzL3BhZ2VzL1RhZ0xheW91dC9pbmRleC5qcyJdLCJuYW1lcyI6WyJHRVRfUE9TVFMiLCJncWwiLCJUYWdMYXlvdXQiLCJzbHVnIiwib2Zmc2V0IiwibGltaXQiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInRhZ1NsdWciLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwiZmV0Y2hlZFBvc3RzIiwiZ2V0UG9zdHNCeVRhZyIsIm1hcCIsInBvc3QiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiZGF0ZXRpbWUiLCJjcmVhdGVkX2F0IiwiY2F0ZWdvcnkiLCJ0YWdzIiwiaW1hZ2UiLCJjbGFzc25hbWVzIiwic3R5bGVzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHQyx3REFBSCxtQkFBZjs7QUFrQkEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFFWkMsb0VBQVEsQ0FBQ04sU0FBRCxFQUFZO0FBQ25ETyxhQUFTLEVBQUU7QUFDVEMsYUFBTyxFQUFFTCxJQURBO0FBRVRDLFlBQU0sRUFBTkEsTUFGUztBQUdUQyxXQUFLLEVBQUxBO0FBSFM7QUFEd0MsR0FBWixDQUZJO0FBQUEsTUFFckNJLE9BRnFDLGFBRXJDQSxPQUZxQztBQUFBLE1BRTVCQyxLQUY0QixhQUU1QkEsS0FGNEI7QUFBQSxNQUVyQkMsSUFGcUIsYUFFckJBLElBRnFCOztBQVM3QyxNQUFJRCxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDWCxNQUFJRCxPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBRWIsTUFBTUcsWUFBWSxHQUFHRCxJQUFJLENBQUNFLGFBQUwsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLElBQUk7QUFBQSxXQUFLO0FBQ25EQyxRQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFEMEM7QUFFbkRDLFdBQUssRUFBRUYsSUFBSSxDQUFDRSxLQUZ1QztBQUduREMsaUJBQVcsRUFBRUgsSUFBSSxDQUFDRyxXQUhpQztBQUluREMsYUFBTyxFQUFFSixJQUFJLENBQUNJLE9BSnFDO0FBS25EQyxjQUFRLEVBQUVMLElBQUksQ0FBQ00sVUFMb0M7QUFNbkRDLGNBQVEsRUFBRVAsSUFBSSxDQUFDTyxRQU5vQztBQU9uREMsVUFBSSxFQUFFUixJQUFJLENBQUNRLElBUHdDO0FBUW5EQyxXQUFLLEVBQUVULElBQUksQ0FBQ1MsS0FSdUM7QUFTbkRyQixVQUFJLEVBQUVZLElBQUksQ0FBQ1o7QUFUd0MsS0FBTDtBQUFBLEdBQTNCLENBQXJCO0FBWUEsU0FDRTtBQUFLLGFBQVMsRUFBRXNCLGlEQUFVLENBQUNDLDBEQUFNLENBQUNQLE9BQVIsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxJQUFJLENBQUNDLFNBQUwsQ0FBZWhCLFlBQWYsRUFBNkIsSUFBN0IsRUFBbUMsQ0FBbkMsQ0FESCxDQURGO0FBS0QsQ0E3QkQ7O0dBQU1WLFM7VUFFNkJJLDREOzs7S0FGN0JKLFM7QUErQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RhZy9bc2x1Z10uNmQzY2I5NWJlMGFjN2Y0ZmQyYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcclxuLy8gaW1wb3J0IFBvc3RzTWFzb25yeSBmcm9tICdAL2NvbXBvbmVudHMvZmVlZC9Qb3N0c01hc29ucnknXHJcblxyXG5cclxuY29uc3QgR0VUX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IGdldFBvc3RzQnlUYWcoJHRhZ1NsdWc6IFN0cmluZywgJG9mZnNldDogSW50LCAkbGltaXQ6IEludCkge1xyXG4gICAgZ2V0UG9zdHNCeVRhZyh0YWdTbHVnOiAkdGFnU2x1Zywgb2Zmc2V0OiAkb2Zmc2V0LCBsaW1pdDogJGxpbWl0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGNvbnRlbnRcclxuICAgICAgY3JlYXRlZF9hdFxyXG4gICAgICBjYXRlZ29yeVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBhdXRob3JcclxuICAgICAgdGFnc1xyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG5cclxuY29uc3QgVGFnTGF5b3V0ID0gKHsgc2x1Zywgb2Zmc2V0LCBsaW1pdCB9KSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QT1NUUywge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHRhZ1NsdWc6IHNsdWcsXHJcbiAgICAgIG9mZnNldCwgXHJcbiAgICAgIGxpbWl0XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yPC9oMT5cclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuXHJcbiAgY29uc3QgZmV0Y2hlZFBvc3RzID0gZGF0YS5nZXRQb3N0c0J5VGFnLm1hcChwb3N0ID0+ICh7XHJcbiAgICBpZDogcG9zdC5pZCxcclxuICAgIHRpdGxlOiBwb3N0LnRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb246IHBvc3QuZGVzY3JpcHRpb24sXHJcbiAgICBjb250ZW50OiBwb3N0LmNvbnRlbnQsXHJcbiAgICBkYXRldGltZTogcG9zdC5jcmVhdGVkX2F0LFxyXG4gICAgY2F0ZWdvcnk6IHBvc3QuY2F0ZWdvcnksXHJcbiAgICB0YWdzOiBwb3N0LnRhZ3MsXHJcbiAgICBpbWFnZTogcG9zdC5pbWFnZSxcclxuICAgIHNsdWc6IHBvc3Quc2x1Z1xyXG4gIH0pKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmNvbnRlbnQpfT5cclxuICAgICAge0pTT04uc3RyaW5naWZ5KGZldGNoZWRQb3N0cywgbnVsbCwgMil9XHJcbiAgICA8L3ByZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ0xheW91dCJdLCJzb3VyY2VSb290IjoiIn0=