webpackJsonp([38],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(890)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(763),
  /* template */
  __webpack_require__(848),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0dc35342",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/厂商/basicData/baseInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] baseInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dc35342", Component.options)
  } else {
    hotAPI.reload("data-v-0dc35342", Component.options)
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

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _basicData = __webpack_require__(376);

var _index = __webpack_require__(60);

var _validate = __webpack_require__(97);

exports.default = {
	data: function data() {
		var checkPhone = function checkPhone(rule, value, callback) {
			if (value === '') {
				callback(new Error('联系号码不能为空！'));
			} else {
				if ((0, _validate.validatePhone)(value) || (0, _validate.validateCall)(value)) {
					callback();
				} else {
					callback(new Error('请填写正确格式的手机号或座机号！'));
				}
			}
		};
		return {
			labelPosition: 'left',
			itemList: [],
			form: {
				id: '',
				company: '',
				address: '',
				contacts: '',
				contactsPhone: ''
			},
			rules: {
				address: [{ required: true, message: '地址不能为空' }],
				contacts: [{ required: true, message: '联系人不能为空' }],
				contactsPhone: [{ validator: checkPhone, trigger: 'blur' }]
			},
			isLoad: true
		};
	},

	watch: {},
	mounted: function mounted() {
		this.ManufacturerInfoByLogin();
	},

	methods: {
		saveAction: function saveAction() {
			var _this = this;

			this.$refs['form'].validate(function (valid) {
				if (valid) {
					var address = _this.form.address;
					var contactsName = _this.form.contacts;
					var contactsPhone = _this.form.contactsPhone;
					_this.isLoad = true;
					(0, _basicData.updateManufacturerInfo)({ address: address, contactsName: contactsName, contactsPhone: contactsPhone }).then(function (res) {
						_this.isLoad = false;
						res.msg === 0 ? _this.$message.success("保存成功！") : _this.$message.error((0, _index.backCN)(res.code));
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		ManufacturerInfoByLogin: function ManufacturerInfoByLogin() {
			var _this2 = this;

			this.isLoad = true;
			(0, _basicData.getManufacturerInfoByLogin)().then(function (res) {
				_this2.isLoad = false;
				if (res.msg == 0) {
					_this2.form.company = res.name;
					_this2.form.address = res.address;
					_this2.form.contacts = res.contacts;
					_this2.form.contactsPhone = res.contactsPhone;
				}
			});
		}
	}
};

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-0dc35342] {\n    background: #f5f5f5;\n}\n.clearfix[data-v-0dc35342]:before,\n.clearfix[data-v-0dc35342]:after {\n    display: table;\n    content: \"\";\n}\n.clearfix[data-v-0dc35342]:after {\n    clear: both\n}\n.box-card[data-v-0dc35342] {\n    width: 100%;\n    min-width: 637px;\n    margin-bottom: 20px;\n}\n.survey-container[data-v-0dc35342] {\n}\n.survey-item-wrap[data-v-0dc35342] {\n    padding: 5px 0;\n}\n.survey-item[data-v-0dc35342] {\n    border-right: 1px solid #e0e0e0;\n}\n.survey-item-wrap:last-child .survey-item[data-v-0dc35342] {\n    border: none;\n}\n.survey-item h3[data-v-0dc35342] {\n    font-size: 13px;\n    color: #666;\n}\n.survey-item p[data-v-0dc35342] {\n    color: #f88b00;\n    font-size: 25px;\n}\n.content-rowspan div[data-v-0dc35342] {\n    padding-left: 13px;\n    line-height: 46px;\n    border-bottom: 1px solid #ECEDEE;\n}\n.extend .cell[data-v-0dc35342] {\n    padding: 0;\n}\n.flow-details[data-v-0dc35342] {\n    border-bottom: 1px solid #e8e8e8;\n}\n.flow-details[data-v-0dc35342]:last-child {\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 848:
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
      "label": "公司地址:",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入公司地址"
    },
    model: {
      value: (_vm.form.address),
      callback: function($$v) {
        _vm.form.address = $$v
      },
      expression: "form.address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系人:",
      "prop": "contacts"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入联系人"
    },
    model: {
      value: (_vm.form.contacts),
      callback: function($$v) {
        _vm.form.contacts = $$v
      },
      expression: "form.contacts"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系号码:",
      "prop": "contactsPhone"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入联系号码"
    },
    model: {
      value: (_vm.form.contactsPhone),
      callback: function($$v) {
        _vm.form.contactsPhone = $$v
      },
      expression: "form.contactsPhone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    on: {
      "click": _vm.saveAction
    }
  }, [_vm._v("保存")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0dc35342", module.exports)
  }
}

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(804);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("750fc79e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc35342\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./baseInfo.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0dc35342\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./baseInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=38.fa925729126e0af45f17.js.map