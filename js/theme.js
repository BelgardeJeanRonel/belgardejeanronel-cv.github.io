import { eventClickThemeColor, getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";


export const theme = {
    iniit : function() {
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

    }
}