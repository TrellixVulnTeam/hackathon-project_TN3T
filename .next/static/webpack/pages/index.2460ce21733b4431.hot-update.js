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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _logic_points_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/points.js */ \"./logic/points.js\");\n\n\n//import Image from 'next/image'\n\n\nfunction Home() {\n    var timer = function timer() {\n        //let int = \n        setInterval(function() {\n            // document.querySelector('#countdownText').innerText = countdown;\n            countdown--;\n            console.log(\"Countdown: \" + countdown);\n        }, 1000);\n    };\n    var selectImage = //timer();\n    function selectImage(x) {\n        if (clickable) {\n            clickable = false;\n        } else {\n            return;\n        }\n        var p = (0,_logic_points_js__WEBPACK_IMPORTED_MODULE_2__.points)(x);\n        if (p) {\n            pointCount += 10;\n            correctText = \"Correct!\";\n        } else {\n            correctText = \"Incorrect!\";\n        }\n        document.querySelector(\"#correctText\").innerText = correctText;\n        document.querySelector(\"#pointText\").innerText = \"Points: \".concat(pointCount);\n        pointCount++;\n        document.querySelectorAll(\".photo\")[x].style.cssText = p ? \"border: 5px solid green;\" : \"border: 5px solid red;\";\n    };\n    var test = 100;\n    var clickable = true;\n    var countdown = 10;\n    var correctText;\n    var pointCount = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Real Human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"timer\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().timer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"countdownText\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().countdownText),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: countdown\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().svg),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                    r: \"50\",\n                                    cx: \"50\",\n                                    cy: \"50\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: \"Choose the real human\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(0);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onLoad: timer(),\n                                    src: \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n                                    alt: \"Picture\",\n                                    width: \"250px\",\n                                    height: \"250px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return selectImage(1);\n                                },\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().card), \" photo\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg\",\n                                    alt: \"Picture\",\n                                    width: \"250px\",\n                                    height: \"250px\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"correctText\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"pointText\",\n                        children: [\n                            \"Points: \",\n                            pointCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andersonproescholdbell/Documents/hackathon-project/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFHO2dDQUFDb0IsT0FBTyxFQUFFOzJDQUFNakMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQ0FBQTtnQ0FBRWMsU0FBUyxFQUFFLEVBQUMsQ0FBYyxNQUFNLENBQWxCdEIscUVBQVcsRUFBQyxRQUFNLENBQUM7MENBQ2pFLDRFQUFDMkMsS0FBRztvQ0FDRkMsTUFBTSxFQUFFekMsS0FBSyxFQUFFO29DQUNmMEMsR0FBRyxFQUFDLHFFQUFxRTtvQ0FDekVDLEdBQUcsRUFBQyxTQUFTO29DQUNiQyxLQUFLLEVBQUMsT0FBTztvQ0FDYkMsTUFBTSxFQUFDLE9BQU87Ozs7O3dDQUNkOzs7OztvQ0FDQTswQ0FFTiw4REFBQzNCLEtBQUc7Z0NBQUNvQixPQUFPLEVBQUU7MkNBQU1qQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lDQUFBO2dDQUFFYyxTQUFTLEVBQUUsRUFBQyxDQUFjLE1BQU0sQ0FBbEJ0QixxRUFBVyxFQUFDLFFBQU0sQ0FBQzswQ0FDbkUsNEVBQUMyQyxLQUFHO29DQUNGRSxHQUFHLEVBQUMscUVBQXFFO29DQUN6RUMsR0FBRyxFQUFDLFNBQVM7b0NBQ2JDLEtBQUssRUFBQyxPQUFPO29DQUNiQyxNQUFNLEVBQUMsT0FBTzs7Ozs7d0NBQ2Q7Ozs7O29DQUNFOzs7Ozs7NEJBQ0Y7a0NBRU4sOERBQUMzQixLQUFHO3dCQUFDVyxFQUFFLEVBQUMsYUFBYTs7Ozs7NEJBQU87a0NBQzVCLDhEQUFDWCxLQUFHO3dCQUFDVyxFQUFFLEVBQUMsV0FBVzs7NEJBQUMsVUFBUTs0QkFBQ3BCLFVBQVU7Ozs7Ozs0QkFBTzs7Ozs7O29CQUN6Qzs7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0FBekZ1QlYsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbi8vaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBwb2ludHMgfSBmcm9tICcuLi9sb2dpYy9wb2ludHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCB0ZXN0ID0gMTAwO1xuICB2YXIgY2xpY2thYmxlID0gdHJ1ZTtcbiAgdmFyIGNvdW50ZG93biA9IDEwO1xuICB2YXIgY29ycmVjdFRleHQ7XG4gIHZhciBwb2ludENvdW50ID0gMDtcblxuICBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAvL2xldCBpbnQgPSBcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRkb3duVGV4dCcpLmlubmVyVGV4dCA9IGNvdW50ZG93bjtcbiAgICAgIGNvdW50ZG93bi0tO1xuICAgICAgY29uc29sZS5sb2coXCJDb3VudGRvd246IFwiICsgY291bnRkb3duKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuICAvL3RpbWVyKCk7XG5cbiAgZnVuY3Rpb24gc2VsZWN0SW1hZ2UoeCkge1xuICAgIGlmIChjbGlja2FibGUpIHtcbiAgICAgIGNsaWNrYWJsZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICBcbiAgICB2YXIgcCA9IHBvaW50cyh4KTtcbiAgICBpZiAocCkge1xuICAgICAgcG9pbnRDb3VudCArPSAxMDtcbiAgICAgIGNvcnJlY3RUZXh0ID0gXCJDb3JyZWN0IVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvcnJlY3RUZXh0ID0gXCJJbmNvcnJlY3QhXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvcnJlY3RUZXh0JykuaW5uZXJUZXh0ID0gY29ycmVjdFRleHQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvaW50VGV4dCcpLmlubmVyVGV4dCA9IGBQb2ludHM6ICR7cG9pbnRDb3VudH1gO1xuICAgIHBvaW50Q291bnQrKztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG8nKVt4XS5zdHlsZS5jc3NUZXh0ID0gKHApID8gXCJib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcIiA6IFwiYm9yZGVyOiA1cHggc29saWQgcmVkO1wiO1xuICB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UmVhbCBIdW1hbjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblxuICAgICAgICA8ZGl2IGlkPVwidGltZXJcIiBjbGFzc05hbWU9e3N0eWxlcy50aW1lcn0+XG4gICAgICAgICAgPGRpdiBpZD1cImNvdW50ZG93blRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25UZXh0fT5cbiAgICAgICAgICAgIDxwPntjb3VudGRvd259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ZnfT5cbiAgICAgICAgICAgIDxjaXJjbGUgcj1cIjUwXCIgY3g9XCI1MFwiIGN5PVwiNTBcIj48L2NpcmNsZT5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBDaG9vc2UgdGhlIHJlYWwgaHVtYW5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZWxlY3RJbWFnZSgwKX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gcGhvdG9gfT5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIG9uTG9hZD17dGltZXIoKX1cbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQaWN0dXJlXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjI1MHB4XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNTBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHNlbGVjdEltYWdlKDEpfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkfSBwaG90b2B9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE1LzA0LzIzLzIyLzAwL3RyZWUtNzM2ODg1X180ODAuanBnXCJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjUwcHhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyNTBweFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiY29ycmVjdFRleHRcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInBvaW50VGV4dFwiPlBvaW50czoge3BvaW50Q291bnR9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwicG9pbnRzIiwiSG9tZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjb3VudGRvd24iLCJjb25zb2xlIiwibG9nIiwic2VsZWN0SW1hZ2UiLCJ4IiwiY2xpY2thYmxlIiwicCIsInBvaW50Q291bnQiLCJjb3JyZWN0VGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlubmVyVGV4dCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsImNzc1RleHQiLCJ0ZXN0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJpZCIsImNvdW50ZG93blRleHQiLCJzdmciLCJjaXJjbGUiLCJyIiwiY3giLCJjeSIsImgxIiwiZ3JpZCIsIm9uQ2xpY2siLCJjYXJkIiwiaW1nIiwib25Mb2FkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});