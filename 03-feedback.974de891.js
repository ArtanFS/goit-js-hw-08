function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function h(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=v();if(j(e))return w(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function w(e){return u=void 0,g&&r?y(e):(r=o=void 0,a)}function O(){var e=v(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return h(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea");let S={email:"",message:""};function w(){localStorage.setItem("feedback-form-state",JSON.stringify(S))}!function(e){try{const t=localStorage.getItem(e);S=null===t?S:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}("feedback-form-state"),h.value=S.email,j.value=S.message,h.addEventListener("input",e(t)((e=>{S.email=e.target.value,w()}),500)),j.addEventListener("input",e(t)((e=>{S.message=e.target.value,w()}),500)),y.addEventListener("submit",(e=>{e.preventDefault(),""!==h.value&&""!==j.value&&(localStorage.removeItem("feedback-form-state"),y.reset(),console.log(S),S.email="",S.message="")}));
//# sourceMappingURL=03-feedback.974de891.js.map
