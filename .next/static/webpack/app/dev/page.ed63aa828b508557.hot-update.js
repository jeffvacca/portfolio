"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dev/page",{

/***/ "(app-pages-browser)/./app/dev/page.tsx":
/*!**************************!*\
  !*** ./app/dev/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/testimonial */ \"(app-pages-browser)/./components/testimonial.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DevPage() {\n    _s();\n    const [testimonialData, setTestimonialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data/testimonials.json\").then((res)=>res.json()).then((data)=>{\n            console.log(data);\n            setTestimonialData(data.testimonials);\n        });\n    }, []);\n    console.log(testimonialData);\n    const items = [\n        \"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen-calc\",\n        children: testimonialData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_testimonial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: item,\n                index: index\n            }, item.id, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n}\n_s(DevPage, \"/TsNAyWczZ+MNn0rZvkzb6ZgHAI=\");\n_c = DevPage;\nvar _c;\n$RefreshReg$(_c, \"DevPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXYvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUVXO0FBRXhDLFNBQVNJOztJQUN2QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUU7SUFDaEVDLGdEQUFTQSxDQUFDO1FBQ1RLLE1BQU0sMkJBQ0pDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaTCxtQkFBbUJLLEtBQUtHLFlBQVk7UUFFckM7SUFDRixHQUFHLEVBQUU7SUFDTEYsUUFBUUMsR0FBRyxDQUFDUjtJQUNaLE1BQU1VLFFBQVE7UUFDYjtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0E7SUFDRCxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYlosZ0JBQWdCYSxHQUFHLENBQUMsQ0FBQ0MsTUFBVUMsc0JBQy9CLDhEQUFDakIsK0RBQVdBO2dCQUFlZ0IsTUFBTUE7Z0JBQU1DLE9BQU9BO2VBQTVCRCxLQUFLRSxFQUFFOzs7Ozs7Ozs7O0FBSTdCO0dBMUJ3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kZXYvcGFnZS50c3g/MWY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgVGVzdGltb25pYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGVzdGltb25pYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2UGFnZSgpIHtcblx0Y29uc3QgW3Rlc3RpbW9uaWFsRGF0YSwgc2V0VGVzdGltb25pYWxEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaCgnL2RhdGEvdGVzdGltb25pYWxzLmpzb24nKVxuXHRcdFx0LnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRzZXRUZXN0aW1vbmlhbERhdGEoZGF0YS50ZXN0aW1vbmlhbHMpO1xuXHRcdFx0XHRcblx0XHRcdH0pXG5cdH0sIFtdKVxuXHRjb25zb2xlLmxvZyh0ZXN0aW1vbmlhbERhdGEpO1xuXHRjb25zdCBpdGVtcyA9IFtcblx0XHRcIkplZmYgVmFjY2EgaXMgYW4gYW1hemluZyBmcm9udCBlbmQgZGV2ZWxvcGVyLiBBbnkgY29tcGFueSB3b3VsZCBiZSBsdWNreSB0byBoYXZlIGhpbS4gSSBoYXZlIGJlZW4gd29ya2luZyB3aXRoIGhpbSBvdmVyIHRoZSBsYXN0IGNvdXBsZSB5ZWFycyBhbmQgaGlzIHNraWxscyBub3Qgb25seSB3aXRoIHNvZnR3YXJlIGJ1dCB3aXRoIHBlb3BsZSBhcmUgdG9wIG5vdGNoLlwiLFxuXHRcdFwiSXRlbSAyXCIsXG5cdFx0XCJJdGVtIDNcIixcblx0XHRcIkl0ZW0gNFwiLFxuXHRcdFwiSXRlbSA1XCJcblx0XTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuLWNhbGNcIj5cblx0XHRcdHt0ZXN0aW1vbmlhbERhdGEubWFwKChpdGVtOmFueSwgaW5kZXgpID0+IChcblx0XHRcdFx0PFRlc3RpbW9uaWFsIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gaW5kZXg9e2luZGV4fSAgLz5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0aW1vbmlhbCIsIkRldlBhZ2UiLCJ0ZXN0aW1vbmlhbERhdGEiLCJzZXRUZXN0aW1vbmlhbERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0aW1vbmlhbHMiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dev/page.tsx\n"));

/***/ })

});