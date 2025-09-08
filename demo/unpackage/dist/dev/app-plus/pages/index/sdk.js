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
/*!*******************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/main.js?{"page":"pages%2Findex%2Fsdk"} ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/sdk.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/sdk'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsZ0JBQWdCLHlFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9zZGsubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvaW5kZXgvc2RrJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/main.js?{"type":"appStyle"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?mpType=page ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 6);\n/* harmony import */ var _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"f5743c38\",\n  false,\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/sdk.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9zZGsubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTU2NTVjYyZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Nkay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vc2RrLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImY1NzQzYzM4XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3Nkay5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!*************************************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThqQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nkay5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZGsubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar globalEvent = weex.requireModule('globalEvent');\nvar _default = {\n  data: function data() {\n    return {\n      windowWidth: 0,\n      windowHeight: 0,\n      deviceSerial: 'BB9480953',\n      channelNo: 1,\n      isInit: false,\n      validCode: 'MKIXOB',\n      isFullScreen: false,\n      selectedRadio: 2,\n      videoMsg: null,\n      pictureMsg: null,\n      flowMsg: null,\n      flowValue: 0,\n      flowTimer: null,\n      startDate: '2024-07-25',\n      startTime: '14:00:00',\n      stopDate: '2024-07-25',\n      stopTime: '15:00:00',\n      spaceId: '',\n      recordList: [],\n      logs: []\n    };\n  },\n  onBackPress: function onBackPress(options) {\n    __f__(\"log\", \"返回上一页：\", options, \" at pages/index/sdk.nvue:177\");\n    if (options.from === 'navigateBack' || options.from === 'backbutton') {\n      // 从导航返回触发时执行\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:182\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n      return true;\n    }\n    return false;\n  },\n  onLoad: function onLoad() {\n    var systemInfo = uni.getSystemInfoSync();\n    this.windowWidth = systemInfo.windowWidth;\n    this.windowHeight = systemInfo.windowHeight;\n    plus.screen.lockOrientation('default');\n    globalEvent.addEventListener(\"onMessage\", function (e) {\n      __f__(\"log\", \"onMessage\", JSON.stringify(e), \" at pages/index/sdk.nvue:198\");\n    });\n  },\n  onUnload: function onUnload() {\n    plus.screen.lockOrientation('portrait-primary');\n  },\n  methods: {\n    releasePlayer: function releasePlayer() {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:208\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n    },\n    onMessage: function onMessage(e) {\n      this.logs.push(JSON.stringify(e.detail));\n    },\n    onDeviceSerialChange: function onDeviceSerialChange(e) {\n      this.deviceSerial = e.detail.value;\n    },\n    onChannelNoChange: function onChannelNoChange(e) {\n      this.channelNo = e.detail.value;\n    },\n    onValidCodeChange: function onValidCodeChange(e) {\n      this.validCode = e.detail.value;\n    },\n    radioChange: function radioChange(e) {\n      this.selectedRadio = e.detail.value;\n    },\n    getTimeArray: function getTimeArray() {\n      var timeArr = [];\n      timeArr.push(this.getLoopArray(0, 23));\n      timeArr.push(this.getLoopArray(0, 59));\n      timeArr.push(this.getLoopArray(0, 59));\n      return timeArr;\n    },\n    getLoopArray: function getLoopArray(startNum, endNum) {\n      var array = [];\n      for (var i = startNum; i <= endNum; i++) {\n        i < 10 ? array.push('0' + i) : array.push('' + i);\n      }\n      return array;\n    },\n    /**选择年月日**/bindStartDateChange: function bindStartDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:246\");\n      this.startDate = e.detail.value;\n    },\n    bindStopDateChange: function bindStopDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:250\");\n      this.stopDate = e.detail.value;\n    },\n    /**选择时分秒**/bindStartTimeChange: function bindStartTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.startTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    bindStopTimeChange: function bindStopTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.stopTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    createPlayer: function createPlayer() {\n      var _this = this;\n      if (this.deviceSerial.length == 0 || this.channelNo.length == 0) {\n        uni.showToast({\n          title: '请先输入设备序列号、通道号',\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:278\");\n        if (res.code == '200') {\n          _this.isInit = true;\n          uni.showToast({\n            title: '创建播放器成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"创建成功\", \" at pages/index/sdk.nvue:286\");\n        }\n      });\n      videoPlayer.setEventCallback(function (e) {\n        __f__(\"log\", JSON.stringify(e), \" at pages/index/sdk.nvue:291\");\n      });\n    },\n    deviceRealPlay: function deviceRealPlay() {\n      var _this2 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlay, \" at pages/index/sdk.nvue:296\");\n      videoPlayer.startRealPlay(function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:298\");\n        if (_this2.flowTimer) {\n          clearInterval(_this2.flowTimer);\n          _this2.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this2.flowValue;\n              _this2.flowValue = parseFloat(r.msg);\n              _this2.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        } else {\n          _this2.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this2.flowValue;\n              _this2.flowValue = parseFloat(r.msg);\n              _this2.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        }\n      });\n    },\n    deviceRealPlayStop: function deviceRealPlayStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlay, \" at pages/index/sdk.nvue:321\");\n      videoPlayer.stopRealPlay();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    deviceFullScreen: function deviceFullScreen() {\n      var _this3 = this;\n      plus.screen.lockOrientation('landscape-primary');\n      var videoPlayer = this.$refs.player;\n      setTimeout(function () {\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.fullscreen, \" at pages/index/sdk.nvue:331\");\n        videoPlayer.fullscreen();\n        _this3.isFullScreen = true;\n      }, 300);\n    },\n    deviceExitFullScreen: function deviceExitFullScreen() {\n      var _this4 = this;\n      plus.screen.lockOrientation('portrait-primary');\n      var videoPlayer = this.$refs.player;\n      setTimeout(function () {\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.exitFullscreen, \" at pages/index/sdk.nvue:340\");\n        videoPlayer.exitFullscreen();\n        _this4.isFullScreen = false;\n      }, 300);\n    },\n    deviceOpenSound: function deviceOpenSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.openSound, \" at pages/index/sdk.nvue:347\");\n      videoPlayer.openSound();\n    },\n    deviceCloseSound: function deviceCloseSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.closeSound, \" at pages/index/sdk.nvue:352\");\n      videoPlayer.closeSound();\n    },\n    deviceStartTalk: function deviceStartTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startTalk, \" at pages/index/sdk.nvue:357\");\n      videoPlayer.startTalk(true);\n    },\n    deviceStopTalk: function deviceStopTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopTalk, \" at pages/index/sdk.nvue:362\");\n      videoPlayer.stopTalk();\n    },\n    setVoiceTalkStatus: function setVoiceTalkStatus(status) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.setVoiceTalkStatus, \" at pages/index/sdk.nvue:367\");\n      videoPlayer.setVoiceTalkStatus(status);\n    },\n    deviceChangeVideoLevel: function deviceChangeVideoLevel(level) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changeVideoLevel, \" at pages/index/sdk.nvue:372\");\n      videoPlayer.changeVideoLevel(level);\n      uni.showToast({\n        title: \"\\u6E05\\u6670\\u5EA6\\u5207\\u6362\\u81F3\\uFF1A\".concat(level),\n        icon: 'none'\n      });\n    },\n    deviceCaputure: function deviceCaputure() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.capturePicture, \" at pages/index/sdk.nvue:381\");\n      videoPlayer.capturePicture('test', null, function (res) {\n        if (res.code == '200') {\n          uni.showToast({\n            title: '图片保存成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"base64图片数据：\", JSON.stringify(res.data), \" at pages/index/sdk.nvue:388\");\n        }\n      });\n    },\n    deviceStartRealPlayRecord: function deviceStartRealPlayRecord() {\n      var _this5 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlayRecord, \" at pages/index/sdk.nvue:394\");\n      videoPlayer.startRealPlayRecord(function (res) {\n        if (res.code == '200') {\n          _this5.videoMsg = res.msg;\n        }\n      });\n    },\n    deviceStopRealPlayRecord: function deviceStopRealPlayRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlayRecord, \" at pages/index/sdk.nvue:403\");\n      videoPlayer.stopRealPlayRecord();\n    },\n    devicePtzUp: function devicePtzUp() {\n      //0：左，1：右，2：上，3：下\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:408\");\n      videoPlayer.ptzOption(2, \"START\");\n    },\n    devicePtzUpStop: function devicePtzUpStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:413\");\n      videoPlayer.ptzOption(2, \"STOP\");\n    },\n    devicePtzDown: function devicePtzDown() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:418\");\n      videoPlayer.ptzOption(3, \"START\");\n    },\n    devicePtzDownStop: function devicePtzDownStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:423\");\n      videoPlayer.ptzOption(3, \"STOP\");\n    },\n    devicePtzLeft: function devicePtzLeft() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:428\");\n      videoPlayer.ptzOption(0, \"START\");\n    },\n    devicePtzLeftStop: function devicePtzLeftStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:433\");\n      videoPlayer.ptzOption(0, \"STOP\");\n    },\n    devicePtzRight: function devicePtzRight() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:438\");\n      videoPlayer.ptzOption(1, \"START\");\n    },\n    devicePtzRightStop: function devicePtzRightStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:443\");\n      videoPlayer.ptzOption(1, \"STOP\");\n    },\n    deviceQueryRecord: function deviceQueryRecord() {\n      var _this6 = this;\n      if (!this.isInit) {\n        uni.showToast({\n          title: \"请先创建播放器\",\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startQueryRecordFiles, \" at pages/index/sdk.nvue:455\");\n      videoPlayer.startQueryRecordFiles(this.startDate + \" \" + this.startTime, this.stopDate + \" \" + this.stopTime, this.selectedRadio, 'all', '0', function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:458\");\n        if (res.code == '200') {\n          uni.showToast({\n            title: \"回放片段查询成功\",\n            icon: 'none'\n          });\n          _this6.recordList = res.data;\n        } else {\n          uni.showModal({\n            title: \"回放片段查询失败\",\n            content: JSON.stringify(res)\n          });\n        }\n      });\n    },\n    devicePlaybackSeekTo: function devicePlaybackSeekTo() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.playbackSeekTo, \" at pages/index/sdk.nvue:475\");\n      videoPlayer.playbackSeekTo(this.startDate + \" \" + this.startTime);\n    },\n    devicePlayBack: function devicePlayBack(item) {\n      var _this7 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBack, \" at pages/index/sdk.nvue:480\");\n      videoPlayer.startPlayBack(item, this.selectedRadio);\n      if (this.flowTimer) {\n        clearInterval(this.flowTimer);\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this7.flowValue;\n            _this7.flowValue = parseFloat(r.msg);\n            _this7.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      } else {\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this7.flowValue;\n            _this7.flowValue = parseFloat(r.msg);\n            _this7.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      }\n    },\n    devicePlayBackStop: function devicePlayBackStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBack, \" at pages/index/sdk.nvue:503\");\n      videoPlayer.stopPlayBack();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    devicePlayBackPause: function devicePlayBackPause() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.pause, \" at pages/index/sdk.nvue:511\");\n      videoPlayer.pause();\n    },\n    devicePlayBackResume: function devicePlayBackResume() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.resume, \" at pages/index/sdk.nvue:516\");\n      videoPlayer.resume();\n    },\n    deviceStartPlayBackRecord: function deviceStartPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBackRecord, \" at pages/index/sdk.nvue:521\");\n      videoPlayer.startPlayBackRecord();\n    },\n    deviceStopPlayBackRecord: function deviceStopPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBackRecord, \" at pages/index/sdk.nvue:526\");\n      videoPlayer.stopPlayBackRecord();\n    },\n    deviceChangePlayBackSpeed: function deviceChangePlayBackSpeed(speed) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changePlayBackSpeed, \" at pages/index/sdk.nvue:531\");\n      videoPlayer.changePlayBackSpeed(speed);\n      uni.showToast({\n        title: \"\\u5207\\u6362\\u81F3\\uFF1A\".concat(speed == 3 ? '0.5' : speed, \"\\u500D\\u901F\"),\n        icon: 'none'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvc2RrLm52dWUiXSwibmFtZXMiOlsiZGF0YSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiZGV2aWNlU2VyaWFsIiwiY2hhbm5lbE5vIiwiaXNJbml0IiwidmFsaWRDb2RlIiwiaXNGdWxsU2NyZWVuIiwic2VsZWN0ZWRSYWRpbyIsInZpZGVvTXNnIiwicGljdHVyZU1zZyIsImZsb3dNc2ciLCJmbG93VmFsdWUiLCJmbG93VGltZXIiLCJzdGFydERhdGUiLCJzdGFydFRpbWUiLCJzdG9wRGF0ZSIsInN0b3BUaW1lIiwic3BhY2VJZCIsInJlY29yZExpc3QiLCJsb2dzIiwib25CYWNrUHJlc3MiLCJ2aWRlb1BsYXllciIsInVuaSIsInVybCIsIm9uTG9hZCIsInBsdXMiLCJnbG9iYWxFdmVudCIsIm9uVW5sb2FkIiwibWV0aG9kcyIsInJlbGVhc2VQbGF5ZXIiLCJvbk1lc3NhZ2UiLCJvbkRldmljZVNlcmlhbENoYW5nZSIsIm9uQ2hhbm5lbE5vQ2hhbmdlIiwib25WYWxpZENvZGVDaGFuZ2UiLCJyYWRpb0NoYW5nZSIsImdldFRpbWVBcnJheSIsInRpbWVBcnIiLCJnZXRMb29wQXJyYXkiLCJpIiwiYmluZFN0YXJ0RGF0ZUNoYW5nZSIsImJpbmRTdG9wRGF0ZUNoYW5nZSIsImJpbmRTdGFydFRpbWVDaGFuZ2UiLCJiaW5kU3RvcFRpbWVDaGFuZ2UiLCJjcmVhdGVQbGF5ZXIiLCJ0aXRsZSIsImljb24iLCJkZXZpY2VSZWFsUGxheSIsImNsZWFySW50ZXJ2YWwiLCJkZXZpY2VSZWFsUGxheVN0b3AiLCJkZXZpY2VGdWxsU2NyZWVuIiwic2V0VGltZW91dCIsImRldmljZUV4aXRGdWxsU2NyZWVuIiwiZGV2aWNlT3BlblNvdW5kIiwiZGV2aWNlQ2xvc2VTb3VuZCIsImRldmljZVN0YXJ0VGFsayIsImRldmljZVN0b3BUYWxrIiwic2V0Vm9pY2VUYWxrU3RhdHVzIiwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCIsImRldmljZUNhcHV0dXJlIiwiZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZCIsImRldmljZVN0b3BSZWFsUGxheVJlY29yZCIsImRldmljZVB0elVwIiwiZGV2aWNlUHR6VXBTdG9wIiwiZGV2aWNlUHR6RG93biIsImRldmljZVB0ekRvd25TdG9wIiwiZGV2aWNlUHR6TGVmdCIsImRldmljZVB0ekxlZnRTdG9wIiwiZGV2aWNlUHR6UmlnaHQiLCJkZXZpY2VQdHpSaWdodFN0b3AiLCJkZXZpY2VRdWVyeVJlY29yZCIsImNvbnRlbnQiLCJkZXZpY2VQbGF5YmFja1NlZWtUbyIsImRldmljZVBsYXlCYWNrIiwiZGV2aWNlUGxheUJhY2tTdG9wIiwiZGV2aWNlUGxheUJhY2tQYXVzZSIsImRldmljZVBsYXlCYWNrUmVzdW1lIiwiZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCIsImRldmljZVN0b3BQbGF5QmFja1JlY29yZCIsImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUpBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQUM7VUFDQUM7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7SUFFQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQUY7RUFDQTtFQUNBRztJQUNBQztNQUNBO01BQ0FSO1FBQ0E7UUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQU87TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0FDO01BQ0FBO01BQ0FBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQSxXQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBLFdBQ0FDO01BQ0E7TUFDQSwwRUFDQSxPQUNBTCwrREFDQUE7SUFDQTtJQUNBTTtNQUNBO01BQ0EseUVBQ0EsT0FDQU4sK0RBQ0FBO0lBQ0E7SUFDQU87TUFBQTtNQUNBO1FBQ0FyQjtVQUNBc0I7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBeEI7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7WUFDQXNCO1lBQ0FDO1VBQ0E7VUFFQTtRQUNBO01BQ0E7TUFFQXhCO1FBQ0E7TUFDQTtJQUNBO0lBQ0F5QjtNQUFBO01BQ0E7TUFDQTtNQUNBekI7UUFDQTtRQUNBO1VBQ0EwQjtVQUNBO1lBQ0ExQjtjQUNBO2NBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtVQUNBO1lBQ0FBO2NBQ0E7Y0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBMkI7TUFDQTtNQUNBO01BQ0EzQjtNQUNBMEI7TUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFBQTtNQUNBeEI7TUFDQTtNQUNBeUI7UUFDQTtRQUNBN0I7UUFDQTtNQUNBO0lBQ0E7SUFDQThCO01BQUE7TUFDQTFCO01BQ0E7TUFDQXlCO1FBQ0E7UUFDQTdCO1FBQ0E7TUFDQTtJQUNBO0lBQ0ErQjtNQUNBO01BQ0E7TUFDQS9CO0lBQ0E7SUFDQWdDO01BQ0E7TUFDQTtNQUNBaEM7SUFDQTtJQUNBaUM7TUFDQTtNQUNBO01BQ0FqQztJQUNBO0lBQ0FrQztNQUNBO01BQ0E7TUFDQWxDO0lBQ0E7SUFDQW1DO01BQ0E7TUFDQTtNQUNBbkM7SUFDQTtJQUNBb0M7TUFDQTtNQUNBO01BQ0FwQztNQUNBQztRQUNBc0I7UUFDQUM7TUFDQTtJQUNBO0lBQ0FhO01BQ0E7TUFDQTtNQUNBckM7UUFDQTtVQUNBQztZQUNBc0I7WUFDQUM7VUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FjO01BQUE7TUFDQTtNQUNBO01BQ0F0QztRQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQXVDO01BQ0E7TUFDQTtNQUNBdkM7SUFDQTtJQUNBd0M7TUFBQTtNQUNBO01BQ0E7TUFDQXhDO0lBQ0E7SUFDQXlDO01BQ0E7TUFDQTtNQUNBekM7SUFDQTtJQUNBMEM7TUFDQTtNQUNBO01BQ0ExQztJQUNBO0lBQ0EyQztNQUNBO01BQ0E7TUFDQTNDO0lBQ0E7SUFDQTRDO01BQ0E7TUFDQTtNQUNBNUM7SUFDQTtJQUNBNkM7TUFDQTtNQUNBO01BQ0E3QztJQUNBO0lBQ0E4QztNQUNBO01BQ0E7TUFDQTlDO0lBQ0E7SUFDQStDO01BQ0E7TUFDQTtNQUNBL0M7SUFDQTtJQUNBZ0Q7TUFBQTtNQUNBO1FBQ0EvQztVQUNBc0I7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0F4QixvR0FDQUw7UUFDQTtRQUNBO1VBQ0FNO1lBQ0FzQjtZQUNBQztVQUNBO1VBQ0E7UUFDQTtVQUNBdkI7WUFDQXNCO1lBQ0EwQjtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBbEQ7SUFDQTtJQUNBbUQ7TUFBQTtNQUNBO01BQ0E7TUFDQW5EO01BQ0E7UUFDQTBCO1FBQ0E7VUFDQTFCO1lBQ0E7WUFDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7VUFDQUE7WUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBb0Q7TUFDQTtNQUNBO01BQ0FwRDtNQUNBMEI7TUFDQTtNQUNBO0lBQ0E7SUFDQTJCO01BQ0E7TUFDQTtNQUNBckQ7SUFDQTtJQUNBc0Q7TUFDQTtNQUNBO01BQ0F0RDtJQUNBO0lBQ0F1RDtNQUNBO01BQ0E7TUFDQXZEO0lBQ0E7SUFDQXdEO01BQ0E7TUFDQTtNQUNBeEQ7SUFDQTtJQUNBeUQ7TUFDQTtNQUNBO01BQ0F6RDtNQUNBQztRQUNBc0I7UUFDQUM7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZml4ZWQtY29tcG9uZW50XCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAyMDBweDsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7cmlnaHQ6IDA7ei1pbmRleDogOTk5OTttYXJnaW4tYm90dG9tOiAyMHB4O1wiPlxyXG5cdFx0XHQ8VW5pT3BlblNESyByZWY9XCJwbGF5ZXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwMHB4O1wiIEBtZXNzYWdlPVwib25NZXNzYWdlXCI+XHJcblx0XHRcdDwvVW5pT3BlblNESz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luLXRvcDogMjIwcHg7XCI+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCIhaXNGdWxsU2NyZWVuXCI+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXorr7lpIfluo/liJflj7dcIiA6dmFsdWU9XCJkZXZpY2VTZXJpYWxcIiBAaW5wdXQ9XCJvbkRldmljZVNlcmlhbENoYW5nZVwiIHN0eWxlPVwiaGVpZ2h0OiAzMnB4O2JvcmRlcjogMXB4IHNvbGlkICNhYWE7bWFyZ2luLWJvdHRvbTogMTBweDtcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6YCa6YGT5Y+3XCIgOnZhbHVlPVwiY2hhbm5lbE5vXCIgQGlucHV0PVwib25DaGFubmVsTm9DaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogMzJweDtib3JkZXI6IDFweCBzb2xpZCAjYWFhO21hcmdpbi1ib3R0b206IDEwcHg7XCIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiIDp2YWx1ZT1cInZhbGlkQ29kZVwiIEBpbnB1dD1cIm9uVmFsaWRDb2RlQ2hhbmdlXCIgc3R5bGU9XCJoZWlnaHQ6IDMycHg7Ym9yZGVyOiAxcHggc29saWQgI2FhYTttYXJnaW4tYm90dG9tOiAxMHB4O1wiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImNyZWF0ZVBsYXllclwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7liJvlu7rmkq3mlL7lmag8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUmVhbFBsYXlcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDIwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5byA5aeL6aKE6KeI5pKt5pS+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVJlYWxQbGF5U3RvcFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7nu5PmnZ/pooTop4jmkq3mlL48L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZmxvd01zZ1wiPua1gemHj++8mnt7Zmxvd01zZ319PC92aWV3PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwibG9nc1wiPuaXpeW/l++8mnt7bG9ncy5qb2luKCcvbicpfX08L3ZpZXc+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlRnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuWFqOWxjzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VFeGl0RnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPumAgOWHuuWFqOWxjzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZU9wZW5Tb3VuZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWQr+WjsOmfszwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDbG9zZVNvdW5kXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5aOw6Z+zPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RhcnRUYWxrXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5ZCv5a+56K6yPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVN0b3BUYWxrXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5a+56K6yPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJzZXRWb2ljZVRhbGtTdGF0dXModHJ1ZSlcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lvIDlkK/ljYrlj4zlt6U8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInNldFZvaWNlVGFsa1N0YXR1cyhmYWxzZSlcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lhbPpl63ljYrlj4zlt6U8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW46IDM1cnB4IDA7XCI+5riF5pmw5bqm77yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDMpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+6LaF5riFPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMilcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7pq5jmuIU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgxKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuWdh+ihoTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDApXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5rWB55WFPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWni+W9leWItjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VTdG9wUmVhbFBsYXlSZWNvcmRcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7nu5PmnZ/lvZXliLY8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidmlkZW9Nc2dcIiBzdHlsZT1cIm1hcmdpbjogMzVycHggMCAxMHJweDtkaXNwbGF5OiBibG9jaztcIj7lvZXlg4/mlofku7bot6/lvoTvvJp7e3ZpZGVvTXNnfX08L3ZpZXc+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2FwdXR1cmVcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7miKrlm748L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwicGljdHVyZU1zZ1wiIHN0eWxlPVwibWFyZ2luOiAzNXJweCAwIDEwcnB4O2Rpc3BsYXk6IGJsb2NrO1wiPuWbvueJh+aWh+S7tui3r+W+hO+8mnt7cGljdHVyZU1zZ319PC92aWV3PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbjogMzVycHggMDtcIj7kupHlj7DvvJo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6VXBcIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpVcFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7kuIo8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpEb3duXCIgQHRvdWNoZW5kPVwiZGV2aWNlUHR6RG93blN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7kuIs8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpMZWZ0XCIgQHRvdWNoZW5kPVwiZGV2aWNlUHR6TGVmdFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lt6Y8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpSaWdodFwiIEB0b3VjaGVuZD1cImRldmljZVB0elJpZ2h0U3RvcFwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuWPszwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luOiAyMHB4IDA7XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0PuWbnuaUvuexu+Wei++8mjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHJhZGlvLWdyb3VwIEBjaGFuZ2U9XCJyYWRpb0NoYW5nZVwiIGNsYXNzPVwicmFkaW9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJyYWRpby1pdGVtXCIgOmtleT1cIjJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCIyXCIgOmNoZWNrZWQ9XCJzZWxlY3RlZFJhZGlvPT0yXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlNE5Y2hPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwicmFkaW8taXRlbVwiIDprZXk9XCIwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwiMFwiIDpjaGVja2VkPVwic2VsZWN0ZWRSYWRpbz09MFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz7kupHlrZjlgqg8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJyYWRpby1pdGVtXCIgOmtleT1cIjNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCJudWxsXCIgOmNoZWNrZWQ9XCJzZWxlY3RlZFJhZGlvPT1udWxsXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3Pm51bGw8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9yYWRpby1ncm91cD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHQ8cGlja2VyIG1vZGU9XCJkYXRlXCIgOnZhbHVlPVwic3RhcnREYXRlXCIgZm9ybWF0PVwieXl5eS1NTS1kZFwiIEBjaGFuZ2U9XCJiaW5kU3RhcnREYXRlQ2hhbmdlXCIgc3R5bGU9XCJib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXc+5byA5aeL5pel5pyf77yae3tzdGFydERhdGV9fTwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cclxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cIm11bHRpU2VsZWN0b3JcIiBAY2hhbmdlPVwiYmluZFN0YXJ0VGltZUNoYW5nZSgkZXZlbnQpXCIgOnJhbmdlPVwiZ2V0VGltZUFycmF5KClcIiA6dmFsdWU9XCJzdGFydFRpbWUuc3BsaXQoJzonKVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmFtZVwiIHYtaWY9XCJzdGFydFRpbWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldz7lvIDlp4vml7bpl7TvvJp7e3N0YXJ0VGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXBsYWNlaG9sZGVyXCIgdi1lbHNlPuW8gOWni+aXtumXtDwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cclxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cImRhdGVcIiA6dmFsdWU9XCJzdG9wRGF0ZVwiIGZvcm1hdD1cInl5eXktTU0tZGRcIiBAY2hhbmdlPVwiYmluZFN0b3BEYXRlQ2hhbmdlXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O2JvcmRlcjogMXJweCBzb2xpZCAjYWFhO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldz7nu5PmnZ/ml6XmnJ/vvJp7e3N0b3BEYXRlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHJcblx0XHRcdFx0XHQ8cGlja2VyIG1vZGU9XCJtdWx0aVNlbGVjdG9yXCIgQGNoYW5nZT1cImJpbmRTdG9wVGltZUNoYW5nZSgkZXZlbnQpXCIgOnJhbmdlPVwiZ2V0VGltZUFycmF5KClcIiA6dmFsdWU9XCJzdG9wVGltZS5zcGxpdCgnOicpXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4O2JvcmRlcjogMXJweCBzb2xpZCAjYWFhO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYW1lXCIgdi1pZj1cInN0b3BUaW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+57uT5p2f5pe26Ze077yae3tzdG9wVGltZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXBsYWNlaG9sZGVyXCIgdi1lbHNlPue7k+adn+aXtumXtDwvdmlldz5cclxuXHRcdFx0XHRcdDwvcGlja2VyPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUXVlcnlSZWNvcmRcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtcIj7mn6Xor6LlvZXlg4/niYfmrrU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheWJhY2tTZWVrVG9cIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtcIj7lm57mlL7ot7Povazoh7PlvIDlp4vml7bpl7Q8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheUJhY2tQYXVzZVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7mmoLlgZzlm57mlL48L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheUJhY2tSZXN1bWVcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5oGi5aSN5Zue5pS+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrU3RvcFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7nu5PmnZ/lm57mlL48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJyZWxlYXNlUGxheWVyXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPumAgOWHuumhtemdojwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwibWFyZ2luOiAzNXJweCAwO1wiPuWAjemAn++8mjwvdGV4dD5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgzKVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MC41PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoMSlcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjE8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgyKVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKDQpXCIgc3R5bGU9XCJ3aWR0aDogODBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj40PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoOClcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjg8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgxNilcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjE2PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJyZWNvcmRMaXN0Lmxlbmd0aD4wXCI+XHJcblx0XHRcdFx0XHQ8dGV4dD7lm57mlL7niYfmrrXvvJo8L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIml0ZW0gaW4gcmVjb3JkTGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrKGl0ZW0pXCIgc3R5bGU9XCJtYXJnaW46IDEwcnB4IDIwcnB4O3dpZHRoOiA3MDBycHg7XCI+e3tpdGVtLnN0YXJ0VGltZX19IH4ge3tpdGVtLmVuZFRpbWV9fTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cImlzRnVsbFNjcmVlblwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7IHotaW5kZXg6IDk5OTk5O1wiPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYm90dG9tOiAxMHB4OyBsZWZ0OiAwOyByaWdodDogMDtoZWlnaHQ6IDEwMHB4O1wiPlxyXG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlRXhpdEZ1bGxTY3JlZW5cIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7pgIDlh7rlhajlsY88L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNhcHV0dXJlXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5oiq5Zu+PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDMpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+6LaF5riFPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDIpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+6auY5riFPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDEpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+5Z2H6KGhPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDApXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+5rWB55WFPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxuXHRjb25zdCBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCxcclxuXHRcdFx0XHRkZXZpY2VTZXJpYWw6ICdCQjk0ODA5NTMnLFxyXG5cdFx0XHRcdGNoYW5uZWxObzogMSxcclxuXHRcdFx0XHRpc0luaXQ6IGZhbHNlLFxyXG5cdFx0XHRcdHZhbGlkQ29kZTogJ01LSVhPQicsXHJcblx0XHRcdFx0aXNGdWxsU2NyZWVuOiBmYWxzZSxcclxuXHRcdFx0XHRzZWxlY3RlZFJhZGlvOiAyLFxyXG5cdFx0XHRcdHZpZGVvTXNnOiBudWxsLFxyXG5cdFx0XHRcdHBpY3R1cmVNc2c6IG51bGwsXHJcblx0XHRcdFx0Zmxvd01zZzogbnVsbCxcclxuXHRcdFx0XHRmbG93VmFsdWU6IDAsXHJcblx0XHRcdFx0Zmxvd1RpbWVyOiBudWxsLFxyXG5cdFx0XHRcdHN0YXJ0RGF0ZTogJzIwMjQtMDctMjUnLFxyXG5cdFx0XHRcdHN0YXJ0VGltZTogJzE0OjAwOjAwJyxcclxuXHRcdFx0XHRzdG9wRGF0ZTogJzIwMjQtMDctMjUnLFxyXG5cdFx0XHRcdHN0b3BUaW1lOiAnMTU6MDA6MDAnLFxyXG5cdFx0XHRcdHNwYWNlSWQ6ICcnLFxyXG5cdFx0XHRcdHJlY29yZExpc3Q6IFtdLFxuXHRcdFx0XHRsb2dzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25CYWNrUHJlc3Mob3B0aW9ucykge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIui/lOWbnuS4iuS4gOmhte+8mlwiLCBvcHRpb25zKTtcclxuXHRcdFx0aWYgKG9wdGlvbnMuZnJvbSA9PT0gJ25hdmlnYXRlQmFjaycgfHwgb3B0aW9ucy5mcm9tID09PSAnYmFja2J1dHRvbicpIHtcclxuXHRcdFx0XHQvLyDku47lr7zoiKrov5Tlm57op6blj5Hml7bmiafooYxcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5yZWxlYXNlKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5Zmo6ZSA5q+BXCIsIHJlcyk7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy4vaW5kZXgnXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRjb25zdCBzeXN0ZW1JbmZvID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdHRoaXMud2luZG93V2lkdGggPSBzeXN0ZW1JbmZvLndpbmRvd1dpZHRoO1xyXG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xyXG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ2RlZmF1bHQnKTtcblx0XHRcdFxuXHRcdFx0Z2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm9uTWVzc2FnZVwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0ICBjb25zb2xlLmxvZyhcIm9uTWVzc2FnZVwiLCBKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpIHtcclxuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdwb3J0cmFpdC1wcmltYXJ5Jyk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRyZWxlYXNlUGxheWVyKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnJlbGVhc2UoKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmkq3mlL7lmajplIDmr4FcIiwgcmVzKTtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi9pbmRleCdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxuXHRcdFx0b25NZXNzYWdlKGUpIHtcblx0XHRcdFx0dGhpcy5sb2dzLnB1c2goSlNPTi5zdHJpbmdpZnkoZS5kZXRhaWwpKTtcblx0XHRcdH0sXHJcblx0XHRcdG9uRGV2aWNlU2VyaWFsQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmRldmljZVNlcmlhbCA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNoYW5uZWxOb0NoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5jaGFubmVsTm8gPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25WYWxpZENvZGVDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMudmFsaWRDb2RlID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJhZGlvQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmFkaW8gPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGdldFRpbWVBcnJheSgpIHtcclxuXHRcdFx0XHRsZXQgdGltZUFyciA9IFtdXHJcblx0XHRcdFx0dGltZUFyci5wdXNoKHRoaXMuZ2V0TG9vcEFycmF5KDAsIDIzKSlcclxuXHRcdFx0XHR0aW1lQXJyLnB1c2godGhpcy5nZXRMb29wQXJyYXkoMCwgNTkpKVxyXG5cdFx0XHRcdHRpbWVBcnIucHVzaCh0aGlzLmdldExvb3BBcnJheSgwLCA1OSkpXHJcblx0XHRcdFx0cmV0dXJuIHRpbWVBcnI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldExvb3BBcnJheShzdGFydE51bSwgZW5kTnVtKSB7XHJcblx0XHRcdFx0bGV0IGFycmF5ID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHN0YXJ0TnVtOyBpIDw9IGVuZE51bTsgaSsrKSB7XHJcblx0XHRcdFx0XHRpIDwgMTAgPyBhcnJheS5wdXNoKCcwJyArIGkpIDogYXJyYXkucHVzaCgnJyArIGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYXJyYXk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8qKumAieaLqeW5tOaciOaXpSoqL1xyXG5cdFx0XHRiaW5kU3RhcnREYXRlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcblx0XHRcdFx0dGhpcy5zdGFydERhdGUgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YmluZFN0b3BEYXRlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcblx0XHRcdFx0dGhpcy5zdG9wRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKirpgInmi6nml7bliIbnp5IqKi9cclxuXHRcdFx0YmluZFN0YXJ0VGltZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0bGV0IHRpbWVBcnIgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0VGltZSA9ICh0aW1lQXJyWzBdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzBdIDogJycgKyB0aW1lQXJyWzBdKSArXHJcblx0XHRcdFx0XHQnOicgK1xyXG5cdFx0XHRcdFx0KHRpbWVBcnJbMV0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMV0gOiAnJyArIHRpbWVBcnJbMV0pICsgJzonICtcclxuXHRcdFx0XHRcdCh0aW1lQXJyWzJdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzJdIDogJycgKyB0aW1lQXJyWzJdKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kU3RvcFRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdGxldCB0aW1lQXJyID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdFx0dGhpcy5zdG9wVGltZSA9ICh0aW1lQXJyWzBdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzBdIDogJycgKyB0aW1lQXJyWzBdKSArXHJcblx0XHRcdFx0XHQnOicgK1xyXG5cdFx0XHRcdFx0KHRpbWVBcnJbMV0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMV0gOiAnJyArIHRpbWVBcnJbMV0pICsgJzonICtcclxuXHRcdFx0XHRcdCh0aW1lQXJyWzJdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzJdIDogJycgKyB0aW1lQXJyWzJdKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjcmVhdGVQbGF5ZXIoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZGV2aWNlU2VyaWFsLmxlbmd0aCA9PSAwIHx8IHRoaXMuY2hhbm5lbE5vLmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfor7flhYjovpPlhaXorr7lpIfluo/liJflj7fjgIHpgJrpgZPlj7cnLFxyXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY3JlYXRlUGxheWVyKHRoaXMuZGV2aWNlU2VyaWFsLCB0aGlzLmNoYW5uZWxObywgdGhpcy52YWxpZENvZGUsIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmlzSW5pdCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yib5bu65pKt5pS+5Zmo5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5Yib5bu65oiQ5YqfXCIpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XG5cdFx0XHRcdFxuXHRcdFx0XHR2aWRlb1BsYXllci5zZXRFdmVudENhbGxiYWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VSZWFsUGxheSgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5KTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5KChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5mbG93VGltZXIpIHtcclxuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUmVhbFBsYXlTdG9wKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0b3BSZWFsUGxheSk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5KCk7XHJcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XHJcblx0XHRcdFx0dGhpcy5mbG93TXNnID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IDA7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUZ1bGxTY3JlZW4oKSB7XHJcblx0XHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdsYW5kc2NhcGUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuZnVsbHNjcmVlbik7XHJcblx0XHRcdFx0XHR2aWRlb1BsYXllci5mdWxsc2NyZWVuKCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRnVsbFNjcmVlbiA9IHRydWU7XHJcblx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VFeGl0RnVsbFNjcmVlbigpIHtcclxuXHRcdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ3BvcnRyYWl0LXByaW1hcnknKTtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmV4aXRGdWxsc2NyZWVuKTtcclxuXHRcdFx0XHRcdHZpZGVvUGxheWVyLmV4aXRGdWxsc2NyZWVuKCk7XHJcblx0XHRcdFx0XHR0aGlzLmlzRnVsbFNjcmVlbiA9IGZhbHNlO1xyXG5cdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlT3BlblNvdW5kKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLm9wZW5Tb3VuZCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIub3BlblNvdW5kKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUNsb3NlU291bmQoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2xvc2VTb3VuZCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2xvc2VTb3VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VTdGFydFRhbGsoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RhcnRUYWxrKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFRhbGsodHJ1ZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0b3BUYWxrKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0b3BUYWxrKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wVGFsaygpO1xyXG5cdFx0XHR9LFxuXHRcdFx0c2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cykge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cyk7XG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKGxldmVsKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlVmlkZW9MZXZlbCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2hhbmdlVmlkZW9MZXZlbChsZXZlbCk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogYOa4heaZsOW6puWIh+aNouiHs++8miR7bGV2ZWx9YCxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUNhcHV0dXJlKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmNhcHR1cmVQaWN0dXJlKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5jYXB0dXJlUGljdHVyZSgndGVzdCcsIG51bGwsIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSAnMjAwJykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WbvueJh+S/neWtmOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiYmFzZTY05Zu+54mH5pWw5o2u77yaXCIsIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0YXJ0UmVhbFBsYXlSZWNvcmQoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RhcnRSZWFsUGxheVJlY29yZCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RhcnRSZWFsUGxheVJlY29yZCgocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb01zZyA9IHJlcy5tc2c7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0b3BSZWFsUGxheVJlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUmVhbFBsYXlSZWNvcmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BSZWFsUGxheVJlY29yZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpVcCgpIHsgLy8w77ya5bem77yMMe+8muWPs++8jDLvvJrkuIrvvIwz77ya5LiLXHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMiwgXCJTVEFSVFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6VXBTdG9wKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDIsIFwiU1RPUFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6RG93bigpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigzLCBcIlNUQVJUXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpEb3duU3RvcCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigzLCBcIlNUT1BcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVB0ekxlZnQoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMCwgXCJTVEFSVFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6TGVmdFN0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMCwgXCJTVE9QXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpSaWdodCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigxLCBcIlNUQVJUXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpSaWdodFN0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMSwgXCJTVE9QXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VRdWVyeVJlY29yZCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNJbml0KSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35YWI5Yib5bu65pKt5pS+5ZmoXCIsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RhcnRRdWVyeVJlY29yZEZpbGVzKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXModGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lLCB0aGlzLnN0b3BEYXRlICsgXCIgXCIgKyB0aGlzXHJcblx0XHRcdFx0XHQuc3RvcFRpbWUsIHRoaXMuc2VsZWN0ZWRSYWRpbywgJ2FsbCcsICcwJywgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWbnuaUvueJh+auteafpeivouaIkOWKn1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlY29yZExpc3QgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWbnuaUvueJh+auteafpeivouWksei0pVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkocmVzKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQbGF5YmFja1NlZWtUbygpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wbGF5YmFja1NlZWtUbyk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucGxheWJhY2tTZWVrVG8odGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2soaXRlbSkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2spO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2soaXRlbSwgdGhpcy5zZWxlY3RlZFJhZGlvKTtcclxuXHRcdFx0XHRpZiAodGhpcy5mbG93VGltZXIpIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5mbG93VGltZXIpO1xyXG5cdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmZsb3dUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IHBhcnNlRmxvYXQoci5tc2cpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQbGF5QmFja1N0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wUGxheUJhY2soKTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcclxuXHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gMDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2tQYXVzZSgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wYXVzZSk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucGF1c2UoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2tSZXN1bWUoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucmVzdW1lKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5yZXN1bWUoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0b3BQbGF5QmFja1JlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUGxheUJhY2tSZWNvcmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BQbGF5QmFja1JlY29yZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKHNwZWVkKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZChzcGVlZCk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogYOWIh+aNouiHs++8miR7c3BlZWQ9PTM/JzAuNSc6c3BlZWR95YCN6YCfYCxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmctdG9wOiAyNTBweDtcclxuXHR9XHJcblxyXG5cdC5maXhlZC1jb21wb25lbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LmZ1bGxzY3JlZW4ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdH1cclxuXHJcblx0LnJhZGlvIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHJcblx0LnJhZGlvLWl0ZW0ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

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
/*!*********************************************************************************************************************************!*\
  !*** /Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yangshuang3/Desktop/uni_native/v0.0.1/uniapp_demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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