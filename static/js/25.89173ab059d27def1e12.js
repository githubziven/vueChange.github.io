webpackJsonp([25],{

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(911)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(785),
  /* template */
  __webpack_require__(869),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42aad01c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/管理员/basicData/manufacturerKey.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] manufacturerKey.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42aad01c", Component.options)
  } else {
    hotAPI.reload("data-v-42aad01c", Component.options)
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

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _usual = __webpack_require__(326);

var _basicData = __webpack_require__(376);

var _index = __webpack_require__(60);

var _vuex = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			labelPosition: 'left',
			itemList: [],
			form: {
				id: '',
				iccid: '',
				account: '',
				password: '',
				key: '',
				discount: ''

			},
			rules: {
				iccid: [{ required: true, message: 'ICCID不能为空' }],
				account: [{ required: true, message: '自管理门户账号不能为空' }],
				password: [{ required: true, message: '自管理门户密码不能为空' }],
				key: [{ required: true, message: '电信API接口密码不能为空' }],
				discount: [{ required: true, message: '折扣不能为空' }]
			},
			isdisabled: true,
			isSaveClick: false,
			cur_mid: 0
		};
	},

	computed: {
		isLoad: function isLoad() {
			return this.$store.state.loading.load;
		}
	},
	watch: {},
	mounted: function mounted() {
		this.listManufacturerGeneral();
	},

	methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(["setLoad"]), {
		saveAction: function saveAction() {
			var _this = this;

			this.$refs['form'].validate(function (valid) {
				if (valid) {
					var account = _this.form.account;
					var iccid = _this.form.iccid;
					var password = _this.form.password;
					var key = _this.form.key;
					var discount = _this.form.discount;
					_this.isLoad = true;
					_this.isSaveClick = true;
					(0, _basicData.updateManufacturerKey)({ account: account, iccid: iccid, password: password, key: key, discount: discount }).then(function (res) {
						_this.isdisabled = true;
						res.msg === 0 ? _this.$message.success("保存成功！") : _this.$message.error((0, _index.backCN)(res.code));
						res.msg === 0 ? '' : _this.isLoad = false;
					}).catch(function () {
						_this.isdisabled = true;
					});
				} else {
					return false;
				}
			});
		},
		isEmpty: function isEmpty(val) {
			if (val === '' || val === undefined) {
				return true;
			} else {
				return false;
			};
		},
		companyChange: function companyChange(val) {
			this.manufacturerInfoByLogin(val);
		},
		manufacturerInfoByLogin: function manufacturerInfoByLogin(mid) {
			var _this2 = this;

			this.isLoad = true;
			(0, _usual.giveManufacturerAuthority)({
				mid: mid
			}).then(function (res) {
				_this2.isLoad = false;
				if (res.msg == 0) {
					_this2.isLoad = true;
					(0, _basicData.getManufacturerInfoByLogin)().then(function (res) {
						_this2.isLoad = false;
						if (res.msg == 0) {
							_this2.form.account = res.account;
							_this2.form.password = res.password;
							_this2.form.key = res.key;
							_this2.form.discount = res.discount;
							res.discount ? _this2.isdisabled = true : _this2.isdisabled = false;
						}
					}).catch(function () {
						_this2.isdisabled = true;
					});
				}
			}).catch(function () {
				_this2.isdisabled = true;
			});
		},
		listManufacturerGeneral: function listManufacturerGeneral() {
			var _this3 = this;

			this.isLoad = true;
			(0, _usual.getListManufacturerGeneral)().then(function (res) {
				_this3.isLoad = false;
				if (res.msg == 0) {
					_this3.itemList = res.mList;
					_this3.form.id = res.mList[0].mid;
					_this3.cur_mid = res.mList[0].mid;
					_this3.manufacturerInfoByLogin(_this3.cur_mid);
				}
			}).catch(function () {
				_this3.isdisabled = true;
			});
		}
	})
};

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-42aad01c] {\n\tbackground: #f5f5f5;\n}\n.item-left[data-v-42aad01c] {\n\tpadding: 7px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 869:
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
      "label": "选择角色:"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择",
      "disabled": _vm.isSaveClick
    },
    on: {
      "change": _vm.companyChange
    },
    model: {
      value: (_vm.form.id),
      callback: function($$v) {
        _vm.form.id = $$v
      },
      expression: "form.id"
    }
  }, _vm._l((_vm.itemList), function(item) {
    return _c('el-option', {
      key: item.mid ? item.mid : item.ctId,
      attrs: {
        "label": item.mname ? item.mname : item.ctName,
        "value": item.mid ? item.mid : item.ctId
      }
    })
  }))], 1), _vm._v(" "), (_vm.isEmpty(_vm.form.discount)) ? _c('el-form-item', {
    attrs: {
      "label": "ICCID:",
      "prop": "iccid"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.form.iccid),
      callback: function($$v) {
        _vm.form.iccid = $$v
      },
      expression: "form.iccid"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "自管理门户账号:",
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": _vm.isdisabled,
      "placeholder": "请输入内容"
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
      "disabled": _vm.isdisabled,
      "placeholder": "请输入内容"
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
      "disabled": _vm.isdisabled,
      "placeholder": "请输入内容"
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
      "disabled": _vm.isdisabled,
      "placeholder": "请输入内容"
    },
    model: {
      value: (_vm.form.discount),
      callback: function($$v) {
        _vm.form.discount = $$v
      },
      expression: "form.discount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [(!_vm.isdisabled) ? _c('el-button', {
    attrs: {
      "disabled": _vm.isSaveClick
    },
    on: {
      "click": _vm.saveAction
    }
  }, [_vm._v("保存")]) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42aad01c", module.exports)
  }
}

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(825);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("644d41dc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42aad01c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manufacturerKey.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42aad01c\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./manufacturerKey.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=25.89173ab059d27def1e12.js.map