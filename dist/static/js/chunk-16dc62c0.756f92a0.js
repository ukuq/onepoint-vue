(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16dc62c0"],{8766:function(t,e,n){"use strict";n("f849")},c1f7:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",[n("el-col",{attrs:{span:20,offset:2}},[n("div",{staticStyle:{padding:"15px 0",position:"relative","border-bottom":"solid 1px #e6e6e6"}},[n("a",{attrs:{target:"_blank",href:""}},[n("img",{staticStyle:{width:"32px",height:"32px"},attrs:{src:t.favicon,alt:"logo"}})]),n("el-menu",{class:t.menuClass,attrs:{mode:t.menuMode,router:!0}},[n("el-menu-item",{attrs:{index:"/"}},[t._v("文件管理")]),n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[t._v("云盘管理")]),n("el-menu-item",{attrs:{index:"/drive-add"}},[t._v("新增云盘")]),n("el-menu-item",{attrs:{index:"/drive-list"}},[t._v("云盘信息")])],2),n("el-submenu",{attrs:{index:"3"}},[n("template",{slot:"title"},[t._v("系统设置")]),n("el-menu-item",{attrs:{index:"/setting"}},[t._v("基本设置")]),n("el-menu-item",{attrs:{index:"/pass-setting"}},[t._v("密码设置")])],2),n("el-menu-item",{attrs:{index:"/redirect/http://github.com/ukuq/onepoint"}},[t._v("交流反馈")])],1),n("el-dropdown",{staticClass:"avatar-container right-menu-item hover-effect",staticStyle:{float:"right"}},[n("svg-icon",{staticStyle:{width:"28px",height:"28px"},attrs:{"icon-class":"account-circle"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[t._v("Home")])],1),n("router-link",{attrs:{to:{name:"Dashboard"}}},[n("el-dropdown-item",[t._v("Dashboard")])],1),n("a",{attrs:{target:"_blank",href:"http://github.com/ukuq/onepoint-vue"}},[n("el-dropdown-item",[t._v("Github")])],1),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(e){return t.logout(e)}}},[n("span",{staticStyle:{display:"block"}},[t._v("Log Out")])])],1)],1)],1)])],1),n("el-row",[n("el-col",{attrs:{span:20,offset:2}},[n("router-view",{key:t.$route.path,staticClass:"mt-3"})],1)],1),n("div",{staticClass:"ml-3 mb-5 op-s-icon d-md-none",staticStyle:{position:"fixed",left:"0",bottom:"0","z-index":"2017"},on:{click:t.showMenu}},[n("svg-icon",{attrs:{"icon-class":t.menuShow?"chevron-left":"chevron-right"}})],1)],1)},i=[],r=(n("96cf"),n("1da1")),s={data:function(){return{menuMode:"horizontal",menuShow:!1}},computed:{menuClass:function(){return this.menuMode?"d-md-block d-none op-m-menu-h":this.menuShow?"op-m-menu-v":"op-m-menu-v d-none"},favicon:function(){return this.$store.state.system.baseURL+"/favicon.ico"}},methods:{showMenu:function(){this.menuMode&&(this.menuMode=""),this.menuShow=!this.menuShow},logout:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("system/logout");case 2:return e.abrupt("return",t.$router.push("/login?redirect=".concat(t.$route.fullPath)));case 3:case"end":return e.stop()}}),e)})))()}}},a=s,u=(n("8766"),n("2877")),l=Object(u["a"])(a,o,i,!1,null,null,null);e["default"]=l.exports},f849:function(t,e,n){}}]);