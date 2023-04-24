"use strict";
const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
open_btn === null || open_btn === void 0 ? void 0 : open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});
close_btn === null || close_btn === void 0 ? void 0 : close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});
//# sourceMappingURL=index.js.map