webpackJsonp([4],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),u=(e("L7Pj"),e("glag")),r=e.n(u),c=(e("xlLU"),{name:"App",data:function(){return{msg:"Welcome to Your Vue.js App",curPath:"/"}},created:function(){this.$route.path;console.log(this.$store.state.count)},mounted:function(){},methods:{},watch:{$route:function(t,n){this.curPath=t.path}}}),a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")(c,a,!1,function(t){e("SwR8")},null,null).exports,l=e("mvHQ"),s=e.n(l),p=e("/ocq");o.default.use(p.a),console.log(s()(p.a));var f=new p.a({mode:"history",base:"/h5",routes:[{path:"/",component:function(){return e.e(0).then(e.bind(null,"gORT"))}},{path:"/index",component:function(){return e.e(0).then(e.bind(null,"gORT"))}},{path:"/login",component:function(){return e.e(1).then(e.bind(null,"K31e"))}},{path:"/register",component:function(){return e.e(2).then(e.bind(null,"q3Wa"))}}]}),d=e("R4Sj");o.default.use(d.a);var h=new d.a.Store({state:{count:0,count1:1},getters:{total:function(t){return t.count+t.count1}},mutations:{increment:function(t){t.count++}},actions:{increment:function(t){t.commit("increment")}}});o.default.config.productionTip=!1,o.default.use(r.a),f.beforeEach(function(t,n,e){if(localStorage.getItem("accessToken")){if("/login"!=t.path)return e();e("/index")}else"/login"==t.path?e():e("/login")}),new o.default({el:"#app",router:f,store:h,components:{App:i},template:"<App/>"});n.default=f},SwR8:function(t,n){},xlLU:function(t,n){}},["NHnr"]);