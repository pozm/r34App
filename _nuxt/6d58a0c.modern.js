(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{244:function(t,e,o){"use strict";o.r(e);o(10);var l=o(4),n=(o(66),o(5));function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={data:()=>({formTagCollection:{name:null,tags:null}}),head:()=>({title:"Tag Collections",meta:[{hid:"description",name:"description",content:"Create collections of tags."}]}),computed:c({},Object(n.c)("user",["getTagCollections"])),methods:c(c({},Object(n.b)("user",["customTagCollectionsManager"])),{},{addTagCollection(){this.customTagCollectionsManager({operation:"add",value:{name:this.formTagCollection.name,tags:this.formTagCollection.tags.split(", ")}})},deleteTagCollection(t){this.customTagCollectionsManager({operation:"remove",value:t})},copyTagCollectionToFormCollection(t){this.formTagCollection={name:t.name,tags:t.tags.join(", ")}}})},f=o(7),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"flex flex-col max-w-3xl min-h-screen p-4 mx-auto sm:p-6 lg:p-8"},[e("div",[e("div",{staticClass:"px-2 py-1 overflow-x-scroll material-container"},[e("table",{staticClass:"w-full text-left border-separate",staticStyle:{"border-spacing":"0.25em"}},[t._m(0),t._v(" "),e("tbody",{staticClass:"text-gray-300 truncate"},[t.getTagCollections.length?t._l(t.getTagCollections,(function(o){return e("tr",{key:o.name},[e("td",{on:{click:function(e){return t.deleteTagCollection(o)}}},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("td",{staticClass:"text-sm",on:{click:function(e){return t.copyTagCollectionToFormCollection(o)}}},[t._v("\n                "+t._s(o.tags.join(", "))+"\n              ")])])})):[t._m(1)]],2)])]),t._v(" "),e("p",{staticClass:"p-2 text-xs text-center text-gray-300"},[t._v("\n      Click on the `name` to remove. Click on the `tags` to copy.\n    ")])]),t._v(" "),e("div",{staticClass:"flex-auto"},[t._v(" ")]),t._v(" "),e("form",{staticClass:"p-4 space-y-4 material-container",on:{submit:function(e){return e.preventDefault(),t.addTagCollection.apply(null,arguments)}}},[e("label",{staticClass:"block space-y-1"},[e("p",{staticClass:"text-lg text-gray-200"},[t._v("Name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formTagCollection.name,expression:"formTagCollection.name"}],staticClass:"block p-1 text-gray-300 outline-none border-util bg-darkGray-700 focus:focus-util",attrs:{type:"text",name:"tagCollectionName",required:""},domProps:{value:t.formTagCollection.name},on:{input:function(e){e.target.composing||t.$set(t.formTagCollection,"name",e.target.value)}}})]),t._v(" "),e("label",{staticClass:"block space-y-1"},[e("p",{staticClass:"text-lg text-gray-200"},[t._v("Tags")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formTagCollection.tags,expression:"formTagCollection.tags"}],staticClass:"block w-full p-1 text-gray-300 outline-none bg-darkGray-700 border-util focus:focus-util",attrs:{name:"tagCollectionTags",rows:"3",required:"",spellcheck:"false"},domProps:{value:t.formTagCollection.tags},on:{input:function(e){e.target.composing||t.$set(t.formTagCollection,"tags",e.target.value)}}}),t._v(" "),e("p",{staticClass:"p-2 text-xs italic text-right text-gray-300"},[t._v('\n        Separate tags with spaced commas (", ").\n      ')])]),t._v(" "),e("button",{staticClass:"w-full px-2 py-1 tracking-wide rounded-full bg-gradient-to-r from-primary-400 to-accent-400 focus:focus-util",attrs:{type:"submit"}},[t._v("\n      Add\n    ")])])])}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{staticClass:"text-lg font-normal text-gray-200"},[t._v("Name")]),t._v(" "),e("th",{staticClass:"text-lg font-normal text-gray-200"},[t._v("Tags")])])])},function(){var t=this._self._c;return t("tr",[t("td",{staticClass:"text-center",attrs:{colspan:"999"}},[this._v("\n                There are no custom tag collections\n              ")])])}],!1,null,null,null);e.default=component.exports}}]);