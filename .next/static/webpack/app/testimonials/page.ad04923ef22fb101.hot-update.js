"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/testimonials/page",{

/***/ "(app-pages-browser)/./app/testimonials/page.tsx":
/*!***********************************!*\
  !*** ./app/testimonials/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestimonialsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/testimonial */ \"(app-pages-browser)/./components/testimonial.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction TestimonialsPage() {\n    _s();\n    const [testimonialData, setTestimonialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data/testimonials.json\").then((res)=>res.json()).then((data)=>{\n            setTestimonialData(data.testimonials);\n        });\n    }, []);\n    const items = [\n        \"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen-calc\",\n        children: testimonialData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_testimonial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                item: item,\n                index: index\n            }, item.id, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, this);\n}\n_s(TestimonialsPage, \"/TsNAyWczZ+MNn0rZvkzb6ZgHAI=\");\n_c = TestimonialsPage;\nvar _c;\n$RefreshReg$(_c, \"TestimonialsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0aW1vbmlhbHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUwQjtBQUNrQjtBQUVXO0FBRXhDLFNBQVNJOztJQUN2QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdMLCtDQUFRQSxDQUFRLEVBQUU7SUFDaEVDLGdEQUFTQSxDQUFDO1FBQ1RLLE1BQU0sMkJBQ0pDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTkwsbUJBQW1CSyxLQUFLQyxZQUFZO1FBRXJDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsUUFBUTtRQUNiO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDQTtJQUNELHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiVixnQkFBZ0JXLEdBQUcsQ0FBQyxDQUFDQyxNQUFVQyxzQkFDL0IsOERBQUNmLCtEQUFXQTtnQkFBZWMsTUFBTUE7Z0JBQU1DLE9BQU9BO2VBQTVCRCxLQUFLRSxFQUFFOzs7Ozs7Ozs7O0FBSTdCO0dBeEJ3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Rlc3RpbW9uaWFscy9wYWdlLnRzeD9hNmM0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy90ZXN0aW1vbmlhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHNQYWdlKCkge1xuXHRjb25zdCBbdGVzdGltb25pYWxEYXRhLCBzZXRUZXN0aW1vbmlhbERhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoKCcvZGF0YS90ZXN0aW1vbmlhbHMuanNvbicpXG5cdFx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0VGVzdGltb25pYWxEYXRhKGRhdGEudGVzdGltb25pYWxzKTtcblx0XHRcdFx0XG5cdFx0XHR9KVxuXHR9LCBbXSlcblx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XCJKZWZmIFZhY2NhIGlzIGFuIGFtYXppbmcgZnJvbnQgZW5kIGRldmVsb3Blci4gQW55IGNvbXBhbnkgd291bGQgYmUgbHVja3kgdG8gaGF2ZSBoaW0uIEkgaGF2ZSBiZWVuIHdvcmtpbmcgd2l0aCBoaW0gb3ZlciB0aGUgbGFzdCBjb3VwbGUgeWVhcnMgYW5kIGhpcyBza2lsbHMgbm90IG9ubHkgd2l0aCBzb2Z0d2FyZSBidXQgd2l0aCBwZW9wbGUgYXJlIHRvcCBub3RjaC5cIixcblx0XHRcIkl0ZW0gMlwiLFxuXHRcdFwiSXRlbSAzXCIsXG5cdFx0XCJJdGVtIDRcIixcblx0XHRcIkl0ZW0gNVwiXG5cdF07XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbi1jYWxjXCI+XG5cdFx0XHR7dGVzdGltb25pYWxEYXRhLm1hcCgoaXRlbTphbnksIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxUZXN0aW1vbmlhbCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gIC8+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVGVzdGltb25pYWwiLCJUZXN0aW1vbmlhbHNQYWdlIiwidGVzdGltb25pYWxEYXRhIiwic2V0VGVzdGltb25pYWxEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0ZXN0aW1vbmlhbHMiLCJpdGVtcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/testimonials/page.tsx\n"));

/***/ })

});