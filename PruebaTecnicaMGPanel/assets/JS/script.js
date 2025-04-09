const menuToggle__container = document.querySelector('.Menu-toggle__container');
const nav = document.querySelector('.nav');
const mediaQuery = window.matchMedia("(min-width: 320px) and (max-width: 1120px)");
const mediaQuery2 = window.matchMedia("(min-width: 1119px) and (max-width: 2000px)");
const menuToggle = document.querySelector('.Menu-toggle-movil');

menuToggle__container.addEventListener('click', () =>{
    nav.classList.toggle('active');
    menuToggle__container.classList.toggle('active');
})

handleScroll = () =>{
    const scrolled = window.scrollY > 50;

    if(scrolled){
        if(mediaQuery.matches) menuToggle?.classList.add("scroll-bg");
        if(mediaQuery2.matches) nav?.classList.add("scroll-bg");
    }else{
        menuToggle?.classList.remove("scroll-bg");
        nav?.classList.remove("scroll-bg");
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);