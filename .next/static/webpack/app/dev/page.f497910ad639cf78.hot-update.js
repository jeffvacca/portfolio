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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction DevPage() {\n    const items = [\n        \"Item 1\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: items.map((item, i)=>// <motion.div\n            // \tkey={i}\n            // \tclassName=\"card w-36 h-[500px] bg-secondary border\"\n            // \tinitial={{\n            // \t\topacity: 0,\n            // \t\t// if odd index card,slide from right instead of left\n            // \t\tx: i % 2 === 0 ? 50 : -50\n            // \t}}\n            // \twhileInView={{\n            // \t\topacity: 1,\n            // \t\tx: 0, // Slide in to its original position\n            // \t\ttransition: {\n            // \t\t\tduration: 1 // Animation duration\n            // \t\t}\n            // \t}}\n            // \tviewport={{ once: true }}\n            // >\n            // \t<p className=\"card-text\">{item}</p>\n            // </motion.div>\n            // <div className=\"card w-36 h-[500px] bg-secondary border\" key={i}>{item}</div>\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Testimonial, {\n                text: item,\n                index: i\n            }, i, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n_c = DevPage;\nvar _c;\n$RefreshReg$(_c, \"DevPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXYvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHMEI7QUFLWCxTQUFTQztJQUN2QixNQUFNQyxRQUFRO1FBQUM7UUFBVTtRQUFVO1FBQVU7UUFBVTtLQUFTO0lBQ2hFLHFCQUNDLDhEQUFDQztrQkFDQ0QsTUFBTUUsR0FBRyxDQUFDLENBQUNDLE1BQVdDLElBQ3RCLGNBQWM7WUFDZCxXQUFXO1lBQ1gsdURBQXVEO1lBQ3ZELGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsMERBQTBEO1lBQzFELDhCQUE4QjtZQUM5QixNQUFNO1lBQ04sa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQiwrQ0FBK0M7WUFDL0Msa0JBQWtCO1lBQ2xCLHVDQUF1QztZQUN2QyxNQUFNO1lBQ04sTUFBTTtZQUNOLDZCQUE2QjtZQUM3QixJQUFJO1lBQ0osdUNBQXVDO1lBQ3ZDLGdCQUFnQjtZQUNoQixnRkFBZ0Y7MEJBQ2hGLDhEQUFDQztnQkFBb0JDLE1BQU1IO2dCQUFNSSxPQUFPSDtlQUF0QkE7Ozs7Ozs7Ozs7QUFJdEI7S0E3QndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGV2L3BhZ2UudHN4PzFmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZXN0aW1vbmlhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZQYWdlKCkge1xuXHRjb25zdCBpdGVtcyA9IFtcIkl0ZW0gMVwiLCBcIkl0ZW0gMlwiLCBcIkl0ZW0gM1wiLCBcIkl0ZW0gNFwiLCBcIkl0ZW0gNVwiXTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2l0ZW1zLm1hcCgoaXRlbTogYW55LCBpOiBhbnkpID0+IChcblx0XHRcdFx0Ly8gPG1vdGlvbi5kaXZcblx0XHRcdFx0Ly8gXHRrZXk9e2l9XG5cdFx0XHRcdC8vIFx0Y2xhc3NOYW1lPVwiY2FyZCB3LTM2IGgtWzUwMHB4XSBiZy1zZWNvbmRhcnkgYm9yZGVyXCJcblx0XHRcdFx0Ly8gXHRpbml0aWFsPXt7XG5cdFx0XHRcdC8vIFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHQvLyBcdFx0Ly8gaWYgb2RkIGluZGV4IGNhcmQsc2xpZGUgZnJvbSByaWdodCBpbnN0ZWFkIG9mIGxlZnRcblx0XHRcdFx0Ly8gXHRcdHg6IGkgJSAyID09PSAwID8gNTAgOiAtNTBcblx0XHRcdFx0Ly8gXHR9fVxuXHRcdFx0XHQvLyBcdHdoaWxlSW5WaWV3PXt7XG5cdFx0XHRcdC8vIFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHQvLyBcdFx0eDogMCwgLy8gU2xpZGUgaW4gdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uXG5cdFx0XHRcdC8vIFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdC8vIFx0XHRcdGR1cmF0aW9uOiAxIC8vIEFuaW1hdGlvbiBkdXJhdGlvblxuXHRcdFx0XHQvLyBcdFx0fVxuXHRcdFx0XHQvLyBcdH19XG5cdFx0XHRcdC8vIFx0dmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuXHRcdFx0XHQvLyA+XG5cdFx0XHRcdC8vIFx0PHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2l0ZW19PC9wPlxuXHRcdFx0XHQvLyA8L21vdGlvbi5kaXY+XG5cdFx0XHRcdC8vIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB3LTM2IGgtWzUwMHB4XSBiZy1zZWNvbmRhcnkgYm9yZGVyXCIga2V5PXtpfT57aXRlbX08L2Rpdj5cblx0XHRcdFx0PFRlc3RpbW9uaWFsIGtleT17aX0gdGV4dD17aXRlbX0gaW5kZXg9e2l9IC8+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRldlBhZ2UiLCJpdGVtcyIsImRpdiIsIm1hcCIsIml0ZW0iLCJpIiwiVGVzdGltb25pYWwiLCJ0ZXh0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dev/page.tsx\n"));

/***/ })

});