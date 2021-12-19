(()=>{"use strict";var e={454:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(933),r=i.n(n),a=i(476),o=i.n(a)()(r());o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap);"]),o.push([e.id,".text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{box-sizing:border-box}html,body{padding:0;margin:0}img{max-width:100%}a.cta{color:white;background:#3B60E4;border-radius:4px;padding:12px 16px;display:inline-block;margin:12px 0}a.cta:hover{color:white}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}*{font-family:'Source Sans 3', sans-serif}h1,h2,h3,h4,h5,h6{color:#080708;margin:0;margin-bottom:10px}h1{font-size:32px;font-size:2rem;line-height:24px;line-height:1.5rem}h2{font-size:24px;font-size:1.5rem;line-height:24px;line-height:1.5rem}p{color:#080708;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;margin-top:0;margin-bottom:10px}a{color:#080708;text-decoration:none}a:hover{text-decoration:none;color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.back-link{display:inline-flex;margin-bottom:24px;align-items:center;color:#3B60E4;text-decoration:underline;font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem}.section{padding:60px 0}.section-title{margin-bottom:24px}.section-title.has-subtitle{margin-bottom:10px}.section-title.has-subtitle+p{margin-bottom:24px}.container{width:1190px;max-width:100%;padding-left:20px;padding-right:20px;margin:0 auto}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}nav{position:sticky;top:0}.navbar{border-bottom:1px solid #e5e5e5;padding:12px 20px;background:#ffffff;display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__logo-wrapper>img{height:64px}.navbar>.navbar__links-wrapper{display:flex;justify-content:space-between;align-items:center}.navbar>.navbar__links-wrapper a{display:inline-block}.navbar>.navbar__links-wrapper a+a{margin-left:14px}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}.text-blue{color:#3B60E4}.text-purple{color:#7765E3}input,select{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;border:1px solid #e5e5e5}input.valid,select.valid{border:1px solid #3be495}input.invalid,select.invalid{border:1px solid #e43b3b}input:focus:not(.valid):not(.invalid),select:focus:not(.valid):not(.invalid){border:1px solid #3B60E4}button{font-size:16px;font-size:1rem;line-height:24px;line-height:1.5rem;border-radius:4px;padding:12px 16px;background:white;width:100%;outline:none;cursor:pointer;border:0;background:#3B60E4;color:white}.input__wrapper+.input__wrapper{margin-top:24px}.input__checkbox-wrapper-label{display:block;position:relative;padding-left:28px;cursor:pointer}.input__checkbox-wrapper-label input[type=checkbox]{display:none}.input__checkbox-wrapper-label input[type=checkbox]:checked ~ .input__checkbox-indicator{background:#3B60E4}.input__checkbox-wrapper-label input[type=checkbox]:checked ~ .input__checkbox-indicator::after{display:block;position:absolute;left:7px;top:4px;width:3px;height:7px;border:solid #fff;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.input__checkbox-indicator{display:block;position:absolute;top:0;left:0;width:20px;height:20px;border-radius:4px;border:1px solid #e5e5e5;padding:4px}.input__checkbox-indicator::after{content:\"\";display:none}\n",""]);const s=o},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",n=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),n&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),n&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,n,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&o[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),i&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=i):c[2]=i),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function i(e){for(var i=-1,n=0;n<t.length;n++)if(t[n].identifier===e){i=n;break}return i}function n(e,n){for(var a={},o=[],s=0;s<e.length;s++){var l=e[s],d=n.base?l[0]+n.base:l[0],c=a[d]||0,u="".concat(d," ").concat(c);a[d]=c+1;var p=i(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var m=r(h,n);n.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}o.push(u)}return o}function r(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,r){var a=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=i(a[o]);t[s].references--}for(var l=n(e,r),d=0;d<a.length;d++){var c=i(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=l}}},311:e=>{var t={};e.exports=function(e,i){var n=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var r=void 0!==i.layer;r&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,r&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var a=i.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(892),t=i.n(e),n=i(760),r=i.n(n),a=i(311),o=i.n(a),s=i(192),l=i.n(s),d=i(60),c=i.n(d),u=i(865),p=i.n(u),h=i(454),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=c(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;var v={d:(e,t)=>{for(var i in t)v.o(t,i)&&!v.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},b={};v.d(b,{j:()=>f,G:()=>w});const f={required:()=>"required",string:()=>"string",email:()=>"email",minStrLen:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to minStrLen()`),""):`minStrLen:${e}`,maxStrLen:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to maxStrLen()`),""):`maxStrLen:${e}`,in:e=>Array.isArray(e)?"in:"+e.join(","):(console.error(`${e} is not an array.`),""),between:e=>Array.isArray(e)&&2==e.length?"between:"+e.join(","):(console.error(`Error creating a 'between' rule with values ${e}`),""),gt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gt()`),""):`gt:${e}`,gte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gte()`),""):`gte:${e}`,lt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lt()`),""):`lt:${e}`,lte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lte()`),""):`lte:${e}`,date:e=>`date:${e}`},g={validationMessages:{},silent:!1,invalidClass:"invalid",validClass:"valid",validationMessageColor:"red",live:!0},x={required:e=>`${e} field is required`,string:e=>`${e} must be string`,email:e=>`${e} must be an email string`,in:e=>`${e} value is invalid`,between:(e,t)=>`${e} value must be between ${t[0]} and ${t[1]}`,gt:(e,t)=>`${e} value must be greater then ${t[0]}`,gte:(e,t)=>`${e} value must be greater then or equal to ${t[0]}`,lt:(e,t)=>`${e} value must be greater then ${t[0]}`,lte:(e,t)=>`${e} value must be less then or equal to ${t[0]}`,date:e=>`${e} value is not a valid date string`,minStrLen:(e,t)=>`${e} must have at least ${t[0]} characters`,maxStrLen:(e,t)=>`${e} must not have more than ${t[0]} characters`},y={required:e=>null!=e&&""!==e,string:e=>"string"==typeof e,minStrLen:(e,t)=>"string"==typeof e&&e.length>=t[0],maxStrLen:(e,t)=>"string"==typeof e&&e.length<=t[0],email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),in:(e,t)=>t.includes(e),between:(e,t)=>{const i=Number(e);return i>=t[0]&&i<=t[1]},gt:(e,t)=>Number(e)>t[0],gte:(e,t)=>Number(e)>=t[0],lt:(e,t)=>Number(e)<t[0],lte:(e,t)=>Number(e)<=t[0],date:e=>!isNaN(Date.parse(e))};class k{constructor(e){this.field=e,this.options=void 0,this.validationRules=void 0,this.shouldReset=!1,this.isLive=!1,this.setOptions=this.setOptions.bind(this),this.setValidationRules=this.setValidationRules.bind(this),this.getFieldElement=this.getFieldElement.bind(this),this.reset=this.reset.bind(this),this.validate=this.validate.bind(this),this.bindInputListener=this.bindInputListener.bind(this),this.shouldResetOnInput=this.shouldResetOnInput.bind(this),this.live=this.live.bind(this)}setOptions(e){this.options=e,e.live&&this.live(),e.silent||this.shouldResetOnInput()}setValidationRules(e){this.validationRules=e}getValidationRules(){return this.validationRules}getFieldElement(){return this.field}getFieldName(){return this.getFieldElement().getAttribute("name")}reset(){const e=this.field.parentNode.querySelector("[data-is-validation-error]");e&&e.parentNode.removeChild(e),this.field.classList.remove(this.options.invalidClass),this.field.classList.remove(this.options.validClass)}validate(){const e=(e=>{let t=!0,i=e.getValidationRules();if(i){i=i.filter((e=>"string"==typeof e));for(const n of i){let i,r=n;if(n.includes(":")){const e=n.split(":");r=e[0],i=e[1].split(",")}const a=y[r];if(!a)throw new Error(`Validator '${r}' does not exist!`);if(t=a(e.getFieldElement().value,i),!t){e.attachValidationMessageLabel(r,i);break}}}return t})(this);if(!this.options.silent){const t=e?this.options.validClass:this.options.invalidClass;this.getFieldElement().classList.add(t)}return e}attachValidationMessageLabel(e,t){if(!this.options.silent){const i=this.getFieldName(),n=this.options.validationMessages||{};let r=i.split("_").join(" ");r=r.charAt(0).toUpperCase()+r.slice(1);const a=(n[i]?n[i][e]:void 0)||x[e](r,t),o=document.createElement("p");o.setAttribute("data-is-validation-error","1"),o.style.color=this.options.validationMessageColor,o.style.marginTop="0px",o.innerText=a,this.getFieldElement().parentNode.appendChild(o)}}bindInputListener(){this.field.addEventListener("input",(()=>{this.shouldReset&&this.reset(),this.isLive&&this.validate()}))}shouldResetOnInput(){return this.shouldReset=!0,this.bindInputListener(),this}live(){return this.isLive=!0,this.bindInputListener(),this}}const w=(e,t,i={})=>{i={...g,...i};const n=[],r=(e=>{const t=Array.from(e.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"])')),i=i=>{e.querySelectorAll(`[type=${i}]:checked`).forEach((e=>{t.push(e)}))};return i("radio"),i("checkbox"),t})(e);let a=!0;for(let e=0;e<r.length;e++){const o=new k(r[e]);o.setValidationRules(t[o.getFieldName()]),o.setOptions(i),o.reset(),o.validate()?o.getValidationRules()&&n.push(r[e]):a=!1}return{validFormFields:n,formIsValid:a}};var N=b.G;const E=(e,t)=>{if(t){const t=e.querySelector("button"),i=t.innerText;t.innerText="Form is valid! 🎉",setTimeout((()=>{t.innerText=i}),5e3)}};var $;($=b.j,[{name:"Required rule",formId:"test-required-validation",validationRules:{first_name:[$.required()]},callback:E},{name:"String rule",formId:"test-string-validation",validationRules:{first_name:[$.string()]},callback:E},{name:"Min. string len. rule",formId:"test-min-str-len-validation",validationRules:{first_name:[$.minStrLen(5)]},callback:E},{name:"Max. string len. rule",formId:"test-max-str-len-validation",validationRules:{first_name:[$.maxStrLen(5)]},callback:E},{name:"Email rule",formId:"test-email-validation",validationRules:{email:[$.email()]},callback:E},{name:"In rule",formId:"test-in-validation",validationRules:{favourite_color:[$.in(["red","green","blue"])]},callback:E},{name:"Between rule",formId:"test-between-validation",validationRules:{age:[$.between([18,24])]},callback:E},{name:"GT rule",formId:"test-gt-validation",validationRules:{number:[$.gt(50)]},callback:E},{name:"GTE rule",formId:"test-gte-validation",validationRules:{number:[$.gte(50)]},callback:E},{name:"LT rule",formId:"test-lt-validation",validationRules:{number:[$.lt(50)]},callback:E},{name:"LTE rule",formId:"test-lte-validation",validationRules:{number:[$.lte([50])]},callback:E},{name:"Date rule",formId:"test-date-validation",validationRules:{birthday:[$.date()],birthday_date:[$.date()]},callback:E}]).forEach((e=>{const t=document.querySelector(`#${e.formId}`);t.querySelector("button").onclick=function(){const i={live:t.querySelector("input[name=live]").checked},{formIsValid:n}=N(t,e.validationRules,i);e.callback(t,n)}}))})()})();