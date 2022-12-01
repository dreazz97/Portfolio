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

//Gsap animations
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

  gsap.from("#nav-title", {
    duration: 1,
    x: -200,
    autoAlpha: 0,
    ease: "elastic.out(1, 1)",
  })


let tl = gsap.timeline();

tl.from(".c1", {
  duration: 0.75,
  y: -80,
  autoAlpha: 0,
  ease: Power2.out,
  stagger: 1.5
})

gsap.fromTo('#cursor', { autoAlpha: 0, x: -20}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});

gsap.to(".intro-title", {
    text: {
        value: "Hi, my name is Iuri"
    },
     duration: 3, delay: 1, ease: "none"
})

window.addEventListener("load", function() {
  if (window.matchMedia("(max-width: 991px)").matches) {
    console.log("vertical anim")
    gsap.from(".about-info-col", {
      scrollTrigger: {
          trigger: ".about-content",
          start: "100px 50%"
      },
      duration: 1,
      y: 120,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)"
    })
    gsap.from(".about-img-col", {
      scrollTrigger: {
          trigger: ".about-info-col",
          start: "100px 30%"
      },
      duration: 1,
      y: 120,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)"
    })
    gsap.from(".card1", {
      scrollTrigger: {
          trigger: ".cg",
          start: "200px 60%"
      },
      duration: 1,
      y: -120,
      autoAlpha: 0,
      ease: "expo.out(1, 1)"
    })
    gsap.from(".card2", {
      scrollTrigger: {
          trigger: ".cg",
          start: "200px 60%"
      },
      duration: 1,
      y: 120,
      autoAlpha: 0,
      ease: "expo.out(1, 1)"
    })
  }
  else if (window.matchMedia("(min-width: 991px)").matches) {
    console.log("horizontal anim")
    gsap.from(".nav-item", {
      duration: 0.75,
      x: 200,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)",
      stagger: {
        each: 0.75,
        amount: 0.5
      }
    })
    gsap.from(".about-info-col", {
      scrollTrigger: {
          trigger: ".about-content",
          start: "100px 50%"
      },
      duration: 1,
      x: -200,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)"
    })
  
    gsap.from(".about-img-col", {
      scrollTrigger: {
          trigger: ".about-info-col",
          start: "100px 30%"
      },
      duration: 1,
      x: 200,
      autoAlpha: 0,
      ease: "elastic.out(1, 1)"
    })
    gsap.from(".card1", {
      scrollTrigger: {
          trigger: ".cg",
          start: "200px 60%"
      },
      duration: 1,
      x: -200,
      autoAlpha: 0,
      ease: "expo.out(1, 1)"
    })
    gsap.from(".card2", {
      scrollTrigger: {
          trigger: ".cg",
          start: "200px 60%"
      },
      duration: 1,
      x: 200,
      autoAlpha: 0,
      ease: "expo.out(1, 1)"
    })
  }
})

  gsap.from(".projects_title", {
    scrollTrigger: {
        trigger: ".cg",
        start: "200px 60%"
    },
    duration: 0.75,
    y: -50,
    autoAlpha: 0,
    ease: Power2.out
  })