webpackJsonp([22],{

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(915)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(789),
  /* template */
  __webpack_require__(873),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-68264ece",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/管理员/financialSettlement/vendorSettlement.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vendorSettlement.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68264ece", Component.options)
  } else {
    hotAPI.reload("data-v-68264ece", Component.options)
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

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getListRechargeCommisionByManager = getListRechargeCommisionByManager;
exports.getListRechargeStatementByManager = getListRechargeStatementByManager;
exports.getListRechargeStatementDetail = getListRechargeStatementDetail;
exports.getListRechargeCommisionDetail = getListRechargeCommisionDetail;
exports.listRechargeCommision = listRechargeCommision;
exports.listRechargeStatement = listRechargeStatement;

var _fetch = __webpack_require__(95);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getListRechargeCommisionByManager(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeCommisionByManager.do',
		method: 'get',
		data: data
	});
}

function getListRechargeStatementByManager(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeStatementByManager.do',
		method: 'get',
		data: data
	});
}

function getListRechargeStatementDetail(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeStatementDetail.do',
		method: 'get',
		data: data
	});
}

function getListRechargeCommisionDetail(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeCommisionDetail.do',
		method: 'get',
		data: data
	});
}
function listRechargeCommision(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeCommision.do',
		method: 'get',
		data: data
	});
}
function listRechargeStatement(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listRechargeStatement.do',
		method: 'get',
		data: data
	});
}

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _usual = __webpack_require__(326);

var _financialSettlement = __webpack_require__(466);

var _index = __webpack_require__(60);

exports.default = {
	data: function data() {
		return {
			options: [],
			value: '',
			tableData: [],
			month: '2017-06',
			currentMonth: '201706',
			currentPage: 1,
			tableCount: 0,
			num: 10,
			dTableData: [],
			isDetail: false,
			isLoad: true
		};
	},

	watch: {
		options: function options() {
			this.value = this.options[0].mid;
		}
	},
	mounted: function mounted() {
		this.initHeader();
	},

	methods: {
		initHeader: function initHeader() {
			var _this = this;

			(0, _usual.getListManufacturerGeneral)().then(function (res) {
				res.msg === 0 ? _this.options = res.mList : _this.$message.error((0, _index.backCN)(res.code));
				res.msg != 0 ? _this.isLoad = false : '';
			}).catch(function (err) {
				_this.isLoad = false;
				_this.$message.error((0, _index.backCN)(err.status));
			});
		},
		dateChange: function dateChange(val) {
			this.currentMonth = val.split('-').join('');
			this.isDetail ? this.ListRechargeStatementDetail(this.currentMonth, 1, this.num) : this.ListRechargeStatementByManager(this.currentMonth, this.value, 1, this.num);
		},
		companyChange: function companyChange(mid) {
			this.manufacturerInfoByLogin(mid);
		},
		pageChange: function pageChange(page) {
			this.isDetail ? this.ListRechargeStatementDetail(this.currentMonth, page, this.num) : this.ListRechargeStatementByManager(this.currentMonth, this.value, page, this.num);
		},
		searchAction: function searchAction() {
			this.isDetail = false;
			this.ListRechargeStatementByManager(this.currentMonth, this.value, 1, this.num);
		},
		searchDetailAction: function searchDetailAction() {
			this.isDetail = true;
			this.ListRechargeStatementDetail(this.currentMonth, 1, this.num);
		},
		ListRechargeStatementDetail: function ListRechargeStatementDetail(month, page, num) {
			var _this2 = this;

			this.isLoad = true;
			(0, _financialSettlement.getListRechargeStatementDetail)({ month: month, page: page, num: num }).then(function (res) {
				_this2.isLoad = false;
				if (res.msg == 0) {
					_this2.dTableData = res.statementDetailList;
					page === 1 ? _this2.tableCount = res.count : '';
				} else {
					_this2.dTableData = [];
					_this2.tableCount = 0;
				}
				res.msg != 0 && res.msg != 1 ? _this2.$message.error((0, _index.backCN)(res.code)) : '';
			}).catch(function (err) {
				_this2.isLoad = false;
				_this2.$message.error((0, _index.backCN)(err.status));
			});
		},
		ListRechargeStatementByManager: function ListRechargeStatementByManager(month, mid, page, num) {
			var _this3 = this;

			this.isLoad = true;
			(0, _financialSettlement.getListRechargeStatementByManager)({ month: month, mid: mid, page: page, num: num }).then(function (res) {
				_this3.isLoad = false;
				if (res.msg == 0) {
					_this3.tableData = res.statementsList;
					page === 1 ? _this3.tableCount = res.count : '';
				} else {
					_this3.tableData = [];
					_this3.tableCount = 0;
				}
				res.msg != 0 && res.msg != 1 ? _this3.$message.error((0, _index.backCN)(res.code)) : '';
			}).catch(function (err) {
				_this3.isLoad = false;
				_this3.$message.error((0, _index.backCN)(err.status));
			});
		},
		manufacturerInfoByLogin: function manufacturerInfoByLogin(mid) {
			var _this4 = this;

			this.isLoad = true;
			(0, _usual.giveManufacturerAuthority)({ mid: mid }).then(function (res) {
				if (res.msg == 0) {
					_this4.ListRechargeStatementByManager(_this4.currentMonth, mid, 1, _this4.num);
				} else {
					_this4.isLoad = false;
					_this4.$message.error((0, _index.backCN)(res.code));
				}
			}).catch(function (err) {
				_this4.isLoad = false;
				_this4.$message.error((0, _index.backCN)(err.status));
			});
		}
	}
};

