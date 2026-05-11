"use weex:vue";
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/main.js?{"page":"pages%2FvideoTalk%2Findex"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_videoTalk_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/videoTalk/index.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_videoTalk_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_videoTalk_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/videoTalk/index'\n        _pages_videoTalk_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_videoTalk_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBa0U7QUFDbEUsUUFBUSwrRUFBRztBQUNYLFFBQVEsK0VBQUc7QUFDWCxRQUFRLCtFQUFHO0FBQ1gsZ0JBQWdCLCtFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy92aWRlb1RhbGsvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdmlkZW9UYWxrL2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/main.js?{"type":"appStyle"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!****************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=3dd358ed&mpType=page */ 6);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3004764c\",\n  false,\n  _index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoTalk/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkZDM1OGVkJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIzMDA0NzY0Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlb1RhbGsvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=template&id=3dd358ed&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=3dd358ed&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_3dd358ed_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=template&id=3dd358ed&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "view",
            { staticClass: ["video-area"] },
            [
              _c("ErtcVideoView", {
                ref: "remoteView",
                staticClass: ["remote-video"],
                attrs: { viewType: "remote", renderMode: 0 },
              }),
              _c("ErtcVideoView", {
                ref: "localView",
                staticClass: ["local-video"],
                attrs: { viewType: "local", renderMode: 1 },
              }),
              !_vm.isDeviceOnline && _vm.isInRoom
                ? _c("view", { staticClass: ["status-bar"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["status-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v("等待设备接听...")]
                    ),
                  ])
                : _vm._e(),
              _vm.isDeviceOnline
                ? _c("view", { staticClass: ["duration-bar"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["duration-text"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [
                        _vm._v(
                          "通话中 " +
                            _vm._s(_vm.formatDuration(_vm.talkSeconds))
                        ),
                      ]
                    ),
                  ])
                : _vm._e(),
            ],
            1
          ),
          !_vm.isInRoom
            ? _c(
                "scroll-view",
                { staticClass: ["params-area"], attrs: { scrollY: true } },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["section-title"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("ERTC 参数配置")]
                  ),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "ERTC项目ID (appId)",
                      value: _vm.appId,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.appId = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "房间ID (roomId)",
                      value: _vm.roomId,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.roomId = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "用户ID (userId)",
                      value: _vm.userId,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.userId = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "客户端Token (ertcClientToken)",
                      value: _vm.ertcClientToken,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.ertcClientToken = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "设备端Token (ertcDeviceToken)",
                      value: _vm.ertcDeviceToken,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.ertcDeviceToken = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "设备序列号 (deviceSerial)",
                      value: _vm.deviceSerial,
                    },
                    on: {
                      input: function (e) {
                        return (_vm.deviceSerial = e.detail.value)
                      },
                    },
                  }),
                  _c("u-input", {
                    staticClass: ["input-field"],
                    attrs: {
                      placeholder: "通道号 (channelNo)",
                      value: _vm.channelNo,
                      type: "number",
                    },
                    on: {
                      input: function (e) {
                        return (_vm.channelNo = e.detail.value)
                      },
                    },
                  }),
                  _c(
                    "view",
                    { staticClass: ["btn-row"] },
                    [
                      _c(
                        "button",
                        {
                          staticClass: ["btn-primary"],
                          on: { click: _vm.doInitAndCall },
                        },
                        [_vm._v("初始化并呼叫设备")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    { staticClass: ["btn-row"] },
                    [
                      _c(
                        "button",
                        {
                          staticClass: ["btn-secondary"],
                          on: { click: _vm.doInitAndJoin },
                        },
                        [_vm._v("初始化并接听(设备呼叫)")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : _vm._e(),
          _vm.isInRoom
            ? _c("view", { staticClass: ["control-area"] }, [
                _c("view", { staticClass: ["ctrl-row"] }, [
                  _c(
                    "view",
                    { staticClass: ["ctrl-btn"], on: { click: _vm.toggleMic } },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["ctrl-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.isMicOn ? "🎤 静音" : "🔇 取消静音")
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["ctrl-btn"],
                      on: { click: _vm.toggleSpeaker },
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["ctrl-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.isSpeakerOn ? "🔊 听筒" : "🔈 扬声器")
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["ctrl-btn"],
                      on: { click: _vm.doSwitchCamera },
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["ctrl-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("📷 切换")]
                      ),
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["ctrl-btn"],
                      on: { click: _vm.toggleCamera },
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["ctrl-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v(_vm._s(_vm.isCameraOn ? "📹 关闭" : "📹 开启"))]
                      ),
                    ]
                  ),
                ]),
                _c("view", { staticClass: ["ctrl-row"] }, [
                  _c(
                    "view",
                    {
                      staticClass: ["hangup-btn"],
                      on: { click: _vm.doHangUp },
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["hangup-text"],
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("挂断")]
                      ),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.logs.length > 0
            ? _c(
                "scroll-view",
                { staticClass: ["log-area"], attrs: { scrollY: true } },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["log-title"],
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v("事件日志：")]
                  ),
                  _vm._l(_vm.logs, function (log, idx) {
                    return _c(
                      "u-text",
                      {
                        key: idx,
                        staticClass: ["log-item"],
                        appendAsTree: true,
                        attrs: { append: "tree" },
                      },
                      [_vm._v(_vm._s(log))]
                    )
                  }),
                ],
                2
              )
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!****************************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQSthLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar videoTalk = __webpack_provided_uni_dot_requireNativePlugin('super_ezviz_videotalk');\nvar _default = {\n  data: function data() {\n    return {\n      // 参数\n      appId: '',\n      roomId: '',\n      userId: '',\n      ertcClientToken: '',\n      ertcDeviceToken: '',\n      deviceSerial: '',\n      channelNo: '1',\n      // 状态\n      isInRoom: false,\n      isDeviceOnline: false,\n      isMicOn: true,\n      isSpeakerOn: true,\n      isCameraOn: true,\n      talkSeconds: 0,\n      talkTimer: null,\n      logs: []\n    };\n  },\n  onLoad: function onLoad() {\n    var _this = this;\n    // 注册事件监听\n    videoTalk.registerEventListener(function (event) {\n      _this.addLog(\"[\".concat(event.event, \"] \").concat(JSON.stringify(event)));\n      switch (event.event) {\n        case 'onEnterRoomSuccess':\n          _this.addLog('进入房间成功');\n          break;\n        case 'onRemoteUserEnterRoom':\n          _this.isDeviceOnline = true;\n          _this.startTimer();\n          _this.addLog('设备已接听: ' + event.userId);\n          break;\n        case 'onUserVideoAvailable':\n          if (event.available) {\n            _this.$refs.remoteView.bindRemoteView(event.userId, 0);\n            _this.addLog('远端视频可用，已绑定视图');\n          }\n          break;\n        case 'onRemoteUserLeaveRoom':\n          _this.addLog('设备已离开: ' + event.userId);\n          _this.doHangUp();\n          break;\n        case 'onError':\n          _this.addLog('ERTC错误: ' + event.errorCode);\n          break;\n        case 'onInviteDeviceFailed':\n          _this.addLog('邀请设备失败: ' + event.msg);\n          break;\n      }\n    });\n  },\n  onUnload: function onUnload() {\n    this.stopTimer();\n    videoTalk.destroyEngine();\n  },\n  methods: {\n    addLog: function addLog(msg) {\n      var time = new Date().toLocaleTimeString();\n      this.logs.unshift(\"[\".concat(time, \"] \").concat(msg));\n      if (this.logs.length > 50) this.logs.pop();\n    },\n    formatDuration: function formatDuration(seconds) {\n      var m = Math.floor(seconds / 60);\n      var s = seconds % 60;\n      return \"\".concat(m < 10 ? '0' + m : m, \":\").concat(s < 10 ? '0' + s : s);\n    },\n    startTimer: function startTimer() {\n      var _this2 = this;\n      this.talkSeconds = 0;\n      this.talkTimer = setInterval(function () {\n        _this2.talkSeconds++;\n      }, 1000);\n    },\n    stopTimer: function stopTimer() {\n      if (this.talkTimer) {\n        clearInterval(this.talkTimer);\n        this.talkTimer = null;\n      }\n    },\n    checkParams: function checkParams() {\n      if (!this.appId || !this.roomId || !this.userId || !this.ertcClientToken) {\n        uni.showToast({\n          title: '请填写必要参数(appId/roomId/userId/clientToken)',\n          icon: 'none'\n        });\n        return false;\n      }\n      return true;\n    },\n    // 初始化并呼叫设备\n    doInitAndCall: function doInitAndCall() {\n      if (!this.checkParams()) return;\n      if (!this.deviceSerial || !this.ertcDeviceToken) {\n        uni.showToast({\n          title: '呼叫设备需填写deviceSerial和deviceToken',\n          icon: 'none'\n        });\n        return;\n      }\n      this.initAndEnterRoom(true);\n    },\n    // 初始化并接听\n    doInitAndJoin: function doInitAndJoin() {\n      if (!this.checkParams()) return;\n      this.initAndEnterRoom(false);\n    },\n    initAndEnterRoom: function initAndEnterRoom(isClientCall) {\n      var _this3 = this;\n      this.addLog('正在初始化ERTC引擎...');\n      videoTalk.initErtcEngine({\n        appId: this.appId\n      }, function (res) {\n        _this3.addLog('initErtcEngine: ' + JSON.stringify(res));\n        if (!res.success) {\n          uni.showToast({\n            title: '引擎初始化失败: ' + res.msg,\n            icon: 'none'\n          });\n          return;\n        }\n        // 设置视频参数\n        videoTalk.setVideoEncoderParam({\n          width: 1280,\n          height: 720,\n          fps: 15,\n          bitrate: 512000\n        });\n        // 进入房间\n        _this3.addLog('正在进入房间...');\n        videoTalk.enterRoom({\n          appId: _this3.appId,\n          roomId: _this3.roomId,\n          userId: _this3.userId,\n          ertcClientToken: _this3.ertcClientToken,\n          ertcDeviceToken: _this3.ertcDeviceToken || '',\n          deviceSerial: _this3.deviceSerial || '',\n          channelNo: parseInt(_this3.channelNo) || 1,\n          isClientCall: isClientCall\n        }, function (res) {\n          _this3.addLog('enterRoom: ' + JSON.stringify(res));\n          if (res.success) {\n            _this3.isInRoom = true;\n            _this3.$refs.localView.bindLocalView();\n            _this3.addLog('已进入房间，本地预览已绑定');\n          } else {\n            uni.showToast({\n              title: '进入房间失败: ' + res.msg,\n              icon: 'none'\n            });\n          }\n        });\n      });\n    },\n    toggleMic: function toggleMic() {\n      this.isMicOn = !this.isMicOn;\n      videoTalk.enableLocalAudio(this.isMicOn);\n      this.addLog('麦克风: ' + (this.isMicOn ? '开启' : '关闭'));\n    },\n    toggleSpeaker: function toggleSpeaker() {\n      this.isSpeakerOn = !this.isSpeakerOn;\n      videoTalk.setSpeakerPhoneOn(this.isSpeakerOn);\n      this.addLog('扬声器: ' + (this.isSpeakerOn ? '开启' : '关闭'));\n    },\n    toggleCamera: function toggleCamera() {\n      this.isCameraOn = !this.isCameraOn;\n      videoTalk.enableLocalVideo(this.isCameraOn);\n      this.addLog('摄像头: ' + (this.isCameraOn ? '开启' : '关闭'));\n    },\n    doSwitchCamera: function doSwitchCamera() {\n      videoTalk.switchCamera();\n      this.addLog('切换前后摄像头');\n    },\n    doHangUp: function doHangUp() {\n      var _this4 = this;\n      this.stopTimer();\n      videoTalk.hangUp(function (res) {\n        _this4.addLog('hangUp: ' + JSON.stringify(res));\n        _this4.isInRoom = false;\n        _this4.isDeviceOnline = false;\n        _this4.talkSeconds = 0;\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UYWxrL2luZGV4Lm52dWUiXSwibmFtZXMiOlsiZGF0YSIsImFwcElkIiwicm9vbUlkIiwidXNlcklkIiwiZXJ0Y0NsaWVudFRva2VuIiwiZXJ0Y0RldmljZVRva2VuIiwiZGV2aWNlU2VyaWFsIiwiY2hhbm5lbE5vIiwiaXNJblJvb20iLCJpc0RldmljZU9ubGluZSIsImlzTWljT24iLCJpc1NwZWFrZXJPbiIsImlzQ2FtZXJhT24iLCJ0YWxrU2Vjb25kcyIsInRhbGtUaW1lciIsImxvZ3MiLCJvbkxvYWQiLCJ2aWRlb1RhbGsiLCJvblVubG9hZCIsIm1ldGhvZHMiLCJhZGRMb2ciLCJmb3JtYXREdXJhdGlvbiIsInN0YXJ0VGltZXIiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwiY2hlY2tQYXJhbXMiLCJ1bmkiLCJ0aXRsZSIsImljb24iLCJkb0luaXRBbmRDYWxsIiwiZG9Jbml0QW5kSm9pbiIsImluaXRBbmRFbnRlclJvb20iLCJ3aWR0aCIsImhlaWdodCIsImZwcyIsImJpdHJhdGUiLCJpc0NsaWVudENhbGwiLCJ0b2dnbGVNaWMiLCJ0b2dnbGVTcGVha2VyIiwidG9nZ2xlQ2FtZXJhIiwiZG9Td2l0Y2hDYW1lcmEiLCJkb0hhbmdVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBO0FBQUEsZUFFQTtFQUNBQTtJQUNBO01BQ0E7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFBQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1lBQ0E7WUFDQTtVQUNBO1VBQ0E7UUFDQTtVQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO1VBQ0E7VUFDQTtNQUFBO0lBRUE7RUFDQTtFQUNBQztJQUNBO0lBQ0FEO0VBQ0E7RUFDQUU7SUFDQUM7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQUE7TUFDQTtNQUNBO1FBQUE7TUFBQTtJQUNBO0lBQ0FDO01BQ0E7UUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtRQUNBQztVQUFBQztVQUFBQztRQUFBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUg7VUFBQUM7VUFBQUM7UUFBQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQUU7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0FkO1FBQUFoQjtNQUFBO1FBQ0E7UUFDQTtVQUNBeUI7WUFBQUM7WUFBQUM7VUFBQTtVQUNBO1FBQ0E7UUFDQTtRQUNBWDtVQUFBZTtVQUFBQztVQUFBQztVQUFBQztRQUFBO1FBQ0E7UUFDQTtRQUNBbEI7VUFDQWhCO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0FDO1VBQ0E2QjtRQUNBO1VBQ0E7VUFDQTtZQUNBO1lBQ0E7WUFDQTtVQUNBO1lBQ0FWO2NBQUFDO2NBQUFDO1lBQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBUztNQUNBO01BQ0FwQjtNQUNBO0lBQ0E7SUFDQXFCO01BQ0E7TUFDQXJCO01BQ0E7SUFDQTtJQUNBc0I7TUFDQTtNQUNBdEI7TUFDQTtJQUNBO0lBQ0F1QjtNQUNBdkI7TUFDQTtJQUNBO0lBQ0F3QjtNQUFBO01BQ0E7TUFDQXhCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHQ8IS0tIOinhumikeWMuuWfnyAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYXJlYVwiPlxyXG5cdFx0XHQ8RXJ0Y1ZpZGVvVmlldyByZWY9XCJyZW1vdGVWaWV3XCIgdmlld1R5cGU9XCJyZW1vdGVcIiA6cmVuZGVyTW9kZT1cIjBcIiBjbGFzcz1cInJlbW90ZS12aWRlb1wiIC8+XHJcblx0XHRcdDxFcnRjVmlkZW9WaWV3IHJlZj1cImxvY2FsVmlld1wiIHZpZXdUeXBlPVwibG9jYWxcIiA6cmVuZGVyTW9kZT1cIjFcIiBjbGFzcz1cImxvY2FsLXZpZGVvXCIgLz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzdGF0dXMtYmFyXCIgdi1pZj1cIiFpc0RldmljZU9ubGluZSAmJiBpc0luUm9vbVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwic3RhdHVzLXRleHRcIj7nrYnlvoXorr7lpIfmjqXlkKwuLi48L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJkdXJhdGlvbi1iYXJcIiB2LWlmPVwiaXNEZXZpY2VPbmxpbmVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImR1cmF0aW9uLXRleHRcIj7pgJror53kuK0ge3sgZm9ybWF0RHVyYXRpb24odGFsa1NlY29uZHMpIH19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDlj4LmlbDovpPlhaXljLrln58gLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgY2xhc3M9XCJwYXJhbXMtYXJlYVwiIHYtaWY9XCIhaXNJblJvb21cIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+RVJUQyDlj4LmlbDphY3nva48L3RleHQ+XHJcblx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVSVEPpobnnm65JRCAoYXBwSWQpXCIgOnZhbHVlPVwiYXBwSWRcIiBAaW5wdXQ9XCJlID0+IGFwcElkID0gZS5kZXRhaWwudmFsdWVcIlxyXG5cdFx0XHRcdGNsYXNzPVwiaW5wdXQtZmllbGRcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLmiL/pl7RJRCAocm9vbUlkKVwiIDp2YWx1ZT1cInJvb21JZFwiIEBpbnB1dD1cImUgPT4gcm9vbUlkID0gZS5kZXRhaWwudmFsdWVcIlxyXG5cdFx0XHRcdGNsYXNzPVwiaW5wdXQtZmllbGRcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLnlKjmiLdJRCAodXNlcklkKVwiIDp2YWx1ZT1cInVzZXJJZFwiIEBpbnB1dD1cImUgPT4gdXNlcklkID0gZS5kZXRhaWwudmFsdWVcIlxyXG5cdFx0XHRcdGNsYXNzPVwiaW5wdXQtZmllbGRcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLlrqLmiLfnq69Ub2tlbiAoZXJ0Y0NsaWVudFRva2VuKVwiIDp2YWx1ZT1cImVydGNDbGllbnRUb2tlblwiXHJcblx0XHRcdFx0QGlucHV0PVwiZSA9PiBlcnRjQ2xpZW50VG9rZW4gPSBlLmRldGFpbC52YWx1ZVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLorr7lpIfnq69Ub2tlbiAoZXJ0Y0RldmljZVRva2VuKVwiIDp2YWx1ZT1cImVydGNEZXZpY2VUb2tlblwiXHJcblx0XHRcdFx0QGlucHV0PVwiZSA9PiBlcnRjRGV2aWNlVG9rZW4gPSBlLmRldGFpbC52YWx1ZVwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLorr7lpIfluo/liJflj7cgKGRldmljZVNlcmlhbClcIiA6dmFsdWU9XCJkZXZpY2VTZXJpYWxcIlxyXG5cdFx0XHRcdEBpbnB1dD1cImUgPT4gZGV2aWNlU2VyaWFsID0gZS5kZXRhaWwudmFsdWVcIiBjbGFzcz1cImlucHV0LWZpZWxkXCIgLz5cclxuXHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6YCa6YGT5Y+3IChjaGFubmVsTm8pXCIgOnZhbHVlPVwiY2hhbm5lbE5vXCIgQGlucHV0PVwiZSA9PiBjaGFubmVsTm8gPSBlLmRldGFpbC52YWx1ZVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJpbnB1dC1maWVsZFwiIHR5cGU9XCJudW1iZXJcIiAvPlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJidG4tcm93XCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0bi1wcmltYXJ5XCIgQGNsaWNrPVwiZG9Jbml0QW5kQ2FsbFwiPuWIneWni+WMluW5tuWRvOWPq+iuvuWkhzwvYnV0dG9uPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYnRuLXJvd1wiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4tc2Vjb25kYXJ5XCIgQGNsaWNrPVwiZG9Jbml0QW5kSm9pblwiPuWIneWni+WMluW5tuaOpeWQrCjorr7lpIflkbzlj6spPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblxyXG5cdFx0PCEtLSDpgJror53mjqfliLbmoI8gLS0+XHJcblx0XHQ8dmlldyBjbGFzcz1cImNvbnRyb2wtYXJlYVwiIHYtaWY9XCJpc0luUm9vbVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImN0cmwtcm93XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdHJsLWJ0blwiIEBjbGljaz1cInRvZ2dsZU1pY1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdHJsLXRleHRcIj57eyBpc01pY09uID8gJ/CfjqQg6Z2Z6Z+zJyA6ICfwn5SHIOWPlua2iOmdmemfsycgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3RybC1idG5cIiBAY2xpY2s9XCJ0b2dnbGVTcGVha2VyXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImN0cmwtdGV4dFwiPnt7IGlzU3BlYWtlck9uID8gJ/CflIog5ZCs562SJyA6ICfwn5SIIOaJrOWjsOWZqCcgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY3RybC1idG5cIiBAY2xpY2s9XCJkb1N3aXRjaENhbWVyYVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdHJsLXRleHRcIj7wn5O3IOWIh+aNojwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjdHJsLWJ0blwiIEBjbGljaz1cInRvZ2dsZUNhbWVyYVwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjdHJsLXRleHRcIj57eyBpc0NhbWVyYU9uID8gJ/Cfk7kg5YWz6ZetJyA6ICfwn5O5IOW8gOWQrycgfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY3RybC1yb3dcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImhhbmd1cC1idG5cIiBAY2xpY2s9XCJkb0hhbmdVcFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJoYW5ndXAtdGV4dFwiPuaMguaWrTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHJcblx0XHQ8IS0tIOaXpeW/l+WMuuWfnyAtLT5cclxuXHRcdDxzY3JvbGwtdmlldyBzY3JvbGwteSBjbGFzcz1cImxvZy1hcmVhXCIgdi1pZj1cImxvZ3MubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImxvZy10aXRsZVwiPuS6i+S7tuaXpeW/l++8mjwvdGV4dD5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJsb2ctaXRlbVwiIHYtZm9yPVwiKGxvZywgaWR4KSBpbiBsb2dzXCIgOmtleT1cImlkeFwiPnt7IGxvZyB9fTwvdGV4dD5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCB2aWRlb1RhbGsgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignc3VwZXJfZXp2aXpfdmlkZW90YWxrJyk7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8g5Y+C5pWwXHJcblx0XHRcdFx0YXBwSWQ6ICcnLFxyXG5cdFx0XHRcdHJvb21JZDogJycsXHJcblx0XHRcdFx0dXNlcklkOiAnJyxcclxuXHRcdFx0XHRlcnRjQ2xpZW50VG9rZW46ICcnLFxyXG5cdFx0XHRcdGVydGNEZXZpY2VUb2tlbjogJycsXHJcblx0XHRcdFx0ZGV2aWNlU2VyaWFsOiAnJyxcclxuXHRcdFx0XHRjaGFubmVsTm86ICcxJyxcclxuXHRcdFx0XHQvLyDnirbmgIFcclxuXHRcdFx0XHRpc0luUm9vbTogZmFsc2UsXHJcblx0XHRcdFx0aXNEZXZpY2VPbmxpbmU6IGZhbHNlLFxyXG5cdFx0XHRcdGlzTWljT246IHRydWUsXHJcblx0XHRcdFx0aXNTcGVha2VyT246IHRydWUsXHJcblx0XHRcdFx0aXNDYW1lcmFPbjogdHJ1ZSxcclxuXHRcdFx0XHR0YWxrU2Vjb25kczogMCxcclxuXHRcdFx0XHR0YWxrVGltZXI6IG51bGwsXHJcblx0XHRcdFx0bG9nczogW11cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0Ly8g5rOo5YaM5LqL5Lu255uR5ZCsXHJcblx0XHRcdHZpZGVvVGFsay5yZWdpc3RlckV2ZW50TGlzdGVuZXIoKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hZGRMb2coYFske2V2ZW50LmV2ZW50fV0gJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XHJcblx0XHRcdFx0c3dpdGNoIChldmVudC5ldmVudCkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnb25FbnRlclJvb21TdWNjZXNzJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ+i/m+WFpeaIv+mXtOaIkOWKnycpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ29uUmVtb3RlVXNlckVudGVyUm9vbSc6XHJcblx0XHRcdFx0XHRcdHRoaXMuaXNEZXZpY2VPbmxpbmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXJ0VGltZXIoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ+iuvuWkh+W3suaOpeWQrDogJyArIGV2ZW50LnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnb25Vc2VyVmlkZW9BdmFpbGFibGUnOlxyXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQuYXZhaWxhYmxlKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy5yZW1vdGVWaWV3LmJpbmRSZW1vdGVWaWV3KGV2ZW50LnVzZXJJZCwgMCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ+i/nOerr+inhumikeWPr+eUqO+8jOW3sue7keWumuinhuWbvicpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnb25SZW1vdGVVc2VyTGVhdmVSb29tJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ+iuvuWkh+W3suemu+W8gDogJyArIGV2ZW50LnVzZXJJZCk7XHJcblx0XHRcdFx0XHRcdHRoaXMuZG9IYW5nVXAoKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdvbkVycm9yJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ0VSVEPplJnor686ICcgKyBldmVudC5lcnJvckNvZGUpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ29uSW52aXRlRGV2aWNlRmFpbGVkJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5hZGRMb2coJ+mCgOivt+iuvuWkh+Wksei0pTogJyArIGV2ZW50Lm1zZyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdHRoaXMuc3RvcFRpbWVyKCk7XHJcblx0XHRcdHZpZGVvVGFsay5kZXN0cm95RW5naW5lKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhZGRMb2cobXNnKSB7XHJcblx0XHRcdFx0Y29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XHJcblx0XHRcdFx0dGhpcy5sb2dzLnVuc2hpZnQoYFske3RpbWV9XSAke21zZ31gKTtcclxuXHRcdFx0XHRpZiAodGhpcy5sb2dzLmxlbmd0aCA+IDUwKSB0aGlzLmxvZ3MucG9wKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdER1cmF0aW9uKHNlY29uZHMpIHtcclxuXHRcdFx0XHRjb25zdCBtID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG5cdFx0XHRcdGNvbnN0IHMgPSBzZWNvbmRzICUgNjA7XHJcblx0XHRcdFx0cmV0dXJuIGAke20gPCAxMCA/ICcwJyArIG0gOiBtfToke3MgPCAxMCA/ICcwJyArIHMgOiBzfWA7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0VGltZXIoKSB7XHJcblx0XHRcdFx0dGhpcy50YWxrU2Vjb25kcyA9IDA7XHJcblx0XHRcdFx0dGhpcy50YWxrVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMudGFsa1NlY29uZHMrKzsgfSwgMTAwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b3BUaW1lcigpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50YWxrVGltZXIpIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50YWxrVGltZXIpO1xyXG5cdFx0XHRcdFx0dGhpcy50YWxrVGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hlY2tQYXJhbXMoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmFwcElkIHx8ICF0aGlzLnJvb21JZCB8fCAhdGhpcy51c2VySWQgfHwgIXRoaXMuZXJ0Y0NsaWVudFRva2VuKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfor7floavlhpnlv4XopoHlj4LmlbAoYXBwSWQvcm9vbUlkL3VzZXJJZC9jbGllbnRUb2tlbiknLCBpY29uOiAnbm9uZScgfSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliJ3lp4vljJblubblkbzlj6vorr7lpIdcclxuXHRcdFx0ZG9Jbml0QW5kQ2FsbCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuY2hlY2tQYXJhbXMoKSkgcmV0dXJuO1xyXG5cdFx0XHRcdGlmICghdGhpcy5kZXZpY2VTZXJpYWwgfHwgIXRoaXMuZXJ0Y0RldmljZVRva2VuKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICflkbzlj6vorr7lpIfpnIDloavlhplkZXZpY2VTZXJpYWzlkoxkZXZpY2VUb2tlbicsIGljb246ICdub25lJyB9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5pbml0QW5kRW50ZXJSb29tKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDliJ3lp4vljJblubbmjqXlkKxcclxuXHRcdFx0ZG9Jbml0QW5kSm9pbigpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuY2hlY2tQYXJhbXMoKSkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuaW5pdEFuZEVudGVyUm9vbShmYWxzZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGluaXRBbmRFbnRlclJvb20oaXNDbGllbnRDYWxsKSB7XHJcblx0XHRcdFx0dGhpcy5hZGRMb2coJ+ato+WcqOWIneWni+WMlkVSVEPlvJXmk44uLi4nKTtcclxuXHRcdFx0XHR2aWRlb1RhbGsuaW5pdEVydGNFbmdpbmUoeyBhcHBJZDogdGhpcy5hcHBJZCB9LCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZExvZygnaW5pdEVydGNFbmdpbmU6ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdGlmICghcmVzLnN1Y2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAn5byV5pOO5Yid5aeL5YyW5aSx6LSlOiAnICsgcmVzLm1zZywgaWNvbjogJ25vbmUnIH0pO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyDorr7nva7op4bpopHlj4LmlbBcclxuXHRcdFx0XHRcdHZpZGVvVGFsay5zZXRWaWRlb0VuY29kZXJQYXJhbSh7IHdpZHRoOiAxMjgwLCBoZWlnaHQ6IDcyMCwgZnBzOiAxNSwgYml0cmF0ZTogNTEyMDAwIH0pO1xyXG5cdFx0XHRcdFx0Ly8g6L+b5YWl5oi/6Ze0XHJcblx0XHRcdFx0XHR0aGlzLmFkZExvZygn5q2j5Zyo6L+b5YWl5oi/6Ze0Li4uJyk7XHJcblx0XHRcdFx0XHR2aWRlb1RhbGsuZW50ZXJSb29tKHtcclxuXHRcdFx0XHRcdFx0YXBwSWQ6IHRoaXMuYXBwSWQsXHJcblx0XHRcdFx0XHRcdHJvb21JZDogdGhpcy5yb29tSWQsXHJcblx0XHRcdFx0XHRcdHVzZXJJZDogdGhpcy51c2VySWQsXHJcblx0XHRcdFx0XHRcdGVydGNDbGllbnRUb2tlbjogdGhpcy5lcnRjQ2xpZW50VG9rZW4sXHJcblx0XHRcdFx0XHRcdGVydGNEZXZpY2VUb2tlbjogdGhpcy5lcnRjRGV2aWNlVG9rZW4gfHwgJycsXHJcblx0XHRcdFx0XHRcdGRldmljZVNlcmlhbDogdGhpcy5kZXZpY2VTZXJpYWwgfHwgJycsXHJcblx0XHRcdFx0XHRcdGNoYW5uZWxObzogcGFyc2VJbnQodGhpcy5jaGFubmVsTm8pIHx8IDEsXHJcblx0XHRcdFx0XHRcdGlzQ2xpZW50Q2FsbDogaXNDbGllbnRDYWxsXHJcblx0XHRcdFx0XHR9LCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkTG9nKCdlbnRlclJvb206ICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pc0luUm9vbSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy5sb2NhbFZpZXcuYmluZExvY2FsVmlldygpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkTG9nKCflt7Lov5vlhaXmiL/pl7TvvIzmnKzlnLDpooTop4jlt7Lnu5HlrponKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICfov5vlhaXmiL/pl7TlpLHotKU6ICcgKyByZXMubXNnLCBpY29uOiAnbm9uZScgfSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2dnbGVNaWMoKSB7XHJcblx0XHRcdFx0dGhpcy5pc01pY09uID0gIXRoaXMuaXNNaWNPbjtcclxuXHRcdFx0XHR2aWRlb1RhbGsuZW5hYmxlTG9jYWxBdWRpbyh0aGlzLmlzTWljT24pO1xyXG5cdFx0XHRcdHRoaXMuYWRkTG9nKCfpuqblhYvpo446ICcgKyAodGhpcy5pc01pY09uID8gJ+W8gOWQrycgOiAn5YWz6ZetJykpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2dnbGVTcGVha2VyKCkge1xyXG5cdFx0XHRcdHRoaXMuaXNTcGVha2VyT24gPSAhdGhpcy5pc1NwZWFrZXJPbjtcclxuXHRcdFx0XHR2aWRlb1RhbGsuc2V0U3BlYWtlclBob25lT24odGhpcy5pc1NwZWFrZXJPbik7XHJcblx0XHRcdFx0dGhpcy5hZGRMb2coJ+aJrOWjsOWZqDogJyArICh0aGlzLmlzU3BlYWtlck9uID8gJ+W8gOWQrycgOiAn5YWz6ZetJykpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b2dnbGVDYW1lcmEoKSB7XHJcblx0XHRcdFx0dGhpcy5pc0NhbWVyYU9uID0gIXRoaXMuaXNDYW1lcmFPbjtcclxuXHRcdFx0XHR2aWRlb1RhbGsuZW5hYmxlTG9jYWxWaWRlbyh0aGlzLmlzQ2FtZXJhT24pO1xyXG5cdFx0XHRcdHRoaXMuYWRkTG9nKCfmkYTlg4/lpLQ6ICcgKyAodGhpcy5pc0NhbWVyYU9uID8gJ+W8gOWQrycgOiAn5YWz6ZetJykpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb1N3aXRjaENhbWVyYSgpIHtcclxuXHRcdFx0XHR2aWRlb1RhbGsuc3dpdGNoQ2FtZXJhKCk7XHJcblx0XHRcdFx0dGhpcy5hZGRMb2coJ+WIh+aNouWJjeWQjuaRhOWDj+WktCcpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb0hhbmdVcCgpIHtcclxuXHRcdFx0XHR0aGlzLnN0b3BUaW1lcigpO1xyXG5cdFx0XHRcdHZpZGVvVGFsay5oYW5nVXAoKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hZGRMb2coJ2hhbmdVcDogJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0luUm9vbSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0RldmljZU9ubGluZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy50YWxrU2Vjb25kcyA9IDA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5wYWdlIHsgZmxleDogMTsgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTsgfVxyXG5cclxuXHQudmlkZW8tYXJlYSB7XHJcblx0XHR3aWR0aDogNzUwcnB4OyBoZWlnaHQ6IDUwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cdC5yZW1vdGUtdmlkZW8ge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7XHJcblx0fVxyXG5cdC5sb2NhbC12aWRlbyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMjBycHg7IHJpZ2h0OiAyMHJweDtcclxuXHRcdHdpZHRoOiAxODBycHg7IGhlaWdodDogMjQwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTJycHg7IG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRib3JkZXItd2lkdGg6IDJycHg7IGJvcmRlci1jb2xvcjogI2ZmZmZmZjsgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHR9XHJcblx0LnN0YXR1cy1iYXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDIwMHJweDsgbGVmdDogMDsgcmlnaHQ6IDA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuc3RhdHVzLXRleHQgeyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAzMnJweDsgfVxyXG5cdC5kdXJhdGlvbi1iYXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlOyB0b3A6IDIwcnB4OyBsZWZ0OiAyMHJweDtcclxuXHR9XHJcblx0LmR1cmF0aW9uLXRleHQge1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7IGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblx0XHRwYWRkaW5nOiA2cnB4IDE2cnB4OyBib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdH1cclxuXHJcblx0LnBhcmFtcy1hcmVhIHsgZmxleDogMTsgcGFkZGluZzogMjBycHg7IH1cclxuXHQuc2VjdGlvbi10aXRsZSB7IGZvbnQtc2l6ZTogMzJycHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tYm90dG9tOiAyMHJweDsgY29sb3I6ICMzMzM7IH1cclxuXHQuaW5wdXQtZmllbGQge1xyXG5cdFx0aGVpZ2h0OiA3MnJweDsgYm9yZGVyLXdpZHRoOiAxcnB4OyBib3JkZXItY29sb3I6ICNjY2NjY2M7IGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4OyBwYWRkaW5nLWxlZnQ6IDE2cnB4OyBwYWRkaW5nLXJpZ2h0OiAxNnJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE2cnB4OyBmb250LXNpemU6IDI2cnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHQuYnRuLXJvdyB7IG1hcmdpbi1ib3R0b206IDE2cnB4OyB9XHJcblx0LmJ0bi1wcmltYXJ5IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7IGNvbG9yOiAjZmZmZmZmO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHJweDsgZm9udC1zaXplOiAzMHJweDtcclxuXHR9XHJcblx0LmJ0bi1zZWNvbmRhcnkge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NDsgY29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA4cnB4OyBmb250LXNpemU6IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRyb2wtYXJlYSB7IHBhZGRpbmc6IDIwcnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XHJcblx0LmN0cmwtcm93IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjBycHg7XHJcblx0fVxyXG5cdC5jdHJsLWJ0biB7XHJcblx0XHRwYWRkaW5nOiAxNnJweCAyNHJweDsgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEycnB4OyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuY3RybC10ZXh0IHsgZm9udC1zaXplOiAyNnJweDsgY29sb3I6ICMzMzM7IH1cclxuXHQuaGFuZ3VwLWJ0biB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYjMwOyBib3JkZXItcmFkaXVzOiA2MHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4IDA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHdpZHRoOiAzMDBycHg7XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG5cdH1cclxuXHQuaGFuZ3VwLXRleHQgeyBjb2xvcjogI2ZmZmZmZjsgZm9udC1zaXplOiAzMnJweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuXHJcblx0LmxvZy1hcmVhIHsgbWF4LWhlaWdodDogMzAwcnB4OyBwYWRkaW5nOiAxNnJweDsgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTsgfVxyXG5cdC5sb2ctdGl0bGUgeyBmb250LXNpemU6IDI2cnB4OyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICM2NjY7IG1hcmdpbi1ib3R0b206IDhycHg7IH1cclxuXHQubG9nLWl0ZW0geyBmb250LXNpemU6IDIycnB4OyBjb2xvcjogIzk5OTsgbWFyZ2luLWJvdHRvbTogNHJweDsgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requireNativePlugin;
function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */
/*!************************************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/videoTalk/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "flex": [
        1,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#f5f5f5",
        0,
        0,
        0
      ]
    }
  },
  ".video-area": {
    "": {
      "width": [
        "750rpx",
        0,
        0,
        1
      ],
      "height": [
        "500rpx",
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        1
      ],
      "position": [
        "relative",
        0,
        0,
        1
      ]
    }
  },
  ".remote-video": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        2
      ],
      "top": [
        0,
        0,
        0,
        2
      ],
      "left": [
        0,
        0,
        0,
        2
      ],
      "right": [
        0,
        0,
        0,
        2
      ],
      "bottom": [
        0,
        0,
        0,
        2
      ]
    }
  },
  ".local-video": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        3
      ],
      "top": [
        "20rpx",
        0,
        0,
        3
      ],
      "right": [
        "20rpx",
        0,
        0,
        3
      ],
      "width": [
        "180rpx",
        0,
        0,
        3
      ],
      "height": [
        "240rpx",
        0,
        0,
        3
      ],
      "borderRadius": [
        "12rpx",
        0,
        0,
        3
      ],
      "overflow": [
        "hidden",
        0,
        0,
        3
      ],
      "borderWidth": [
        "2rpx",
        0,
        0,
        3
      ],
      "borderColor": [
        "#ffffff",
        0,
        0,
        3
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        3
      ]
    }
  },
  ".status-bar": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        4
      ],
      "top": [
        "200rpx",
        0,
        0,
        4
      ],
      "left": [
        0,
        0,
        0,
        4
      ],
      "right": [
        0,
        0,
        0,
        4
      ],
      "alignItems": [
        "center",
        0,
        0,
        4
      ]
    }
  },
  ".status-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        5
      ],
      "fontSize": [
        "32rpx",
        0,
        0,
        5
      ]
    }
  },
  ".duration-bar": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        6
      ],
      "top": [
        "20rpx",
        0,
        0,
        6
      ],
      "left": [
        "20rpx",
        0,
        0,
        6
      ]
    }
  },
  ".duration-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        7
      ],
      "fontSize": [
        "28rpx",
        0,
        0,
        7
      ],
      "backgroundColor": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        7
      ],
      "paddingTop": [
        "6rpx",
        0,
        0,
        7
      ],
      "paddingRight": [
        "16rpx",
        0,
        0,
        7
      ],
      "paddingBottom": [
        "6rpx",
        0,
        0,
        7
      ],
      "paddingLeft": [
        "16rpx",
        0,
        0,
        7
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        7
      ]
    }
  },
  ".params-area": {
    "": {
      "flex": [
        1,
        0,
        0,
        8
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        8
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        8
      ]
    }
  },
  ".section-title": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        9
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        9
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        9
      ],
      "color": [
        "#333333",
        0,
        0,
        9
      ]
    }
  },
  ".input-field": {
    "": {
      "height": [
        "72rpx",
        0,
        0,
        10
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        10
      ],
      "borderColor": [
        "#cccccc",
        0,
        0,
        10
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        10
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        10
      ],
      "paddingLeft": [
        "16rpx",
        0,
        0,
        10
      ],
      "paddingRight": [
        "16rpx",
        0,
        0,
        10
      ],
      "marginBottom": [
        "16rpx",
        0,
        0,
        10
      ],
      "fontSize": [
        "26rpx",
        0,
        0,
        10
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        10
      ]
    }
  },
  ".btn-row": {
    "": {
      "marginBottom": [
        "16rpx",
        0,
        0,
        11
      ]
    }
  },
  ".btn-primary": {
    "": {
      "backgroundColor": [
        "#007aff",
        0,
        0,
        12
      ],
      "color": [
        "#ffffff",
        0,
        0,
        12
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        12
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        12
      ]
    }
  },
  ".btn-secondary": {
    "": {
      "backgroundColor": [
        "#4cd964",
        0,
        0,
        13
      ],
      "color": [
        "#ffffff",
        0,
        0,
        13
      ],
      "borderRadius": [
        "8rpx",
        0,
        0,
        13
      ],
      "fontSize": [
        "30rpx",
        0,
        0,
        13
      ]
    }
  },
  ".control-area": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        14
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        14
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        14
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        14
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        14
      ]
    }
  },
  ".ctrl-row": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        15
      ],
      "justifyContent": [
        "space-around",
        0,
        0,
        15
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        15
      ]
    }
  },
  ".ctrl-btn": {
    "": {
      "paddingTop": [
        "16rpx",
        0,
        0,
        16
      ],
      "paddingRight": [
        "24rpx",
        0,
        0,
        16
      ],
      "paddingBottom": [
        "16rpx",
        0,
        0,
        16
      ],
      "paddingLeft": [
        "24rpx",
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#f0f0f0",
        0,
        0,
        16
      ],
      "borderRadius": [
        "12rpx",
        0,
        0,
        16
      ],
      "alignItems": [
        "center",
        0,
        0,
        16
      ]
    }
  },
  ".ctrl-text": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        17
      ],
      "color": [
        "#333333",
        0,
        0,
        17
      ]
    }
  },
  ".hangup-btn": {
    "": {
      "backgroundColor": [
        "#ff3b30",
        0,
        0,
        18
      ],
      "borderRadius": [
        "60rpx",
        0,
        0,
        18
      ],
      "paddingTop": [
        "20rpx",
        0,
        0,
        18
      ],
      "paddingRight": [
        0,
        0,
        0,
        18
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        18
      ],
      "paddingLeft": [
        0,
        0,
        0,
        18
      ],
      "alignItems": [
        "center",
        0,
        0,
        18
      ],
      "width": [
        "300rpx",
        0,
        0,
        18
      ]
    }
  },
  ".hangup-text": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        19
      ],
      "fontSize": [
        "32rpx",
        0,
        0,
        19
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        19
      ]
    }
  },
  ".log-area": {
    "": {
      "maxHeight": [
        "300rpx",
        0,
        0,
        20
      ],
      "paddingTop": [
        "16rpx",
        0,
        0,
        20
      ],
      "paddingRight": [
        "16rpx",
        0,
        0,
        20
      ],
      "paddingBottom": [
        "16rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "16rpx",
        0,
        0,
        20
      ],
      "backgroundColor": [
        "#f9f9f9",
        0,
        0,
        20
      ]
    }
  },
  ".log-title": {
    "": {
      "fontSize": [
        "26rpx",
        0,
        0,
        21
      ],
      "fontWeight": [
        "bold",
        0,
        0,
        21
      ],
      "color": [
        "#666666",
        0,
        0,
        21
      ],
      "marginBottom": [
        "8rpx",
        0,
        0,
        21
      ]
    }
  },
  ".log-item": {
    "": {
      "fontSize": [
        "22rpx",
        0,
        0,
        22
      ],
      "color": [
        "#999999",
        0,
        0,
        22
      ],
      "marginBottom": [
        "4rpx",
        0,
        0,
        22
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);