(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{217:function(e,t,n){"use strict";n.r(t);var o=n(86),r={components:{ChevronDownIcon:o.b,CloudIcon:o.d},props:{activeDomain:{type:String,required:!0},domainGroupList:{type:Array,required:!0}},methods:{emitDomainChange(e){if(e.target.value){var t=e.target.value;this.$emit("domainChange",t)}else console.debug("No domain selected")}}},l=n(7),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative flex items-center justify-center gap-2 rounded-full material-container focus-within:focus-util"},[t("div",{staticClass:"inline-flex items-center pl-2",attrs:{for:"domain-selector"}},[t("CloudIcon",{staticClass:"w-4 h-4 icon text-primary-400"})],1),e._v(" "),t("select",{staticClass:"inline-flex items-center font-light outline-none appearance-none text-primary-400 bg-darkGray-300",attrs:{"aria-label":"Change the domain where the content is pulled from"},on:{change:e.emitDomainChange}},[e._l(e.domainGroupList,(function(n){return[t("optgroup",{key:n.name,attrs:{label:n.name}},[e._l(n.domains,(function(n){return[t("option",{key:n,attrs:{"aria-label":"Change domain to "+n},domProps:{value:n,selected:e.activeDomain===n}},[e._v("\n            "+e._s(n)+"\n          ")])]}))],2)]}))],2),e._v(" "),t("div",{staticClass:"inline-flex items-center pr-2",attrs:{for:"domain-selector"}},[t("ChevronDownIcon",{staticClass:"w-4 h-4 icon"})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);