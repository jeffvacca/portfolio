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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-BJUMDPFJ.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs\");\n\n\n\n\nfunction Testimonial(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0,\n            // if odd index card,slide from right instead of left\n            x: props.index % 2 === 0 ? 50 : -50\n        },\n        whileInView: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1 // Animation duration\n            }\n        },\n        viewport: {\n            once: false\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.card_default, {\n            className: \"mb-24  pt-8 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"absolute top-2 start-2 text-malibu-300\",\n                    width: \"64\",\n                    height: \"64\",\n                    viewBox: \"0 0 16 16\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"aria-hidden\": \"true\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                x1: \"50%\",\n                                y1: \"92.034%\",\n                                x2: \"50%\",\n                                y2: \"7.2%\",\n                                id: \"a\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: \"0%\",\n                                        stopColor: \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        stopOpacity: \".2\",\n                                        offset: \"100%\",\n                                        stopColor: \"#ef32d9\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z\",\n                            fill: \"url(#a)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.card_body_default, {\n                    className: \"pl-20 pr-6 md:pr-8 pb-8 font-extralight text-2xl md:text-3xl text-slate-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.card_footer_default, {\n                    className: \"px-16 text-right flex-col items-end pb-8 text-slate-400 font-sans\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"block font-light text-slate-600\",\n                            children: [\n                                \"-\",\n                                props.item.author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-mono text-slate-400\",\n                            children: [\n                                props.item.title,\n                                \" \\xb7 \",\n                                props.item.company\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonial);\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ3dCO0FBRS9ELFNBQVNLLFlBQVlDLEtBQVU7SUFDN0IscUJBQ0UsOERBQUNMLGlEQUFNQSxDQUFDTSxHQUFHO1FBQ1RDLFNBQVM7WUFDUEMsU0FBUztZQUNULHFEQUFxRDtZQUNyREMsR0FBR0osTUFBTUssS0FBSyxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDbkM7UUFDQUMsYUFBYTtZQUNYSCxTQUFTO1lBQ1RDLEdBQUc7WUFDSEcsWUFBWTtnQkFDVkMsVUFBVSxFQUFFLHFCQUFxQjtZQUNuQztRQUNGO1FBQ0FDLFVBQVU7WUFBRUMsTUFBTTtRQUFNO2tCQUV4Qiw0RUFBQ2QsMkRBQUlBO1lBQUNlLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBeUNFLE9BQU07b0JBQUtDLFFBQU87b0JBQUtDLFNBQVE7b0JBQVlDLE1BQUs7b0JBQU9DLE9BQU07b0JBQTZCQyxlQUFZOztzQ0FDNUosOERBQUNDO3NDQUNDLDRFQUFDQztnQ0FBZUMsSUFBRztnQ0FBTUMsSUFBRztnQ0FBVUMsSUFBRztnQ0FBTUMsSUFBRztnQ0FBT0MsSUFBRzs7a0RBQzFELDhEQUFDQzt3Q0FBS0MsUUFBTzt3Q0FBS0MsV0FBVTs7Ozs7O2tEQUM1Qiw4REFBQ0Y7d0NBQUtHLGFBQVk7d0NBQUtGLFFBQU87d0NBQU9DLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUduRCw4REFBQ0U7NEJBQUtDLEdBQUU7NEJBQTJqQ2YsTUFBSzs7Ozs7Ozs7Ozs7OzhCQUcxa0MsOERBQUNuQixnRUFBUUE7b0JBQUNjLFdBQVU7OEJBQ2xCLDRFQUFDcUI7a0NBQUdoQyxNQUFNaUMsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7Ozs4QkFFckIsOERBQUNwQyxrRUFBVUE7b0JBQUNhLFdBQVU7O3NDQUNwQiw4REFBQ3FCOzRCQUFFckIsV0FBVTs7Z0NBQWtDO2dDQUFFWCxNQUFNaUMsSUFBSSxDQUFDRSxNQUFNOzs7Ozs7O3NDQUNsRSw4REFBQ0g7NEJBQUVyQixXQUFVOztnQ0FBNEJYLE1BQU1pQyxJQUFJLENBQUNHLEtBQUs7Z0NBQUM7Z0NBQVNwQyxNQUFNaUMsSUFBSSxDQUFDSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNL0Y7S0F2Q1N0QztBQXlDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsLnRzeD85Y2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQm9keSwgQ2FyZEZvb3RlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuXG5mdW5jdGlvbiBUZXN0aW1vbmlhbChwcm9wczogYW55KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3tcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgLy8gaWYgb2RkIGluZGV4IGNhcmQsc2xpZGUgZnJvbSByaWdodCBpbnN0ZWFkIG9mIGxlZnRcbiAgICAgICAgeDogcHJvcHMuaW5kZXggJSAyID09PSAwID8gNTAgOiAtNTBcbiAgICAgIH19XG4gICAgICB3aGlsZUluVmlldz17e1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB4OiAwLCAvLyBTbGlkZSBpbiB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIGR1cmF0aW9uOiAxIC8vIEFuaW1hdGlvbiBkdXJhdGlvblxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgdmlld3BvcnQ9e3sgb25jZTogZmFsc2UgfX1cbiAgICA+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJtYi0yNCAgcHQtOCByZWxhdGl2ZVwiPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHN0YXJ0LTIgdGV4dC1tYWxpYnUtMzAwXCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNTAlXCIgeTE9XCI5Mi4wMzQlXCIgeDI9XCI1MCVcIiB5Mj1cIjcuMiVcIiBpZD1cImFcIj5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBzdG9wT3BhY2l0eT1cIi4yXCIgb2Zmc2V0PVwiMTAwJVwiIHN0b3BDb2xvcj1cIiNlZjMyZDlcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgPHBhdGggZD1cIk03LjM5NzYyIDEwLjNDNy4zOTc2MiAxMS4wNzMzIDcuMTQ4ODggMTEuNyA2LjY1MTQgMTIuMThDNi4xNTM5MiAxMi42MzMzIDUuNTI1NTIgMTIuODYgNC43NjYyMSAxMi44NkMzLjg0OTc5IDEyLjg2IDMuMDkwNDcgMTIuNTUzMyAyLjQ4ODI1IDExLjk0QzEuOTEyMjIgMTEuMzI2NiAxLjYyNDIxIDEwLjQ0NjcgMS42MjQyMSA5LjI5OTk5QzEuNjI0MjEgOC4wNzMzMiAxLjk2NDU5IDYuODczMzIgMi42NDUzNSA1LjY5OTk5QzMuMzUyMzEgNC40OTk5OSA0LjMzNDE4IDMuNTUzMzIgNS41OTA5OCAyLjg1OTk5TDYuNDk0MyA0LjI1OTk5QzUuODEzNTQgNC43Mzk5OSA1LjI2MzY5IDUuMjczMzIgNC44NDQ3NiA1Ljg1OTk5QzQuNDUyMDEgNi40NDY2NiA0LjE5MDE3IDcuMTI2NjYgNC4wNTkyNiA3Ljg5OTk5QzQuMjk0OTEgNy43OTMzMiA0LjU2OTgzIDcuNzM5OTkgNC44ODQwMyA3LjczOTk5QzUuNjE3MTYgNy43Mzk5OSA2LjIxOTM4IDcuOTc5OTkgNi42OTA2NyA4LjQ1OTk5QzcuMTYxOTcgOC45Mzk5OSA3LjM5NzYyIDkuNTUzMzMgNy4zOTc2MiAxMC4zWk0xNC42MjQyIDEwLjNDMTQuNjI0MiAxMS4wNzMzIDE0LjM3NTUgMTEuNyAxMy44NzggMTIuMThDMTMuMzgwNSAxMi42MzMzIDEyLjc1MjEgMTIuODYgMTEuOTkyOCAxMi44NkMxMS4wNzY0IDEyLjg2IDEwLjMxNzEgMTIuNTUzMyA5LjcxNDg0IDExLjk0QzkuMTM4ODEgMTEuMzI2NiA4Ljg1MDc5IDEwLjQ0NjcgOC44NTA3OSA5LjI5OTk5QzguODUwNzkgOC4wNzMzMiA5LjE5MTE3IDYuODczMzIgOS44NzE5NCA1LjY5OTk5QzEwLjU3ODkgNC40OTk5OSAxMS41NjA4IDMuNTUzMzIgMTIuODE3NiAyLjg1OTk5TDEzLjcyMDkgNC4yNTk5OUMxMy4wNDAxIDQuNzM5OTkgMTIuNDkwMyA1LjI3MzMyIDEyLjA3MTMgNS44NTk5OUMxMS42Nzg2IDYuNDQ2NjYgMTEuNDE2OCA3LjEyNjY2IDExLjI4NTggNy44OTk5OUMxMS41MjE1IDcuNzkzMzIgMTEuNzk2NCA3LjczOTk5IDEyLjExMDYgNy43Mzk5OUMxMi44NDM3IDcuNzM5OTkgMTMuNDQ2IDcuOTc5OTkgMTMuOTE3MyA4LjQ1OTk5QzE0LjM4ODYgOC45Mzk5OSAxNC42MjQyIDkuNTUzMzMgMTQuNjI0MiAxMC4zWlwiIGZpbGw9XCJ1cmwoI2EpXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInF1b3RlLWdyYWRpZW50XCI+XCI8L2Rpdj4gKi99XG4gICAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJwbC0yMCBwci02IG1kOnByLTggcGItOCBmb250LWV4dHJhbGlnaHQgdGV4dC0yeGwgbWQ6dGV4dC0zeGwgdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgICAgICA8cD57cHJvcHMuaXRlbS50ZXh0fTwvcD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwicHgtMTYgdGV4dC1yaWdodCBmbGV4LWNvbCBpdGVtcy1lbmQgcGItOCB0ZXh0LXNsYXRlLTQwMCBmb250LXNhbnNcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayBmb250LWxpZ2h0IHRleHQtc2xhdGUtNjAwXCI+LXtwcm9wcy5pdGVtLmF1dGhvcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc2xhdGUtNDAwXCI+e3Byb3BzLml0ZW0udGl0bGV9ICYjMTgzOyB7cHJvcHMuaXRlbS5jb21wYW55fTwvcD5cbiAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgPC9DYXJkPlxuXG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJUZXN0aW1vbmlhbCIsInByb3BzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiaW5kZXgiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImFyaWEtaGlkZGVuIiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwieDEiLCJ5MSIsIngyIiwieTIiLCJpZCIsInN0b3AiLCJvZmZzZXQiLCJzdG9wQ29sb3IiLCJzdG9wT3BhY2l0eSIsInBhdGgiLCJkIiwicCIsIml0ZW0iLCJ0ZXh0IiwiYXV0aG9yIiwidGl0bGUiLCJjb21wYW55Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonial.tsx\n"));

/***/ })

});