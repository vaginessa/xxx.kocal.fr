webpackJsonp([1,3],[,,,,,function(t,e,n){window.$=window.jQuery=n(1),window.Vue=n(3),window.axios=n(2),window.axios.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"}},,,,,,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(a[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e){t.exports=function(t,e,n,a){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),a){var u=s.computed||(s.computed={});Object.keys(a).forEach(function(t){var e=a[t];u[t]=function(){return e}})}return{esModule:i,exports:r,options:s}}},function(t,e,n){function a(t){for(var e=0;e<t.length;e++){var n=t[e],a=l[n.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(o(n.parts[i]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(o(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:r}}}}function i(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],u=r[2],c=r[3],l={css:s,media:u,sourceMap:c};a[o]?(l.id=t+":"+a[o].parts.length,a[o].parts.push(l)):(l.id=t+":0",n.push(a[o]={id:o,parts:[l]}))}return n}function r(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t}function o(t){var e,n,a=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),i=null!=a;if(i&&v)return h;if(g){var o=f++;a=d||(d=r()),e=s.bind(null,a,o,!1),n=s.bind(null,a,o,!0)}else a=a||r(),e=u.bind(null,a),n=function(){a.parentNode.removeChild(a)};return i||e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}function s(t,e,n,a){var i=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var r=document.createTextNode(i),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function u(t,e){var n=e.css,a=e.media,i=e.sourceMap;if(a&&t.setAttribute("media",a),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(49),l={},p=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,f=0,v=!1,h=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){v=n;var r=i(t,e);return a(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],u=l[s.id];u.refs--,n.push(u)}e?(r=i(t,e),a(r)):r=[];for(var o=0;o<n.length;o++){var u=n[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete l[u.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(5);n.n(a);Vue.component("pagination",n(42)),Vue.component("toolbox",n(44)),new Vue({el:"#app",template:"<app></app>",components:{app:n(43)}})},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(40),i=n.n(a);e.default={data:function(){return{loading:!0,url:"/admin",search:"",headers:{id:"#",title:"Title",duration:"Duration"},videos:[],videosErrors:{},pagination:{current_page:1,per_page:50},paginationOptions:{offset:5}}},watch:{search:function(){this.debounceLoadData()}},methods:{loadData:function(){var t=this,e={params:{paginate:this.pagination.per_page,page:this.pagination.current_page}};this.search&&(e.params.search=this.search,delete e.params.page),axios.get(this.url,e).then(function(e){t.loading=!1,t.videos=e.data.data,t.getPaginationValuesFromJson(e.data)}).catch(console.err)},debounceLoadData:i()(function(){this.loadData()},400),getPaginationValuesFromJson:function(t){this.$set(this,"pagination",{current_page:t.current_page,last_page:t.last_page,per_page:t.per_page,from:t.from,to:t.to,total:t.total})},deleteVideo:function(t,e){var n=this;confirm("Do you really want to delete the video « "+e+" » ?")&&axios.delete("/admin/delete_video/"+e).then(function(t){var a=n.videos.find(function(t){return t.id===e});a&&(n.videos.splice(n.videos.indexOf(a),1),n.pagination.total-=1)}).catch(alert)},imageError:function(t,e){this.$set(this.videosErrors,e,!0)}},mounted:function(){this.loadData()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{visible:!1}}}},function(t,e,n){e=t.exports=n(11)(),e.push([t.i,".panel[data-v-c775696e]{position:fixed;top:100%;right:40px;-webkit-transform:translate3D(0,-41px,0);transform:translate3D(0,-41px,0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.panel.visible[data-v-c775696e]{-webkit-transform:translate3D(0,-100%,0);transform:translate3D(0,-100%,0)}.panel-heading[data-v-c775696e]{cursor:pointer}",""])},function(t,e,n){e=t.exports=n(11)(),e.push([t.i,".column-thumb[data-v-27ac0c81]{width:70px}.column-actions[data-v-27ac0c81]{width:1%}",""])},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=h,a=g;return h=g=void 0,j=e,_=t.apply(a,n)}function r(t){return j=t,b=setTimeout(l,e),k?i(t):_}function u(t){var n=t-C,a=t-j,i=e-n;return D?x(i,m-a):i}function c(t){var n=t-C,a=t-j;return void 0===C||n>=e||n<0||D&&a>=m}function l(){var t=w();if(c(t))return p(t);b=setTimeout(l,u(t))}function p(t){return b=void 0,O&&h?i(t):(h=g=void 0,_)}function d(){void 0!==b&&clearTimeout(b),j=0,h=C=g=b=void 0}function f(){return void 0===b?_:p(w())}function v(){var t=w(),n=c(t);if(h=arguments,g=this,C=t,n){if(void 0===b)return r(C);if(D)return b=setTimeout(l,e),i(C)}return void 0===b&&(b=setTimeout(l,e)),_}var h,g,m,_,b,C,j=0,k=!1,D=!1,O=!0;if("function"!=typeof t)throw new TypeError(s);return e=o(e)||0,a(n)&&(k=!!n.leading,D="maxWait"in n,m=D?y(o(n.maxWait)||0,e):m,O="trailing"in n?!!n.trailing:O),v.cancel=d,v.flush=f,v}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function r(t){return"symbol"==typeof t||i(t)&&b.call(t)==c}function o(t){if("number"==typeof t)return t;if(r(t))return u;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=d.test(t);return n||f.test(t)?v(t.slice(2),n?2:8):p.test(t)?u:+t}var s="Expected a function",u=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,v=parseInt,h="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=h||g||Function("return this")(),_=Object.prototype,b=_.toString,y=Math.max,x=Math.min,w=function(){return m.Date.now()};t.exports=n}).call(e,n(14))},,function(t,e){t.exports={template:`<nav>
        <ul class="pagination" v-if="pagination.last_page > 0" :class="sizeClass">
            <li v-if="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
                <span v-if="pagination.current_page <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </span>
                
                <a href="#" v-if="pagination.current_page > 1 " :aria-label="config.ariaPrevioius" @click.prevent="changePage(pagination.current_page - 1)">
                    <span aria-hidden="true">{{ config.previousText }}</span>
                </a>
            </li>

            <li v-for="num in array" :class="{ 'active': num === pagination.current_page }">
                <a href="#" @click.prevent="changePage(num)">{{ num }}</a>
            </li>

            <li v-if="showNext()" :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
                <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </span>
                
                <a href="#" v-if="pagination.current_page < pagination.last_page" :aria-label="config.ariaNext" @click.prevent="changePage(pagination.current_page + 1)">
                    <span aria-hidden="true">{{ config.nextText }}</span>
                </a>
            </li>
        </ul>
    </nav>`,props:{pagination:{type:Object,required:!0},callback:{type:Function,required:!0},options:{type:Object},size:{type:String}},computed:{array(){if(this.pagination.last_page<=0)return[];let t=this.pagination.current_page-this.config.offset;t<1&&(t=1);let e=t+2*this.config.offset;e>=this.pagination.last_page&&(e=this.pagination.last_page);let n=[];for(;t<=e;)n.push(t),t++;return n},config(){return Object.assign({offset:3,ariaPrevious:"Previous",ariaNext:"Next",previousText:"«",nextText:"»",alwaysShowPrevNext:!1},this.options)},sizeClass(){return"large"===this.size?"pagination-lg":"small"===this.size?"pagination-sm":""}},watch:{"pagination.per_page"(t,e){+t!=+e&&this.callback()}},methods:{showPrevious(){return this.config.alwaysShowPrevNext||this.pagination.current_page>1},showNext(){return this.config.alwaysShowPrevNext||this.pagination.current_page<this.pagination.last_page},changePage(t){this.pagination.current_page!==t&&(this.$set(this.pagination,"current_page",t),this.callback())}}}},function(t,e,n){n(48);var a=n(12)(n(36),n(45),"data-v-27ac0c81",null);t.exports=a.exports},function(t,e,n){n(47);var a=n(12)(n(37),n(46),"data-v-c775696e",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[t._v("\n        Loading...\n    ")]):n("div",[n("h1",[t._v("Manage videos.\n            "),t.videos.length>0?n("small",[t._v(t._s(t.pagination.total)+" videos, displayed by "+t._s(t.pagination.per_page)+" on\n                "+t._s(t.pagination.last_page)+"\n                pages.\n            ")]):t._e()]),t._v(" "),n("toolbox",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{placeholder:"mia khalifa, ..."},domProps:{value:t.search},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.loadData(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-default btn-block",attrs:{type:"submit"},on:{click:t.loadData,submit:function(e){e.preventDefault(),t.loadData(e)}}},[t._v("Search in title\n            ")]),t._v(" "),n("hr"),t._v(" "),n("label",{attrs:{for:"per_page"}},[t._v("Videos per page:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.pagination.per_page,expression:"pagination.per_page"}],staticClass:"form-control",attrs:{id:"per_page"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.pagination.per_page=e.target.multiple?n:n[0]}}},t._l([20,50,100,200,500],function(e){return n("option",[t._v(t._s(e))])}))]),t._v(" "),t.videos.length>0?n("div",[n("div",{staticClass:"text-center"},[n("pagination",{attrs:{pagination:t.pagination,options:t.paginationOptions,callback:t.loadData}})],1),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-striped table-bordered"},[n("thead",[n("tr",[n("th",[t._v("#")]),t._v(" "),n("th",[t._v("Site")]),t._v(" "),n("th",[t._v("Title")]),t._v(" "),n("th",[t._v("Tags")]),t._v(" "),n("th",[t._v("Duration")]),t._v(" "),n("th",{staticClass:"column-thumb"},[t._v("Thumb")]),t._v(" "),n("th",{staticClass:"column-actions"})])]),t._v(" "),n("tbody",t._l(t.videos,function(e){return n("tr",{class:{danger:t.videosErrors[e.id]}},[n("td",[t._v(t._s(e.id))]),t._v(" "),n("td",[n("a",{attrs:{href:e.site.url}},[t._v(t._s(e.site.name))])]),t._v(" "),n("td",[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])]),t._v(" "),n("td",[t._v(t._s(e.tags))]),t._v(" "),n("td",[t._v(t._s(e.duration))]),t._v(" "),n("td",[n("a",{staticClass:"thumbnail",attrs:{href:e.thumbnail_url}},[n("img",{attrs:{src:e.thumbnail_url},on:{error:function(n){t.imageError(n,e.id)}}})])]),t._v(" "),n("td",{staticClass:"text-right"},[n("button",{staticClass:"btn btn-danger",on:{click:function(n){t.deleteVideo(n,e.id)}}},[t._v("Delete\n                            ")])])])}))])]),t._v(" "),n("div",{staticClass:"text-center"},[n("pagination",{attrs:{pagination:t.pagination,options:t.paginationOptions,callback:t.loadData}})],1)]):n("div",[n("p",{staticClass:"text-center"},[t._v("\n                No videos to display.\n            ")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel panel-primary",class:{visible:t.visible}},[n("div",{staticClass:"panel-heading",on:{click:function(e){t.visible=!t.visible}}},[t._v("Toolbox")]),t._v(" "),n("div",{staticClass:"panel-body"},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e,n){var a=n(38);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(13)("7aa82cb6",a,!0)},function(t,e,n){var a=n(39);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(13)("916ee0d6",a,!0)},function(t,e){t.exports=function(t,e){for(var n=[],a={},i=0;i<e.length;i++){var r=e[i],o=r[0],s=r[1],u=r[2],c=r[3],l={id:t+":"+i,css:s,media:u,sourceMap:c};a[o]?a[o].parts.push(l):n.push(a[o]={id:o,parts:[l]})}return n}},function(t,e,n){t.exports=n(15)}],[50]);