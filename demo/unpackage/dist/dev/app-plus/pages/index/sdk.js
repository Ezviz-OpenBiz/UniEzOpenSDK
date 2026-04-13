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
/*!*******************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/main.js?{"page":"pages%2Findex%2Fsdk"} ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/sdk.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/sdk'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsZ0JBQWdCLHlFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9zZGsubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvc2RrJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************!*\
  !*** E:/UniEzOpenSDK/demo/main.js?{"type":"appStyle"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************/
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
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/UniEzOpenSDK/demo/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?mpType=page ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 6);\n/* harmony import */ var _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"f7b4bc14\",\n  false,\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/sdk.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zZGsubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTU2NTVjYyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Nkay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc2RrLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImY3YjRiYzE0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3Nkay5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticStyle: { display: "flex", width: "100%", height: "100%" } },
        [
          _c(
            "view",
            {
              staticClass: ["fixed-component"],
              staticStyle: {
                width: "100%",
                height: "200px",
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "9999",
                marginBottom: "20px",
              },
            },
            [
              _c("UniOpenSDK", {
                ref: "player",
                staticStyle: { width: "100%", height: "200px" },
                on: { message: _vm.onMessage },
              }),
            ],
            1
          ),
          _c("view", { staticStyle: { marginTop: "220px" } }, [
            !_vm.isFullScreen
              ? _c("view", [
                  _c(
                    "view",
                    [
                      _c("u-input", {
                        staticStyle: {
                          height: "32px",
                          border: "1px solid #aaa",
                          marginBottom: "10px",
                        },
                        attrs: {
                          placeholder: "请输入设备序列号",
                          value: _vm.deviceSerial,
                        },
                        on: { input: _vm.onDeviceSerialChange },
                      }),
                      _c("u-input", {
                        staticStyle: {
                          height: "32px",
                          border: "1px solid #aaa",
                          marginBottom: "10px",
                        },
                        attrs: {
                          placeholder: "请输入通道号",
                          value: _vm.channelNo,
                        },
                        on: { input: _vm.onChannelNoChange },
                      }),
                      _c("u-input", {
                        staticStyle: {
                          height: "32px",
                          border: "1px solid #aaa",
                          marginBottom: "10px",
                        },
                        attrs: {
                          placeholder: "请输入验证码",
                          value: _vm.validCode,
                        },
                        on: { input: _vm.onValidCodeChange },
                      }),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.createPlayer },
                        },
                        [_vm._v("创建播放器")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.deviceRealPlay },
                        },
                        [_vm._v("开始预览播放")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.deviceRealPlayStop },
                        },
                        [_vm._v("结束预览播放")]
                      ),
                    ],
                    1
                  ),
                  _vm.flowMsg
                    ? _c("view", [
                        _c("u-text", [_vm._v("流量：" + _vm._s(_vm.flowMsg))]),
                      ])
                    : _vm._e(),
                  _vm.logs
                    ? _c("view", [
                        _c("u-text", [
                          _vm._v("日志：" + _vm._s(_vm.logs.join("/n"))),
                        ]),
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceFullScreen },
                        },
                        [_vm._v("全屏")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceExitFullScreen },
                        },
                        [_vm._v("退出全屏")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceOpenSound },
                        },
                        [_vm._v("开启声音")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceCloseSound },
                        },
                        [_vm._v("关闭声音")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceStartTalk },
                        },
                        [_vm._v("开启对讲")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceStopTalk },
                        },
                        [_vm._v("关闭对讲")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.setVoiceTalkStatus(true)
                            },
                          },
                        },
                        [_vm._v("开启半双工")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.setVoiceTalkStatus(false)
                            },
                          },
                        },
                        [_vm._v("关闭半双工")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "u-text",
                        {
                          staticStyle: { margin: "35rpx 0" },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("清晰度：")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(3)
                            },
                          },
                        },
                        [_vm._v("超清")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(2)
                            },
                          },
                        },
                        [_vm._v("高清")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(1)
                            },
                          },
                        },
                        [_vm._v("均衡")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(0)
                            },
                          },
                        },
                        [_vm._v("流畅")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceStartRealPlayRecord },
                        },
                        [_vm._v("开始录制")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceStopRealPlayRecord },
                        },
                        [_vm._v("结束录制")]
                      ),
                    ],
                    1
                  ),
                  _vm.videoMsg
                    ? _c(
                        "view",
                        {
                          staticStyle: {
                            margin: "35rpx 0 10rpx",
                            display: "block",
                          },
                        },
                        [
                          _c("u-text", [
                            _vm._v("录像文件路径：" + _vm._s(_vm.videoMsg)),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceCaputure },
                        },
                        [_vm._v("截图")]
                      ),
                    ],
                    1
                  ),
                  _vm.pictureMsg
                    ? _c(
                        "view",
                        {
                          staticStyle: {
                            margin: "35rpx 0 10rpx",
                            display: "block",
                          },
                        },
                        [
                          _c("u-text", [
                            _vm._v("图片文件路径：" + _vm._s(_vm.pictureMsg)),
                          ]),
                        ]
                      )
                    : _vm._e(),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "u-text",
                        {
                          staticStyle: { margin: "35rpx 0" },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("云台：")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzUp,
                            touchend: _vm.devicePtzUpStop,
                          },
                        },
                        [_vm._v("上")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzDown,
                            touchend: _vm.devicePtzDownStop,
                          },
                        },
                        [_vm._v("下")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzLeft,
                            touchend: _vm.devicePtzLeftStop,
                          },
                        },
                        [_vm._v("左")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzRight,
                            touchend: _vm.devicePtzRightStop,
                          },
                        },
                        [_vm._v("右")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "view",
                    [
                      _c(
                        "view",
                        { staticStyle: { margin: "20px 0" } },
                        [
                          _c(
                            "u-text",
                            { appendAsTree: true, attrs: { append: "tree" } },
                            [_vm._v("回放类型：")]
                          ),
                          _c(
                            "radio-group",
                            {
                              staticClass: ["radio"],
                              on: { change: _vm.radioChange },
                            },
                            [
                              _c(
                                "label",
                                { key: 2, staticClass: ["radio-item"] },
                                [
                                  _c(
                                    "view",
                                    [
                                      _c("radio", {
                                        attrs: {
                                          value: "2",
                                          checked: _vm.selectedRadio == 2,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _c("view", [_c("u-text", [_vm._v("SD卡")])]),
                                ]
                              ),
                              _c(
                                "label",
                                { key: 0, staticClass: ["radio-item"] },
                                [
                                  _c(
                                    "view",
                                    [
                                      _c("radio", {
                                        attrs: {
                                          value: "0",
                                          checked: _vm.selectedRadio == 0,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _c("view", [
                                    _c("u-text", [_vm._v("云存储")]),
                                  ]),
                                ]
                              ),
                              _c(
                                "label",
                                { key: 3, staticClass: ["radio-item"] },
                                [
                                  _c(
                                    "view",
                                    [
                                      _c("radio", {
                                        attrs: {
                                          value: "null",
                                          checked: _vm.selectedRadio == null,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _c("view", [_c("u-text", [_vm._v("null")])]),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _c(
                        "picker",
                        {
                          staticStyle: { border: "1rpx solid #aaa" },
                          attrs: {
                            mode: "date",
                            value: _vm.startDate,
                            format: "yyyy-MM-dd",
                          },
                          on: { change: _vm.bindStartDateChange },
                        },
                        [
                          _c("view", [
                            _c("u-text", [
                              _vm._v("开始日期：" + _vm._s(_vm.startDate)),
                            ]),
                          ]),
                        ]
                      ),
                      _c(
                        "picker",
                        {
                          staticStyle: {
                            marginTop: "20px",
                            border: "1rpx solid #aaa",
                          },
                          attrs: {
                            mode: "multiSelector",
                            range: _vm.getTimeArray(),
                            value: _vm.startTime.split(":"),
                          },
                          on: {
                            change: function ($event) {
                              _vm.bindStartTimeChange($event)
                            },
                          },
                        },
                        [
                          _vm.startTime
                            ? _c("view", { staticClass: ["uni-name"] }, [
                                _c("view", [
                                  _c("u-text", [
                                    _vm._v(
                                      "开始时间：" + _vm._s(_vm.startTime)
                                    ),
                                  ]),
                                ]),
                              ])
                            : _c("view", { staticClass: ["uni-placeholder"] }, [
                                _c("u-text", [_vm._v("开始时间")]),
                              ]),
                        ]
                      ),
                      _c(
                        "picker",
                        {
                          staticStyle: {
                            marginTop: "20px",
                            border: "1rpx solid #aaa",
                          },
                          attrs: {
                            mode: "date",
                            value: _vm.stopDate,
                            format: "yyyy-MM-dd",
                          },
                          on: { change: _vm.bindStopDateChange },
                        },
                        [
                          _c("view", [
                            _c("u-text", [
                              _vm._v("结束日期：" + _vm._s(_vm.stopDate)),
                            ]),
                          ]),
                        ]
                      ),
                      _c(
                        "picker",
                        {
                          staticStyle: {
                            marginTop: "20px",
                            border: "1rpx solid #aaa",
                          },
                          attrs: {
                            mode: "multiSelector",
                            range: _vm.getTimeArray(),
                            value: _vm.stopTime.split(":"),
                          },
                          on: {
                            change: function ($event) {
                              _vm.bindStopTimeChange($event)
                            },
                          },
                        },
                        [
                          _vm.stopTime
                            ? _c("view", { staticClass: ["uni-name"] }, [
                                _c("view", [
                                  _c("u-text", [
                                    _vm._v("结束时间：" + _vm._s(_vm.stopTime)),
                                  ]),
                                ]),
                              ])
                            : _c("view", { staticClass: ["uni-placeholder"] }, [
                                _c("u-text", [_vm._v("结束时间")]),
                              ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { margin: "20rpx", width: "300rpx" },
                          on: { click: _vm.deviceQueryRecord },
                        },
                        [_vm._v("查询录像片段")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { margin: "20rpx", width: "300rpx" },
                          on: { click: _vm.devicePlaybackSeekTo },
                        },
                        [_vm._v("回放跳转至开始时间")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "300rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.devicePlayBackPause },
                        },
                        [_vm._v("暂停回放")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "300rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.devicePlayBackResume },
                        },
                        [_vm._v("恢复回放")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "300rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.devicePlayBackStop },
                        },
                        [_vm._v("结束回放")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "300rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.releasePlayer },
                        },
                        [_vm._v("退出页面")]
                      ),
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: ["content"] },
                    [
                      _c(
                        "u-text",
                        {
                          staticStyle: { margin: "35rpx 0" },
                          appendAsTree: true,
                          attrs: { append: "tree" },
                        },
                        [_vm._v("倍速：")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(3)
                            },
                          },
                        },
                        [_vm._v("0.5")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(1)
                            },
                          },
                        },
                        [_vm._v("1")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(2)
                            },
                          },
                        },
                        [_vm._v("2")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(4)
                            },
                          },
                        },
                        [_vm._v("4")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(8)
                            },
                          },
                        },
                        [_vm._v("8")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "80rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangePlayBackSpeed(16)
                            },
                          },
                        },
                        [_vm._v("16")]
                      ),
                    ],
                    1
                  ),
                  _vm.recordList.length > 0
                    ? _c(
                        "view",
                        [
                          _c(
                            "u-text",
                            { appendAsTree: true, attrs: { append: "tree" } },
                            [_vm._v("回放片段：")]
                          ),
                          _vm._l(_vm.recordList, function (item) {
                            return _c(
                              "view",
                              [
                                _c(
                                  "button",
                                  {
                                    staticStyle: {
                                      margin: "10rpx 20rpx",
                                      width: "700rpx",
                                    },
                                    on: {
                                      click: function ($event) {
                                        _vm.devicePlayBack(item)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.startTime) +
                                        " ~ " +
                                        _vm._s(item.endTime)
                                    ),
                                  ]
                                ),
                              ],
                              1
                            )
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                ])
              : _vm._e(),
          ]),
          _vm.isFullScreen
            ? _c(
                "view",
                {
                  staticStyle: {
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    zIndex: "99999",
                  },
                },
                [
                  _c(
                    "view",
                    {
                      staticStyle: {
                        position: "fixed",
                        display: "flex",
                        flexDirection: "row",
                        bottom: "10px",
                        left: "0",
                        right: "0",
                        height: "100px",
                      },
                    },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceExitFullScreen },
                        },
                        [_vm._v("退出全屏")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "200rpx", margin: "20rpx" },
                          on: { click: _vm.deviceCaputure },
                        },
                        [_vm._v("截图")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "100rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(3)
                            },
                          },
                        },
                        [_vm._v("超清")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "100rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(2)
                            },
                          },
                        },
                        [_vm._v("高清")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "100rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(1)
                            },
                          },
                        },
                        [_vm._v("均衡")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: { width: "100rpx", margin: "20rpx" },
                          on: {
                            click: function ($event) {
                              _vm.deviceChangeVideoLevel(0)
                            },
                          },
                        },
                        [_vm._v("流畅")]
                      ),
                    ],
                    1
                  ),
                ]
              )
            : _vm._e(),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!*************************************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZGsubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar globalEvent = weex.requireModule('globalEvent');\nvar _default = {\n  data: function data() {\n    return {\n      windowWidth: 0,\n      windowHeight: 0,\n      deviceSerial: '',\n      // 从萤石开放平台控制台 - 设备管理获取\n      channelNo: 1,\n      isInit: false,\n      validCode: '',\n      // 填写设备验证码\n      isFullScreen: false,\n      selectedRadio: 2,\n      videoMsg: null,\n      pictureMsg: null,\n      flowMsg: null,\n      flowValue: 0,\n      flowTimer: null,\n      startDate: '2024-07-25',\n      startTime: '14:00:00',\n      stopDate: '2024-07-25',\n      stopTime: '15:00:00',\n      spaceId: '',\n      recordList: [],\n      logs: []\n    };\n  },\n  onBackPress: function onBackPress(options) {\n    __f__(\"log\", \"返回上一页：\", options, \" at pages/index/sdk.nvue:177\");\n    if (options.from === 'navigateBack' || options.from === 'backbutton') {\n      // 从导航返回触发时执行\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:182\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n      return true;\n    }\n    return false;\n  },\n  onLoad: function onLoad() {\n    var _this = this;\n    var systemInfo = uni.getSystemInfoSync();\n    this.windowWidth = systemInfo.windowWidth;\n    this.windowHeight = systemInfo.windowHeight;\n    plus.screen.lockOrientation('default');\n    globalEvent.addEventListener(\"onMessage\", function (e) {\n      _this.onMessage({\n        detail: e\n      });\n    });\n  },\n  onUnload: function onUnload() {\n    plus.screen.lockOrientation('portrait-primary');\n  },\n  methods: {\n    releasePlayer: function releasePlayer() {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:210\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n    },\n    onMessage: function onMessage(e) {\n      this.logs.push(JSON.stringify(e.detail));\n    },\n    onDeviceSerialChange: function onDeviceSerialChange(e) {\n      this.deviceSerial = e.detail.value;\n    },\n    onChannelNoChange: function onChannelNoChange(e) {\n      this.channelNo = e.detail.value;\n    },\n    onValidCodeChange: function onValidCodeChange(e) {\n      this.validCode = e.detail.value;\n    },\n    radioChange: function radioChange(e) {\n      this.selectedRadio = e.detail.value;\n    },\n    getTimeArray: function getTimeArray() {\n      var timeArr = [];\n      timeArr.push(this.getLoopArray(0, 23));\n      timeArr.push(this.getLoopArray(0, 59));\n      timeArr.push(this.getLoopArray(0, 59));\n      return timeArr;\n    },\n    getLoopArray: function getLoopArray(startNum, endNum) {\n      var array = [];\n      for (var i = startNum; i <= endNum; i++) {\n        i < 10 ? array.push('0' + i) : array.push('' + i);\n      }\n      return array;\n    },\n    /**选择年月日**/bindStartDateChange: function bindStartDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:248\");\n      this.startDate = e.detail.value;\n    },\n    bindStopDateChange: function bindStopDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:252\");\n      this.stopDate = e.detail.value;\n    },\n    /**选择时分秒**/bindStartTimeChange: function bindStartTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.startTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    bindStopTimeChange: function bindStopTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.stopTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    createPlayer: function createPlayer() {\n      var _this2 = this;\n      if (this.deviceSerial.length == 0 || this.channelNo.length == 0) {\n        uni.showToast({\n          title: '请先输入设备序列号、通道号',\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:280\");\n        if (res.code == '200') {\n          _this2.isInit = true;\n          uni.showToast({\n            title: '创建播放器成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"创建成功\", \" at pages/index/sdk.nvue:288\");\n        }\n      });\n      videoPlayer.setEventCallback(function (e) {\n        __f__(\"log\", JSON.stringify(e), \" at pages/index/sdk.nvue:293\");\n      });\n    },\n    deviceRealPlay: function deviceRealPlay() {\n      var _this3 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlay, \" at pages/index/sdk.nvue:298\");\n      videoPlayer.startRealPlay(function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:300\");\n        if (_this3.flowTimer) {\n          clearInterval(_this3.flowTimer);\n          _this3.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this3.flowValue;\n              _this3.flowValue = parseFloat(r.msg);\n              _this3.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        } else {\n          _this3.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this3.flowValue;\n              _this3.flowValue = parseFloat(r.msg);\n              _this3.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        }\n      });\n    },\n    deviceRealPlayStop: function deviceRealPlayStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlay, \" at pages/index/sdk.nvue:323\");\n      videoPlayer.stopRealPlay();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    deviceFullScreen: function deviceFullScreen() {\n      var _this4 = this;\n      plus.screen.lockOrientation('landscape-primary');\n      var videoPlayer = this.$refs.player;\n      setTimeout(function () {\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.fullscreen, \" at pages/index/sdk.nvue:333\");\n        videoPlayer.fullscreen();\n        _this4.isFullScreen = true;\n      }, 300);\n    },\n    deviceExitFullScreen: function deviceExitFullScreen() {\n      var _this5 = this;\n      plus.screen.lockOrientation('portrait-primary');\n      var videoPlayer = this.$refs.player;\n      setTimeout(function () {\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.exitFullscreen, \" at pages/index/sdk.nvue:342\");\n        videoPlayer.exitFullscreen();\n        _this5.isFullScreen = false;\n      }, 300);\n    },\n    deviceOpenSound: function deviceOpenSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.openSound, \" at pages/index/sdk.nvue:349\");\n      videoPlayer.openSound();\n    },\n    deviceCloseSound: function deviceCloseSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.closeSound, \" at pages/index/sdk.nvue:354\");\n      videoPlayer.closeSound();\n    },\n    deviceStartTalk: function deviceStartTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startTalk, \" at pages/index/sdk.nvue:359\");\n      videoPlayer.startTalk(true);\n    },\n    deviceStopTalk: function deviceStopTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopTalk, \" at pages/index/sdk.nvue:364\");\n      videoPlayer.stopTalk();\n    },\n    setVoiceTalkStatus: function setVoiceTalkStatus(status) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.setVoiceTalkStatus, \" at pages/index/sdk.nvue:369\");\n      videoPlayer.setVoiceTalkStatus(status);\n    },\n    deviceChangeVideoLevel: function deviceChangeVideoLevel(level) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changeVideoLevel, \" at pages/index/sdk.nvue:374\");\n      videoPlayer.changeVideoLevel(level);\n      uni.showToast({\n        title: \"\\u6E05\\u6670\\u5EA6\\u5207\\u6362\\u81F3\\uFF1A\".concat(level),\n        icon: 'none'\n      });\n    },\n    deviceCaputure: function deviceCaputure() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.capturePicture, \" at pages/index/sdk.nvue:383\");\n      videoPlayer.capturePicture('test', null, function (res) {\n        if (res.code == '200') {\n          uni.showToast({\n            title: '图片保存成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"base64图片数据：\", JSON.stringify(res.data), \" at pages/index/sdk.nvue:390\");\n        }\n      });\n    },\n    deviceStartRealPlayRecord: function deviceStartRealPlayRecord() {\n      var _this6 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlayRecord, \" at pages/index/sdk.nvue:396\");\n      videoPlayer.startRealPlayRecord(function (res) {\n        if (res.code == '200') {\n          _this6.videoMsg = res.msg;\n        }\n      });\n    },\n    deviceStopRealPlayRecord: function deviceStopRealPlayRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlayRecord, \" at pages/index/sdk.nvue:405\");\n      videoPlayer.stopRealPlayRecord();\n    },\n    devicePtzUp: function devicePtzUp() {\n      //0：左，1：右，2：上，3：下\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:410\");\n      videoPlayer.ptzOption(2, \"START\");\n    },\n    devicePtzUpStop: function devicePtzUpStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:415\");\n      videoPlayer.ptzOption(2, \"STOP\");\n    },\n    devicePtzDown: function devicePtzDown() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:420\");\n      videoPlayer.ptzOption(3, \"START\");\n    },\n    devicePtzDownStop: function devicePtzDownStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:425\");\n      videoPlayer.ptzOption(3, \"STOP\");\n    },\n    devicePtzLeft: function devicePtzLeft() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:430\");\n      videoPlayer.ptzOption(0, \"START\");\n    },\n    devicePtzLeftStop: function devicePtzLeftStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:435\");\n      videoPlayer.ptzOption(0, \"STOP\");\n    },\n    devicePtzRight: function devicePtzRight() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:440\");\n      videoPlayer.ptzOption(1, \"START\");\n    },\n    devicePtzRightStop: function devicePtzRightStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:445\");\n      videoPlayer.ptzOption(1, \"STOP\");\n    },\n    deviceQueryRecord: function deviceQueryRecord() {\n      var _this7 = this;\n      if (!this.isInit) {\n        uni.showToast({\n          title: \"请先创建播放器\",\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startQueryRecordFiles, \" at pages/index/sdk.nvue:457\");\n      videoPlayer.startQueryRecordFiles(this.startDate + \" \" + this.startTime, this.stopDate + \" \" + this.stopTime, this.selectedRadio, 'all', '0', function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:460\");\n        if (res.code == '200') {\n          uni.showToast({\n            title: \"回放片段查询成功\",\n            icon: 'none'\n          });\n          _this7.recordList = res.data;\n        } else {\n          uni.showModal({\n            title: \"回放片段查询失败\",\n            content: JSON.stringify(res)\n          });\n        }\n      });\n    },\n    devicePlaybackSeekTo: function devicePlaybackSeekTo() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.playbackSeekTo, \" at pages/index/sdk.nvue:477\");\n      videoPlayer.playbackSeekTo(this.startDate + \" \" + this.startTime);\n    },\n    devicePlayBack: function devicePlayBack(item) {\n      var _this8 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBack, \" at pages/index/sdk.nvue:482\");\n      videoPlayer.startPlayBack(item, this.selectedRadio);\n      if (this.flowTimer) {\n        clearInterval(this.flowTimer);\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      } else {\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      }\n    },\n    devicePlayBackStop: function devicePlayBackStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBack, \" at pages/index/sdk.nvue:505\");\n      videoPlayer.stopPlayBack();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    devicePlayBackPause: function devicePlayBackPause() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.pause, \" at pages/index/sdk.nvue:513\");\n      videoPlayer.pause();\n    },\n    devicePlayBackResume: function devicePlayBackResume() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.resume, \" at pages/index/sdk.nvue:518\");\n      videoPlayer.resume();\n    },\n    deviceStartPlayBackRecord: function deviceStartPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBackRecord, \" at pages/index/sdk.nvue:523\");\n      videoPlayer.startPlayBackRecord();\n    },\n    deviceStopPlayBackRecord: function deviceStopPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBackRecord, \" at pages/index/sdk.nvue:528\");\n      videoPlayer.stopPlayBackRecord();\n    },\n    deviceChangePlayBackSpeed: function deviceChangePlayBackSpeed(speed) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changePlayBackSpeed, \" at pages/index/sdk.nvue:533\");\n      videoPlayer.changePlayBackSpeed(speed);\n      uni.showToast({\n        title: \"\\u5207\\u6362\\u81F3\\uFF1A\".concat(speed == 3 ? '0.5' : speed, \"\\u500D\\u901F\"),\n        icon: 'none'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvc2RrLm52dWUiXSwibmFtZXMiOlsiZGF0YSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiZGV2aWNlU2VyaWFsIiwiY2hhbm5lbE5vIiwiaXNJbml0IiwidmFsaWRDb2RlIiwiaXNGdWxsU2NyZWVuIiwic2VsZWN0ZWRSYWRpbyIsInZpZGVvTXNnIiwicGljdHVyZU1zZyIsImZsb3dNc2ciLCJmbG93VmFsdWUiLCJmbG93VGltZXIiLCJzdGFydERhdGUiLCJzdGFydFRpbWUiLCJzdG9wRGF0ZSIsInN0b3BUaW1lIiwic3BhY2VJZCIsInJlY29yZExpc3QiLCJsb2dzIiwib25CYWNrUHJlc3MiLCJ2aWRlb1BsYXllciIsInVuaSIsInVybCIsIm9uTG9hZCIsInBsdXMiLCJnbG9iYWxFdmVudCIsImRldGFpbCIsIm9uVW5sb2FkIiwibWV0aG9kcyIsInJlbGVhc2VQbGF5ZXIiLCJvbk1lc3NhZ2UiLCJvbkRldmljZVNlcmlhbENoYW5nZSIsIm9uQ2hhbm5lbE5vQ2hhbmdlIiwib25WYWxpZENvZGVDaGFuZ2UiLCJyYWRpb0NoYW5nZSIsImdldFRpbWVBcnJheSIsInRpbWVBcnIiLCJnZXRMb29wQXJyYXkiLCJpIiwiYmluZFN0YXJ0RGF0ZUNoYW5nZSIsImJpbmRTdG9wRGF0ZUNoYW5nZSIsImJpbmRTdGFydFRpbWVDaGFuZ2UiLCJiaW5kU3RvcFRpbWVDaGFuZ2UiLCJjcmVhdGVQbGF5ZXIiLCJ0aXRsZSIsImljb24iLCJkZXZpY2VSZWFsUGxheSIsImNsZWFySW50ZXJ2YWwiLCJkZXZpY2VSZWFsUGxheVN0b3AiLCJkZXZpY2VGdWxsU2NyZWVuIiwic2V0VGltZW91dCIsImRldmljZUV4aXRGdWxsU2NyZWVuIiwiZGV2aWNlT3BlblNvdW5kIiwiZGV2aWNlQ2xvc2VTb3VuZCIsImRldmljZVN0YXJ0VGFsayIsImRldmljZVN0b3BUYWxrIiwic2V0Vm9pY2VUYWxrU3RhdHVzIiwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCIsImRldmljZUNhcHV0dXJlIiwiZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZCIsImRldmljZVN0b3BSZWFsUGxheVJlY29yZCIsImRldmljZVB0elVwIiwiZGV2aWNlUHR6VXBTdG9wIiwiZGV2aWNlUHR6RG93biIsImRldmljZVB0ekRvd25TdG9wIiwiZGV2aWNlUHR6TGVmdCIsImRldmljZVB0ekxlZnRTdG9wIiwiZGV2aWNlUHR6UmlnaHQiLCJkZXZpY2VQdHpSaWdodFN0b3AiLCJkZXZpY2VRdWVyeVJlY29yZCIsImNvbnRlbnQiLCJkZXZpY2VQbGF5YmFja1NlZWtUbyIsImRldmljZVBsYXlCYWNrIiwiZGV2aWNlUGxheUJhY2tTdG9wIiwiZGV2aWNlUGxheUJhY2tQYXVzZSIsImRldmljZVBsYXlCYWNrUmVzdW1lIiwiZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCIsImRldmljZVN0b3BQbGF5QmFja1JlY29yZCIsImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUpBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7TUFDQUM7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO01BQ0E7TUFDQTtNQUNBQztRQUNBO1FBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7SUFFQUM7TUFDQTtRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBSDtFQUNBO0VBQ0FJO0lBQ0FDO01BQ0E7TUFDQVQ7UUFDQTtRQUNBQztVQUNBQztRQUNBO01BQ0E7SUFDQTtJQUNBUTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQUM7TUFDQUE7TUFDQUE7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBLFdBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0EsV0FDQUM7TUFDQTtNQUNBLDBFQUNBLE9BQ0FMLCtEQUNBQTtJQUNBO0lBQ0FNO01BQ0E7TUFDQSx5RUFDQSxPQUNBTiwrREFDQUE7SUFDQTtJQUNBTztNQUFBO01BQ0E7UUFDQXRCO1VBQ0F1QjtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0F6QjtRQUNBO1FBQ0E7VUFDQTtVQUNBQztZQUNBdUI7WUFDQUM7VUFDQTtVQUVBO1FBQ0E7TUFDQTtNQUVBekI7UUFDQTtNQUNBO0lBQ0E7SUFDQTBCO01BQUE7TUFDQTtNQUNBO01BQ0ExQjtRQUNBO1FBQ0E7VUFDQTJCO1VBQ0E7WUFDQTNCO2NBQ0E7Y0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7WUFDQUE7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0E0QjtNQUNBO01BQ0E7TUFDQTVCO01BQ0EyQjtNQUNBO01BQ0E7SUFDQTtJQUNBRTtNQUFBO01BQ0F6QjtNQUNBO01BQ0EwQjtRQUNBO1FBQ0E5QjtRQUNBO01BQ0E7SUFDQTtJQUNBK0I7TUFBQTtNQUNBM0I7TUFDQTtNQUNBMEI7UUFDQTtRQUNBOUI7UUFDQTtNQUNBO0lBQ0E7SUFDQWdDO01BQ0E7TUFDQTtNQUNBaEM7SUFDQTtJQUNBaUM7TUFDQTtNQUNBO01BQ0FqQztJQUNBO0lBQ0FrQztNQUNBO01BQ0E7TUFDQWxDO0lBQ0E7SUFDQW1DO01BQ0E7TUFDQTtNQUNBbkM7SUFDQTtJQUNBb0M7TUFDQTtNQUNBO01BQ0FwQztJQUNBO0lBQ0FxQztNQUNBO01BQ0E7TUFDQXJDO01BQ0FDO1FBQ0F1QjtRQUNBQztNQUNBO0lBQ0E7SUFDQWE7TUFDQTtNQUNBO01BQ0F0QztRQUNBO1VBQ0FDO1lBQ0F1QjtZQUNBQztVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQWM7TUFBQTtNQUNBO01BQ0E7TUFDQXZDO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBd0M7TUFDQTtNQUNBO01BQ0F4QztJQUNBO0lBQ0F5QztNQUFBO01BQ0E7TUFDQTtNQUNBekM7SUFDQTtJQUNBMEM7TUFDQTtNQUNBO01BQ0ExQztJQUNBO0lBQ0EyQztNQUNBO01BQ0E7TUFDQTNDO0lBQ0E7SUFDQTRDO01BQ0E7TUFDQTtNQUNBNUM7SUFDQTtJQUNBNkM7TUFDQTtNQUNBO01BQ0E3QztJQUNBO0lBQ0E4QztNQUNBO01BQ0E7TUFDQTlDO0lBQ0E7SUFDQStDO01BQ0E7TUFDQTtNQUNBL0M7SUFDQTtJQUNBZ0Q7TUFDQTtNQUNBO01BQ0FoRDtJQUNBO0lBQ0FpRDtNQUFBO01BQ0E7UUFDQWhEO1VBQ0F1QjtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXpCLG9HQUNBTDtRQUNBO1FBQ0E7VUFDQU07WUFDQXVCO1lBQ0FDO1VBQ0E7VUFDQTtRQUNBO1VBQ0F4QjtZQUNBdUI7WUFDQTBCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0FuRDtJQUNBO0lBQ0FvRDtNQUFBO01BQ0E7TUFDQTtNQUNBcEQ7TUFDQTtRQUNBMkI7UUFDQTtVQUNBM0I7WUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtVQUNBQTtZQUNBO1lBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FxRDtNQUNBO01BQ0E7TUFDQXJEO01BQ0EyQjtNQUNBO01BQ0E7SUFDQTtJQUNBMkI7TUFDQTtNQUNBO01BQ0F0RDtJQUNBO0lBQ0F1RDtNQUNBO01BQ0E7TUFDQXZEO0lBQ0E7SUFDQXdEO01BQ0E7TUFDQTtNQUNBeEQ7SUFDQTtJQUNBeUQ7TUFDQTtNQUNBO01BQ0F6RDtJQUNBO0lBQ0EwRDtNQUNBO01BQ0E7TUFDQTFEO01BQ0FDO1FBQ0F1QjtRQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtcIj5cblx0XHQ8dmlldyBjbGFzcz1cImZpeGVkLWNvbXBvbmVudFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMjAwcHg7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwO3JpZ2h0OiAwO3otaW5kZXg6IDk5OTk7bWFyZ2luLWJvdHRvbTogMjBweDtcIj5cblx0XHRcdDxVbmlPcGVuU0RLIHJlZj1cInBsYXllclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMjAwcHg7XCIgQG1lc3NhZ2U9XCJvbk1lc3NhZ2VcIj5cblx0XHRcdDwvVW5pT3BlblNESz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMjBweDtcIj5cblx0XHRcdDx2aWV3IHYtaWY9XCIhaXNGdWxsU2NyZWVuXCI+XG5cdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeiuvuWkh+W6j+WIl+WPt1wiIDp2YWx1ZT1cImRldmljZVNlcmlhbFwiIEBpbnB1dD1cIm9uRGV2aWNlU2VyaWFsQ2hhbmdlXCIgc3R5bGU9XCJoZWlnaHQ6IDMycHg7Ym9yZGVyOiAxcHggc29saWQgI2FhYTttYXJnaW4tYm90dG9tOiAxMHB4O1wiIC8+XG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6YCa6YGT5Y+3XCIgOnZhbHVlPVwiY2hhbm5lbE5vXCIgQGlucHV0PVwib25DaGFubmVsTm9DaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogMzJweDtib3JkZXI6IDFweCBzb2xpZCAjYWFhO21hcmdpbi1ib3R0b206IDEwcHg7XCIgLz5cblx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpqozor4HnoIFcIiA6dmFsdWU9XCJ2YWxpZENvZGVcIiBAaW5wdXQ9XCJvblZhbGlkQ29kZUNoYW5nZVwiIHN0eWxlPVwiaGVpZ2h0OiAzMnB4O2JvcmRlcjogMXB4IHNvbGlkICNhYWE7bWFyZ2luLWJvdHRvbTogMTBweDtcIiAvPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVQbGF5ZXJcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDIwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5Yib5bu65pKt5pS+5ZmoPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VSZWFsUGxheVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7lvIDlp4vpooTop4jmkq3mlL48L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVJlYWxQbGF5U3RvcFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7nu5PmnZ/pooTop4jmkq3mlL48L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJmbG93TXNnXCI+5rWB6YeP77yae3tmbG93TXNnfX08L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJsb2dzXCI+5pel5b+X77yae3tsb2dzLmpvaW4oJy9uJyl9fTwvdmlldz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUZ1bGxTY3JlZW5cIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lhajlsY88L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUV4aXRGdWxsU2NyZWVuXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+6YCA5Ye65YWo5bGPPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlT3BlblNvdW5kXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5ZCv5aOw6Z+zPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDbG9zZVNvdW5kXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5aOw6Z+zPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RhcnRUYWxrXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5ZCv5a+56K6yPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VTdG9wVGFsa1wiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuWFs+mXreWvueiusjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwic2V0Vm9pY2VUYWxrU3RhdHVzKHRydWUpXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5ZCv5Y2K5Y+M5belPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJzZXRWb2ljZVRhbGtTdGF0dXMoZmFsc2UpXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5Y2K5Y+M5belPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwibWFyZ2luOiAzNXJweCAwO1wiPua4heaZsOW6pu+8mjwvdGV4dD5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMylcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7otoXmuIU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMilcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7pq5jmuIU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMSlcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lnYfooaE8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMClcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7mtYHnlYU8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VTdGFydFJlYWxQbGF5UmVjb3JkXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5aeL5b2V5Yi2PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VTdG9wUmVhbFBsYXlSZWNvcmRcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7nu5PmnZ/lvZXliLY8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ2aWRlb01zZ1wiIHN0eWxlPVwibWFyZ2luOiAzNXJweCAwIDEwcnB4O2Rpc3BsYXk6IGJsb2NrO1wiPuW9leWDj+aWh+S7tui3r+W+hO+8mnt7dmlkZW9Nc2d9fTwvdmlldz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNhcHV0dXJlXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5oiq5Zu+PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwicGljdHVyZU1zZ1wiIHN0eWxlPVwibWFyZ2luOiAzNXJweCAwIDEwcnB4O2Rpc3BsYXk6IGJsb2NrO1wiPuWbvueJh+aWh+S7tui3r+W+hO+8mnt7cGljdHVyZU1zZ319PC92aWV3PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwibWFyZ2luOiAzNXJweCAwO1wiPuS6keWPsO+8mjwvdGV4dD5cblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6VXBcIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpVcFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7kuIo8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6RG93blwiIEB0b3VjaGVuZD1cImRldmljZVB0ekRvd25TdG9wXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5LiLPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAdG91Y2hzdGFydD1cImRldmljZVB0ekxlZnRcIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpMZWZ0U3RvcFwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuW3pjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpSaWdodFwiIEB0b3VjaGVuZD1cImRldmljZVB0elJpZ2h0U3RvcFwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuWPszwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbjogMjBweCAwO1wiPlxuXHRcdFx0XHRcdFx0PHRleHQ+5Zue5pS+57G75Z6L77yaPC90ZXh0PlxuXHRcdFx0XHRcdFx0PHJhZGlvLWdyb3VwIEBjaGFuZ2U9XCJyYWRpb0NoYW5nZVwiIGNsYXNzPVwicmFkaW9cIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwicmFkaW8taXRlbVwiIDprZXk9XCIyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCIyXCIgOmNoZWNrZWQ9XCJzZWxlY3RlZFJhZGlvPT0yXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+U0TljaE8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cInJhZGlvLWl0ZW1cIiA6a2V5PVwiMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwiMFwiIDpjaGVja2VkPVwic2VsZWN0ZWRSYWRpbz09MFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PuS6keWtmOWCqDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwicmFkaW8taXRlbVwiIDprZXk9XCIzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCJudWxsXCIgOmNoZWNrZWQ9XCJzZWxlY3RlZFJhZGlvPT1udWxsXCIgLz5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+bnVsbDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDwvcmFkaW8tZ3JvdXA+XG5cdFx0XHRcdFx0PC92aWV3PlxuXG5cdFx0XHRcdFx0PHBpY2tlciBtb2RlPVwiZGF0ZVwiIDp2YWx1ZT1cInN0YXJ0RGF0ZVwiIGZvcm1hdD1cInl5eXktTU0tZGRcIiBAY2hhbmdlPVwiYmluZFN0YXJ0RGF0ZUNoYW5nZVwiIHN0eWxlPVwiYm9yZGVyOiAxcnB4IHNvbGlkICNhYWE7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldz7lvIDlp4vml6XmnJ/vvJp7e3N0YXJ0RGF0ZX19PC92aWV3PlxuXHRcdFx0XHRcdDwvcGlja2VyPlxuXG5cdFx0XHRcdFx0PHBpY2tlciBtb2RlPVwibXVsdGlTZWxlY3RvclwiIEBjaGFuZ2U9XCJiaW5kU3RhcnRUaW1lQ2hhbmdlKCRldmVudClcIiA6cmFuZ2U9XCJnZXRUaW1lQXJyYXkoKVwiIDp2YWx1ZT1cInN0YXJ0VGltZS5zcGxpdCgnOicpXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O2JvcmRlcjogMXJweCBzb2xpZCAjYWFhO1wiPlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmFtZVwiIHYtaWY9XCJzdGFydFRpbWVcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXc+5byA5aeL5pe26Ze077yae3tzdGFydFRpbWV9fTwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXBsYWNlaG9sZGVyXCIgdi1lbHNlPuW8gOWni+aXtumXtDwvdmlldz5cblx0XHRcdFx0XHQ8L3BpY2tlcj5cblxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cImRhdGVcIiA6dmFsdWU9XCJzdG9wRGF0ZVwiIGZvcm1hdD1cInl5eXktTU0tZGRcIiBAY2hhbmdlPVwiYmluZFN0b3BEYXRlQ2hhbmdlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O2JvcmRlcjogMXJweCBzb2xpZCAjYWFhO1wiPlxuXHRcdFx0XHRcdFx0PHZpZXc+57uT5p2f5pel5pyf77yae3tzdG9wRGF0ZX19PC92aWV3PlxuXHRcdFx0XHRcdDwvcGlja2VyPlxuXG5cdFx0XHRcdFx0PHBpY2tlciBtb2RlPVwibXVsdGlTZWxlY3RvclwiIEBjaGFuZ2U9XCJiaW5kU3RvcFRpbWVDaGFuZ2UoJGV2ZW50KVwiIDpyYW5nZT1cImdldFRpbWVBcnJheSgpXCIgOnZhbHVlPVwic3RvcFRpbWUuc3BsaXQoJzonKVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hbWVcIiB2LWlmPVwic3RvcFRpbWVcIj5cblx0XHRcdFx0XHRcdFx0PHZpZXc+57uT5p2f5pe26Ze077yae3tzdG9wVGltZX19PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktcGxhY2Vob2xkZXJcIiB2LWVsc2U+57uT5p2f5pe26Ze0PC92aWV3PlxuXHRcdFx0XHRcdDwvcGlja2VyPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVF1ZXJ5UmVjb3JkXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7XCI+5p+l6K+i5b2V5YOP54mH5q61PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VQbGF5YmFja1NlZWtUb1wiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O1wiPuWbnuaUvui3s+i9rOiHs+W8gOWni+aXtumXtDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheUJhY2tQYXVzZVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7mmoLlgZzlm57mlL48L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrUmVzdW1lXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPuaBouWkjeWbnuaUvjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheUJhY2tTdG9wXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPue7k+adn+WbnuaUvjwvYnV0dG9uPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwicmVsZWFzZVBsYXllclwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7pgIDlh7rpobXpnaI8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwibWFyZ2luOiAzNXJweCAwO1wiPuWAjemAn++8mjwvdGV4dD5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoMylcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjAuNTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgxKVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgyKVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCg0KVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+NDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCg4KVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+ODwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgxNilcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjE2PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJyZWNvcmRMaXN0Lmxlbmd0aD4wXCI+XG5cdFx0XHRcdFx0PHRleHQ+5Zue5pS+54mH5q6177yaPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiaXRlbSBpbiByZWNvcmRMaXN0XCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrKGl0ZW0pXCIgc3R5bGU9XCJtYXJnaW46IDEwcnB4IDIwcnB4O3dpZHRoOiA3MDBycHg7XCI+e3tpdGVtLnN0YXJ0VGltZX19IH4ge3tpdGVtLmVuZFRpbWV9fTwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyB2LWlmPVwiaXNGdWxsU2NyZWVuXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHJpZ2h0OiAwOyB0b3A6IDA7IGJvdHRvbTogMDsgei1pbmRleDogOTk5OTk7XCI+XG5cdFx0XHQ8dmlldyBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYm90dG9tOiAxMHB4OyBsZWZ0OiAwOyByaWdodDogMDtoZWlnaHQ6IDEwMHB4O1wiPlxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUV4aXRGdWxsU2NyZWVuXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+6YCA5Ye65YWo5bGPPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2FwdXR1cmVcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7miKrlm748L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDMpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+6LaF5riFPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgyKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4O1wiPumrmOa4hTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMSlcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lnYfooaE8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDApXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+5rWB55WFPC9idXR0b24+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRjb25zdCBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdFx0XHRkZXZpY2VTZXJpYWw6ICcnLCAgICAgICAgICAgLy8g5LuO6JCk55+z5byA5pS+5bmz5Y+w5o6n5Yi25Y+wIC0g6K6+5aSH566h55CG6I635Y+WXG5cdFx0XHRcdGNoYW5uZWxObzogMSxcblx0XHRcdFx0aXNJbml0OiBmYWxzZSxcblx0XHRcdFx0dmFsaWRDb2RlOiAnJywgICAgICAgICAgICAgIC8vIOWhq+WGmeiuvuWkh+mqjOivgeeggVxuXHRcdFx0XHRpc0Z1bGxTY3JlZW46IGZhbHNlLFxuXHRcdFx0XHRzZWxlY3RlZFJhZGlvOiAyLFxuXHRcdFx0XHR2aWRlb01zZzogbnVsbCxcblx0XHRcdFx0cGljdHVyZU1zZzogbnVsbCxcblx0XHRcdFx0Zmxvd01zZzogbnVsbCxcblx0XHRcdFx0Zmxvd1ZhbHVlOiAwLFxuXHRcdFx0XHRmbG93VGltZXI6IG51bGwsXG5cdFx0XHRcdHN0YXJ0RGF0ZTogJzIwMjQtMDctMjUnLFxuXHRcdFx0XHRzdGFydFRpbWU6ICcxNDowMDowMCcsXG5cdFx0XHRcdHN0b3BEYXRlOiAnMjAyNC0wNy0yNScsXG5cdFx0XHRcdHN0b3BUaW1lOiAnMTU6MDA6MDAnLFxuXHRcdFx0XHRzcGFjZUlkOiAnJyxcblx0XHRcdFx0cmVjb3JkTGlzdDogW10sXG5cdFx0XHRcdGxvZ3M6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkJhY2tQcmVzcyhvcHRpb25zKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIui/lOWbnuS4iuS4gOmhte+8mlwiLCBvcHRpb25zKTtcblx0XHRcdGlmIChvcHRpb25zLmZyb20gPT09ICduYXZpZ2F0ZUJhY2snIHx8IG9wdGlvbnMuZnJvbSA9PT0gJ2JhY2tidXR0b24nKSB7XG5cdFx0XHRcdC8vIOS7juWvvOiIqui/lOWbnuinpuWPkeaXtuaJp+ihjFxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucmVsZWFzZSgocmVzKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmkq3mlL7lmajplIDmr4FcIiwgcmVzKTtcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0XHR1cmw6ICcuL2luZGV4J1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHRjb25zdCBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gc3lzdGVtSW5mby53aW5kb3dXaWR0aDtcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ2RlZmF1bHQnKTtcblx0XHRcdFxuXHRcdFx0Z2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9uTWVzc2FnZVwiLCAoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uTWVzc2FnZSh7XG5cdFx0XHRcdFx0ZGV0YWlsOiBlXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRvblVubG9hZCgpIHtcblx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbigncG9ydHJhaXQtcHJpbWFyeScpO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cmVsZWFzZVBsYXllcigpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnJlbGVhc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5Zmo6ZSA5q+BXCIsIHJlcyk7XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiAnLi9pbmRleCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0b25NZXNzYWdlKGUpIHtcblx0XHRcdFx0dGhpcy5sb2dzLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5kZXRhaWwpKTtcblx0XHRcdH0sXG5cdFx0XHRvbkRldmljZVNlcmlhbENoYW5nZShlKSB7XG5cdFx0XHRcdHRoaXMuZGV2aWNlU2VyaWFsID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0b25DaGFubmVsTm9DaGFuZ2UoZSkge1xuXHRcdFx0XHR0aGlzLmNoYW5uZWxObyA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdG9uVmFsaWRDb2RlQ2hhbmdlKGUpIHtcblx0XHRcdFx0dGhpcy52YWxpZENvZGUgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRyYWRpb0NoYW5nZShlKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSYWRpbyA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0VGltZUFycmF5KCkge1xuXHRcdFx0XHRsZXQgdGltZUFyciA9IFtdXG5cdFx0XHRcdHRpbWVBcnIucHVzaCh0aGlzLmdldExvb3BBcnJheSgwLCAyMykpXG5cdFx0XHRcdHRpbWVBcnIucHVzaCh0aGlzLmdldExvb3BBcnJheSgwLCA1OSkpXG5cdFx0XHRcdHRpbWVBcnIucHVzaCh0aGlzLmdldExvb3BBcnJheSgwLCA1OSkpXG5cdFx0XHRcdHJldHVybiB0aW1lQXJyO1xuXHRcdFx0fSxcblx0XHRcdGdldExvb3BBcnJheShzdGFydE51bSwgZW5kTnVtKSB7XG5cdFx0XHRcdGxldCBhcnJheSA9IFtdO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gc3RhcnROdW07IGkgPD0gZW5kTnVtOyBpKyspIHtcblx0XHRcdFx0XHRpIDwgMTAgPyBhcnJheS5wdXNoKCcwJyArIGkpIDogYXJyYXkucHVzaCgnJyArIGkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBhcnJheTtcblx0XHRcdH0sXG5cdFx0XHQvKirpgInmi6nlubTmnIjml6UqKi9cblx0XHRcdGJpbmRTdGFydERhdGVDaGFuZ2UoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XG5cdFx0XHRcdHRoaXMuc3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0YmluZFN0b3BEYXRlQ2hhbmdlKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0b3BEYXRlID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0Lyoq6YCJ5oup5pe25YiG56eSKiovXG5cdFx0XHRiaW5kU3RhcnRUaW1lQ2hhbmdlKGUpIHtcblx0XHRcdFx0bGV0IHRpbWVBcnIgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdFx0dGhpcy5zdGFydFRpbWUgPSAodGltZUFyclswXSA8IDEwID8gJzAnICsgdGltZUFyclswXSA6ICcnICsgdGltZUFyclswXSkgK1xuXHRcdFx0XHRcdCc6JyArXG5cdFx0XHRcdFx0KHRpbWVBcnJbMV0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMV0gOiAnJyArIHRpbWVBcnJbMV0pICsgJzonICtcblx0XHRcdFx0XHQodGltZUFyclsyXSA8IDEwID8gJzAnICsgdGltZUFyclsyXSA6ICcnICsgdGltZUFyclsyXSlcblx0XHRcdH0sXG5cdFx0XHRiaW5kU3RvcFRpbWVDaGFuZ2UoZSkge1xuXHRcdFx0XHRsZXQgdGltZUFyciA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0XHR0aGlzLnN0b3BUaW1lID0gKHRpbWVBcnJbMF0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMF0gOiAnJyArIHRpbWVBcnJbMF0pICtcblx0XHRcdFx0XHQnOicgK1xuXHRcdFx0XHRcdCh0aW1lQXJyWzFdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzFdIDogJycgKyB0aW1lQXJyWzFdKSArICc6JyArXG5cdFx0XHRcdFx0KHRpbWVBcnJbMl0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMl0gOiAnJyArIHRpbWVBcnJbMl0pXG5cdFx0XHR9LFxuXHRcdFx0Y3JlYXRlUGxheWVyKCkge1xuXHRcdFx0XHRpZiAodGhpcy5kZXZpY2VTZXJpYWwubGVuZ3RoID09IDAgfHwgdGhpcy5jaGFubmVsTm8ubGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI6L6T5YWl6K6+5aSH5bqP5YiX5Y+344CB6YCa6YGT5Y+3Jyxcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNyZWF0ZVBsYXllcih0aGlzLmRldmljZVNlcmlhbCwgdGhpcy5jaGFubmVsTm8sIHRoaXMudmFsaWRDb2RlLCAocmVzKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKVxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAnMjAwJykge1xuXHRcdFx0XHRcdFx0dGhpcy5pc0luaXQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yib5bu65pKt5pS+5Zmo5oiQ5YqfJyxcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuWIm+W7uuaIkOWKn1wiKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0XHR2aWRlb1BsYXllci5zZXRFdmVudENhbGxiYWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVJlYWxQbGF5KCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RhcnRSZWFsUGxheSk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXkoKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZmxvd1RpbWVyKSB7XG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcblx0XHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2aWRlb1BsYXllci5nZXRTdHJlYW1GbG93KChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93TXNnID0gcGFyc2VGbG9hdCh1bml0IC8gMTAyNCkudG9GaXhlZCgyKSArICdrL3MnO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSwgMTAwMClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUmVhbFBsYXlTdG9wKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5KTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5KCk7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5mbG93VGltZXIpO1xuXHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IDA7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlRnVsbFNjcmVlbigpIHtcblx0XHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdsYW5kc2NhcGUtcHJpbWFyeScpO1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuZnVsbHNjcmVlbik7XG5cdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0fSxcblx0XHRcdGRldmljZUV4aXRGdWxsU2NyZWVuKCkge1xuXHRcdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ3BvcnRyYWl0LXByaW1hcnknKTtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmV4aXRGdWxsc2NyZWVuKTtcblx0XHRcdFx0XHR2aWRlb1BsYXllci5leGl0RnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuaXNGdWxsU2NyZWVuID0gZmFsc2U7XG5cdFx0XHRcdH0sIDMwMClcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VPcGVuU291bmQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5vcGVuU291bmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5vcGVuU291bmQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VDbG9zZVNvdW5kKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2xvc2VTb3VuZCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNsb3NlU291bmQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VTdGFydFRhbGsoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFRhbGspO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFRhbGsodHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFRhbGsoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wVGFsayk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BUYWxrKCk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cykge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cyk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbChsZXZlbCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlVmlkZW9MZXZlbCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNoYW5nZVZpZGVvTGV2ZWwobGV2ZWwpO1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogYOa4heaZsOW6puWIh+aNouiHs++8miR7bGV2ZWx9YCxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VDYXB1dHVyZSgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmNhcHR1cmVQaWN0dXJlKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2FwdHVyZVBpY3R1cmUoJ3Rlc3QnLCBudWxsLCAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09ICcyMDAnKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflm77niYfkv53lrZjmiJDlip8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJhc2U2NOWbvueJh+aVsOaNru+8mlwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXlSZWNvcmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5UmVjb3JkKChyZXMpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9Nc2cgPSByZXMubXNnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFJlYWxQbGF5UmVjb3JkKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5UmVjb3JkKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5UmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6VXAoKSB7IC8vMO+8muW3pu+8jDHvvJrlj7PvvIwy77ya5LiK77yMM++8muS4i1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDIsIFwiU1RBUlRcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6VXBTdG9wKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDIsIFwiU1RPUFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpEb3duKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDMsIFwiU1RBUlRcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6RG93blN0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMywgXCJTVE9QXCIpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVB0ekxlZnQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMCwgXCJTVEFSVFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpMZWZ0U3RvcCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigwLCBcIlNUT1BcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6UmlnaHQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMSwgXCJTVEFSVFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpSaWdodFN0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMSwgXCJTVE9QXCIpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVF1ZXJ5UmVjb3JkKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaXNJbml0KSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7flhYjliJvlu7rmkq3mlL7lmahcIixcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXMpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXModGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lLCB0aGlzLnN0b3BEYXRlICsgXCIgXCIgKyB0aGlzXG5cdFx0XHRcdFx0LnN0b3BUaW1lLCB0aGlzLnNlbGVjdGVkUmFkaW8sICdhbGwnLCAnMCcsIChyZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Zue5pS+54mH5q615p+l6K+i5oiQ5YqfXCIsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVjb3JkTGlzdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Zue5pS+54mH5q615p+l6K+i5aSx6LSlXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkocmVzKVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXliYWNrU2Vla1RvKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucGxheWJhY2tTZWVrVG8pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wbGF5YmFja1NlZWtUbyh0aGlzLnN0YXJ0RGF0ZSArIFwiIFwiICsgdGhpcy5zdGFydFRpbWUpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXlCYWNrKGl0ZW0pIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2spO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrKGl0ZW0sIHRoaXMuc2VsZWN0ZWRSYWRpbyk7XG5cdFx0XHRcdGlmICh0aGlzLmZsb3dUaW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5mbG93VGltZXIpO1xuXHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSwgMTAwMClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmZsb3dUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IHBhcnNlRmxvYXQoci5tc2cpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sIDEwMDApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQbGF5QmFja1N0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUGxheUJhY2spO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wUGxheUJhY2soKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XG5cdFx0XHRcdHRoaXMuZmxvd01zZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gMDtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQbGF5QmFja1BhdXNlKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucGF1c2UpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wYXVzZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXlCYWNrUmVzdW1lKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucmVzdW1lKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucmVzdW1lKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2tSZWNvcmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFBsYXlCYWNrUmVjb3JkKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrUmVjb3JkKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrUmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZChzcGVlZCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNoYW5nZVBsYXlCYWNrU3BlZWQoc3BlZWQpO1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogYOWIh+aNouiHs++8miR7c3BlZWQ9PTM/JzAuNSc6c3BlZWR95YCN6YCfYCxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuY29udGFpbmVyIHtcblx0XHRwYWRkaW5nLXRvcDogMjUwcHg7XG5cdH1cblxuXHQuZml4ZWQtY29tcG9uZW50IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuXHR9XG5cblx0LmNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cblxuXHQuZnVsbHNjcmVlbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR6LWluZGV4OiA5OTk5O1xuXHR9XG5cblx0LnJhZGlvIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHR9XG5cblx0LnJhZGlvLWl0ZW0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!*********************************************************************************************!*\
  !*** E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/UniEzOpenSDK/demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "": {
      "paddingTop": [
        "250",
        0,
        0,
        0
      ]
    }
  },
  ".fixed-component": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,1)",
        0,
        0,
        1
      ]
    }
  },
  ".content": {
    "": {
      "display": [
        "flex",
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        2
      ]
    }
  },
  ".fullscreen": {
    "": {
      "width": [
        100,
        0,
        0,
        3
      ],
      "height": [
        100,
        0,
        0,
        3
      ],
      "position": [
        "fixed",
        0,
        0,
        3
      ],
      "top": [
        0,
        0,
        0,
        3
      ],
      "left": [
        0,
        0,
        0,
        3
      ],
      "right": [
        0,
        0,
        0,
        3
      ],
      "zIndex": [
        9999,
        0,
        0,
        3
      ]
    }
  },
  ".radio": {
    "": {
      "display": [
        "flex",
        0,
        0,
        4
      ],
      "flexDirection": [
        "row",
        0,
        0,
        4
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        4
      ]
    }
  },
  ".radio-item": {
    "": {
      "display": [
        "flex",
        0,
        0,
        5
      ],
      "flexDirection": [
        "row",
        0,
        0,
        5
      ],
      "flexWrap": [
        "nowrap",
        0,
        0,
        5
      ],
      "marginTop": [
        "10",
        0,
        0,
        5
      ],
      "marginRight": [
        "10",
        0,
        0,
        5
      ],
      "marginBottom": [
        "10",
        0,
        0,
        5
      ],
      "marginLeft": [
        "10",
        0,
        0,
        5
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