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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\nfunction Testimonial(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"card w-full h-[500px] bg-secondary border\",\n        initial: {\n            opacity: 0,\n            // if odd index card,slide from right instead of left\n            x: props.index % 2 === 0 ? 50 : -50\n        },\n        whileInView: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1 // Animation duration\n            }\n        },\n        viewport: {\n            once: true\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"blockquote\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"absolute -top-6 -start-8 size-16 text-gray-100 dark:text-gray-700\",\n                    width: \"64\",\n                    height: \"64\",\n                    viewBox: \"0 0 16 16\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"aria-hidden\": \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z\",\n                        fill: \"currentColor\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-800 sm:text-xl dark:text-white\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                            children: [\n                                \"I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed. \",\n                                props.text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 67\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                    className: \"mt-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ms-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-base font-semibold text-gray-800 dark:text-gray-400\",\n                                    children: \"Josh Grazioso\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-xs text-gray-500\",\n                                    children: \"Source title\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonial);\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLFNBQVNFLFlBQVlDLEtBQVU7SUFDN0IscUJBQ0UsOERBQUNGLGlEQUFNQSxDQUFDRyxHQUFHO1FBQ1RDLFdBQVU7UUFDVkMsU0FBUztZQUNQQyxTQUFTO1lBQ1QscURBQXFEO1lBQ3JEQyxHQUFHTCxNQUFNTSxLQUFLLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUNuQztRQUNBQyxhQUFhO1lBQ1hILFNBQVM7WUFDVEMsR0FBRztZQUNIRyxZQUFZO2dCQUNWQyxVQUFVLEVBQUUscUJBQXFCO1lBQ25DO1FBQ0Y7UUFDQUMsVUFBVTtZQUFFQyxNQUFNO1FBQUs7a0JBS3ZCLDRFQUFDQztZQUFXVixXQUFVOzs4QkFDcEIsOERBQUNXO29CQUFJWCxXQUFVO29CQUFvRVksT0FBTTtvQkFBS0MsUUFBTztvQkFBS0MsU0FBUTtvQkFBWUMsTUFBSztvQkFBT0MsT0FBTTtvQkFBNkJDLGVBQVk7OEJBQ3ZMLDRFQUFDQzt3QkFBS0MsR0FBRTt3QkFBMmpDSixNQUFLOzs7Ozs7Ozs7Ozs4QkFHMWtDLDhEQUFDaEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNvQjt3QkFBRXBCLFdBQVU7a0NBQTJDLDRFQUFDcUI7O2dDQUFHO2dDQUNnRXZCLE1BQU13QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJeEksOERBQUNDO29CQUFPdkIsV0FBVTs4QkFDaEIsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUViLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUEyRDs7Ozs7OzhDQUMxRSw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckQ7S0E3Q1NIO0FBK0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4PzljZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCJjYXJkIHctZnVsbCBoLVs1MDBweF0gYmctc2Vjb25kYXJ5IGJvcmRlclwiXG4gICAgICBpbml0aWFsPXt7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIC8vIGlmIG9kZCBpbmRleCBjYXJkLHNsaWRlIGZyb20gcmlnaHQgaW5zdGVhZCBvZiBsZWZ0XG4gICAgICAgIHg6IHByb3BzLmluZGV4ICUgMiA9PT0gMCA/IDUwIDogLTUwXG4gICAgICB9fVxuICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeDogMCwgLy8gU2xpZGUgaW4gdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMSAvLyBBbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICA+XG4gICAgICB7LyogPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb3BzLnRleHR9PC9wPlxuICAgICAgPGJsb2NrcXVvdGU+e3Byb3BzLnRleHR9PC9ibG9ja3F1b3RlPiAqL31cblxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTYgLXN0YXJ0LTggc2l6ZS0xNiB0ZXh0LWdyYXktMTAwIGRhcms6dGV4dC1ncmF5LTcwMFwiIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTcuMzk3NjIgMTAuM0M3LjM5NzYyIDExLjA3MzMgNy4xNDg4OCAxMS43IDYuNjUxNCAxMi4xOEM2LjE1MzkyIDEyLjYzMzMgNS41MjU1MiAxMi44NiA0Ljc2NjIxIDEyLjg2QzMuODQ5NzkgMTIuODYgMy4wOTA0NyAxMi41NTMzIDIuNDg4MjUgMTEuOTRDMS45MTIyMiAxMS4zMjY2IDEuNjI0MjEgMTAuNDQ2NyAxLjYyNDIxIDkuMjk5OTlDMS42MjQyMSA4LjA3MzMyIDEuOTY0NTkgNi44NzMzMiAyLjY0NTM1IDUuNjk5OTlDMy4zNTIzMSA0LjQ5OTk5IDQuMzM0MTggMy41NTMzMiA1LjU5MDk4IDIuODU5OTlMNi40OTQzIDQuMjU5OTlDNS44MTM1NCA0LjczOTk5IDUuMjYzNjkgNS4yNzMzMiA0Ljg0NDc2IDUuODU5OTlDNC40NTIwMSA2LjQ0NjY2IDQuMTkwMTcgNy4xMjY2NiA0LjA1OTI2IDcuODk5OTlDNC4yOTQ5MSA3Ljc5MzMyIDQuNTY5ODMgNy43Mzk5OSA0Ljg4NDAzIDcuNzM5OTlDNS42MTcxNiA3LjczOTk5IDYuMjE5MzggNy45Nzk5OSA2LjY5MDY3IDguNDU5OTlDNy4xNjE5NyA4LjkzOTk5IDcuMzk3NjIgOS41NTMzMyA3LjM5NzYyIDEwLjNaTTE0LjYyNDIgMTAuM0MxNC42MjQyIDExLjA3MzMgMTQuMzc1NSAxMS43IDEzLjg3OCAxMi4xOEMxMy4zODA1IDEyLjYzMzMgMTIuNzUyMSAxMi44NiAxMS45OTI4IDEyLjg2QzExLjA3NjQgMTIuODYgMTAuMzE3MSAxMi41NTMzIDkuNzE0ODQgMTEuOTRDOS4xMzg4MSAxMS4zMjY2IDguODUwNzkgMTAuNDQ2NyA4Ljg1MDc5IDkuMjk5OTlDOC44NTA3OSA4LjA3MzMyIDkuMTkxMTcgNi44NzMzMiA5Ljg3MTk0IDUuNjk5OTlDMTAuNTc4OSA0LjQ5OTk5IDExLjU2MDggMy41NTMzMiAxMi44MTc2IDIuODU5OTlMMTMuNzIwOSA0LjI1OTk5QzEzLjA0MDEgNC43Mzk5OSAxMi40OTAzIDUuMjczMzIgMTIuMDcxMyA1Ljg1OTk5QzExLjY3ODYgNi40NDY2NiAxMS40MTY4IDcuMTI2NjYgMTEuMjg1OCA3Ljg5OTk5QzExLjUyMTUgNy43OTMzMiAxMS43OTY0IDcuNzM5OTkgMTIuMTEwNiA3LjczOTk5QzEyLjg0MzcgNy43Mzk5OSAxMy40NDYgNy45Nzk5OSAxMy45MTczIDguNDU5OTlDMTQuMzg4NiA4LjkzOTk5IDE0LjYyNDIgOS41NTMzMyAxNC42MjQyIDEwLjNaXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvc3ZnPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgc206dGV4dC14bCBkYXJrOnRleHQtd2hpdGVcIj48ZW0+XG4gICAgICAgICAgICBJIGp1c3Qgd2FudGVkIHRvIHNheSB0aGF0IEknbSB2ZXJ5IGhhcHB5IHdpdGggbXkgcHVyY2hhc2Ugc28gZmFyLiBUaGUgZG9jdW1lbnRhdGlvbiBpcyBvdXRzdGFuZGluZyAtIGNsZWFyIGFuZCBkZXRhaWxlZC4ge3Byb3BzLnRleHR9XG4gICAgICAgICAgPC9lbT48L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTgwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5Kb3NoIEdyYXppb3NvPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+U291cmNlIHRpdGxlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Jsb2NrcXVvdGU+XG5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiVGVzdGltb25pYWwiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImluZGV4Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJibG9ja3F1b3RlIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwiZCIsInAiLCJlbSIsInRleHQiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonial.tsx\n"));

/***/ })

});