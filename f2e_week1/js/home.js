window.onload=function(){
    var menu_btn = document.getElementById('menu_btn');
    var mobile_nav = document.getElementById('mobile_nav');
    var nav_close_btn = document.getElementById('nav_close_btn');

    menu_btn.addEventListener('click', ()=>{
        mobile_nav.classList.add('--active');
    });
    nav_close_btn.addEventListener('click', ()=>{
        mobile_nav.classList.remove('--active');
    });
}