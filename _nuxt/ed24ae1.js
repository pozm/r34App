(window.webpackJsonp=window.webpackJsonp||[]).push([[28,13,14],{287:function(t,e,n){"use strict";n.r(e);n(13),n(12),n(11),n(22),n(23);var r=n(3),o=n(4),l=(n(26),n(5));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{ChevronRightIcon:n(134).c},data:function(){return{login:{password:""}}},methods:m(m({},Object(l.b)("premium",["authenticate"])),{},{userLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.authenticate(t.login);case 2:case"end":return e.stop()}}),e)})))()}})},v=n(10),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 material-container"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.userLogin.apply(null,arguments)}}},[e("label",{staticClass:"block mb-2 text-lg font-medium leading-tight text-white",attrs:{for:"license-key"}},[t._v("\n      License Key\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-row items-center w-full gap-1 mt-1"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],staticClass:"grow block w-10/12 p-2 text-sm font-light text-gray-300 outline-none appearance-none focus:focus-util material-container bg-darkGray-700 border-darkGray-100",attrs:{id:"license-key",placeholder:"XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX",type:"text",name:"license-key",required:""},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),e("button",{staticClass:"ml-1 border-0 rounded-full appearance-none bg-gradient-to-br from-primary-400 to-accent-400 focus:focus-util",attrs:{type:"submit"}},[e("chevron-right-icon",{staticClass:"icon w-9 h-9"})],1)])])])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var r={components:{CheckIcon:n(134).a}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col material-container"},[t._m(0),t._v(" "),e("div",{staticClass:"flex flex-col justify-between p-6 border-t bg-darkGray-700 border-darkGray-100"},[e("ul",[e("li",{staticClass:"flex items-start"},[e("div",{staticClass:"shrink-0"},[e("check-icon",{staticClass:"w-6 h-6 icon text-accent-400"})],1),t._v(" "),e("NuxtLink",{staticClass:"ml-3 text-base font-medium leading-6 link",attrs:{to:"/premium/custom-boorus"}},[t._v("\n          Use more Boorus\n        ")])],1),t._v(" "),e("li",{staticClass:"flex items-start mt-4"},[e("div",{staticClass:"shrink-0"},[e("check-icon",{staticClass:"w-6 h-6 icon text-accent-400"})],1),t._v(" "),e("NuxtLink",{staticClass:"ml-3 text-base font-medium leading-6 link",attrs:{to:"/premium/tag-collections"}},[t._v("\n          Create collections of Tags\n        ")])],1),t._v(" "),e("li",{staticClass:"flex items-start mt-4"},[e("div",{staticClass:"shrink-0"},[e("check-icon",{staticClass:"w-6 h-6 icon text-accent-400"})],1),t._v(" "),e("NuxtLink",{staticClass:"ml-3 text-base font-medium leading-6 link",attrs:{to:"/premium/saved-posts"}},[t._v("\n          Save posts\n        ")])],1),t._v(" "),e("li",{staticClass:"flex items-start mt-4"},[e("div",{staticClass:"shrink-0"},[e("check-icon",{staticClass:"w-6 h-6 icon text-accent-400"})],1),t._v(" "),e("p",{staticClass:"ml-3 text-base font-medium leading-6 text-gray-300"},[t._v("\n          Download Posts\n        ")])]),t._v(" "),e("li",{staticClass:"flex items-start mt-4"},[e("div",{staticClass:"shrink-0"},[e("check-icon",{staticClass:"w-6 h-6 icon text-accent-400"})],1),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-10"},[e("h3",{staticClass:"text-3xl font-semibold leading-9 text-center text-gray-200"},[t._v("\n      Premium\n    ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-center mt-4"},[e("span",{staticClass:"flex items-start px-3 text-5xl leading-none tracking-tight text-gray-200"},[e("span",{staticClass:"mt-1 mr-2 text-3xl font-medium"},[t._v(" € ")]),t._v(" "),e("span",{staticClass:"font-extrabold"},[t._v(" 6,9 ")])]),t._v(" "),e("span",{staticClass:"text-xl font-medium leading-8 text-gray-300"},[t._v("\n        /month\n      ")])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"ml-3 text-base font-medium leading-6 text-gray-300"},[t._v("\n          Find source with\n          "),e("a",{staticClass:"link",attrs:{href:"https://saucenao.com/",target:"_blank",rel:"noopener nofollow"}},[t._v("\n              SauceNAO\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"mt-8"},[t("a",{staticClass:"block w-full px-6 py-3 text-lg font-medium leading-6 text-center text-black transition border-0 rounded-lg bg-gradient-to-r from-accent-400 to-primary-400 focus:focus-util hover:text-gray-800",attrs:{href:"https://gum.co/Rule34App",target:"_blank",rel:"noopener nofollow"}},[this._v("\n        Subscribe\n      ")])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,n){"use strict";n.r(e);n(13),n(12),n(11),n(22),n(23);var r=n(3),o=n(4),l=(n(26),n(5));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={head:function(){return{title:"Premium",meta:[{hid:"description",name:"description",content:"Premium subscription."}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("premium",["isUserPremium","getUserEmail"])),methods:{logOut:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:location.reload();case 3:case"end":return e.stop()}}),e)})))()}}},f=m,v=n(10),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"flex flex-col items-center justify-center max-w-3xl min-h-screen p-4 mx-auto sm:p-6 lg:p-8"},[t.isUserPremium?[e("div",{staticClass:"flex flex-col flex-auto w-full space-y-4"},[e("div",{staticClass:"p-4 material-container"},[e("div",{staticClass:"py-1 truncate"},[e("span",{staticClass:"inline-flex items-center justify-center w-10 h-10 rounded-full border-util bg-darkGray-700"},[e("span",{staticClass:"font-medium leading-none text-white"},[t._v("\n              "+t._s(t.getUserEmail.charAt(0).toUpperCase())+"\n            ")])]),t._v(" "),e("span",{staticClass:"ml-1 text-gray-200"},[t._v(t._s(t.getUserEmail))])]),t._v(" "),t._m(0),t._v(" "),e("button",{staticClass:"block ml-auto leading-none link",attrs:{type:"button"},on:{click:t.logOut}},[t._v("\n          Log out\n        ")])]),t._v(" "),e("div",{staticClass:"flex flex-row items-center p-4 material-container"},[t._m(1),t._v(" "),e("NuxtLink",{staticClass:"px-3 py-2 rounded-full link border-util bg-darkGray-700",attrs:{to:"/premium/custom-boorus"}},[t._v("\n          Modify\n        ")])],1),t._v(" "),e("div",{staticClass:"flex flex-row items-center p-4 material-container"},[t._m(2),t._v(" "),e("NuxtLink",{staticClass:"px-3 py-2 rounded-full link border-util bg-darkGray-700",attrs:{to:"/premium/tag-collections"}},[t._v("\n          Modify\n        ")])],1),t._v(" "),e("div",{staticClass:"flex flex-row items-center p-4 material-container"},[t._m(3),t._v(" "),e("NuxtLink",{staticClass:"px-3 py-2 rounded-full link border-util bg-darkGray-700",attrs:{to:"/premium/saved-posts"}},[t._v("\n          Modify\n        ")])],1),t._v(" "),e("div",{staticClass:"grow"}),t._v(" "),t._m(4)])]:[e("div",{staticClass:"flex flex-col flex-auto w-full justify-evenly"},[e("PremiumLogin"),t._v(" "),e("p",{staticClass:"text-center text-gray-300"},[t._v("Or")]),t._v(" "),e("PremiumSubscription")],1)]],2)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-1 text-center"},[e("p",{staticClass:"text-gray-300"},[t._v("Your subscription is")]),t._v(" "),e("p",{staticClass:"text-3xl font-semibold text-accent-400"},[t._v("Active")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-auto"},[e("h1",{staticClass:"text-lg font-medium text-gray-200"},[t._v("Custom Boorus")]),t._v(" "),e("p",{staticClass:"text-gray-300"},[t._v("Manage compatible boorus")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grow"},[e("h1",{staticClass:"text-lg font-medium text-gray-200"},[t._v("Tag Collections")]),t._v(" "),e("p",{staticClass:"text-gray-300"},[t._v("Manage your collections of tags")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"grow"},[e("h1",{staticClass:"text-lg font-medium text-gray-200"},[t._v("Saved Posts")]),t._v(" "),e("p",{staticClass:"text-gray-300"},[t._v("Manage your saved posts")])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-sm text-center text-gray-300"},[t._v("\n        Manage your subscription on\n        "),e("a",{staticClass:"link",attrs:{href:"https://gumroad.com/library",target:"_blank",rel:"noopener nofollow"}},[t._v("\n          Gumroad")]),t._v(".\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PremiumLogin:n(287).default,PremiumSubscription:n(288).default})}}]);