const open_btn = document.querySelector<HTMLButtonElement>('.open-btn')
const close_btn = document.querySelector<HTMLButtonElement>('.close-btn')
const nav = document.querySelectorAll<HTMLBodyElement>('.nav')

open_btn?.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn?.addEventListener('click', () =>{
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

