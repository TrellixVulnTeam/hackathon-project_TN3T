"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logic_points_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/points.js */ \"./logic/points.js\");\n\n\n//import Image from 'next/image'\n\n\nfunction Home() {\n    var timer = function timer() {\n        var int = setInterval(function() {\n            document.querySelector(\"#countdownText\").innerText = countdown;\n            countdown--;\n        }, 1000);\n    };\n    var selectImage = function selectImage(x) {\n        test += 100;\n        if (clickable) {\n            clickable = false;\n        } else {\n            return;\n        }\n        var p = (0,_logic_points_js__WEBPACK_IMPORTED_MODULE_2__.points)(x);\n        document.querySelector(\"#pointText\").innerText = \"Points: \".concat(pointCount);\n        pointCount++;\n        document.querySelectorAll(\".photo\")[x].style.cssText = p ? \"border: 5px solid green;\" : \"border: 5px solid red;\";\n    };\n    var clickable = true;\n    var countdown = 10;\n    var correctText;\n    var pointCount = 0;\n    var test = 100;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Real Human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"timer\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().timer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"countdownText\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownText)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().svg),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    r: \"50\",\n                                    cx: \"50\",\n                                    cy: \"50\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Choose the real human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: correctText\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(0);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n                                    alt: \"Picture\",\n                                    width: \"250px\",\n                                    height: \"250px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(1);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n                                    alt: \"Picture\",\n                                    width: \"250px\",\n                                    height: \"250px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"pointText\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUN6RUMsR0FBRyxFQUFDLFNBQVM7b0NBQ2JDLEtBQUssRUFBQyxPQUFPO29DQUNiQyxNQUFNLEVBQUMsT0FBTzs7Ozs7d0NBQ2Q7Ozs7O29DQUNBOzBDQUVOLDhEQUFDM0IsS0FBRztnQ0FBQ3FCLE9BQU8sRUFBRTsyQ0FBTS9CLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUNBQUE7Z0NBQUVXLFNBQVMsRUFBRSxFQUFDLENBQWMsTUFBTSxDQUFsQnJCLHFFQUFXLEVBQUMsUUFBTSxDQUFDOzBDQUNuRSw0RUFBQzJDLEtBQUc7b0NBQ0ZDLEdBQUcsRUFBQyxxRUFBcUU7b0NBQ3pFQyxHQUFHLEVBQUMsU0FBUztvQ0FDYkMsS0FBSyxFQUFDLE9BQU87b0NBQ2JDLE1BQU0sRUFBQyxPQUFPOzs7Ozt3Q0FDZDs7Ozs7b0NBQ0U7Ozs7Ozs0QkFDRjtrQ0FFTiw4REFBQzNCLEtBQUc7d0JBQUNXLEVBQUUsRUFBQyxXQUFXOzs7Ozs0QkFBTzs7Ozs7O29CQUVyQjs7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0FBL0V1QjdCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vL2ltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgcG9pbnRzIH0gZnJvbSAnLi4vbG9naWMvcG9pbnRzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIHZhciBjbGlja2FibGUgPSB0cnVlO1xuICB2YXIgY291bnRkb3duID0gMTA7XG4gIHZhciBjb3JyZWN0VGV4dDtcbiAgdmFyIHBvaW50Q291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIHRpbWVyKCkge1xuICAgIGxldCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRkb3duVGV4dCcpLmlubmVyVGV4dCA9IGNvdW50ZG93bjtcbiAgICAgIGNvdW50ZG93bi0tO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0SW1hZ2UoeCkge1xuICAgIHRlc3QgKz0gMTAwO1xuICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgIGNsaWNrYWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICB2YXIgcCA9IHBvaW50cyh4KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9pbnRUZXh0JykuaW5uZXJUZXh0ID0gYFBvaW50czogJHtwb2ludENvdW50fWA7XG4gICAgcG9pbnRDb3VudCsrO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG90bycpW3hdLnN0eWxlLmNzc1RleHQgPSAocCkgPyBcImJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1wiIDogXCJib3JkZXI6IDVweCBzb2xpZCByZWQ7XCI7XG4gIH1cblxuICBsZXQgdGVzdCA9IDEwMDtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWFsIEh1bWFuPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJ0aW1lclwiIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVyfT5cbiAgICAgICAgICA8ZGl2IGlkPVwiY291bnRkb3duVGV4dFwiIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93blRleHR9PjwvZGl2PlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfT5cbiAgICAgICAgICAgIDxjaXJjbGUgcj1cIjUwXCIgY3g9XCI1MFwiIGN5PVwiNTBcIj48L2NpcmNsZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBDaG9vc2UgdGhlIHJlYWwgaHVtYW5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxoMj57Y29ycmVjdFRleHR9PC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdEltYWdlKDApfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSBwaG90b2B9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyNTBweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjUwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZWxlY3RJbWFnZSgxKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gcGhvdG9gfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wNC8yMy8yMi8wMC90cmVlLTczNjg4NV9fNDgwLmpwZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlBpY3R1cmVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMjUwcHhcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cInBvaW50VGV4dFwiPjwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJwb2ludHMiLCJIb21lIiwidGltZXIiLCJpbnQiLCJzZXRJbnRlcnZhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsImNvdW50ZG93biIsInNlbGVjdEltYWdlIiwieCIsInRlc3QiLCJjbGlja2FibGUiLCJwIiwicG9pbnRDb3VudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImNzc1RleHQiLCJjb3JyZWN0VGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaWQiLCJjb3VudGRvd25UZXh0Iiwic3ZnIiwiY2lyY2xlIiwiciIsImN4IiwiY3kiLCJoMSIsImgyIiwiZ3JpZCIsIm9uQ2xpY2siLCJjYXJkIiwiaW1nIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});