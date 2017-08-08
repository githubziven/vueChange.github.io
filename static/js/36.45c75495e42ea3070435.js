webpackJsonp([36],{

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(914)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(765),
  /* template */
  __webpack_require__(872),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-661954fb",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/厂商/basicData/manufacturerKey.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] manufacturerKey.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-661954fb", Component.options)
  } else {
    hotAPI.reload("data-v-661954fb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getManufacturerInfoByLogin = getManufacturerInfoByLogin;
exports.updateManufacturerInfo = updateManufacturerInfo;
exports.getCTInfo = getCTInfo;
exports.updateCTInfo = updateCTInfo;
exports.getListManufacturerPackage = getListManufacturerPackage;
exports.saveBankCardInfo = saveBankCardInfo;
exports.updateManufacturerKey = updateManufacturerKey;
exports.listManufacturerRatio = listManufacturerRatio;
exports.setManufacturerRatio = setManufacturerRatio;
exports.getCTRatio = getCTRatio;
exports.setCTRatio = setCTRatio;

var _fetch = __webpack_require__(95);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getManufacturerInfoByLogin(data) {

	return (0, _fetch2.default)({
		url: '/recharge/manager/getManufacturerInfoByLogin.do',
		method: 'get',
		data: data
	});
}
function updateManufacturerInfo(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/updateManufacturerInfo.do',
		method: 'post',
		data: data
	});
}

function getCTInfo() {
	return (0, _fetch2.default)({
		url: '/recharge/manager/getCTInfo.do',
		method: 'get'
	});
}
function updateCTInfo(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/updateCTInfo.do',
		method: 'post',
		data: data
	});
}
function getListManufacturerPackage() {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listManufacturerPackage.do',
		method: 'get'
	});
}

function saveBankCardInfo(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/saveBankCardInfo.do',
		method: 'post',
		data: data
	});
}
function updateManufacturerKey(data) {
	return (0, _fetch2.default)({
		url: 'recharge/manager/updateManufacturerKey.do',
		method: 'post',
		data: data
	});
}
function listManufacturerRatio() {
	return (0, _fetch2.default)({
		url: 'recharge/manager/listManufacturerRatio.do',
		method: 'get'
	});
}
function setManufacturerRatio(data) {
	return (0, _fetch2.default)({
		url: 'recharge/manager/setManufacturerRatio.do',
		method: 'post',
		data: data
	});
}
function getCTRatio() {
	return (0, _fetch2.default)({
		url: 'recharge/manager/getCTRatio.do',
		method: 'get'
	});
}
function setCTRatio(data) {
	return (0, _fetch2.default)({
		url: 'recharge/manager/setCTRatio.do',
		method: 'post',
		data: data
	});
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _basicData = __webpack_require__(376);

var _vuex = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            labelPosition: 'left',
            itemList: [],
            form: {
                id: '',
                account: '',
                password: '',
                key: '',
                discount: ''

            }
        };
    },

    computed: {
        isLoad: function isLoad() {
            return this.$store.state.loading.load;
        }
    },
    watch: {},
    mounted: function mounted() {
        this.manufacturerInfoByLogin();
    },

    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(["setLoad"]), {
        manufacturerInfoByLogin: function manufacturerInfoByLogin() {
            var _this = this;

            this.isLoad = true;
            (0, _basicData.getManufacturerInfoByLogin)().then(function (res) {
                _this.isLoad = false;
                if (res.msg == 0) {
                    _this.form.account = res.account;
                    _this.form.password = res.password;
                    _this.form.key = res.key;
                    _this.form.discount = res.discount;
                    res.discount ? _this.isdisabled = true : _this.isdisabled = false;
                }
            }).catch(function () {
                _this.isdisabled = true;
            });
        }
    })
};

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-661954fb] {\n    background: #f5f5f5;\n}\n.item-left[data-v-661954fb] {\n    padding: 7px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.isLoad),
      expression: "isLoad"
    }],
    staticClass: "app-container"
  }, [_c('el-form', {
    ref: "form",
    staticStyle: {
      "width": "500px",
      "margin": "0 auto"
    },
    attrs: {
      "label-position": _vm.labelPosition,
      "label-width": "80px",
      "model": _vm.form
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "自管理门户账号:",
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.account),
      callback: function($$v) {
        _vm.form.account = $$v
      },
      expression: "form.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "自管理门户密码:",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.password),
      callback: function($$v) {
        _vm.form.password = $$v
      },
      expression: "form.password"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电信API接口密码:",
      "prop": "key"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.key),
      callback: function($$v) {
        _vm.form.key = $$v
      },
      expression: "form.key"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "折扣(小数点两位):",
      "prop": "discount"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.form.discount),
      callback: function($$v) {
        _vm.form.discount = $$v
      },
      expression: "form.discount"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-661954fb", module.exports)
  }
}

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(828);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("88789d4e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-661954fb\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manufacturerKey.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-661954fb\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manufacturerKey.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=36.45c75495e42ea3070435.js.map