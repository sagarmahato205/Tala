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






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






let Menu = document.querySelector('#nav-prt2 i');
let menu_screen = document.querySelector("#full-nav");
let menu_close = document.querySelector('#close');


Menu.addEventListener("click",function(){
    menu_screen.style.top="0%";
    menu_close.style.opacity="1"
})
menu_close.addEventListener('click',function(){
     menu_screen.style.top="-100%";
})




gsap.from("#page1 h1",{
    y:90,
    duration:0.7,
    opacity:0
})
gsap.from("#page1 h2",{
    y:85,
    duration:1,
    opacity:0,
    delay:0.4
})
gsap.from("#page1 h3",{
    y:75,
    duration:1,
    opacity:0,
    delay:0.6
})
gsap.to("#page2-img",{
    scale:1,
    scrollTrigger:{
        trigger:"#page2-img img",
        scroller:"#main",
        start:"top 90%",
        end:"top 0%" ,
        scrub:3
    }
})
gsap.from("#page2 h1",{
    rotateX:"-90deg",
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #h11",
        scroller:"#main",
        start:"top 65%",
        end:"top 40%",
        scrub:2
    }
})


let slide1=document.querySelectorAll("#page6 .sliders1 h1");
slide1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-100%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:3
        }
    })
})


let slide2=document.querySelectorAll("#page6 .sliders2 h1");
slide2.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(0%)",
        duration:4,
        scrollTrigger:{
            trigger:"#page6",
            scroller:"#main",
            scrub:5 
        }
    })
})

//Image follow cursor
document.querySelector("#element1").addEventListener("mousemove",function(dets){
    document.querySelector("#element1 img").style.opacity="1";
    document.querySelector("#element1 img").style.left=`${dets.x-230}px`;
    document.querySelector("#element1 img").style.bottom=`${dets.y-50}px`;
})
//image hide on move leave
document.querySelector("#element1").addEventListener("mouseleave",function(){
    document.querySelector("#element1 img").style.opacity="0";
})


//Image2 follow cursor
document.querySelector("#element2").addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.opacity="1";
    document.querySelector("#element2 img").style.left=`${dets.x-230}px`;
    document.querySelector("#element2 img").style.bottom=`${dets.y-50}px`;
})
//image2 hide on move leave
document.querySelector("#element2").addEventListener("mouseleave",function(){
    document.querySelector("#element2 img").style.opacity="0";
})


gsap.to("#page5-content i",{
    rotate:360,
    repeat:-1,
    duration:3,
    ease:"linear"

})