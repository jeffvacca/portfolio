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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card */ \"(app-pages-browser)/./components/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction DevPage() {\n    const items = [\n        \"Item 1\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: items.map((item, i)=>// <motion.div\n            // \tkey={i}\n            // \tclassName=\"card w-36 h-[500px] bg-secondary border\"\n            // \tinitial={{\n            // \t\topacity: 0,\n            // \t\t// if odd index card,slide from right instead of left\n            // \t\tx: i % 2 === 0 ? 50 : -50\n            // \t}}\n            // \twhileInView={{\n            // \t\topacity: 1,\n            // \t\tx: 0, // Slide in to its original position\n            // \t\ttransition: {\n            // \t\t\tduration: 1 // Animation duration\n            // \t\t}\n            // \t}}\n            // \tviewport={{ once: true }}\n            // >\n            // \t<p className=\"card-text\">{item}</p>\n            // </motion.div>\n            // <div className=\"card w-36 h-[500px] bg-secondary border\" key={i}>{item}</div>\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                text: item,\n                index: i\n            }, i, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/dev/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n_c = DevPage;\nvar _c;\n$RefreshReg$(_c, \"DevPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXYvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRzBCO0FBR2U7QUFFMUIsU0FBU0U7SUFDdkIsTUFBTUMsUUFBUTtRQUFDO1FBQVU7UUFBVTtRQUFVO1FBQVU7S0FBUztJQUNoRSxxQkFDQyw4REFBQ0M7a0JBQ0NELE1BQU1FLEdBQUcsQ0FBQyxDQUFDQyxNQUFXQyxJQUN0QixjQUFjO1lBQ2QsV0FBVztZQUNYLHVEQUF1RDtZQUN2RCxjQUFjO1lBQ2QsZ0JBQWdCO1lBQ2hCLDBEQUEwRDtZQUMxRCw4QkFBOEI7WUFDOUIsTUFBTTtZQUNOLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsK0NBQStDO1lBQy9DLGtCQUFrQjtZQUNsQix1Q0FBdUM7WUFDdkMsTUFBTTtZQUNOLE1BQU07WUFDTiw2QkFBNkI7WUFDN0IsSUFBSTtZQUNKLHVDQUF1QztZQUN2QyxnQkFBZ0I7WUFDaEIsZ0ZBQWdGOzBCQUNoRiw4REFBQ04sd0RBQUlBO2dCQUFTTyxNQUFNRjtnQkFBTUcsT0FBT0Y7ZUFBdEJBOzs7Ozs7Ozs7O0FBSWY7S0E3QndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGV2L3BhZ2UudHN4PzFmN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldlBhZ2UoKSB7XG5cdGNvbnN0IGl0ZW1zID0gW1wiSXRlbSAxXCIsIFwiSXRlbSAyXCIsIFwiSXRlbSAzXCIsIFwiSXRlbSA0XCIsIFwiSXRlbSA1XCJdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7aXRlbXMubWFwKChpdGVtOiBhbnksIGk6IGFueSkgPT4gKFxuXHRcdFx0XHQvLyA8bW90aW9uLmRpdlxuXHRcdFx0XHQvLyBcdGtleT17aX1cblx0XHRcdFx0Ly8gXHRjbGFzc05hbWU9XCJjYXJkIHctMzYgaC1bNTAwcHhdIGJnLXNlY29uZGFyeSBib3JkZXJcIlxuXHRcdFx0XHQvLyBcdGluaXRpYWw9e3tcblx0XHRcdFx0Ly8gXHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdC8vIFx0XHQvLyBpZiBvZGQgaW5kZXggY2FyZCxzbGlkZSBmcm9tIHJpZ2h0IGluc3RlYWQgb2YgbGVmdFxuXHRcdFx0XHQvLyBcdFx0eDogaSAlIDIgPT09IDAgPyA1MCA6IC01MFxuXHRcdFx0XHQvLyBcdH19XG5cdFx0XHRcdC8vIFx0d2hpbGVJblZpZXc9e3tcblx0XHRcdFx0Ly8gXHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdC8vIFx0XHR4OiAwLCAvLyBTbGlkZSBpbiB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cblx0XHRcdFx0Ly8gXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0Ly8gXHRcdFx0ZHVyYXRpb246IDEgLy8gQW5pbWF0aW9uIGR1cmF0aW9uXG5cdFx0XHRcdC8vIFx0XHR9XG5cdFx0XHRcdC8vIFx0fX1cblx0XHRcdFx0Ly8gXHR2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG5cdFx0XHRcdC8vID5cblx0XHRcdFx0Ly8gXHQ8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57aXRlbX08L3A+XG5cdFx0XHRcdC8vIDwvbW90aW9uLmRpdj5cblx0XHRcdFx0Ly8gPGRpdiBjbGFzc05hbWU9XCJjYXJkIHctMzYgaC1bNTAwcHhdIGJnLXNlY29uZGFyeSBib3JkZXJcIiBrZXk9e2l9PntpdGVtfTwvZGl2PlxuXHRcdFx0XHQ8Q2FyZCBrZXk9e2l9IHRleHQ9e2l0ZW19IGluZGV4PXtpfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiRGV2UGFnZSIsIml0ZW1zIiwiZGl2IiwibWFwIiwiaXRlbSIsImkiLCJ0ZXh0IiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dev/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/card.tsx":
/*!*****************************!*\
  !*** ./components/card.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n// interface Props {\n//     text?: ReactNode,\n//     index: number,\n//     key:number\n// }\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"card w-36 h-36 bg-secondary border\",\n        initial: {\n            opacity: 0,\n            // if odd index card,slide from right instead of left\n            x: props.index % 2 === 0 ? 50 : -50\n        },\n        whileInView: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                duration: 1 // Animation duration\n            }\n        },\n        viewport: {\n            once: true\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: \"card-text\",\n            children: props.text\n        }, void 0, false, {\n            fileName: \"/Users/jeff/Documents/github/portfolio/components/card.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/components/card.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ0Y7QUFFdkMsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLElBQUk7QUFFSixTQUFTRSxLQUFLQyxLQUFTO0lBQ3JCLHFCQUNFLDhEQUFDRixpREFBTUEsQ0FBQ0csR0FBRztRQUNUQyxXQUFVO1FBQ1ZDLFNBQVM7WUFDUEMsU0FBUztZQUNULHFEQUFxRDtZQUNyREMsR0FBR0wsTUFBTU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDbkM7UUFDQUMsYUFBYTtZQUNYSCxTQUFTO1lBQ1RDLEdBQUc7WUFDSEcsWUFBWTtnQkFDVkMsVUFBVSxFQUFFLHFCQUFxQjtZQUNuQztRQUNGO1FBQ0FDLFVBQVU7WUFBRUMsTUFBTTtRQUFLO2tCQUV2Qiw0RUFBQ0M7WUFBRVYsV0FBVTtzQkFBYUYsTUFBTWEsSUFBSTs7Ozs7Ozs7Ozs7QUFHMUM7S0FyQlNkO0FBdUJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZC50c3g/NWRiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vLyBpbnRlcmZhY2UgUHJvcHMge1xuLy8gICAgIHRleHQ/OiBSZWFjdE5vZGUsXG4vLyAgICAgaW5kZXg6IG51bWJlcixcbi8vICAgICBrZXk6bnVtYmVyXG4vLyB9XG5cbmZ1bmN0aW9uIENhcmQocHJvcHM6YW55KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cImNhcmQgdy0zNiBoLTM2IGJnLXNlY29uZGFyeSBib3JkZXJcIlxuICAgICAgaW5pdGlhbD17e1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAvLyBpZiBvZGQgaW5kZXggY2FyZCxzbGlkZSBmcm9tIHJpZ2h0IGluc3RlYWQgb2YgbGVmdFxuICAgICAgICB4OiBwcm9wcy5pbmRleCAlIDIgPT09IDAgPyA1MCA6IC01MFxuICAgICAgfX1cbiAgICAgIHdoaWxlSW5WaWV3PXt7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHg6IDAsIC8vIFNsaWRlIGluIHRvIGl0cyBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgZHVyYXRpb246IDEgLy8gQW5pbWF0aW9uIGR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Byb3BzLnRleHR9PC9wPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkNhcmQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieCIsImluZGV4Iiwid2hpbGVJblZpZXciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ2aWV3cG9ydCIsIm9uY2UiLCJwIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/card.tsx\n"));

/***/ })

});