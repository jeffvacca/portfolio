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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-BJUMDPFJ.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/card/dist/chunk-JHUBASYZ.mjs\");\n\n\n\n\nfunction Testimonial(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0,\n            // if odd index card,slide from right instead of left\n            x: props.index % 2 === 0 ? 50 : -50\n        },\n        whileInView: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1 // Animation duration\n            }\n        },\n        viewport: {\n            once: false\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.card_default, {\n            className: \"mb-24  pt-8 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"absolute top-2 start-2 size-16 text-maliby-300 from-primary to-secondary\",\n                    width: \"64\",\n                    height: \"64\",\n                    viewBox: \"0 0 16 16\",\n                    fill: \"none\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    \"aria-hidden\": \"true\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                x1: \"50%\",\n                                y1: \"92.034%\",\n                                x2: \"50%\",\n                                y2: \"7.2%\",\n                                id: \"a\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        offset: \"0%\",\n                                        \"stop-color\": \"currentColor\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                        \"stop-opacity\": \"0\",\n                                        offset: \"100%\",\n                                        \"stop-color\": \"secondary\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z\",\n                            fill: \"url(#a)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.card_body_default, {\n                    className: \"pl-20 pr-8 pb-8 font-extralight text-2xl md:text-3xl text-slate-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.item.text\n                    }, void 0, false, {\n                        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.card_footer_default, {\n                    className: \"px-16 text-right flex-col items-end pb-8 text-slate-400 font-sans\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"block font-light text-slate-600\",\n                            children: [\n                                \"-\",\n                                props.item.author\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-mono text-slate-400\",\n                            children: [\n                                props.item.title,\n                                \" \\xb7 \",\n                                props.item.company\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/components/testimonial.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Testimonial;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonial);\nvar _c;\n$RefreshReg$(_c, \"Testimonial\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGVzdGltb25pYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ3dCO0FBRS9ELFNBQVNLLFlBQVlDLEtBQVU7SUFDN0IscUJBQ0UsOERBQUNMLGlEQUFNQSxDQUFDTSxHQUFHO1FBQ1RDLFNBQVM7WUFDUEMsU0FBUztZQUNULHFEQUFxRDtZQUNyREMsR0FBR0osTUFBTUssS0FBSyxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDbkM7UUFDQUMsYUFBYTtZQUNYSCxTQUFTO1lBQ1RDLEdBQUc7WUFDSEcsWUFBWTtnQkFDVkMsVUFBVSxFQUFFLHFCQUFxQjtZQUNuQztRQUNGO1FBQ0FDLFVBQVU7WUFBRUMsTUFBTTtRQUFNO2tCQUV4Qiw0RUFBQ2QsMkRBQUlBO1lBQUNlLFdBQVU7OzhCQUNkLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBMkVFLE9BQU07b0JBQUtDLFFBQU87b0JBQUtDLFNBQVE7b0JBQVlDLE1BQUs7b0JBQU9DLE9BQU07b0JBQTZCQyxlQUFZOztzQ0FDOUwsOERBQUNDO3NDQUNDLDRFQUFDQztnQ0FBZUMsSUFBRztnQ0FBTUMsSUFBRztnQ0FBVUMsSUFBRztnQ0FBTUMsSUFBRztnQ0FBT0MsSUFBRzs7a0RBQzFELDhEQUFDQzt3Q0FBS0MsUUFBTzt3Q0FBS0MsY0FBVzs7Ozs7O2tEQUM3Qiw4REFBQ0Y7d0NBQUtHLGdCQUFhO3dDQUFJRixRQUFPO3dDQUFPQyxjQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJcEQsOERBQUNFOzRCQUFLQyxHQUFFOzRCQUEyakNmLE1BQUs7Ozs7Ozs7Ozs7Ozs4QkFHMWtDLDhEQUFDbkIsZ0VBQVFBO29CQUFDYyxXQUFVOzhCQUNsQiw0RUFBQ3FCO2tDQUFHaEMsTUFBTWlDLElBQUksQ0FBQ0MsSUFBSTs7Ozs7Ozs7Ozs7OEJBRXJCLDhEQUFDcEMsa0VBQVVBO29CQUFDYSxXQUFVOztzQ0FDcEIsOERBQUNxQjs0QkFBRXJCLFdBQVU7O2dDQUFrQztnQ0FBRVgsTUFBTWlDLElBQUksQ0FBQ0UsTUFBTTs7Ozs7OztzQ0FDbEUsOERBQUNIOzRCQUFFckIsV0FBVTs7Z0NBQTRCWCxNQUFNaUMsSUFBSSxDQUFDRyxLQUFLO2dDQUFDO2dDQUFTcEMsTUFBTWlDLElBQUksQ0FBQ0ksT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9GO0tBeENTdEM7QUEwQ1QsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90ZXN0aW1vbmlhbC50c3g/OWNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZEJvZHksIENhcmRGb290ZXIgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcblxuZnVuY3Rpb24gVGVzdGltb25pYWwocHJvcHM6IGFueSkge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIC8vIGlmIG9kZCBpbmRleCBjYXJkLHNsaWRlIGZyb20gcmlnaHQgaW5zdGVhZCBvZiBsZWZ0XG4gICAgICAgIHg6IHByb3BzLmluZGV4ICUgMiA9PT0gMCA/IDUwIDogLTUwXG4gICAgICB9fVxuICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeDogMCwgLy8gU2xpZGUgaW4gdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMSAvLyBBbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgfVxuICAgICAgfX1cbiAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IGZhbHNlIH19XG4gICAgPlxuICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWItMjQgIHB0LTggcmVsYXRpdmVcIj5cbiAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiBzdGFydC0yIHNpemUtMTYgdGV4dC1tYWxpYnktMzAwIGZyb20tcHJpbWFyeSB0by1zZWNvbmRhcnlcIiB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9XCI1MCVcIiB5MT1cIjkyLjAzNCVcIiB4Mj1cIjUwJVwiIHkyPVwiNy4yJVwiIGlkPVwiYVwiPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3AtY29sb3I9XCJjdXJyZW50Q29sb3JcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBzdG9wLW9wYWNpdHk9XCIwXCIgb2Zmc2V0PVwiMTAwJVwiIHN0b3AtY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICA8L2RlZnM+XG5cbiAgICAgICAgICA8cGF0aCBkPVwiTTcuMzk3NjIgMTAuM0M3LjM5NzYyIDExLjA3MzMgNy4xNDg4OCAxMS43IDYuNjUxNCAxMi4xOEM2LjE1MzkyIDEyLjYzMzMgNS41MjU1MiAxMi44NiA0Ljc2NjIxIDEyLjg2QzMuODQ5NzkgMTIuODYgMy4wOTA0NyAxMi41NTMzIDIuNDg4MjUgMTEuOTRDMS45MTIyMiAxMS4zMjY2IDEuNjI0MjEgMTAuNDQ2NyAxLjYyNDIxIDkuMjk5OTlDMS42MjQyMSA4LjA3MzMyIDEuOTY0NTkgNi44NzMzMiAyLjY0NTM1IDUuNjk5OTlDMy4zNTIzMSA0LjQ5OTk5IDQuMzM0MTggMy41NTMzMiA1LjU5MDk4IDIuODU5OTlMNi40OTQzIDQuMjU5OTlDNS44MTM1NCA0LjczOTk5IDUuMjYzNjkgNS4yNzMzMiA0Ljg0NDc2IDUuODU5OTlDNC40NTIwMSA2LjQ0NjY2IDQuMTkwMTcgNy4xMjY2NiA0LjA1OTI2IDcuODk5OTlDNC4yOTQ5MSA3Ljc5MzMyIDQuNTY5ODMgNy43Mzk5OSA0Ljg4NDAzIDcuNzM5OTlDNS42MTcxNiA3LjczOTk5IDYuMjE5MzggNy45Nzk5OSA2LjY5MDY3IDguNDU5OTlDNy4xNjE5NyA4LjkzOTk5IDcuMzk3NjIgOS41NTMzMyA3LjM5NzYyIDEwLjNaTTE0LjYyNDIgMTAuM0MxNC42MjQyIDExLjA3MzMgMTQuMzc1NSAxMS43IDEzLjg3OCAxMi4xOEMxMy4zODA1IDEyLjYzMzMgMTIuNzUyMSAxMi44NiAxMS45OTI4IDEyLjg2QzExLjA3NjQgMTIuODYgMTAuMzE3MSAxMi41NTMzIDkuNzE0ODQgMTEuOTRDOS4xMzg4MSAxMS4zMjY2IDguODUwNzkgMTAuNDQ2NyA4Ljg1MDc5IDkuMjk5OTlDOC44NTA3OSA4LjA3MzMyIDkuMTkxMTcgNi44NzMzMiA5Ljg3MTk0IDUuNjk5OTlDMTAuNTc4OSA0LjQ5OTk5IDExLjU2MDggMy41NTMzMiAxMi44MTc2IDIuODU5OTlMMTMuNzIwOSA0LjI1OTk5QzEzLjA0MDEgNC43Mzk5OSAxMi40OTAzIDUuMjczMzIgMTIuMDcxMyA1Ljg1OTk5QzExLjY3ODYgNi40NDY2NiAxMS40MTY4IDcuMTI2NjYgMTEuMjg1OCA3Ljg5OTk5QzExLjUyMTUgNy43OTMzMiAxMS43OTY0IDcuNzM5OTkgMTIuMTEwNiA3LjczOTk5QzEyLjg0MzcgNy43Mzk5OSAxMy40NDYgNy45Nzk5OSAxMy45MTczIDguNDU5OTlDMTQuMzg4NiA4LjkzOTk5IDE0LjYyNDIgOS41NTMzMyAxNC42MjQyIDEwLjNaXCIgZmlsbD1cInVybCgjYSlcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicXVvdGUtZ3JhZGllbnRcIj5cIjwvZGl2PiAqL31cbiAgICAgICAgPENhcmRCb2R5IGNsYXNzTmFtZT1cInBsLTIwIHByLTggcGItOCBmb250LWV4dHJhbGlnaHQgdGV4dC0yeGwgbWQ6dGV4dC0zeGwgdGV4dC1zbGF0ZS02MDBcIj5cbiAgICAgICAgICA8cD57cHJvcHMuaXRlbS50ZXh0fTwvcD5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwicHgtMTYgdGV4dC1yaWdodCBmbGV4LWNvbCBpdGVtcy1lbmQgcGItOCB0ZXh0LXNsYXRlLTQwMCBmb250LXNhbnNcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJibG9jayBmb250LWxpZ2h0IHRleHQtc2xhdGUtNjAwXCI+LXtwcm9wcy5pdGVtLmF1dGhvcn08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc2xhdGUtNDAwXCI+e3Byb3BzLml0ZW0udGl0bGV9ICYjMTgzOyB7cHJvcHMuaXRlbS5jb21wYW55fTwvcD5cbiAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgPC9DYXJkPlxuXG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJUZXN0aW1vbmlhbCIsInByb3BzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwiaW5kZXgiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInZpZXdwb3J0Iiwib25jZSIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImFyaWEtaGlkZGVuIiwiZGVmcyIsImxpbmVhckdyYWRpZW50IiwieDEiLCJ5MSIsIngyIiwieTIiLCJpZCIsInN0b3AiLCJvZmZzZXQiLCJzdG9wLWNvbG9yIiwic3RvcC1vcGFjaXR5IiwicGF0aCIsImQiLCJwIiwiaXRlbSIsInRleHQiLCJhdXRob3IiLCJ0aXRsZSIsImNvbXBhbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/testimonial.tsx\n"));

/***/ })

});