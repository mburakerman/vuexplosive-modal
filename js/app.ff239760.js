webpackJsonp([1],{"+51I":function(e,t){},"+VGo":function(e,t){},0:function(e,t,o){e.exports=o("NHnr")},"0BLv":function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("/5sW"),s={name:"VuexplosionModal",props:{visible:{default:!1},title:{default:"Boo! 🔥"},closeIcon:{default:"<span>❌</span>"},content:{default:"<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a tenetur delectus reprehenderit, omnis doloremque at earum officia unde sequi accusantium corporis praesentium deserunt laboriosam dignissimos voluptatum culpa molestiae ullam. 👻</p>"}},data:function(){return{active:!1,explosionGifUrl:"https://cdn.pbrd.co/images/mYwKJYJI.gif"}},methods:{modalToggle:function(){this.active=!this.active}},watch:{visible:function(e,t){this.active=!this.active}}},n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"vuexplosive-modal",class:{"vuexplosive-modal-hidden":!e.active,"vuexplosive-modal-visible":e.active},attrs:{"aria-hidden":!e.active,tabindex:"-1",role:"dialog"},on:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"esc",27,t.key,"Escape")?e.modalToggle(t):null}}},[o("transition",{attrs:{name:"scale"}},[e.active?o("div",{staticClass:"vuexplosive-modal-container"},[o("div",{staticClass:"vuexplosive-modal-inner"},[o("div",{staticClass:"vuexplosive-modal-header"},[o("h2",{staticClass:"vuexplosive-modal-title"},[e._v(e._s(e.title))]),o("button",{staticClass:"vuexplosive-modal-close",attrs:{"arial-label":"close"},domProps:{innerHTML:e._s(e.closeIcon)},on:{click:e.modalToggle}})]),o("div",{staticClass:"vuexplosive-modal-content",domProps:{innerHTML:e._s(e.content)}}),o("div",{staticClass:"vuexplosive-modal-footer"},[o("button",{staticClass:"vuexplosive-modal-okay",on:{click:e.modalToggle}},[e._v("Okay 🗸")])])])]):e._e()]),o("div",{staticClass:"vuexplosive-modal-bg",on:{click:e.modalToggle}},[o("img",{staticClass:"vuexplosive-modal-explosion-gif",attrs:{src:e.active?e.explosionGifUrl:""}})])],1)},i=[],l=o("XyMi");function r(e){o("+51I")}var c=!1,u=r,m="data-v-0214fe76",v=null,d=Object(l["a"])(s,n,i,c,u,m,v),p=d.exports,f={name:"Home",components:{VuexplosiveModal:p},data:function(){return{show:!1}},methods:{toggleModal:function(){this.show=!this.show}}},h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[e._m(0),o("main",[o("h2",[e._v("🕹️ Demo")]),o("button",{staticClass:"open-modal-btn",on:{click:e.toggleModal}},[e._v("Open Modal")]),o("h2",[e._v("📝 Usage")]),e._m(1),o("br"),e._m(2),e._m(3),o("h2",[e._v("⏬ Install")]),e._m(4),o("h2",[e._v("⚙️Props")]),e._m(5),o("h2",[e._v("🐙 More")]),e._m(6),o("VuexplosiveModal",{attrs:{visible:e.show}})],1),e._m(7)])},_=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h1",[e._v("🔥 Vuexplosive Modal 🔥")]),o("p",[e._v("A simple Vue modal component with an explosion effect")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",{staticClass:"language-js"},[e._v('import VuexplosiveModal from "./VuexplosiveModal";')])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",{staticClass:"language-js"},[e._v('<VuexplosiveModal :visible="showModal"></VuexplosiveModal> ')])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",{staticClass:"language-js"},[e._v('<button @click="toggleModal">Open Modal</button>')])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",{staticClass:"language-js"},[e._v("npm i vuexplosive-modal --save")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pre",[o("code",{staticClass:"language-js"},[e._v(' visible: {\n    default: false\n  },\n  title: {\n    default: "Boo! 🔥"\n  },\n  closeIcon: {\n    default: `<span>❌</span>`\n  },\n  content: {\n    default: `<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a tenetur delectus reprehenderit, omnis doloremque at earum officia unde sequi accusantium corporis praesentium deserunt laboriosam dignissimos voluptatum culpa molestiae ullam. 👻</p>`\n  }\n  ')])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("You can also customize the markup as you wish. Go "),o("a",{attrs:{href:"https://github.com/mburakerman/vuexplosive-modal/",target:"_blank"}},[e._v("Github page")]),e._v(" to see more details.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",[o("p",[e._v("© "),o("a",{attrs:{href:"https://mburakerman.github.io/",target:"_blank",rel:"external"}},[e._v("Mehmet Burak Erman")])])])}];function g(e){o("tzlj")}var b=!1,x=g,C="data-v-242c2284",M=null,k=Object(l["a"])(f,h,_,b,x,C,M),E=k.exports,V=o("rmhM"),$={name:"GithubCorner",components:{VueGithubCorners:V["VueGithubCorners"]},data:function(){return{repoUrl:"https://github.com/mburakerman/vuexplosive-modal/",catColor:"#fff",bgColor:"#F7630C"}}},j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueGithubCorners",{attrs:{repoUrl:e.repoUrl,catColor:e.catColor,bgColor:e.bgColor}})},w=[],G=!1,O=null,y=null,T=null,H=Object(l["a"])($,j,w,G,O,y,T),I=H.exports,L={name:"app",components:{Home:E,GithubCorner:I}},U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Home"),o("GithubCorner")],1)},q=[];function B(e){o("+VGo")}var P=!1,z=B,J=null,Y=null,N=Object(l["a"])(L,U,q,P,z,J,Y),A=N.exports,D=o("P6sg");o("0BLv");a["a"].use(D["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)}}).$mount("#app")},qpzO:function(e,t){},tzlj:function(e,t){}},[0]);
//# sourceMappingURL=app.ff239760.js.map