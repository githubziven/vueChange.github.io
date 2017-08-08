webpackJsonp([21],{

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(928)
}
var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(792),
  /* template */
  __webpack_require__(886),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-dcdbee02",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhongwei/ziven/public/21cn/wulian/vue-recharge/src/views/管理员/roleManager/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dcdbee02", Component.options)
  } else {
    hotAPI.reload("data-v-dcdbee02", Component.options)
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

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(99);

var _stringify2 = _interopRequireDefault(_stringify);

var _usual = __webpack_require__(326);

var _roleManager = __webpack_require__(800);

var _index = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            tableData: [],
            tableCount: 0,
            currentPage: 1,
            form: {
                mid: '',
                ctId: ''
            },
            rform: {
                name: '',
                address: '',
                contacts: '',
                contactPhone: '',
                account: '',
                password: ''
            },
            rules: {
                name: [{ required: true, message: '名称不能为空' }],
                address: [{ required: true, message: '地址不能为空' }],
                contacts: [{ required: true, message: '联系人不能为空' }],
                contactPhone: [{ required: true, message: '联系电话不能为空' }],
                account: [{ required: true, message: '账号不能为空' }],
                password: [{ required: true, message: '密码不能为空' }]
            },
            mList: [],
            ctList: [],
            addFormVisible: false,
            registerFormVisible: false,
            containerLoad: false,
            isLoad: true
        };
    },

    watch: {},
    mounted: function mounted() {
        this.getListCTAndManufacturer(1, 10);
    },

    methods: {
        addDialogShow: function addDialogShow() {
            var _this = this;

            this.containerLoad = true;
            (0, _usual.getListManufacturerGeneral)().then(function (res) {
                if (res.msg === 0) {
                    _this.mList = res.mList;
                    _this.form.mid = res.mList[0].mid;
                    (0, _usual.getListCTInfoGeneral)().then(function (res) {
                        if (res.msg === 0) {
                            _this.containerLoad = false;
                            _this.ctList = res.ctList;
                            _this.form.ctId = res.ctList[0].ctId;
                            _this.addFormVisible = true;
                        } else {
                            _this.$message.error((0, _index.backCN)(res.code));
                            _this.containerLoad = false;
                        }
                    }).catch(function () {
                        _this.containerLoad = false;
                    });
                } else {
                    _this.$message.error((0, _index.backCN)(res.code));
                    _this.containerLoad = false;
                }
            }).catch(function () {
                _this.containerLoad = false;
            });
        },
        addAction: function addAction() {
            var _this2 = this;

            var data = {
                mid: this.form.mid,
                ctId: this.form.ctId
            };
            this.addFormVisible = false;
            this.isLoad = true;
            (0, _roleManager.saveCTManufacturer)(data).then(function (res) {
                res.msg === 0 ? _this2.$message.success("添加成功！") : _this2.$message.error((0, _index.backCN)(res.code));
                res.msg === 0 ? _this2.getListCTAndManufacturer(1, 10) : '';
                res.msg != 0 ? _this2.isLoad = false : '';
            }).catch(function (err) {
                _this2.isLoad = false;
                _this2.$message.error((0, _index.backCN)(err.status));
            });
        },
        registerAction: function registerAction() {
            var _this3 = this;

            this.$refs["rform"].validate(function (valid) {
                if (valid) {
                    var data = {
                        ctInfo: (0, _stringify2.default)({
                            "name": _this3.rform.name,
                            "address": _this3.rform.address,
                            "contacts": _this3.rform.contacts,
                            "contactPhone": _this3.rform.contactPhone
                        }),
                        accountInfo: (0, _stringify2.default)({
                            "account": _this3.rform.account,
                            "password": _this3.rform.password
                        })
                    };
                    _this3.registerFormVisible = false;
                    _this3.isLoad = true;
                    (0, _roleManager.registerCT)(data).then(function (res) {
                        res.msg === 0 ? _this3.$message.success("注册成功！") : _this3.$message.error((0, _index.backCN)(res.code));
                        res.msg === 0 ? _this3.getListCTAndManufacturer(1, 10) : '';
                        res.msg != 0 ? _this3.isLoad = false : '';
                    }).catch(function (err) {
                        _this3.isLoad = false;
                        _this3.$message.error((0, _index.backCN)(err.status));
                    });
                } else {
                    return false;
                }
            });
        },
        getListCTAndManufacturer: function getListCTAndManufacturer(page, num) {
            var _this4 = this;

            this.isLoad = true;
            (0, _roleManager.listCTAndManufacturer)({ page: page, num: num }).then(function (res) {
                _this4.isLoad = false;
                console.log("res", res);
                if (res.msg == 0) {
                    _this4.tableData = res.list;
                    page === 1 ? _this4.tableCount = res.count : '';
                } else {
                    _this4.tableData = [];
                    _this4.tableCount = 0;
                    res.msg != 1 ? _this4.$message.error((0, _index.backCN)(res.code)) : '';
                }
            }).catch(function (err) {
                _this4.isLoad = false;
                _this4.$message.error((0, _index.backCN)(err.status));
            });
        },
        pageChange: function pageChange(page) {
            this.getListCTAndManufacturer(page, 10);
        }
    }
};

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listCTAndManufacturer = listCTAndManufacturer;
exports.saveCTManufacturer = saveCTManufacturer;
exports.registerCT = registerCT;

