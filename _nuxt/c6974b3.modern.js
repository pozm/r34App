(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{212:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{static proxyUrl(e){return window.$nuxt.$config.PROXY_URL+encodeURIComponent(e)}}},227:function(e,t,n){"use strict";n.r(t);n(10);var o=n(3),r=n(4),c=(n(66),n(5)),l=n(86),d=n(212);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={components:{DownloadIcon:l.e},props:{mediaName:{type:String,required:!0},mediaUrl:{type:String,required:!0}},computed:O({},Object(c.c)("premium",["isUserPremium"])),methods:O(O({},Object(c.b)(["simpleFetch"])),{},{downloadBlobToDevice(e,t){var n=URL.createObjectURL(e),o=document.createElement("a");o.href=n,o.target="_blank",o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(n)},fetchUrlIntoBlob(){var e=this;return Object(o.a)((function*(){var t=d.a.proxyUrl(e.mediaUrl),n=yield e.simpleFetch({url:t,options:{responseType:"blob"}});return{RESPONSE:n,RESPONSE_BLOB:n.data}}))()},downloadMedia(){var e=this;return Object(o.a)((function*(){try{var{RESPONSE:t,RESPONSE_BLOB:n}=yield e.fetchUrlIntoBlob(),o=t.headers["content-type"].split("/")[1],r=e.mediaName+"."+o;e.downloadBlobToDevice(n,r)}catch(t){e.$toast.error('Could not download post: "'.concat(t.message,'"'))}}))()}})},y=n(7),component=Object(y.a)(w,(function(){var e=this,t=e._self._c;return t("div",[e.isUserPremium?[t("button",{staticClass:"flex items-center gap-2 my-2 link",attrs:{type:"button"},on:{click:e.downloadMedia}},[t("DownloadIcon",{staticClass:"w-5 h-5 icon"}),e._v("\n\n      Download\n    ")],1)]:[t("NuxtLink",{staticClass:"flex items-center gap-2 my-2 link",attrs:{to:"/premium"}},[t("DownloadIcon",{staticClass:"w-5 h-5 icon"}),e._v("\n\n      Download\n    ")],1)]],2)}),[],!1,null,null,null);t.default=component.exports}}]);