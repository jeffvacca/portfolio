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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction DevPage() {\n    _s();\n    const [testimonialData, setTestimonialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data/testimonials.json\").then((res)=>res.json()).then((data)=>{\n            console.log(data);\n            setTestimonialData(data.testimonials);\n            console.log(testimonialData);\n        });\n    }, []);\n    const items = [\n        \"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n}\n_s(DevPage, \"/TsNAyWczZ+MNn0rZvkzb6ZgHAI=\");\n_c = DevPage;\nvar _c;\n$RefreshReg$(_c, \"DevPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXYvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRTBCO0FBQ2tCO0FBSTdCLFNBQVNHOztJQUN2QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUU7SUFDaEVDLGdEQUFTQSxDQUFDO1FBQ1RJLE1BQU0sMkJBQ0pDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTkMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaTCxtQkFBbUJLLEtBQUtHLFlBQVk7WUFDcENGLFFBQVFDLEdBQUcsQ0FBQ1I7UUFDYjtJQUNGLEdBQUcsRUFBRTtJQUNMLE1BQU1VLFFBQVE7UUFDYjtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0E7SUFDRCxxQkFDQyw4REFBQ0M7Ozs7O0FBTUg7R0F6QndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGV2L3BhZ2UudHN4PzFmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldlBhZ2UoKSB7XG5cdGNvbnN0IFt0ZXN0aW1vbmlhbERhdGEsIHNldFRlc3RpbW9uaWFsRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZmV0Y2goJy9kYXRhL3Rlc3RpbW9uaWFscy5qc29uJylcblx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0c2V0VGVzdGltb25pYWxEYXRhKGRhdGEudGVzdGltb25pYWxzKVxuXHRcdFx0XHRjb25zb2xlLmxvZyh0ZXN0aW1vbmlhbERhdGEpO1xuXHRcdFx0fSlcblx0fSwgW10pXG5cdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFwiSmVmZiBWYWNjYSBpcyBhbiBhbWF6aW5nIGZyb250IGVuZCBkZXZlbG9wZXIuIEFueSBjb21wYW55IHdvdWxkIGJlIGx1Y2t5IHRvIGhhdmUgaGltLiBJIGhhdmUgYmVlbiB3b3JraW5nIHdpdGggaGltIG92ZXIgdGhlIGxhc3QgY291cGxlIHllYXJzIGFuZCBoaXMgc2tpbGxzIG5vdCBvbmx5IHdpdGggc29mdHdhcmUgYnV0IHdpdGggcGVvcGxlIGFyZSB0b3Agbm90Y2guXCIsXG5cdFx0XCJJdGVtIDJcIixcblx0XHRcIkl0ZW0gM1wiLFxuXHRcdFwiSXRlbSA0XCIsXG5cdFx0XCJJdGVtIDVcIlxuXHRdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7Lyoge2RhdGE/LnRlc3RpbW9uaWFscy5tYXAoKGl0ZW06IGFueSwgaTogYW55KSA9PiAoXG5cdFx0XHRcdDxUZXN0aW1vbmlhbCBrZXk9e2l9IGl0ZW09e2l0ZW19IGluZGV4PXtpfSAvPlxuXHRcdFx0KSl9ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEZXZQYWdlIiwidGVzdGltb25pYWxEYXRhIiwic2V0VGVzdGltb25pYWxEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGVzdGltb25pYWxzIiwiaXRlbXMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dev/page.tsx\n"));

/***/ })

});