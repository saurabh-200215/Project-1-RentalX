function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
locomotiveAnimation()

// locomotive js smooth schrolling
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'), //main page
//   smooth: true
// });
// locomotive js smooth schrolling above


const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// function scrollreveal(){
//   const scrollRevealOption = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
//   };
  
//   ScrollReveal().reveal(".header__image img", {
//     ...scrollRevealOption,
//     origin: "right",
//   });
//   ScrollReveal().reveal(".header__content h1", {
//     ...scrollRevealOption,
//     delay: 500,
//   });
//   ScrollReveal().reveal(".header__content p", {
//     ...scrollRevealOption,
//     delay: 1000,
//   });
//   ScrollReveal().reveal(".header__links", {
//     ...scrollRevealOption,
//     delay: 1500,
//   });
  
//   ScrollReveal().reveal(".steps__card", {
//     ...scrollRevealOption,
//     interval: 500,
//   });
  
//   ScrollReveal().reveal(".service__image img", {
//     ...scrollRevealOption,
//     origin: "left",
//   });
//   ScrollReveal().reveal(".service__content .section__subheader", {
//     ...scrollRevealOption,
//     delay: 500,
//   });
//   ScrollReveal().reveal(".service__content .section__header", {
//     ...scrollRevealOption,
//     delay: 1000,
//   });
//   ScrollReveal().reveal(".service__list li", {
//     ...scrollRevealOption,
//     delay: 1500,
//     interval: 500,
//   });
  
//   ScrollReveal().reveal(".experience__card", {
//     duration: 1000,
//     interval: 500,
//   });
  
//   ScrollReveal().reveal(".download__image img", {
//     ...scrollRevealOption,
//     origin: "right",
//   });
//   ScrollReveal().reveal(".download__content .section__header", {
//     ...scrollRevealOption,
//     delay: 500,
//   });
//   ScrollReveal().reveal(".download__content p", {
//     ...scrollRevealOption,
//     delay: 1000,
//   });
//   ScrollReveal().reveal(".download__links", {
//     ...scrollRevealOption,
//     delay: 1500,
//   });
  
// }

// function imgglow(){
//   // var fullpage = document.querySelector("#wholepage")
//   // // var main =document.querySelector(".container")
//   // var cursor = document.querySelector("#cursor")
//   // // var imageDiv = document.querySelector(".fimg")

//   // fullpage.addEventListener("mousemove", function(dets){
//   // // main.addEventListener("mousemove", function(dets){
//   //     cursor.classList.add('grow');
//   //     gsap.to(cursor,{
//   //         x:dets.x,
//   //         y:dets.y,
//   //         duration:0.4,
//   //         opacity: 1,   
//   //     })
//   //     // console.log(dets);
//   })
// }
// imgglow()
document.addEventListener("mousemove", function(dets){
  // main.addEventListener("mousemove", function(dets){
      cursor.classList.add('grow');
      gsap.to("#cursor",{
          left:dets.x,
          top:dets.y,
          duration:0.4,
          // opacity: 1, 
          transform:` translate(-50%,-50%) scale(1)` 
      })
      // console.log(dets);
  })

//nav animation
function navAnimation(){
  var tl = gsap.timeline()
tl.from("nav", {
    y: -20,
    opacity: 0,
    duration: 1,
    // scrub:2,
    stagger: 0.2,
    ease: "power4.inOut"
  },"anime");
tl.from(".header__image", {
  x: 500,
  opacity: 0,
  // stagger: 0.2,
  duration: 1,
  ease: "power4.inOut"
},"anime");
tl.from(".header__content h1, .header__content ", {
  y: 30,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power4.inOut"
},"anime");

tl.from(".header__links img", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.inOut"
},"anime");


}
navAnimation()
//nav end



// gsap.to('#navbar', {
// ;
//   scrollTrigger: '#navbar', // start animation when ".box" enters the viewport
//   x: 500
// });

// gsap animation

// tl.from(".nav__links a", {
  //   y: -30,
  //   opacity: 0,
  //   stagger: 0.2,
  //   duration: 1,
  //   ease: "power4.inOut"
  // });

//schroll animation
function rent(){
  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#rent",
      scroller:"#main",
      // markers:true,
      start:"top 80%",
      end:"top 10%",
      scrub:true,
    }
  })
  tl2.from("#rent p, #rent h2 ",{
    y:20,
    opacity:0,
    stagger: 0.5,
    duration: 1,
    // scrub:true,
    ease: "power4.inOut"
  })
  tl2.from(".steps__card ",{
    y:20,
    opacity:0,
    stagger: 0.2,
    duration: 1,
    // scrub:true,
    ease: "power4.inOut"
  })
}
rent()
//above is rent animation

function servicesAnimation(){
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:"#service",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 10%",
      scrub:true,
    }
  })
  tl3.from("#bestServices",{
    y:20,
    opacity:0,
    stagger: 0.5,
    duration: 1,
    // scrub:true,
    // ease: "power4.inOut"
  })
  tl3.from(".service__image img",{
    y:300,
    opacity:0,
    duration: 1,
    stagger: 0.5,
    ease: "power1.inOut",
    // scrub:true,
    // delay:2,
    // ease: "power4.inOut",
  })
  tl3.from(".service__content h2 ",{
    y:20,
    opacity:0,
    stagger: 0.2,
    duration: 1,
    // scrub:true,
    // ease: "power4.inOut"
  })
  
  
  tl3.from(".service__list li",{
    x:100,
    opacity:0,
    stagger: 0.5,
    duration: 1,
    // scrub:true,
    // ease: "power4.inOut"
  })
}
servicesAnimation()

