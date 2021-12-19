(()=>{"use strict";var e,t,n,o,r,i,a,p,c,l,s,d,u,h,f={454:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(933),r=n.n(o),i=n(476),a=n.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap);"]),a.push([e.id,".text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{box-sizing:border-box}html,body{padding:0;margin:0}img{max-width:100%}a.cta{color:white;background:#3B60E4;border-radius:4px;padding:12px 16px;display:inline-block;margin:12px 0}a.cta:hover{color:white}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{font-family:'Source Sans 3', sans-serif}h1,h2,h3,h4,h5,h6{color:#080708;margin:0;margin-bottom:10px}h1{font-size:32px;font-size:2rem;line-height:24px;line-height:1.5rem}h2{font-size:24px;font-size:1.5rem;line-height:24px;line-height:1.5rem}p{color:#080708;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;margin-top:0;margin-bottom:10px}a{color:#080708;text-decoration:none}a:hover{text-decoration:none;color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.back-link{display:inline-flex;margin-bottom:24px;align-items:center;color:#3B60E4;text-decoration:underline;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem}.section{padding:60px 0}.section-title{margin-bottom:24px}.section-title.has-subtitle{margin-bottom:10px}.section-title.has-subtitle+p{margin-bottom:24px}.container{width:1190px;max-width:100%;padding-left:20px;padding-right:20px;margin:0 auto}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}nav{position:sticky;top:0}.navbar{border-bottom:1px solid #e5e5e5;padding:12px 20px;background:#ffffff;display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__logo-wrapper>img{height:64px}.navbar>.navbar__links-wrapper{display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__links-wrapper a{display:inline-block}.navbar>.navbar__links-wrapper a+a{margin-left:14px}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}input,select{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;border:1px solid #e5e5e5}input.valid,select.valid{border:1px solid #3be495}input.invalid,select.invalid{border:1px solid #e43b3b}input:focus:not(.valid):not(.invalid),select:focus:not(.valid):not(.invalid){border:1px solid #3B60E4}button{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;cursor:pointer;border:0;background:#3B60E4;color:white}.input__wrapper+.input__wrapper{margin-top:24px}.input__checkbox-wrapper-label{display:block;position:relative;padding-left:28px;cursor:pointer}.input__checkbox-wrapper-label input[type=checkbox]{display:none}.input__checkbox-wrapper-label input[type=checkbox]:checked ~ .input__checkbox-indicator{background:#3B60E4}.input__checkbox-wrapper-label input[type=checkbox]:checked ~ .input__checkbox-indicator::after{display:block;position:absolute;left:7px;top:4px;width:3px;height:7px;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.input__checkbox-indicator{display:block;position:absolute;top:0;left:0;width:20px;height:20px;border-radius:4px;border:1px solid #e5e5e5;padding:4px}.input__checkbox-indicator::after{content:\"\";display:none}\n",""]);const p=a},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],p=0;p<e.length;p++){var c=e[p],l=o.base?c[0]+o.base:c[0],s=i[l]||0,d="".concat(l," ").concat(s);i[l]=s+1;var u=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,o);o.byIndex=p,t.splice(p,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var p=n(i[a]);t[p].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},311:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},x={};function b(e){var t=x[e];if(void 0!==t)return t.exports;var n=x[e]={id:e,exports:{}};return f[e](n,n.exports,b),n.exports}b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var n in t)b.o(t,n)&&!b.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=b(892),t=b.n(e),n=b(760),o=b.n(n),r=b(311),i=b.n(r),a=b(192),p=b.n(a),c=b(60),l=b.n(c),s=b(865),d=b.n(s),u=b(454),(h={}).styleTagTransform=d(),h.setAttributes=p(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,document.onload=()=>{console.log("Document loaded!")}})();