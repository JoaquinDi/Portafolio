const typed = new Typed('.typed' , {
    strings: [
        '<I class="h1_nombre1">JOAQUIN DIONISIO</I>',
        '<I class="h1_nombre2">JOAQUIN DIONISIO</I>',
        '<I class="h1_nombre3">JOAQUIN DIONISIO</I>',
        '<I class="h1_nombre4">JOAQUIN DIONISIO</I>'
    ],
    typeSpeed: 75,
    startDelay: 500,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
    loopCount: false
})

var lastSCrollTop = 0;
var header = document.getElementById('header');
var navbar = document.getElementById('inicio');
window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastSCrollTop){
        navbar.style.top = '-50px';
    } else {
        navbar.style.top = '0';
    }

    lastSCrollTop = scrollTop;
});