/// above gsap animaton of service
function rideAnimation(){
  var tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:"#ride",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top -30%",
      scrub:true,
    }
  })
  tl4.from("#ride h2,#ride p",{
    y:20,
    opacity:0,
    stagger: 0.9,
    duration: 1,
    // scrub:true,
    ease: "power4.inOut"
  })
  tl4.from("#verticalImg",{
    y:-200,
    opacity:0,
    duration: 2,
    ease: "power1.inOut",
  })
  tl4.from(".experience__card span, .experience__card h4",{
    y:20,
    opacity:0,
    duration: 3,
    stagger: 0.9,
    ease: "power4.inOut",
  })
  // tl4.from(".experience__content.experience__card",{
  //   y:20,
  //   opacity:0,
  //   stagger: 0.2,
  //   duration: 1,
  //   scrub:true,
  //   ease: "power4.inOut"
  // })

}
rideAnimation()
/// above gsap animaton of ride
function contactAnimation(){
  var tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:"#contact",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 0%",
      scrub:true,
    }
  })
  tl5.from(".download__content h2,.download__content p",{
    y:20,
    opacity:0,
    stagger: 0.8,
    duration: 1.5,
    // scrub:true,
    ease: "power4.inOut"
  })
  tl5.from(".download__image",{
    x:200,
    opacity:0,
    // stagger: 0.2,
    duration: 1,
    // scrub:true,
    ease: "none"
  })
  tl5.from(".download__links img", {
    y: 30,
    opacity: 0,
    stagger: 0.9,
    duration: 1,
    ease: "power4.inOut"
  });
  
}
contactAnimation()
/// above gsap animaton of ride
function footerAnimation(){
  var tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:"#footerDiv",
      scroller:"#main",
      // markers:true,
      start:"top 90%",
      end:"top 35%",
      scrub:true,
    }
  })
  tl5.from("#footerDiv h4, #footerDiv li",{
    y:20,
    opacity:0,
    stagger: 0.8,
    duration: 1.5,
    // scrub:true,
    ease: "power4.inOut"
  }) 
}
footerAnimation()
/// above gsap animaton of footer
// function footerLineAnimation(){
//   var tl6 = gsap.timeline({
//     scrollTrigger:{
//       trigger:"#footerLine",
//       scroller:"#main",
//       markers:true,
//       // start:"top 50%",
//       // end:"top 35%",
//       scrub:true,
//     }
//   })
//   tl6.from("#footerLine h4, #footerLine p ,#footerLine li",{
//     y:20,
//     opacity:0,
//     stagger: 0.1,
//     duration: 0.5,
//     // scrub:true,
//     ease: "power4.inOut"
//   })
// }
// footerLineAnimation()
/// above gsap animaton of footerLineAnimation()


// gsap.from(".header__image", {
//   x: 500,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 2,
//   ease: "power4.inOut"
// });

// digital effect Hover Effect with Random Characters

function digital(){
  /* Small modification from Hyperplexed youtube tutorial to allow white spaces */

  const title = document.getElementById('digital')
  // const title = document.querySelector('digital')
  const letters = "#+©-&*0KIR1L2345"
  const lettersLength = letters.length
  const regex = /\s/

  title.addEventListener("mouseover", (event) => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iterations) {
            return event.target.dataset.value[index]
          }
          // Skip white spaces
          if(regex.test(letter)) {
            return letter
          }
          return letters[Math.floor(Math.random() * lettersLength)]
        })
        .join("")
      
      if(iterations >= event.target.dataset.value.length) {
        clearInterval(interval)
      }
        
      iterations += 1 ;
    }, 100)
  })
}
digital()
//





//test animation 
// function breakTheText(){
//   var h1 = document.querySelector("h1")
//   var h1Text = h1.textContent
//   var splittedText = h1Text.split("")
//   // var halfValue = splittedText.length/2
  
//   var clutter = ""

//   splittedText.forEach(function(elem){
//   // splittedText.forEach(function(elem,idx){
//       // if(idx<halfValue){
//       //     clutter +=`<span class ="a">${elem}</span>`
//       // }else{
//       //     clutter +=`<span class ="b">${elem}</span>`
//       // }
//       clutter +=`<span class ="a">${elem}</span>`
  
//   })
//   h1.innerHTML = clutter


// }
// breakTheText()

// gsap.from("h1 .a",{
//   y:50,
//   opacity:0,
//   duration:0.2,
//   delay:0.2,
//   stagger:0.1
// })
//

// Get the custom cursor image
// const customCursor = document.getElementById('customCursor');

// // Add event listeners for the mouse movement
// document.querySelector('#light').addEventListener('mousemove', function(e) {
//   customCursor.style.display = 'block'; // Show the custom cursor
//   customCursor.style.left = e.pageX + 'px'; // Follow the mouse horizontally
//   customCursor.style.top = e.pageY + 'px';  // Follow the mouse vertically
// });

// // Hide the custom cursor when the mouse leaves the div
// document.querySelector('#light').addEventListener('mouseleave', function() {
//   customCursor.style.display = 'none'; // Hide the custom cursor when leaving the div
// });
