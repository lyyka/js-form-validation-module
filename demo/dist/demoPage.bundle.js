(()=>{"use strict";var e={454:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(933),a=r.n(n),i=r(476),o=r.n(i)()(a());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap);"]),o.push([e.id,".text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{box-sizing:border-box}html,body{padding:0;margin:0}img{max-width:100%}a.cta{color:white;background:#3B60E4;border-radius:4px;padding:12px 16px;display:inline-block;margin:12px 0}a.cta:hover{color:white}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{font-family:'Source Sans 3', sans-serif}h1,h2,h3,h4,h5,h6{color:#080708;margin:0;margin-bottom:10px}h1{font-size:32px;font-size:2rem;line-height:24px;line-height:1.5rem}h2{font-size:24px;font-size:1.5rem;line-height:24px;line-height:1.5rem}p{color:#080708;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;margin-top:0;margin-bottom:10px}a{color:#080708;text-decoration:none}a:hover{text-decoration:none;color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.back-link{display:inline-flex;margin-bottom:24px;align-items:center;color:#3B60E4;text-decoration:underline;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem}.section{padding:60px 0}.section-title{margin-bottom:24px}.section-title.has-subtitle{margin-bottom:10px}.section-title.has-subtitle+p{margin-bottom:24px}.container{width:1190px;max-width:100%;padding-left:20px;padding-right:20px;margin:0 auto}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}nav{position:sticky;top:0}.navbar{border-bottom:1px solid #e5e5e5;padding:12px 20px;background:#ffffff;display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__logo-wrapper>img{height:64px}.navbar>.navbar__links-wrapper{display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__links-wrapper a{display:inline-block}.navbar>.navbar__links-wrapper a+a{margin-left:14px}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}input,select{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;border:1px solid #e5e5e5}input:focus,select:focus{border:1px solid #3B60E4}button{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;cursor:pointer;border:0;background:#3B60E4;color:white}.input__wrapper+.input__wrapper{margin-top:24px}\n",""]);const l=o},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],l=0;l<e.length;l++){var s=e[l],c=n.base?s[0]+n.base:s[0],u=i[c]||0,d="".concat(c," ").concat(u);i[c]=u+1;var p=r(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,n);n.byIndex=l,t.splice(l,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function a(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,a){var i=n(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var l=r(i[o]);t[l].references--}for(var s=n(e,a),c=0;c<i.length;c++){var u=r(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},311:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(892),t=r.n(e),n=r(760),a=r.n(n),i=r(311),o=r.n(i),l=r(192),s=r.n(l),c=r(60),u=r.n(c),d=r(865),p=r.n(d),m=r(454),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var v={d:(e,t)=>{for(var r in t)v.o(t,r)&&!v.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},g={};v.d(g,{j:()=>b,G:()=>$});const b={required:()=>"required",string:()=>"string",email:()=>"email",minStrLen:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to minStrLen()`),""):`minStrLen:${e}`,maxStrLen:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to maxStrLen()`),""):`maxStrLen:${e}`,in:e=>Array.isArray(e)?"in:"+e.join(","):(console.error(`${e} is not an array.`),""),between:e=>Array.isArray(e)&&2==e.length?"between:"+e.join(","):(console.error(`Error creating a 'between' rule with values ${e}`),""),gt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gt()`),""):`gt:${e}`,gte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gte()`),""):`gte:${e}`,lt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lt()`),""):`lt:${e}`,lte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lte()`),""):`lte:${e}`,date:e=>`date:${e}`},h={required:e=>`${e} field is required`,string:e=>`${e} must be string`,email:e=>`${e} must be an email string`,in:e=>`${e} value is invalid`,between:(e,t)=>`${e} value must be between ${t[0]} and ${t[1]}`,gt:(e,t)=>`${e} value must be greater then ${t[0]}`,gte:(e,t)=>`${e} value must be greater then or equal to ${t[0]}`,lt:(e,t)=>`${e} value must be greater then ${t[0]}`,lte:(e,t)=>`${e} value must be less then or equal to ${t[0]}`,date:e=>`${e} value is not a valid date string`,minStrLen:(e,t)=>`${e} must have at least ${t[0]} characters`,maxStrLen:(e,t)=>`${e} must not have more than ${t[0]} characters`},x={required:e=>null!=e&&""!==e,string:e=>"string"==typeof e,minStrLen:(e,t)=>"string"==typeof e&&e.length>=t[0],maxStrLen:(e,t)=>"string"==typeof e&&e.length<=t[0],email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),in:(e,t)=>t.includes(e),between:(e,t)=>{const r=Number(e);return r>=t[0]&&r<=t[1]},gt:(e,t)=>Number(e)>t[0],gte:(e,t)=>Number(e)>=t[0],lt:(e,t)=>Number(e)<t[0],lte:(e,t)=>Number(e)<=t[0],date:e=>!isNaN(Date.parse(e))},y=(e,t,r={})=>{const n=e.getAttribute("name"),a=r.validationMessages||{};if(!r.silent){const t=function(e){const t=e.parentNode.querySelector("[data-is-validation-error]");t&&t.parentNode.removeChild(t)};t(e),e.classList.remove(r.invalidClass),e.addEventListener("input",(function(){t(e),e.classList.remove(r.invalidClass)}))}let i=!0,o=t[n];if(o){o=o.filter((e=>"string"==typeof e));for(const t of o){let o,l=t;if(t.includes(":")){const e=t.split(":");l=e[0],o=e[1].split(",")}const s=x[l];if(!s)throw new Error(`Validator '${l}' does not exist!`);if(i=s(e.value,o),!i){if(!r.silent){let t=n.split("_").join(" ");t=t.charAt(0).toUpperCase()+t.slice(1);const i=(a[n]?a[n][l]:void 0)||h[l](t,o),s=document.createElement("p");s.setAttribute("data-is-validation-error","1"),s.style.color=r.validationMessageColor,s.style.marginTop="0px",s.innerText=i,e.parentNode.appendChild(s)}break}}}return i},w={validationMessages:{},silent:!1,invalidClass:"invalid",validationMessageColor:"red"},$=(e,t,r={})=>{r={...w,...r};const n=[],a=(e=>{const t=Array.from(e.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"])')),r=r=>{e.querySelectorAll(`[type=${r}]:checked`).forEach((e=>{t.push(e)}))};return r("radio"),r("checkbox"),t})(e);let i=!0;for(let e=0;e<a.length;e++){const o=a[e];y(o,t,r)?Object.keys(t).includes(o.getAttribute("name"))&&n.push(o):(i=!1,r.silent||o.classList.add(r.invalidClass))}return{validFormFields:n,formIsValid:i}};var N=g.G;const k=(e,t)=>{if(t){const t=e.querySelector("button"),r=t.innerText;t.innerText="Form is valid! 🎉",setTimeout((()=>{t.innerText=r}),5e3)}};var E;(E=g.j,[{name:"Required rule",formId:"test-required-validation",validationRules:{first_name:[E.required()]},callback:k},{name:"String rule",formId:"test-string-validation",validationRules:{first_name:[E.string()]},callback:k},{name:"Min. string len. rule",formId:"test-min-str-len-validation",validationRules:{first_name:[E.minStrLen(5)]},callback:k},{name:"Max. string len. rule",formId:"test-max-str-len-validation",validationRules:{first_name:[E.maxStrLen(5)]},callback:k},{name:"Email rule",formId:"test-email-validation",validationRules:{email:[E.email()]},callback:k},{name:"In rule",formId:"test-in-validation",validationRules:{favourite_color:[E.in(["red","green","blue"])]},callback:k},{name:"Between rule",formId:"test-between-validation",validationRules:{age:[E.between([18,24])]},callback:k},{name:"GT rule",formId:"test-gt-validation",validationRules:{number:[E.gt(50)]},callback:k},{name:"GTE rule",formId:"test-gte-validation",validationRules:{number:[E.gte(50)]},callback:k},{name:"LT rule",formId:"test-lt-validation",validationRules:{number:[E.lt(50)]},callback:k},{name:"LTE rule",formId:"test-lte-validation",validationRules:{number:[E.lte([50])]},callback:k},{name:"Date rule",formId:"test-date-validation",validationRules:{birthday:[E.date()],birthday_date:[E.date()]},callback:k}]).forEach((e=>{const t=document.querySelector(`#${e.formId}`);t.querySelector("button").onclick=function(){const{formIsValid:r}=N(t,e.validationRules);e.callback(t,r)}}))})()})();