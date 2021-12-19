(()=>{"use strict";var e,t,r,n,o,i,a,p,s,l,c,u,d,f,h={454:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(933),o=r.n(n),i=r(476),a=r.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap);"]),a.push([e.id,".text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{box-sizing:border-box}html,body{padding:0;margin:0}img{max-width:100%}a.cta{color:white;background:#3B60E4;border-radius:4px;padding:12px 16px;display:inline-block;margin:12px 0}a.cta:hover{color:white}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{font-family:'Source Sans 3', sans-serif}h1,h2,h3,h4,h5,h6{color:#080708;margin:0;margin-bottom:10px}h1{font-size:32px;font-size:2rem;line-height:24px;line-height:1.5rem}h2{font-size:24px;font-size:1.5rem;line-height:24px;line-height:1.5rem}p{color:#080708;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;margin-top:0;margin-bottom:10px}a{color:#080708;text-decoration:none}a:hover{text-decoration:none;color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.back-link{display:inline-flex;margin-bottom:24px;align-items:center;color:#3B60E4;text-decoration:underline;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem}.section{padding:60px 0}.section-title{margin-bottom:24px}.section-title.has-subtitle{margin-bottom:10px}.section-title.has-subtitle+p{margin-bottom:24px}.container{width:1190px;max-width:100%;padding-left:20px;padding-right:20px;margin:0 auto}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}nav{position:sticky;top:0}.navbar{border-bottom:1px solid #e5e5e5;padding:12px 20px;background:#ffffff;display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__logo-wrapper>img{height:64px}.navbar>.navbar__links-wrapper{display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__links-wrapper a{display:inline-block}.navbar>.navbar__links-wrapper a+a{margin-left:14px}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}input,select{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;border:1px solid #e5e5e5}input.valid,select.valid{border:1px solid #3be495}input.invalid,select.invalid{border:1px solid #e43b3b}input:focus,select:focus{border:1px solid #3B60E4}button{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;cursor:pointer;border:0;background:#3B60E4;color:white}.input__wrapper+.input__wrapper{margin-top:24px}\n",""]);const p=a},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var p=0;p<this.length;p++){var s=this[p][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);n&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],p=0;p<e.length;p++){var s=e[p],l=n.base?s[0]+n.base:s[0],c=i[l]||0,u="".concat(l," ").concat(c);i[l]=c+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=o(f,n);n.byIndex=p,t.splice(p,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var p=r(i[a]);t[p].references--}for(var s=n(e,o),l=0;l<i.length;l++){var c=r(i[l]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}i=s}}},311:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},x={};function m(e){var t=x[e];if(void 0!==t)return t.exports;var r=x[e]={id:e,exports:{}};return h[e](r,r.exports,m),r.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var r in t)m.o(t,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=m(892),t=m.n(e),r=m(760),n=m.n(r),o=m(311),i=m.n(o),a=m(192),p=m.n(a),s=m(60),l=m.n(s),c=m(865),u=m.n(c),d=m(454),(f={}).styleTagTransform=u(),f.setAttributes=p(),f.insert=i().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=l(),t()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();