const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.header-links');
    const navLinks = document.querySelectorAll('.header-links li');
    menu.addEventListener('click',()=>{
        nav.classList.toggle('header-active');
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `headerLinkFade 0.5s ease forwards ${index/7+0.2}s`
            }
        });
        menu.classList.toggle('toggle');
    });

}
navSlide();