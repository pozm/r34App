(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{220:function(e,t,r){"use strict";r.r(t);r(10);var n=r(3),o=r(4),c=r(5);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var X={components:{ChevronRightIcon:r(86).c},data:()=>({login:{password:""}}),methods:f(f({},Object(c.b)("premium",["authenticate"])),{},{userLogin(){var e=this;return Object(n.a)((function*(){yield e.authenticate(e.login)}))()}})},d=r(7),component=Object(d.a)(X,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p-4 material-container"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.userLogin.apply(null,arguments)}}},[t("label",{staticClass:"block mb-2 text-lg font-medium leading-tight text-white",attrs:{for:"license-key"}},[e._v("\n      License Key\n    ")]),e._v(" "),t("div",{staticClass:"flex flex-row items-center w-full gap-1 mt-1"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"grow block w-10/12 p-2 text-sm font-light text-gray-300 outline-none appearance-none focus:focus-util material-container bg-darkGray-700 border-darkGray-100",attrs:{id:"license-key",placeholder:"XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX",type:"text",name:"license-key",required:""},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),e._v(" "),t("button",{staticClass:"ml-1 border-0 rounded-full appearance-none bg-gradient-to-br from-primary-400 to-accent-400 focus:focus-util",attrs:{type:"submit"}},[t("chevron-right-icon",{staticClass:"icon w-9 h-9"})],1)])])])}),[],!1,null,null,null);t.default=component.exports}}]);