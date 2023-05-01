import { getItemInLocalStorage, isActive, moveToLocalStorage } from "./functions.js";

export const theme = {
    init : function() {
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

            if (themeSwitch.classList.contains("fa-moon-o")){
                themeSwitch.className = "fa fa-sun-o";
            }else{
                themeSwitch.className = "fa fa-moon-o";
            }
        }

    }
}