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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/main.js?{"page":"pages%2Findex%2Fandroidsdk"} ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_androidsdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/androidsdk.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_index_androidsdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_androidsdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/androidsdk'\n        _pages_index_androidsdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_androidsdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBbUU7QUFDbkUsUUFBUSxnRkFBRztBQUNYLFFBQVEsZ0ZBQUc7QUFDWCxRQUFRLGdGQUFHO0FBQ1gsZ0JBQWdCLGdGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9hbmRyb2lkc2RrLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2FuZHJvaWRzZGsnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uni-SDKdemo/uniapp-appsdkdemo/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!********************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?mpType=page ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./androidsdk.nvue?vue&type=template&id=4ec85fcd&mpType=page */ 6);\n/* harmony import */ var _androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./androidsdk.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./androidsdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./androidsdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"2805631b\",\n  false,\n  _androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/androidsdk.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDMEU7QUFDTDtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUVBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9hbmRyb2lkc2RrLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGVjODVmY2QmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FuZHJvaWRzZGsubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmRyb2lkc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2FuZHJvaWRzZGsubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2FuZHJvaWRzZGsubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjgwNTYzMWJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvYW5kcm9pZHNkay5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**************************************************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=template&id=4ec85fcd&mpType=page ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./androidsdk.nvue?vue&type=template&id=4ec85fcd&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_template_id_4ec85fcd_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=template&id=4ec85fcd&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                position: "fixed",
                top: "0",
                left: "0",
                right: "0",
                zIndex: "9",
              },
            },
            [
              _c("UniOpenSDK", {
                ref: "player",
                staticStyle: { width: "100%", height: "500px" },
              }),
              _vm.isFullScreen
                ? _c(
                    "view",
                    {
                      staticStyle: {
                        position: "absolute",
                        top: "200px",
                        zIndex: "99",
                        width: "200rpx",
                        height: "100rpx",
                      },
                    },
                    [
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "200rpx",
                            height: "50rpx",
                            zIndex: "99",
                          },
                          on: { click: _vm.deviceExitFullScreen },
                        },
                        [_vm._v("退出全屏")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "200rpx",
                            height: "50rpx",
                            zIndex: "99",
                          },
                          on: { click: _vm.deviceCaputure },
                        },
                        [_vm._v("截图")]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
            ],
            1
          ),
          !_vm.isFullScreen
            ? _c("view", [
                _c("view", { staticStyle: { marginTop: "220px" } }, [
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
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: { click: _vm.releasePlayer },
                        },
                        [_vm._v("销毁播放器")]
                      ),
                    ],
                    1
                  ),
                  _vm.flowMsg
                    ? _c("view", [
                        _c("u-text", [_vm._v("流量：" + _vm._s(_vm.flowMsg))]),
                      ])
                    : _vm._e(),
                  _c("view", [
                    _c("u-text", [
                      _vm._v("事件回调：" + _vm._s(_vm.onMessage)),
                    ]),
                  ]),
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
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzFoucusIn,
                            touchend: _vm.devicePtzFoucusInStop,
                          },
                        },
                        [_vm._v("放大焦距")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            width: "100rpx",
                            margin: "20rpx 10rpx",
                          },
                          on: {
                            touchstart: _vm.devicePtzFoucusOut,
                            touchend: _vm.devicePtzFoucusOutStop,
                          },
                        },
                        [_vm._v("缩小焦距")]
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
                ]),
              ])
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
/*!********************************************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./androidsdk.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9iLENBQWdCLGdlQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS01LTAhRTpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTUtMSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmRyb2lkc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFFOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUU6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuZHJvaWRzZGsubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar globalEvent = __webpack_provided_uni_dot_requireNativePlugin('globalEvent');\nvar _default = {\n  data: function data() {\n    return {\n      windowWidth: 0,\n      windowHeight: 0,\n      deviceSerial: 'GA3952646',\n      channelNo: 2,\n      isInit: false,\n      validCode: '',\n      isFullScreen: false,\n      selectedRadio: 2,\n      videoMsg: null,\n      pictureMsg: null,\n      flowMsg: null,\n      onMessage: null,\n      flowValue: 0,\n      flowTimer: null,\n      startDate: '2025-06-02',\n      startTime: '14:00:00',\n      stopDate: '2025-06-02',\n      stopTime: '15:00:00',\n      spaceId: '',\n      recordList: []\n    };\n  },\n  onBackPress: function onBackPress(options) {\n    __f__(\"log\", \"返回上一页：\", options, \" at pages/index/androidsdk.nvue:164\");\n    if (options.from === 'navigateBack' || options.from === 'backbutton') {\n      // 从导航返回触发时执行\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/androidsdk.nvue:169\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n      return true;\n    }\n    return false;\n  },\n  onLoad: function onLoad() {\n    var systemInfo = uni.getSystemInfoSync();\n    this.windowWidth = systemInfo.windowWidth;\n    this.windowHeight = systemInfo.windowHeight;\n    plus.screen.lockOrientation('default');\n  },\n  onReady: function onReady() {\n    var _this = this;\n    var videoPlayer = this.$refs.player;\n    globalEvent.addEventListener('onMessage', function (e) {\n      __f__(\"log\", \"onMessage=\" + JSON.stringify(e), \" at pages/index/androidsdk.nvue:187\");\n      var messageKey = Object.keys(e)[0];\n      switch (messageKey) {\n        case 'handlePlaySuccess':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          plus.screen.lockOrientation('landscape-primary');\n          setTimeout(function () {\n            videoPlayer.fullscreen();\n            _this.isFullScreen = true;\n          }, 300);\n          break;\n        case 'handlePlayFail':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkSuccess':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkFail':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkStopSuccess':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkFail':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleSetVideoModeSuccess':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handlePTZSuccess':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handlePTZFail':\n          _this.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n      }\n    });\n    videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, function (res) {\n      if (res.code == '200') {\n        _this.isInit = true;\n        videoPlayer.startRealPlay(function (res) {\n          __f__(\"log\", res, \" at pages/index/androidsdk.nvue:237\");\n          if (_this.flowTimer) {\n            clearInterval(_this.flowTimer);\n            _this.flowTimer = setInterval(function () {\n              videoPlayer.getStreamFlow(function (r) {\n                var unit = parseFloat(r.msg) - _this.flowValue;\n                _this.flowValue = parseFloat(r.msg);\n                _this.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n              });\n            }, 1000);\n          } else {\n            _this.flowTimer = setInterval(function () {\n              videoPlayer.getStreamFlow(function (r) {\n                var unit = parseFloat(r.msg) - _this.flowValue;\n                _this.flowValue = parseFloat(r.msg);\n                _this.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n              });\n            }, 1000);\n          }\n        });\n      }\n    });\n  },\n  onUnload: function onUnload() {\n    plus.screen.lockOrientation('portrait-primary');\n  },\n  methods: {\n    onDeviceSerialChange: function onDeviceSerialChange(e) {\n      this.deviceSerial = e.detail.value;\n    },\n    onChannelNoChange: function onChannelNoChange(e) {\n      this.channelNo = e.detail.value;\n    },\n    onValidCodeChange: function onValidCodeChange(e) {\n      this.validCode = e.detail.value;\n    },\n    radioChange: function radioChange(e) {\n      this.selectedRadio = e.detail.value;\n    },\n    getTimeArray: function getTimeArray() {\n      var timeArr = [];\n      timeArr.push(this.getLoopArray(0, 23));\n      timeArr.push(this.getLoopArray(0, 59));\n      timeArr.push(this.getLoopArray(0, 59));\n      return timeArr;\n    },\n    getLoopArray: function getLoopArray(startNum, endNum) {\n      var array = [];\n      for (var i = startNum; i <= endNum; i++) {\n        i < 10 ? array.push('0' + i) : array.push('' + i);\n      }\n      return array;\n    },\n    /**选择年月日**/bindStartDateChange: function bindStartDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/androidsdk.nvue:293\");\n      this.startDate = e.detail.value;\n    },\n    bindStopDateChange: function bindStopDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/androidsdk.nvue:297\");\n      this.stopDate = e.detail.value;\n    },\n    /**选择时分秒**/bindStartTimeChange: function bindStartTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.startTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    bindStopTimeChange: function bindStopTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.stopTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    createPlayer: function createPlayer() {\n      var _this2 = this;\n      if (this.deviceSerial.length == 0 || this.channelNo.length == 0) {\n        uni.showToast({\n          title: '请先输入设备序列号、通道号',\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, function (res) {\n        if (res.code == '200') {\n          _this2.isInit = true;\n          uni.showToast({\n            title: '创建播放器成功',\n            icon: 'none'\n          });\n        }\n      });\n    },\n    deviceRealPlay: function deviceRealPlay() {\n      var _this3 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlay, \" at pages/index/androidsdk.nvue:336\");\n      videoPlayer.startRealPlay(function (res) {\n        __f__(\"log\", res, \" at pages/index/androidsdk.nvue:338\");\n        if (_this3.flowTimer) {\n          clearInterval(_this3.flowTimer);\n          _this3.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this3.flowValue;\n              _this3.flowValue = parseFloat(r.msg);\n              _this3.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        } else {\n          _this3.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this3.flowValue;\n              _this3.flowValue = parseFloat(r.msg);\n              _this3.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        }\n      });\n    },\n    deviceRealPlayStop: function deviceRealPlayStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlay, \" at pages/index/androidsdk.nvue:361\");\n      videoPlayer.stopRealPlay();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    releasePlayer: function releasePlayer() {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/androidsdk.nvue:370\");\n      });\n    },\n    deviceFullScreen: function deviceFullScreen() {\n      var _this4 = this;\n      plus.screen.lockOrientation('landscape-primary');\n      setTimeout(function () {\n        var videoPlayer = _this4.$refs.player;\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.fullscreen, \" at pages/index/androidsdk.nvue:377\");\n        videoPlayer.fullscreen();\n        _this4.isFullScreen = true;\n      }, 300);\n    },\n    deviceExitFullScreen: function deviceExitFullScreen() {\n      var _this5 = this;\n      plus.screen.lockOrientation('portrait-primary');\n      setTimeout(function () {\n        var videoPlayer = _this5.$refs.player;\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.exitFullscreen, \" at pages/index/androidsdk.nvue:386\");\n        videoPlayer.exitFullscreen();\n        _this5.isFullScreen = false;\n      }, 300);\n    },\n    deviceOpenSound: function deviceOpenSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.openSound, \" at pages/index/androidsdk.nvue:393\");\n      videoPlayer.openSound();\n    },\n    deviceCloseSound: function deviceCloseSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.closeSound, \" at pages/index/androidsdk.nvue:398\");\n      videoPlayer.closeSound();\n    },\n    deviceStartTalk: function deviceStartTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startTalk, \" at pages/index/androidsdk.nvue:403\");\n      videoPlayer.startTalk(true);\n    },\n    deviceStopTalk: function deviceStopTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopTalk, \" at pages/index/androidsdk.nvue:408\");\n      videoPlayer.stopTalk();\n    },\n    deviceChangeVideoLevel: function deviceChangeVideoLevel(level) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changeVideoLevel, \" at pages/index/androidsdk.nvue:413\");\n      videoPlayer.changeVideoLevel(level);\n      uni.showToast({\n        title: \"\\u6E05\\u6670\\u5EA6\\u5207\\u6362\\u81F3\\uFF1A\".concat(level),\n        icon: 'none'\n      });\n    },\n    deviceCaputure: function deviceCaputure() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.capturePicture, \" at pages/index/androidsdk.nvue:422\");\n      videoPlayer.capturePicture('test', null, function (res) {\n        if (res.code == '200') {\n          __f__(\"log\", \"base64图片数据：\", JSON.stringify(res.data), \" at pages/index/androidsdk.nvue:425\");\n        }\n      });\n    },\n    deviceStartRealPlayRecord: function deviceStartRealPlayRecord() {\n      var _this6 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlayRecord, \" at pages/index/androidsdk.nvue:431\");\n      videoPlayer.startRealPlayRecord(function (res) {\n        __f__(\"log\", \"开始录制结果：\", res, \" at pages/index/androidsdk.nvue:433\");\n        if (res.code == '200') {\n          _this6.videoMsg = res.msg;\n        }\n      });\n    },\n    deviceStopRealPlayRecord: function deviceStopRealPlayRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlayRecord, \" at pages/index/androidsdk.nvue:441\");\n      videoPlayer.stopRealPlayRecord();\n    },\n    devicePtzUp: function devicePtzUp() {\n      //0：左，1：右，2：上，3：下，8：物理放大，9：物理缩小\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:446\");\n      videoPlayer.ptzOption(2, \"START\");\n    },\n    devicePtzUpStop: function devicePtzUpStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:451\");\n      videoPlayer.ptzOption(2, \"STOP\");\n    },\n    devicePtzDown: function devicePtzDown() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:456\");\n      videoPlayer.ptzOption(3, \"START\");\n    },\n    devicePtzDownStop: function devicePtzDownStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:461\");\n      videoPlayer.ptzOption(3, \"STOP\");\n    },\n    devicePtzLeft: function devicePtzLeft() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:466\");\n      videoPlayer.ptzOption(0, \"START\");\n    },\n    devicePtzLeftStop: function devicePtzLeftStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:471\");\n      videoPlayer.ptzOption(0, \"STOP\");\n    },\n    devicePtzRight: function devicePtzRight() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:476\");\n      videoPlayer.ptzOption(1, \"START\");\n    },\n    devicePtzRightStop: function devicePtzRightStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:481\");\n      videoPlayer.ptzOption(1, \"STOP\");\n    },\n    devicePtzFoucusIn: function devicePtzFoucusIn() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:487\");\n      videoPlayer.ptzOption(10, \"START\");\n    },\n    devicePtzFoucusInStop: function devicePtzFoucusInStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:492\");\n      videoPlayer.ptzOption(10, \"STOP\");\n    },\n    devicePtzFoucusOut: function devicePtzFoucusOut() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:497\");\n      videoPlayer.ptzOption(11, \"START\");\n    },\n    devicePtzFoucusOutStop: function devicePtzFoucusOutStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/androidsdk.nvue:502\");\n      videoPlayer.ptzOption(11, \"STOP\");\n    },\n    deviceQueryRecord: function deviceQueryRecord() {\n      var _this7 = this;\n      if (!this.isInit) {\n        uni.showToast({\n          title: \"请先创建播放器\",\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startQueryRecordFiles, \" at pages/index/androidsdk.nvue:514\");\n      videoPlayer.startQueryRecordFiles(this.startDate + \" \" + this.startTime, this.stopDate + \" \" + this.stopTime, this.selectedRadio, 'all', '0', function (res) {\n        __f__(\"log\", res, \" at pages/index/androidsdk.nvue:517\");\n        if (res.code == '200') {\n          uni.showToast({\n            title: \"回放片段查询成功\",\n            icon: 'none'\n          });\n          _this7.recordList = res.data;\n        } else {\n          uni.showModal({\n            title: \"回放片段查询失败\",\n            content: JSON.stringify(res)\n          });\n        }\n      });\n    },\n    devicePlaybackSeekTo: function devicePlaybackSeekTo() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.playbackSeekTo, \" at pages/index/androidsdk.nvue:534\");\n      videoPlayer.playbackSeekTo(this.startDate + \" \" + this.startTime);\n    },\n    devicePlayBack: function devicePlayBack(item) {\n      var _this8 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBack, \" at pages/index/androidsdk.nvue:539\");\n      videoPlayer.startPlayBack(item, this.selectedRadio);\n      if (this.flowTimer) {\n        clearInterval(this.flowTimer);\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      } else {\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      }\n    },\n    devicePlayBackStop: function devicePlayBackStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBack, \" at pages/index/androidsdk.nvue:562\");\n      videoPlayer.stopPlayBack();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    devicePlayBackPause: function devicePlayBackPause() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.pause, \" at pages/index/androidsdk.nvue:570\");\n      videoPlayer.pause();\n    },\n    devicePlayBackResume: function devicePlayBackResume() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.resume, \" at pages/index/androidsdk.nvue:575\");\n      videoPlayer.resume();\n    },\n    deviceStartPlayBackRecord: function deviceStartPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBackRecord, \" at pages/index/androidsdk.nvue:580\");\n      videoPlayer.startPlayBackRecord();\n    },\n    deviceStopPlayBackRecord: function deviceStopPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBackRecord, \" at pages/index/androidsdk.nvue:585\");\n      videoPlayer.stopPlayBackRecord();\n    },\n    deviceChangePlayBackSpeed: function deviceChangePlayBackSpeed(speed) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changePlayBackSpeed, \" at pages/index/androidsdk.nvue:590\");\n      videoPlayer.changePlayBackSpeed(speed);\n      uni.showToast({\n        title: \"\\u5207\\u6362\\u81F3\\uFF1A\".concat(speed == 3 ? '0.5' : speed, \"\\u500D\\u901F\"),\n        icon: 'none'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvYW5kcm9pZHNkay5udnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRldmljZVNlcmlhbCIsImNoYW5uZWxObyIsImlzSW5pdCIsInZhbGlkQ29kZSIsImlzRnVsbFNjcmVlbiIsInNlbGVjdGVkUmFkaW8iLCJ2aWRlb01zZyIsInBpY3R1cmVNc2ciLCJmbG93TXNnIiwib25NZXNzYWdlIiwiZmxvd1ZhbHVlIiwiZmxvd1RpbWVyIiwic3RhcnREYXRlIiwic3RhcnRUaW1lIiwic3RvcERhdGUiLCJzdG9wVGltZSIsInNwYWNlSWQiLCJyZWNvcmRMaXN0Iiwib25CYWNrUHJlc3MiLCJ2aWRlb1BsYXllciIsInVuaSIsInVybCIsIm9uTG9hZCIsInBsdXMiLCJvblJlYWR5IiwiZ2xvYmFsRXZlbnQiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIm9uVW5sb2FkIiwibWV0aG9kcyIsIm9uRGV2aWNlU2VyaWFsQ2hhbmdlIiwib25DaGFubmVsTm9DaGFuZ2UiLCJvblZhbGlkQ29kZUNoYW5nZSIsInJhZGlvQ2hhbmdlIiwiZ2V0VGltZUFycmF5IiwidGltZUFyciIsImdldExvb3BBcnJheSIsImkiLCJiaW5kU3RhcnREYXRlQ2hhbmdlIiwiYmluZFN0b3BEYXRlQ2hhbmdlIiwiYmluZFN0YXJ0VGltZUNoYW5nZSIsImJpbmRTdG9wVGltZUNoYW5nZSIsImNyZWF0ZVBsYXllciIsInRpdGxlIiwiaWNvbiIsImRldmljZVJlYWxQbGF5IiwiZGV2aWNlUmVhbFBsYXlTdG9wIiwicmVsZWFzZVBsYXllciIsImRldmljZUZ1bGxTY3JlZW4iLCJkZXZpY2VFeGl0RnVsbFNjcmVlbiIsImRldmljZU9wZW5Tb3VuZCIsImRldmljZUNsb3NlU291bmQiLCJkZXZpY2VTdGFydFRhbGsiLCJkZXZpY2VTdG9wVGFsayIsImRldmljZUNoYW5nZVZpZGVvTGV2ZWwiLCJkZXZpY2VDYXB1dHVyZSIsImRldmljZVN0YXJ0UmVhbFBsYXlSZWNvcmQiLCJkZXZpY2VTdG9wUmVhbFBsYXlSZWNvcmQiLCJkZXZpY2VQdHpVcCIsImRldmljZVB0elVwU3RvcCIsImRldmljZVB0ekRvd24iLCJkZXZpY2VQdHpEb3duU3RvcCIsImRldmljZVB0ekxlZnQiLCJkZXZpY2VQdHpMZWZ0U3RvcCIsImRldmljZVB0elJpZ2h0IiwiZGV2aWNlUHR6UmlnaHRTdG9wIiwiZGV2aWNlUHR6Rm91Y3VzSW4iLCJkZXZpY2VQdHpGb3VjdXNJblN0b3AiLCJkZXZpY2VQdHpGb3VjdXNPdXQiLCJkZXZpY2VQdHpGb3VjdXNPdXRTdG9wIiwiZGV2aWNlUXVlcnlSZWNvcmQiLCJjb250ZW50IiwiZGV2aWNlUGxheWJhY2tTZWVrVG8iLCJkZXZpY2VQbGF5QmFjayIsImRldmljZVBsYXlCYWNrU3RvcCIsImRldmljZVBsYXlCYWNrUGF1c2UiLCJkZXZpY2VQbGF5QmFja1Jlc3VtZSIsImRldmljZVN0YXJ0UGxheUJhY2tSZWNvcmQiLCJkZXZpY2VTdG9wUGxheUJhY2tSZWNvcmQiLCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0lBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0E7TUFDQTtNQUNBO01BQ0FDO1FBQ0E7UUFDQUM7VUFDQUM7UUFDQTtNQUNBO01BQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7RUFDQTtFQUNBQztJQUFBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0E7UUFDQTtVQUNBO1VBQ0FGO1VBQ0FHO1lBQ0FQO1lBQ0E7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtVQUNBO01BQUE7SUFFQTtJQUVBQTtNQUNBO1FBQ0E7UUFDQUE7VUFDQTtVQUNBO1lBQ0FRO1lBQ0E7Y0FDQVI7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Y0FDQTtZQUNBO1VBQ0E7WUFDQTtjQUNBQTtnQkFDQTtnQkFDQTtnQkFDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FTO0lBQ0FMO0VBQ0E7RUFDQU07SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBRUFDO01BQ0E7TUFDQUM7TUFDQUE7TUFDQUE7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBLFdBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtJQUNBO0lBQ0EsV0FDQUM7TUFDQTtNQUNBLDBFQUNBLE9BQ0FMLCtEQUNBQTtJQUNBO0lBQ0FNO01BQ0E7TUFDQSx5RUFDQSxPQUNBTiwrREFDQUE7SUFDQTtJQUNBTztNQUFBO01BQ0E7UUFDQXRCO1VBQ0F1QjtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0F6QjtRQUNBO1VBQ0E7VUFDQUM7WUFDQXVCO1lBQ0FDO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUNBO01BQ0E7TUFDQTFCO1FBQ0E7UUFDQTtVQUNBUTtVQUNBO1lBQ0FSO2NBQ0E7Y0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO1VBQ0E7WUFDQUE7Y0FDQTtjQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0EyQjtNQUNBO01BQ0E7TUFDQTNCO01BQ0FRO01BQ0E7TUFDQTtJQUNBO0lBQ0FvQjtNQUNBO01BQ0E1QjtRQUNBO01BQ0E7SUFDQTtJQUNBNkI7TUFBQTtNQUNBekI7TUFDQUc7UUFDQTtRQUNBO1FBQ0FQO1FBQ0E7TUFDQTtJQUNBO0lBQ0E4QjtNQUFBO01BQ0ExQjtNQUNBRztRQUNBO1FBQ0E7UUFDQVA7UUFDQTtNQUNBO0lBQ0E7SUFDQStCO01BQ0E7TUFDQTtNQUNBL0I7SUFDQTtJQUNBZ0M7TUFDQTtNQUNBO01BQ0FoQztJQUNBO0lBQ0FpQztNQUNBO01BQ0E7TUFDQWpDO0lBQ0E7SUFDQWtDO01BQ0E7TUFDQTtNQUNBbEM7SUFDQTtJQUNBbUM7TUFDQTtNQUNBO01BQ0FuQztNQUNBQztRQUNBdUI7UUFDQUM7TUFDQTtJQUNBO0lBQ0FXO01BQ0E7TUFDQTtNQUNBcEM7UUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FxQztNQUFBO01BQ0E7TUFDQTtNQUNBckM7UUFDQTtRQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQXNDO01BQ0E7TUFDQTtNQUNBdEM7SUFDQTtJQUNBdUM7TUFBQTtNQUNBO01BQ0E7TUFDQXZDO0lBQ0E7SUFDQXdDO01BQ0E7TUFDQTtNQUNBeEM7SUFDQTtJQUNBeUM7TUFDQTtNQUNBO01BQ0F6QztJQUNBO0lBQ0EwQztNQUNBO01BQ0E7TUFDQTFDO0lBQ0E7SUFDQTJDO01BQ0E7TUFDQTtNQUNBM0M7SUFDQTtJQUNBNEM7TUFDQTtNQUNBO01BQ0E1QztJQUNBO0lBQ0E2QztNQUNBO01BQ0E7TUFDQTdDO0lBQ0E7SUFDQThDO01BQ0E7TUFDQTtNQUNBOUM7SUFDQTtJQUVBK0M7TUFDQTtNQUNBO01BQ0EvQztJQUNBO0lBQ0FnRDtNQUNBO01BQ0E7TUFDQWhEO0lBQ0E7SUFDQWlEO01BQ0E7TUFDQTtNQUNBakQ7SUFDQTtJQUNBa0Q7TUFDQTtNQUNBO01BQ0FsRDtJQUNBO0lBQ0FtRDtNQUFBO01BQ0E7UUFDQWxEO1VBQ0F1QjtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXpCLG9HQUNBSjtRQUNBO1FBQ0E7VUFDQUs7WUFDQXVCO1lBQ0FDO1VBQ0E7VUFDQTtRQUNBO1VBQ0F4QjtZQUNBdUI7WUFDQTRCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0FyRDtJQUNBO0lBQ0FzRDtNQUFBO01BQ0E7TUFDQTtNQUNBdEQ7TUFDQTtRQUNBUTtRQUNBO1VBQ0FSO1lBQ0E7WUFDQTtZQUNBO1VBQ0E7UUFDQTtNQUNBO1FBQ0E7VUFDQUE7WUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBdUQ7TUFDQTtNQUNBO01BQ0F2RDtNQUNBUTtNQUNBO01BQ0E7SUFDQTtJQUNBZ0Q7TUFDQTtNQUNBO01BQ0F4RDtJQUNBO0lBQ0F5RDtNQUNBO01BQ0E7TUFDQXpEO0lBQ0E7SUFDQTBEO01BQ0E7TUFDQTtNQUNBMUQ7SUFDQTtJQUNBMkQ7TUFDQTtNQUNBO01BQ0EzRDtJQUNBO0lBQ0E0RDtNQUNBO01BQ0E7TUFDQTVEO01BQ0FDO1FBQ0F1QjtRQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBzdHlsZT1cImRpc3BsYXk6IGZsZXg7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxMDAlO1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmaXhlZC1jb21wb25lbnRcIiBzdHlsZT1cInBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwO3JpZ2h0OiAwO3otaW5kZXg6IDk7XCI+XHJcblx0XHRcdDxVbmlPcGVuU0RLIHJlZj1cInBsYXllclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNTAwcHg7XCI+PC9VbmlPcGVuU0RLPlxyXG5cdFx0XHQ8dmlldyB2LWlmPVwiaXNGdWxsU2NyZWVuXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAyMDBweDt6LWluZGV4OiA5OTt3aWR0aDogMjAwcnB4O2hlaWdodDogMTAwcnB4O1wiPlxyXG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlRXhpdEZ1bGxTY3JlZW5cIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7aGVpZ2h0OiA1MHJweDsgei1pbmRleDogOTk7XCI+6YCA5Ye65YWo5bGPPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDYXB1dHVyZVwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDtoZWlnaHQ6IDUwcnB4OyB6LWluZGV4OiA5OTtcIj7miKrlm748L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IHYtaWY9XCIhaXNGdWxsU2NyZWVuXCI+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luLXRvcDogMjIwcHg7XCI+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXorr7lpIfluo/liJflj7dcIiA6dmFsdWU9XCJkZXZpY2VTZXJpYWxcIiBAaW5wdXQ9XCJvbkRldmljZVNlcmlhbENoYW5nZVwiIHN0eWxlPVwiaGVpZ2h0OiAzMnB4O2JvcmRlcjogMXB4IHNvbGlkICNhYWE7bWFyZ2luLWJvdHRvbTogMTBweDtcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6YCa6YGT5Y+3XCIgOnZhbHVlPVwiY2hhbm5lbE5vXCIgQGlucHV0PVwib25DaGFubmVsTm9DaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogMzJweDtib3JkZXI6IDFweCBzb2xpZCAjYWFhO21hcmdpbi1ib3R0b206IDEwcHg7XCIgLz5cclxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiIDp2YWx1ZT1cInZhbGlkQ29kZVwiIEBpbnB1dD1cIm9uVmFsaWRDb2RlQ2hhbmdlXCIgc3R5bGU9XCJoZWlnaHQ6IDMycHg7Ym9yZGVyOiAxcHggc29saWQgI2FhYTttYXJnaW4tYm90dG9tOiAxMHB4O1wiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImNyZWF0ZVBsYXllclwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7liJvlu7rmkq3mlL7lmag8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUmVhbFBsYXlcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDIwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5byA5aeL6aKE6KeI5pKt5pS+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVJlYWxQbGF5U3RvcFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7nu5PmnZ/pooTop4jmkq3mlL48L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwicmVsZWFzZVBsYXllclwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7plIDmr4Hmkq3mlL7lmag8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZmxvd01zZ1wiPua1gemHj++8mnt7Zmxvd01zZ319PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3PuS6i+S7tuWbnuiwg++8mnt7b25NZXNzYWdlfX08L3ZpZXc+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlRnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuWFqOWxjzwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VFeGl0RnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPumAgOWHuuWFqOWxjzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZU9wZW5Tb3VuZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWQr+WjsOmfszwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDbG9zZVNvdW5kXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5aOw6Z+zPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RhcnRUYWxrXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5byA5ZCv5a+56K6yPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVN0b3BUYWxrXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWz6Zet5a+56K6yPC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwibWFyZ2luOiAzNXJweCAwO1wiPua4heaZsOW6pu+8mjwvdGV4dD5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgzKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPui2hea4hTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDIpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+6auY5riFPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMSlcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lnYfooaE8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgwKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPua1geeVhTwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVN0YXJ0UmVhbFBsYXlSZWNvcmRcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lvIDlp4vlvZXliLY8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RvcFJlYWxQbGF5UmVjb3JkXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+57uT5p2f5b2V5Yi2PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInZpZGVvTXNnXCIgc3R5bGU9XCJtYXJnaW46IDM1cnB4IDAgMTBycHg7ZGlzcGxheTogYmxvY2s7XCI+5b2V5YOP5paH5Lu26Lev5b6E77yae3t2aWRlb01zZ319PC92aWV3PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNhcHV0dXJlXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5oiq5Zu+PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInBpY3R1cmVNc2dcIiBzdHlsZT1cIm1hcmdpbjogMzVycHggMCAxMHJweDtkaXNwbGF5OiBibG9jaztcIj7lm77niYfmlofku7bot6/lvoTvvJp7e3BpY3R1cmVNc2d9fTwvdmlldz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW46IDM1cnB4IDA7XCI+5LqR5Y+w77yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAdG91Y2hzdGFydD1cImRldmljZVB0elVwXCIgQHRvdWNoZW5kPVwiZGV2aWNlUHR6VXBTdG9wXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5LiKPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6RG93blwiIEB0b3VjaGVuZD1cImRldmljZVB0ekRvd25TdG9wXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5LiLPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6TGVmdFwiIEB0b3VjaGVuZD1cImRldmljZVB0ekxlZnRTdG9wXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5bemPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6UmlnaHRcIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpSaWdodFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lj7M8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpGb3VjdXNJblwiIEB0b3VjaGVuZD1cImRldmljZVB0ekZvdWN1c0luU3RvcFwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuaUvuWkp+eEpui3nTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAdG91Y2hzdGFydD1cImRldmljZVB0ekZvdWN1c091dFwiIEB0b3VjaGVuZD1cImRldmljZVB0ekZvdWN1c091dFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7nvKnlsI/nhKbot508L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbjogMjBweCAwO1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dD7lm57mlL7nsbvlnovvvJo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxyYWRpby1ncm91cCBAY2hhbmdlPVwicmFkaW9DaGFuZ2VcIiBjbGFzcz1cInJhZGlvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwicmFkaW8taXRlbVwiIDprZXk9XCIyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwiMlwiIDpjaGVja2VkPVwic2VsZWN0ZWRSYWRpbz09MlwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5TROWNoTwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cInJhZGlvLWl0ZW1cIiA6a2V5PVwiMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxyYWRpbyB2YWx1ZT1cIjBcIiA6Y2hlY2tlZD1cInNlbGVjdGVkUmFkaW89PTBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+5LqR5a2Y5YKoPC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvcmFkaW8tZ3JvdXA+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PHBpY2tlciBtb2RlPVwiZGF0ZVwiIDp2YWx1ZT1cInN0YXJ0RGF0ZVwiIGZvcm1hdD1cInl5eXktTU0tZGRcIiBAY2hhbmdlPVwiYmluZFN0YXJ0RGF0ZUNoYW5nZVwiIHN0eWxlPVwiYm9yZGVyOiAxcnB4IHNvbGlkICNhYWE7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3PuW8gOWni+aXpeacn++8mnt7c3RhcnREYXRlfX08L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHJcblx0XHRcdFx0XHQ8cGlja2VyIG1vZGU9XCJtdWx0aVNlbGVjdG9yXCIgQGNoYW5nZT1cImJpbmRTdGFydFRpbWVDaGFuZ2UoJGV2ZW50KVwiIDpyYW5nZT1cImdldFRpbWVBcnJheSgpXCIgOnZhbHVlPVwic3RhcnRUaW1lLnNwbGl0KCc6JylcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7Ym9yZGVyOiAxcnB4IHNvbGlkICNhYWE7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hbWVcIiB2LWlmPVwic3RhcnRUaW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXc+5byA5aeL5pe26Ze077yae3tzdGFydFRpbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wbGFjZWhvbGRlclwiIHYtZWxzZT7lvIDlp4vml7bpl7Q8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHJcblx0XHRcdFx0XHQ8cGlja2VyIG1vZGU9XCJkYXRlXCIgOnZhbHVlPVwic3RvcERhdGVcIiBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCIgQGNoYW5nZT1cImJpbmRTdG9wRGF0ZUNoYW5nZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXc+57uT5p2f5pel5pyf77yae3tzdG9wRGF0ZX19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC9waWNrZXI+XHJcblxyXG5cdFx0XHRcdFx0PHBpY2tlciBtb2RlPVwibXVsdGlTZWxlY3RvclwiIEBjaGFuZ2U9XCJiaW5kU3RvcFRpbWVDaGFuZ2UoJGV2ZW50KVwiIDpyYW5nZT1cImdldFRpbWVBcnJheSgpXCIgOnZhbHVlPVwic3RvcFRpbWUuc3BsaXQoJzonKVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmFtZVwiIHYtaWY9XCJzdG9wVGltZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3Pue7k+adn+aXtumXtO+8mnt7c3RvcFRpbWV9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wbGFjZWhvbGRlclwiIHYtZWxzZT7nu5PmnZ/ml7bpl7Q8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3BpY2tlcj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVF1ZXJ5UmVjb3JkXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7XCI+5p+l6K+i5b2V5YOP54mH5q61PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXliYWNrU2Vla1RvXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7XCI+5Zue5pS+6Lez6L2s6Iez5byA5aeL5pe26Ze0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrUGF1c2VcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5pqC5YGc5Zue5pS+PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrUmVzdW1lXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAzMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPuaBouWkjeWbnuaUvjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VQbGF5QmFja1N0b3BcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+57uT5p2f5Zue5pS+PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJtYXJnaW46IDM1cnB4IDA7XCI+5YCN6YCf77yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKDMpXCIgc3R5bGU9XCJ3aWR0aDogODBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj4wLjU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCgxKVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKDIpXCIgc3R5bGU9XCJ3aWR0aDogODBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj4yPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoNClcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZCg4KVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+ODwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKDE2KVwiIHN0eWxlPVwid2lkdGg6IDgwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+MTY8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInJlY29yZExpc3QubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdDx0ZXh0PuWbnuaUvueJh+aute+8mjwvdGV4dD5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiaXRlbSBpbiByZWNvcmRMaXN0XCI+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheUJhY2soaXRlbSlcIiBzdHlsZT1cIm1hcmdpbjogMTBycHggMjBycHg7d2lkdGg6IDcwMHJweDtcIj57e2l0ZW0uc3RhcnRUaW1lfX0gfiB7e2l0ZW0uZW5kVGltZX19PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBnbG9iYWxFdmVudCA9IHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luKCdnbG9iYWxFdmVudCcpO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdGRldmljZVNlcmlhbDogJ0dBMzk1MjY0NicsXHJcblx0XHRcdFx0Y2hhbm5lbE5vOiAyLFxyXG5cdFx0XHRcdGlzSW5pdDogZmFsc2UsXHJcblx0XHRcdFx0dmFsaWRDb2RlOiAnJyxcclxuXHRcdFx0XHRpc0Z1bGxTY3JlZW46IGZhbHNlLFxyXG5cdFx0XHRcdHNlbGVjdGVkUmFkaW86IDIsXHJcblx0XHRcdFx0dmlkZW9Nc2c6IG51bGwsXHJcblx0XHRcdFx0cGljdHVyZU1zZzogbnVsbCxcclxuXHRcdFx0XHRmbG93TXNnOiBudWxsLFxyXG5cdFx0XHRcdG9uTWVzc2FnZTogbnVsbCxcclxuXHRcdFx0XHRmbG93VmFsdWU6IDAsXHJcblx0XHRcdFx0Zmxvd1RpbWVyOiBudWxsLFxyXG5cdFx0XHRcdHN0YXJ0RGF0ZTogJzIwMjUtMDYtMDInLFxyXG5cdFx0XHRcdHN0YXJ0VGltZTogJzE0OjAwOjAwJyxcclxuXHRcdFx0XHRzdG9wRGF0ZTogJzIwMjUtMDYtMDInLFxyXG5cdFx0XHRcdHN0b3BUaW1lOiAnMTU6MDA6MDAnLFxyXG5cdFx0XHRcdHNwYWNlSWQ6ICcnLFxyXG5cdFx0XHRcdHJlY29yZExpc3Q6IFtdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkJhY2tQcmVzcyhvcHRpb25zKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi6L+U5Zue5LiK5LiA6aG177yaXCIsIG9wdGlvbnMpO1xyXG5cdFx0XHRpZiAob3B0aW9ucy5mcm9tID09PSAnbmF2aWdhdGVCYWNrJyB8fCBvcHRpb25zLmZyb20gPT09ICdiYWNrYnV0dG9uJykge1xyXG5cdFx0XHRcdC8vIOS7juWvvOiIqui/lOWbnuinpuWPkeaXtuaJp+ihjFxyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnJlbGVhc2UoKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmkq3mlL7lmajplIDmr4FcIiwgcmVzKTtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiAnLi9pbmRleCdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdGNvbnN0IHN5c3RlbUluZm8gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHN5c3RlbUluZm8ud2luZG93V2lkdGg7XHJcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gc3lzdGVtSW5mby53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbignZGVmYXVsdCcpO1xyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdvbk1lc3NhZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwib25NZXNzYWdlPVwiICsgSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2VLZXkgPSBPYmplY3Qua2V5cyhlKVswXTtcclxuXHRcdFx0XHRzd2l0Y2ggKG1lc3NhZ2VLZXkpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ2hhbmRsZVBsYXlTdWNjZXNzJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XHJcblx0XHRcdFx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbignbGFuZHNjYXBlLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZnVsbHNjcmVlbigpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSwgMzAwKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdoYW5kbGVQbGF5RmFpbCc6XHJcblx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdoYW5kbGVUYWxrU3VjY2Vzcyc6XHJcblx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdoYW5kbGVUYWxrRmFpbCc6XHJcblx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdoYW5kbGVUYWxrU3RvcFN1Y2Nlc3MnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0ubXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAnaGFuZGxlVGFsa0ZhaWwnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0ubXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0Y2FzZSAnaGFuZGxlU2V0VmlkZW9Nb2RlU3VjY2Vzcyc6XHJcblx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRjYXNlICdoYW5kbGVQVFpTdWNjZXNzJzpcclxuXHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdGNhc2UgJ2hhbmRsZVBUWkZhaWwnOlxyXG5cdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0ubXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHZpZGVvUGxheWVyLmNyZWF0ZVBsYXllcih0aGlzLmRldmljZVNlcmlhbCwgdGhpcy5jaGFubmVsTm8sIHRoaXMudmFsaWRDb2RlLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlcy5jb2RlID09ICcyMDAnKSB7XHJcblx0XHRcdFx0XHR0aGlzLmlzSW5pdCA9IHRydWU7XHJcblx0XHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5KChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZmxvd1RpbWVyKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWRlb1BsYXllci5nZXRTdHJlYW1GbG93KChyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93TXNnID0gcGFyc2VGbG9hdCh1bml0IC8gMTAyNCkudG9GaXhlZCgyKSArICdrL3MnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpIHtcclxuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdwb3J0cmFpdC1wcmltYXJ5Jyk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbkRldmljZVNlcmlhbENoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5kZXZpY2VTZXJpYWwgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DaGFubmVsTm9DaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMuY2hhbm5lbE5vID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVmFsaWRDb2RlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnZhbGlkQ29kZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyYWRpb0NoYW5nZShlKSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RlZFJhZGlvID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRnZXRUaW1lQXJyYXkoKSB7XHJcblx0XHRcdFx0bGV0IHRpbWVBcnIgPSBbXVxyXG5cdFx0XHRcdHRpbWVBcnIucHVzaCh0aGlzLmdldExvb3BBcnJheSgwLCAyMykpXHJcblx0XHRcdFx0dGltZUFyci5wdXNoKHRoaXMuZ2V0TG9vcEFycmF5KDAsIDU5KSlcclxuXHRcdFx0XHR0aW1lQXJyLnB1c2godGhpcy5nZXRMb29wQXJyYXkoMCwgNTkpKVxyXG5cdFx0XHRcdHJldHVybiB0aW1lQXJyO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRMb29wQXJyYXkoc3RhcnROdW0sIGVuZE51bSkge1xyXG5cdFx0XHRcdGxldCBhcnJheSA9IFtdO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSBzdGFydE51bTsgaSA8PSBlbmROdW07IGkrKykge1xyXG5cdFx0XHRcdFx0aSA8IDEwID8gYXJyYXkucHVzaCgnMCcgKyBpKSA6IGFycmF5LnB1c2goJycgKyBpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGFycmF5O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvKirpgInmi6nlubTmnIjml6UqKi9cclxuXHRcdFx0YmluZFN0YXJ0RGF0ZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMuc3RhcnREYXRlID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGJpbmRTdG9wRGF0ZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcERhdGUgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Lyoq6YCJ5oup5pe25YiG56eSKiovXHJcblx0XHRcdGJpbmRTdGFydFRpbWVDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdGxldCB0aW1lQXJyID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdFx0dGhpcy5zdGFydFRpbWUgPSAodGltZUFyclswXSA8IDEwID8gJzAnICsgdGltZUFyclswXSA6ICcnICsgdGltZUFyclswXSkgK1xyXG5cdFx0XHRcdFx0JzonICtcclxuXHRcdFx0XHRcdCh0aW1lQXJyWzFdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzFdIDogJycgKyB0aW1lQXJyWzFdKSArICc6JyArXHJcblx0XHRcdFx0XHQodGltZUFyclsyXSA8IDEwID8gJzAnICsgdGltZUFyclsyXSA6ICcnICsgdGltZUFyclsyXSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YmluZFN0b3BUaW1lQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRsZXQgdGltZUFyciA9IGUuZGV0YWlsLnZhbHVlO1xyXG5cdFx0XHRcdHRoaXMuc3RvcFRpbWUgPSAodGltZUFyclswXSA8IDEwID8gJzAnICsgdGltZUFyclswXSA6ICcnICsgdGltZUFyclswXSkgK1xyXG5cdFx0XHRcdFx0JzonICtcclxuXHRcdFx0XHRcdCh0aW1lQXJyWzFdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzFdIDogJycgKyB0aW1lQXJyWzFdKSArICc6JyArXHJcblx0XHRcdFx0XHQodGltZUFyclsyXSA8IDEwID8gJzAnICsgdGltZUFyclsyXSA6ICcnICsgdGltZUFyclsyXSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3JlYXRlUGxheWVyKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmRldmljZVNlcmlhbC5sZW5ndGggPT0gMCB8fCB0aGlzLmNoYW5uZWxOby5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6K+35YWI6L6T5YWl6K6+5aSH5bqP5YiX5Y+344CB6YCa6YGT5Y+3JyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLmNyZWF0ZVBsYXllcih0aGlzLmRldmljZVNlcmlhbCwgdGhpcy5jaGFubmVsTm8sIHRoaXMudmFsaWRDb2RlLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0luaXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WIm+W7uuaSreaUvuWZqOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVJlYWxQbGF5KCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXkpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXkoKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmZsb3dUaW1lcikge1xyXG5cdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VSZWFsUGxheVN0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5KTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wUmVhbFBsYXkoKTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcclxuXHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gMDtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVsZWFzZVBsYXllcigpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5yZWxlYXNlKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5Zmo6ZSA5q+BXCIsIHJlcyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUZ1bGxTY3JlZW4oKSB7XHJcblx0XHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdsYW5kc2NhcGUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5mdWxsc2NyZWVuKTtcclxuXHRcdFx0XHRcdHZpZGVvUGxheWVyLmZ1bGxzY3JlZW4oKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcclxuXHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZUV4aXRGdWxsU2NyZWVuKCkge1xyXG5cdFx0XHRcdHBsdXMuc2NyZWVuLmxvY2tPcmllbnRhdGlvbigncG9ydHJhaXQtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5leGl0RnVsbHNjcmVlbik7XHJcblx0XHRcdFx0XHR2aWRlb1BsYXllci5leGl0RnVsbHNjcmVlbigpO1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcclxuXHRcdFx0XHR9LCAzMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZU9wZW5Tb3VuZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5vcGVuU291bmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLm9wZW5Tb3VuZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VDbG9zZVNvdW5kKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmNsb3NlU291bmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLmNsb3NlU291bmQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlU3RhcnRUYWxrKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0VGFsayk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RhcnRUYWxrKHRydWUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VTdG9wVGFsaygpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wVGFsayk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFRhbGsoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbChsZXZlbCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmNoYW5nZVZpZGVvTGV2ZWwpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLmNoYW5nZVZpZGVvTGV2ZWwobGV2ZWwpO1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IGDmuIXmmbDluqbliIfmjaLoh7PvvJoke2xldmVsfWAsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VDYXB1dHVyZSgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5jYXB0dXJlUGljdHVyZSk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2FwdHVyZVBpY3R1cmUoJ3Rlc3QnLCBudWxsLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJiYXNlNjTlm77niYfmlbDmja7vvJpcIiwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5UmVjb3JkKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5UmVjb3JkKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5byA5aeL5b2V5Yi257uT5p6c77yaXCIsIHJlcyk7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy52aWRlb01zZyA9IHJlcy5tc2c7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0b3BSZWFsUGxheVJlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUmVhbFBsYXlSZWNvcmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BSZWFsUGxheVJlY29yZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpVcCgpIHsgLy8w77ya5bem77yMMe+8muWPs++8jDLvvJrkuIrvvIwz77ya5LiL77yMOO+8mueJqeeQhuaUvuWkp++8jDnvvJrniannkIbnvKnlsI9cclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigyLCBcIlNUQVJUXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpVcFN0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMiwgXCJTVE9QXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpEb3duKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDMsIFwiU1RBUlRcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVB0ekRvd25TdG9wKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDMsIFwiU1RPUFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6TGVmdCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigwLCBcIlNUQVJUXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQdHpMZWZ0U3RvcCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigwLCBcIlNUT1BcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVB0elJpZ2h0KCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDEsIFwiU1RBUlRcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVB0elJpZ2h0U3RvcCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigxLCBcIlNUT1BcIik7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRkZXZpY2VQdHpGb3VjdXNJbigpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigxMCwgXCJTVEFSVFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6Rm91Y3VzSW5TdG9wKCkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDEwLCBcIlNUT1BcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVB0ekZvdWN1c091dCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigxMSwgXCJTVEFSVFwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUHR6Rm91Y3VzT3V0U3RvcCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigxMSwgXCJTVE9QXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VRdWVyeVJlY29yZCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuaXNJbml0KSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwi6K+35YWI5Yib5bu65pKt5pS+5ZmoXCIsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RhcnRRdWVyeVJlY29yZEZpbGVzKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXModGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lLCB0aGlzLnN0b3BEYXRlICsgXCIgXCIgKyB0aGlzXHJcblx0XHRcdFx0XHQuc3RvcFRpbWUsIHRoaXMuc2VsZWN0ZWRSYWRpbywgJ2FsbCcsICcwJywgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWbnuaUvueJh+auteafpeivouaIkOWKn1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlY29yZExpc3QgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuWbnuaUvueJh+auteafpeivouWksei0pVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkocmVzKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQbGF5YmFja1NlZWtUbygpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wbGF5YmFja1NlZWtUbyk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucGxheWJhY2tTZWVrVG8odGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2soaXRlbSkge1xyXG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2spO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2soaXRlbSwgdGhpcy5zZWxlY3RlZFJhZGlvKTtcclxuXHRcdFx0XHRpZiAodGhpcy5mbG93VGltZXIpIHtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5mbG93VGltZXIpO1xyXG5cdFx0XHRcdFx0dGhpcy5mbG93VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSBwYXJzZUZsb2F0KHIubXNnKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmZsb3dUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IHBhcnNlRmxvYXQoci5tc2cpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0sIDEwMDApXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VQbGF5QmFja1N0b3AoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wUGxheUJhY2soKTtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcclxuXHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gMDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2tQYXVzZSgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wYXVzZSk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIucGF1c2UoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlUGxheUJhY2tSZXN1bWUoKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucmVzdW1lKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5yZXN1bWUoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKTtcclxuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRldmljZVN0b3BQbGF5QmFja1JlY29yZCgpIHtcclxuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUGxheUJhY2tSZWNvcmQpO1xyXG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BQbGF5QmFja1JlY29yZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKHNwZWVkKSB7XHJcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZCk7XHJcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZChzcGVlZCk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogYOWIh+aNouiHs++8miR7c3BlZWQ9PTM/JzAuNSc6c3BlZWR95YCN6YCfYCxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmctdG9wOiAyNTBweDtcclxuXHR9XHJcblxyXG5cdC5maXhlZC1jb21wb25lbnQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQuZnVsbHNjcmVlbiB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdHotaW5kZXg6IDk5OTk7XHJcblx0fVxyXG5cclxuXHQucmFkaW8ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQucmFkaW8taXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

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
/* 12 */
/*!****************************************************************************************************************!*\
  !*** D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./androidsdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 13);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_androidsdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/uni-SDKdemo/uniapp-appsdkdemo/pages/index/androidsdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        "rgba(0,0,0,0.5)",
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
/* 14 */
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