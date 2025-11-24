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