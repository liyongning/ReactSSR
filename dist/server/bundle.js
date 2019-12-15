/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ \"./src/index.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store */ \"./src/store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_views_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/views/header */ \"./src/views/header.js\");\n/**\r\n * Server 端,负责首屏渲染\r\n */\n\n // 这里导入的App是一个虚拟DOM\n// import App from '../src'\n\n\n\n // store\n\n\nvar store = Object(_src_store__WEBPACK_IMPORTED_MODULE_5__[\"serverStore\"])();\n // header\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(); // 这里的路径是相对执行位置来说的\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default.a[\"static\"]('./dist/client'));\napp.get('*', function (req, res) {\n  // 根据路由拿到对应的组件，并执行loadData方法获取数据\n  var promises = [];\n  _src__WEBPACK_IMPORTED_MODULE_2__[\"default\"].forEach(function (route) {\n    if (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"matchPath\"])(req.path, route)) {\n      route.component.loadData && promises.push(route.component.loadData(store));\n    }\n  }); // 数据全部加载完成,再渲染页面\n\n  Promise.all(promises).then(function (_) {\n    // 在服务端将虚拟DOM渲染成HTML\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])( // 负责首屏路由\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.url\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_views_header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), _src__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (route) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Route\"], route);\n    })))); // 向浏览器返回一段拼接好的HTML\n\n    res.send(\"\\n      <html>\\n        <head>\\n          <title>React SSR</title>\\n        </head>\\n        <body>\\n          <div id = \\\"root\\\">\".concat(content, \"</div>\\n          <script>\\n            window.__context = \").concat(JSON.stringify(store.getState()), \"\\n          </script>\\n          <script src = \\\"/bundle.js\\\"></script>\\n        </body>\\n      </html>\\n      \"));\n  })[\"catch\"](function (err) {\n    res.send('error page');\n  });\n});\napp.listen(3000, function () {\n  console.log('server start');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanM/MGE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogU2VydmVyIOerryzotJ/otKPpppblsY/muLLmn5NcclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuLy8g6L+Z6YeM5a+85YWl55qEQXBw5piv5LiA5Liq6Jma5oufRE9NXHJcbi8vIGltcG9ydCBBcHAgZnJvbSAnLi4vc3JjJ1xyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL3NyYydcclxuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG4vLyBzdG9yZVxyXG5pbXBvcnQge3NlcnZlclN0b3JlfSBmcm9tICcuLi9zcmMvc3RvcmUnXHJcbmNvbnN0IHN0b3JlID0gc2VydmVyU3RvcmUoKVxyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4vLyBoZWFkZXJcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvdmlld3MvaGVhZGVyJ1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpXHJcblxyXG4vLyDov5nph4znmoTot6/lvoTmmK/nm7jlr7nmiafooYzkvY3nva7mnaXor7TnmoRcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYygnLi9kaXN0L2NsaWVudCcpKVxyXG5cclxuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xyXG4gIC8vIOagueaNrui3r+eUseaLv+WIsOWvueW6lOeahOe7hOS7tu+8jOW5tuaJp+ihjGxvYWREYXRh5pa55rOV6I635Y+W5pWw5o2uXHJcbiAgY29uc3QgcHJvbWlzZXMgPSBbXVxyXG4gIFJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICAgIGlmIChtYXRjaFBhdGgocmVxLnBhdGgsIHJvdXRlKSkge1xyXG4gICAgICByb3V0ZS5jb21wb25lbnQubG9hZERhdGEgJiYgcHJvbWlzZXMucHVzaChyb3V0ZS5jb21wb25lbnQubG9hZERhdGEoc3RvcmUpKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIOaVsOaNruWFqOmDqOWKoOi9veWujOaIkCzlho3muLLmn5PpobXpnaJcclxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihfID0+IHtcclxuICAgIC8vIOWcqOacjeWKoeerr+WwhuiZmuaLn0RPTea4suafk+aIkEhUTUxcclxuICAgIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcclxuICAgICAgLy8g6LSf6LSj6aaW5bGP6Lev55SxXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9PlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBSb3V0ZXMubWFwKHJvdXRlID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gPFJvdXRlIHsuLi5yb3V0ZX0gLz5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIClcclxuICAgIC8vIOWQkea1j+iniOWZqOi/lOWbnuS4gOauteaLvOaOpeWlveeahEhUTUxcclxuICAgIHJlcy5zZW5kKFxyXG4gICAgICBgXHJcbiAgICAgIDxodG1sPlxyXG4gICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlJlYWN0IFNTUjwvdGl0bGU+XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPGRpdiBpZCA9IFwicm9vdFwiPiR7Y29udGVudH08L2Rpdj5cclxuICAgICAgICAgIDxzY3JpcHQ+XHJcbiAgICAgICAgICAgIHdpbmRvdy5fX2NvbnRleHQgPSAke0pTT04uc3RyaW5naWZ5KHN0b3JlLmdldFN0YXRlKCkpfVxyXG4gICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYyA9IFwiL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9odG1sPlxyXG4gICAgICBgXHJcbiAgICApXHJcbiAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgIHJlcy5zZW5kKCdlcnJvciBwYWdlJylcclxuICB9KVxyXG59KVxyXG5cclxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3NlcnZlciBzdGFydCcpXHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./server/index.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home */ \"./src/views/home.js\");\n/* harmony import */ var _views_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/about */ \"./src/views/about.js\");\n/* harmony import */ var _views_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user */ \"./src/views/user.js\");\n/**\r\n * React 组件\r\n */\n\n\n\n\n // 这里导出的就是一个虚拟DOM\n// export default (\n//   <div>\n//     <Route path = \"/\" exact component = {Home} />\n//     <Route path = \"/about\" exact component = {About} />\n//   </div>\n// )\n// 将这里的路由代码变成像vue router一样的配置\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  exact: true,\n  component: _views_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  key: 'home'\n}, {\n  path: '/about',\n  exact: true,\n  component: _views_about__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  key: 'about'\n}, {\n  path: '/user',\n  exact: true,\n  component: _views_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  key: 'user'\n}]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUmVhY3Qg57uE5Lu2XHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBIb21lIGZyb20gJy4vdmlld3MvaG9tZSdcclxuaW1wb3J0IEFib3V0IGZyb20gJy4vdmlld3MvYWJvdXQnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4vdmlld3MvdXNlcidcclxuXHJcbi8vIOi/memHjOWvvOWHuueahOWwseaYr+S4gOS4quiZmuaLn0RPTVxyXG4vLyBleHBvcnQgZGVmYXVsdCAoXHJcbi8vICAgPGRpdj5cclxuLy8gICAgIDxSb3V0ZSBwYXRoID0gXCIvXCIgZXhhY3QgY29tcG9uZW50ID0ge0hvbWV9IC8+XHJcbi8vICAgICA8Um91dGUgcGF0aCA9IFwiL2Fib3V0XCIgZXhhY3QgY29tcG9uZW50ID0ge0Fib3V0fSAvPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyApXHJcblxyXG4vLyDlsIbov5nph4znmoTot6/nlLHku6PnoIHlj5jmiJDlg492dWUgcm91dGVy5LiA5qC355qE6YWN572uXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICAgIGNvbXBvbmVudDogSG9tZSxcclxuICAgIGtleTogJ2hvbWUnXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBBYm91dCxcclxuICAgIGtleTogJ2Fib3V0J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy91c2VyJyxcclxuICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgY29tcG9uZW50OiBVc2VyLFxyXG4gICAga2V5OiAndXNlcidcclxuICB9LFxyXG5dXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: clientStore, serverStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientStore\", function() { return clientStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"serverStore\", function() { return serverStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home */ \"./src/store/modules/home.js\");\n/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/user */ \"./src/store/modules/user.js\");\n/**\r\n * store入口\r\n */\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _modules_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  user: _modules_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}); // 创建store\n// const store = createStore(reducer, applyMiddleware(thunk))\n// export default store\n// 这里需要导出两个store，一个用户server端，一个用户客户端\n\nvar clientStore = function clientStore() {\n  // 将服务端设置的初始值设置为store的默认值\n  var defaultState = window.__context ? window.__context : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n}; // 服务端通过dispatch来获取数据，然后给客户端store提供一个初始值\n\nvar serverStore = function serverStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanM/NDM2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogc3RvcmXlhaXlj6NcclxuICovXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXHJcbmltcG9ydCBob21lIGZyb20gJy4vbW9kdWxlcy9ob21lJ1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL21vZHVsZXMvdXNlcidcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGhvbWUsXHJcbiAgdXNlclxyXG59KVxyXG5cclxuLy8g5Yib5bu6c3RvcmVcclxuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuXHJcbi8vIOi/memHjOmcgOimgeWvvOWHuuS4pOS4qnN0b3Jl77yM5LiA5Liq55So5oi3c2VydmVy56uv77yM5LiA5Liq55So5oi35a6i5oi356uvXHJcbmV4cG9ydCBjb25zdCBjbGllbnRTdG9yZSA9ICgpID0+IHtcclxuICAvLyDlsIbmnI3liqHnq6/orr7nva7nmoTliJ3lp4vlgLzorr7nva7kuLpzdG9yZeeahOm7mOiupOWAvFxyXG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHdpbmRvdy5fX2NvbnRleHQgPyB3aW5kb3cuX19jb250ZXh0IDoge31cclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgZGVmYXVsdFN0YXRlLCBhcHBseU1pZGRsZXdhcmUodGh1bmspKVxyXG59XHJcblxyXG4vLyDmnI3liqHnq6/pgJrov4dkaXNwYXRjaOadpeiOt+WPluaVsOaNru+8jOeEtuWQjue7meWuouaIt+err3N0b3Jl5o+Q5L6b5LiA5Liq5Yid5aeL5YC8XHJcbmV4cG9ydCBjb25zdCBzZXJ2ZXJTdG9yZSA9ICgpID0+IHtcclxuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSlcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ }),

