(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([e.id,"body {\n  background-color: #eee;\n}\n\ninput {\n  border: none;\n}\n\nspan {\n  width: 2rem;\n}\n\n.container {\n  width: 70%;\n  margin: auto;\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n}\n\nul li {\n  border-bottom: 3px solid #eee;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 25px;\n  list-style-type: none;\n  height: 3rem;\n  width: 100%;\n}\n\n.insert {\n  width: 100%;\n  height: 100%;\n}\n\n#insert {\n  width: inherit;\n  height: inherit;\n  border: none;\n  outline: none;\n}\n\n.list-items {\n  padding-left: 0;\n}\n\n.check {\n  flex: 3 2;\n  display: flex;\n  align-items: center;\n}\n\n.check .descreption {\n  margin-left: 10px;\n}\n\n.fa-trash {\n  display: none;\n}\n\n.list-items li:hover .fa-trash {\n  display: block;\n}\n\n.list-items li:hover .fa-ellipsis-v {\n  display: none;\n}\n\n.list-items li:hover {\n  background-color: #eaeb78;\n}\n\n.checked {\n  text-decoration: line-through;\n}",""]);const a=c},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},158:()=>{const e=JSON.parse(localStorage.getItem("list"))||[],n=document.getElementById("insert"),t=document.querySelector(".list-items");function r(e,n,t){this.descreption=e,this.completed=n,this.index=t}function o(){localStorage.setItem("list",JSON.stringify(e))}function i(){for(let n=0;n<e.length;n+=1)e[n].index=n,o()}function c(){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),n.value="",n.focus(),e.forEach((e=>{const n=document.createElement("li"),r=document.createElement("div");r.className="check";const o=document.createElement("input");o.type="checkbox",o.className="checkbox";const i=document.createElement("span");i.className="descreption",i.innerHTML=e.descreption;const c=document.createElement("i");c.className="fas fa-ellipsis-v";const a=document.createElement("i");a.className="fa fa-trash",r.appendChild(o),r.appendChild(i),n.appendChild(r),n.appendChild(c),n.appendChild(a),t.appendChild(n)})),o()}function a(){const n=Array.from(document.querySelectorAll(".fa-trash"));for(let r=0;r<e.length;r+=1)n[r].addEventListener("click",(()=>{e.splice(r,1),t.removeChild(t.childNodes[r]),window.location.reload(),i(),o()}))}function s(){const n=Array.from(document.querySelectorAll(".checkbox")),t=Array.from(document.querySelectorAll(".descreption"));for(let r=0;r<e.length;r+=1)e[r].completed&&(t[r].classList.toggle("checked"),n[r].toggleAttribute("checked"))}function l(){const n=Array.from(document.querySelectorAll(".checkbox")),t=Array.from(document.querySelectorAll(".descreption"));for(let r=0;r<=e.length;r+=1)n[r].addEventListener("click",(()=>{e[r].completed=n[r].checked,t[r].classList.toggle("checked"),n[r].toggleAttribute("checked"),o()}))}document.querySelector(".insert").addEventListener("submit",(n=>{n.preventDefault(),function(){const n=new r;n.descreption=document.getElementById("insert").value,n.completed=!1,e.push(n),i()}(),c(),a(),s(),l()})),window.onload=()=>{c(),a(),s(),l()}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),s=t.n(a),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,t(158)})()})();