(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b9a720"],{2336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TimeAgo=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("59d2"),i=n("b607");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.TimeAgo=function(){function e(t,n){a(this,e),this.nowDate=t,this.defaultLocale=n||"en"}return r(e,[{key:"setLocale",value:function(e){this.defaultLocale=e}},{key:"doRender",value:function(e,t,n){var r=this,a=(0,o.diffSec)(t,this.nowDate);e.innerHTML=(0,o.formatDiff)(a,n,this.defaultLocale);var l=(0,i.run)(function(){r.doRender(e,t,n)},Math.min(1e3*(0,o.nextInterval)(a),2147483647));(0,o.setTidAttr)(e,l)}},{key:"render",value:function(e,t){void 0===e.length&&(e=[e]);for(var n=void 0,r=0,a=e.length;r<a;r++)n=e[r],(0,i.cancel)(n),this.doRender(n,(0,o.getDateAttr)(n),t)}},{key:"format",value:function(e,t){return(0,o.formatDiff)((0,o.diffSec)(e,this.nowDate),t,this.defaultLocale)}}]),e}()},"59d2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setTidAttr=t.getDateAttr=t.getAttr=t.nextInterval=t.diffSec=t.formatDiff=t.toDate=t.toInt=void 0;var r=n("94fc"),o=n("df13"),i=t.toInt=function(e){return parseInt(e)},a=t.toDate=function(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(i(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e))},l=(t.formatDiff=function(e,t,n){t=o.Locales[t]?t:o.Locales[n]?n:"en";for(var a=0,l=e<0?1:0,s=e=Math.abs(e);e>=r.SEC_ARRAY[a]&&a<r.SEC_ARRAY.length;a++)e/=r.SEC_ARRAY[a];return e=i(e),a*=2,e>(0===a?9:1)&&(a+=1),o.Locales[t](e,a,s)[l].replace("%s",e)},t.diffSec=function(e,t){return t=t?a(t):new Date,(t-a(e))/1e3},t.nextInterval=function(e){for(var t=1,n=0,o=Math.abs(e);e>=r.SEC_ARRAY[n]&&n<r.SEC_ARRAY.length;n++)e/=r.SEC_ARRAY[n],t*=r.SEC_ARRAY[n];return o%=t,o=o?t-o:t,Math.ceil(o)},t.getAttr=function(e,t){return e.getAttribute?e.getAttribute(t):e.attr?e.attr(t):void 0});t.getDateAttr=function(e){return l(e,r.ATTR_TIMEAGO)||l(e,r.ATTR_DATETIME)},t.setTidAttr=function(e,t){return e.setAttribute?e.setAttribute(r.ATTR_DATA_TID,t):e.attr?e.attr(r.ATTR_DATA_TID,t):void 0}},"94fc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.IndexMapEn="second_minute_hour_day_week_month_year".split("_"),t.IndexMapZH="秒_分钟_小时_天_周_月_年".split("_"),t.ATTR_DATA_TID="data-tid",t.SEC_ARRAY=[60,60,24,7,365/7/12,12],t.ATTR_TIMEAGO="data-timeago",t.ATTR_DATETIME="datetime"},a61f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("2336"),o=n("df13"),i=n("b607"),a=function(e,t){return new r.TimeAgo(e,t)};a.register=o.register,a.cancel=i.cancel,t.default=a,e.exports=t["default"]},b607:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.run=t.cancel=t.Timers=void 0;var r=n("59d2"),o=n("94fc"),i=t.Timers=[],a=function(e){e&&(clearTimeout(e),delete i[e])};t.cancel=function(e){if(e)a((0,r.getAttr)(e,o.ATTR_DATA_TID));else for(var t in i)a(t)},t.run=function(e,t){var n=setTimeout(function(){a(n),e()},t);return i[n]=0,n}},df13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.Locales=void 0;var r=n("94fc"),o=function(e,t){if(0===t)return["刚刚","片刻后"];var n=r.IndexMapZH[parseInt(t/2)];return[e+" "+n+"前",e+" "+n+"后"]},i=function(e,t){if(0===t)return["just now","right now"];var n=r.IndexMapEn[parseInt(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]},a=t.Locales={en:i,zh_CN:o};t.register=function(e,t){a[e]=t}},f2b9:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting-card"},[n("el-dialog",{attrs:{title:"添加监控项",visible:e.dialogFormVisible,width:e.mobileClient?"80%":"50%"},on:{"update:visible":function(t){e.dialogFormVisible=t}},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-popover",{attrs:{placement:"right",title:"提示",width:"200",trigger:"hover"}},[e._v("若存在相同名称，会覆盖已有值\n                    "),n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]),n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.tag,callback:function(t){e.$set(e.form,"tag",t)},expression:"form.tag"}})],1),n("el-form-item",{attrs:{label:"关键字"}},[n("el-popover",{attrs:{placement:"right",title:"提示",width:"200",trigger:"hover"}},[e._v("熟悉\n                    "),n("a",{attrs:{referrerpolicy:"no-referrer",href:"https://github.com/search/advanced",target:"_blank"}},[e._v("GitHub 搜索语法")]),e._v("可以提高监控效率: OR/AND/NOT\n                    "),n("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]),n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.keyword,callback:function(t){e.$set(e.form,"keyword",t)},expression:"form.keyword"}})],1),n("el-form-item",{attrs:{label:"开启/关闭"}},[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.enabled,callback:function(t){e.$set(e.form,"enabled",t)},expression:"form.enabled"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{round:"",size:"mini",type:"primary"},on:{click:function(t){e.handleAddQuery(e.form)}}},[e._v("确 定")])],1)],1),n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("\n        添加\n    ")]),n("el-table",{attrs:{data:e.rules,stripe:!0}},[n("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("router-link",{attrs:{to:"/view/tag/"+t.row.tag}},[e._v("\n                    "+e._s(t.row.tag)+"\n                ")])]}}])}),n("el-table-column",{attrs:{label:"关键字","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("a",{attrs:{rel:"noopener noreferrer",href:"https://github.com/search?o=desc&q="+t.row.keyword+"&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93",target:"_blank"}},[e._v(e._s(t.row.keyword))])]}}])}),n("el-table-column",{attrs:{label:"最后抓取时间",prop:"last",width:"150",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.last?n("span",[e._v(e._s(e._f("timeAgo")(1e3*t.row.last)))]):e._e()]}}])}),n("el-table-column",{attrs:{label:"总数",width:"200",prop:"api_total",sortable:""}}),n("el-table-column",{attrs:{label:"已抓取",width:"200",prop:"found_total",sortable:""}}),n("el-table-column",{attrs:{label:"状态",width:"100",prop:"enabled",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(n){e.updateEnabled(t.row)}},model:{value:t.row.enabled,callback:function(n){e.$set(t.row,"enabled",n)},expression:"scope.row.enabled"}})]}}])}),n("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button-group",[n("el-button",{attrs:{size:"mini",plain:"",round:""},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑\n                    ")]),n("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(n){e.handleDeleteQuery(t.$index,t.row)}}},[e._v("删除\n                    ")]),0===t.row.status?n("el-button",{attrs:{size:"mini",plain:"",round:"",type:"primary",icon:"el-icon-loading"},on:{click:function(n){e.handleSpiderResult(t.row)}}}):e._e(),1===t.row.status?n("el-button",{attrs:{size:"mini",type:"success",plain:"",round:"",icon:"el-icon-success"},on:{click:function(n){e.handleSpiderResult(t.row)}}}):e._e(),-1===t.row.status?n("el-button",{attrs:{size:"mini",type:"warning",plain:"",round:"",icon:"el-icon-warning"},on:{click:function(n){e.handleSpiderResult(t.row)}}}):e._e()],1)]}}])})],1)],1)},o=[],i=(n("5a09"),n("3a0f"),n("a3a3"),n("4d0b"),n("a61f")),a=n.n(i),l=new a.a,s={data:function(){return{rules:[],dialogFormVisible:!1,form:{tag:"",keyword:"",enabled:!0}}},computed:{mobileClient:function(){return document.documentElement.clientWidth<document.documentElement.clientHeight}},methods:{handleEdit:function(e,t){this.form=t,this.dialogFormVisible=!0},fetchQuery:function(){var e=this;this.axios.get(this.api.settingQuery).then(function(t){e.rules=t.data.result}).catch(function(t){e.$message.error(t.toString())})},handleSpiderResult:function(e){var t=l.format(1e3*e.last,"zh_CN");e.status>-1?this.$message.success(t+e.reason):this.$message.warning(t+e.reason)},handleDeleteQuery:function(e,t){var n=this;this.axios.delete("".concat(this.api.settingQuery,"?_id=").concat(t._id,"&tag=").concat(t.tag)).then(function(e){n.$message.success(e.data.msg),n.dialogFormVisible=!1,n.rules=e.data.result}).catch(function(e){n.$message.error(e.toString()),n.dialogFormVisible=!1})},updateEnabled:function(e){var t=this,n={tag:e.tag,keyword:e.keyword,enabled:e.enabled};this.axios.post(this.api.settingQuery,n).then(function(e){t.$message.success(e.data.msg),t.dialogFormVisible=!1,t.rules=e.data.result}).catch(function(e){t.$message.error(e.toString()),t.dialogFormVisible=!1})},handleAddQuery:function(e){var t=this;this.axios.post(this.api.settingQuery,e).then(function(e){t.$message.success(e.data.msg),t.dialogFormVisible=!1,t.rules=e.data.result,t.form={tag:"",keyword:"",enabled:!0}}).catch(function(e){t.$message.error(e.toString()),t.dialogFormVisible=!1})}},mounted:function(){this.fetchQuery()}},c=s,u=n("048f"),d=Object(u["a"])(c,r,o,!1,null,null,null);d.options.__file="Rule.vue";t["default"]=d.exports}}]);