var _fetch = __webpack_require__(95);

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listCTAndManufacturer(data) {
    return (0, _fetch2.default)({
        url: 'recharge/manager/listCTAndManufacturer.do',
        method: 'get',
        data: data
    });
}

function saveCTManufacturer(data) {
    return (0, _fetch2.default)({
        url: 'recharge/manager/saveCTManufacturer.do',
        method: 'post',
        data: data
    });
}

function registerCT(data) {
    return (0, _fetch2.default)({
        url: 'recharge/manager/registerCT.do',
        method: 'post',
        data: data
    });
}

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.app-container[data-v-dcdbee02] {\n    background: #f5f5f5;\n}\n.clearfix[data-v-dcdbee02]:before,\n.clearfix[data-v-dcdbee02]:after {\n    display: table;\n    content: \"\";\n}\n.clearfix[data-v-dcdbee02]:after {\n    clear: both\n}\n.box-card[data-v-dcdbee02] {\n    width: 100%;\n    min-width: 637px;\n    margin-bottom: 20px;\n}\n.survey-container[data-v-dcdbee02] {\n}\n.survey-item-wrap[data-v-dcdbee02] {\n    padding: 5px 0;\n}\n.survey-item[data-v-dcdbee02] {\n    border-right: 1px solid #e0e0e0;\n}\n.survey-item-wrap:last-child .survey-item[data-v-dcdbee02] {\n    border: none;\n}\n.survey-item h3[data-v-dcdbee02] {\n    font-size: 13px;\n    color: #666;\n}\n.survey-item p[data-v-dcdbee02] {\n    color: #f88b00;\n    font-size: 25px;\n}\n.content-rowspan div[data-v-dcdbee02] {\n    padding-left: 13px;\n    line-height: 46px;\n    border-bottom: 1px solid #ECEDEE;\n}\n.extend .cell[data-v-dcdbee02] {\n    padding: 0;\n}\n.flow-details[data-v-dcdbee02] {\n    border-bottom: 1px solid #e8e8e8;\n}\n.flow-details[data-v-dcdbee02]:last-child {\n    border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.containerLoad),
      expression: "containerLoad"
    }],
    staticClass: "app-container"
  }, [_c('el-button', {
    on: {
      "click": _vm.addDialogShow
    }
  }, [_vm._v("添加关联")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.registerFormVisible = true
      }
    }
  }, [_vm._v("电信注册")]), _vm._v(" "), _c('el-table', {
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
      "prop": "mid",
      "label": "厂商编号",
      "width": "140"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "mname",
      "label": "厂商名称",
      "width": "300"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "ctId",
      "label": "电信编号",
      "width": "150"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "align": "center",
      "prop": "ctName",
      "label": "电信名称"
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
  })], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "添加关联",
      "visible": _vm.addFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.addFormVisible = $event
      }
    }
  }, [_c('el-form', {
    attrs: {
      "model": _vm.form
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "厂商",
      "label-width": "300"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.mid),
      callback: function($$v) {
        _vm.form.mid = $$v
      },
      expression: "form.mid"
    }
  }, _vm._l((_vm.mList), function(m) {
    return _c('el-option', {
      key: m.mid,
      attrs: {
        "label": m.mname,
        "value": m.mid
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电信",
      "label-width": "300"
    }
  }, [_c('el-select', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择"
    },
    model: {
      value: (_vm.form.ctId),
      callback: function($$v) {
        _vm.form.ctId = $$v
      },
      expression: "form.ctId"
    }
  }, _vm._l((_vm.ctList), function(ct) {
    return _c('el-option', {
      key: ct.ctId,
      attrs: {
        "label": ct.ctName,
        "value": ct.ctId
      }
    })
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.addFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.addAction
    }
  }, [_vm._v("确 定")])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "电信注册",
      "visible": _vm.registerFormVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.registerFormVisible = $event
      }
    }
  }, [_c('el-form', {
    ref: "rform",
    attrs: {
      "model": _vm.rform,
      "rules": _vm.rules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "电信名称",
      "label-width": "200",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.name),
      callback: function($$v) {
        _vm.rform.name = $$v
      },
      expression: "rform.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "电信地址",
      "label-width": "200",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.address),
      callback: function($$v) {
        _vm.rform.address = $$v
      },
      expression: "rform.address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系人",
      "label-width": "200",
      "prop": "contacts"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.contacts),
      callback: function($$v) {
        _vm.rform.contacts = $$v
      },
      expression: "rform.contacts"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "联系电话",
      "label-width": "200",
      "prop": "contactPhone"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.contactPhone),
      callback: function($$v) {
        _vm.rform.contactPhone = $$v
      },
      expression: "rform.contactPhone"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "账号",
      "label-width": "200",
      "prop": "account"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.account),
      callback: function($$v) {
        _vm.rform.account = $$v
      },
      expression: "rform.account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密码",
      "label-width": "200",
      "prop": "password"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.rform.password),
      callback: function($$v) {
        _vm.rform.password = $$v
      },
      expression: "rform.password"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.registerFormVisible = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.registerAction
    }
  }, [_vm._v("确 定")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dcdbee02", module.exports)
  }
}

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(842);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("50f8f1f1", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dcdbee02\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-dcdbee02\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=21.6f735bee68042bba614d.js.map