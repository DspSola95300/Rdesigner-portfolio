let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');
var indicatorOfSection;

const navbar = document.querySelector('nav');
const navBarPos = navbar.getBoundingClientRect();
const sections = document.querySelectorAll('section');

//resize new
const screenWidth ={small:0, medium:400,large:991};
let isMedium = true;
let paralaxAbout = "";

window.addEventListener('resize', resizeHandler);
resizeHandler();
console.log(screenWidth);

function resizeHandler(){
    const largeur = window.innerWidth;
    let size = null;

    for(let s in screenWidth){
        if(largeur >= screenWidth[s]){
            size = s;
        }
    }
    console.log(size);
    if(size== 'medium'){
        console.log("oui");
        isMedium = true;
    }else{
        console.log("non");
        isMedium = false;
    }
}


function updateHash(hash){

    const currentHash = window.location.hash;

    if(currentHash != hash){
        window.history.replaceState(null, null, hash);
    }
}

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
window.addEventListener('scroll', function (e){
    this.console.log(document.documentElement.scrollTop);
});

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

//function de changement au scroll
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 708 && document.documentElement.scrollTop < 1412) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "0px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('logo')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-1120px";
    }
    else if (document.documentElement.scrollTop >= 31 && document.documentElement.scrollTop < 708) {
        document.getElementsByClassName('navbar-bg')[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "-120px";
        document.getElementsByClassName('logo')[0].style.top = "-120px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-1100px";
        
    }
    else {
        document.getElementsByClassName("navbar-bg")[0].style.top = "-120px";
        document.getElementsByClassName('navbar')[0].style.top = "0px";
        document.getElementsByClassName('logo')[0].style.top = "0px";
        document.getElementsByClassName('background-mokup')[0].style.backgroundPositionX = "-1100px";
    }

    //#region nav section select au scroll
    
    sections.forEach((section,index)=>{
        const sectionPos = section.getBoundingClientRect();

        if (sectionPos.top <= navBarPos.bottom && sectionPos.bottom >= navBarPos.bottom){
            items.forEach(item=> item.classList.remove('is-active'));
            items[index].classList.add("is-active");
            const hash = items[index].getAttribute("href");
            updateHash(hash);
            items[index].classList.contains('is-active') && handleIndicator(items[index]);

        }

    });

    //#endregion
  
}

scroll(loop);

//#endregion


//#region nav indicator animation

var indicatorTarget = 0;

items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        handleIndicator(e.target)
    });

    // item.classList.contains('is-active') && handleIndicator(item);
});

    
//#endregion