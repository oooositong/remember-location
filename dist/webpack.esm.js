/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import debounce from \"lodash/debounce\";\n\nclass RememberLocation {\n\n    constructor() {\n        if (!this.checkEnv()) {\n            return;\n        }\n        this.CACHE_KEY = 'RememberScroll';\n        this.pageKey = location.pathname;\n        this.pageScrollData = null;\n        this.scrollY = 0;\n\n        this.startMonitoring();\n    }\n\n    recoverPageOffset() {\n        this.loadCache();\n        setTimeout(() => {\n            console.log('Relocation: ', this.scrollY);\n            window.scroll(0, this.scrollY);\n        }, 100);\n    }\n\n    loadCache() {\n        this.pageScrollData = JSON.parse(localStorage.getItem(this.CACHE_KEY) || '{}');\n        if (this.pageScrollData) {\n            this.scrollY = this.pageScrollData[this.pageKey];\n        }\n        console.log('Loaded LocalStorage.');\n    }\n\n    persistData() {\n        console.log('Persisted location.');\n        this.pageScrollData[this.pageKey] = this.scrollY;\n        localStorage.setItem(this.CACHE_KEY, JSON.stringify(this.pageScrollData));\n    }\n\n    onScroll() {\n        this.scrollY = window.scrollY;\n    }\n\n    checkEnv() {\n        if (typeof window === 'undefined') {\n            console.log('No browser environment.');\n            return false;\n        }\n\n        return true;\n    }\n\n    startMonitoring() {\n\n        // window.addEventListener('scroll', debounce(this.onScroll.bind(this), 500));\n\n        window.addEventListener('scroll', this.onScroll.bind(this));\n\n        window.addEventListener('load', this.recoverPageOffset.bind(this));\n\n        window.addEventListener('beforeunload', this.persistData.bind(this));\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RememberLocation);\n\n//# sourceURL=webpack://remember-location/./index.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = {};
/******/ __webpack_modules__["./index.js"](0, __webpack_exports__, __webpack_require__);
/******/ var __webpack_exports__default = __webpack_exports__.default;
/******/ export { __webpack_exports__default as default };
/******/ 