/***/ }),

/***/ 829:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-68264ece] {\n\tbackground: #f5f5f5;\n}\n.label-colum[data-v-68264ece] {\n\tfont-size: 14px;\n\tcolor: #fff;\n\tfont-weight: 100;\n}\n", ""]);

// exports


/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-container"
  }, [_c('p', [_c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_vm._v("\n\t\t\t厂商角色:\n\t\t\t"), _c('el-select', {
    attrs: {
      "placeholder": "请选择"
    },
    on: {
      "change": _vm.companyChange
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.mid,
      attrs: {
        "label": item.mname,
        "value": item.mid
      }
    })
  }))], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_vm._v("\n\t\t\t选择日期:\n\t\t\t"), _c('el-date-picker', {
    attrs: {
      "filters": "",
      "type": "month",
      "format": "yyyy-MM",
      "placeholder": "选择月",
      "clearable": false
    },
    on: {
      "change": _vm.dateChange
    },
    model: {
      value: (_vm.month),
      callback: function($$v) {
        _vm.month = $$v
      },
      expression: "month"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": _vm.searchAction
    }
  }, [_vm._v("查询账单")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": _vm.searchDetailAction
    }
  }, [_vm._v("查询详单")])], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isDetail),
      expression: "!isDetail"
    }, {
      name: "loading",
      rawName: "v-loading",
      value: (_vm.isLoad),
      expression: "isLoad"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "manufacturerDO.id",
      "label": "客户编号",
      "width": "70",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "manufacturerDO.name",
      "label": "客户名称",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "contractNumber",
      "label": "合同编号",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "time",
      "label": "收入年月",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "充值模式",
      "align": "center"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "grossPrice",
      "label": "充值流水",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payWay",
      "label": "支付渠道",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "payWayCost",
      "label": "渠道成本",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "packagePrice",
      "label": "流量包成本",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "grossProfit",
      "label": "总毛利",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerRatio",
      "label": "平台分成比例",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "platformProfit",
      "label": "平台毛利",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerProfit",
      "label": "客户毛利",
      "width": "120",
      "align": "center"
    }
  })], 1), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "卡管理费模式",
      "align": "center"
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "cardNum",
      "label": "客户卡管理数量",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "managerRatio",
      "label": "管理费（每张）",
      "width": "120",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "managerPrice",
      "label": "平台管理费收入",
      "width": "120",
      "align": "center"
    }
  })], 1), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "platformIncome",
      "label": "平台总收入",
      "width": "90",
      "align": "center",
      "fixed": "right"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "customerIncome",
      "label": "客户总收入",
      "width": "90",
      "align": "center",
      "fixed": "right"
    }
  })], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isDetail),
      expression: "isDetail"
    }, {
      name: "loading",
      rawName: "v-loading",
      value: (_vm.isLoad),
      expression: "isLoad"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.dTableData,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "orderId",
      "label": "订单号",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ptId",
      "label": "流量包编号",
      "width": "80",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ptName",
      "label": "流量包名称",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "ptPrice",
      "label": "流量包原价",
      "width": "150",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "discount",
      "label": "折扣",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "realPrice",
      "label": "流量包成本价",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "orderPrice",
      "label": "订单金额",
      "width": "90",
      "align": "center"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "grossProfit",
      "label": "毛利（含手续费）",
      "width": "90",
      "align": "center"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center",
      "margin": "20px auto"
    }
  }, [_c('el-pagination', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "page-size": 10,
      "current-page": _vm.currentPage,
      "layout": "prev, pager, next, jumper",
      "total": _vm.tableCount
    },
    on: {
      "current-change": _vm.pageChange,
      "update:currentPage": function($event) {
        _vm.currentPage = $event
      }
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-68264ece", module.exports)
  }
}

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(829);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5f0bf946", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68264ece\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vendorSettlement.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68264ece\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vendorSettlement.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=22.9c6a4f4f4c06120d266c.js.map