(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(t,e,r){t.exports={}},104:function(t,e,r){t.exports={}},105:function(t,e,r){t.exports={}},117:function(t){t.exports=JSON.parse('[{"domain":"rule34.xxx","type":"rule34.xxx","nsfw":true,"config":null},{"domain":"rule34.paheal.net","type":"rule34.paheal.net","nsfw":true,"config":{"options":{"HTTPScheme":"http"}}},{"domain":"danbooru.donmai.us","type":"danbooru2","nsfw":true,"config":null},{"domain":"gelbooru.com","type":"gelbooru.com","nsfw":true,"config":null},{"domain":"safebooru.org","type":"gelbooru","nsfw":false,"config":null},{"domain":"e621.net","type":"e621.net","nsfw":true,"config":null},{"domain":"e926.net","type":"e621.net","nsfw":false,"config":null}]')},118:function(t){t.exports=JSON.parse('[{"domain":"rule34.xxx","type":"rule34.xxx","nsfw":true,"config":null},{"domain":"rule34.paheal.net","type":"rule34.paheal.net","nsfw":true,"config":{"options":{"HTTPScheme":"http"}}},{"domain":"danbooru.donmai.us","type":"danbooru2","nsfw":true,"config":null},{"domain":"gelbooru.com","type":"gelbooru.com","nsfw":true,"config":null},{"domain":"safebooru.org","type":"gelbooru","nsfw":false,"config":null},{"domain":"e621.net","type":"e621.net","nsfw":true,"config":null},{"domain":"e926.net","type":"e621.net","nsfw":false,"config":null},{"domain":"xbooru.com","type":"gelbooru","nsfw":true,"config":null},{"domain":"hypnohub.net","type":"danbooru","nsfw":true,"config":null},{"domain":"yande.re","type":"danbooru","nsfw":true,"config":null},{"domain":"konachan.com","type":"danbooru","nsfw":true,"config":null},{"domain":"lolibooru.moe","type":"danbooru","nsfw":true,"config":null},{"domain":"booru.allthefallen.moe","type":"danbooru","nsfw":true,"config":null},{"domain":"realbooru.com","type":"gelbooru","nsfw":true,"config":null}]')},119:function(t){t.exports=JSON.parse('[{"type":"gelbooru","initialPageID":0,"posts":true,"singlePost":true,"tags":true,"random":false},{"type":"danbooru","initialPageID":1,"posts":true,"singlePost":false,"tags":true,"random":true},{"type":"danbooru2","initialPageID":1,"posts":true,"singlePost":true,"tags":true,"random":true},{"type":"rule34.xxx","initialPageID":0,"posts":true,"singlePost":true,"tags":true,"random":false},{"type":"rule34.paheal.net","initialPageID":0,"posts":true,"singlePost":true,"tags":true,"random":false},{"type":"gelbooru.com","initialPageID":0,"posts":true,"singlePost":true,"tags":true,"random":false},{"type":"e621.net","initialPageID":1,"posts":true,"singlePost":true,"tags":true,"random":true}]')},128:function(t,e,r){"use strict";r(10);var o=r(4),n=r(5),c=r(129),l=r(58),d={mixins:[{computed:Object(n.c)("user",["getUserSettings"]),mounted(){Object(l.a)("settings",{state:this.getUserSettings})}}]};function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={computed:m({},Object(n.c)("navigation",["isSideNavActive","isSearchActive"])),watch:{$route(){this.routeHandler()}},mounted(){this.routeHandler()},methods:m(m({},Object(n.b)("navigation",["sideNavNavigationManager","searchNavigationManager"])),{},{routeHandler(){this.isSideNavActive&&this.sideNavNavigationManager({operation:"set",value:!1}),this.isSearchActive&&this.searchNavigationManager({operation:"set",value:!1})}})};function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={computed:y(y({},Object(n.c)("navigation",["isSideNavActive","isSearchActive"])),Object(n.c)("user",["getUserSettings"])),methods:y(y({},Object(n.b)("navigation",["sideNavNavigationManager","searchNavigationManager"])),{},{touchHandler(t,e){if(this.getUserSettings.touchGestures.value){var r=.25*screen.availWidth;switch(t){case"right":if(e.touchstartX>r)return;this.isSearchActive?this.searchNavigationManager({operation:"set",value:!1}):this.sideNavNavigationManager({operation:"set",value:!0});break;case"left":if(e.touchstartX<screen.availWidth-r)return;this.isSideNavActive?this.sideNavNavigationManager({operation:"set",value:!1}):this.searchNavigationManager({operation:"set",value:!0})}}else console.debug("`touchGestures` setting is disabled, skipping...")}})};function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={directives:{Touch:c.a},mixins:[d,v,O],head:()=>({bodyAttrs:{class:"bg-darkGray-700"}}),computed:P(P({},Object(n.c)("navigation",["isSideNavActive"])),Object(n.c)("user",["getUserSettings"]))};console.info("%cWe ❤︎ open source!","font-size:32px;font-weight:bold;letter-spacing:0.02em;color:hsl(205, 78%, 62%);background-color:white;padding:8px 16px;"),console.info("%cContribute: https://redirect.r34.app/github\nJoin our discord: https://redirect.r34.app/discord","background-color:hsl(0, 0%, 7%);padding:4px 8px;font-size:16px;color:white;");var _=j,x=(r(164),r(7)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"touch",rawName:"v-touch",value:{left:e=>t.touchHandler("left",e),right:e=>t.touchHandler("right",e)},expression:"{\n    left: (e) => touchHandler('left', e),\n    right: (e) => touchHandler('right', e),\n  }"}]},[e("SideNavArea"),t._v(" "),e("transition",{attrs:{name:"sidenav"}},[t.isSideNavActive?e("SideNav"):t._e()],1),t._v(" "),e("portal-target",{attrs:{name:"search"}}),t._v(" "),e("portal-target",{attrs:{name:"body"}}),t._v(" "),e("SupportPopUpManager"),t._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{SideNavArea:r(196).default,SideNav:r(198).default,SupportPopUpManager:r(199).default})},130:function(t,e,r){"use strict";r.r(e);var o={props:{icon:{type:String,required:!1,default:void 0},iconPosition:{type:String,required:!1,default:"bg-svg-right"},title:{type:String,required:!0},text:{type:String,required:!1,default:void 0},img:{type:String,required:!1,default:void 0},links:{type:Array,required:!1,default:()=>[]}}},n=(r(168),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"material-container"},[e("div",{staticClass:"p-3",class:{"bg-svg":t.icon,[t.icon]:t.icon,[t.iconPosition]:t.icon}},[e("h1",{staticClass:"text-gray-200"},[t._v(t._s(t.title))]),t._v(" "),t.text?e("p",{staticClass:"text-sm text-gray-300 whitespace-pre-line",domProps:{textContent:t._s(t.text)}}):t._e(),t._v(" "),t.img?e("picture",[e("source",{attrs:{srcset:t.img+".webp",type:"image/webp"}}),t._v(" "),e("img",{staticClass:"mx-auto mt-2",attrs:{loading:"lazy",decoding:"async",src:t.img+".png",alt:t.title+" Example"}})]):t._e(),t._v(" "),t.links.length?[e("div",{staticClass:"text-gray-300"},[t._l(t.links,(function(link,r){return[link.isInternal?[e("NuxtLink",{key:link.text,staticClass:"text-sm link",attrs:{to:link.href}},[t._v("\n              "+t._s(link.text)+"\n            ")])]:[e("a",{key:link.text,staticClass:"text-sm link",attrs:{href:link.href,target:"_blank",rel:"noopener nofollow"}},[t._v("\n              "+t._s(link.text)+"\n            ")])],t._v(" "),r!==t.links.length-1?[t._v(" - ")]:t._e()]}))],2)]:t._e(),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},131:function(t,e,r){r(132),t.exports=r(133)},143:function(t,e,r){"use strict";r.r(e);var o=r(29);e.default=function(t){if(function(t){var e=t.query.domain,r=t.query.page;return null==e||null==r}(t)){console.info("Redirecting to correct route");var e=function(t){var e=t.query.domain,r=t.query.page,n=t.query.tags;return o.a.generatePostsRouteWithDefaults(t.store,e,r,n)}(t);return t.redirect(422,void 0,e.query)}}},163:function(t,e,r){t.exports={}},164:function(t,e,r){"use strict";r(103)},165:function(t,e,r){"use strict";r(104)},166:function(t,e,r){t.exports=r.p+"img/icon.11c6373.webp"},167:function(t,e,r){t.exports=r.p+"img/icon.7855789.png"},168:function(t,e,r){"use strict";r(105)},169:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return d})),r.d(e,"getters",(function(){return f})),r.d(e,"mutations",(function(){return m})),r.d(e,"actions",(function(){return v}));r(10);var o=r(4),n=r(3);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=()=>({version:0,statistics:{timesTheAppHasBeenOpened:0}}),f={getTimesTheAppHasBeenOpened:t=>t.statistics.timesTheAppHasBeenOpened},m={setTimesTheAppHasBeenOpened(t,e){t.statistics.timesTheAppHasBeenOpened=e}},v={simpleFetch(t,e){var r=this;return Object(n.a)((function*(){var{state:o,dispatch:n}=t,{url:c,options:l}=e;return yield r.$axios.get(c,l)}))()},simpleApiFetch(t,e){var r=this;return Object(n.a)((function*(){var{state:o,dispatch:n}=t,{url:c,options:d}=e,f={headers:{Authorization:r.$auth.strategy.token.get()}};return yield n("simpleFetch",{url:c,options:l(l({},d),f)})}))()}}},170:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return l})),r.d(e,"getters",(function(){return d})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return m}));var o=r(3),n=(r(66),r(12),r(14),r(33),r(18)),c=r(29),l=()=>({history:{lastDomainUsed:n.c[0].domain},posts:{data:[]}}),d={getDefaultBooruList:()=>n.c,getPremiumBooruList:(t,e,r,o)=>o["user/getCustomBoorus"],getBooruList:(t,e)=>[...e.getDefaultBooruList,...e.getPremiumBooruList],getActiveBooru(t,e,r,o){var c=o["url/urlDomain"];return null==c?Object(n.d)(t.history.lastDomainUsed,"domain",e.getBooruList)[0]:Object(n.d)(c,"domain",e.getBooruList)[0]},getActiveBooruType:(t,e,r,o)=>Object(n.d)(e.getActiveBooru.type,"type",n.a)[0],getPosts:t=>t.posts.data,getPageID:(t,e,r,o)=>{var n=o["url/urlPage"];return null==n?e.getActiveBooruType.initialPageID:Number(n)},getTags:(t,e,r,o)=>{var n=o["url/urlTags"];return null==n?[]:n.split(",")}},f={setLastDomainUsed(t,e){t.history.lastDomainUsed=e},setPostsData(t,e){t.posts.data=Object.freeze(e)}},m={activeBooruManager(t,e){var r=this;return Object(o.a)((function*(){var{operation:o,value:l}=e,{dispatch:d,commit:f,getters:m}=t;if("set"!==o)throw new Error("No operation specified");var v=Object(n.d)(l,"domain",m.getBooruList)[0];if(null!=v){f("setLastDomainUsed",v.domain);var h=c.a.generatePostsRouteWithDefaults(t,v.domain);yield d("url/pushRoute",h,{root:!0})}else r.$sentry.captureException(new Error("Could not find booru with domain: ".concat(l)),{extra:{domain:l,booruList:m.getBooruList}})}))()},postsManager(t,e){var{state:r,commit:o}=t,{operation:n,value:c}=e;switch(n){case"set":o("setPostsData",c);break;case"concat":o("setPostsData",[...new Set([...r.posts.data,...c])]);break;default:throw new Error("No operation specified")}},pidManager:(t,e)=>Object(o.a)((function*(){var{operation:r,value:o}=e,{dispatch:n}=t;if("set"!==r)throw new Error("No operation specified");var l=c.a.generatePostsRouteWithActiveDefaults(t,void 0,o);yield n("url/pushRoute",l,{root:!0})}))(),tagsManager:(t,e)=>Object(o.a)((function*(){var{operation:r,value:o}=e,{dispatch:n}=t;if("set"!==r)throw new Error("No operation specified");var l=c.a.generatePostsRouteWithDefaults(t,void 0,void 0,o);yield n("url/pushRoute",l,{root:!0})}))(),createApiUrl(t,e){var r,o,n,c,l,d,f,m,v,h,{mode:y,postID:O,tag:w}=e,{getters:P,rootState:j}=t,_=this.app.$config.API_URL,x=P.getActiveBooru,k={posts:{limit:j.user.settings.postsPerPage.value,pageID:P.getPageID,tags:P.getTags.join(","),score:j.user.settings.score.value},singlePost:{id:O},tags:{tag:w,limit:15,order:"count"}},S=new URL(_+"/booru/"+x.type+"/"+y);switch(S.searchParams.append("baseEndpoint",x.domain),y){case"posts":k.posts.limit&&S.searchParams.append("limit",k.posts.limit),k.posts.pageID&&S.searchParams.append("pageID",k.posts.pageID),k.posts.tags&&k.posts.tags.length&&S.searchParams.append("tags",k.posts.tags),k.posts.score&&S.searchParams.append("score",">="+k.posts.score);break;case"tags":S.searchParams.append("tag",k.tags.tag),k.tags.order&&S.searchParams.append("order",k.tags.order),k.tags.limit&&S.searchParams.append("limit",k.tags.limit);break;default:throw new Error("No mode specified")}x.config&&(null!==(r=x.config)&&void 0!==r&&null!==(o=r.options)&&void 0!==o&&o.HTTPScheme&&S.searchParams.append("httpScheme",x.config.options.HTTPScheme),null!==(n=x.config)&&void 0!==n&&null!==(c=n.endpoints)&&void 0!==c&&c.tags&&S.searchParams.append("tagsEndpoint",x.config.endpoints.tags),null!==(l=x.config)&&void 0!==l&&null!==(d=l.queryIdentifiers)&&void 0!==d&&null!==(f=d.tags)&&void 0!==f&&f.tag&&S.searchParams.append("defaultQueryIdentifiersTagsTag",x.config.queryIdentifiers.tags.tag),void 0!==(null===(m=x.config)||void 0===m||null===(v=m.queryIdentifiers)||void 0===v||null===(h=v.tags)||void 0===h?void 0:h.tagEnding)&&S.searchParams.append("defaultQueryIdentifiersTagsTagEnding",x.config.queryIdentifiers.tags.tagEnding));return S.toString()},fetchPosts(t,e){var r=this;return Object(o.a)((function*(){var{getters:o,dispatch:n}=t,c=yield n("createApiUrl",{mode:"posts"}),l=o.getActiveBooru.domain;try{var d=(yield n("simpleApiFetch",{url:c},{root:!0})).data.map((t=>({id:"".concat(l,"-").concat(t.id),data:t,meta_data:{booru_domain:l,created_at:null}})));n("postsManager","concat"===e?{operation:"concat",value:d}:{operation:"set",value:d})}catch(t){r.$toast.error('Could not fetch posts: "'.concat(t.message,'"'))}}))()},fetchTags(t,e){var r=this;return Object(o.a)((function*(){var{getters:o,dispatch:n}=t,c=yield n("createApiUrl",{mode:"tags",tag:e}),l=o.getActiveBooru.domain;try{return(yield n("simpleApiFetch",{url:c},{root:!0})).data.map((t=>({id:"".concat(l,"-").concat(t.name),name:t.name,count:t.count})))}catch(t){r.$toast.error('Could not search tags: "'.concat(t.message,'"'))}}))()}}},171:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"getters",(function(){return n})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l}));r(65);var o=()=>({sideNav:{isActive:!1},search:{isActive:!1}}),n={isSideNavActive:t=>t.sideNav.isActive,isSearchActive:t=>t.search.isActive},c={setSideNavIsActive(t,e){t.sideNav.isActive=e},setSearchIsActive(t,e){t.search.isActive=e}},l={sideNavNavigationManager(t,e){var{commit:r,getters:o}=t,{operation:n,value:c}=e;switch(n){case"toggle":r("setSideNavIsActive",!o.isSideNavActive);break;case"set":r("setSideNavIsActive",c);break;default:throw new Error("No operation specified")}},searchNavigationManager(t,e){var{commit:r,getters:o}=t,{operation:n,value:c}=e;switch(n){case"toggle":r("setSearchIsActive",!o.isSearchActive);break;case"set":r("setSearchIsActive",c);break;default:throw new Error("No operation specified")}}}},172:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return d}));var o=r(3),n=()=>({notifications:{url:"https://gitcdn.xyz/cdn/AlejandroAkbal/2fe43e0eee40be63d9b2a582b2793cf9/raw/app-notifications.json",data:void 0,latestTitle:void 0}}),c={getNotifications:t=>t.notifications.data,hasNotificationsBeenFetched:t=>!!t.notifications.data,isThereANewNotification:t=>!!t.notifications.data&&(!t.notifications.latestTitle||0!==t.notifications.latestTitle.localeCompare(t.notifications.data[0].title))},l={setNotificationData(t,e){t.notifications.data=Object.freeze(e)},setLatestTitle(t,e){t.notifications.latestTitle=e}},d={fetchNotifications(t){var e=this;return Object(o.a)((function*(){var{state:r,dispatch:o,commit:n}=t;try{n("setNotificationData",(yield o("simpleFetch",{url:r.notifications.url},{root:!0})).data)}catch(t){e.$toast.error("Could not fetch notifications",{duration:3500})}}))()}}},173:function(t,e,r){"use strict";r.r(e),r.d(e,"getters",(function(){return n})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l}));var o=r(3),n={isUserPremium:(t,e,r,o)=>!0,getUserEmail:(t,e,r,o)=>"fbi@gov.uk"},c={setLicenseKey(t,e){t.gumroad.product.license_key="Bought"}},l={authenticate(t,e){var r=this;return Object(o.a)((function*(){var{username:o,password:n}=e,{dispatch:c}=t;try{yield r.$auth.loginWith("local",{data:{username:"_",password:n}})}catch(t){r.$toast.error('Could not authenticate: "'.concat(t.message,'"'))}}))()}}},174:function(t,e,r){"use strict";r.r(e),r.d(e,"getters",(function(){return n})),r.d(e,"actions",(function(){return c}));var o=r(3),n={urlDomain(t,e,r,o){var{domain:n}=r.route.query;return n},urlPage(t,e,r,o){var{page:n}=r.route.query;return n},urlTags(t,e,r,o){var{tags:n}=r.route.query;return n}},c={pushRoute(t,e){var r=this;return Object(o.a)((function*(){yield r.$router.push(e)}))()}}},175:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return c})),r.d(e,"mutations",(function(){return l})),r.d(e,"actions",(function(){return d}));var o=r(18).b.slice(7),n=()=>({custom:{boorus:o,tagCollections:[{name:"Gay blocklist",tags:["-gay","-gay_sex","-solo_male","-male_only","-male_focus","-male/male","-male_penetrated","-male_penetrating_male"]},{name:"Furry blocklist",tags:["-furry","-furry_only","-fur","-canid","-canine","-dragon","-anthro","-anthrofied","-anthro_on_anthro","-scaly","-scales","-accipitrid","-accipitriform","-animal_genitalia","-ferrettre","-rodent","-equine"]},{name:"Indecencies blocklist",tags:["-scat","-shitting","-diaper","-fart","-shitpost","-gore"]},{name:"Explicit rating",tags:["rating:explicit"]},{name:"Sort by order",tags:["sort:score"]},{name:"Order by score",tags:["order:score"]}],savedPosts:[{id:"rule34.xxx-1",data:{id:1,score:null,high_res_file:{url:"https://safebooru.org/images/1/e7b3dc281d431f7a9f4ab81986d2de9a20d36d2e.jpg",width:1200,height:900},low_res_file:{url:"https://safebooru.org/samples/1/sample_e7b3dc281d431f7a9f4ab81986d2de9a20d36d2e.jpg",width:850,height:638},preview_file:{url:"https://safebooru.org/thumbnails/1/thumbnail_e7b3dc281d431f7a9f4ab81986d2de9a20d36d2e.jpg",width:150,height:112},tags:["1girl","bag","black_hair","blush","bob_cut","bowieknife","breath","coat","girls","gloves","jacket","landscape","miniskirt","mountain","necktie","original","pantyhose","peacoat","purse","scarf","short_hair","skirt","snow","solo","toggles","uniform"],source:[],rating:"safe",media_type:"image"},meta_data:{booru_domain:"rule34.xxx",created_at:new Date(1997,7,22,"21")}},{id:"gelbooru.com-5",data:{id:5,score:35,high_res_file:{url:"https://img3.gelbooru.com/images/b0/b5/b0b53e29fdeb13285591a524f23972d4.gif",width:533,height:800},low_res_file:{url:"https://img3.gelbooru.com/images/b0/b5/b0b53e29fdeb13285591a524f23972d4.gif",width:533,height:800},preview_file:{url:"https://img3.gelbooru.com/thumbnails/b0/b5/thumbnail_b0b53e29fdeb13285591a524f23972d4.jpg",width:166,height:250},tags:["1girl","bare_shoulders","bunny","carrot","contrapposto","disgaea","flat_chest","hair_ribbon","harada_takehito","looking_at_viewer","looking_back","nippon_ichi","original","pleinair","pointy_ears","ribbon","short_hair","simple_background","smile","solo","speech_bubble","standing","sweatdrop","thighhighs","translation_request","usagi-san","white_background","white_legwear","zettai_ryouiki"],source:[],rating:"safe",media_type:"image"},meta_data:{booru_domain:"gelbooru.com",created_at:new Date(2e3,0,31,"0")}}]},settings:{touchGestures:{name:"Touch gestures",description:"Swiping `left-to-right` will open the navigation menu, and `right-to-left` will open the search menu.",value:!0,defaultValue:!0},hoverControls:{name:"Hover controls",description:"Page controls will be fixed over the content.",image:"/img/usage_examples/hover-controls",value:!1,defaultValue:!1},fullSizeImages:{name:"Full size images",description:"Load full images instead of downscaled images, data intensive.",image:"/img/usage_examples/full-size-images",value:!1,defaultValue:!1},infiniteLoad:{name:"Infinite loading",description:"Load posts infinitely instead of using the page controls.",value:!1,defaultValue:!1},postsPerPage:{name:"Posts per page",description:"Number of posts to load per page, hard limit on most boorus is 100.",value:20,defaultValue:20},score:{name:"Minimum score",description:"Required score for a post to show.",value:0,defaultValue:0}}}),c={getUserSettings:t=>t.settings,getCustomBoorus:t=>t.custom.boorus,getTagCollections:t=>t.custom.tagCollections,getSavedPosts:t=>t.custom.savedPosts},l={setSettingValue(t,e){var{setting:r,value:o}=e;t.settings[r].value=o},setCustomBoorus(t,e){t.custom.boorus=Object.freeze(e)},setCustomTagCollections(t,e){t.custom.tagCollections=Object.freeze(e)},setSavedPosts(t,e){t.custom.savedPosts=Object.freeze(e)}},d={customBoorusManager(t,e){var{getters:r,commit:o}=t,{operation:n,value:c}=e;switch(n){case"add":if(r.getCustomBoorus.some((t=>t.domain===c.domain)))return void console.debug("A booru with this domain already exists!");o("setCustomBoorus",[...r.getCustomBoorus,c]);break;case"remove":o("setCustomBoorus",r.getCustomBoorus.filter((t=>t.domain!==c.domain)));break;case"reset":o("setCustomBoorus",[]);break;default:throw new Error("No operation specified")}},customTagCollectionsManager(t,e){var{getters:r,commit:o}=t,{operation:n,value:c}=e;switch(n){case"add":if(r.getTagCollections.some((t=>t.name===c.name)))return void console.debug("A tag collection with this name already exists!");o("setCustomTagCollections",[...r.getTagCollections,c]);break;case"remove":o("setCustomTagCollections",r.getTagCollections.filter((t=>t.name!==c.name)));break;case"reset":o("setCustomTagCollections",[]);break;default:throw new Error("No operation specified")}},addPostToSavedPosts(t,e){var{getters:r,commit:o}=t,{post:n}=e,c=JSON.parse(JSON.stringify(r.getSavedPosts)),l=n;l.meta_data.created_at=(new Date).toJSON(),c.push(l),o("setSavedPosts",c)},removePostFromSavedPosts(t,e){var{getters:r,commit:o}=t,{postId:n}=e;o("setSavedPosts",JSON.parse(JSON.stringify(r.getSavedPosts)).filter((t=>t.id!==n)))}}},18:function(t,e,r){"use strict";r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return f})),r.d(e,"d",(function(){return m}));r(32);var o=r(117),n=r(118),c=r(119),l=o,d=n,f=c;function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"domain",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;return r.filter((r=>r[e]===t))}},196:function(t,e,r){"use strict";r.r(e);var o={},n=(r(165),r(7)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"fixed z-50 navigation-toggler"},[e("div",{staticClass:"flex flex-col items-center justify-center"},[e("SideNavToggler"),t._v(" "),e("div",{staticClass:"my-2"}),t._v(" "),e("portal-target",{attrs:{name:"side-nav-area"}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SideNavToggler:r(197).default})},197:function(t,e,r){"use strict";r.r(e);r(10);var o=r(4),n=r(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{MenuIcon:r(86).i},methods:l(l({},Object(n.b)("navigation",["sideNavNavigationManager"])),{},{toggleSideNav(){this.sideNavNavigationManager({operation:"toggle"})}})},f=r(7),component=Object(f.a)(d,(function(){var t=this._self._c;return t("button",{staticClass:"flex items-center justify-center w-12 h-12 p-4 border-0 rounded-full md:w-16 md:h-16 bg-gradient-to-b from-primary-400 to-accent-400 focus:focus-util shadow",attrs:{"aria-label":"Toggle the menu",title:"Menu",type:"menu"},on:{click:this.toggleSideNav}},[t("MenuIcon",{staticClass:"icon"})],1)}),[],!1,null,null,null);e.default=component.exports},198:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative h-full overflow-hidden"},[e("picture",[e("source",{attrs:{height:"512",srcset:r(166),type:"image/webp",width:"512"}}),t._v(" "),e("img",{staticClass:"transition-transform duration-500 delay-300 transform hover:scale-150",attrs:{alt:"Rule 34 App Logo",height:"512",loading:"eager",src:r(167),width:"512"}})]),t._v(" "),e("div",{staticClass:"absolute bottom-0 left-0 p-3 transition-colors duration-300 link"},[e("h1",{staticClass:"text-lg font-semibold"},[t._v("Rule 34 App")]),t._v(" "),e("h3",[t._v("Browse popular Hentai")])])])}],n=(r(10),r(4)),c=r(5),l=r(29);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={data(){return{sideNavLinks:[{title:"Posts",url:l.a.generatePostsRouteWithDefaults(this.$nuxt.$store)},{title:"Faq",url:"/faq"},{title:"Partners",url:"/partners"},{title:"Usage",url:"/usage"},{title:"About",url:"/about"},{title:"Settings",url:"/settings"}]}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("navigation",["sideNavNavigationManager"]))},m=f,v=r(7),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"fixed z-40 flex w-full min-h-screen md:flex-row"},[e("div",{staticClass:"flex flex-col md:border-r bg-darkGray-300 border-darkGray-100"},[t._m(0),t._v(" "),e("nav",{staticClass:"flex flex-col h-full p-3 bg-darkGray-700"},[e("ul",{staticClass:"flex-auto space-y-2 text-center sm:text-left"},[t._l(t.sideNavLinks,(function(link){return e("li",{key:link.title},[e("NuxtLink",{staticClass:"relative block transition-transform duration-300 transform link hover:translate-x-1",attrs:{to:link.url}},[e("span",{staticClass:"absolute inset-0 opacity-0"}),t._v(" "),e("span",{staticClass:"relative"},[t._v(" "+t._s(link.title))])])],1)})),t._v(" "),e("li",[e("NuxtLink",{staticClass:"relative block transition-transform duration-300 transform link hover:translate-x-1",attrs:{to:"/premium"}},[e("span",{staticClass:"absolute inset-0 opacity-0"}),t._v(" "),e("span",{staticClass:"relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400"},[t._v("\n              Premium\n            ")])])],1)],2),t._v(" "),e("ul",{staticClass:"flex flex-row justify-around"},[e("li",[e("a",{staticClass:"flex transition-transform duration-300 transform link hover:scale-110",attrs:{href:"https://redirect.r34.app/discord",target:"_blank",rel:"noopener nofollow"}},[e("svg",{staticClass:"w-6 h-6 mr-1 icon",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19.952 5.672c-1.904-1.531-4.916-1.79-5.044-1.801-.201-.017-.392.097-.474.281-.006.012-.072.163-.145.398 1.259.212 2.806.64 4.206 1.509.224.139.293.434.154.659-.09.146-.247.226-.407.226-.086 0-.173-.023-.252-.072C15.584 5.38 12.578 5.305 12 5.305s-3.585.075-5.989 1.567c-.225.14-.519.07-.659-.154-.14-.225-.07-.519.154-.659 1.4-.868 2.946-1.297 4.206-1.509-.074-.236-.14-.386-.145-.398-.083-.184-.273-.3-.475-.28-.127.01-3.139.269-5.069 1.822C3.015 6.625 1 12.073 1 16.783c0 .083.022.165.063.237 1.391 2.443 5.185 3.083 6.05 3.111h.015c.153 0 .297-.073.387-.197l.875-1.202c-2.359-.61-3.564-1.645-3.634-1.706-.198-.175-.217-.477-.042-.675.175-.198.476-.217.674-.043.029.026 2.248 1.909 6.612 1.909 4.372 0 6.591-1.891 6.613-1.91.198-.172.5-.154.674.045.174.198.155.499-.042.673-.07.062-1.275 1.096-3.634 1.706l.875 1.202c.09.124.234.197.387.197h.015c.865-.027 4.659-.667 6.05-3.111.04-.072.062-.153.062-.236 0-4.71-2.015-10.158-3.048-11.111zM8.891 14.87c-.924 0-1.674-.857-1.674-1.913s.749-1.913 1.674-1.913 1.674.857 1.674 1.913-.749 1.913-1.674 1.913zm6.218 0c-.924 0-1.674-.857-1.674-1.913s.749-1.913 1.674-1.913c.924 0 1.674.857 1.674 1.913s-.75 1.913-1.674 1.913z"}})]),t._v(" "),e("span",[t._v("Discord")])])]),t._v(" "),e("li",[e("NuxtLink",{staticClass:"flex transition-transform duration-300 transform link hover:scale-110",attrs:{to:"/legal"}},[t._v("\n            Legal\n          ")])],1),t._v(" "),e("li",[e("a",{staticClass:"flex transition-transform duration-300 transform link hover:scale-110",attrs:{href:"https://redirect.r34.app/twitter",target:"_blank",rel:"noopener nofollow"}},[e("svg",{staticClass:"w-6 h-6 mr-1 icon",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M24 4.56c-.88.39-1.83.65-2.83.77a4.93 4.93 0 0 0 2.17-2.72c-.95.56-2 .97-3.13 1.2a4.92 4.92 0 0 0-8.4 4.48C7.74 8.1 4.1 6.13 1.68 3.15A4.93 4.93 0 0 0 3.2 9.72a4.9 4.9 0 0 1-2.23-.61A4.93 4.93 0 0 0 4.91 14c-.69.18-1.45.23-2.22.08a4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.14 0 14.3-7.72 14-14.64.95-.7 1.79-1.57 2.45-2.55z"}})]),t._v(" "),e("span",[t._v("Twitter")])])])])])]),t._v(" "),e("div",{staticClass:"flex-1 hidden bg-black bg-opacity-75 md:block",on:{click:function(e){return t.sideNavNavigationManager({operation:"toggle"})}}},[t._v("\n     \n  ")])])}),o,!1,null,null,null);e.default=component.exports},199:function(t,e,r){"use strict";r.r(e);r(10);var o=r(4),n=r(5),c=r(58);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:()=>({isActive:!1}),computed:d({},Object(n.c)(["getTimesTheAppHasBeenOpened"])),mounted(){this.setTimesTheAppHasBeenOpened(this.getTimesTheAppHasBeenOpened+1),this.getTimesTheAppHasBeenOpened%10==0&&(this.isActive=!0,Object(c.a)("supportPopUp"))},methods:d(d({},Object(n.d)(["setTimesTheAppHasBeenOpened"])),{},{toggleSupportPopUp(){this.isActive=!this.isActive}})},m=r(7),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"page"}},[t.isActive?e("div",{staticClass:"fixed inset-0 z-40 overflow-y-auto",attrs:{"aria-label":"Support pop up",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"flex items-center justify-center min-h-screen text-center"},[e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-75",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.toggleSupportPopUp.apply(null,arguments))}}}),t._v(" "),e("div",{staticClass:"inline-block px-2 overflow-hidden text-left align-middle transform sm:my-8 sm:max-w-xl sm:w-full sm:p-6"},[e("SupportPopUp")],1)])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SupportPopUp:r(200).default})},200:function(t,e,r){"use strict";r.r(e);var o=r(7),component=Object(o.a)({},(function(){return(0,this._self._c)("ContentContainer",{attrs:{title:"Support us!",text:"Looks like you're enjoying the App, do you mind supporting the project with a donation?\n\nOr even better, subscribe to unlock Premium features!",links:[{href:"https://redirect.r34.app/donations",text:"Donation"},{href:"/premium",text:"Subscription",isInternal:!0}]}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentContainer:r(130).default})},29:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(33);class o{static generatePostsRoute(t,e,r){var o={path:"/",query:{}};return null!=t&&(o.query.domain=t),null!=e&&(o.query.page=e.toString()),null!=r&&Array.isArray(r)&&r.length&&(o.query.tags=r.join(",")),o}static generatePostsRouteWithDefaults(t,e,r,n){var c,l=null!==(c=t.rootGetters)&&void 0!==c?c:t.getters;return null==e&&(e=l["booru/getActiveBooru"].domain),null==r&&(r=l["booru/getActiveBooruType"].initialPageID),o.generatePostsRoute(e,r,n)}static generatePostsRouteWithActiveDefaults(t,e,r,n){var c,l=null!==(c=t.rootGetters)&&void 0!==c?c:t.getters;return null==e&&(e=l["booru/getActiveBooru"].domain),null==r&&(r=l["booru/getPageID"]),null==n&&(n=l["booru/getTags"]),o.generatePostsRoute(e,r,n)}}},58:function(t,e,r){"use strict";function o(t,e){setTimeout(e,500*t)}function n(t){var{category:e,action:r,name:o,value:n}=t;console.debug("\n  ---- Tracking event ----\n  Category: ".concat(e,"\n  Action: ").concat(r,"\n  Name: ").concat(o,"\n  Value: ").concat(n,"\n  ")),window._paq.push(["trackEvent",e,r,o,n])}function c(t){var e=Object.keys(t).filter((e=>t[e].value!==t[e].defaultValue));e.length&&Object.keys(e).forEach(((t,r)=>{o(r,n({category:"Settings",action:"Toggle",name:e[t]}))}))}function l(){o(0,n({category:"Notifications",action:"Open"}))}function d(){o(0,n({category:"PopUps",action:"Show",name:"Support"}))}function f(t){var e,{state:r,domain:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"settings":e=c(r);break;case"notifications":e=l();break;case"supportPopUp":e=d();break;default:throw new Error("No mode specified")}return e}r.d(e,"a",(function(){return f}))},81:function(t,e,r){"use strict";var o=r(43);e.a=t=>{var{store:e}=t;new o.a({key:"vuex-booru",storage:window.localStorage,reducer:t=>({booru:{history:t.booru.history}})}).plugin(e),new o.a({key:"vuex-root",storage:window.localStorage,reducer:t=>({version:t.version,statistics:t.statistics})}).plugin(e),new o.a({key:"vuex-notifications",storage:window.localStorage,reducer:t=>({notifications:{notifications:{latestTitle:t.notifications.notifications.latestTitle}}})}).plugin(e),new o.a({key:"vuex-user",storage:window.localStorage,reducer:t=>{var e={};return Object.keys(t.user.settings).forEach((r=>{e[r]={value:t.user.settings[r].value}})),{user:{custom:t.user.custom,settings:e}}}}).plugin(e)}},82:function(t,e,r){"use strict";var o=r(123);e.a=t=>{var{app:{store:e,router:r}}=t;Object(o.sync)(e,r)}},83:function(t,e,r){"use strict";var o=r(1),n=r(126),c=r.n(n);e.a=t=>{var{app:e,$config:r}=t;o.default.use(c.a,{host:r.MATOMO_HOST,siteId:r.MATOMO_SITE_ID,router:e.router,disableCookies:!0,enableHeartBeatTimer:!0,heartBeatTimerInterval:30,debug:"development"===r.NODE_ENV})}},85:function(t,e,r){"use strict";var o=r(202);function n(t){var e=t.version;return 0!==e?(console.debug('No migration necessary for state version "'.concat(e,'"')),t):(t=function(t){return t.user.custom.savedPosts.map((t=>{var e=t.data.tags;return Array.isArray(e)&&(t.data.tags={character:[],copyright:[],artist:[],general:e,meta:[]}),"source"in t.data&&(t.data.sources=t.data.source,delete t.data.source),t})),t.version=1,t}(t),console.debug('Migrated state to version "'.concat(t.version,'"')),n(t))}e.a=t=>{var{store:e}=t,r=n(Object(o.a)(e.state));e.replaceState(r)}}},[[131,32,2,33]]]);