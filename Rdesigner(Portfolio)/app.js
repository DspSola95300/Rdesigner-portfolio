let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

var sectionNum = 0;
var scrollNum = 0;

//#region Burger responsive
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
//#endregion

//#region paralax image au scroll

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

//#endregion

//#region Scroll

//Pour voir le scroll en px
// window.addEventListener('scroll', function (e){
//     this.console.log(document.documentElement.scrollTop);
// });

//function de changement au scroll
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 721 && document.documentElement.scrollTop < 1443) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "0px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('logo')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-150px";
    }
    else if (document.documentElement.scrollTop >= 31 && document.documentElement.scrollTop < 721) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "-120px";
        document.getElementsByClassName('logo')[0].style.top = "-120px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-100px";
        
    }
    else {
        document.getElementsByClassName("navbar-bg")[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('logo')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-150px";
    }

    
    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 721){
        scrollNum = 0;
        console.log("SCROLL a "+ scrollNum );
    }
    else if (document.documentElement.scrollTop >= 721 && document.documentElement.scrollTop < 1443){
        scrollNum = 1;
        console.log("SCROLL a "+ scrollNum );
    }
    else if (document.documentElement.scrollTop >= 1443){
        scrollNum = 2;
        console.log("SCROLL a "+ scrollNum );
    }
}

scroll(loop);

//#endregion


//#region nav indicator animation
function handleIndicator(el){
    //Boucler sur tous les items -> retirer la classe "is-active"
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    })
    //Styliser l'indicateur
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.backgroundColor = '#D19D4A';
    indicator.style.left = `${el.offsetLeft}px`;
    //Ajoute la classe is-active
    el.classList.add('is-active');
    el.style.color = '#5B83A6';
}

var indicatorTarget;

items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        handleIndicator(e.target)
        indicatorTarget = e.target;
    });
    item.addEventListener('sroll', (e) => {
        handleIndicator(e.target)
        indicatorTarget = e.target;
    });
    item.classList.contains('is-active') && handleIndicator(item);
    sectionNum = index;
});

// console.log("scroll num : "+ scrollNum + " & index : " + sectionNum);

// if (scrollNum == sectionNum){
//         handleIndicator(indicatorTarget)
// }
    
//#endregion