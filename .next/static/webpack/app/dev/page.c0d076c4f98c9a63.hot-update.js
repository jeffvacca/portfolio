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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/testimonial */ \"(app-pages-browser)/./components/testimonial.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DevPage() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data/testimonials.json\").then((res)=>res.json()).then((data)=>{\n            setData(data.testimonials);\n        });\n    }, []);\n    // const items = [\n    // \t\"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.\",\n    // \t\"Item 2\",\n    // \t\"Item 3\",\n    // \t\"Item 4\",\n    // \t\"Item 5\"\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data === null || data === void 0 ? void 0 : data.map((item, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_testimonial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: item,\n                index: i\n            }, i, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_s(DevPage, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = DevPage;\nvar _c;\n$RefreshReg$(_c, \"DevPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXYvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUVXO0FBRXhDLFNBQVNJOztJQUN2QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQU07SUFDdENDLGdEQUFTQSxDQUFDO1FBQ1RLLE1BQU0sMkJBQ0pDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0g7WUFDTkMsUUFBUUQsS0FBS00sWUFBWTtRQUMxQjtJQUNGLEdBQUcsRUFBRTtJQUNMLGtCQUFrQjtJQUNsQix5TkFBeU47SUFDek4sYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLEtBQUs7SUFDTCxxQkFDQyw4REFBQ0M7a0JBQ0NQLGlCQUFBQSwyQkFBQUEsS0FBTVEsR0FBRyxDQUFDLENBQUNDLE1BQVdDLGtCQUN0Qiw4REFBQ1osK0RBQVdBO2dCQUFTVyxNQUFNQTtnQkFBTUUsT0FBT0Q7ZUFBdEJBOzs7Ozs7Ozs7O0FBSXRCO0dBdkJ3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rldi9wYWdlLnRzeD8xZjdmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZXN0aW1vbmlhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZQYWdlKCkge1xuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2goJy9kYXRhL3Rlc3RpbW9uaWFscy5qc29uJylcblx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXREYXRhKGRhdGEudGVzdGltb25pYWxzKVxuXHRcdFx0fSlcblx0fSwgW10pXG5cdC8vIGNvbnN0IGl0ZW1zID0gW1xuXHQvLyBcdFwiSmVmZiBWYWNjYSBpcyBhbiBhbWF6aW5nIGZyb250IGVuZCBkZXZlbG9wZXIuIEFueSBjb21wYW55IHdvdWxkIGJlIGx1Y2t5IHRvIGhhdmUgaGltLiBJIGhhdmUgYmVlbiB3b3JraW5nIHdpdGggaGltIG92ZXIgdGhlIGxhc3QgY291cGxlIHllYXJzIGFuZCBoaXMgc2tpbGxzIG5vdCBvbmx5IHdpdGggc29mdHdhcmUgYnV0IHdpdGggcGVvcGxlIGFyZSB0b3Agbm90Y2guXCIsXG5cdC8vIFx0XCJJdGVtIDJcIixcblx0Ly8gXHRcIkl0ZW0gM1wiLFxuXHQvLyBcdFwiSXRlbSA0XCIsXG5cdC8vIFx0XCJJdGVtIDVcIlxuXHQvLyBdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7ZGF0YT8ubWFwKChpdGVtOiBhbnksIGk6IGFueSkgPT4gKFxuXHRcdFx0XHQ8VGVzdGltb25pYWwga2V5PXtpfSBpdGVtPXtpdGVtfSBpbmRleD17aX0gLz5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0aW1vbmlhbCIsIkRldlBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ0ZXN0aW1vbmlhbHMiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dev/page.tsx\n"));

/***/ })

});