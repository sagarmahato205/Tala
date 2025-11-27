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
        Scroller:"body",
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
        Scroller:"body",
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
            scroller:"body",
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
            scroller:"body",
            scrub:5 
        }
    })
})