/***/ "./src/store/modules/home.js":
/*!***********************************!*\
  !*** ./src/store/modules/home.js ***!
  \***********************************/
/*! exports provided: getHomeList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeList\", function() { return getHomeList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * 首页\r\n */\n // action.type\n\nvar GET_LIST = 'HOME/GET_LIST'; // actionCreator\n\nvar changeList = function changeList(list) {\n  return {\n    type: GET_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = function getHomeList(server) {\n  return function (dispatch, getState, axiosInstance) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:3001/api/course/list').then(function (res) {\n      var list = res.data.list;\n      console.log(list);\n      dispatch(changeList(list));\n    });\n  };\n};\nvar defaultState = {\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_LIST:\n      var newState = _objectSpread({}, state, {\n        list: action.list\n      });\n\n      return newState;\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy9ob21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL21vZHVsZXMvaG9tZS5qcz9lNTQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpppbpobVcclxuICovXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGFjdGlvbi50eXBlXHJcbmNvbnN0IEdFVF9MSVNUID0gJ0hPTUUvR0VUX0xJU1QnXHJcblxyXG4vLyBhY3Rpb25DcmVhdG9yXHJcbmNvbnN0IGNoYW5nZUxpc3QgPSBsaXN0ID0+ICh7XHJcbiAgdHlwZTogR0VUX0xJU1QsXHJcbiAgbGlzdFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhvbWVMaXN0ID0gc2VydmVyID0+IHtcclxuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgYXhpb3NJbnN0YW5jZSkgPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jb3Vyc2UvbGlzdCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc3QgeyBsaXN0IH0gPSByZXMuZGF0YVxyXG4gICAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgICBkaXNwYXRjaChjaGFuZ2VMaXN0KGxpc3QpKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICBsaXN0OiBbXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgR0VUX0xJU1Q6XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxpc3Q6IGFjdGlvbi5saXN0XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG5ld1N0YXRlXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/modules/home.js\n");

