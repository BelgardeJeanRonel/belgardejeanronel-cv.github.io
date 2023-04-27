import { eventClickThemeColor, getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";

const iconOpenMenu = document.querySelector(".icon__open");
const backgroundModal = document.querySelector(".bg-modal");
const iconCloseMenu = document.querySelector(".icon__close");
const menu = document.querySelector(".header__menu__nav")

iconOpenMenu.addEventListener("click", function() {

    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");


    iconOpenMenu.animate([
            {transform: 'scale(0)'},
            {transform: 'scale(1.5)'}
        ], {
            duration: 600
        }
    )  
})

iconCloseMenu.addEventListener("click", function() {

    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");

    iconCloseMenu.animate([
            {transform: 'scale(0)'},
            {transform: 'scale(1.5)'}
        ], {
            duration: 600
        }
    )

    menu.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})

backgroundModal.addEventListener("click", function(){
    backgroundModal.classList.toggle("show-modal");
    menu.classList.toggle("show-modal");

    menu.animate([
        { transform: 'translate(0)'},
        { transform: 'translate(200%)'},
      ], {
        duration: 300,
    })
})

const linkNavMenu = document.querySelectorAll(".header__menu__nav a");

linkNavMenu.forEach(a => {
    a.addEventListener("click", function(){
      
        backgroundModal.classList.remove("show-modal");

        menu.classList.remove("show-modal");

        menu.animate([
            { transform: 'translate(0)'},
            { transform: 'translate(200%)'},
          ], {
            duration: 300,
        })
    })
})

const ratio = .1;
const options = {
    root : null,
    rootMargin : "0px",
    threshold : ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach( entry => {
        if (entry.intersectionRatio > ratio){
            entry.target.classList.remove("reveal");
            observer.unobserve(entry.target);
        }
    })
}

document.documentElement.classList.add("reveal-loaded");
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach( r => {
    observer.observe(r)
})


const themeSwitch = document.querySelector("#theme-switch");
const body = document.querySelector("body");

themeSwitch.addEventListener("click", function (){
    body.classList.toggle("theme-dark");
   
    if (themeSwitch.classList.contains("fa-moon-o")){
        themeSwitch.className = "fa fa-sun-o";
    }else{
        themeSwitch.className = "fa fa-moon-o";
    }

    const isDarkMode = isActive(body, "theme-dark");

    moveToLocalStorage("darkMode", isDarkMode);
})

const isDarkMode = getItemInLocalStorage("darkMode");

if (isDarkMode) {
    document.body.classList.add("theme-dark");
}

const themeRed = document.querySelector("#theme-red");
eventClickThemeColor(themeRed, body, "theme-red", "theme-green", "theme-blue", "colorRed", "colorGreen", "colorBlue");
const isThemeRed = getItemInLocalStorage("colorRed");
if (isThemeRed) {
    document.body.classList.add("theme-red");
}

const themeGreen = document.querySelector("#theme-green");
eventClickThemeColor(themeGreen, body, "theme-green", "theme-red", "theme-blue", "colorGreen", "colorRed", "colorBlue");
const isThemeGreen = getItemInLocalStorage("colorGreen");
if (isThemeGreen) {
    document.body.classList.add("theme-green");
}

const themeBlue = document.querySelector("#theme-blue");
eventClickThemeColor(themeBlue, body, "theme-blue", "theme-green", "theme-red", "colorBlue", "colorGreen", "colorRed");
const isThemeBlue = getItemInLocalStorage("colorBlue");
if (isThemeBlue) {
    document.body.classList.add("theme-blue");
}


