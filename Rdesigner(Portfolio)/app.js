let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

/*Au click la class toggle est ouverte*/
toggle.addEventListener('click', function(){
    body.classList.toggle('open');
})

//?
var scroll = window.requestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000/60)
    };

var elementsToShow = document.querySelectorAll('.show-and-scroll');

//paralax image au scroll

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElemmentInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    })
}

loop();

function isElemmentInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight ||
            document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.Element.clientHeight)) ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

//menu navigation manager

// voir le scroll en px
window.addEventListener('scroll', function (e){
    this.console.log(document.documentElement.scrollTop);
});

//voir navbar

//function de changement au scroll
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 659 && document.documentElement.scrollTop < 1416) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "0px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-95px";
    }
    else if (document.documentElement.scrollTop >= 31 && document.documentElement.scrollTop < 659) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "-120px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "0px";

    }
    else {
        document.getElementsByClassName("navbar-bg")[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-95px";
    }
    scroll(loop); 
    // what is scroll() ?
}
