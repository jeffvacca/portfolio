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

/***/ "(app-pages-browser)/./components/testimonial.tsx":
/*!************************************!*\
  !*** ./components/testimonial.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nfunction Testimonial(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"card w-full h-[500px] bg-secondary border\",\n        initial: {\n            opacity: 0,\n            // if odd index card,slide from right instead of left\n            x: props.index % 2 === 0 ? 50 : -50\n        },\n        whileInView: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1 // Animation duration\n            }\n        },\n        viewport: {\n            once: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"card-text\",\n                children: props.text\n            }, void 0, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n                children: props.text\n            }, void 0, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonial);\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLFNBQVNFLFlBQVlDLEtBQVM7SUFDNUIscUJBQ0UsOERBQUNGLGlEQUFNQSxDQUFDRyxHQUFHO1FBQ1RDLFdBQVU7UUFDVkMsU0FBUztZQUNQQyxTQUFTO1lBQ1QscURBQXFEO1lBQ3JEQyxHQUFHTCxNQUFNTSxLQUFLLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUNuQztRQUNBQyxhQUFhO1lBQ1hILFNBQVM7WUFDVEMsR0FBRztZQUNIRyxZQUFZO2dCQUNWQyxVQUFVLEVBQUUscUJBQXFCO1lBQ25DO1FBQ0Y7UUFDQUMsVUFBVTtZQUFFQyxNQUFNO1FBQUs7OzBCQUV2Qiw4REFBQ0M7Z0JBQUVWLFdBQVU7MEJBQWFGLE1BQU1hLElBQUk7Ozs7OzswQkFDcEMsOERBQUNDOzBCQUFZZCxNQUFNYSxJQUFJOzs7Ozs7Ozs7Ozs7QUFHN0I7S0F0QlNkO0FBd0JULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4PzljZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHM6YW55KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNhcmQgdy1mdWxsIGgtWzUwMHB4XSBiZy1zZWNvbmRhcnkgYm9yZGVyXCJcbiAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgLy8gaWYgb2RkIGluZGV4IGNhcmQsc2xpZGUgZnJvbSByaWdodCBpbnN0ZWFkIG9mIGxlZnRcbiAgICAgICAgeDogcHJvcHMuaW5kZXggJSAyID09PSAwID8gNTAgOiAtNTBcbiAgICAgIH19XG4gICAgICB3aGlsZUluVmlldz17e1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB4OiAwLCAvLyBTbGlkZSBpbiB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAxIC8vIEFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgID5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntwcm9wcy50ZXh0fTwvcD5cbiAgICAgIDxibG9ja3F1b3RlPntwcm9wcy50ZXh0fTwvYmxvY2txdW90ZT5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiVGVzdGltb25pYWwiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImluZGV4Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJwIiwidGV4dCIsImJsb2NrcXVvdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonial.tsx\n"));

/***/ })

});