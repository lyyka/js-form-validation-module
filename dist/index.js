(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{rules:()=>i,validateForm:()=>u});const r=":",o=",",i={required:()=>"required",string:()=>"string",email:()=>"email",in:e=>Array.isArray(e)?`in${r}`+e.join(o):(console.error(`${e} is not an array.`),""),between:e=>Array.isArray(e)&&2==e.length?`between${r}`+e.join(o):(console.error(`Error creating a 'between' rule with values ${e}`),""),gt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gt()`),""):`gt${r}${e}`,gte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to gte()`),""):`gte${r}${e}`,lt:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lt()`),""):`lt${r}${e}`,lte:e=>isNaN(e)?(console.error(`Passing NaN value of '${e}' to lte()`),""):`lte${r}${e}`},a={required:e=>`${e} field is required`,string:e=>`${e} must be string`,email:e=>`${e} must be an email string`,in:e=>`${e} value is invalid`,between:(e,t)=>`${e} value must be between ${t[0]} and ${t[1]}`,gt:(e,t)=>`${e} value must be greater then ${t[0]}`,gte:(e,t)=>`${e} value must be greater then or equal to ${t[0]}`,lt:(e,t)=>`${e} value must be greater then ${t[0]}`,lte:(e,t)=>`${e} value must be less then or equal to ${t[0]}`},s={required:e=>null!=e&&""!==e,string:e=>"string"==typeof e,email:e=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()),in:(e,t)=>t.includes(e),between:(e,t)=>{const r=Number(e);return r>=t[0]&&r<=t[1]},gt:(e,t)=>Number(e)>t,gte:(e,t)=>Number(e)>=t,lt:(e,t)=>Number(e)<t,lte:(e,t)=>Number(e)<=t},n=(e,t,i={})=>{const n=e.getAttribute("name"),l=i.validationMessages||{};if(!i.silent){const t=function(e){const t=e.parentNode.querySelector("[data-is-validation-error]");t&&t.parentNode.removeChild(t)};t(e),e.classList.remove(i.invalidClass),e.addEventListener("input",(function(){t(e),e.classList.remove(i.invalidClass)}))}let u=!0,d=t[n];if(d){d=d.filter((e=>"string"==typeof e));for(const t of d){let d,c=t;if(t.includes(r)){const e=t.split(r);c=e[0],d=e[1].split(o)}const g=s[c];if(!g)throw new Error(`Validator '${c}' does not exist!`);if(u=g(e.value,d),!u){if(!i.silent){let t=n.split("_").join(" ");t=t.charAt(0).toUpperCase()+t.slice(1);const r=(l[n]?l[n][c]:void 0)||a[c](t,d),o=document.createElement("p");o.setAttribute("data-is-validation-error","1"),o.style.color=i.validationMessageColor,o.innerText=r,e.parentNode.appendChild(o)}break}}}return u},l={validationMessages:{},silent:!1,invalidClass:"invalid",validationMessageColor:"red"},u=(e,t,r={})=>{r={...r,...l};const o=[],i=(e=>{const t=Array.from(e.querySelectorAll('[name]:not([type="checkbox"]):not([type="radio"])')),r=r=>{e.querySelectorAll(`[type=${r}]:checked`).forEach((e=>{t.push(e)}))};return r("radio"),r("checkbox"),t})(e);let a=!0;for(let e=0;e<i.length;e++){const s=i[e];n(s,t,r)?Object.keys(t).includes(s.getAttribute("name"))&&o.push(s):(a=!1,r.silent||s.classList.add(r.invalidClass))}return{validFormFields:o,formIsValid:a}};module.exports.jsFormValidation=t})();