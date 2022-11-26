var github_link = document.querySelector(".github");
github_link.addEventListener("click", function() {
    location.href="https://github.com/dreazz97";
})
var linkedin_link = document.querySelector(".linkedin");
linkedin_link.addEventListener("click", function() {
    location.href="https://pt.linkedin.com/in/iuri-peniche-29337a183";
})

const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const body = document.querySelector('body');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('active');
})

const aboutclick = document.querySelector('.about-ham-link');
aboutclick.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('active');
})

const projectclick = document.querySelector('.project-ham-link');
projectclick.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('active');
})

const contactclick = document.querySelector('.contact-ham-link');
contactclick.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('active');
})