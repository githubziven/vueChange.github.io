webpackJsonp([19],{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(916)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(796),
  /* template */
  __webpack_require__(874),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-711ceaaa",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/管理员/userOrder/orderStatistics.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] orderStatistics.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-711ceaaa", Component.options)
  } else {
    hotAPI.reload("data-v-711ceaaa", Component.options)
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

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getOrderStatisticsByDate = getOrderStatisticsByDate;
exports.getListPayOrderByDate = getListPayOrderByDate;

var _fetch = __webpack_require__(95);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOrderStatisticsByDate(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/getOrderStatisticsByDate.do',
		method: 'get',
		data: data
	});
}

function getListPayOrderByDate(data) {
	return (0, _fetch2.default)({
		url: '/recharge/manager/listPayOrderByDate.do',
		method: 'get',
		data: data
	});
}

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(754), __esModule: true };

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(62);
module.exports = __webpack_require__(755);

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9)
  , get      = __webpack_require__(98);
module.exports = __webpack_require__(7).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getIterator2 = __webpack_require__(753);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _usual = __webpack_require__(326);

var _orderStatistics = __webpack_require__(745);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			pickerOptions2: {
				shortcuts: [{
					text: '最近一周',
					onClick: function onClick(picker) {
						var end = new Date();
						var start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick: function onClick(picker) {
						var end = new Date();
						var start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
					onClick: function onClick(picker) {
						var end = new Date();
						var start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			options: [],
			dateInput: ['2017-03-01', '2017-12-12'],
			mainChart: {},
			value: '',
			tableData: [],
			tableCount: 0,
			currentPage: 1,
			currentDate: ['20170301', '20171212'],
			isShowDetail: true,
			isVisiable: true,
			isLoad: true,
			line1: '',
			line2: "分别为:",
			line3: ''
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

			this.isLoad = true;
			(0, _usual.getListManufacturerGeneral)().then(function (res) {
				res.msg === 0 ? _this.options = res.mList : _this.$message.error(backCN(res.code));
				res.msg != 0 ? _this.isLoad = false : '';
			}).catch(function (err) {
				_this.isLoad = false;
				_this.$message.error(backCN(err.status));
			});
		},
		pageChange: function pageChange(page) {
			this.ListPayOrderByDate(page, 10, this.currentDate[0], this.currentDate[1]);
		},
		companyChange: function companyChange(mid) {
			var _this2 = this;

			this.isLoad = true;
			(0, _usual.giveManufacturerAuthority)({ mid: mid }).then(function (res) {
				res.msg === 0 ? _this2.ListPayOrderByDate(1, 10, _this2.currentDate[0], _this2.currentDate[1]) : _this2.$message.error(backCN(res.code));
				res.msg != 0 ? _this2.isLoad = false : '';
			}).catch(function (err) {
				_this2.isLoad = false;
				_this2.$message.error(backCN(err.status));
			});
		},
		dateChange: function dateChange(date) {
			this.currentDate = [date.split(" - ")[0].split("-").join(''), date.split(" - ")[1].split("-").join('')];
			this.ListPayOrderByDate(1, 10, this.currentDate[0], this.currentDate[1]);
		},
		handleOptions: function handleOptions(options) {
			var obj = {};
			obj.legend = [];
			obj.data = [];
			for (var i in options.packageList) {
				var packObj = {};
				packObj.name = options.packageList[i].packageName;
				packObj.value = parseInt(options.packageList[i].packageCount);
				obj.legend.push(options.packageList[i].packageName);
				obj.data.push(packObj);
			}
			return obj;
		},
		orderContent: function orderContent(val) {
			return val.content.replace(/\（数据\）/g, '').replace(/非定向/g, '').split('（')[0];
		},
		OrderStatisticsByDate: function OrderStatisticsByDate(startDate, endDate) {
			var _this3 = this;

			this.isLoad = true;
			(0, _orderStatistics.getOrderStatisticsByDate)({ startDate: startDate, endDate: endDate }).then(function (res) {
				_this3.isLoad = false;
				console.log("res", res);

				_this3.line1 = "在该时段内，共有" + res.userCount + "位用户进行充值，充值总金额为" + res.priceTotal + "元,充值流量叠加包数量总计" + res.packageCount + "个。";
				var that = _this3;
				_this3.line3 = '';
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = (0, _getIterator3.default)(res.packageList.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var a = _step.value;

						console.log(res.packageList.length);
						a % 2 == 0 && a != 0 ? that.line3 += '<br>' : '';
						that.line3 += "[" + res.packageList[a].packageName + ":" + res.packageList[a].packageCount + "个]";
						a + 1 == res.packageList.length ? that.line3 += " 。" : that.line3 += ',';
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				_this3.line3 = that.line3;
			});
		},
		ListPayOrderByDate: function ListPayOrderByDate(page, num, startDate, endDate) {
			var _this4 = this;

			this.isLoad = true;
			(0, _orderStatistics.getListPayOrderByDate)({ page: page, num: num, startDate: startDate, endDate: endDate }).then(function (res) {

				if (res.msg == 0) {
					_this4.tableData = res.payOrderList;
					if (page === 1) {
						_this4.tableCount = res.count;
						_this4.OrderStatisticsByDate(startDate, endDate);
					} else {
						_this4.isLoad = false;
					}
				} else {
					_this4.isVisiable = false;
					_this4.isLoad = false;
					_this4.tableData = [];
					_this4.tableCount = 0;
				}
				res.msg != 0 && res.msg != 1 ? _this4.$message.error(backCN(res.code)) : '';
			}).catch(function (err) {
				_this4.isLoad = false;
				_this4.$message.error(backCN(err.status));
			});
		}
	}
};

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-711ceaaa] {\n\tbackground: #f5f5f5;\n}\n.box-card[data-v-711ceaaa] {\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\tborder-bottom-right-radius: 0px;\n\tborder-top-left-radius: 0px;\n}\n.hidden-content[data-v-711ceaaa] {\n\tpadding: 20px;\n\tborder-top: 1px solid #eaeefb;\n\tborder-bottom: 1px solid #D1DBE5;\n\tborder-left: 1px solid #D1DBE5;\n\tborder-right: 1px solid #D1DBE5;\n\tbackground-color: #f5f5f5;\n\tbox-sizing: border-box;\n\ttext-align: center;\n\tmargin-top: -1px;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);\n\ttransition: .2s;\n\tposition: relative;\n}\n.card-footer[data-v-711ceaaa] {\n\tborder-top: 1px solid #eaeefb;\n\tborder-bottom: 1px solid #D1DBE5;\n\tborder-left: 1px solid #D1DBE5;\n\tborder-right: 1px solid #D1DBE5;\n\theight: 36px;\n\tbox-sizing: border-box;\n\tbackground-color: #fff;\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n\ttext-align: center;\n\tmargin-top: -1px;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);\n\tcolor: #d3dce6;\n\tcursor: pointer;\n\ttransition: .2s;\n\tposition: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-container"
  }, [_c('p', [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_vm._v("\n\t\t\t\t厂商角色:\n\t\t\t\t"), _c('el-select', {
    attrs: {
      "filterable": "",
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
      "span": 12
    }
  }, [_vm._v("\n\t\t\t\t选择时间段：\n\t\t\t\t"), _c('el-date-picker', {
    attrs: {
      "type": "daterange",
      "align": "right",
      "placeholder": "选择日期范围",
      "picker-options": _vm.pickerOptions2
    },
    on: {
      "change": _vm.dateChange
    },
    model: {
      value: (_vm.dateInput),
      callback: function($$v) {
        _vm.dateInput = $$v
      },
      expression: "dateInput"
    }
  })], 1)], 1), _vm._v(" "), _c('div', [_c('el-card', {
    staticClass: "box-card",
    attrs: {
      "body-style": {
        padding: '0 20px'
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisiable),
      expression: "isVisiable"
    }],
    staticClass: "clearfix",
    slot: "header"
  }, [_c('span', {
    staticStyle: {
      "line-height": "0px",
      "font-size": "15px",
      "color": "#333"
    }
  }, [_vm._v("流量包订购情况")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isVisiable),
      expression: "isVisiable"
    }, {
      name: "loading",
      rawName: "v-loading",
      value: (_vm.isLoad),
      expression: "isLoad"
    }],
    staticClass: "chart-container"
  }, [_c('div', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "id": "main"
    }
  }, [_c('div', {
    staticClass: "line1"
  }, [_vm._v(_vm._s(_vm.line1))]), _vm._v(" "), _c('div', {
    staticClass: "line2"
  }, [_vm._v(_vm._s(_vm.line2))]), _vm._v(" "), _c('div', {
    staticClass: "line3",
    staticStyle: {
      "margin-left": "7px"
    }
  }, [_vm._v(_vm._s(_vm.line3))])])])]), _vm._v(" "), (_vm.isShowDetail) ? _c('div', {
    staticClass: "hidden-content"
  }, [_c('el-table', {
    directives: [{
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
      "align": "center",
      "prop": "number",
      "label": "接入号码",
      "width": "140"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "iccid",
      "label": "ICCID",
      "width": "200"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "orderId",
      "label": "订单号"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "time",
      "label": "交易时间",
      "width": "120"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "content",
      "width": "210",
      "label": "订单内容",
      "formatter": _vm.orderContent
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "price",
      "label": "金额(元)",
      "width": "100"
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
  })], 1)], 1) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-711ceaaa", module.exports)
  }
}

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(830);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0604514a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-711ceaaa\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./orderStatistics.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-711ceaaa\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./orderStatistics.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=19.e243bd6eefdc9fec4702.js.map