/***/ }),

/***/ "./src/store/modules/user.js":
/*!***********************************!*\
  !*** ./src/store/modules/user.js ***!
  \***********************************/
/*! exports provided: getUserInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserInfo\", function() { return getUserInfo; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\r\n * 首页\r\n */\n // action.type\n\nvar GET_INFO = 'USER/GET_INFO'; // actionCreator\n\nvar getInfo = function getInfo(userInfo) {\n  return {\n    type: GET_INFO,\n    userInfo: userInfo\n  };\n};\n\nvar getUserInfo = function getUserInfo(server) {\n  return function (dispatch, getState, axiosInstance) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:3001/api/user/info').then(function (res) {\n      var userInfo = res.data.userInfo;\n      dispatch(getInfo(userInfo));\n    });\n  };\n};\nvar defaultState = {\n  userInfo: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_INFO:\n      var newState = _objectSpread({}, state, {\n        userInfo: action.userInfo\n      });\n\n      return newState;\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvbW9kdWxlcy91c2VyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL21vZHVsZXMvdXNlci5qcz8wZjlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpppbpobVcclxuICovXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8vIGFjdGlvbi50eXBlXHJcbmNvbnN0IEdFVF9JTkZPID0gJ1VTRVIvR0VUX0lORk8nXHJcblxyXG4vLyBhY3Rpb25DcmVhdG9yXHJcbmNvbnN0IGdldEluZm8gPSB1c2VySW5mbyA9PiAoe1xyXG4gIHR5cGU6IEdFVF9JTkZPLFxyXG4gIHVzZXJJbmZvXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSBzZXJ2ZXIgPT4ge1xyXG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBheGlvc0luc3RhbmNlKSA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXIvaW5mbycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc3QgeyB1c2VySW5mbyB9ID0gcmVzLmRhdGFcclxuICAgICAgZGlzcGF0Y2goZ2V0SW5mbyh1c2VySW5mbykpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG4gIHVzZXJJbmZvOiB7fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgR0VUX0lORk86XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJJbmZvOiBhY3Rpb24udXNlckluZm9cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbmV3U3RhdGVcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/modules/user.js\n");

