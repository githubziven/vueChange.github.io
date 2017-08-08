webpackJsonp([28],{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(919)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(762),
  /* template */
  __webpack_require__(877),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7c2290a6",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/厂商/basicData/bankInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bankInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c2290a6", Component.options)
  } else {
    hotAPI.reload("data-v-7c2290a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__(34);

var _promise2 = _interopRequireDefault(_promise);

exports.getListIotCardByMatch = getListIotCardByMatch;
exports.getListManufacturerGeneral = getListManufacturerGeneral;
exports.getListCTInfoGeneral = getListCTInfoGeneral;
exports.giveManufacturerAuthority = giveManufacturerAuthority;
exports.giveCTAuthority = giveCTAuthority;
exports.getAndGive = getAndGive;

var _fetch = __webpack_require__(95);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getListIotCardByMatch(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listIotCardByMatch.do',
		method: 'get',
		data: data
	});
}

function getListManufacturerGeneral() {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listManufacturerGeneral.do',
		method: 'get'
	});
}

function getListCTInfoGeneral(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listCTInfoGeneral.do',
		method: 'get',
		data: data
	});
}

function giveManufacturerAuthority(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/giveManufacturerAuthority.do',
		method: 'post',
		data: data
	});
}
function giveCTAuthority(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/giveCTAuthority.do',
		method: 'post',
		data: data
	});
}
function getAndGive() {
	return new _promise2.default(function (resolve, reject) {
		getListManufacturerGeneral().then(function (res) {
			if (res.msg == 0) {
				giveManufacturerAuthority({
					mid: res.mList[0].mid
				}).then(function (res2) {
					if (res2.msg == 0) {
						resolve(res);
					} else {
						reject("改变mid发生网络错误");
					}
				});
			} else {
				reject("获取厂商列表信息发生网络错误");
			}
		});
	});
}

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

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _usual = __webpack_require__(326);

var _basicData = __webpack_require__(376);

var _index = __webpack_require__(60);

exports.default = {
    data: function data() {
        return {
            labelPosition: 'left',
            itemList: [],
            form: {
                id: '',
                company: '',
                bankCardAccount: '',
                bankCardName: '',
                bankName: ''
            },
            rules: {
                bankCardAccount: [{ required: true, message: '收款银行账号不能为空' }, { type: 'number', message: '收款银行账号必须为数字值', trigger: 'blur' }],
                bankName: [{ required: true, message: '银行账号开户行不能为空' }]
            },
            cur_mid: 0,
            isLoad: true,
            isdisabled: false
        };
    },

    watch: {},
    mounted: function mounted() {
        this.manufacturerInfoByLogin();
    },

    methods: {
        saveAction: function saveAction() {
            var _this = this;

            this.$refs['form'].validate(function (valid) {
                if (valid) {
                    var account = _this.form.bankCardAccount;
                    var name = _this.form.bankCardName;
                    var bank = _this.form.bankName;
                    _this.isLoad = true;
                    (0, _basicData.saveBankCardInfo)({ account: account, name: name, bank: bank }).then(function (res) {
                        _this.isLoad = false;
                        _this.isdisabled = true;
                        res.msg === 0 ? _this.$message.success("保存成功！") : _this.$message.error((0, _index.backCN)(res.code));
                    });
                } else {
                    return false;
                }
            });
        },
        manufacturerInfoByLogin: function manufacturerInfoByLogin() {
            var _this2 = this;

            this.isLoad = true;
            (0, _basicData.getManufacturerInfoByLogin)().then(function (res) {
                _this2.isLoad = false;
                console.log("res", res);
                if (res.msg == 0) {
                    _this2.form.company = res.name;
                    _this2.form.bankCardAccount = res.bankCardAccount ? Number(res.bankCardAccount) : '';
                    _this2.form.bankCardName = res.bankCardName;
                    _this2.form.bankName = res.bankName;
                }
            });
        },
        listManufacturerGeneral: function listManufacturerGeneral() {
            var _this3 = this;

            (0, _usual.getListManufacturerGeneral)().then(function (res) {
                if (res.msg == 0) {
                    _this3.itemList = res.mList;
                    _this3.form.id = res.mList[0].mid;
                    _this3.cur_mid = res.mList[0].mid;
                    _this3.manufacturerInfoByLogin();
                }
            });
        }
    }
};

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-7c2290a6] {\n    background: #f5f5f5;\n}\n.item-left[data-v-7c2290a6] {\n    padding: 7px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 877:
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
      "model": _vm.form,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "公司名称:"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入公司名称",
      "disabled": ""
    },
    model: {
      value: (_vm.form.company),
      callback: function($$v) {
        _vm.form.company = $$v
      },
      expression: "form.company"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款银行账号:",
      "prop": "bankCardAccount"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "bankCardAccount",
      "placeholder": "请输入收款银行账号",
      "disabled": _vm.isdisabled
    },
    model: {
      value: (_vm.form.bankCardAccount),
      callback: function($$v) {
        _vm.form.bankCardAccount = _vm._n($$v)
      },
      expression: "form.bankCardAccount"
    }
  })], 1), _vm._v(" "), (false) ? _c('el-form-item', {
    attrs: {
      "label": "收款银行账号名:",
      "prop": "bankCardName"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "bankCardAccount",
      "placeholder": "请输入收款银行账号"
    },
    model: {
      value: (_vm.form.bankCardAccount),
      callback: function($$v) {
        _vm.form.bankCardAccount = _vm._n($$v)
      },
      expression: "form.bankCardAccount"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行账号开户行:",
      "prop": "bankName"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入银行名字",
      "disabled": _vm.isdisabled
    },
    model: {
      value: (_vm.form.bankName),
      callback: function($$v) {
        _vm.form.bankName = $$v
      },
      expression: "form.bankName"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "disabled": _vm.isdisabled
    },
    on: {
      "click": _vm.saveAction
    }
  }, [_vm._v("提交")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c2290a6", module.exports)
  }
}

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(833);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("52b8a78e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c2290a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./bankInfo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7c2290a6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./bankInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=28.c703f563bc9b54a83162.js.map