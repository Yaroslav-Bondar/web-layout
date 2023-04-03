/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const sum = __webpack_require__(/*! ./module/sum.js */ \"./src/js/module/sum.js\");\nconst multiple = __webpack_require__(/*! ./module/multiple.js */ \"./src/js/module/multiple.js\");\nconst score = __webpack_require__(/*! ./module/score.js */ \"./src/js/module/score.js\");\n\n// console.log(sum(4, 5));\n// console.log(multiple(5, 5));\nscore()\n\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/multiple.js":
/*!***********************************!*\
  !*** ./src/js/module/multiple.js ***!
  \***********************************/
/***/ (function(module) {

eval("module.exports = (a, b) => b * a;\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/multiple.js?");

/***/ }),

/***/ "./src/js/module/score.js":
/*!********************************!*\
  !*** ./src/js/module/score.js ***!
  \********************************/
/***/ (function(module) {

eval("const main = {\n  'верстка страницы валидная': 4,\n  'логотип в хедере состоит из текстовых элементов': 1,\n  'страница содержит ровно один элемент <h1>': 1,\n  'добавлен favicon': 1,\n  'блок <header>': 5,\n  'блок Not only': 5,\n  'блок About': 5,\n  'блок Our Friends': 5,\n  'блок Help': 5,\n  'блок In addition': 5,\n  'блок <footer>':5,\n  'для позиционирования элементов блока Help использована сеточная верстка (flexbox или grid)': 2,\n  'при уменьшении масштаба страницы браузера или увеличении ширины страницы (>1280px) вёрстка размещается по центру, а не сдвигается в сторону и не растягивается по всей ширине': 2,\n  'фоновый цвет тянется на всю ширину страницы': 2,\n  'интерактивность элементов': 12,\n  'TOTAL': 60,\n}\nconst pets = {\n  'Проверка верстки': 7,\n  'Вёрстка соответствует макету': 15,\n  'Требования к css': 4,\n  'Интерактивность элементов': 14,\n  'TOTAL': 40,\n};\n\nmodule.exports = () => {\n  console.log('*** Scores ***');\n  console.log('Main page');\n  console.table(main);\n  console.log('Pets page');\n  console.table(pets);\n  console.log('TOTAL: 100');\n}\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/score.js?");

/***/ }),

/***/ "./src/js/module/sum.js":
/*!******************************!*\
  !*** ./src/js/module/sum.js ***!
  \******************************/
/***/ (function(module) {

eval("module.exports = (a, b) => b + a;\n\n\n//# sourceURL=webpack://gulp_layout/./src/js/module/sum.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;