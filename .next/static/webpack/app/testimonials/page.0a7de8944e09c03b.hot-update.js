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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestimonialsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_testimonial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/testimonial */ \"(app-pages-browser)/./components/testimonial.tsx\");\n/* harmony import */ var _components_primitives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/primitives */ \"(app-pages-browser)/./components/primitives.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction TestimonialsPage() {\n    _s();\n    const [testimonialData, setTestimonialData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/data/testimonials.json\").then((res)=>res.json()).then((data)=>{\n            setTestimonialData(data.testimonials);\n        });\n    }, []);\n    const items = [\n        \"Jeff Vacca is an amazing front end developer. Any company would be lucky to have him. I have been working with him over the last couple years and his skills not only with software but with people are top notch.\",\n        \"Item 2\",\n        \"Item 3\",\n        \"Item 4\",\n        \"Item 5\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen-calc\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (0,_components_primitives__WEBPACK_IMPORTED_MODULE_3__.title)({\n                        color: \"blue\"\n                    }),\n                    children: \"my story\"\n                }, void 0, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            testimonialData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_testimonial__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    item: item,\n                    index: index\n                }, item.id, false, {\n                    fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jeff/Documents/github/portfolio/app/testimonials/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, this);\n}\n_s(TestimonialsPage, \"/TsNAyWczZ+MNn0rZvkzb6ZgHAI=\");\n_c = TestimonialsPage;\nvar _c;\n$RefreshReg$(_c, \"TestimonialsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC90ZXN0aW1vbmlhbHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEI7QUFDa0I7QUFDVztBQUNQO0FBRWpDLFNBQVNLOztJQUN2QixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFRLEVBQUU7SUFDaEVDLGdEQUFTQSxDQUFDO1FBQ1RNLE1BQU0sMkJBQ0pDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0c7WUFDTkwsbUJBQW1CSyxLQUFLQyxZQUFZO1FBRXJDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsUUFBUTtRQUNiO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7S0FDQTtJQUNELHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNDO29CQUFHRCxXQUFXWiw2REFBS0EsQ0FBQzt3QkFBRWMsT0FBTztvQkFBTzs4QkFBSTs7Ozs7Ozs7Ozs7WUFFekNaLGdCQUFnQmEsR0FBRyxDQUFDLENBQUNDLE1BQVdDLHNCQUNoQyw4REFBQ2xCLCtEQUFXQTtvQkFBZWlCLE1BQU1BO29CQUFNQyxPQUFPQTttQkFBNUJELEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7O0FBSTdCO0dBM0J3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC90ZXN0aW1vbmlhbHMvcGFnZS50c3g/YTZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Rlc3RpbW9uaWFsXCI7XG5pbXBvcnQgeyB0aXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvcHJpbWl0aXZlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbHNQYWdlKCkge1xuXHRjb25zdCBbdGVzdGltb25pYWxEYXRhLCBzZXRUZXN0aW1vbmlhbERhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoKCcvZGF0YS90ZXN0aW1vbmlhbHMuanNvbicpXG5cdFx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0VGVzdGltb25pYWxEYXRhKGRhdGEudGVzdGltb25pYWxzKTtcblxuXHRcdFx0fSlcblx0fSwgW10pXG5cdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFwiSmVmZiBWYWNjYSBpcyBhbiBhbWF6aW5nIGZyb250IGVuZCBkZXZlbG9wZXIuIEFueSBjb21wYW55IHdvdWxkIGJlIGx1Y2t5IHRvIGhhdmUgaGltLiBJIGhhdmUgYmVlbiB3b3JraW5nIHdpdGggaGltIG92ZXIgdGhlIGxhc3QgY291cGxlIHllYXJzIGFuZCBoaXMgc2tpbGxzIG5vdCBvbmx5IHdpdGggc29mdHdhcmUgYnV0IHdpdGggcGVvcGxlIGFyZSB0b3Agbm90Y2guXCIsXG5cdFx0XCJJdGVtIDJcIixcblx0XHRcIkl0ZW0gM1wiLFxuXHRcdFwiSXRlbSA0XCIsXG5cdFx0XCJJdGVtIDVcIlxuXHRdO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4tY2FsY1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi04XCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9e3RpdGxlKHsgY29sb3I6IFwiYmx1ZVwiIH0pfT5teSBzdG9yeTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHt0ZXN0aW1vbmlhbERhdGEubWFwKChpdGVtOiBhbnksIGluZGV4KSA9PiAoXG5cdFx0XHRcdDxUZXN0aW1vbmlhbCBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUZXN0aW1vbmlhbCIsInRpdGxlIiwiVGVzdGltb25pYWxzUGFnZSIsInRlc3RpbW9uaWFsRGF0YSIsInNldFRlc3RpbW9uaWFsRGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwidGVzdGltb25pYWxzIiwiaXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImNvbG9yIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/testimonials/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/primitives.ts":
/*!**********************************!*\
  !*** ./components/primitives.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   subtitle: function() { return /* binding */ subtitle; },\n/* harmony export */   title: function() { return /* binding */ title; }\n/* harmony export */ });\n/* harmony import */ var tailwind_variants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind-variants */ \"(app-pages-browser)/./node_modules/tailwind-variants/dist/index.js\");\n\nconst title = (0,tailwind_variants__WEBPACK_IMPORTED_MODULE_0__.tv)({\n    base: \"tracking-tight inline font-semibold\",\n    variants: {\n        color: {\n            violet: \"from-[#FF1CF7] to-[#b249f8]\",\n            yellow: \"from-[#FF705B] to-[#FFB457]\",\n            blue: \"from-[#5EA2EF] to-[#0072F5]\",\n            cyan: \"from-[#00b7fa] to-[#01cfea]\",\n            green: \"from-[#6FEE8D] to-[#17c964]\",\n            pink: \"from-[#FF72E1] to-[#F54C7A]\",\n            foreground: \"dark:from-[#FFFFFF] dark:to-[#4B4B4B]\"\n        },\n        size: {\n            sm: \"text-3xl lg:text-4xl\",\n            md: \"text-[2.3rem] lg:text-5xl leading-9\",\n            lg: \"text-4xl lg:text-6xl\"\n        },\n        fullWidth: {\n            true: \"w-full block\"\n        }\n    },\n    defaultVariants: {\n        size: \"md\"\n    },\n    compoundVariants: [\n        {\n            color: [\n                \"violet\",\n                \"yellow\",\n                \"blue\",\n                \"cyan\",\n                \"green\",\n                \"pink\",\n                \"foreground\"\n            ],\n            class: \"bg-clip-text text-transparent bg-gradient-to-b\"\n        }\n    ]\n});\nconst subtitle = (0,tailwind_variants__WEBPACK_IMPORTED_MODULE_0__.tv)({\n    base: \"w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full\",\n    variants: {\n        fullWidth: {\n            true: \"!w-full\"\n        }\n    },\n    defaultVariants: {\n        fullWidth: true\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJpbWl0aXZlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsUUFBUUQscURBQUVBLENBQUM7SUFDdkJFLE1BQU07SUFDTkMsVUFBVTtRQUNUQyxPQUFPO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztZQUNQQyxNQUFNO1lBQ05DLFlBQVk7UUFDYjtRQUNBQyxNQUFNO1lBQ0xDLElBQUk7WUFDSkMsSUFBSTtZQUNKQyxJQUFJO1FBQ0w7UUFDQUMsV0FBVztZQUNWQyxNQUFNO1FBQ1A7SUFDRDtJQUNBQyxpQkFBaUI7UUFDaEJOLE1BQU07SUFDUDtJQUNBTyxrQkFBa0I7UUFDakI7WUFDQ2YsT0FBTztnQkFDTjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNBO1lBQ0RnQixPQUFPO1FBQ1I7S0FDQTtBQUNGLEdBQUc7QUFFSSxNQUFNQyxXQUFXckIscURBQUVBLENBQUM7SUFDMUJFLE1BQU07SUFDTkMsVUFBVTtRQUNUYSxXQUFXO1lBQ1ZDLE1BQU07UUFDUDtJQUNEO0lBQ0NDLGlCQUFnQjtRQUNkRixXQUFXO0lBQ2I7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJpbWl0aXZlcy50cz9jZGE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR2IH0gZnJvbSBcInRhaWx3aW5kLXZhcmlhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aXRsZSA9IHR2KHtcblx0YmFzZTogXCJ0cmFja2luZy10aWdodCBpbmxpbmUgZm9udC1zZW1pYm9sZFwiLFxuXHR2YXJpYW50czoge1xuXHRcdGNvbG9yOiB7XG5cdFx0XHR2aW9sZXQ6IFwiZnJvbS1bI0ZGMUNGN10gdG8tWyNiMjQ5ZjhdXCIsXG5cdFx0XHR5ZWxsb3c6IFwiZnJvbS1bI0ZGNzA1Ql0gdG8tWyNGRkI0NTddXCIsXG5cdFx0XHRibHVlOiBcImZyb20tWyM1RUEyRUZdIHRvLVsjMDA3MkY1XVwiLFxuXHRcdFx0Y3lhbjogXCJmcm9tLVsjMDBiN2ZhXSB0by1bIzAxY2ZlYV1cIixcblx0XHRcdGdyZWVuOiBcImZyb20tWyM2RkVFOERdIHRvLVsjMTdjOTY0XVwiLFxuXHRcdFx0cGluazogXCJmcm9tLVsjRkY3MkUxXSB0by1bI0Y1NEM3QV1cIixcblx0XHRcdGZvcmVncm91bmQ6IFwiZGFyazpmcm9tLVsjRkZGRkZGXSBkYXJrOnRvLVsjNEI0QjRCXVwiLFxuXHRcdH0sXG5cdFx0c2l6ZToge1xuXHRcdFx0c206IFwidGV4dC0zeGwgbGc6dGV4dC00eGxcIixcblx0XHRcdG1kOiBcInRleHQtWzIuM3JlbV0gbGc6dGV4dC01eGwgbGVhZGluZy05XCIsXG5cdFx0XHRsZzogXCJ0ZXh0LTR4bCBsZzp0ZXh0LTZ4bFwiLFxuXHRcdH0sXG5cdFx0ZnVsbFdpZHRoOiB7XG5cdFx0XHR0cnVlOiBcInctZnVsbCBibG9ja1wiLFxuXHRcdH0sXG5cdH0sXG5cdGRlZmF1bHRWYXJpYW50czoge1xuXHRcdHNpemU6IFwibWRcIixcblx0fSxcblx0Y29tcG91bmRWYXJpYW50czogW1xuXHRcdHtcblx0XHRcdGNvbG9yOiBbXG5cdFx0XHRcdFwidmlvbGV0XCIsXG5cdFx0XHRcdFwieWVsbG93XCIsXG5cdFx0XHRcdFwiYmx1ZVwiLFxuXHRcdFx0XHRcImN5YW5cIixcblx0XHRcdFx0XCJncmVlblwiLFxuXHRcdFx0XHRcInBpbmtcIixcblx0XHRcdFx0XCJmb3JlZ3JvdW5kXCIsXG5cdFx0XHRdLFxuXHRcdFx0Y2xhc3M6IFwiYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tYlwiLFxuXHRcdH0sXG5cdF0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHN1YnRpdGxlID0gdHYoe1xuXHRiYXNlOiBcInctZnVsbCBtZDp3LTEvMiBteS0yIHRleHQtbGcgbGc6dGV4dC14bCB0ZXh0LWRlZmF1bHQtNjAwIGJsb2NrIG1heC13LWZ1bGxcIixcblx0dmFyaWFudHM6IHtcblx0XHRmdWxsV2lkdGg6IHtcblx0XHRcdHRydWU6IFwiIXctZnVsbFwiLFxuXHRcdH0sXG5cdH0sXG4gIGRlZmF1bHRWYXJpYW50czp7XG4gICAgZnVsbFdpZHRoOiB0cnVlXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInR2IiwidGl0bGUiLCJiYXNlIiwidmFyaWFudHMiLCJjb2xvciIsInZpb2xldCIsInllbGxvdyIsImJsdWUiLCJjeWFuIiwiZ3JlZW4iLCJwaW5rIiwiZm9yZWdyb3VuZCIsInNpemUiLCJzbSIsIm1kIiwibGciLCJmdWxsV2lkdGgiLCJ0cnVlIiwiZGVmYXVsdFZhcmlhbnRzIiwiY29tcG91bmRWYXJpYW50cyIsImNsYXNzIiwic3VidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/primitives.ts\n"));

/***/ })

});