/***/ }),

/***/ "./src/views/about.js":
/*!****************************!*\
  !*** ./src/views/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction About(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"About\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvYWJvdXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWJvdXQuanM/ZWIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBBYm91dCAocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGgxPkFib3V0PC9oMT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/about.js\n");

/***/ }),

/***/ "./src/views/header.js":
/*!*****************************!*\
  !*** ./src/views/header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\"), \" |\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/about\"\n  }, \"About\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/user\"\n  }, \"User\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvaGVhZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hlYWRlci5qcz8zMjcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyICgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgdG8gPSBcIi9cIj5Ib21lPC9MaW5rPiB8IFxyXG4gICAgICA8TGluayB0byA9IFwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcbiAgICAgIDxMaW5rIHRvID0gXCIvdXNlclwiPlVzZXI8L0xpbms+XHJcbiAgICA8L2Rpdj4gIFxyXG4gIClcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/views/header.js\n");

/***/ }),

/***/ "./src/views/home.js":
/*!***************************!*\
  !*** ./src/views/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/modules/home */ \"./src/store/modules/home.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Home(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // 如果数据为空，则在客户端再获取一次数据, 不为空则就使用服务端获取的数据\n    if (!props.list.length) {\n      props.getHomeList();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello \", props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setCount(count + 1);\n    }\n  }, \"Click Me\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.list.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n} // 仿nuxt，为每个组件加一个loadData方法，用于获取和填充store数据\n\n\nHome.loadData = function (store) {\n  return store.dispatch(Object(_store_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"getHomeList\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.home.list\n  };\n}, {\n  getHomeList: _store_modules_home__WEBPACK_IMPORTED_MODULE_2__[\"getHomeList\"]\n})(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvaG9tZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lLmpzPzhmNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBnZXRIb21lTGlzdCB9IGZyb20gJy4uL3N0b3JlL21vZHVsZXMvaG9tZSdcclxuXHJcbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDlpoLmnpzmlbDmja7kuLrnqbrvvIzliJnlnKjlrqLmiLfnq6/lho3ojrflj5bkuIDmrKHmlbDmja4sIOS4jeS4uuepuuWImeWwseS9v+eUqOacjeWKoeerr+iOt+WPlueahOaVsOaNrlxyXG4gICAgaWYgKCFwcm9wcy5saXN0Lmxlbmd0aCkge1xyXG4gICAgICBwcm9wcy5nZXRIb21lTGlzdCgpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDE+SGVsbG8ge3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwPntjb3VudH08L3A+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzZXRDb3VudChjb3VudCArIDEpXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIENsaWNrIE1lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwcm9wcy5saXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbi8vIOS7v251eHTvvIzkuLrmr4/kuKrnu4Tku7bliqDkuIDkuKpsb2FkRGF0YeaWueazle+8jOeUqOS6juiOt+WPluWSjOWhq+WFhXN0b3Jl5pWw5o2uXHJcbkhvbWUubG9hZERhdGEgPSAoc3RvcmUpID0+IHtcclxuICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZ2V0SG9tZUxpc3QoKSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiAoeyBsaXN0OiBzdGF0ZS5ob21lLmxpc3QgfSksIHsgZ2V0SG9tZUxpc3QgfSkoXHJcbiAgSG9tZVxyXG4pXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/home.js\n");

/***/ }),

