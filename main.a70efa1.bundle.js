(()=>{var e={32:()=>{window.addEventListener("scroll",(function(){var e=document.getElementById("header");this.scrollY>=50?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}));var e=document.querySelectorAll(".services__modal"),t=document.querySelectorAll(".services__button"),s=document.querySelectorAll(".services__modal");t.forEach((function(t,s){t.addEventListener("click",(function(){e[s].classList.add("active-modal")}))})),s.forEach((function(t,s){t.addEventListener("click",(function(){e[s].classList.remove("active-modal")}))}));var c=document.querySelector(".side-project__filters"),a=document.querySelectorAll(".side-project__card");c.addEventListener("click",(function(e){var t=e.target,s=c.querySelector(".active-item"),o=t.getAttribute("data-name");t.classList.contains("side-project__item")&&(s.classList.remove("active-item"),t.classList.add("active-item"),a.forEach((function(e){var t=e.getAttribute("data-name");o==t||"all"==o?e.classList.remove("side-project__card-hide"):e.classList.add("side-project__card-hide")})))}));var o=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e=window.pageYOffset;o.forEach((function(t){var s=t.offsetTop-58,c=t.offsetHeight,a=t.getAttribute("id"),o=document.querySelector(".nav__menu a[href*=".concat(a,"]"));s<e&&e<=s+c?o.classList.add("active-link"):o.classList.remove("active-link")}))}));var r=document.getElementById("theme-button"),i=document.body,l="bx-sun",n=localStorage.getItem("selected-theme");localStorage.getItem("selected-icon"),"light"==n&&(i.classList.remove("theme-dark"),i.classList.add("theme-light"),r.classList.toggle(l)),r.addEventListener("click",(function(){r.classList.toggle(l),i.classList.contains("theme-dark")?(i.classList.remove("theme-dark"),i.classList.add("theme-light")):(i.classList.remove("theme-light"),i.classList.add("theme-dark")),localStorage.setItem("selected-theme",i.classList.contains("theme-light")?"light":"dark"),localStorage.setItem("selected-icon",r.classList.contains(l)?"bx bx-sun":"bx bx-moon")}))}},t={};function s(c){var a=t[c];if(void 0!==a)return a.exports;var o=t[c]={exports:{}};return e[c](o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var c in t)s.o(t,c)&&!s.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";s(32),console.log("Hi")})()})();