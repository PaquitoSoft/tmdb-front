(this["webpackJsonptmdb-front"]=this["webpackJsonptmdb-front"]||[]).push([[1],[,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(9),r=a(0),c=a.n(r),o={LIGHT:"light",DARK:"dark"},l="tmk",i=c.a.createContext({apiClient:void 0,userId:void 0,imagesConfig:{},error:null,setError:function(){return!1},themeMode:void 0,toggleThemeMode:function(){return!1}});function s(e){var t=e.apiClient,a=e.userId,s=e.imagesConfig,u=e.children,m=Object(r.useState)(null),d=Object(n.a)(m,2),f=d[0],h=d[1],v=localStorage.getItem(l)||o.LIGHT,p=Object(r.useState)(v),E=Object(n.a)(p,2),g=E[0],b=E[1],w={apiClient:t,userId:a,imagesConfig:s,error:f,setError:h,themeMode:v,toggleThemeMode:function(){var e=g!==o.LIGHT?o.LIGHT:o.DARK;b(e),localStorage.setItem(l,e)}};return c.a.createElement(i.Provider,{value:w},u)}function u(){var e=Object(r.useContext)(i);if(!e)throw new Error("useAppContext must be used within an AppContext.Provider");return e}},,,,,,,,function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(31);function c(e){var t=e.children,a=e.className,n=void 0===a?"":a;return r.a.createElement("div",{className:"mini-card ".concat(n)},t)}c.Media=function(e){var t=e.children,a=e.className,n=void 0===a?"":a;return r.a.createElement("span",{className:"mini-card__media ".concat(n)},t)},c.Title=function(e){var t=e.children,a=e.noMultiline,n=void 0!==a&&a,c=e.className,o=void 0===c?"":c;return r.a.createElement("span",{className:"mini-card__title ".concat(n?"mini-card__title--no-multiline":""," ").concat(o)},t)},c.Subtitle=function(e){var t=e.children,a=e.className,n=void 0===a?"":a;return r.a.createElement("span",{className:"mini-card__subtitle ".concat(n)},t)},t.a=c},,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),r=a(0),c=a.n(r),o=a(3);function l(e){var t=e.path,a=e.type,l=void 0===a?"poster":a,i=e.sizes,s=void 0===i?"":i,u=e.ratio,m=e.className,d=void 0===m?"":m,f=Object(n.a)(e,["path","type","sizes","ratio","className"]),h=Object(o.b)().imagesConfig,v=Object(r.useRef)(null),p=h["".concat(l,"Sizes")].filter((function(e){return/^w/.test(e)}));return Object(r.useEffect)((function(){if(!t){var e=v.current,a=e.clientHeight,n=e.clientWidth;u&&(a=Math.trunc(n/u)),v.current.src="https://picsum.photos/id/1025/".concat(n,"/").concat(a,"?grayscale")}}),[]),t&&(f.srcSet=p.map((function(e){return"".concat(h.baseUrl).concat(e).concat(t," ").concat(e.substr(1),"w")}))),c.a.createElement("img",Object.assign({ref:v,className:"media-image ".concat(d),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",sizes:s,style:{width:"100%"}},f))}},function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(40);t.a=function(){return r.a.createElement("div",{className:"app-loader"},r.a.createElement("div",{className:"app-loader-icon"}))}},,,,,,,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(29),a(8)),i=a(7),s=a(3);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),f=r.a.createElement("path",{d:"M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"}),h=function(e){var t=e.svgRef,a=e.title,n=m(e,["svgRef","title"]);return r.a.createElement("svg",u({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,d,f)},v=r.a.forwardRef((function(e,t){return r.a.createElement(h,u({svgRef:t},e))}));a.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=r.a.createElement("g",{id:"Bounding_Box"},r.a.createElement("rect",{fill:"none",width:24,height:24})),b=r.a.createElement("g",{id:"Master"},r.a.createElement("g",null,r.a.createElement("path",{d:"M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z"}),r.a.createElement("path",{d:"M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z"}))),w=function(e){var t=e.svgRef,a=e.title,n=E(e,["svgRef","title"]);return r.a.createElement("svg",p({x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24",enableBackground:"new 0 0 24 24",xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,g,b)},O=r.a.forwardRef((function(e,t){return r.a.createElement(w,p({svgRef:t},e))}));a.p,a(30);function y(){var e=Object(s.b)().toggleThemeMode;return r.a.createElement("div",{className:"theme-mode-switch"},r.a.createElement(v,{className:"theme-mode-switch__icon"}),r.a.createElement("div",{className:"theme-mode-switch__control"},r.a.createElement("div",{className:"theme-mode-switch__button",onClick:e})),r.a.createElement(O,{className:"theme-mode-switch__icon"}))}var _=a(9),C=a(15),A=a(11);a(32);function j(e){var t=e.tvShow,a=e.onClick;return r.a.createElement(l.b,{className:"searcher__result",to:"/tvshow/".concat(t.id),onClick:a},r.a.createElement(A.a,null,r.a.createElement(A.a.Media,null,r.a.createElement(C.a,{path:t.backdropImagePath,type:"backdrop",sizes:"14vw",ratio:1.71,alt:t.name})),r.a.createElement(A.a.Title,{noMultiline:!0},t.name)))}var N="\n\tquery SearchTvShows($searchTerm: String!) {\n\t\tsearchTvShows(searchTerm: $searchTerm) {\n\t\t\tid\n\t\t\tname\n\t\t\tbackdropImagePath\n\t\t}\n\t}\n";function S(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(_.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)([]),d=Object(_.a)(m,2),f=d[0],h=d[1],v=Object(s.b)().apiClient;return Object(n.useEffect)((function(){document.addEventListener("click",(function(e){e.target.closest(".searcher")||c(!1)}))}),[]),r.a.createElement("div",{className:"searcher"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&v.query({query:N,variables:{searchTerm:i}}).then((function(e){var t=e.data.searchTvShows;h(t)})).catch((function(e){console.error("Error searching for Tv Shows  with term '".concat(i,"'"),e)}))}},r.a.createElement("input",{className:"searcher__search-term",type:"text",name:"searchTerm",placeholder:"Type in your search term",onFocus:function(){return c(!0)},value:i,onChange:function(e){return u(e.target.value)}})),a&&f.length>0&&r.a.createElement("div",{className:"searcher__results"},f.map((function(e){return r.a.createElement(j,{key:e.id,tvShow:e,onClick:function(){return h([])}})}))))}a(38);function I(e){var t=e.error,a=Object(s.b)().setError;return console.error("Unexpected error:",t),r.a.createElement("div",{className:"error-modal"},r.a.createElement("div",{className:"error-modal__veil"}),r.a.createElement("div",{className:"error-modal__modal"},r.a.createElement("div",{className:"error-modal__head"}),r.a.createElement("div",{className:"error-modal__content"},r.a.createElement("p",null,"Ouch! It has been a totally unexpected error. Please try again in a minute.")),r.a.createElement("div",{className:"error-modal__footer"},r.a.createElement("button",{className:"error-modal__close-button",onClick:function(){return a(null)}},"Close"))))}a(39);function z(e){var t=e.children,a=Object(s.b)(),n=a.error,c=a.themeMode;return r.a.createElement("div",{className:"layout-app","data-thememode":c},r.a.createElement("header",{className:"layout-app__header"},r.a.createElement("section",{className:"layout-app__title-container"},r.a.createElement(l.b,{className:"layout-app__title",to:"/"},"THE MOVIE DATABASE"),r.a.createElement(y,null)),r.a.createElement("section",{className:"layout-app__search-container"},r.a.createElement(S,null))),r.a.createElement("main",{className:"layout-app__main"},t),n&&r.a.createElement(I,{error:n}))}var k=a(16);function x(){var e=Object(i.f)().pathname;return Object(n.useEffect)((function(){window.scroll({top:0,left:0,behavior:"smooth"})}),[e]),null}a(41);var T=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,55))})),M=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,56))})),R=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,57))})),P="/";P="/tmdb-front";var B=function(e){var t=e.apiClient,a=e.userId,c=e.imagesConfig;return r.a.createElement(s.a,{apiClient:t,userId:a,imagesConfig:c},r.a.createElement(l.a,{basename:P},r.a.createElement(n.Suspense,{fallback:r.a.createElement(k.a,null)},r.a.createElement(z,null,r.a.createElement(x,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/tvshow/:tvShowId/season/:seasonNumber"},r.a.createElement(R,null)),r.a.createElement(i.a,{path:"/tvshow/:tvShowId"},r.a.createElement(M,null)),r.a.createElement(i.a,{path:"/",exact:!0},r.a.createElement(T,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(23),U="http://localhost:4000";U="https://tmdb-graphql-api.herokuapp.com";var q=function(){var e=localStorage.getItem("ut");return e||(e=btoa(Date.now()),localStorage.setItem("ut",e)),e}();var V=function(e){var t=e.apiUrl,a=e.userId;return new H.a({url:t,interceptors:[],headers:{userToken:a},onStart:function(e){},onEnd:function(e){},omitEmptyVariables:!1})}({apiUrl:U,userId:q});V.query({query:"\n\t\tquery {\n\t\t\tgetImagesConfiguration {\n\t\t\t\tbaseUrl\n\t\t\t\tbackdropSizes\n\t\t\t\tlogoSizes\n\t\t\t\tposterSizes\n\t\t\t\tprofileSizes\n\t\t\t\tstillSizes\n\t\t\t}\n\t\t}\n\t"}).then((function(e){var t=e.data.getImagesConfiguration;o.a.render(r.a.createElement(B,{apiClient:V,userId:q,imagesConfig:t}),document.getElementById("root"))})).catch((function(e){console.error("Error loading images configuration.",e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,2,3]]]);
//# sourceMappingURL=main.9ac58674.chunk.js.map