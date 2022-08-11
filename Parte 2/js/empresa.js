window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

const slideVideo = document.getElementById("slideVideo");
const slides = slideVideo.getElementsByTagName("video");
var index = 0;

const slideVideoTexto = document.getElementById("slideVideoTexto");
const slidesText = slideVideoTexto.getElementsByTagName("div");
var i = 0;

const brandPoint = document.getElementById("brandPoint");
const brand = brandPoint.getElementsByTagName("div");

let againstTime = 1;
setInterval(function run() {
    if (againstTime != 400) {} else {
        againstTime = 0;

        brand[index].classList.remove("active");
        slides[index].classList.remove("active");

        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
        slidesText[i].classList.remove("active");

        i = (i + 1) % slides.length;
        slidesText[i].classList.add("active");
        brand[index].classList.add("active");
    }
    againstTime++;
}, 100);

function intro0() {
    brand[index].classList.remove("active");
    slides[index].classList.remove("active");
    index = 0;
    slides[index].classList.add("active");
    slidesText[i].classList.remove("active");
    i = 0;
    slidesText[i].classList.add("active");
    brand[index].classList.add("active");
}

function intro1() {
    brand[index].classList.remove("active");
    slides[index].classList.remove("active");
    index = 1;
    slides[index].classList.add("active");
    slidesText[i].classList.remove("active");
    i = 1;
    slidesText[i].classList.add("active");
    brand[index].classList.add("active");
}

function intro2() {
    brand[index].classList.remove("active");
    slides[index].classList.remove("active");
    index = 2;
    slides[index].classList.add("active");
    slidesText[i].classList.remove("active");
    i = 2;
    slidesText[i].classList.add("active");
    brand[index].classList.add("active");
}

function intro3() {
    brand[index].classList.remove("active");
    slides[index].classList.remove("active");
    index = 3;
    slides[index].classList.add("active");
    slidesText[i].classList.remove("active");
    i = 3;
    slidesText[i].classList.add("active");
    brand[index].classList.add("active");
}

function detailsServices1() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/vender.png";
}

function detailsServices2() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/capas.png";
}

function detailsServices3() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/pelicula.png";
}

function detailsServices4() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/acesorios.png";
}

function detailsServices5() {
    var imgdetailsServices = document.getElementById("imgdetailsServices");
    imgdetailsServices.src = "img/ef1/base.png";
}