/***/ "./src/views/user.js":
/*!***************************!*\
  !*** ./src/views/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_modules_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/modules/user */ \"./src/store/modules/user.js\");\n\n\n\n\nfunction User(props) {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // 如果数据为空，则在客户端再获取一次数据, 不为空则就使用服务端获取的数据\n    if (!Object.keys(props.userInfo).length) {\n      props.getUserInfo();\n    }\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello \", props.userInfo.title));\n} // 仿nuxt，为每个组件加一个loadData方法，用于获取和填充store数据\n\n\nUser.loadData = function (store) {\n  return store.dispatch(Object(_store_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    userInfo: state.user.userInfo\n  };\n}, {\n  getUserInfo: _store_modules_user__WEBPACK_IMPORTED_MODULE_2__[\"getUserInfo\"]\n})(User));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdmlld3MvdXNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy91c2VyLmpzP2JiMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGdldFVzZXJJbmZvIH0gZnJvbSAnLi4vc3RvcmUvbW9kdWxlcy91c2VyJ1xyXG5cclxuZnVuY3Rpb24gVXNlcihwcm9wcykge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyDlpoLmnpzmlbDmja7kuLrnqbrvvIzliJnlnKjlrqLmiLfnq6/lho3ojrflj5bkuIDmrKHmlbDmja4sIOS4jeS4uuepuuWImeWwseS9v+eUqOacjeWKoeerr+iOt+WPlueahOaVsOaNrlxyXG4gICAgaWYgKCFPYmplY3Qua2V5cyhwcm9wcy51c2VySW5mbykubGVuZ3RoKSB7XHJcbiAgICAgIHByb3BzLmdldFVzZXJJbmZvKClcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5IZWxsbyB7cHJvcHMudXNlckluZm8udGl0bGV9PC9oMT5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuLy8g5Lu/bnV4dO+8jOS4uuavj+S4que7hOS7tuWKoOS4gOS4qmxvYWREYXRh5pa55rOV77yM55So5LqO6I635Y+W5ZKM5aGr5YWFc3RvcmXmlbDmja5cclxuVXNlci5sb2FkRGF0YSA9IChzdG9yZSkgPT4ge1xyXG4gIHJldHVybiBzdG9yZS5kaXNwYXRjaChnZXRVc2VySW5mbygpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7IHVzZXJJbmZvOiBzdGF0ZS51c2VyLnVzZXJJbmZvIH0pLCB7IGdldFVzZXJJbmZvIH0pKFxyXG4gIFVzZXJcclxuKVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/views/user.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj8yMmZlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZG9tL3NlcnZlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj85NDM5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-dom/server\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtcm91dGVyLWRvbS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj81M2I5Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react-router-dom\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });