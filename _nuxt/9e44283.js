(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6,15],{272:function(t,e,n){"use strict";n.r(e);var r={props:{errorTitle:{type:String,default:"Error"},errorData:{type:String,default:"Something went wrong"},showAction:{type:Boolean,default:!0},renderBorders:{type:Boolean,default:!0}},methods:{reload:function(){location.reload()}}},o=n(10),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 m-6 text-center text-gray-200",class:{"material-container":t.renderBorders}},[e("h1",{staticClass:"px-2 mx-auto text-2xl font-bold leading-normal tracking-wide border border-white w-max"},[t._v("\n    "+t._s(t.errorTitle)+"\n  ")]),t._v(" "),e("p",{staticClass:"mt-2"},[t._v("\n    "+t._s(t.errorData)+"\n  ")]),t._v(" "),t.showAction?[t._t("customAction",(function(){return[e("button",{staticClass:"link",attrs:{type:"button"},on:{click:function(e){return t.reload()}}},[t._v("\n        Reload the page?\n      ")])]}))]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);n(20),n(13),n(12),n(11),n(22),n(23);var r=n(4),o=n(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{TagIcon:n(134).k},props:{searchTags:{type:Array,default:function(){return[]}}},computed:c({},Object(o.c)("user",["getTagCollections"])),methods:c(c({},Object(o.b)("user",["customTagCollectionsManager"])),{},{toggleTagCollections:function(){this.$emit("toggleTagCollections")},addTagCollectionToTags:function(t){this.$emit("mergeToSearchTags",this.getTagCollections[t].tags),this.toggleTagCollections()},saveSearchTagsToTagCollection:function(){if(this.searchTags.length){var t=prompt("Choose a name for the new Tag Collection.");t?this.customTagCollectionsManager({operation:"add",value:{name:t,tags:this.searchTags}}):alert("Wrong input, only text please.")}}})},f=n(10),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed inset-0 z-30 overflow-y-auto",attrs:{"aria-labelledby":"tag-collections-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},[e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-75",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.toggleTagCollections.apply(null,arguments))}}}),t._v(" "),e("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[t._v("\n      ​\n    ")]),t._v(" "),e("div",{staticClass:"inline-block w-full max-w-xl p-4 align-bottom transform material-container sm:align-middle"},[t._m(0),t._v(" "),e("div",{staticClass:"my-4"},[e("ul",{staticClass:"space-y-3"},[t.getTagCollections.length?t._l(t.getTagCollections,(function(n,r){return e("li",{key:n.name,staticClass:"px-2 py-1 text-left border-util focus-within:focus-util group"},[e("button",{staticClass:"flex justify-between w-full",attrs:{type:"button"},on:{click:function(e){return t.addTagCollectionToTags(r)}}},[e("span",{staticClass:"text-gray-300 truncate group-hover:text-gray-200"},[t._v("\n                  "+t._s(n.name)+"\n                ")]),t._v(" "),e("span",{staticClass:"shrink-0 text-primary-500 group-hover:text-primary-400"},[t._v("\n                  "+t._s(n.tags.length)+"\n\n                  "),e("TagIcon",{staticClass:"inline w-5 h-5 icon"})],1)])])})):[e("Error",{attrs:{"render-borders":!1,"error-data":"No Tag Collections available"},scopedSlots:t._u([{key:"customAction",fn:function(){return[e("NuxtLink",{staticClass:"link",attrs:{to:"/premium"}},[t._v(" Create some? ")])]},proxy:!0}])})]],2)]),t._v(" "),e("div",{staticClass:"space-y-1 text-sm"},[e("NuxtLink",{staticClass:"link",attrs:{to:"/premium"}},[t._v("Create more")]),t._v(" "),e("p",{staticClass:"text-xs text-gray-300"},[t._v("Or")]),t._v(" "),e("button",{staticClass:"link",attrs:{type:"button"},on:{click:t.saveSearchTagsToTagCollection}},[t._v("\n          Create from current tags\n        ")])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("h3",{staticClass:"text-lg font-medium leading-6 text-accent-400",attrs:{id:"tag-collections-title"}},[this._v("\n          Tag Collections\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Error:n(272).default})}}]);