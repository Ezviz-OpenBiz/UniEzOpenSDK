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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
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


/***/ }),
/* 14 */
/*!****************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/main.js?{"page":"pages%2Findex%2Fsdk"} ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/sdk.nvue?mpType=page */ 15);\n\n        \n        \n        \n        \n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/index/sdk'\n        _pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_index_sdk_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsZ0JBQWdCLHlFQUFHIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCAndW5pLXBvbHlmaWxsJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvaW5kZXgvc2RrLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L3NkaydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 16);\n/* harmony import */ var _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.nvue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 21).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 21).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5d8a4739\",\n  false,\n  _sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/sdk.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF3RDtBQUM1RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXdEO0FBQ2pIOztBQUVBOztBQUVBO0FBQ3FLO0FBQ3JLLGdCQUFnQiwrS0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2RrLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDU1NjU1Y2MmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Nkay5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Nkay5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9zZGsubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3Nkay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1ZDhhNDczOVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9zZGsubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=template&id=d55655cc&mpType=page */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_template_id_d55655cc_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=template&id=d55655cc&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: {
                            click: function ($event) {
                              _vm.setViewRatio(0)
                            },
                          },
                        },
                        [_vm._v("平铺")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: {
                            click: function ($event) {
                              _vm.setViewRatio(1)
                            },
                          },
                        },
                        [_vm._v("16:9")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: {
                            click: function ($event) {
                              _vm.setViewRatio(2)
                            },
                          },
                        },
                        [_vm._v("4:3")]
                      ),
                      _c(
                        "button",
                        {
                          staticStyle: {
                            margin: "20rpx",
                            width: "200rpx",
                            display: "inline-block",
                          },
                          on: {
                            click: function ($event) {
                              _vm.setViewRatio(3)
                            },
                          },
                        },
                        [_vm._v("1:1")]
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
/* 18 */
/*!**********************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=script&lang=js&mpType=page */ 19);\n/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZhLENBQWdCLHlkQUFHLEVBQUMiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3JlZi0tNS0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS01LTEhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2RrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nkay5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar globalEvent = weex.requireModule('globalEvent');\nvar _default = {\n  data: function data() {\n    return {\n      windowWidth: 0,\n      windowHeight: 0,\n      deviceSerial: 'BA5551167',\n      // 从萤石开放平台控制台 - 设备管理获取\n      channelNo: 1,\n      isInit: false,\n      validCode: '',\n      // 填写设备验证码\n      isFullScreen: false,\n      selectedRadio: 2,\n      videoMsg: null,\n      pictureMsg: null,\n      flowMsg: null,\n      flowValue: 0,\n      flowTimer: null,\n      startDate: '2024-07-25',\n      startTime: '14:00:00',\n      stopDate: '2024-07-25',\n      stopTime: '15:00:00',\n      spaceId: '',\n      recordList: [],\n      logs: []\n    };\n  },\n  onBackPress: function onBackPress(options) {\n    __f__(\"log\", \"返回上一页：\", options, \" at pages/index/sdk.nvue:182\");\n    if (options.from === 'navigateBack' || options.from === 'backbutton') {\n      // 从导航返回触发时执行\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:187\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n      return true;\n    }\n    return false;\n  },\n  onLoad: function onLoad() {\n    var _this = this;\n    var systemInfo = uni.getSystemInfoSync();\n    this.windowWidth = systemInfo.windowWidth;\n    this.windowHeight = systemInfo.windowHeight;\n    plus.screen.lockOrientation('default');\n    globalEvent.addEventListener(\"onMessage\", function (e) {\n      _this.onMessage({\n        detail: e\n      });\n    });\n  },\n  onUnload: function onUnload() {\n    plus.screen.lockOrientation('portrait-primary');\n  },\n  onReady: function onReady() {\n    var _this2 = this;\n    var videoPlayer = this.$refs.player;\n    // 注册事件监听\n    globalEvent.addEventListener('onMessage', function (e) {\n      __f__(\"log\", \"onMessage=\" + JSON.stringify(e), \" at pages/index/sdk.nvue:215\");\n      var messageKey = Object.keys(e)[0];\n      switch (messageKey) {\n        case 'handleVideoSizeChange':\n          // 播放器尺寸变化\n          _this2.onMessage = 'handleVideoSizeChange:' + JSON.stringify(e[messageKey].data);\n          break;\n        case 'handlePlaySuccess':\n          // 播放成功\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handlePlayFail':\n          // 播放失败\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkSuccess':\n          // 对讲成功\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkFail':\n          // 对讲失败\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleTalkStopSuccess':\n          // 结束对讲\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handleSetVideoModeSuccess':\n          // 切换清晰度成功\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handlePTZSuccess':\n          // 云台操作成功\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        case 'handlePTZFail':\n          // 云台操作失败\n          _this2.onMessage = JSON.stringify(e[messageKey].msg);\n          break;\n        default:\n          break;\n      }\n    });\n  },\n  methods: {\n    releasePlayer: function releasePlayer() {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.release(function (res) {\n        __f__(\"log\", \"播放器销毁\", res, \" at pages/index/sdk.nvue:263\");\n        uni.navigateTo({\n          url: './index'\n        });\n      });\n    },\n    onMessage: function onMessage(e) {\n      this.logs.push(JSON.stringify(e.detail));\n    },\n    onDeviceSerialChange: function onDeviceSerialChange(e) {\n      this.deviceSerial = e.detail.value;\n    },\n    onChannelNoChange: function onChannelNoChange(e) {\n      this.channelNo = e.detail.value;\n    },\n    onValidCodeChange: function onValidCodeChange(e) {\n      this.validCode = e.detail.value;\n    },\n    radioChange: function radioChange(e) {\n      this.selectedRadio = e.detail.value;\n    },\n    getTimeArray: function getTimeArray() {\n      var timeArr = [];\n      timeArr.push(this.getLoopArray(0, 23));\n      timeArr.push(this.getLoopArray(0, 59));\n      timeArr.push(this.getLoopArray(0, 59));\n      return timeArr;\n    },\n    getLoopArray: function getLoopArray(startNum, endNum) {\n      var array = [];\n      for (var i = startNum; i <= endNum; i++) {\n        i < 10 ? array.push('0' + i) : array.push('' + i);\n      }\n      return array;\n    },\n    /**选择年月日**/bindStartDateChange: function bindStartDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:301\");\n      this.startDate = e.detail.value;\n    },\n    bindStopDateChange: function bindStopDateChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/index/sdk.nvue:305\");\n      this.stopDate = e.detail.value;\n    },\n    /**选择时分秒**/bindStartTimeChange: function bindStartTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.startTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    bindStopTimeChange: function bindStopTimeChange(e) {\n      var timeArr = e.detail.value;\n      this.stopTime = (timeArr[0] < 10 ? '0' + timeArr[0] : '' + timeArr[0]) + ':' + (timeArr[1] < 10 ? '0' + timeArr[1] : '' + timeArr[1]) + ':' + (timeArr[2] < 10 ? '0' + timeArr[2] : '' + timeArr[2]);\n    },\n    createPlayer: function createPlayer() {\n      var _this3 = this;\n      if (this.deviceSerial.length == 0 || this.channelNo.length == 0) {\n        uni.showToast({\n          title: '请先输入设备序列号、通道号',\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      videoPlayer.createPlayer(this.deviceSerial, this.channelNo, this.validCode, function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:333\");\n        if (res.code == '200') {\n          _this3.isInit = true;\n          uni.showToast({\n            title: '创建播放器成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"创建成功\", \" at pages/index/sdk.nvue:341\");\n        }\n      });\n      videoPlayer.setEventCallback(function (e) {\n        __f__(\"log\", JSON.stringify(e), \" at pages/index/sdk.nvue:346\");\n      });\n    },\n    deviceRealPlay: function deviceRealPlay() {\n      var _this4 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlay, \" at pages/index/sdk.nvue:351\");\n      videoPlayer.startRealPlay(function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:353\");\n        if (_this4.flowTimer) {\n          clearInterval(_this4.flowTimer);\n          _this4.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this4.flowValue;\n              _this4.flowValue = parseFloat(r.msg);\n              _this4.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        } else {\n          _this4.flowTimer = setInterval(function () {\n            videoPlayer.getStreamFlow(function (r) {\n              var unit = parseFloat(r.msg) - _this4.flowValue;\n              _this4.flowValue = parseFloat(r.msg);\n              _this4.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n            });\n          }, 1000);\n        }\n      });\n    },\n    deviceRealPlayStop: function deviceRealPlayStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlay, \" at pages/index/sdk.nvue:376\");\n      videoPlayer.stopRealPlay();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    setViewRatio: function setViewRatio(value) {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.setViewRatio(parseInt(value));\n    },\n    deviceFullScreen: function deviceFullScreen() {\n      var _this5 = this;\n      plus.screen.lockOrientation('landscape-primary');\n      var videoPlayer = this.$refs.player;\n      setTimeout(function () {\n        __f__(\"log\", 'this.$refs.player>>>', videoPlayer.fullscreen, \" at pages/index/sdk.nvue:390\");\n        videoPlayer.fullscreen();\n        _this5.isFullScreen = true;\n      }, 800);\n    },\n    deviceExitFullScreen: function deviceExitFullScreen() {\n      var videoPlayer = this.$refs.player;\n      videoPlayer.exitFullscreen();\n      this.isFullScreen = false;\n      setTimeout(function () {\n        plus.screen.lockOrientation('portrait-primary');\n      }, 300);\n    },\n    deviceOpenSound: function deviceOpenSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.openSound, \" at pages/index/sdk.nvue:405\");\n      videoPlayer.openSound();\n    },\n    deviceCloseSound: function deviceCloseSound() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.closeSound, \" at pages/index/sdk.nvue:410\");\n      videoPlayer.closeSound();\n    },\n    deviceStartTalk: function deviceStartTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startTalk, \" at pages/index/sdk.nvue:415\");\n      videoPlayer.startTalk(true);\n    },\n    deviceStopTalk: function deviceStopTalk() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopTalk, \" at pages/index/sdk.nvue:420\");\n      videoPlayer.stopTalk();\n    },\n    setVoiceTalkStatus: function setVoiceTalkStatus(status) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.setVoiceTalkStatus, \" at pages/index/sdk.nvue:425\");\n      videoPlayer.setVoiceTalkStatus(status);\n    },\n    deviceChangeVideoLevel: function deviceChangeVideoLevel(level) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changeVideoLevel, \" at pages/index/sdk.nvue:430\");\n      videoPlayer.changeVideoLevel(level);\n      uni.showToast({\n        title: \"\\u6E05\\u6670\\u5EA6\\u5207\\u6362\\u81F3\\uFF1A\".concat(level),\n        icon: 'none'\n      });\n    },\n    deviceCaputure: function deviceCaputure() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.capturePicture, \" at pages/index/sdk.nvue:439\");\n      videoPlayer.capturePicture('test', null, function (res) {\n        if (res.code == '200') {\n          uni.showToast({\n            title: '图片保存成功',\n            icon: 'none'\n          });\n          __f__(\"log\", \"base64图片数据：\", JSON.stringify(res.data), \" at pages/index/sdk.nvue:446\");\n        }\n      });\n    },\n    deviceStartRealPlayRecord: function deviceStartRealPlayRecord() {\n      var _this6 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startRealPlayRecord, \" at pages/index/sdk.nvue:452\");\n      videoPlayer.startRealPlayRecord(function (res) {\n        if (res.code == '200') {\n          _this6.videoMsg = res.msg;\n        }\n      });\n    },\n    deviceStopRealPlayRecord: function deviceStopRealPlayRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopRealPlayRecord, \" at pages/index/sdk.nvue:461\");\n      videoPlayer.stopRealPlayRecord();\n    },\n    devicePtzUp: function devicePtzUp() {\n      //0：左，1：右，2：上，3：下\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:466\");\n      videoPlayer.ptzOption(2, \"START\");\n    },\n    devicePtzUpStop: function devicePtzUpStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:471\");\n      videoPlayer.ptzOption(2, \"STOP\");\n    },\n    devicePtzDown: function devicePtzDown() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:476\");\n      videoPlayer.ptzOption(3, \"START\");\n    },\n    devicePtzDownStop: function devicePtzDownStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:481\");\n      videoPlayer.ptzOption(3, \"STOP\");\n    },\n    devicePtzLeft: function devicePtzLeft() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:486\");\n      videoPlayer.ptzOption(0, \"START\");\n    },\n    devicePtzLeftStop: function devicePtzLeftStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:491\");\n      videoPlayer.ptzOption(0, \"STOP\");\n    },\n    devicePtzRight: function devicePtzRight() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:496\");\n      videoPlayer.ptzOption(1, \"START\");\n    },\n    devicePtzRightStop: function devicePtzRightStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.ptzOption, \" at pages/index/sdk.nvue:501\");\n      videoPlayer.ptzOption(1, \"STOP\");\n    },\n    deviceQueryRecord: function deviceQueryRecord() {\n      var _this7 = this;\n      if (!this.isInit) {\n        uni.showToast({\n          title: \"请先创建播放器\",\n          icon: 'none'\n        });\n        return;\n      }\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startQueryRecordFiles, \" at pages/index/sdk.nvue:513\");\n      videoPlayer.startQueryRecordFiles(this.startDate + \" \" + this.startTime, this.stopDate + \" \" + this.stopTime, this.selectedRadio, 'all', '0', function (res) {\n        __f__(\"log\", res, \" at pages/index/sdk.nvue:516\");\n        if (res.code == '200') {\n          uni.showToast({\n            title: \"回放片段查询成功\",\n            icon: 'none'\n          });\n          _this7.recordList = res.data;\n        } else {\n          uni.showModal({\n            title: \"回放片段查询失败\",\n            content: JSON.stringify(res)\n          });\n        }\n      });\n    },\n    devicePlaybackSeekTo: function devicePlaybackSeekTo() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.playbackSeekTo, \" at pages/index/sdk.nvue:533\");\n      videoPlayer.playbackSeekTo(this.startDate + \" \" + this.startTime);\n    },\n    devicePlayBack: function devicePlayBack(item) {\n      var _this8 = this;\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBack, \" at pages/index/sdk.nvue:538\");\n      videoPlayer.startPlayBack(item, this.selectedRadio);\n      if (this.flowTimer) {\n        clearInterval(this.flowTimer);\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      } else {\n        this.flowTimer = setInterval(function () {\n          videoPlayer.getStreamFlow(function (r) {\n            var unit = parseFloat(r.msg) - _this8.flowValue;\n            _this8.flowValue = parseFloat(r.msg);\n            _this8.flowMsg = parseFloat(unit / 1024).toFixed(2) + 'k/s';\n          });\n        }, 1000);\n      }\n    },\n    devicePlayBackStop: function devicePlayBackStop() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBack, \" at pages/index/sdk.nvue:561\");\n      videoPlayer.stopPlayBack();\n      clearInterval(this.flowTimer);\n      this.flowMsg = null;\n      this.flowValue = 0;\n    },\n    devicePlayBackPause: function devicePlayBackPause() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.pause, \" at pages/index/sdk.nvue:569\");\n      videoPlayer.pause();\n    },\n    devicePlayBackResume: function devicePlayBackResume() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.resume, \" at pages/index/sdk.nvue:574\");\n      videoPlayer.resume();\n    },\n    deviceStartPlayBackRecord: function deviceStartPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.startPlayBackRecord, \" at pages/index/sdk.nvue:579\");\n      videoPlayer.startPlayBackRecord();\n    },\n    deviceStopPlayBackRecord: function deviceStopPlayBackRecord() {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.stopPlayBackRecord, \" at pages/index/sdk.nvue:584\");\n      videoPlayer.stopPlayBackRecord();\n    },\n    deviceChangePlayBackSpeed: function deviceChangePlayBackSpeed(speed) {\n      var videoPlayer = this.$refs.player;\n      __f__(\"log\", 'this.$refs.player>>>', videoPlayer.changePlayBackSpeed, \" at pages/index/sdk.nvue:589\");\n      videoPlayer.changePlayBackSpeed(speed);\n      uni.showToast({\n        title: \"\\u5207\\u6362\\u81F3\\uFF1A\".concat(speed == 3 ? '0.5' : speed, \"\\u500D\\u901F\"),\n        icon: 'none'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 20)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvc2RrLm52dWUiXSwibmFtZXMiOlsiZGF0YSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiZGV2aWNlU2VyaWFsIiwiY2hhbm5lbE5vIiwiaXNJbml0IiwidmFsaWRDb2RlIiwiaXNGdWxsU2NyZWVuIiwic2VsZWN0ZWRSYWRpbyIsInZpZGVvTXNnIiwicGljdHVyZU1zZyIsImZsb3dNc2ciLCJmbG93VmFsdWUiLCJmbG93VGltZXIiLCJzdGFydERhdGUiLCJzdGFydFRpbWUiLCJzdG9wRGF0ZSIsInN0b3BUaW1lIiwic3BhY2VJZCIsInJlY29yZExpc3QiLCJsb2dzIiwib25CYWNrUHJlc3MiLCJ2aWRlb1BsYXllciIsInVuaSIsInVybCIsIm9uTG9hZCIsInBsdXMiLCJnbG9iYWxFdmVudCIsImRldGFpbCIsIm9uVW5sb2FkIiwib25SZWFkeSIsIm1ldGhvZHMiLCJyZWxlYXNlUGxheWVyIiwib25NZXNzYWdlIiwib25EZXZpY2VTZXJpYWxDaGFuZ2UiLCJvbkNoYW5uZWxOb0NoYW5nZSIsIm9uVmFsaWRDb2RlQ2hhbmdlIiwicmFkaW9DaGFuZ2UiLCJnZXRUaW1lQXJyYXkiLCJ0aW1lQXJyIiwiZ2V0TG9vcEFycmF5IiwiaSIsImJpbmRTdGFydERhdGVDaGFuZ2UiLCJiaW5kU3RvcERhdGVDaGFuZ2UiLCJiaW5kU3RhcnRUaW1lQ2hhbmdlIiwiYmluZFN0b3BUaW1lQ2hhbmdlIiwiY3JlYXRlUGxheWVyIiwidGl0bGUiLCJpY29uIiwiZGV2aWNlUmVhbFBsYXkiLCJjbGVhckludGVydmFsIiwiZGV2aWNlUmVhbFBsYXlTdG9wIiwic2V0Vmlld1JhdGlvIiwiZGV2aWNlRnVsbFNjcmVlbiIsInNldFRpbWVvdXQiLCJkZXZpY2VFeGl0RnVsbFNjcmVlbiIsImRldmljZU9wZW5Tb3VuZCIsImRldmljZUNsb3NlU291bmQiLCJkZXZpY2VTdGFydFRhbGsiLCJkZXZpY2VTdG9wVGFsayIsInNldFZvaWNlVGFsa1N0YXR1cyIsImRldmljZUNoYW5nZVZpZGVvTGV2ZWwiLCJkZXZpY2VDYXB1dHVyZSIsImRldmljZVN0YXJ0UmVhbFBsYXlSZWNvcmQiLCJkZXZpY2VTdG9wUmVhbFBsYXlSZWNvcmQiLCJkZXZpY2VQdHpVcCIsImRldmljZVB0elVwU3RvcCIsImRldmljZVB0ekRvd24iLCJkZXZpY2VQdHpEb3duU3RvcCIsImRldmljZVB0ekxlZnQiLCJkZXZpY2VQdHpMZWZ0U3RvcCIsImRldmljZVB0elJpZ2h0IiwiZGV2aWNlUHR6UmlnaHRTdG9wIiwiZGV2aWNlUXVlcnlSZWNvcmQiLCJjb250ZW50IiwiZGV2aWNlUGxheWJhY2tTZWVrVG8iLCJkZXZpY2VQbGF5QmFjayIsImRldmljZVBsYXlCYWNrU3RvcCIsImRldmljZVBsYXlCYWNrUGF1c2UiLCJkZXZpY2VQbGF5QmFja1Jlc3VtZSIsImRldmljZVN0YXJ0UGxheUJhY2tSZWNvcmQiLCJkZXZpY2VTdG9wUGxheUJhY2tSZWNvcmQiLCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEpBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7TUFDQUM7TUFDQUM7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO01BQ0E7TUFDQTtNQUNBQztRQUNBO1FBQ0FDO1VBQ0FDO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQTtFQUNBO0VBQ0FDO0lBQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7SUFFQUM7TUFDQTtRQUNBQztNQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBSDtFQUNBO0VBQ0FJO0lBQUE7SUFDQTtJQUNBO0lBQ0FIO01BQ0E7TUFDQTtNQUNBO1FBQ0E7VUFBQTtVQUNBO1VBQ0E7UUFFQTtVQUFBO1VBQ0E7VUFDQTtRQUVBO1VBQUE7VUFDQTtVQUNBO1FBRUE7VUFBQTtVQUNBO1VBQ0E7UUFFQTtVQUFBO1VBQ0E7VUFDQTtRQUVBO1VBQUE7VUFDQTtVQUNBO1FBRUE7VUFBQTtVQUNBO1VBQ0E7UUFFQTtVQUFBO1VBQ0E7VUFDQTtRQUVBO1VBQUE7VUFDQTtVQUNBO1FBRUE7VUFDQTtNQUFBO0lBRUE7RUFDQTtFQUNBSTtJQUNBQztNQUNBO01BQ0FWO1FBQ0E7UUFDQUM7VUFDQUM7UUFDQTtNQUNBO0lBQ0E7SUFDQVM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7SUFDQTtJQUVBQztNQUNBO01BQ0FDO01BQ0FBO01BQ0FBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQUM7TUFDQTtNQUNBO0lBQ0E7SUFDQSxXQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBLFdBQ0FDO01BQ0E7TUFDQSwwRUFDQSxPQUNBTCwrREFDQUE7SUFDQTtJQUNBTTtNQUNBO01BQ0EseUVBQ0EsT0FDQU4sK0RBQ0FBO0lBQ0E7SUFDQU87TUFBQTtNQUNBO1FBQ0F2QjtVQUNBd0I7VUFDQUM7UUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBMUI7UUFDQTtRQUNBO1VBQ0E7VUFDQUM7WUFDQXdCO1lBQ0FDO1VBQ0E7VUFFQTtRQUNBO01BQ0E7TUFFQTFCO1FBQ0E7TUFDQTtJQUNBO0lBQ0EyQjtNQUFBO01BQ0E7TUFDQTtNQUNBM0I7UUFDQTtRQUNBO1VBQ0E0QjtVQUNBO1lBQ0E1QjtjQUNBO2NBQ0E7Y0FDQTtZQUNBO1VBQ0E7UUFDQTtVQUNBO1lBQ0FBO2NBQ0E7Y0FDQTtjQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBNkI7TUFDQTtNQUNBO01BQ0E3QjtNQUNBNEI7TUFDQTtNQUNBO0lBQ0E7SUFDQUU7TUFDQTtNQUNBOUI7SUFDQTtJQUNBK0I7TUFBQTtNQUNBM0I7TUFDQTtNQUNBNEI7UUFDQTtRQUNBaEM7UUFDQTtNQUNBO0lBQ0E7SUFDQWlDO01BQ0E7TUFDQWpDO01BQ0E7TUFDQWdDO1FBQ0E1QjtNQUNBO0lBQ0E7SUFDQThCO01BQ0E7TUFDQTtNQUNBbEM7SUFDQTtJQUNBbUM7TUFDQTtNQUNBO01BQ0FuQztJQUNBO0lBQ0FvQztNQUNBO01BQ0E7TUFDQXBDO0lBQ0E7SUFDQXFDO01BQ0E7TUFDQTtNQUNBckM7SUFDQTtJQUNBc0M7TUFDQTtNQUNBO01BQ0F0QztJQUNBO0lBQ0F1QztNQUNBO01BQ0E7TUFDQXZDO01BQ0FDO1FBQ0F3QjtRQUNBQztNQUNBO0lBQ0E7SUFDQWM7TUFDQTtNQUNBO01BQ0F4QztRQUNBO1VBQ0FDO1lBQ0F3QjtZQUNBQztVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQWU7TUFBQTtNQUNBO01BQ0E7TUFDQXpDO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBMEM7TUFDQTtNQUNBO01BQ0ExQztJQUNBO0lBQ0EyQztNQUFBO01BQ0E7TUFDQTtNQUNBM0M7SUFDQTtJQUNBNEM7TUFDQTtNQUNBO01BQ0E1QztJQUNBO0lBQ0E2QztNQUNBO01BQ0E7TUFDQTdDO0lBQ0E7SUFDQThDO01BQ0E7TUFDQTtNQUNBOUM7SUFDQTtJQUNBK0M7TUFDQTtNQUNBO01BQ0EvQztJQUNBO0lBQ0FnRDtNQUNBO01BQ0E7TUFDQWhEO0lBQ0E7SUFDQWlEO01BQ0E7TUFDQTtNQUNBakQ7SUFDQTtJQUNBa0Q7TUFDQTtNQUNBO01BQ0FsRDtJQUNBO0lBQ0FtRDtNQUFBO01BQ0E7UUFDQWxEO1VBQ0F3QjtVQUNBQztRQUNBO1FBQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTFCLG9HQUNBTDtRQUNBO1FBQ0E7VUFDQU07WUFDQXdCO1lBQ0FDO1VBQ0E7VUFDQTtRQUNBO1VBQ0F6QjtZQUNBd0I7WUFDQTJCO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBO01BQ0FyRDtJQUNBO0lBQ0FzRDtNQUFBO01BQ0E7TUFDQTtNQUNBdEQ7TUFDQTtRQUNBNEI7UUFDQTtVQUNBNUI7WUFDQTtZQUNBO1lBQ0E7VUFDQTtRQUNBO01BQ0E7UUFDQTtVQUNBQTtZQUNBO1lBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0F1RDtNQUNBO01BQ0E7TUFDQXZEO01BQ0E0QjtNQUNBO01BQ0E7SUFDQTtJQUNBNEI7TUFDQTtNQUNBO01BQ0F4RDtJQUNBO0lBQ0F5RDtNQUNBO01BQ0E7TUFDQXpEO0lBQ0E7SUFDQTBEO01BQ0E7TUFDQTtNQUNBMUQ7SUFDQTtJQUNBMkQ7TUFDQTtNQUNBO01BQ0EzRDtJQUNBO0lBQ0E0RDtNQUNBO01BQ0E7TUFDQTVEO01BQ0FDO1FBQ0F3QjtRQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7XCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJmaXhlZC1jb21wb25lbnRcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwMHB4OyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDtyaWdodDogMDt6LWluZGV4OiA5OTk5O21hcmdpbi1ib3R0b206IDIwcHg7XCI+XG5cdFx0XHQ8VW5pT3BlblNESyByZWY9XCJwbGF5ZXJcIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDIwMHB4O1wiIEBtZXNzYWdlPVwib25NZXNzYWdlXCI+PC9VbmlPcGVuU0RLPlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbi10b3A6IDIyMHB4O1wiPlxuXHRcdFx0PHZpZXcgdi1pZj1cIiFpc0Z1bGxTY3JlZW5cIj5cblx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl6K6+5aSH5bqP5YiX5Y+3XCIgOnZhbHVlPVwiZGV2aWNlU2VyaWFsXCIgQGlucHV0PVwib25EZXZpY2VTZXJpYWxDaGFuZ2VcIiBzdHlsZT1cImhlaWdodDogMzJweDtib3JkZXI6IDFweCBzb2xpZCAjYWFhO21hcmdpbi1ib3R0b206IDEwcHg7XCIgLz5cblx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXpgJrpgZPlj7dcIiA6dmFsdWU9XCJjaGFubmVsTm9cIiBAaW5wdXQ9XCJvbkNoYW5uZWxOb0NoYW5nZVwiIHN0eWxlPVwiaGVpZ2h0OiAzMnB4O2JvcmRlcjogMXB4IHNvbGlkICNhYWE7bWFyZ2luLWJvdHRvbTogMTBweDtcIiAvPlxuXHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpemqjOivgeeggVwiIDp2YWx1ZT1cInZhbGlkQ29kZVwiIEBpbnB1dD1cIm9uVmFsaWRDb2RlQ2hhbmdlXCIgc3R5bGU9XCJoZWlnaHQ6IDMycHg7Ym9yZGVyOiAxcHggc29saWQgI2FhYTttYXJnaW4tYm90dG9tOiAxMHB4O1wiIC8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImNyZWF0ZVBsYXllclwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7liJvlu7rmkq3mlL7lmag8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVJlYWxQbGF5XCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAyMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPuW8gOWni+mihOiniOaSreaUvjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUmVhbFBsYXlTdG9wXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAyMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPue7k+adn+mihOiniOaSreaUvjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHZpZXcgdi1pZj1cImZsb3dNc2dcIj7mtYHph4/vvJp7e2Zsb3dNc2d9fTwvdmlldz5cblx0XHRcdFx0PHZpZXcgdi1pZj1cImxvZ3NcIj7ml6Xlv5fvvJp7e2xvZ3Muam9pbignL24nKX19PC92aWV3PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwic2V0Vmlld1JhdGlvKDApXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAyMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPuW5s+mTujwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwic2V0Vmlld1JhdGlvKDEpXCIgc3R5bGU9XCJtYXJnaW46IDIwcnB4O3dpZHRoOiAyMDBycHg7ZGlzcGxheTogaW5saW5lLWJsb2NrO1wiPjE2Ojk8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInNldFZpZXdSYXRpbygyKVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj40OjM8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInNldFZpZXdSYXRpbygzKVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMjAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj4xOjE8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VGdWxsU2NyZWVuXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5YWo5bGPPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VFeGl0RnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPumAgOWHuuWFqOWxjzwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZU9wZW5Tb3VuZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWQr+WjsOmfszwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2xvc2VTb3VuZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuWFs+mXreWjsOmfszwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVN0YXJ0VGFsa1wiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWQr+WvueiusjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RvcFRhbGtcIiBzdHlsZT1cIndpZHRoOiAyMDBycHg7bWFyZ2luOiAyMHJweDtcIj7lhbPpl63lr7norrI8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInNldFZvaWNlVGFsa1N0YXR1cyh0cnVlKVwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWQr+WNiuWPjOW3pTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwic2V0Vm9pY2VUYWxrU3RhdHVzKGZhbHNlKVwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuWFs+mXreWNiuWPjOW3pTwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbjogMzVycHggMDtcIj7muIXmmbDluqbvvJo8L3RleHQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDMpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+6LaF5riFPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDIpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+6auY5riFPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDEpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5Z2H6KGhPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDApXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5rWB55WFPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZFwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuW8gOWni+W9leWItjwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlU3RvcFJlYWxQbGF5UmVjb3JkXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+57uT5p2f5b2V5Yi2PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8dmlldyB2LWlmPVwidmlkZW9Nc2dcIiBzdHlsZT1cIm1hcmdpbjogMzVycHggMCAxMHJweDtkaXNwbGF5OiBibG9jaztcIj7lvZXlg4/mlofku7bot6/lvoTvvJp7e3ZpZGVvTXNnfX08L3ZpZXc+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDYXB1dHVyZVwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPuaIquWbvjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHZpZXcgdi1pZj1cInBpY3R1cmVNc2dcIiBzdHlsZT1cIm1hcmdpbjogMzVycHggMCAxMHJweDtkaXNwbGF5OiBibG9jaztcIj7lm77niYfmlofku7bot6/lvoTvvJp7e3BpY3R1cmVNc2d9fTwvdmlldz5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbjogMzVycHggMDtcIj7kupHlj7DvvJo8L3RleHQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAdG91Y2hzdGFydD1cImRldmljZVB0elVwXCIgQHRvdWNoZW5kPVwiZGV2aWNlUHR6VXBTdG9wXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHggMTBycHg7XCI+5LiKPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAdG91Y2hzdGFydD1cImRldmljZVB0ekRvd25cIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpEb3duU3RvcFwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPuS4izwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQHRvdWNoc3RhcnQ9XCJkZXZpY2VQdHpMZWZ0XCIgQHRvdWNoZW5kPVwiZGV2aWNlUHR6TGVmdFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lt6Y8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEB0b3VjaHN0YXJ0PVwiZGV2aWNlUHR6UmlnaHRcIiBAdG91Y2hlbmQ9XCJkZXZpY2VQdHpSaWdodFN0b3BcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj7lj7M8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW46IDIwcHggMDtcIj5cblx0XHRcdFx0XHRcdDx0ZXh0PuWbnuaUvuexu+Wei++8mjwvdGV4dD5cblx0XHRcdFx0XHRcdDxyYWRpby1ncm91cCBAY2hhbmdlPVwicmFkaW9DaGFuZ2VcIiBjbGFzcz1cInJhZGlvXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cInJhZGlvLWl0ZW1cIiA6a2V5PVwiMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwiMlwiIDpjaGVja2VkPVwic2VsZWN0ZWRSYWRpbz09MlwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlNE5Y2hPC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJyYWRpby1pdGVtXCIgOmtleT1cIjBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdDxyYWRpbyB2YWx1ZT1cIjBcIiA6Y2hlY2tlZD1cInNlbGVjdGVkUmFkaW89PTBcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldz7kupHlrZjlgqg8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cInJhZGlvLWl0ZW1cIiA6a2V5PVwiM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHJhZGlvIHZhbHVlPVwibnVsbFwiIDpjaGVja2VkPVwic2VsZWN0ZWRSYWRpbz09bnVsbFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3Pm51bGw8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8L3JhZGlvLWdyb3VwPlxuXHRcdFx0XHRcdDwvdmlldz5cblxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cImRhdGVcIiA6dmFsdWU9XCJzdGFydERhdGVcIiBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCIgQGNoYW5nZT1cImJpbmRTdGFydERhdGVDaGFuZ2VcIiBzdHlsZT1cImJvcmRlcjogMXJweCBzb2xpZCAjYWFhO1wiPlxuXHRcdFx0XHRcdFx0PHZpZXc+5byA5aeL5pel5pyf77yae3tzdGFydERhdGV9fTwvdmlldz5cblx0XHRcdFx0XHQ8L3BpY2tlcj5cblxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cIm11bHRpU2VsZWN0b3JcIiBAY2hhbmdlPVwiYmluZFN0YXJ0VGltZUNoYW5nZSgkZXZlbnQpXCIgOnJhbmdlPVwiZ2V0VGltZUFycmF5KClcIiA6dmFsdWU9XCJzdGFydFRpbWUuc3BsaXQoJzonKVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hbWVcIiB2LWlmPVwic3RhcnRUaW1lXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3PuW8gOWni+aXtumXtO+8mnt7c3RhcnRUaW1lfX08L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wbGFjZWhvbGRlclwiIHYtZWxzZT7lvIDlp4vml7bpl7Q8L3ZpZXc+XG5cdFx0XHRcdFx0PC9waWNrZXI+XG5cblx0XHRcdFx0XHQ8cGlja2VyIG1vZGU9XCJkYXRlXCIgOnZhbHVlPVwic3RvcERhdGVcIiBmb3JtYXQ9XCJ5eXl5LU1NLWRkXCIgQGNoYW5nZT1cImJpbmRTdG9wRGF0ZUNoYW5nZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDtib3JkZXI6IDFycHggc29saWQgI2FhYTtcIj5cblx0XHRcdFx0XHRcdDx2aWV3Pue7k+adn+aXpeacn++8mnt7c3RvcERhdGV9fTwvdmlldz5cblx0XHRcdFx0XHQ8L3BpY2tlcj5cblxuXHRcdFx0XHRcdDxwaWNrZXIgbW9kZT1cIm11bHRpU2VsZWN0b3JcIiBAY2hhbmdlPVwiYmluZFN0b3BUaW1lQ2hhbmdlKCRldmVudClcIiA6cmFuZ2U9XCJnZXRUaW1lQXJyYXkoKVwiIDp2YWx1ZT1cInN0b3BUaW1lLnNwbGl0KCc6JylcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7Ym9yZGVyOiAxcnB4IHNvbGlkICNhYWE7XCI+XG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYW1lXCIgdi1pZj1cInN0b3BUaW1lXCI+XG5cdFx0XHRcdFx0XHRcdDx2aWV3Pue7k+adn+aXtumXtO+8mnt7c3RvcFRpbWV9fTwvdmlldz5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXBsYWNlaG9sZGVyXCIgdi1lbHNlPue7k+adn+aXtumXtDwvdmlldz5cblx0XHRcdFx0XHQ8L3BpY2tlcj5cblx0XHRcdFx0PC92aWV3PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VRdWVyeVJlY29yZFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O1wiPuafpeivouW9leWDj+eJh+autTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlUGxheWJhY2tTZWVrVG9cIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtcIj7lm57mlL7ot7Povazoh7PlvIDlp4vml7bpl7Q8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrUGF1c2VcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+5pqC5YGc5Zue5pS+PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VQbGF5QmFja1Jlc3VtZVwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7mgaLlpI3lm57mlL48L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZVBsYXlCYWNrU3RvcFwiIHN0eWxlPVwibWFyZ2luOiAyMHJweDt3aWR0aDogMzAwcnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztcIj7nu5PmnZ/lm57mlL48L2J1dHRvbj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cInJlbGVhc2VQbGF5ZXJcIiBzdHlsZT1cIm1hcmdpbjogMjBycHg7d2lkdGg6IDMwMHJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+6YCA5Ye66aG16Z2iPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cIm1hcmdpbjogMzVycHggMDtcIj7lgI3pgJ/vvJo8L3RleHQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VQbGF5QmFja1NwZWVkKDMpXCIgc3R5bGU9XCJ3aWR0aDogODBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj4wLjU8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoMSlcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjE8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoMilcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjI8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoNClcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoOClcIiBzdHlsZT1cIndpZHRoOiA4MHJweDttYXJnaW46IDIwcnB4IDEwcnB4O1wiPjg8L2J1dHRvbj5cblx0XHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVBsYXlCYWNrU3BlZWQoMTYpXCIgc3R5bGU9XCJ3aWR0aDogODBycHg7bWFyZ2luOiAyMHJweCAxMHJweDtcIj4xNjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8dmlldyB2LWlmPVwicmVjb3JkTGlzdC5sZW5ndGg+MFwiPlxuXHRcdFx0XHRcdDx0ZXh0PuWbnuaUvueJh+aute+8mjwvdGV4dD5cblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIml0ZW0gaW4gcmVjb3JkTGlzdFwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VQbGF5QmFjayhpdGVtKVwiIHN0eWxlPVwibWFyZ2luOiAxMHJweCAyMHJweDt3aWR0aDogNzAwcnB4O1wiPnt7aXRlbS5zdGFydFRpbWV9fSB+IHt7aXRlbS5lbmRUaW1lfX08L2J1dHRvbj5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cdFx0PHZpZXcgdi1pZj1cImlzRnVsbFNjcmVlblwiIHN0eWxlPVwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyByaWdodDogMDsgdG9wOiAwOyBib3R0b206IDA7IHotaW5kZXg6IDk5OTk5O1wiPlxuXHRcdFx0PHZpZXcgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGJvdHRvbTogMTBweDsgbGVmdDogMDsgcmlnaHQ6IDA7aGVpZ2h0OiAxMDBweDtcIj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VFeGl0RnVsbFNjcmVlblwiIHN0eWxlPVwid2lkdGg6IDIwMHJweDttYXJnaW46IDIwcnB4O1wiPumAgOWHuuWFqOWxjzwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNhcHV0dXJlXCIgc3R5bGU9XCJ3aWR0aDogMjAwcnB4O21hcmdpbjogMjBycHg7XCI+5oiq5Zu+PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgzKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4O1wiPui2hea4hTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIEBjbGljaz1cImRldmljZUNoYW5nZVZpZGVvTGV2ZWwoMilcIiBzdHlsZT1cIndpZHRoOiAxMDBycHg7bWFyZ2luOiAyMHJweDtcIj7pq5jmuIU8L2J1dHRvbj5cblx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJkZXZpY2VDaGFuZ2VWaWRlb0xldmVsKDEpXCIgc3R5bGU9XCJ3aWR0aDogMTAwcnB4O21hcmdpbjogMjBycHg7XCI+5Z2H6KGhPC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbCgwKVwiIHN0eWxlPVwid2lkdGg6IDEwMHJweDttYXJnaW46IDIwcnB4O1wiPua1geeVhTwvYnV0dG9uPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Y29uc3QgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsXG5cdFx0XHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHRcdFx0ZGV2aWNlU2VyaWFsOiAnQkE1NTUxMTY3JywgICAgICAgICAgIC8vIOS7juiQpOefs+W8gOaUvuW5s+WPsOaOp+WItuWPsCAtIOiuvuWkh+euoeeQhuiOt+WPllxuXHRcdFx0XHRjaGFubmVsTm86IDEsXG5cdFx0XHRcdGlzSW5pdDogZmFsc2UsXG5cdFx0XHRcdHZhbGlkQ29kZTogJycsICAgICAgICAgICAgICAvLyDloavlhpnorr7lpIfpqozor4HnoIFcblx0XHRcdFx0aXNGdWxsU2NyZWVuOiBmYWxzZSxcblx0XHRcdFx0c2VsZWN0ZWRSYWRpbzogMixcblx0XHRcdFx0dmlkZW9Nc2c6IG51bGwsXG5cdFx0XHRcdHBpY3R1cmVNc2c6IG51bGwsXG5cdFx0XHRcdGZsb3dNc2c6IG51bGwsXG5cdFx0XHRcdGZsb3dWYWx1ZTogMCxcblx0XHRcdFx0Zmxvd1RpbWVyOiBudWxsLFxuXHRcdFx0XHRzdGFydERhdGU6ICcyMDI0LTA3LTI1Jyxcblx0XHRcdFx0c3RhcnRUaW1lOiAnMTQ6MDA6MDAnLFxuXHRcdFx0XHRzdG9wRGF0ZTogJzIwMjQtMDctMjUnLFxuXHRcdFx0XHRzdG9wVGltZTogJzE1OjAwOjAwJyxcblx0XHRcdFx0c3BhY2VJZDogJycsXG5cdFx0XHRcdHJlY29yZExpc3Q6IFtdLFxuXHRcdFx0XHRsb2dzOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25CYWNrUHJlc3Mob3B0aW9ucykge1xuXHRcdFx0Y29uc29sZS5sb2coXCLov5Tlm57kuIrkuIDpobXvvJpcIiwgb3B0aW9ucyk7XG5cdFx0XHRpZiAob3B0aW9ucy5mcm9tID09PSAnbmF2aWdhdGVCYWNrJyB8fCBvcHRpb25zLmZyb20gPT09ICdiYWNrYnV0dG9uJykge1xuXHRcdFx0XHQvLyDku47lr7zoiKrov5Tlm57op6blj5Hml7bmiafooYxcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnJlbGVhc2UoKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5pKt5pS+5Zmo6ZSA5q+BXCIsIHJlcyk7XG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdFx0dXJsOiAnLi9pbmRleCdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXHRcdFx0Y29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHN5c3RlbUluZm8ud2luZG93V2lkdGg7XG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHN5c3RlbUluZm8ud2luZG93SGVpZ2h0O1xuXHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdkZWZhdWx0Jyk7XG5cdFx0XHRcblx0XHRcdGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJvbk1lc3NhZ2VcIiwgKGUpID0+IHtcblx0XHRcdFx0dGhpcy5vbk1lc3NhZ2Uoe1xuXHRcdFx0XHRcdGRldGFpbDogZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0b25VbmxvYWQoKSB7XG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oJ3BvcnRyYWl0LXByaW1hcnknKTtcblx0XHR9LFxuXHRcdG9uUmVhZHkoKSB7XG5cdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdC8vIOazqOWGjOS6i+S7tuebkeWQrFxuXHRcdFx0Z2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcignb25NZXNzYWdlJywgKGUpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJvbk1lc3NhZ2U9XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2VLZXkgPSBPYmplY3Qua2V5cyhlKVswXTtcblx0XHRcdFx0c3dpdGNoIChtZXNzYWdlS2V5KSB7XG5cdFx0XHRcdFx0Y2FzZSAnaGFuZGxlVmlkZW9TaXplQ2hhbmdlJzogLy8g5pKt5pS+5Zmo5bC65a+45Y+Y5YyWXG5cdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9ICdoYW5kbGVWaWRlb1NpemVDaGFuZ2U6JyArIEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0uZGF0YSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAnaGFuZGxlUGxheVN1Y2Nlc3MnOiAvLyDmkq3mlL7miJDlip9cblx0XHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlICdoYW5kbGVQbGF5RmFpbCc6IC8vIOaSreaUvuWksei0pVxuXHRcdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0ubXNnKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgJ2hhbmRsZVRhbGtTdWNjZXNzJzogLy8g5a+56K6y5oiQ5YqfXG5cdFx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAnaGFuZGxlVGFsa0ZhaWwnOiAvLyDlr7norrLlpLHotKVcblx0XHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlICdoYW5kbGVUYWxrU3RvcFN1Y2Nlc3MnOiAvLyDnu5PmnZ/lr7norrJcblx0XHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0XHRjYXNlICdoYW5kbGVTZXRWaWRlb01vZGVTdWNjZXNzJzogLy8g5YiH5o2i5riF5pmw5bqm5oiQ5YqfXG5cdFx0XHRcdFx0XHRcdHRoaXMub25NZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZVttZXNzYWdlS2V5XS5tc2cpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdFx0Y2FzZSAnaGFuZGxlUFRaU3VjY2Vzcyc6IC8vIOS6keWPsOaTjeS9nOaIkOWKn1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9uTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGVbbWVzc2FnZUtleV0ubXNnKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGNhc2UgJ2hhbmRsZVBUWkZhaWwnOiAvLyDkupHlj7Dmk43kvZzlpLHotKVcblx0XHRcdFx0XHRcdFx0dGhpcy5vbk1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShlW21lc3NhZ2VLZXldLm1zZyk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbGVhc2VQbGF5ZXIoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHR2aWRlb1BsYXllci5yZWxlYXNlKChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuaSreaUvuWZqOmUgOavgVwiLCByZXMpO1xuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRcdHVybDogJy4vaW5kZXgnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdG9uTWVzc2FnZShlKSB7XG5cdFx0XHRcdHRoaXMubG9ncy5wdXNoKEpTT04uc3RyaW5naWZ5KGUuZGV0YWlsKSk7XG5cdFx0XHR9LFxuXHRcdFx0b25EZXZpY2VTZXJpYWxDaGFuZ2UoZSkge1xuXHRcdFx0XHR0aGlzLmRldmljZVNlcmlhbCA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdG9uQ2hhbm5lbE5vQ2hhbmdlKGUpIHtcblx0XHRcdFx0dGhpcy5jaGFubmVsTm8gPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdH0sXG5cdFx0XHRvblZhbGlkQ29kZUNoYW5nZShlKSB7XG5cdFx0XHRcdHRoaXMudmFsaWRDb2RlID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHR9LFxuXHRcdFx0cmFkaW9DaGFuZ2UoZSkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUmFkaW8gPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdH0sXG5cblx0XHRcdGdldFRpbWVBcnJheSgpIHtcblx0XHRcdFx0bGV0IHRpbWVBcnIgPSBbXVxuXHRcdFx0XHR0aW1lQXJyLnB1c2godGhpcy5nZXRMb29wQXJyYXkoMCwgMjMpKVxuXHRcdFx0XHR0aW1lQXJyLnB1c2godGhpcy5nZXRMb29wQXJyYXkoMCwgNTkpKVxuXHRcdFx0XHR0aW1lQXJyLnB1c2godGhpcy5nZXRMb29wQXJyYXkoMCwgNTkpKVxuXHRcdFx0XHRyZXR1cm4gdGltZUFycjtcblx0XHRcdH0sXG5cdFx0XHRnZXRMb29wQXJyYXkoc3RhcnROdW0sIGVuZE51bSkge1xuXHRcdFx0XHRsZXQgYXJyYXkgPSBbXTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHN0YXJ0TnVtOyBpIDw9IGVuZE51bTsgaSsrKSB7XG5cdFx0XHRcdFx0aSA8IDEwID8gYXJyYXkucHVzaCgnMCcgKyBpKSA6IGFycmF5LnB1c2goJycgKyBpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0XHR9LFxuXHRcdFx0Lyoq6YCJ5oup5bm05pyI5pelKiovXG5cdFx0XHRiaW5kU3RhcnREYXRlQ2hhbmdlKGUpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0RGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdGJpbmRTdG9wRGF0ZUNoYW5nZShlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcblx0XHRcdFx0dGhpcy5zdG9wRGF0ZSA9IGUuZGV0YWlsLnZhbHVlO1xuXHRcdFx0fSxcblx0XHRcdC8qKumAieaLqeaXtuWIhuenkioqL1xuXHRcdFx0YmluZFN0YXJ0VGltZUNoYW5nZShlKSB7XG5cdFx0XHRcdGxldCB0aW1lQXJyID0gZS5kZXRhaWwudmFsdWU7XG5cdFx0XHRcdHRoaXMuc3RhcnRUaW1lID0gKHRpbWVBcnJbMF0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMF0gOiAnJyArIHRpbWVBcnJbMF0pICtcblx0XHRcdFx0XHQnOicgK1xuXHRcdFx0XHRcdCh0aW1lQXJyWzFdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzFdIDogJycgKyB0aW1lQXJyWzFdKSArICc6JyArXG5cdFx0XHRcdFx0KHRpbWVBcnJbMl0gPCAxMCA/ICcwJyArIHRpbWVBcnJbMl0gOiAnJyArIHRpbWVBcnJbMl0pXG5cdFx0XHR9LFxuXHRcdFx0YmluZFN0b3BUaW1lQ2hhbmdlKGUpIHtcblx0XHRcdFx0bGV0IHRpbWVBcnIgPSBlLmRldGFpbC52YWx1ZTtcblx0XHRcdFx0dGhpcy5zdG9wVGltZSA9ICh0aW1lQXJyWzBdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzBdIDogJycgKyB0aW1lQXJyWzBdKSArXG5cdFx0XHRcdFx0JzonICtcblx0XHRcdFx0XHQodGltZUFyclsxXSA8IDEwID8gJzAnICsgdGltZUFyclsxXSA6ICcnICsgdGltZUFyclsxXSkgKyAnOicgK1xuXHRcdFx0XHRcdCh0aW1lQXJyWzJdIDwgMTAgPyAnMCcgKyB0aW1lQXJyWzJdIDogJycgKyB0aW1lQXJyWzJdKVxuXHRcdFx0fSxcblx0XHRcdGNyZWF0ZVBsYXllcigpIHtcblx0XHRcdFx0aWYgKHRoaXMuZGV2aWNlU2VyaWFsLmxlbmd0aCA9PSAwIHx8IHRoaXMuY2hhbm5lbE5vLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+ivt+WFiOi+k+WFpeiuvuWkh+W6j+WIl+WPt+OAgemAmumBk+WPtycsXG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHR2aWRlb1BsYXllci5jcmVhdGVQbGF5ZXIodGhpcy5kZXZpY2VTZXJpYWwsIHRoaXMuY2hhbm5lbE5vLCB0aGlzLnZhbGlkQ29kZSwgKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuaXNJbml0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WIm+W7uuaSreaUvuWZqOaIkOWKnycsXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLliJvlu7rmiJDlip9cIilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc2V0RXZlbnRDYWxsYmFjayhmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VSZWFsUGxheSgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXkpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5KChyZXMpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdGlmICh0aGlzLmZsb3dUaW1lcikge1xuXHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XG5cdFx0XHRcdFx0XHR0aGlzLmZsb3dUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGxldCB1bml0ID0gcGFyc2VGbG9hdChyLm1zZykgLSB0aGlzLmZsb3dWYWx1ZTtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IHBhcnNlRmxvYXQoci5tc2cpO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0sIDEwMDApXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2aWRlb1BsYXllci5nZXRTdHJlYW1GbG93KChyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mbG93TXNnID0gcGFyc2VGbG9hdCh1bml0IC8gMTAyNCkudG9GaXhlZCgyKSArICdrL3MnO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fSwgMTAwMClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVJlYWxQbGF5U3RvcCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0b3BSZWFsUGxheSk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BSZWFsUGxheSgpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuZmxvd1RpbWVyKTtcblx0XHRcdFx0dGhpcy5mbG93TXNnID0gbnVsbDtcblx0XHRcdFx0dGhpcy5mbG93VmFsdWUgPSAwO1xuXHRcdFx0fSxcblx0XHRcdHNldFZpZXdSYXRpbyh2YWx1ZSkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc2V0Vmlld1JhdGlvKHBhcnNlSW50KHZhbHVlKSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlRnVsbFNjcmVlbigpIHtcblx0XHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdsYW5kc2NhcGUtcHJpbWFyeScpO1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuZnVsbHNjcmVlbik7XG5cdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZnVsbHNjcmVlbigpO1xuXHRcdFx0XHRcdHRoaXMuaXNGdWxsU2NyZWVuID0gdHJ1ZTtcblx0XHRcdFx0fSwgODAwKVxuXHRcdFx0fSxcblx0XHRcdGRldmljZUV4aXRGdWxsU2NyZWVuKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuZXhpdEZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0dGhpcy5pc0Z1bGxTY3JlZW4gPSBmYWxzZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdwb3J0cmFpdC1wcmltYXJ5Jyk7XG5cdFx0XHRcdH0sIDMwMClcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VPcGVuU291bmQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5vcGVuU291bmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5vcGVuU291bmQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VDbG9zZVNvdW5kKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2xvc2VTb3VuZCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNsb3NlU291bmQoKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VTdGFydFRhbGsoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFRhbGspO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFRhbGsodHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFRhbGsoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wVGFsayk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnN0b3BUYWxrKCk7XG5cdFx0XHR9LFxuXHRcdFx0c2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cykge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc2V0Vm9pY2VUYWxrU3RhdHVzKHN0YXR1cyk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlQ2hhbmdlVmlkZW9MZXZlbChsZXZlbCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlVmlkZW9MZXZlbCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNoYW5nZVZpZGVvTGV2ZWwobGV2ZWwpO1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogYOa4heaZsOW6puWIh+aNouiHs++8miR7bGV2ZWx9YCxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VDYXB1dHVyZSgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLmNhcHR1cmVQaWN0dXJlKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuY2FwdHVyZVBpY3R1cmUoJ3Rlc3QnLCBudWxsLCAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09ICcyMDAnKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflm77niYfkv53lrZjmiJDlip8nLFxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImJhc2U2NOWbvueJh+aVsOaNru+8mlwiLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RhcnRSZWFsUGxheVJlY29yZCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UmVhbFBsYXlSZWNvcmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFJlYWxQbGF5UmVjb3JkKChyZXMpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9Nc2cgPSByZXMubXNnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFJlYWxQbGF5UmVjb3JkKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5UmVjb3JkKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFJlYWxQbGF5UmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6VXAoKSB7IC8vMO+8muW3pu+8jDHvvJrlj7PvvIwy77ya5LiK77yMM++8muS4i1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDIsIFwiU1RBUlRcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6VXBTdG9wKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDIsIFwiU1RPUFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpEb3duKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucHR6T3B0aW9uKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucHR6T3B0aW9uKDMsIFwiU1RBUlRcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6RG93blN0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMywgXCJTVE9QXCIpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVB0ekxlZnQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMCwgXCJTVEFSVFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpMZWZ0U3RvcCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnB0ek9wdGlvbik7XG5cdFx0XHRcdHZpZGVvUGxheWVyLnB0ek9wdGlvbigwLCBcIlNUT1BcIik7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlUHR6UmlnaHQoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMSwgXCJTVEFSVFwiKTtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQdHpSaWdodFN0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5wdHpPcHRpb24pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wdHpPcHRpb24oMSwgXCJTVE9QXCIpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVF1ZXJ5UmVjb3JkKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuaXNJbml0KSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogXCLor7flhYjliJvlu7rmkq3mlL7lmahcIixcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXMpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFF1ZXJ5UmVjb3JkRmlsZXModGhpcy5zdGFydERhdGUgKyBcIiBcIiArIHRoaXMuc3RhcnRUaW1lLCB0aGlzLnN0b3BEYXRlICsgXCIgXCIgKyB0aGlzXG5cdFx0XHRcdFx0LnN0b3BUaW1lLCB0aGlzLnNlbGVjdGVkUmFkaW8sICdhbGwnLCAnMCcsIChyZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gJzIwMCcpIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Zue5pS+54mH5q615p+l6K+i5oiQ5YqfXCIsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVjb3JkTGlzdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5Zue5pS+54mH5q615p+l6K+i5aSx6LSlXCIsXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogSlNPTi5zdHJpbmdpZnkocmVzKVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXliYWNrU2Vla1RvKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucGxheWJhY2tTZWVrVG8pO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wbGF5YmFja1NlZWtUbyh0aGlzLnN0YXJ0RGF0ZSArIFwiIFwiICsgdGhpcy5zdGFydFRpbWUpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXlCYWNrKGl0ZW0pIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2spO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrKGl0ZW0sIHRoaXMuc2VsZWN0ZWRSYWRpbyk7XG5cdFx0XHRcdGlmICh0aGlzLmZsb3dUaW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5mbG93VGltZXIpO1xuXHRcdFx0XHRcdHRoaXMuZmxvd1RpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdFx0dmlkZW9QbGF5ZXIuZ2V0U3RyZWFtRmxvdygocikgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgdW5pdCA9IHBhcnNlRmxvYXQoci5tc2cpIC0gdGhpcy5mbG93VmFsdWU7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gcGFyc2VGbG9hdChyLm1zZyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZmxvd01zZyA9IHBhcnNlRmxvYXQodW5pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyAnay9zJztcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSwgMTAwMClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmZsb3dUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRcdHZpZGVvUGxheWVyLmdldFN0cmVhbUZsb3coKHIpID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHVuaXQgPSBwYXJzZUZsb2F0KHIubXNnKSAtIHRoaXMuZmxvd1ZhbHVlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dWYWx1ZSA9IHBhcnNlRmxvYXQoci5tc2cpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmZsb3dNc2cgPSBwYXJzZUZsb2F0KHVuaXQgLyAxMDI0KS50b0ZpeGVkKDIpICsgJ2svcyc7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0sIDEwMDApXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQbGF5QmFja1N0b3AoKSB7XG5cdFx0XHRcdHZhciB2aWRlb1BsYXllciA9IHRoaXMuJHJlZnMucGxheWVyO1xuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy4kcmVmcy5wbGF5ZXI+Pj4nLCB2aWRlb1BsYXllci5zdG9wUGxheUJhY2spO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdG9wUGxheUJhY2soKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmZsb3dUaW1lcik7XG5cdFx0XHRcdHRoaXMuZmxvd01zZyA9IG51bGw7XG5cdFx0XHRcdHRoaXMuZmxvd1ZhbHVlID0gMDtcblx0XHRcdH0sXG5cdFx0XHRkZXZpY2VQbGF5QmFja1BhdXNlKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucGF1c2UpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5wYXVzZSgpO1xuXHRcdFx0fSxcblx0XHRcdGRldmljZVBsYXlCYWNrUmVzdW1lKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIucmVzdW1lKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIucmVzdW1lKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RhcnRQbGF5QmFja1JlY29yZCgpIHtcblx0XHRcdFx0dmFyIHZpZGVvUGxheWVyID0gdGhpcy4kcmVmcy5wbGF5ZXI7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd0aGlzLiRyZWZzLnBsYXllcj4+PicsIHZpZGVvUGxheWVyLnN0YXJ0UGxheUJhY2tSZWNvcmQpO1xuXHRcdFx0XHR2aWRlb1BsYXllci5zdGFydFBsYXlCYWNrUmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlU3RvcFBsYXlCYWNrUmVjb3JkKCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrUmVjb3JkKTtcblx0XHRcdFx0dmlkZW9QbGF5ZXIuc3RvcFBsYXlCYWNrUmVjb3JkKCk7XG5cdFx0XHR9LFxuXHRcdFx0ZGV2aWNlQ2hhbmdlUGxheUJhY2tTcGVlZChzcGVlZCkge1xuXHRcdFx0XHR2YXIgdmlkZW9QbGF5ZXIgPSB0aGlzLiRyZWZzLnBsYXllcjtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuJHJlZnMucGxheWVyPj4+JywgdmlkZW9QbGF5ZXIuY2hhbmdlUGxheUJhY2tTcGVlZCk7XG5cdFx0XHRcdHZpZGVvUGxheWVyLmNoYW5nZVBsYXlCYWNrU3BlZWQoc3BlZWQpO1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogYOWIh+aNouiHs++8miR7c3BlZWQ9PTM/JzAuNSc6c3BlZWR95YCN6YCfYCxcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQuY29udGFpbmVyIHtcblx0XHRwYWRkaW5nLXRvcDogMjUwcHg7XG5cdH1cblxuXHQuZml4ZWQtY29tcG9uZW50IHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xuXHR9XG5cblx0LmNvbnRlbnQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cblxuXHQuZnVsbHNjcmVlbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR6LWluZGV4OiA5OTk5O1xuXHR9XG5cblx0LnJhZGlvIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHR9XG5cblx0LnJhZGlvLWl0ZW0ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0XHRtYXJnaW46IDEwcHg7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
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
/* 21 */
/*!******************************************************************************************************************!*\
  !*** E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sdk.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sdk_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/uniapp_sdk/branches/v0.0.2/uniapp_demo/pages/index/sdk.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ })
/******/ ]);