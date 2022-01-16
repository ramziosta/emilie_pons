// const nav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener("click", () => {
    
//     const visiblity = nav.getAttribute("data-visible");
//     if (visiblity === "false") {
//         nav.setAttribute("data-visible", true);
//         navToggle.setAttribute("aria-expanded", true);
//     } else {
//         nav.setAttribute("data-visible", false);
//         navToggle.setAttribute("aria-expanded", false);
//     }
// })

import './books.js'

window.addEventListener('load', ()=> {
    createBookList();
});

async function createBookList(){
    const response = await fetch('./books.json');
    const json     = await response.json();
    const books    = document.getElementById('books');

    json.books.forEach((book) => {
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);
    })
}
